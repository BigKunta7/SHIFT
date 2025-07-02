import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { ReferralSection } from "@/components/landing/referral-section"
import { ProcessSection } from "@/components/landing/process-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { FaqSection } from "@/components/landing/faq-section"
import { UrgencySection } from "@/components/landing/urgency-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { FadeIn } from "@/components/ui/fade-in"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FadeIn>
        <ProblemSection />
      </FadeIn>
      <FadeIn>
        <SolutionSection />
      </FadeIn>
      <FadeIn>
        <PricingSection />
      </FadeIn>
      <FadeIn>
        <ReferralSection />
      </FadeIn>
      <FadeIn>
        <ProcessSection />
      </FadeIn>
      <FadeIn>
        <SocialProofSection />
      </FadeIn>
      <FadeIn>
        <FaqSection />
      </FadeIn>
      <UrgencySection />
      <FinalCtaSection />
    </>
  )
}
