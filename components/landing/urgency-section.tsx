"use client"
import { useState } from "react"

export function UrgencySection() {
  const [availableSlots] = useState(8)

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">ATTENTION : Offre limitée dans le temps</h2>
        <div className="flex flex-wrap justify-center gap-6 my-8">
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-4xl font-bold animate-pulse">{availableSlots}</p>
            <p>places restantes ce mois-ci</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-2xl font-bold">FLASH 48H</p>
            <p>Audit SEO complet offert (valeur 800€)</p>
          </div>
        </div>
        <blockquote className="max-w-2xl mx-auto border-l-4 border-primary pl-4 italic">
          "J'ai attendu 6 mois avant de contacter SHIFT... Grosse erreur ! J'ai perdu trop de clients pendant ce temps."
          <cite className="block not-italic font-semibold mt-2">- Marc D., E-commerce</cite>
        </blockquote>
      </div>
    </section>
  )
}
