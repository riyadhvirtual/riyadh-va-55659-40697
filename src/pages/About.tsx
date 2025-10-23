import { CheckCircle, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import riyadhAirPlane from "@/assets/riyadh-air-plane.png";
import aryanProfile from "@/assets/aryan-profile-new.png";
const About = () => {
  const features = [{
    icon: Globe,
    title: "Global Network",
    description: "Connect flights across the world with our extensive route network covering major destinations."
  }, {
    icon: Users,
    title: "Professional Community",
    description: "Join a dedicated community of virtual pilots committed to realistic flight operations."
  }, {
    icon: Award,
    title: "IFVARB Approved",
    description: "Officially recognized by the Infinite Flight Virtual Airline Review Board."
  }];
  const milestones = [{
    year: "11 October 2025",
    event: "Riyadh Air Applies for IFVARB Certification"
  }, {
    year: "26 October 2025",
    event: "First international routes launched"
  }, {
    year: "2025",
    event: ""
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About Riyadh Air Virtual</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Get to know more about the team of enthusiastic pilots behind this massive undertaking</p>
          </div>
        </div>
      </section>

      {/* What is a Virtual Airline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                What is a Virtual Airline?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A virtual airline is a simulated airline that operates within flight simulation 
                platforms like Infinite Flight. We provide realistic flight operations, 
                professional procedures, and career progression for aviation enthusiasts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Realistic Operations</h3>
                    <p className="text-muted-foreground">Follow real-world procedures and flight planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Career Progression</h3>
                    <p className="text-muted-foreground">Advance through ranks based on flight hours and performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Community Events</h3>
                    <p className="text-muted-foreground">Participate in group flights and special operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12 animate-slide-up space-y-6" style={{
            animationDelay: "0.2s"
          }}>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To provide the most authentic and professional virtual airline experience in the Middle East region, connecting pilots from around the world through our commitment to excellence and realistic operations, by emulating the operations of Riyadh Air.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Message From Our CEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground space-y-4">
                    <p>Greetings Pilots,</p>
                    <p>When I first discovered Infinite Flight, I never imagined it would lead me here — to creating something that blends <span className="font-bold text-green-600">passion, professionalism, and purpose</span>. For me, Riyadh Air Virtual isn't just another VA; it's a <span className="font-bold text-green-600">vision</span>. A vision to bring the <span className="font-bold text-green-600">elegance, innovation, and ambition</span> of Riyadh Air into the virtual skies, and to offer every pilot a place where they can truly belong.</p>
                    <p>Riyadh Air Virtual was founded on three principles: <span className="font-bold text-green-600">authenticity, community, and growth</span>. We strive to offer the most <span className="font-bold text-green-600">immersive and balanced VA experience</span> — one that welcomes both the relaxed flyer and the realism enthusiast. Our <span className="font-bold text-green-600">dual career modes</span>, our <span className="font-bold text-green-600">Sfeer Royalty Program</span>, and our commitment to training reflect that belief: that every pilot, no matter their background, deserves a chance to <span className="font-bold text-green-600">grow and shine</span>.</p>
                    <p>This VA isn't about numbers or ranks — it's about <span className="font-bold text-green-600">people</span>. It's about helping each pilot find <span className="font-bold text-green-600">joy in flying, purpose in learning, and pride</span> in representing something that stands for quality. My team and I are dedicated to building an airline that feels <span className="font-bold text-green-600">professional yet personal</span> — where every flight means something, and every pilot matters.</p>
                    <p>To all future members of Riyadh Air Virtual: <span className="font-bold text-green-600">welcome aboard</span>. Together, we're not just flying routes — we're writing a story of <span className="font-bold text-green-600">passion, excellence, and the spirit of aviation itself</span>.</p>
                    <p className="font-semibold text-foreground">– Aryan Bansal<br />CEO & President,<br />Riyadh Air Virtual</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Riyadh Air Virtual */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-6xl mx-auto">
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="text-4xl text-primary">About Riyadh Air Virtual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Welcome to Riyadh Air Virtual – the next generation of virtual aviation on Infinite Flight! Inspired by the real-world Riyadh Air, we're here to bring the energy, culture, and ambition of Saudi Arabia into the skies of the simulator. Founded in 2025, Riyadh Air Virtual was built on the belief that flying should be exciting, community-driven, and truly global.
                </p>
                <p>
                  At Riyadh Air Virtual, you'll experience the thrill of flying a modern and versatile fleet, including the Boeing 787-9 Dreamliner and the Airbus A321neo. Whether it's short regional hops across the Middle East or long-haul journeys to Europe, Asia, or Africa, our routes connect Riyadh to the world. With King Khalid International Airport (OERK) as our home base, every flight is a new opportunity to explore, learn, and grow with fellow aviation enthusiasts.
                </p>
                <p>
                  But what really makes Riyadh Air Virtual special is our community. We're more than just a VA – we're a family of passionate pilots who support each other, share our love for aviation, and celebrate every milestone together. From events and group flights to casual hangouts, Riyadh Air Virtual is all about enjoying the journey, not just the destination.
                </p>
                <p>
                  So, if you're looking for a virtual airline that combines modern aircraft, exciting destinations, and a welcoming community, then your next adventure starts here. Join Riyadh Air Virtual today, and be part of the future taking flight!
                </p>
                <p className="font-semibold text-foreground text-xl">
                  Riyadh Air Virtual — Fly the Future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Flight?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join our growing community of professional virtual pilots and experience 
            the best in virtual aviation.
          </p>
          <div className="space-x-4">
            <Link to="/join">
              <Button variant="hero" size="xl">
                Apply Now
              </Button>
            </Link>
            <Link to="/operations">
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default About;