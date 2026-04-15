import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <DestinationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;