"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const useAnimatedCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const endValue = end
    if (start === endValue) return
    const incrementTime = duration / endValue
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === endValue) clearInterval(timer)
    }, incrementTime)
    return () => clearInterval(timer)
  }, [end, duration])
  return count
}

export function HeroSection() {
  const sitesCreated = useAnimatedCounter(2847)
  const leadIncrease = useAnimatedCounter(156)
  const [availableSlots] = useState(8)

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center text-white">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://cdn.dribbble.com/userupload/12494203/file/original-2089c3f4068210c997275e833310a72e.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/images/founder-avatar.jpg"
                alt="Avatar du fondateur"
                width={80}
                height={80}
                className="rounded-full border-4 border-white"
                query="professional portrait of a male tech agency founder"
              />
              <div className="absolute top-0 left-20 bg-white text-gray-800 p-3 rounded-lg shadow-lg animate-bounce">
                <p className="text-sm font-semibold">Prêt à transformer votre business ?</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Votre concurrent vient de gagner 3 nouveaux clients...{" "}
              <span className="text-primary">pendant que vous lisez ceci</span> 😱
            </h1>
            <p className="text-2xl font-semibold bg-primary/80 p-3 rounded-md inline-block">
              VOTRE SITE WEB PERFORMANT EN 14 JOURS (ou nous vous remboursons 100%)
            </p>
            <div className="flex flex-wrap gap-4 text-center">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-3xl font-bold">+{sitesCreated.toLocaleString("fr-FR")}</p>
                <p className="text-sm">sites créés cette année</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-3xl font-bold">+{leadIncrease}%</p>
                <p className="text-sm">d'augmentation moyenne des leads</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-3xl font-bold animate-pulse">{availableSlots}</p>
                <p className="text-sm">places disponibles ce mois-ci</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg font-bold py-8 px-10"
            >
              <Link href="/audit-gratuit">JE VEUX MON AUDIT GRATUIT (2 MIN)</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/hero-mockup.png"
              alt="Mockup de site web performant"
              width={600}
              height={500}
              className="mx-auto"
              query="sleek and modern website mockup on a dark background, showing analytics dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
