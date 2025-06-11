
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedClans } from "@/components/FeaturedClans";
import { CulturalTimeline } from "@/components/CulturalTimeline";
import { Heritage } from "@/components/Heritage";
import { SoapstoneSimulator } from "@/components/SoapstoneSimulator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navigation />
      <main>
        <HeroSection />
        <Heritage />
        <FeaturedClans />
        <SoapstoneSimulator />
        <CulturalTimeline />
      </main>
    </div>
  );
};

export default Index;
