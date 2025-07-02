import { getPosts, getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/ui/fade-in"

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <article className="prose lg:prose-xl mx-auto">
            <h1>{post.title}</h1>
            <p className="text-slate-500 text-base">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </FadeIn>
      </div>
    </div>
  )
}
