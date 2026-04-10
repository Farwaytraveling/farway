import { Header } from "@/components/Header";
import { WorldMapSection } from "@/components/WorldMapSection";
import { Footer } from "@/components/Footer";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <WorldMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default MapPage;
