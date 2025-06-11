
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-red-100">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zm20 0v-20c-11.046 0-20 8.954-20 20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 animate-fade-in">
            Abagusii Clan
            <span className="block text-orange-700">Enterprise Archive</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Preserving the rich heritage and entrepreneurial spirit of the Abagusii people through 
            interactive storytelling, cultural education, and traditional business simulation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-amber-900 hover:bg-amber-800 text-amber-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Clans
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Start Simulation
            </Button>
          </div>

          {/* Cultural Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-amber-900 mb-2">12+</div>
              <div className="text-amber-800 font-medium">Documented Clans</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-orange-700 mb-2">500+</div>
              <div className="text-amber-800 font-medium">Years of Heritage</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-red-700 mb-2">3</div>
              <div className="text-amber-800 font-medium">Traditional Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
