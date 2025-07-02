"use server"

import { z } from "zod"

const referralSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  email: z.string().email("L'email est invalide."),
})

export async function submitReferralForm(prevState: any, formData: FormData) {
  const validatedFields = referralSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.errors.map((e) => e.message).join(" "),
    }
  }

  console.log("Nouvelle inscription au programme de parrainage :", validatedFields.data)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Merci ! Nous vous enverrons votre lien de parrainage personnalisé par email très prochainement.",
  }
}
