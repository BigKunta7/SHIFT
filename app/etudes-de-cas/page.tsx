import { getCaseStudies } from "@/lib/casestudies"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  const studies = getCaseStudies()

  return (
    <div className="bg-slate-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">Nos Histoires de Succès</h1>
            <p className="text-lg text-slate-600 mt-4">
              Nous ne parlons pas seulement de résultats, nous les créons. Découvrez comment nous avons transformé les
              entreprises de nos clients.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {studies.map((study, index) => (
            <FadeIn key={study.slug} delay={0.2 + index * 0.1}>
              <Link href={`/etudes-de-cas/${study.slug}`}>
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <CardHeader>
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={study.imageUrl || "/placeholder.svg"}
                        alt={study.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        query={`thumbnail for the ${study.client} case study`}
                      />
                    </div>
                    <CardTitle className="mt-4">{study.title}</CardTitle>
                    <CardDescription>
                      {study.client} - {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{study.excerpt}</p>
                    <div className="font-bold text-primary flex items-center">
                      Lire l'étude de cas <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
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
