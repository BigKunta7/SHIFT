import { getPosts } from "@/lib/posts"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/fade-in"

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">Le Blog SHIFT</h1>
            <p className="text-lg text-slate-600 mt-4">
              Stratégies, insights et conseils pour transformer votre présence en ligne.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={0.2 + index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
