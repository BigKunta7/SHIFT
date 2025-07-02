// Dummy data for case studies. In a real app, this would come from a CMS.

export interface CaseStudy {
  slug: string
  client: string
  industry: string
  title: string
  excerpt: string
  keyResult: string
  challenge: string
  solution: string[]
  results: { metric: string; value: string; change: string }[]
  testimonial: { text: string; author: string }
  imageUrl: string
  logoUrl: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: "techstart-saas",
    client: "TechStart SAAS",
    industry: "Logiciel B2B",
    title: "Comment TechStart a multiplié par 10 ses demandes de démo en 6 mois",
    excerpt: "De l'obscurité à la domination du marché, découvrez la transformation digitale de TechStart.",
    keyResult: "+900% de démos qualifiées",
    challenge:
      "TechStart avait un produit révolutionnaire mais un site web qui ne communiquait pas sa valeur. Le trafic était faible, et les rares visiteurs ne convertissaient pas en demandes de démo.",
    solution: [
      "Refonte complète du site avec un parcours utilisateur centré sur la conversion.",
      "Création d'un tunnel de vente avec un lead magnet (livre blanc) pour capturer les emails.",
      "Développement d'un blog à haute valeur ajoutée pour le SEO et l'autorité.",
      "Intégration d'un calculateur de ROI interactif pour prouver la valeur du produit.",
    ],
    results: [
      { metric: "Démos qualifiées / mois", value: "156", change: "+900%" },
      { metric: "Trafic organique", value: "25,000 / mois", change: "+1200%" },
      { metric: "Coût d'acquisition client", value: "89€", change: "-65%" },
    ],
    testimonial: {
      text: "SHIFT n'a pas juste créé un site, ils ont bâti notre machine à croissance. Les résultats parlent d'eux-mêmes. C'est le meilleur investissement que nous ayons fait.",
      author: "CEO, TechStart SAAS",
    },
    imageUrl: "/images/case-studies/techstart-dashboard.png",
    logoUrl: "/images/case-studies/techstart-logo.svg",
  },
  {
    slug: "le-gourmet-restaurant",
    client: "Restaurant Le Gourmet",
    industry: "Restauration",
    title: "Le Gourmet : +34% de CA grâce à l'automatisation des réservations",
    excerpt: "Comment un restaurant traditionnel a rempli ses tables en digitalisant son expérience client.",
    keyResult: "+34% de Chiffre d'Affaires",
    challenge:
      "Le Gourmet dépendait entièrement des appels téléphoniques pour les réservations, ce qui était chronophage et menait à des erreurs. Leur présence en ligne était quasi inexistante.",
    solution: [
      "Création d'un site vitrine immersif avec des photos et vidéos professionnelles.",
      "Intégration d'un système de réservation en ligne simple et efficace, synchronisé avec leur agenda.",
      "Mise en place d'une stratégie de SEO local pour apparaître en tête des recherches 'restaurant + ville'.",
      "Lancement d'une newsletter mensuelle pour fidéliser la clientèle avec des offres exclusives.",
    ],
    results: [
      { metric: "Réservations en ligne", value: "89%", change: "N/A" },
      { metric: "Taux de remplissage", value: "95%", change: "+40%" },
      { metric: "Chiffre d'affaires", value: "N/A", change: "+34% en 4 mois" },
    ],
    testimonial: {
      text: "Je peux enfin me concentrer sur ma cuisine ! SHIFT a tout simplifié. Mon restaurant est plein presque tous les soirs.",
      author: "Chef Propriétaire, Le Gourmet",
    },
    imageUrl: "/images/case-studies/le-gourmet-website.png",
    logoUrl: "/images/case-studies/le-gourmet-logo.svg",
  },
]

export function getCaseStudies() {
  return caseStudies
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
