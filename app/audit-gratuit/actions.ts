"use server"

import { z } from "zod"

const auditSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  email: z.string().email("L'email est invalide."),
  website: z.string().url("L'URL du site web est invalide.").optional().or(z.literal("")),
  goal: z.string().min(10, "Veuillez décrire votre objectif (10 caractères min)."),
})

export async function requestAudit(prevState: any, formData: FormData) {
  const validatedFields = auditSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    website: formData.get("website"),
    goal: formData.get("goal"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.errors.map((e) => e.message).join(" "),
    }
  }

  // Ici, vous intégreriez l'envoi à votre CRM, base de données, ou par email.
  // Exemple : await saveToCrm(validatedFields.data)
  console.log("Nouvelle demande d'audit :", validatedFields.data)

  // Simulation d'un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Merci ! Nous avons bien reçu votre demande. Notre équipe vous contactera sous 48h.",
  }
}
