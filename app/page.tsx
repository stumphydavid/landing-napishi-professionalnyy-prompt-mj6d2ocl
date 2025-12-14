import { CryptoBackground } from "@/components/crypto-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AirdropShowcase } from "@/components/airdrop-showcase"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CryptoBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <AirdropShowcase />
      <CTASection />
      <Footer />
      <CookieConsent />
    </main>
  )
}
