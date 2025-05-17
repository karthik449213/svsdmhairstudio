import { Switch, Route } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Feedback from "@/pages/Feedback";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar compact={scrollY > 100} />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/feedback" component={Feedback} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      {/* Floating Book Now Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a href="#booking" className="bg-accent text-accent-foreground rounded-full shadow-lg py-3 px-6 flex items-center justify-center font-semibold pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Now
        </a>
      </div>
    </div>
  );
}

export default App;
