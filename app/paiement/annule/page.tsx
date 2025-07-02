import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function AnnulePage() {
  return (
    <div className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <AlertTriangle className="h-24 w-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">Paiement annulé</h1>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Votre paiement a été annulé. Si vous avez rencontré un problème, n'hésitez pas à nous contacter.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <Link href="/offres">Voir les offres</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
