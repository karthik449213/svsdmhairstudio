# Luxe Salon - Hair Salon Website

A modern, responsive website for a unisex hair salon featuring service listings, online booking, and client testimonials.

## Features

- Responsive design for all devices
- Service showcase with detailed descriptions
- Online booking system
- Client testimonials
- Contact form
- Customer feedback submission
- About us page with salon information
- Pricing information

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

The application will be available at http://localhost:5000

## Deployment Instructions

This project is set up for separate deployment of frontend and backend:

### Frontend Deployment (Netlify)

1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `client/dist`
3. Add the following environment variables:
   - `VITE_API_URL`: Your backend API URL (e.g., https://your-api.onrender.com)

4. Update the redirect in `netlify.toml` to point to your actual backend URL:
   ```toml
   [[redirects]]
     from = "/api/*"
     to = "https://your-backend-url.onrender.com/api/:splat"
     status = 200
     force = true
   ```

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `node dist/index.js`
4. Add the following environment variables:
   - `NODE_ENV`: `production`
   - `ALLOWED_ORIGINS`: Comma-separated list of allowed origins (e.g., `https://your-site.netlify.app,http://localhost:5000`)

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Page components
  - `/src/hooks` - Custom React hooks
  - `/src/lib` - Utility functions and configuration
  - `/src/data` - Static data for the application
- `/server` - Backend Express server
  - `index.ts` - Server entry point
  - `routes.ts` - API route definitions
  - `storage.ts` - Data storage implementation
- `/shared` - Shared code between frontend and backend
  - `schema.ts` - Data schema definitions

## Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui, React Query
- **Backend**: Node.js, Express, TypeScript
- **Data Validation**: Zod
- **Forms**: React Hook Form
- **Routing**: wouter