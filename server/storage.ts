import {
  Service,
  InsertService,
  Testimonial,
  InsertTestimonial,
  Booking,
  InsertBooking,
  Contact,
  InsertContact,
  Feedback,
  InsertFeedback
} from "@shared/schema";

export interface IStorage {
  // Services
  getAllServices(): Promise<Service[]>;
  getServicesByCategory(category: string): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getApprovedTestimonials(): Promise<Testimonial[]>;
  addTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Contact
  submitContact(contact: InsertContact): Promise<Contact>;
  
  // Feedback
  submitFeedback(feedback: InsertFeedback): Promise<Feedback>;
  
  // User (from the original template)
  getUser(id: number): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
}

export class MemStorage implements IStorage {
  private users: Map<number, any>;
  private services: Map<number, Service>;
  private testimonials: Map<number, Testimonial>;
  private bookings: Map<number, Booking>;
  private contacts: Map<number, Contact>;
  private feedback: Map<number, Feedback>;
  
  private userId: number = 1;
  private serviceId: number = 1;
  private testimonialId: number = 1;
  private bookingId: number = 1;
  private contactId: number = 1;
  private feedbackId: number = 1;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.testimonials = new Map();
    this.bookings = new Map();
    this.contacts = new Map();
    this.feedback = new Map();
    
    // Initialize with sample data
    this.initializeServices();
    this.initializeTestimonials();
  }
  
  // Initialize sample services
  private initializeServices() {
    const sampleServices: InsertService[] = [
      {
        name: "Haircut & Styling",
        description: "Personalized cuts and styling tailored to your face shape and preferences.",
        category: "hair",
        price: "₹500 onwards",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Hair Coloring",
        description: "Full color, highlights, balayage, and ombre using premium products.",
        category: "hair",
        price: "₹1200 onwards",
        image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Hair Treatments",
        description: "Nourishing treatments for damaged hair, including keratin and protein therapies.",
        category: "hair",
        price: "₹800 onwards",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Facial Treatments",
        description: "Rejuvenating facials customized for your skin type and concerns.",
        category: "skin",
        price: "₹700 onwards",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Threading & Waxing",
        description: "Precision threading and gentle waxing for smooth, hair-free skin.",
        category: "skin",
        price: "₹150 onwards",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Bridal Makeup",
        description: "Complete bridal packages including trials, day-of makeup, and hair styling.",
        category: "makeup",
        price: "₹5000 onwards",
        image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Party Makeup",
        description: "Glamorous looks for special occasions and events.",
        category: "makeup",
        price: "₹1500 onwards",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
      }
    ];
    
    sampleServices.forEach(service => {
      this.services.set(this.serviceId, { ...service, id: this.serviceId++ });
    });
  }
  
  // Initialize sample testimonials
  private initializeTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Priya Sharma",
        role: "Regular Client",
        content: "I've been coming to Luxe Salon for over a year now, and I'm always impressed with the quality of service. My stylist understands exactly what I want and delivers every time. The atmosphere is relaxing, and the staff is friendly and professional.",
        rating: 5
      },
      {
        name: "Aarti Reddy",
        role: "Bridal Client",
        content: "The bridal package at Luxe Salon exceeded my expectations. The team was attentive to all my needs and made me look absolutely stunning on my special day. The trial session was thorough, and they incorporated all my feedback for the final look.",
        rating: 5
      },
      {
        name: "Rahul Verma",
        role: "Loyal Client",
        content: "As a man who's particular about his haircut, I've finally found a salon that gets it right every time. The stylists are skilled and take the time to understand exactly what you want. The complimentary scalp massage is a great touch!",
        rating: 4
      }
    ];
    
    sampleTestimonials.forEach(testimonial => {
      this.testimonials.set(this.testimonialId, { 
        ...testimonial, 
        id: this.testimonialId++ 
      });
    });
  }

  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getServicesByCategory(category: string): Promise<Service[]> {
    return Array.from(this.services.values()).filter(
      service => service.category === category
    );
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async addTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
  
  // Booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.bookingId++;
    const now = new Date();
    const newBooking = { 
      ...booking, 
      id, 
      createdAt: now
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }
  
  // Contact methods
  async submitContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const now = new Date();
    const newContact = { 
      ...contact, 
      id, 
      createdAt: now
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
  
  // Feedback methods
  async submitFeedback(feedback: InsertFeedback): Promise<Feedback> {
    const id = this.feedbackId++;
    const now = new Date();
    const newFeedback = { 
      ...feedback, 
      id, 
      createdAt: now,
      approved: false
    };
    this.feedback.set(id, newFeedback);
    return newFeedback;
  }

  // Original user methods from template
  async getUser(id: number): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
