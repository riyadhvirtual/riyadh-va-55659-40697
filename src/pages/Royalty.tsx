import { Crown, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import rank6 from "@/assets/rank-6.png";
import rank7 from "@/assets/rank-7.png";
import rank8 from "@/assets/rank-8.png";
import rank9 from "@/assets/rank-9.png";
import rank10 from "@/assets/rank-10.png";

const Royalty = () => {
  const royalRanks = [
    {
      title: "Sfeer Elite Silver",
      hours: "400+ hours",
      description: "The gateway to royalty",
      benefits: [
        "Induction into Royal lounge",
        "Can add 1 route of their choice (can only be flown by royalty)",
        "One 1.5x Multiplier flight every month"
      ],
      image: rank6
    },
    {
      title: "Sfeer Elite Gold",
      hours: "800+ hours",
      description: "Elite commander of the skies",
      benefits: [
        "One 1.75x flight every month",
        "Priority PB at events",
        "Can request a custom event every 4 months"
      ],
      image: rank7
    },
    {
      title: "Prince of Riyadh",
      hours: "1500+ hours",
      description: "Noble prince of aviation",
      benefits: [
        "One 2x flight every month",
        "Inducted into Riyadh Board of Decisions",
        "Can add another route to Royalty database"
      ],
      image: rank8
    },
    {
      title: "Crown Prince of Riyadh",
      hours: "2500+ hours",
      description: "Heir to the throne of excellence",
      benefits: [
        "Two 1.5x flights every month",
        "Can fly private jets on any route across database",
        "Can choose a ROTW every second week"
      ],
      image: rank9
    },
    {
      title: "Riyadh's King",
      hours: "3250+ hours",
      description: "Supreme ruler of the airways",
      benefits: [
        "Can get a callsign within 100, Kings Lounge",
        "Five 1.5x flights every month",
        "Can add 2 additional routes to royalty database, can choose a ROTW every week"
      ],
      image: rank10
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#EFBF04]/10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#EFBF04]/20 via-[#F5D565]/20 to-[#EFBF04]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Crown 
              className="w-20 h-20 mx-auto mb-6" 
              style={{ 
                color: '#EFBF04',
                filter: 'drop-shadow(0 0 20px rgba(239, 191, 4, 0.6))'
              }}
            />
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #EFBF04 0%, #F5D565 50%, #EFBF04 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Sfeer Royalty Program
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Ascend to the highest echelons of aviation excellence. Only the most dedicated pilots reach the royal ranks.
            </p>
          </div>
        </div>
      </section>

      {/* Royal Ranks Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #EFBF04 0%, #F5D565 50%, #EFBF04 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              The Royal Hierarchy
            </h2>
            <p className="text-xl text-muted-foreground">
              Five tiers of legendary status
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {royalRanks.map((rank, index) => (
              <Card 
                key={rank.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderColor: '#EFBF04',
                  borderWidth: '2px',
                  background: 'linear-gradient(135deg, rgba(239, 191, 4, 0.05) 0%, transparent 100%)'
                }}
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 z-0"
                  style={{
                    background: 'radial-gradient(circle, #EFBF04 0%, transparent 70%)'
                  }}
                />
                <div className="w-full relative z-10">
                  <img 
                    src={rank.image} 
                    alt={rank.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle 
                    className="text-lg flex items-center gap-2"
                    style={{ color: '#EFBF04' }}
                  >
                    <Crown className="h-5 w-5" />
                    {rank.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm font-semibold">{rank.hours}</p>
                </CardHeader>
                <CardContent>
                  <p 
                    className="text-sm italic mb-4"
                    style={{ color: '#EFBF04' }}
                  >
                    {rank.description}
                  </p>
                  <div className="space-y-2">
                    {rank.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" style={{ color: '#EFBF04' }} />
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prestige Section */}
      <section className="py-20 bg-gradient-to-r from-[#EFBF04]/10 via-[#F5D565]/10 to-[#EFBF04]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 
              className="text-4xl font-bold mb-6"
              style={{ 
                background: 'linear-gradient(135deg, #EFBF04 0%, #F5D565 50%, #EFBF04 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              The Path to Glory
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              The Sfeer Royalty Program represents the pinnacle of achievement at Riyadh Air Virtual.
              These exclusive ranks are reserved for pilots who have demonstrated unparalleled dedication, 
              skill, and commitment to excellence. Each tier brings unique privileges and recognition 
              that set you apart as true aviation royalty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Royalty;
