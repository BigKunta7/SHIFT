import { FadeIn } from "@/components/ui/fade-in"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const shiftMethod = [
  {
    s: "S",
    title: "Stratégie Data-Driven",
    desc: "Nous ne laissons rien au hasard. Chaque décision est basée sur une analyse approfondie de votre marché, de vos concurrents et de vos clients cibles pour construire un tunnel de conversion qui performe.",
    items: ["Audit complet de votre marché", "Définition précise des personas", "Optimisation du parcours client"],
    imageUrl: "/images/method/strategy.png",
    imageQuery: "abstract diagram of a marketing funnel and business strategy",
  },
  {
    s: "H",
    title: "Hyper-Optimisation SEO",
    desc: "Être beau ne suffit pas, il faut être vu. Nous intégrons les meilleures pratiques SEO dès la première ligne de code pour garantir une visibilité maximale et durable sur Google.",
    items: [
      "Garantie 1ère page Google sous 6 mois*",
      "Optimisation sémantique du contenu",
      "Stratégie de backlinks de qualité",
    ],
    imageUrl: "/images/method/seo.png",
    imageQuery: "graph showing search engine ranking improvement over time",
  },
  {
    s: "I",
    title: "Intégration IA & Automatisation",
    desc: "Votre site travaille pour vous, 24/7. Nous intégrons des outils d'intelligence artificielle et d'automatisation pour capturer des leads, nourrir vos prospects et simplifier votre gestion.",
    items: ["Chatbot intelligent 24/7", "Séquences d'email marketing automatisées", "Connexion native à votre CRM"],
    imageUrl: "/images/method/automation.png",
    imageQuery: "visual representation of an AI chatbot and marketing automation workflow",
  },
  {
    s: "F",
    title: "Formation & Autonomie",
    desc: "Votre site vous appartient. Nous vous formons pour que vous soyez 100% autonome dans la gestion de votre contenu. Fini la dépendance à une agence pour changer une virgule.",
    items: [
      "2h de formation personnalisée en visio",
      "Accès à une bibliothèque de guides vidéo",
      "Support technique réactif pendant 6 mois",
    ],
    imageUrl: "/images/method/training.png",
    imageQuery: "screenshot of a professional video conference call with screen sharing",
  },
  {
    s: "T",
    title: "Turbo Performance",
    desc: "Chaque milliseconde compte. Nous optimisons chaque image, chaque script pour garantir un temps de chargement inférieur à 2 secondes et une expérience utilisateur fluide sur tous les appareils.",
    items: [
      "Score PageSpeed Insights > 90 garanti",
      "100% responsive sur tous les écrans",
      "Sécurité renforcée (SSL, anti-malware)",
    ],
    imageUrl: "/images/method/performance.png",
    imageQuery: "website performance gauge showing a score of 98/100",
  },
]

export default function MethodePage() {
  return (
    <div className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">La Méthode S.H.I.F.T.</h1>
            <p className="text-lg text-slate-600 mt-4">
              Notre formule unique en 5 étapes, conçue pour transformer votre présence en ligne en un puissant moteur de
              croissance.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-24">
          {shiftMethod.map((item, index) => (
            <FadeIn key={item.s} delay={index * 0.1}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className="text-8xl font-bold text-primary/20">{item.s}</span>
                  <h2 className="text-3xl font-bold mt-2">{item.title}</h2>
                  <p className="mt-4 text-slate-600">{item.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {item.items.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-80 bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    width={500}
                    height={320}
                    className="w-full h-full object-cover"
                    query={item.imageQuery}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
