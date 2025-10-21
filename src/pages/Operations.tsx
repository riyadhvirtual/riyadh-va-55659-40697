import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import operationsHubImage from "@/assets/riyadh-hub-1.jpg";
import operationsHubImage2 from "@/assets/riyadh-hub-2.jpg";
const Operations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Operations & Routes</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our global network and operational excellence
            </p>
          </div>
        </div>
      </section>

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

      {/* Our Routes */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Routes</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "London", icao: "EGLL", distance: "4950 km" },
              { city: "Dubai", icao: "OMDB", distance: "875 km" },
              { city: "Singapore", icao: "WSSS", distance: "6800 km" },
              { city: "Beijing", icao: "ZBAA", distance: "5800 km" },
              { city: "Shanghai", icao: "ZSPD", distance: "6500 km" },
              { city: "Atlanta", icao: "KATL", distance: "11000 km" },
              { city: "Los Angeles", icao: "KLAX", distance: "13300 km" },
              { city: "New York", icao: "KJFK", distance: "10500 km" },
              { city: "Cairo", icao: "HECA", distance: "1600 km" },
              { city: "Istanbul", icao: "LTFM", distance: "2300 km" },
              { city: "Manchester", icao: "EGCC", distance: "4800 km" },
              { city: "Paris", icao: "LFPG", distance: "4700 km" },
              { city: "Amsterdam", icao: "EHAM", distance: "4800 km" },
              { city: "Doha", icao: "OTHH", distance: "440 km" },
              { city: "Jeddah", icao: "OEJN", distance: "850 km" },
              { city: "Abu Dhabi", icao: "OMAA", distance: "860 km" },
              { city: "Dammam", icao: "OEDF", distance: "400 km" },
              { city: "Medina", icao: "OEMA", distance: "850 km" },
            ].map((route, index) => (
              <Card 
                key={route.icao}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{route.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-semibold">Airport ICAO:</span>
                    <span className="text-foreground font-bold">{route.icao}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-semibold">Distance:</span>
                    <span className="text-foreground font-bold">{route.distance}</span>
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