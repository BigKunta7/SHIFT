"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MountainIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/methode", label: "La Méthode" },
    { href: "/etudes-de-cas", label: "Études de Cas" },
    { href: "/offres", label: "Nos Offres" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header className="fixed top-0 z-40 w-full bg-white/60 backdrop-blur-xl border-b border-slate-200/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <MountainIcon className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-slate-900">SHIFT</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname.startsWith(link.href) ? "text-primary" : "text-slate-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-shadow"
        >
          <Link href="/audit-gratuit">Audit Gratuit</Link>
        </Button>
      </div>
    </header>
  )
}
