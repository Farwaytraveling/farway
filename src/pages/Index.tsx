import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Farway – Din väg ut i världen | Working Holiday, Au Pair, Skidsäsong"
        description="Sveriges samlade guide för dig som vill jobba, studera eller resa utomlands. Working Holiday, Au Pair, skidsäsong, språkresor – faktagranskat och gratis."
        canonical="https://farway.lovable.app/"
      />
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
