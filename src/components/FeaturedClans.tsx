
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Users } from "lucide-react";

const clansData = [
  {
    id: 1,
    name: "Abanchari",
    region: "Tabaka, Kisii",
    population: "~15,000",
    primaryBusiness: "Soapstone Quarrying & Carving",
    description: "Master craftsmen specializing in soapstone extraction and artistic carving, creating both functional and decorative items for local and international markets.",
    keyActivities: ["Quarrying", "Carving", "Trading", "Apprenticeship"],
    culturalSignificance: "Known as the guardians of the ancient soapstone carving traditions",
    established: "Pre-colonial era"
  },
  {
    id: 2,
    name: "Abagetutu",
    region: "Nyamira, Kisii",
    population: "~12,000",
    primaryBusiness: "Traditional Pottery & Ceramics",
    description: "Skilled potters creating traditional vessels, cooking pots, and ceremonial items using ancient techniques passed down through generations.",
    keyActivities: ["Clay mining", "Pottery making", "Firing", "Trading"],
    culturalSignificance: "Keepers of traditional pottery wisdom and techniques",
    established: "15th century"
  },
  {
    id: 3,
    name: "Abanyaribari",
    region: "Gucha, Kisii",
    population: "~18,000",
    primaryBusiness: "Iron Smelting & Tool Making",
    description: "Traditional blacksmiths and tool makers, creating farming implements, weapons, and household items essential for community life.",
    keyActivities: ["Iron smelting", "Tool forging", "Repair services", "Trading"],
    culturalSignificance: "Essential providers of agricultural and household tools",
    established: "14th century"
  }
];

export const FeaturedClans = () => {
  return (
    <section id="clans" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Featured Clans & Their Enterprises
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Discover the diverse entrepreneurial traditions that have shaped 
            Abagusii society for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {clansData.map((clan) => (
            <Card key={clan.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-amber-600">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl font-bold text-amber-900 mb-2">
                  {clan.name}
                </CardTitle>
                <div className="flex items-center text-amber-700 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{clan.region}</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <Users size={16} className="mr-2" />
                  <span className="text-sm">{clan.population} members</span>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Primary Enterprise:</h4>
                  <p className="text-orange-700 font-medium">{clan.primaryBusiness}</p>
                </div>
                
                <p className="text-amber-800 leading-relaxed mb-4">
                  {clan.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Key Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {clan.keyActivities.map((activity, index) => (
                      <span 
                        key={index}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-amber-700 italic mb-4">
                    "{clan.culturalSignificance}"
                  </p>
                  
                  <Button 
                    className="w-full bg-amber-900 hover:bg-amber-800 text-amber-50 transition-colors"
                  >
                    Explore {clan.name}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 px-8 py-3 text-lg font-semibold"
          >
            View All Clans Directory
          </Button>
        </div>
      </div>
    </section>
  );
};
