import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function SuccesPage() {
  return (
    <div className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <CheckCircle2 className="h-24 w-24 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">Paiement réussi !</h1>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Merci pour votre confiance. Nous avons bien reçu votre paiement. Notre équipe va prendre contact avec vous
            dans les plus brefs délais pour démarrer votre projet.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  )
}
