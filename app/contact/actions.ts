"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  email: z.string().email("L'email est invalide."),
  subject: z.string().optional(),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.errors.map((e) => e.message).join(" "),
    }
  }

  // Ici, vous intégreriez l'envoi à votre CRM ou par email.
  console.log("Nouveau message de contact :", validatedFields.data)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.",
  }
}
