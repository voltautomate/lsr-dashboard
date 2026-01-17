import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import CompletedProjects from '@/sections/CompletedProjects';
import InProgressProjects from '@/sections/InProgressProjects';
import FutureRoadmap from '@/sections/FutureRoadmap';
import SalesSystem from '@/sections/SalesSystem';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompletedProjects />
      <InProgressProjects />
      <FutureRoadmap />
      <SalesSystem />
      <Footer />
    </main>
  );
}
