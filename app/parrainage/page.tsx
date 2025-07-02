"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/fade-in"
import { Users, Gift, Repeat, Loader2, CheckCircle2, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { submitReferralForm } from "./actions"

function ReferralForm() {
  const [state, formAction, isPending] = useActionState(submitReferralForm, null)

  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <CardHeader>
        <CardTitle>Prêt à commencer ?</CardTitle>
      </CardHeader>
      <CardContent>
        {state?.success === true ? (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold">Inscription réussie !</h3>
            <p className="text-slate-600 mt-2">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <p className="text-slate-600 mb-4">
              Inscrivez-vous pour obtenir votre lien de parrainage personnalisé et commencez à partager.
            </p>
            {state?.success === false && (
              <div className="p-3 bg-red-100 text-red-800 rounded-md flex items-center gap-2 text-sm">
                <AlertTriangle className="h-5 w-5" />
                <p>{state.message}</p>
              </div>
            )}
            <Input name="name" placeholder="Votre nom complet" required />
            <Input name="email" type="email" placeholder="Votre email" required />
            <Button type="submit" className="w-full" size="lg" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Obtenir mon lien de parrainage
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

export default function ParrainagePage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">
              Votre Landing Page, 100% Offerte.
            </h1>
            <p className="text-lg text-slate-600 mt-4">
              Partagez l'excellence SHIFT avec votre réseau et nous vous récompensons. C'est aussi simple que ça.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
            <div className="space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Parrainez</h3>
              <p className="text-slate-600">Recommandez nos services à 4 entrepreneurs de votre réseau.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Ils commandent</h3>
              <p className="text-slate-600">Vos filleuls nous font confiance pour leur projet web.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Repeat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Soyez remboursé</h3>
              <p className="text-slate-600">Nous vous remboursons intégralement votre Landing Page à 379€.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <ReferralForm />
        </FadeIn>
      </div>
    </div>
  )
}
