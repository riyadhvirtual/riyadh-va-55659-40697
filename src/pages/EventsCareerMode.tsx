import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const EventsCareerMode = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Events and Career Modes</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find out more about the events aimed at keeping the VA lively as well as the most realistic career mode in Infinite Flight
            </p>
          </div>
        </div>
      </section>

      {/* Events Structure Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-block px-8 py-3 bg-card border-2 border-purple-500 rounded-full shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Events Structure</h2>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-purple-500 rounded-lg p-8 shadow-sm">
              <p className="text-lg text-foreground leading-relaxed">
                Events will be held twice every week, one of which will be Long Haul while the other will be Short Haul, Community Events will also take place on a bimonthly basis, Pilots can join to experience professional flight operations as well as interact with fellow pilots in a close knit community at the same time, all Pilots will be allowed to take part in these irrespective of Rank helping new pilots to learn from others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Modes Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-block px-8 py-3 bg-card border-2 border-purple-500 rounded-full shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Career Modes</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Normal Career Mode */}
            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Normal Career Mode</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Traditional CM</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Set amount of flightlines with no time limit</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Flightlines assigned by CM manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Progression through ranks based on hours on type</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Type rating before moving on to next Aircraft/Rank</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">No demotion system</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Easier type of CM</span>
                </div>
              </CardContent>
            </Card>

            {/* Realistic/Intense CM */}
            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Realistic/Intense CM</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Players assigned 2 thresholds for a given time to complete a set of no of flights</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Progress and growth on the basis of flights completed wrt thresholds</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Consistent completion of higher threshold means promotion</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Failure to complete lower threshold means demotion</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Failure to complete lower threshold of lowest level 2 times results in demotion to Normal CM for a cooldown</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Promotion required to progressively reach certain aircrafts</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">More difficult then Normal CM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsCareerMode;
