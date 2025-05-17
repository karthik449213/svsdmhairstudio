import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertBookingSchema,
  insertContactSchema,
  insertFeedbackSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Error fetching services" });
    }
  });

  // Get services by category
  app.get("/api/services/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const services = await storage.getServicesByCategory(category);
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Error fetching services by category" });
    }
  });

  // Get approved testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getApprovedTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });

  // Create booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const validation = insertBookingSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid booking data", 
          errors: validation.error.errors 
        });
      }
      
      const booking = await storage.createBooking(validation.data);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error creating booking" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validation = insertContactSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid contact data", 
          errors: validation.error.errors 
        });
      }
      
      const contact = await storage.submitContact(validation.data);
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ message: "Error submitting contact form" });
    }
  });

  // Submit feedback
  app.post("/api/feedback", async (req, res) => {
    try {
      const validation = insertFeedbackSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid feedback data", 
          errors: validation.error.errors 
        });
      }
      
      const feedback = await storage.submitFeedback(validation.data);
      res.status(201).json(feedback);
    } catch (error) {
      res.status(500).json({ message: "Error submitting feedback" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
