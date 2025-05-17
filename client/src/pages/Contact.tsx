import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import BookingForm from "@/components/BookingForm";
import { setupIntersectionObserver } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    setupIntersectionObserver();
    
    // Scroll to booking section if hash is present
    if (window.location.hash === '#booking') {
      const element = document.getElementById('booking');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="We're here to answer your questions and help you schedule your appointments."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ContactForm />
            
            <div className="fade-in">
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary rounded-full p-3 text-accent mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Address</h4>
                      <p className="text-gray-600">Main Street, Near City Center<br/>Mylavaram, Andhra Pradesh, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary rounded-full p-3 text-accent mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary rounded-full p-3 text-accent mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <p className="text-gray-600">contact@luxesalon.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary rounded-full p-3 text-accent mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Operating Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM<br/>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-foreground mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-secondary hover:bg-accent text-primary hover:text-white transition-colors duration-300 rounded-full p-3"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-secondary hover:bg-accent text-primary hover:text-white transition-colors duration-300 rounded-full p-3"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl h-60 w-full shadow-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30511.48215565082!2d80.60543722566761!3d16.797632366367905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35dc4cb9b547c7%3A0xd94d5248c1f3ba8!2sMylavaram%2C%20Andhra%20Pradesh%20521230!5e0!3m2!1sen!2sin!4v1687347523412!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps location of Luxe Salon in Mylavaram"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Book Your Appointment" 
            subtitle="Schedule your visit to Luxe Salon and experience our premium services. We look forward to welcoming you!"
            light={true}
          />
          
          <BookingForm />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and policies."
          />
          
          <div className="max-w-3xl mx-auto space-y-6 fade-in">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">Do I need to make an appointment?</h3>
              <p className="text-foreground">
                While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred stylist, service, and time slot.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">How early should I arrive for my appointment?</h3>
              <p className="text-foreground">
                We recommend arriving 10-15 minutes before your scheduled appointment to complete any necessary paperwork and enjoy our relaxing atmosphere.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">What is your cancellation policy?</h3>
              <p className="text-foreground">
                We request a 24-hour notice for cancellations or rescheduling. This allows us to offer your slot to another client who may be waiting.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">Do you offer gift cards?</h3>
              <p className="text-foreground">
                Yes! Gift cards are available in any denomination and can be purchased in-store or by phone.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">What products do you use and sell?</h3>
              <p className="text-foreground">
                We use high-quality, professional-grade products for all our services. Many of these products are also available for purchase in our salon to help you maintain your look at home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
