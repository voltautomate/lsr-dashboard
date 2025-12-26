# LSR Automation & Infrastructure Dashboard

A modern, interactive dashboard showcasing automation and infrastructure work completed for Limbic System Rewire (LSR).

## Features

- **Animated Counters**: Numbers count up on scroll for impactful data presentation
- **Interactive Project Cards**: Click to expand and see detailed metrics
- **Progress Indicators**: Visual progress bars for in-progress projects
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Powered by Framer Motion
- **Brand-Aligned Design**: Warm, wellness-inspired color palette

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headers) + DM Sans (body)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel:

1. Push to GitHub
2. Import the repository in Vercel
3. Deploy automatically

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page
├── components/
│   ├── AnimatedCounter.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── ProgressBar.tsx
│   ├── ProjectCard.tsx
│   └── SectionHeader.tsx
├── sections/
│   ├── CompletedProjects.tsx
│   ├── FutureRoadmap.tsx
│   └── InProgressProjects.tsx
└── data/
    └── projects.ts      # All project data (easy to update)
```

## Updating Data

All project metrics and information are stored in `src/data/projects.ts`. Update this file to modify:

- Completed project metrics
- In-progress project status
- Future roadmap items
- Summary statistics

## Brand Colors

- **Sage Green**: Primary brand color
- **Teal**: Accent for in-progress items
- **Gold**: Accent for opportunities/roadmap
- **Coral**: Used for "before" states and highlights
- **Cream/Taupe**: Neutral backgrounds

---

Built for Limbic System Rewire by your automation team.
