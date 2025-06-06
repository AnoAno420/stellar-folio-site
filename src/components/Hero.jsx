import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background elements with staggered animations */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-20 right-20 h-6 w-6 text-highlight opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.9s' }}>×</div>
        <div className={`absolute top-32 right-32 h-6 w-6 text-green-500 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.2s' }}>○</div>
        <div className={`absolute bottom-40 left-20 h-6 w-6 text-highlight opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.5s' }}>×</div>
        <div className={`absolute bottom-52 left-32 h-6 w-6 text-green-500 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.8s' }}>○</div>
        <div className={`absolute top-40 left-1/4 h-6 w-6 text-highlight opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '2.1s' }}>×</div>
        <div className={`absolute bottom-20 right-1/4 h-6 w-6 text-green-500 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '2.4s' }}>○</div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-8 md:w-2/3">
          <div className="space-y-2">
            <h3 className={`text-highlight tracking-wider font-medium opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>FULL STACK DEVELOPER | REACT SPECIALIST | UI/UX ENTHUSIAST</h3>
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tight glow opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>YOUR NAME</h1>
          </div>
          
          <p className={`text-lg md:text-xl text-primary/80 max-w-2xl opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.7s' }}>
            I'm a full-stack developer with expertise in creating beautiful, 
            functional websites and applications with modern technologies.
          </p>
          
          <div className={`flex flex-wrap gap-4 pt-4 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.9s' }}>
            <Button 
              onClick={scrollToContact}
              className="bg-highlight text-navy hover:bg-highlight/90 btn-glow font-medium transform transition-transform duration-300 hover:scale-105"
            >
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              className="border-highlight text-highlight hover:bg-highlight/10 transform transition-transform duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>
        </div>
        
        {/* Photo Circle with Glow */}
        <div 
          className={`relative mx-auto md:mx-0 mt-8 md:mt-0 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} 
          style={{ animationDelay: '1.1s' }}
        >
          <div className="absolute inset-0 rounded-full bg-highlight/20 blur-xl transform scale-110 pulse-glow"></div>
          <div className="float h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-highlight/50 overflow-hidden relative">
            <AspectRatio ratio={1} className="h-full w-full">
              <div className="bg-slate-800 h-full w-full flex items-center justify-center text-highlight/70">
                <span className="text-sm">Your Photo Here</span>
              </div>
              {/* Uncomment and use the img tag when you have a photo */}
              {/* <img 
                src="/path-to-your-photo.jpg" 
                alt="Your Name" 
                className="h-full w-full object-cover"
              /> */}
            </AspectRatio>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.5s' }}>
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="text-highlight animate-bounce">
          <ArrowDownCircle className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
