import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import rank1 from "@/assets/rank-1.png";
import rank2 from "@/assets/rank-2.png";
import rank3 from "@/assets/rank-3.png";
import rank4 from "@/assets/rank-4.png";
import rank5 from "@/assets/rank-5.png";

const Ranks = () => {
  const navigate = useNavigate();
  
  const ranks = [
    {
      title: "Cadet Pilot",
      hours: "0-20 hours",
      benefits: ["Unlocks A321neo", "Can fly flights within 2.5 hours", "Events Unlocked"],
      image: rank1
    },
    {
      title: "Junior First Officer",
      hours: "20-50 hours",
      benefits: ["Unlocks Codeshares", "Can fly flights Within 4 hours", "Unlocks ROTW below 4 hours"],
      image: rank2
    },
    {
      title: "First Officer",
      hours: "50-100 hours", 
      benefits: ["Unlocks all A321neo Riyadh Air flights", "Can fly narrow body codeshares within 7 hours", "Can fly narrow body ROTW flights within 7 hours"],
      image: rank3
    },
    {
      title: "Senior First Officer",
      hours: "100-175 hours",
      benefits: ["Unlocks Boeing 787-9 flights within 9 hours", "Can fly non A380, B747 codeshares, ROTW under 9 hours", "Unlocks cargo codeshares"],
      image: rank4
    },
    {
      title: "Captain",
      hours: "175-400 hours",
      benefits: ["Unlocks Career Modes", "Unlocks all flights with no hour restrictions", "Can fly all aircrafts across fleets"],
      image: rank5
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
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Career Progression</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Advance through the ranks and unlock new opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Ranking System */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ranks.map((rank, index) => (
              <Card 
                key={rank.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {rank.image && (
                  <div className="w-full h-[378px] overflow-hidden">
                    <img 
                      src={rank.image} 
                      alt={rank.title}
                      className="w-full h-full object-cover object-top rounded-t-lg"
                    />
                  </div>
                )}
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

export default Ranks;
