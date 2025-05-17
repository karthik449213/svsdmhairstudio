import { useEffect } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { Testimonial } from "@shared/schema";
import { setupIntersectionObserver } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  // Fetch all testimonials
  const { 
    data: testimonials, 
    isLoading,
    error
  } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"]
  });
  
  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  if (isLoading) {
    return (
      <div className="pt-20">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title="What Our Clients Say" 
              subtitle="Hear from our satisfied clients about their experiences at Luxe Salon."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-secondary rounded-lg p-6 shadow-md h-64 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
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
              title="What Our Clients Say" 
              subtitle="Hear from our satisfied clients about their experiences at Luxe Salon."
            />
            <div className="py-10">
              <p className="text-red-500 mb-4">Failed to load testimonials. Please try again later.</p>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from our satisfied clients about their experiences at Luxe Salon."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
            {testimonials?.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg font-semibold"
            >
              <Link href="/feedback">
                <MessageSquare className="mr-2 h-5 w-5" />
                Share Your Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Client Experience Banner */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Experience the Luxe Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our growing family of satisfied clients and discover why so many in Mylavaram choose Luxe Salon for their hair, skin, and beauty needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary rounded-full text-lg font-semibold"
            >
              <Link href="/contact#booking">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Video Testimonial Section (Optional) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Success Stories" 
            subtitle="Watch these video testimonials from clients who have experienced transformations at Luxe Salon."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="bg-gray-200 w-full h-64 flex items-center justify-center text-gray-500">
                  <p>Video Testimonial Preview</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="icon"
                    className="rounded-full bg-primary/80 hover:bg-primary w-14 h-14 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Neha's Bridal Experience</h3>
                <p className="text-gray-600">
                  "The team at Luxe Salon made my wedding day so special. Watch my full experience and see the stunning results."
                </p>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="bg-gray-200 w-full h-64 flex items-center justify-center text-gray-500">
                  <p>Video Testimonial Preview</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="icon"
                    className="rounded-full bg-primary/80 hover:bg-primary w-14 h-14 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Ravi's Style Transformation</h3>
                <p className="text-gray-600">
                  "I never thought a haircut could change how I feel about myself. See my journey with Luxe Salon."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-6">
            Ready to Experience the Luxe Difference?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-foreground">
            Join our family of satisfied clients and let us help you look and feel your best.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
          >
            <Link href="/contact#booking">Book Your First Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
