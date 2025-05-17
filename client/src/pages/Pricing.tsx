import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";
import { setupIntersectionObserver } from "@/lib/utils";
import { prices } from "@/data/prices";
import { Scissors, Sparkles, Info } from "lucide-react";

const Pricing = () => {
  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Pricing" 
            subtitle="We offer competitive pricing for all our premium services. Prices may vary based on hair length, complexity, and specific requirements."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 fade-in">
            {/* Hair Services Pricing */}
            <PriceTable 
              title="Hair Services" 
              icon={<Scissors className="text-primary" size={24} />} 
              prices={prices.hair}
            />
            
            {/* Skin & Makeup Services Pricing */}
            <PriceTable 
              title="Skin & Makeup Services" 
              icon={<Sparkles className="text-primary" size={24} />} 
              prices={prices.skinMakeup}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 fade-in">
            <h3 className="text-xl font-playfair font-bold text-primary mb-4 flex items-center">
              <Info className="mr-2" size={20} />
              Notes:
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">•</span>
                <span>Prices may vary based on hair length, thickness, and complexity of the service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">•</span>
                <span>Additional charges may apply for premium products or extra treatments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">•</span>
                <span>Bridal packages include trials and day-of services. Please inquire for detailed packages.</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
            >
              <Link href="/contact#booking">Book Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Special Offers" 
            subtitle="Take advantage of our limited-time promotions and seasonal discounts."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-primary text-white p-3 text-center font-semibold">
                WEEKDAY SPECIAL
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                  20% Off Haircuts
                </h3>
                <p className="text-foreground mb-4">
                  Visit us Monday through Thursday between 10 AM and 2 PM for 20% off any haircut service.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  *Cannot be combined with other offers. Valid ID required.
                </p>
                <Button 
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  <Link href="/contact#booking">Book Now</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-accent text-accent-foreground p-3 text-center font-semibold">
                PACKAGE DEAL
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                  Hair + Facial Package
                </h3>
                <p className="text-foreground mb-4">
                  Book a haircut and facial together and save 15% on the total service price.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  *Must be booked and completed on the same day. Advance booking recommended.
                </p>
                <Button 
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  <Link href="/contact#booking">Book Now</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-primary text-white p-3 text-center font-semibold">
                FIRST-TIME CLIENT
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                  10% Off First Visit
                </h3>
                <p className="text-foreground mb-4">
                  New clients receive 10% off their first service at Luxe Salon. Welcome to the family!
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  *One-time offer for first-time clients only. Please mention at time of booking.
                </p>
                <Button 
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  <Link href="/contact#booking">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships/Loyalty Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Luxe Salon Loyalty Program</h2>
              <p className="mb-6 text-lg">
                Join our loyalty program and earn points with every visit. Points can be redeemed for discounts, free add-on services, or premium products.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">→</span>
                  <span>Earn 1 point for every ₹100 spent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">→</span>
                  <span>Exclusive birthday offers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">→</span>
                  <span>Early access to new services and promotions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">→</span>
                  <span>Special member-only events</span>
                </li>
              </ul>
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-semibold"
              >
                <Link href="/contact">Ask About Membership</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Stylist working with client" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
