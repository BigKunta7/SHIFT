import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="offres" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
            Des offres transparentes pour chaque ambition.
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Que vous débutiez ou visiez les sommets, nous avons le plan parfait pour votre croissance.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Landing Page Offer */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold">LANDING PAGE</CardTitle>
              <CardDescription>Lancement d'impact</CardDescription>
              <p className="text-4xl font-extrabold my-4">
                379€ <s className="text-xl font-normal text-red-500">750€</s>
              </p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-3 text-sm flex-grow">
                {[
                  "Page unique performante",
                  "Design orienté conversion",
                  "Copywriting IA",
                  "SEO On-Page",
                  "Livraison 7 jours",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6 bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact?offre=landing-page">Choisir cette offre</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Starter Pack */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold">PACK STARTER</CardTitle>
              <CardDescription>Présence professionnelle</CardDescription>
              <p className="text-4xl font-extrabold my-4">1,997€</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-3 text-sm flex-grow">
                {["Site vitrine 5 pages", "Design moderne", "SEO de base", "Formation 1h", "Support 30 jours"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      {f}
                    </li>
                  ),
                )}
              </ul>
              <Button asChild className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact?offre=starter">Choisir Starter</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Growth Pro Pack */}
          <Card className="border-primary border-2 relative shadow-2xl flex flex-col h-full">
            <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white">PLUS POPULAIRE</Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">GROWTH PRO</CardTitle>
              <CardDescription>Accélérateur de croissance</CardDescription>
              <p className="text-5xl font-extrabold my-4">4,997€</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="font-bold text-sm mb-3">Tout le pack Starter +</p>
              <ul className="space-y-3 text-sm flex-grow">
                {[
                  "Site 10 pages + Blog",
                  "Tunnel de conversion",
                  "Email marketing auto.",
                  "CRM intégré",
                  "SEO avancé",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-white text-lg font-bold">
                <Link href="/contact?offre=growth-pro">Choisir Growth Pro</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Pack */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold">SCALE ENTERPRISE</CardTitle>
              <CardDescription>Performance sur-mesure</CardDescription>
              <p className="text-4xl font-extrabold my-4">Sur devis</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="font-bold text-sm mb-3">Tout le pack Growth +</p>
              <ul className="space-y-3 text-sm flex-grow">
                {[
                  "Fonctionnalités sur-mesure",
                  "Marketplace/SaaS",
                  "IA & automatisation",
                  "Stratégie marketing",
                  "Garantie ROI",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6 bg-slate-800 hover:bg-slate-900 text-white">
                <Link href="/contact?offre=enterprise">Demander un devis</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
