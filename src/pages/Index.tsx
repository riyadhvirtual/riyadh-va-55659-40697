import { ArrowRight, Plane, Globe, Award, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-background.png";
const Index = () => {
  const stats = [{
    icon: Users,
    label: "Active Pilots",
    value: "x+"
  }, {
    icon: Plane,
    label: "Aircraft",
    value: "182"
  }, {
    icon: Globe,
    label: "Destinations",
    value: "x+"
  }, {
    icon: Star,
    label: "Flights/Month",
    value: "x+"
  }];
  const features = [{
    icon: Award,
    title: "IFVARB Certified",
    description: "Officially approved by the Infinite Flight Virtual Airline Review Board"
  }, {
    icon: Globe,
    title: "Global Operations",
    description: "Riyadh Virtual provides opportunity to explore the word far and wide"
  }, {
    icon: Users,
    title: "Realistic Career Mode",
    description: "Experience the most realistic career mode in Infinite Flight different from others"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              IFVARB Certified Virtual Airline
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Riyadh Virtual
              <span className="block text-4xl lg:text-5xl text-white/90 font-normal">
                Airlines
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience premium virtual aviation with professional standards, 
              realistic operations, and a passionate community of pilots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/join">
                <Button variant="hero" size="xl" className="group">
                  Join Our Airline
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/fleet">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Explore Fleet
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-float">
          <Plane className="h-12 w-12 text-white/70" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-block px-8 py-3 bg-card border border-border rounded-full shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Our Stats</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={stat.label} className="text-center animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Riyadh Virtual?</h2>
            <p className="text-xl text-muted-foreground">
              Professional virtual aviation with authentic Middle Eastern hospitality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={feature.title} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready for Takeoff?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">Join the many pilots who've chosen Riyadh Virtual for their virtual aviation journey.</p>
          <Link to="/join">
            <Button variant="hero" size="xl">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;