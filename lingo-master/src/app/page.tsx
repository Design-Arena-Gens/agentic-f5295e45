import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { ImpactStats } from "@/components/stats";
import { CurriculumSection } from "@/components/curriculum";
import { AISuite } from "@/components/ai-suite";
import { InteractiveGames } from "@/components/interactive-games";
import { PricingSection } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonials";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <FeatureCards />
        <ImpactStats />
        <CurriculumSection />
        <AISuite />
        <InteractiveGames />
        <PricingSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
