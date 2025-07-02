import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Vos questions, nos réponses</h2>
          <p className="text-lg text-gray-600 mt-2">Levons toutes les objections.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              q: "Combien de temps pour voir les premiers résultats ?",
              a: "Vous verrez un impact immédiat sur l'image de votre marque dès la mise en ligne ! Pour le SEO, les premiers résultats significatifs apparaissent généralement sous 30 à 60 jours.",
            },
            {
              q: "Que se passe-t-il si je ne suis pas satisfait ?",
              a: "Votre satisfaction est notre priorité. Nous offrons une garantie satisfait ou remboursé de 30 jours et des modifications illimitées pendant la phase de développement pour que le résultat soit parfait.",
            },
            {
              q: "Vais-je dépendre de vous après la livraison ?",
              a: "Absolument pas. Nous vous fournissons une formation complète et des guides vidéo pour que vous soyez 100% autonome dans la gestion de votre site au quotidien.",
            },
            {
              q: "Mon secteur est-il compatible avec vos méthodes ?",
              a: "Notre méthode S.H.I.F.T. a été testée et approuvée dans plus de 50 secteurs différents. L'audit gratuit nous permettra de confirmer la parfaite adéquation avec votre business.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
