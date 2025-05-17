import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { setupIntersectionObserver } from "@/lib/utils";

const About = () => {
  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Story" 
            subtitle="Learn about our journey in creating a premium salon experience in Mylavaram"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1 fade-in">
              <img 
                src="https://pixabay.com/get/g16a07e5ceb2ef9e0f935577d31ffcd897e7ffb6572611ae4daa46f600d0cde8ca336dced1653d2d4cb14e60ce3790c6a08572c8cf5764dda723688cac92e96f4_1280.jpg" 
                alt="Luxe Salon interior" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2 fade-in">
              <p className="text-foreground mb-6 leading-relaxed">
                Welcome to Luxe Salon, a haven for style and self-care in Mylavaram. Founded with a passion for enhancing natural beauty and empowering individuals to feel their best, we've created a welcoming space for the whole family.
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
                We believe that everyone deserves to experience the confidence that comes with great hair and healthy skin. Our skilled team of stylists and beauty professionals are dedicated to providing personalized services using premium products and the latest techniques.
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
                At Luxe Salon, we're committed to ongoing education and staying ahead of industry trends to bring you the most current styles and services. Whether you're looking for a quick trim, a complete makeover, or a relaxing skincare session, we're here to exceed your expectations.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mt-1 mr-3 text-accent" />
                    <span>Quality service and personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mt-1 mr-3 text-accent" />
                    <span>Inclusive environment welcoming to all</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mt-1 mr-3 text-accent" />
                    <span>Continuous education and skill development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mt-1 mr-3 text-accent" />
                    <span>Premium products and sustainable practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Our experienced stylists and beauty professionals are dedicated to helping you look and feel your best."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Anika Patel - Senior Stylist" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Anika Patel</h3>
                <p className="text-accent font-medium mb-3">Senior Stylist</p>
                <p className="text-gray-600">With over 10 years of experience, Anika specializes in precision cuts and creative coloring techniques.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Raj Sharma - Color Specialist" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Raj Sharma</h3>
                <p className="text-accent font-medium mb-3">Color Specialist</p>
                <p className="text-gray-600">Raj is known for his expertise in balayage, highlights, and creating personalized color palettes for clients.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Meera Kapoor - Makeup Artist" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Meera Kapoor</h3>
                <p className="text-accent font-medium mb-3">Makeup Artist</p>
                <p className="text-gray-600">Meera creates stunning makeup looks for all occasions, with a special talent for bridal makeup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Experience the Luxe Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our salon and discover why clients trust us with their beauty needs. Our team is ready to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
            >
              <Link href="/contact#booking">Book an Appointment</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary rounded-full text-lg font-semibold"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
