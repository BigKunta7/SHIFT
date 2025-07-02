// This is a dummy data file to simulate a CMS.
// In a real application, you would fetch this data from a headless CMS like Sanity, Contentful, or Strapi.

const posts = [
  {
    slug: "7-erreurs-qui-tuent-votre-site",
    title: "Les 7 erreurs qui tuent la conversion de votre site web",
    date: "3 Juillet 2025",
    excerpt:
      "Votre site est magnifique, mais il ne convertit pas ? Découvrez les 7 erreurs fatales que commettent 90% des entrepreneurs...",
    content: `
      <h2>Erreur n°1 : Un message principal confus</h2>
      <p>Si un visiteur ne comprend pas ce que vous faites en moins de 3 secondes, il est parti. Votre proposition de valeur doit être limpide et visible au-dessus de la ligne de flottaison.</p>
      <h2>Erreur n°2 : Ignorer le mobile</h2>
      <p>Plus de 85% de vos prospects visitent votre site sur mobile. Si l'expérience n'est pas parfaite, vous perdez des clients. Pensez "Mobile-First", pas "Mobile-Friendly".</p>
      <p>...</p>
    `,
  },
  {
    slug: "pourquoi-la-vitesse-est-reine",
    title: "Pourquoi la vitesse de votre site est le facteur n°1 de votre succès",
    date: "25 Juin 2025",
    excerpt:
      "Chaque seconde de chargement en plus, c'est 7% de conversion en moins. Nous vous expliquons pourquoi et comment avoir un site ultra-rapide.",
    content: `
      <p>Google l'a dit et répété : la vitesse est un facteur de classement crucial. Mais au-delà du SEO, c'est l'expérience utilisateur qui est en jeu. Un site lent est perçu comme peu fiable.</p>
    `,
  },
  {
    slug: "seo-local-pour-les-artisans",
    title: "Le guide ultime du SEO local pour les artisans et commerçants",
    date: "12 Juin 2025",
    excerpt:
      "Comment dominer les résultats de recherche dans votre ville ? Suivez notre guide pas à pas pour attirer les clients qui sont juste à côté de chez vous.",
    content: `
      <p>Google My Business est votre meilleur ami. Optimisez votre fiche, récoltez des avis, et publiez régulièrement. C'est la base de toute stratégie locale efficace.</p>
    `,
  },
]

export function getPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
