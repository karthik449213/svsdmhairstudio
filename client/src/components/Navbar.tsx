import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  compact?: boolean;
}

const Navbar = ({ compact = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "bg-white shadow-md fixed w-full z-50 transition-all duration-300",
        compact ? "py-2" : "py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl md:text-3xl font-playfair font-bold text-primary">
              <span className="text-accent">Luxe</span> Salon
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" active={location === "/"}>Home</NavLink>
            <NavLink href="/about" active={location === "/about"}>About</NavLink>
            <NavLink href="/services" active={location === "/services"}>Services</NavLink>
            <NavLink href="/pricing" active={location === "/pricing"}>Pricing</NavLink>
            <NavLink href="/testimonials" active={location === "/testimonials"}>Testimonials</NavLink>
            <NavLink href="/contact" active={location === "/contact"}>Contact</NavLink>
          </div>

          {/* Book Now Button - Desktop */}
          <Button
            asChild
            className="hidden md:block bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            <Link href="/contact#booking">Book Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in duration-300">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" active={location === "/"}>Home</MobileNavLink>
              <MobileNavLink href="/about" active={location === "/about"}>About</MobileNavLink>
              <MobileNavLink href="/services" active={location === "/services"}>Services</MobileNavLink>
              <MobileNavLink href="/pricing" active={location === "/pricing"}>Pricing</MobileNavLink>
              <MobileNavLink href="/testimonials" active={location === "/testimonials"}>Testimonials</MobileNavLink>
              <MobileNavLink href="/contact" active={location === "/contact"}>Contact</MobileNavLink>
              
              <Button 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <Link href="/contact#booking">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => (
  <Link href={href}>
    <a className={cn(
      "font-montserrat transition-colors duration-300",
      active ? "text-primary font-medium" : "text-foreground hover:text-primary"
    )}>
      {children}
    </a>
  </Link>
);

const MobileNavLink = ({ href, active, children }: NavLinkProps) => (
  <Link href={href}>
    <a className={cn(
      "font-montserrat py-2 transition-colors duration-300",
      active ? "text-primary font-medium" : "text-foreground hover:text-primary"
    )}>
      {children}
    </a>
  </Link>
);

export default Navbar;
