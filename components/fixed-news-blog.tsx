'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, RssIcon, Bell, Share2, ArrowRight } from 'lucide-react'
import { Article } from "@/lib/types"

interface FixedNewsBlogProps {
  articles?: Article[] | null;
}

export function FixedNewsBlog({ articles }: FixedNewsBlogProps) {
  const articleList = articles || [];
  const featuredArticle = articleList[0];
  const sideArticles = articleList.slice(1, 5);
  const latestArticles = articleList.slice(5, 8);

  const getImageUrl = (image: any) => {
    if (!image?.data?.attributes?.url) {
      // Return a data URL for a simple gray placeholder
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23cccccc"/%3E%3C/svg%3E';
    }
    const url = image.data.attributes.url;
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#4D4445] text-custom-light-gray">
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/more-screenshots-of-deadlock-ex-neon-prime-v0-18s59q3hmy0d1-geeoABHqwqjwx3jYxTWDfjp5vw994u.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.3)',
        }}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BagwmJp1L6PzTsKlGudjMfeIOY2m0.png"
                  alt="Deadlock Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-cinzel text-custom-cream text-2xl font-bold">DEADLOCK</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-custom-light-gray hover:text-custom-gold transition-colors font-semibold">News</Link>
                <Link href="#" className="text-custom-light-gray hover:text-custom-gold transition-colors font-semibold">Patch Notes</Link>
                <Link href="#" className="text-custom-light-gray hover:text-custom-gold transition-colors font-semibold">Heroes</Link>
                <Link href="#" className="text-custom-light-gray hover:text-custom-gold transition-colors font-semibold">Community</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-custom-light-gray hover:text-custom-neon-green hover:bg-custom-dark-gray/20">
                <RssIcon className="h-5 w-5" />
                <span className="sr-only">RSS Feed</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-custom-light-gray hover:text-custom-neon-green hover:bg-custom-dark-gray/20">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Full-width Hero Banner with Side Articles */}
        <section className="relative bg-black/30">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticle ? (
                <div className="lg:col-span-2 relative">
                  <Image
                    src={getImageUrl(featuredArticle?.attributes?.cover)}
                    alt={featuredArticle?.attributes?.title || 'Featured Article'}
                    width={800}
                    height={450}
                    className="w-full h-auto rounded-lg border border-[#F4EED8]/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg border border-[#F4EED8]/20" />
                  <div className="absolute bottom-0 left-0 p-6">
                    {featuredArticle?.attributes?.tags?.data?.[0] && (
                      <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-custom-red text-white rounded">
                        {featuredArticle.attributes.tags.data[0].attributes.name}
                      </div>
                    )}
                    <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-custom-cream mb-2">
                      {featuredArticle?.attributes?.title || 'Welcome to Deadlock News'}
                    </h1>
                    <p className="text-custom-light-gray max-w-2xl mb-4">
                      {featuredArticle?.attributes?.excerpt || 'Stay tuned for the latest updates and news about Deadlock.'}
                    </p>
                    {featuredArticle?.attributes?.slug ? (
                      <Link href={`/article/${featuredArticle.attributes.slug}`}>
                        <Button className="bg-custom-neon-green text-black hover:bg-custom-gold">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="bg-custom-neon-green text-black hover:bg-custom-gold" disabled>
                        Coming Soon
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="lg:col-span-2 relative">
                  <div className="w-full h-[450px] rounded-lg border border-[#F4EED8]/20 bg-black/50 flex items-center justify-center">
                    <p className="text-custom-light-gray">No featured article available</p>
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                {sideArticles.length > 0 ? (
                  sideArticles.map((article) => (
                    <Link key={article.id} href={`/article/${article.attributes.slug}`}>
                      <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors rounded-md">
                        <CardHeader className="flex flex-row items-center space-x-4 p-4">
                          <Image
                            src={getImageUrl(article.attributes.cover)}
                            alt={article.attributes.title || 'Article thumbnail'}
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <CardTitle className="font-playfair text-custom-cream text-lg">
                              {article.attributes.title || 'Untitled Article'}
                            </CardTitle>
                            <CardDescription className="text-custom-light-gray">
                              {article.attributes.excerpt || 'No description available'}
                            </CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))
                ) : (
                  <Card className="bg-black/30 border-[#F4EED8]/20 rounded-md">
                    <CardHeader className="p-4">
                      <CardTitle className="text-custom-cream">More articles coming soon</CardTitle>
                      <CardDescription className="text-custom-light-gray">
                        Stay tuned for updates
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section with Background */}
        <section className="relative bg-black/30 py-4">
          <div className="container mx-auto px-4">
            {/* Latest News Articles */}
            <section className="mb-12">
              <h2 className="font-cinzel text-2xl font-bold text-custom-cream mb-6 pl-1">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.length > 0 ? (
                  latestArticles.map((article) => (
                    <Card key={article.id} className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={getImageUrl(article.attributes.cover)}
                          alt={article.attributes.title || 'Article thumbnail'}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <CardTitle className="font-playfair text-custom-cream mb-2">
                            {article.attributes.title || 'Untitled Article'}
                          </CardTitle>
                          <CardDescription className="text-custom-light-gray mb-4">
                            {article.attributes.excerpt || 'No description available'}
                          </CardDescription>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-custom-light-gray">
                              {article.attributes.published 
                                ? new Date(article.attributes.published).toLocaleDateString()
                                : 'Date not available'}
                            </span>
                            <Link href={`/article/${article.attributes.slug}`}>
                              <Button variant="ghost" size="sm" className="text-custom-neon-green hover:text-custom-gold">
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-8">
                    <p className="text-custom-light-gray">No articles available yet. Check back soon!</p>
                  </div>
                )}
              </div>
            </section>

            {/* Matchmaking Schedule */}
            <section className="mb-12">
              <h2 className="font-cinzel text-3xl font-bold text-custom-cream mb-6">Matchmaking Schedule</h2>
              <Card className="bg-black/30 border-[#F4EED8]/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-playfair text-xl text-custom-cream mb-2">Playtest Schedule</h3>
                      <p className="text-custom-light-gray mb-2">
                        <span className="font-semibold">Monday - Thursday:</span> 14:00 - 02:00 Local Time
                      </p>
                      <p className="text-custom-light-gray">
                        <span className="font-semibold">Friday - Sunday:</span> 10:00 - 02:00 Local Time
                      </p>
                    </div>
                    <div>
                      <p className="text-custom-neon-green font-semibold mb-2">STATUS: Matchmaking open until 02:00</p>
                      <p className="text-custom-light-gray">Region: EUROPE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Patch Notes Preview */}
            <section className="mb-12">
              <h2 className="font-cinzel text-3xl font-bold text-custom-cream mb-6">Latest Patch Notes</h2>
              <Card className="bg-black/30 border-[#F4EED8]/20">
                <CardHeader>
                  <CardTitle className="font-playfair text-custom-cream">Patch 1.23 Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Grey Talon: New hero added to the roster</li>
                    <li>Abrams: Reduced cooldown on ultimate ability</li>
                    <li>Dynamo: Increased movement speed</li>
                    <li>General: Improved matchmaking algorithm</li>
                  </ul>
                  <Button className="mt-4 bg-custom-neon-green text-black hover:bg-custom-gold">
                    Read Full Patch Notes
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F4EED8]/20 mt-0 bg-black/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-custom-light-gray"> 2024 Deadlock. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-custom-light-gray hover:text-custom-gold transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-custom-light-gray hover:text-custom-gold transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-custom-light-gray hover:text-custom-gold transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}