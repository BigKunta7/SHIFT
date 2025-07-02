import { XCircle, Search, Smartphone, Users, Clock } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Votre site actuel vous fait <span className="text-red-600">PERDRE</span> de l'argent chaque jour
        </h2>
        <div className="grid md:grid-cols-3 gap-8 my-12">
          <div className="p-6">
            <p className="text-6xl font-bold text-primary">73%</p>
            <p className="text-lg text-gray-600">des visiteurs partent en moins de 15 secondes</p>
          </div>
          <div className="p-6">
            <p className="text-6xl font-bold text-primary">7%</p>
            <p className="text-lg text-gray-600">de conversions perdues par seconde de chargement</p>
          </div>
          <div className="p-6">
            <p className="text-6xl font-bold text-primary">85%</p>
            <p className="text-lg text-gray-600">de vos prospects visitent d'abord sur mobile</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {[
            { icon: XCircle, text: "Votre site ne convertit pas les visiteurs en clients" },
            { icon: Search, text: "Vous êtes invisible sur Google (page 2 = page 0)" },
            { icon: Smartphone, text: "Votre site est lent et pas adapté mobile" },
            { icon: Users, text: "Vos concurrents captent VOS clients potentiels" },
            { icon: Clock, text: "Vous perdez du temps à gérer un site obsolète" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-neutral-100 rounded-lg">
              <item.icon className="h-8 w-8 text-red-500 flex-shrink-0" />
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-2xl font-semibold text-secondary">
          "Et si votre site devenait votre meilleur commercial 24h/24 ?"
        </p>
      </div>
    </section>
  )
}
