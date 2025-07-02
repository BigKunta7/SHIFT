"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"
import { FadeIn } from "@/components/ui/fade-in"

// The Vercel-provided Stripe integration will automatically set this environment variable.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function OffresPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (productId: string) => {
    setLoading(productId)
    try {
      const stripe = await stripePromise
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      })

      const { sessionId } = await response.json()
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error("Stripe checkout error:", error)
    } finally {
      setLoading(null)
    }
  }

  const offers = [
    {
      id: "landing-page",
      title: "LANDING PAGE",
      desc: "Lancement d'impact",
      price: "379€",
      oldPrice: "750€",
      features: [
        "Page unique performante",
        "Design orienté conversion",
        "Copywriting IA",
        "SEO On-Page",
        "Livraison 7 jours",
      ],
      buttonText: "Commander l'offre",
      variant: "accent",
    },
    {
      id: "starter",
      title: "PACK STARTER",
      desc: "Présence professionnelle",
      price: "1,997€",
      features: ["Site vitrine 5 pages", "Design moderne", "SEO de base", "Formation 1h", "Support 30 jours"],
      buttonText: "Choisir Starter",
      variant: "secondary",
    },
    {
      id: "growth-pro",
      title: "GROWTH PRO",
      desc: "Accélérateur de croissance",
      price: "4,997€",
      features: ["Site 10 pages + Blog", "Tunnel de conversion", "Email marketing auto.", "CRM intégré", "SEO avancé"],
      buttonText: "Choisir Growth Pro",
      variant: "primary",
      popular: true,
    },
    {
      id: "enterprise",
      title: "SCALE ENTERPRISE",
      desc: "Performance sur-mesure",
      price: "Sur devis",
      features: [
        "Fonctionnalités sur-mesure",
        "Marketplace/SaaS",
        "IA & automatisation",
        "Stratégie marketing",
        "Garantie ROI",
      ],
      buttonText: "Demander un devis",
      variant: "default",
    },
  ]

  return (
    <div className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
              Des offres transparentes pour chaque ambition.
            </h1>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Que vous débutiez ou visiez les sommets, nous avons le plan parfait pour votre croissance.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {offers.map((offer, index) => (
            <FadeIn key={offer.id} delay={0.2 + index * 0.1}>
              <Card
                className={`flex flex-col h-full transition-all ${offer.popular ? "border-primary border-2 shadow-2xl" : ""}`}
              >
                {offer.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white">
                    PLUS POPULAIRE
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className={`text-xl font-bold ${offer.popular ? "text-primary" : ""}`}>
                    {offer.title}
                  </CardTitle>
                  <CardDescription>{offer.desc}</CardDescription>
                  <p className="text-4xl font-extrabold my-4">
                    {offer.price}{" "}
                    {offer.oldPrice && <s className="text-xl font-normal text-red-500">{offer.oldPrice}</s>}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-3 text-sm flex-grow">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {offer.id === "enterprise" ? (
                    <Button asChild className="w-full mt-6 bg-slate-800 hover:bg-slate-900 text-white">
                      <Link href="/contact?offre=enterprise">Demander un devis</Link>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleCheckout(offer.id)}
                      disabled={loading !== null}
                      className={`w-full mt-6 text-white ${
                        offer.variant === "primary"
                          ? "bg-primary hover:bg-primary/90"
                          : offer.variant === "secondary"
                            ? "bg-secondary hover:bg-secondary/90"
                            : "bg-accent hover:bg-accent/90"
                      }`}
                    >
                      {loading === offer.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : offer.buttonText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
