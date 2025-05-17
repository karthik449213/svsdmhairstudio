# Luxe Salon - Hair Salon Website

A modern, responsive website for Luxe Salon, a unisex hair salon in Mylavaram, Andhra Pradesh, India. The website showcases the salon's services, pricing, testimonials, and provides online booking functionality.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean and professional design with smooth animations
- **Service Listings**: Categorized display of salon services with pricing
- **Online Booking**: Form to schedule appointments
- **Testimonials**: Client reviews and feedback
- **Contact Information**: Location, hours, and contact details
- **Feedback System**: Allow clients to submit their experience

## Tech Stack

- **Frontend**:
  - React (with TypeScript)
  - Tailwind CSS
  - shadcn/ui components
  - React Hook Form for form management
  - TanStack Query (React Query) for data fetching

- **Backend**:
  - Node.js with Express
  - In-memory data storage
  - RESTful API endpoints

## Project Structure

```
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── data/       # Static data
│   │   ├── hooks/      # Custom React hooks
│   │   └── lib/        # Utility functions
│
├── server/             # Backend Express server
│   ├── routes.ts       # API route definitions
│   ├── storage.ts      # Data storage implementation
│   └── index.ts        # Server entry point
│
└── shared/             # Shared code between client and server
    └── schema.ts       # Data models and validation schemas
```

## Deployment Guide

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
   ```
   git clone <repository-url>
   cd luxe-salon
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

### Deploying to Netlify

1. **Create a Netlify account** if you don't have one at [netlify.com](https://www.netlify.com/)

2. **Prepare your project for deployment**:
   
   - Create a `netlify.toml` file in the root directory:
   
   ```toml
   [build]
     command = "npm run build"
     publish = "client/dist"
     functions = "functions"
   
   [dev]
     command = "npm run dev"
     port = 5000
   
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Create serverless functions for the backend**:
   
   - Create a `functions` directory in the root
   - Convert Express routes to Netlify serverless functions
   - Example function for services API in `functions/services.js`:
   
   ```javascript
   const { storage } = require('../server/storage');
   
   exports.handler = async function(event, context) {
     try {
       const services = await storage.getAllServices();
       return {
         statusCode: 200,
         body: JSON.stringify(services)
       };
     } catch (error) {
       return {
         statusCode: 500,
         body: JSON.stringify({ error: 'Failed to fetch services' })
       };
     }
   };
   ```

4. **Deploy to Netlify**:
   
   - Push your code to GitHub, GitLab, or Bitbucket
   - Log in to Netlify and select "New site from Git"
   - Choose your repository and configure build settings
   - Set build command to `npm run build` and publish directory to `client/dist`
   - Deploy!

### Deploying to Render

1. **Create a Render account** at [render.com](https://render.com/)

2. **Deploy the backend as a Web Service**:
   
   - Log in to Render and click "New +"
   - Select "Web Service"
   - Connect your GitHub/GitLab account and select your repository
   - Configure the service:
     - Name: `luxe-salon-api`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm run start:server`
   - Click "Create Web Service"

3. **Deploy the frontend as a Static Site**:
   
   - Click "New +" and select "Static Site"
   - Connect your repository again
   - Configure the site:
     - Name: `luxe-salon`
     - Build Command: `npm run build`
     - Publish Directory: `client/dist`
     - Environment Variables: Add `VITE_API_URL` pointing to your backend service URL
   - Click "Create Static Site"

4. **Configure CORS on your backend**:
   
   - Add CORS middleware to allow requests from your frontend domain:
   
   ```javascript
   // Add this to server/index.ts
   app.use(cors({
     origin: process.env.FRONTEND_URL || 'https://your-frontend-url.onrender.com',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization']
   }));
   ```

5. **Update API URLs in the frontend**:
   
   - Modify `client/src/lib/queryClient.ts` to use the environment variable:
   
   ```typescript
   const apiBaseUrl = import.meta.env.VITE_API_URL || '';
   
   export async function apiRequest(
     method: string,
     path: string,
     body?: any
   ) {
     const url = `${apiBaseUrl}${path}`;
     // Rest of the function...
   }
   ```

## Environment Variables

For local development, create a `.env` file in the root:

```
# Backend
PORT=5000
NODE_ENV=development

# Frontend (for production deployment)
VITE_API_URL=https://your-backend-service.onrender.com
```

For production deployment:
- On Netlify: Set environment variables in the site settings
- On Render: Set environment variables in the service settings

## License

MIT