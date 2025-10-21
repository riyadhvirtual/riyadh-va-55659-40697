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
    { text: <strong>Must be able to communicate on Discord</strong>, id: 9 },
    { text: <strong>Valid Infinite Flight Pro Subscription</strong>, id: 10 }
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
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Apply Now</h2>
            <p className="text-muted-foreground">Fill out the entrance exam/application form below</p>
          </div>
          
          <div className="animate-slide-up">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdxR6QS7uji9fSEbCms9/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                >
                  Loading…
                </iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default JoinNow;