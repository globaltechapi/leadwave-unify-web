import { Button } from "@/components/ui/button";
import leadwaveLogo from "@/assets/leadwave-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    { name: "Features", href: "#features", type: "anchor" },
    { name: "Video", href: "#video", type: "anchor" },
    { name: "Pricing", href: "#pricing", type: "anchor" },
    { name: "Demo", href: "#demo", type: "anchor" },
    { name: "Readiness", href: "/readiness", type: "link" },
    { name: "About Us", href: "/about", type: "link" },
    { name: "Contact", href: "/contact", type: "link" },
  ];

  const handleNavClick = (item: { name: string; href: string; type: string }) => {
    if (item.type === "anchor") {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        // Use setTimeout to ensure navigation completes before scrolling
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll to section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={leadwaveLogo} 
              alt="Lead Wave Logo" 
              className="w-11 h-11"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lead Wave
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="hero" size="default" asChild>
              <a href="https://getleadwave.in/LeadWave.exe">
                Download App
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-muted-foreground hover:text-primary transition-colors py-2 text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Button variant="hero" size="default" className="mt-2" asChild>
                <a href="https://getleadwave.in/LeadWave.exe">
                  Download App
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;