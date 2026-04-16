import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[calc(4rem+2.75rem+1px)] sm:pt-[calc(4rem+1px)]">
        <HeroSection />
        <DestinationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
