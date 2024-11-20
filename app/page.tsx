import { FixedNewsBlog } from "@/components/fixed-news-blog"
import { getArticles } from "@/lib/api"

export default async function Home() {
  const articles = await getArticles();
  
  return (
    <main>
      <FixedNewsBlog articles={articles.data} />
    </main>
  )
}