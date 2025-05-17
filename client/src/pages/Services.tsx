import { useEffect } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Service } from "@shared/schema";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { setupIntersectionObserver } from "@/lib/utils";
import { Scissors, Sparkles, WandSparkles } from "lucide-react";

const Services = () => {
  // Fetch all services
  const { 
    data: services, 
    isLoading,
    error
  } = useQuery<Service[]>({
    queryKey: ["/api/services"]
  });
  
  useEffect(() => {
    setupIntersectionObserver();
  }, []);
  
  // Group services by category
  const hairServices = services?.filter(service => service.category === "hair") || [];
  const skinServices = services?.filter(service => service.category === "skin") || [];
  const makeupServices = services?.filter(service => service.category === "makeup") || [];

  if (isLoading) {
    return (
      <div className="pt-20">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title="Our Services" 
              subtitle="Discover our comprehensive range of professional services"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-md h-80 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <SectionHeading 
              title="Our Services" 
              subtitle="Discover our comprehensive range of professional services"
            />
            <div className="py-10">
              <p className="text-red-500 mb-4">Failed to load services. Please try again later.</p>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Retry
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Discover our comprehensive range of professional services designed to enhance your natural beauty and provide a relaxing experience."
          />
          
          {/* Hair Care Services */}
          <div id="hair" className="mb-16 fade-in">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
              <Scissors className="mr-3" /> Hair Care Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
          
          {/* Skin Care Services */}
          <div id="skin" className="mb-16 fade-in">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
              <Sparkles className="mr-3" /> Skin Care Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skinServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
          
          {/* Makeup Services */}
          <div id="makeup" className="fade-in">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
              <WandSparkles className="mr-3" /> Makeup Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {makeupServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
            >
              <Link href="/pricing">View All Prices</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Service Banner */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Bridal Packages</h2>
              <p className="mb-6 leading-relaxed">
                Make your special day even more memorable with our comprehensive bridal packages. Our experienced team will work with you to create the perfect look that matches your style, outfit, and wedding theme.
              </p>
              <p className="mb-8 leading-relaxed">
                Packages include pre-wedding consultations, trials, and day-of services for the bride and wedding party.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
              >
                <Link href="/contact#booking">Book a Bridal Consultation</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Bridal Makeup Service" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
