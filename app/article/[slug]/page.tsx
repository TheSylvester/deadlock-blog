import { getArticle } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { StrapiImage, Tag } from "@/lib/types";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }

  const { title, content, published, cover, author, tags } = article.attributes;

  const getImageUrl = (image: StrapiImage) => {
    if (!image?.data?.attributes?.url) {
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23cccccc"/%3E%3C/svg%3E';
    }
    const url = image.data.attributes.url;
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#4D4445] text-[#D3D3D3]">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/more-screenshots-of-deadlock-ex-neon-prime-v0-18s59q3hmy0d1-geeoABHqwqjwx3jYxTWDfjp5vw994u.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.3)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-[#F4EED8] hover:text-white hover:bg-[#FF4D4D]/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>
        
        <article className="max-w-4xl mx-auto bg-black/40 p-8 rounded-lg backdrop-blur-sm">
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={getImageUrl(cover)}
              alt={title || 'Article Image'}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              {author?.data && (
                <div className="flex items-center gap-2">
                  {author.data.attributes.avatar && (
                    <div className="relative w-10 h-10">
                      <Image
                        src={getImageUrl(author.data.attributes.avatar)}
                        alt={author.data.attributes.name || 'Author'}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  )}
                  <span className="text-[#F4EED8] font-medium">{author.data.attributes.name || 'Anonymous'}</span>
                </div>
              )}
              {published && (
                <>
                  <span className="text-[#D3D3D3]">•</span>
                  <time className="text-[#D3D3D3]">
                    {new Date(published).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </>
              )}
            </div>
            
            <h1 className="font-['Cinzel'] text-4xl font-bold text-[#F4EED8] mb-4">
              {title || 'Untitled Article'}
            </h1>
            
            {tags?.data?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.data.map((tag: Tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 text-sm bg-[#FF4D4D] text-white rounded-full font-medium"
                  >
                    {tag.attributes.name}
                  </span>
                ))}
              </div>
            )}
            
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-['Cinzel'] prose-headings:text-[#F4EED8]
                prose-p:text-[#D3D3D3] prose-p:leading-relaxed
                prose-a:text-[#FF4D4D] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#F4EED8]
                prose-code:text-[#FF4D4D] prose-code:bg-[#FF4D4D]/10 prose-code:rounded prose-code:px-1
                prose-pre:bg-black/60 prose-pre:border prose-pre:border-[#FF4D4D]/20
                prose-blockquote:border-l-[#FF4D4D] prose-blockquote:bg-black/40 prose-blockquote:rounded-r
                prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: content || 'No content available' }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
