import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Votre projet de A à Z : 5 étapes claires
          </h2>
          <p className="text-lg text-gray-600 mt-2">Transparence totale pour une collaboration sereine.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
          {[
            {
              step: 1,
              title: "Audit & Stratégie",
              duration: "Jour 1-2",
              desc: "Analyse approfondie, étude de marché, définition des KPIs.",
            },
            {
              step: 2,
              title: "UX/UI Design",
              duration: "Jour 3-6",
              desc: "Wireframes, maquettes, tests utilisateurs et validation.",
            },
            {
              step: 3,
              title: "Développement",
              duration: "Jour 7-12",
              desc: "Intégration, optimisation SEO technique, tests de performance.",
            },
            {
              step: 4,
              title: "Tests & Optimisation",
              duration: "Jour 13-14",
              desc: "Tests multi-navigateurs, optimisation vitesse, vérification mobile.",
            },
            {
              step: 5,
              title: "Lancement & Formation",
              duration: "Jour 15",
              desc: "Mise en ligne, formation personnalisée, remise des accès.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex md:items-center mb-8 w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="hidden md:flex w-1/2"></div>
              <div className="hidden md:flex justify-center w-12">
                <div className="z-10 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {item.title} <span className="text-sm font-normal text-gray-500">({item.duration})</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 bg-yellow-200/50 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md max-w-2xl mx-auto">
          <p className="font-bold">⏱️ TIMELINE GARANTIE : Livraison en 14 jours ou -50% sur la facture</p>
        </div>
      </div>
    </section>
  )
}
