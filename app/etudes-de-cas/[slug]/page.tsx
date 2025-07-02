import { getCaseStudies, getCaseStudyBySlug } from "@/lib/casestudies"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export async function generateStaticParams() {
  const studies = getCaseStudies()
  return studies.map((study) => ({ slug: study.slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="bg-white">
      <FadeIn>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-semibold">{study.industry}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mt-2">{study.title}</h1>
            <div className="mt-8">
              <Image
                src={study.imageUrl || "/placeholder.svg"}
                alt={study.title}
                width={1200}
                height={630}
                className="rounded-lg shadow-lg"
                query={`screenshot of the ${study.client} project`}
              />
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {study.results.map((res) => (
              <div key={res.metric} className="text-center">
                <p className="text-5xl font-bold text-primary">{res.change}</p>
                <p className="text-slate-600 mt-2">{res.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl mx-auto">
          <div className="prose lg:prose-xl">
            <h2>Le Défi</h2>
            <p>{study.challenge}</p>

            <h2>La Solution SHIFT</h2>
            <ul>
              {study.solution.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Card className="bg-primary/10 border-primary/20 my-12">
              <CardContent className="pt-6">
                <blockquote className="text-xl font-semibold text-slate-800 not-italic border-none p-0 m-0">
                  "{study.testimonial.text}"
                </blockquote>
                <cite className="block text-right mt-4 not-italic text-slate-600">— {study.testimonial.author}</cite>
              </CardContent>
            </Card>

            <h2>Les Résultats</h2>
            <p>La collaboration a abouti à des résultats spectaculaires, dépassant largement les objectifs initiaux.</p>
            {/* You could add more detailed text about results here */}
          </div>
        </div>
      </div>
    </div>
  )
}
