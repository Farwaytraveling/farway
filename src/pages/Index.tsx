import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AustraliaSection } from "@/components/AustraliaSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AustraliaSection />
        <PartnersSection />
        <ProgramsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
