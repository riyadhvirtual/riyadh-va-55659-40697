import { Link } from "react-router-dom";
import { Mail, Instagram, Plane } from "lucide-react";
import riyadhAirLogo from "@/assets/riyadh-air-icon.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img 
              src={riyadhAirLogo} 
              alt="Riyadh Air Logo" 
              className="h-16 w-auto rounded-lg mb-4"
            />
            <p className="text-muted-foreground text-sm">
              Your premier virtual airline experience, connecting the skies with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/operations" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Operations and Ranks
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events-career" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Events and Career Mode
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Join Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>riyadhvirtual@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Instagram className="h-4 w-4" />
                <span>@riyadhvirtual</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Plane className="h-4 w-4" />
                <span>@x</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Riyadh Air Virtual. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Infinite Flight Riyadh Air Virtual is not affiliated with, endorsed, or sponsored by Riyadh Air.<br />
            All Riyadh Air logos are registered trademarks of Riyadh Air.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
