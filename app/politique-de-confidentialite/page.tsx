export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 prose">
      <h1>Politique de Confidentialité</h1>
      <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
      <p>
        La présente Politique de Confidentialité décrit la manière dont SHIFT (le « Site », « nous », « notre » ou « nos
        ») recueille, utilise et divulgue vos informations personnelles lorsque vous visitez, utilisez nos services ou
        effectuez un achat sur shift.fr (le « Site ») ou communiquez avec nous d'une autre manière (collectivement, les
        « Services »). Aux fins de la présente Politique de Confidentialité, « vous » et « votre » désignent
        l'utilisateur des Services, qu'il s'agisse d'un client, d'un visiteur du site web ou d'une autre personne dont
        nous avons recueilli les informations conformément à la présente Politique de Confidentialité.
      </p>

      <h2>1. Données collectées</h2>
      <p>
        Nous collectons des informations personnelles que vous nous fournissez volontairement lorsque vous remplissez un
        formulaire de contact ou de demande d'audit. Ces informations peuvent inclure votre nom, votre adresse e-mail,
        votre numéro de téléphone et l'URL de votre site web.
      </p>

      <h2>2. Utilisation de vos données</h2>
      <p>Nous utilisons les informations que nous collectons pour :</p>
      <ul>
        <li>Fournir, exploiter et maintenir nos Services</li>
        <li>Améliorer, personnaliser et développer nos Services</li>
        <li>Comprendre et analyser la manière dont vous utilisez nos Services</li>
        <li>Développer de nouveaux produits, services, fonctionnalités et fonctionnalités</li>
        <li>
          Communiquer avec vous, directement ou par l'intermédiaire de l'un de nos partenaires, notamment pour le
          service client, pour vous fournir des mises à jour et d'autres informations relatives au site web, et à des
          fins de marketing et de promotion
        </li>
        <li>Vous envoyer des e-mails</li>
        <li>Trouver et prévenir la fraude</li>
      </ul>

      <h2>3. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles : droit d'accès, de
        rectification, d'effacement, de limitation du traitement, de portabilité des données et d'opposition. Pour
        exercer ces droits, veuillez nous contacter à contact@shift.fr.
      </p>
    </div>
  )
}
