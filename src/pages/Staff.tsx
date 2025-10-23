import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aryanProfile from "@/assets/aryan-profile-new.png";

const Staff = () => {
  const milestones = [
    {
      year: "11 October 2025",
      event: "Riyadh Air Applies for IFVARB Certification"
    },
    {
      year: "26 October 2025",
      event: "First international routes launched"
    },
    {
      year: "2025",
      event: ""
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Staff</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet and Learn more about our Staff
            </p>
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={aryanProfile}
                    alt="Aryan Bansal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Aryan Bansal</h3>
                <p className="text-muted-foreground mb-2"><strong>CEO & President</strong></p>
                <p className="text-sm text-muted-foreground mb-4">Manages and Evolves the VA while taking the responsibility of its workings.</p>
                <Button
                  className="w-full"
                  onClick={() => window.open('https://community.infiniteflight.com/u/aryan_bansal1/summary', '_blank')}
                >
                  IFC
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From inception to becoming a leading virtual airline
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className="flex items-center space-x-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-6 py-4 rounded-lg min-w-[120px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-lg shadow-card border">
                    <p className="text-lg text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
