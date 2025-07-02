import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Handshake } from "lucide-react"

const teamMembers = [
  {
    name: "Alexandre Dubois",
    role: "Fondateur & Stratège en Chef",
    image: "/images/team/alexandre-dubois.jpg",
    query: "professional headshot of a male founder, 30s, confident smile",
    bio: "Passionné par la fusion de la technologie et du marketing, Alexandre a fondé SHIFT pour aider les entreprises à réaliser leur plein potentiel en ligne.",
  },
  {
    name: "Léa Martin",
    role: "Directrice Artistique & UX Designer",
    image: "/images/team/lea-martin.jpg",
    query: "professional headshot of a female art director, creative and friendly",
    bio: "Avec un œil pour l'esthétique et une obsession pour l'expérience utilisateur, Léa transforme des idées complexes en interfaces intuitives et magnifiques.",
  },
  {
    name: "Julien Moreau",
    role: "Développeur Principal & Expert Performance",
    image: "/images/team/julien-moreau.jpg",
    query: "professional headshot of a male lead developer, focused and intelligent",
    bio: "Julien est le magicien technique qui garantit que chaque site est non seulement rapide comme l'éclair, mais aussi robuste et sécurisé.",
  },
]

export default function AProposPage() {
  return (
    <div className="bg-white">
      {/* Section Mission */}
      <FadeIn>
        <div className="py-20 md:py-32 text-center bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">
              Nous ne créons pas de sites web. Nous construisons des moteurs de croissance.
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
              SHIFT est née d'une conviction simple : un site web doit être votre meilleur commercial, travaillant 24/7
              pour attirer, engager et convertir vos clients idéaux. Notre mission est de fusionner un design de classe
              mondiale avec une stratégie marketing implacable pour générer des résultats mesurables.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Section Valeurs */}
      <FadeIn delay={0.2}>
        <div className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Obsession du Résultat</h3>
                <p className="text-slate-600 mt-2">
                  Chaque pixel, chaque ligne de code est justifié par un seul objectif : votre croissance.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Transparence Radicale</h3>
                <p className="text-slate-600 mt-2">
                  Vous savez toujours où nous en sommes, pourquoi nous le faisons et quels sont les résultats.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Partenariat à Long Terme</h3>
                <p className="text-slate-600 mt-2">
                  Votre succès est notre succès. Nous sommes plus qu'un prestataire, nous sommes votre équipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section Équipe */}
      <FadeIn delay={0.4}>
        <div className="py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">L'équipe derrière votre succès</h2>
              <p className="text-lg text-slate-600 mt-4">
                Une synergie d'experts dédiés à l'excellence et à votre réussite.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Portrait de ${member.name}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 shadow-lg"
                    query={member.query}
                  />
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-slate-600 mt-2 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.6}>
        <div className="py-20 md:py-32 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Prêt à construire l'avenir de votre entreprise ?
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              Discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Planifier un appel stratégique</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
