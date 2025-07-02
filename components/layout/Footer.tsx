import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg">SHIFT</h3>
            <p className="text-sm text-gray-400 mt-2">Construire les moteurs de croissance de demain.</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Github />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Navigation</h3>
            <ul className="space-y-2 mt-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/etudes-de-cas" className="text-gray-400 hover:text-white">
                  Études de Cas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Légal</h3>
            <ul className="space-y-2 mt-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Nos Partenaires</h3>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-2">
              <Image
                src="/images/logos/google-partner.svg"
                alt="Google Partner"
                width={120}
                height={40}
                query="official Google Partner logo, white color for dark background"
              />
              <Image
                src="/images/logos/stripe-partner.svg"
                alt="Stripe Partner"
                width={100}
                height={40}
                query="official Stripe Partner logo, white color for dark background"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SHIFT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
