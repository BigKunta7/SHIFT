import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export function ReferralSection() {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Obtenez votre Landing Page <span className="text-primary">100% GRATUITEMENT</span> !
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Nous croyons au pouvoir du bouche-à-oreille. C'est pourquoi nous avons créé une offre de parrainage
          imbattable.
        </p>
        <div className="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-primary">
          <h3 className="text-2xl font-bold text-secondary">Comment ça marche ?</h3>
          <div className="flex items-center justify-center gap-4 my-4 flex-wrap">
            <Users className="h-12 w-12 text-primary" />
            <span className="text-4xl font-bold text-gray-800">+</span>
            <Users className="h-12 w-12 text-primary" />
            <span className="text-4xl font-bold text-gray-800">+</span>
            <Users className="h-12 w-12 text-primary" />
            <span className="text-4xl font-bold text-gray-800">+</span>
            <Users className="h-12 w-12 text-primary" />
          </div>
          <p className="text-xl font-semibold">
            Parrainez <span className="text-primary font-bold">4 personnes</span> qui commandent un service chez SHIFT.
          </p>
          <p className="mt-4 text-lg">
            Une fois leurs projets payés, nous vous <span className="font-bold">remboursons intégralement</span> le prix
            de votre propre landing page (offre à 379€).
          </p>
          <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-white">
            <Link href="/parrainage">En savoir plus sur le parrainage</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
