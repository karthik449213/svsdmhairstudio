import { Link } from "wouter";
import { Facebook, Instagram, Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-accent">Luxe</span> Salon
            </h3>
            <p className="mb-4 text-gray-300">Your Style, Your Way. Hair, Skin & Beauty for Everyone.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/services">Services</FooterLink></li>
              <li><FooterLink href="/pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/testimonials">Testimonials</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><FooterLink href="/services#hair">Hair Care</FooterLink></li>
              <li><FooterLink href="/services#skin">Skin Care</FooterLink></li>
              <li><FooterLink href="/services#makeup">Makeup</FooterLink></li>
              <li><FooterLink href="/services#bridal">Bridal Packages</FooterLink></li>
              <li><FooterLink href="/services#men">Men's Grooming</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3" />
                <span>Main Street, Near City Center<br/>Mylavaram, Andhra Pradesh</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3" />
                <span>contact@luxesalon.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3" />
                <span>Monday - Saturday: 10:00 AM - 8:00 PM<br/>Sunday: 11:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Luxe Salon. All rights reserved. | Designed with ❤️ for Mylavaram</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <div className="text-gray-300 hover:text-accent transition-colors duration-300">
    <Link href={href}>{children}</Link>
  </div>
);

export default Footer;
