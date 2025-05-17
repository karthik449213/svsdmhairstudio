import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Service, Testimonial } from "@shared/schema";
import { setupIntersectionObserver } from "@/lib/utils";

const Home = () => {
  // Fetch services for the showcase section
  const { 
    data: services, 
    isLoading: isLoadingServices,
    error: servicesError
  } = useQuery<Service[]>({
    queryKey: ["/api/services"]
  });
  
  // Fetch testimonials
  const { 
    data: testimonials, 
    isLoading: isLoadingTestimonials,
    error: testimonialsError
  } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"]
  });
  
  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  // Hair services showcase
  const hairServices = services?.filter(service => service.category === "hair").slice(0, 3) || [];
  
  // Featured testimonials
  const featuredTestimonials = testimonials?.slice(0, 3) || [];

  return (
    <>
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">Welcome to Luxe Salon</h2>
              <p className="text-foreground mb-6 leading-relaxed">
                A haven for style and self-care in Mylavaram. Founded with a passion for enhancing natural beauty and empowering individuals to feel their best, we've created a welcoming space for the whole family.
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
                We believe that everyone deserves to experience the confidence that comes with great hair and healthy skin. Our skilled team of stylists and beauty professionals are dedicated to providing personalized services using premium products and the latest techniques.
              </p>
              <Button asChild variant="link" className="text-primary hover:text-primary/80">
                <Link href="/about">
                  Read More About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 fade-in">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Hairstylist working with client" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Facial beauty treatment" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Hair styling service" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Salon interior" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Showcase */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Discover our comprehensive range of professional services designed to enhance your natural beauty and provide a relaxing experience."
          />
          
          {isLoadingServices ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-md h-80 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : servicesError ? (
            <div className="text-center py-10">
              <p className="text-red-500">Failed to load services. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
              {hairServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from our satisfied clients about their experiences at Luxe Salon."
          />
          
          {isLoadingTestimonials ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-secondary rounded-lg p-6 shadow-md h-64 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : testimonialsError ? (
            <div className="text-center py-10">
              <p className="text-red-500">Failed to load testimonials. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
              {featuredTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg font-semibold"
            >
              <Link href="/feedback">Share Your Experience</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience the Luxe Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert stylists help you look and feel your best.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
          >
            <Link href="/contact#booking">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Your Appointment
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
