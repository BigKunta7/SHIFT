"use client"

import { useActionState, Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Loader2, CheckCircle2, AlertTriangle } from "lucide-react"
import { submitContactForm } from "./actions"
import { FadeIn } from "@/components/ui/fade-in"

function ContactForm() {
  const searchParams = useSearchParams()
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [subject, setSubject] = useState("")

  useEffect(() => {
    const offre = searchParams.get("offre")
    if (offre) {
      setSubject(`Demande d'information pour l'offre : ${offre.replace("-", " ")}`)
    }
  }, [searchParams])

  return (
    <FadeIn>
      <h2 className="text-2xl font-bold mb-4">Envoyez-nous un message</h2>
      <Card className="p-8">
        {state?.success === true ? (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold">Message envoyé !</h3>
            <p className="text-slate-600 mt-2">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            {state?.success === false && (
              <div className="p-3 bg-red-100 text-red-800 rounded-md flex items-center gap-2 text-sm">
                <AlertTriangle className="h-5 w-5" />
                <p>{state.message}</p>
              </div>
            )}
            <Input name="name" placeholder="Votre nom complet" required />
            <Input name="email" type="email" placeholder="Votre email" required />
            <Input name="subject" placeholder="Sujet" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <Textarea name="message" placeholder="Votre message..." rows={5} required />
            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Envoyer
            </Button>
          </form>
        )}
      </Card>
    </FadeIn>
  )
}

export default function ContactPage() {
  return (
    <div className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">Contactez-nous</h1>
            <p className="text-lg text-slate-600 mt-4">Une question ? Un projet ? Nous sommes là pour vous aider.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-16">
          <Suspense fallback={<div>Chargement...</div>}>
            <ContactForm />
          </Suspense>
          <FadeIn delay={0.2}>
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:+5900690151142" className="text-lg hover:text-primary">
                      +590 0690 15 11 42
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:contact@shift.fr" className="text-lg hover:text-primary">
                      contact@shift.fr
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Prendre un rendez-vous</h2>
                <p className="text-slate-600 mb-4">
                  Planifiez directement un appel de 30 minutes avec un de nos experts pour discuter de votre projet.
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Planifier un appel
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
