import { useState } from "react";
import { Mail, Phone, MapPin, Send, ExternalLink, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us a direct message",
      value: "riyadhvirtual@gmail.com",
      link: "mailto:riyadhvirtual@gmail.com"
    },
    {
      icon: ExternalLink,
      title: "Instagram",
      description: "Follow our updates",
      value: "@riyadhvirtual",
      link: "https://www.instagram.com/riyadhvirtual/"
    },
    {
      icon: Plane,
      title: "IFC",
      description: "Official IF Announcements",
      value: "@x",
      link: ""
    }
  ];

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "pilot", label: "Pilot Applications" },
    { value: "training", label: "Training Department" },
    { value: "operations", label: "Flight Operations" },
    { value: "technical", label: "Technical Support" },
    { value: "partnerships", label: "Partnerships" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about our virtual airline? Need support with your application? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to connect with our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(method.link, '_blank')}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">{method.value}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Connect
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;