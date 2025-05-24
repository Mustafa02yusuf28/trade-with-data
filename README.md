# Trade with Data – AI-Powered Trading Companion Landing Page

## Overview

**Trade with Data** is a modern, responsive landing page for an AI-powered trading companion platform, designed for Indian stock market enthusiasts. The platform helps users track trades, share strategies, stay updated with financial news, and engage with a vibrant trading community—all with a clean, professional, and user-friendly interface.

## Features

- **Hero Section:**
  - Bold headline and subheadline introducing the platform
  - Clear call-to-action buttons
  - Dashboard mockup with recent Indian stock trades and a performance chart

- **Feature Highlights:**
  - **Trade Journal:** Log every trade, track performance, and tag strategies (with Indian stocks and INR)
  - **Strategy Hub:** Discover, build, and share trading strategies
  - **News & AI Updates:** Stay updated with financial news and AI-driven insights
  - **Community Forum:** Join discussions with thousands of traders & AI enthusiasts

- **Navigation Bar:**
  - Logo/title and navigation links for easy access to all sections

- **Modern UI:**
  - Spacious, clean, and responsive design using Tailwind CSS
  - Dark theme with teal/cyan highlights

## Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory
   - Add the following variables:
     ```
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your-nextauth-secret
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     ADMIN_EMAIL=your-admin-email@example.com
     ```
   - Replace the placeholders with your actual values:
     - `NEXTAUTH_SECRET`: Generate a random string for NextAuth.js
     - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Get these from the Google Cloud Console
     - `ADMIN_EMAIL`: Your Google email address for admin access

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Customization
- Update stock names, news, and forum topics in `src/app/page.tsx` as needed.
- Adjust colors and layout via Tailwind CSS classes.
- Expand with additional pages and features as your platform grows.

## License
This project is for demonstration and educational purposes. Please adapt and use as needed for your own trading or fintech projects.

## Deployment

This project is configured for deployment on Vercel. Simply push your changes to GitHub and Vercel will automatically deploy them.
