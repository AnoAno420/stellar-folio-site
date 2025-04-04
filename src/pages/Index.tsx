
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Tips from '@/components/Tips';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set initial load state
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth scroll to section if URL has hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <div className={`min-h-screen flex flex-col opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDuration: '0.8s' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Tips />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
