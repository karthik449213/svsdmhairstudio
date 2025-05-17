import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-0">
      <div className="relative h-screen min-h-[500px] max-h-[800px]">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            filter: "brightness(0.8)"
          }}
        ></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 py-24 flex flex-col justify-center">
          <div className="max-w-3xl slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-4">
              Your Style, Your Way.<br /> Hair, Skin & Beauty for Everyone.
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8">
              Trendy haircuts, rejuvenating skincare, and stunning bridal looks for young adults and families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold pulse"
              >
                <Link href="/contact#booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-foreground transition-colors duration-300"
              >
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
