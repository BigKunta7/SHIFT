"use client"

import { useActionState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { requestAudit } from "./actions"
import { CheckCircle2, AlertTriangle } from "lucide-react"

export default function AuditPage() {
  const [state, formAction, isPending] = useActionState(requestAudit, null)

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Demandez votre Audit Gratuit</CardTitle>
          <CardDescription>
            Recevez une analyse complète de votre site actuel et découvrez vos axes d'amélioration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {state?.success === false && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              <p>
                <strong>Erreur :</strong> {state.message}
              </p>
            </div>
          )}
          {state?.success === true ? (
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Demande reçue !</h3>
              <p className="text-gray-600 mt-2">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <Input name="name" placeholder="Votre nom complet" required />
              <Input name="email" type="email" placeholder="Votre email" required />
              <Input name="website" placeholder="URL de votre site web actuel (facultatif)" />
              <Input name="goal" placeholder="Quel est votre objectif principal ?" required />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isPending}
              >
                {isPending ? "Envoi en cours..." : "Recevoir mon audit"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
