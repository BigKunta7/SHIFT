import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Phone, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Ne laissez plus vos concurrents vous voler vos clients
        </h2>
        <p className="text-lg text-gray-600 mt-4 mb-8">
          Passez à l'action maintenant. Votre futur business vous remerciera.
        </p>
        <Card className="p-8 bg-neutral-50">
          <form action="/audit-gratuit" className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Prénom" className="p-6" />
              <Input name="email" type="email" placeholder="Email" className="p-6" />
            </div>
            <Input name="website" placeholder="URL de votre site web actuel" className="p-6" />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold py-8"
            >
              JE VEUX MON AUDIT GRATUIT MAINTENANT
            </Button>
          </form>
        </Card>
        <div className="mt-8">
          <p className="mb-4">ou</p>
          <Button
            asChild
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary bg-transparent"
          >
            <Link href="/guide-7-erreurs">Télécharger le guide : "7 erreurs qui tuent votre site"</Link>
          </Button>
        </div>
        <div className="mt-12">
          <p className="text-lg font-semibold">Besoin de parler à un expert ?</p>
          <a
            href="tel:+5900690151142"
            className="text-2xl font-bold text-secondary hover:underline flex items-center justify-center gap-2"
          >
            <Phone /> +590 0690 15 11 42
          </a>
          <p className="text-sm text-gray-500">Réponse garantie sous 2h ouvrées</p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <ShieldCheck className="h-8 w-8 text-gray-400" />
          <p className="text-gray-500">Aucun engagement, audit 100% gratuit</p>
        </div>
      </div>
    </section>
  )
}
