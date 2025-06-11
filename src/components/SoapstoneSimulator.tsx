
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface GameState {
  stage: string;
  resources: {
    stone: number;
    money: number;
    reputation: number;
    apprentices: number;
  };
  choices: string[];
  storyText: string;
}

const simulationStages = {
  start: {
    stage: "Beginning",
    storyText: "Welcome to the Abanchari clan soapstone enterprise! You are a young member learning the ancient art of soapstone quarrying and carving. Your elders have entrusted you with managing a small section of the quarry. How will you begin?",
    choices: [
      "Focus on careful, traditional quarrying methods",
      "Try to quarry quickly to get more stone",
      "Spend time studying the stone quality first"
    ],
    resources: { stone: 10, money: 50, reputation: 25, apprentices: 1 }
  },
  quarrying: {
    stage: "Quarrying",
    storyText: "You've made your choice about quarrying approach. The ancestors whisper their wisdom through the stone. Quality soapstone requires patience and skill passed down through generations.",
    choices: [
      "Train apprentices in traditional techniques",
      "Focus on quantity to meet market demand", 
      "Experiment with new quarrying tools"
    ],
    resources: { stone: 25, money: 75, reputation: 40, apprentices: 2 }
  },
  carving: {
    stage: "Carving & Creation",
    storyText: "Your quarry yields beautiful soapstone. Now comes the artistry - transforming raw stone into objects of beauty and function. The clan's reputation rests on the quality of your work.",
    choices: [
      "Create traditional ceremonial pieces",
      "Make practical items for daily use",
      "Craft artistic sculptures for export"
    ],
    resources: { stone: 15, money: 150, reputation: 60, apprentices: 3 }
  },
  trading: {
    stage: "Trade & Market",
    storyText: "Your carved pieces are ready for market. The Abanchari clan has traded soapstone for generations, building relationships with neighboring communities and distant markets.",
    choices: [
      "Sell locally to build community relationships",
      "Trade with distant markets for higher profits",
      "Establish a permanent market stall"
    ],
    resources: { stone: 5, money: 300, reputation: 80, apprentices: 4 }
  },
  legacy: {
    stage: "Building Legacy",
    storyText: "Your enterprise flourishes! The clan elders recognize your wisdom. How will you ensure the traditions continue for future generations?",
    choices: [
      "Establish a formal apprenticeship program",
      "Document techniques for preservation",
      "Expand to new markets while honoring traditions"
    ],
    resources: { stone: 20, money: 500, reputation: 95, apprentices: 6 }
  }
};

export const SoapstoneSimulator = () => {
  const [currentStage, setCurrentStage] = useState("start");
  const [gameState, setGameState] = useState<GameState>(simulationStages.start);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [gameHistory, setGameHistory] = useState<string[]>([]);

  const makeChoice = (choiceIndex: number) => {
    setSelectedChoice(choiceIndex);
    const choice = gameState.choices[choiceIndex];
    setGameHistory([...gameHistory, `${gameState.stage}: ${choice}`]);

    // Simulate resource changes based on choice
    const newResources = { ...gameState.resources };
    
    // Simple logic for resource changes
    if (choice.includes("traditional") || choice.includes("careful")) {
      newResources.reputation += 15;
      newResources.apprentices += 1;
    } else if (choice.includes("quickly") || choice.includes("quantity")) {
      newResources.stone += 10;
      newResources.money += 25;
      newResources.reputation -= 5;
    } else if (choice.includes("study") || choice.includes("document")) {
      newResources.reputation += 20;
      newResources.apprentices += 2;
    }

    // Progress to next stage
    const stageKeys = Object.keys(simulationStages);
    const currentIndex = stageKeys.indexOf(currentStage);
    
    if (currentIndex < stageKeys.length - 1) {
      const nextStageKey = stageKeys[currentIndex + 1];
      const nextStage = simulationStages[nextStageKey as keyof typeof simulationStages];
      
      setTimeout(() => {
        setCurrentStage(nextStageKey);
        setGameState({
          ...nextStage,
          resources: newResources
        });
        setSelectedChoice(null);
      }, 2000);
    }
  };

  const restartSimulation = () => {
    setCurrentStage("start");
    setGameState(simulationStages.start);
    setSelectedChoice(null);
    setGameHistory([]);
  };

  return (
    <section id="simulator" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Soapstone Enterprise Simulator
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Step into the shoes of an Abanchari clan member and experience 
            the challenges and rewards of traditional soapstone enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Content */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-t-4 border-amber-600">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl font-bold text-amber-900 flex items-center gap-3">
                  <span className="text-3xl">🏺</span>
                  {gameState.stage}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                <p className="text-lg text-amber-800 leading-relaxed mb-8">
                  {gameState.storyText}
                </p>

                {selectedChoice === null ? (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-amber-900 mb-4">
                      Choose your action:
                    </h4>
                    {gameState.choices.map((choice, index) => (
                      <Button
                        key={index}
                        onClick={() => makeChoice(index)}
                        className="w-full p-6 text-left bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 border-2 border-amber-300 hover:from-amber-200 hover:to-orange-200 hover:border-amber-400 transition-all duration-300"
                        variant="outline"
                      >
                        {choice}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-6 py-3 rounded-full">
                      <span className="animate-spin">⟳</span>
                      Processing your choice...
                    </div>
                  </div>
                )}

                {currentStage === "legacy" && selectedChoice !== null && (
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      🎉 Congratulations! 🎉
                    </h3>
                    <p className="text-lg text-amber-800 mb-6">
                      You have successfully built a thriving soapstone enterprise 
                      while honoring the traditions of the Abanchari clan!
                    </p>
                    <Button 
                      onClick={restartSimulation}
                      className="bg-amber-900 hover:bg-amber-800 text-amber-50"
                    >
                      Start New Simulation
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Resources Panel */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-amber-900">
                  Resources & Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-amber-800 font-medium">Soapstone</span>
                    <Badge variant="secondary">{gameState.resources.stone}</Badge>
                  </div>
                  <Progress value={Math.min(gameState.resources.stone * 2, 100)} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-amber-800 font-medium">Money</span>
                    <Badge variant="secondary">{gameState.resources.money}</Badge>
                  </div>
                  <Progress value={Math.min(gameState.resources.money / 5, 100)} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-amber-800 font-medium">Reputation</span>
                    <Badge variant="secondary">{gameState.resources.reputation}</Badge>
                  </div>
                  <Progress value={gameState.resources.reputation} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-amber-800 font-medium">Apprentices</span>
                    <Badge variant="secondary">{gameState.resources.apprentices}</Badge>
                  </div>
                  <Progress value={Math.min(gameState.resources.apprentices * 15, 100)} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {gameHistory.length > 0 && (
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-amber-900">
                    Your Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {gameHistory.map((entry, index) => (
                      <div key={index} className="text-sm text-amber-800 p-2 bg-amber-50 rounded">
                        {entry}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
