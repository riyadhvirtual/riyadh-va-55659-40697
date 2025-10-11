import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import operationsHubImage from "@/assets/operations-hub.png";
import operationsHubImage2 from "@/assets/operations-hub-2.png";
const Operations = () => {
  const navigate = useNavigate();
  
  const ranks = [
    {
      title: "Cadet Pilot",
      hours: "0-20 hours",
      benefits: ["Unlocks A321neo", "Can fly flights within 2.5 hours", "Events Unlocked"]
    },
    {
      title: "Junior First Officer",
      hours: "20-50 hours",
      benefits: ["Unlocks Codeshares", "Can fly flights Within 4 hours", "Unlocks ROTW below 4 hours"]
    },
    {
      title: "First Officer",
      hours: "50-100 hours", 
      benefits: ["Unlocks all A321neo Riyadh Air flights", "Can fly narrow body codeshares within 7 hours", "Can fly narrow body ROTW flights within 7 hours"]
    },
    {
      title: "Senior First Officer",
      hours: "100-175 hours",
      benefits: ["Unlocks Boeing 787-9 flights within 9 hours", "Can fly non A380, B747 codeshares, ROTW under 9 hours", "Unlocks cargo codeshares"]
    },
    {
      title: "Captain",
      hours: "175-400 hours",
      benefits: ["Unlocks Career Modes", "Unlocks all flights with no hour restrictions", "Can fly all aircrafts across fleets"]
    },
    {
      title: "Sfeer Elite Silver",
      hours: "400+ hours",
      benefits: ["Unlocks Sfeer Royalty"],
      hasRoyaltyButton: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      

      {/* Hub Network */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Central Hub</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">Riyadh: Our Global Hub of Excellence</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                At the heart of our operations lies Riyadh, our primary hub and gateway to the world. Positioned at the crossroads of Asia, Europe, and Africa, Riyadh connects our passengers and cargo to over [X] international destinations with seamless efficiency.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mt-4">
                From here, we operate [X] daily flights, supported by state-of-the-art facilities, advanced digital infrastructure, and a dedicated team ensuring smooth connections and world-class service. Riyadh is not just a hub — it is the beating heart of our network, powering growth, innovation, and global connectivity.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-6">
              <img 
                src={operationsHubImage} 
                alt="Operations Hub - Aerial View" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
              <img 
                src={operationsHubImage2} 
                alt="Operations Hub - Terminal View" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ranking System */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Career Progression</h2>
            <p className="text-xl text-muted-foreground">
              Advance through the ranks and unlock new opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ranks.map((rank, index) => (
              <Card 
                key={rank.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-primary text-lg">{rank.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{rank.hours}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {rank.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                    {rank.hasRoyaltyButton && (
                      <Button 
                        onClick={() => navigate('/royalty')}
                        className="w-full mt-4"
                        style={{ 
                          background: 'linear-gradient(135deg, #EFBF04 0%, #F5D565 50%, #EFBF04 100%)',
                          color: '#000',
                          fontWeight: 'bold',
                          boxShadow: '0 4px 15px rgba(239, 191, 4, 0.4)'
                        }}
                      >
                        Sfeer Royalty
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;