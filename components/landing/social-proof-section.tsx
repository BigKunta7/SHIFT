import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { Video } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function SocialProofSection() {
  return (
    <section id="resultats" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Ils ont fait confiance à SHIFT : <span className="text-accent">Résultats garantis</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sarah Martin, Coach Business</CardTitle>
              <CardDescription>ROI : +400% en 6 mois</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold">AVANT SHIFT</h4>
                <p className="text-red-600">❌ 2 leads/mois</p>
                <p className="text-red-600">❌ Taux conversion : 0.8%</p>
              </div>
              <div>
                <h4 className="font-bold">APRÈS SHIFT (6 mois)</h4>
                <p className="text-accent">✅ 47 leads/mois qualifiés</p>
                <p className="text-accent">✅ Taux conversion : 4.2%</p>
                <p className="text-accent">✅ CA : 3k€ → 15k€/mois</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>TechStart SAAS</CardTitle>
              <CardDescription>+890,000€ de CA sur 12 mois</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold">AVANT</h4>
                <p className="text-red-600">❌ Site vitrine basique</p>
              </div>
              <div>
                <h4 className="font-bold">APRÈS</h4>
                <p className="text-accent">✅ 156 démos planifiées/mois</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Restaurant Le Gourmet</CardTitle>
              <CardDescription>+34% de CA en 4 mois</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold">AVANT</h4>
                <p className="text-red-600">❌ Réservations téléphone uniquement</p>
              </div>
              <div>
                <h4 className="font-bold">APRÈS</h4>
                <p className="text-accent">✅ 89% réservations en ligne automatisées</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div id="temoignages" className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-8">Témoignages Vidéo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: "/images/testimonials/testimonial-1.jpg",
                query: "professional-looking man in an office setting, thumbnail for a video testimonial",
              },
              {
                src: "/images/testimonials/testimonial-2.jpg",
                query: "professional-looking woman in a creative studio, thumbnail for a video testimonial",
              },
              {
                src: "/images/testimonials/testimonial-3.jpg",
                query: "owner of a small business in their shop, thumbnail for a video testimonial",
              },
            ].map((testimonial, i) => (
              <div key={i} className="relative group cursor-pointer">
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={`Témoignage vidéo ${i + 1}`}
                  width={400}
                  height={225}
                  className="rounded-lg shadow-lg w-full"
                  query={testimonial.query}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                  <Video className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <Button asChild variant="link" className="text-lg text-primary">
            <Link href="/resultats">Découvrir plus de cas clients →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
