import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const JoinNow = () => {
  const requirements = [
    { text: <><strong>Minimum Age:</strong> 15 Years Old</>, id: 1 },
    { text: <><strong>IF Grade:</strong> 3 or Above</>, id: 2 },
    { text: <><strong>Minimum of flight hours:</strong> 100 hours</>, id: 3 },
    { text: <><strong>Minimum of landings:</strong> 100 landings</>, id: 4 },
    { text: <><strong>Violation-to-Landing Ratio:</strong> Less or equal to 0.10/10%</>, id: 5 },
    { text: <><strong>Level 2 and 3 violations:</strong> Max four (4) within the last year.</>, id: 6 },
    { text: <><strong>Riyadh Air Virtual Entrance Exam:</strong> Score 80% or higher (when you fail, you can re-apply the next week)</>, id: 7 },
    { text: <strong>Must be able to communicate in English</strong>, id: 8 },
    { text: <strong>Must be able to communicate on Discord</strong>, id: 9 }
  ];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Start your journey with Riyadh Air Virtual and become part of our professional pilot community.
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Pilot Requirements
              </h2>
              <p className="text-lg text-muted-foreground mb-6">We welcome pilots of all experience levels (as long as you are above expert 3)</p>
              <div className="space-y-4">
                {requirements.map((requirement) => <div key={requirement.id} className="flex items-start space-x-3 animate-slide-up" style={{
                animationDelay: `${requirement.id * 0.1}s`
              }}>
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{requirement.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Apply Now</h2>
          </div>
          
          <div className="flex justify-center animate-slide-up">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 text-xl font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #006a3d 0%, #005430 50%, #003d22 100%)',
                boxShadow: '0 8px 20px rgba(0, 84, 48, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
              }}
            >
              Entrance Exam/ Application
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default JoinNow;