import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Star } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            La Méthode SHIFT : <span className="text-accent">+156% de leads en moyenne</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">(prouvé sur 127 clients)</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              s: "S",
              title: "Stratégie Data-Driven",
              items: ["Audit complet marché + concurrence", "Persona clients définis", "Tunnel de conversion optimisé"],
            },
            {
              s: "H",
              title: "Hyper-Optimisation SEO",
              items: [
                "1ère page Google garantie sous 6 mois*",
                "Contenu optimisé mots-clés",
                "Backlinks de qualité inclus",
              ],
            },
            {
              s: "I",
              title: "Intégration IA & Automatisation",
              items: ["Chatbot intelligent 24/7", "Email marketing automatisé", "CRM connecté à votre site"],
            },
            {
              s: "F",
              title: "Formation Incluse",
              items: ["2h de formation personnalisée", "Guides vidéo pour être autonome", "Support technique 6 mois"],
            },
            {
              s: "T",
              title: "Turbo Performance",
              items: ["Chargement < 2 secondes garanti", "100% responsive tous écrans", "Sécurité renforcée SSL"],
            },
          ].map((shift, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-4">
                  <span className="text-5xl font-bold text-primary">{shift.s}</span>
                  <span className="text-2xl font-bold">{shift.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  {shift.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <Badge variant="secondary" className="text-lg p-3">
            <Star className="h-5 w-5 mr-2 text-yellow-400" />
            Google Partner Certifié
          </Badge>
          <Badge variant="secondary" className="text-lg p-3">
            <Star className="h-5 w-5 mr-2 text-yellow-400" />
            Top 1% Agences France 2024
          </Badge>
          <Badge variant="secondary" className="text-lg p-3">
            <Star className="h-5 w-5 mr-2 text-yellow-400" />
            4.9/5 ⭐ - 127 avis vérifiés
          </Badge>
        </div>
      </div>
    </section>
  )
}
