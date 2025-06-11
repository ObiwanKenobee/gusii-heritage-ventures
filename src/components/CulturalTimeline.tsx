
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const timelineData = [
  {
    period: "Pre-1500",
    title: "Ancient Origins",
    description: "Early Abagusii settlements establish clan-based economic systems. Discovery and initial exploitation of soapstone deposits.",
    keyEvents: [
      "First soapstone quarries established by Abanchari clan",
      "Development of traditional pottery techniques",
      "Iron smelting knowledge acquired"
    ],
    economicFocus: "Subsistence agriculture, basic crafts"
  },
  {
    period: "1500-1800",
    title: "Clan Specialization",
    description: "Distinct clan enterprises emerge. Trade networks develop between clans and neighboring communities.",
    keyEvents: [
      "Abanchari clan perfects soapstone carving techniques",
      "Abagetutu clan becomes renowned for pottery",
      "Inter-clan trading systems established"
    ],
    economicFocus: "Specialized crafts, regional trade"
  },
  {
    period: "1800-1920",
    title: "Pre-Colonial Peak",
    description: "Height of traditional clan enterprises. Complex economic relationships and artistic achievements flourish.",
    keyEvents: [
      "Golden age of soapstone artistry",
      "Establishment of major trade routes",
      "Cultural ceremonies integrate economic activities"
    ],
    economicFocus: "Advanced craftsmanship, long-distance trade"
  },
  {
    period: "1920-1960",
    title: "Colonial Impact",
    description: "Traditional economies face disruption. Some clans adapt by incorporating new techniques and markets.",
    keyEvents: [
      "Introduction of modern tools and techniques",
      "Cash crop agriculture emerges",
      "Some traditional practices go underground"
    ],
    economicFocus: "Mixed traditional-modern economy"
  },
  {
    period: "1960-Present",
    title: "Modern Revival",
    description: "Independence brings renewed interest in traditional crafts. Clans balance heritage preservation with modern opportunities.",
    keyEvents: [
      "Soapstone carving becomes major export industry",
      "Cultural tourism develops",
      "Digital platforms showcase traditional crafts"
    ],
    economicFocus: "Heritage tourism, global markets, cultural preservation"
  }
];

export const CulturalTimeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Economic Evolution Timeline
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Trace the development of Abagusii clan enterprises through the centuries
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {timelineData.map((period, index) => (
            <Button
              key={index}
              onClick={() => setSelectedPeriod(index)}
              variant={selectedPeriod === index ? "default" : "outline"}
              className={`transition-all duration-300 ${
                selectedPeriod === index 
                  ? "bg-amber-900 text-amber-50 scale-105" 
                  : "border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50"
              }`}
            >
              {period.period}
            </Button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative">
          <Card className="bg-white shadow-xl border-t-4 border-amber-600 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-amber-900 text-amber-50 px-4 py-2 rounded-full font-bold text-lg">
                    {timelineData[selectedPeriod].period}
                  </span>
                  <h3 className="text-3xl font-bold text-amber-900">
                    {timelineData[selectedPeriod].title}
                  </h3>
                </div>
                
                <p className="text-xl text-amber-800 leading-relaxed mb-6">
                  {timelineData[selectedPeriod].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-amber-900 mb-4">Key Events:</h4>
                  <ul className="space-y-3">
                    {timelineData[selectedPeriod].keyEvents.map((event, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-800">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-amber-900 mb-4">Economic Focus:</h4>
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg">
                    <p className="text-amber-800 font-medium text-lg">
                      {timelineData[selectedPeriod].economicFocus}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Elements */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              onClick={() => setSelectedPeriod(Math.max(0, selectedPeriod - 1))}
              disabled={selectedPeriod === 0}
              variant="outline"
              className="border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 disabled:opacity-50"
            >
              Previous Period
            </Button>
            
            <Button 
              onClick={() => setSelectedPeriod(Math.min(timelineData.length - 1, selectedPeriod + 1))}
              disabled={selectedPeriod === timelineData.length - 1}
              variant="outline"
              className="border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 disabled:opacity-50"
            >
              Next Period
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
