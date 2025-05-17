import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import FeedbackForm from "@/components/FeedbackForm";
import { setupIntersectionObserver } from "@/lib/utils";
import { MessageSquareQuote } from "lucide-react";

const Feedback = () => {
  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Share Your Experience" 
            subtitle="We value your feedback! Let us know about your experience at Luxe Salon."
          />
          
          <FeedbackForm />
          
          <div className="text-center mt-16">
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Your honest feedback helps us improve and serve you better. Thank you for taking the time to share your thoughts with us!
            </p>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              <Link href="/testimonials">
                <MessageSquareQuote className="mr-2 h-5 w-5" />
                Read Testimonials
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Customer Appreciation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="We Value Your Opinion" 
            subtitle="At Luxe Salon, your feedback shapes our service. Here's how we use your valuable input."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="bg-secondary rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">Service Improvements</h3>
              <p className="text-foreground text-center">
                We carefully analyze your feedback to identify areas where we can enhance our service quality and customer experience.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">New Offerings</h3>
              <p className="text-foreground text-center">
                Your suggestions help us develop new services and introduce products that align with your needs and preferences.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">Staff Training</h3>
              <p className="text-foreground text-center">
                Feedback helps us provide targeted training to our team, ensuring they continue to deliver exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Showcase */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Your Feedback in Action" 
            subtitle="See how previous customer feedback has helped us grow and improve."
            light={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
              <div className="bg-white text-foreground rounded-lg p-6 shadow-md">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">You Suggested:</h3>
                <p className="italic mb-4">
                  "It would be great if the salon offered early morning appointments for working professionals."
                </p>
                <h3 className="text-lg font-bold text-primary mb-2">We Implemented:</h3>
                <p>
                  We now open at 7:00 AM three days a week to accommodate clients who need to visit before work hours.
                </p>
              </div>
              
              <div className="bg-white text-foreground rounded-lg p-6 shadow-md">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">You Suggested:</h3>
                <p className="italic mb-4">
                  "I wish you offered online booking to make scheduling appointments easier."
                </p>
                <h3 className="text-lg font-bold text-primary mb-2">We Implemented:</h3>
                <p>
                  We've launched our online booking system allowing you to schedule appointments 24/7 from anywhere.
                </p>
              </div>
            </div>
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
    </div>
  );
};

export default Feedback;
