import { Plane, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import boeing787Image from "@/assets/boeing-787-new.png";
import airbusA321Image from "@/assets/a321neo-wip.png";
const Fleet = () => {
  const aircraft = [{
    id: 1,
    name: "Boeing 787-9 Dreamliner",
    image: boeing787Image,
    seating: "296 passengers",
    range: "14,140 km",
    routes: "Long Haul to Ultra Long Haul",
    livery: "Generic",
    status: "Active"
  }, {
    id: 2,
    name: "Airbus A321neo (Under WIP)",
    image: airbusA321Image,
    seating: "x passengers",
    range: "8,700 km",
    routes: "Short to Medium-haul",
    livery: "Yet to be Determined",
    status: "Active"
  }];
  const fleetStats = [{
    label: "Total Aircraft",
    value: "182",
    icon: Plane
  }, {
    label: "Destinations",
    value: "X+",
    icon: MapPin
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Fleet</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our modern fleet of aircraft, carefully selected to provide 
              the best virtual flying experience across all routes.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {fleetStats.map((stat, index) => <Card key={stat.label} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">
                    {stat.label}
                    {stat.label === "Total Aircraft" && <div className="text-sm">(Orders + In service)</div>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Aircraft Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Aircraft Collection</h2>
            <p className="text-xl text-muted-foreground">
              Aircrafts for Long haul as well as Short haul flights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aircraft.map((plane, index) => <Card key={plane.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up hover:transform hover:scale-105" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="aspect-video overflow-hidden">
                  <img src={plane.image} alt={plane.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-primary text-lg">{plane.name}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {plane.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seating:</span>
                      <span className="font-medium">{plane.seating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Range:</span>
                      <span className="font-medium">{plane.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Routes:</span>
                      <span className="font-medium text-sm">{plane.routes}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Livery: </span>
                      <span className="text-sm font-medium text-primary">{plane.livery}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

    </div>;
};
export default Fleet;