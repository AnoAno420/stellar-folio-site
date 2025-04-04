
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 h-6 w-6 text-highlight opacity-50">×</div>
        <div className="absolute top-32 right-32 h-6 w-6 text-green-500 opacity-50">○</div>
        <div className="absolute bottom-40 left-20 h-6 w-6 text-highlight opacity-50">×</div>
        <div className="absolute bottom-52 left-32 h-6 w-6 text-green-500 opacity-50">○</div>
        <div className="absolute top-40 left-1/4 h-6 w-6 text-highlight opacity-50">×</div>
        <div className="absolute bottom-20 right-1/4 h-6 w-6 text-green-500 opacity-50">○</div>
      </div>
      
      <div className="container mx-auto px-4 space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="space-y-2">
          <h3 className="text-highlight tracking-wider font-medium">FULL STACK DEVELOPER | REACT SPECIALIST | UI/UX ENTHUSIAST</h3>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight glow">YOUR NAME</h1>
        </div>
        
        <p className="text-lg md:text-xl text-primary/80 max-w-2xl">
          I'm a full-stack developer with expertise in creating beautiful, 
          functional websites and applications with modern technologies.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            onClick={scrollToContact}
            className="bg-highlight text-navy hover:bg-highlight/90 btn-glow font-medium"
          >
            Hire Me
          </Button>
          
          <Button 
            variant="outline" 
            className="border-highlight text-highlight hover:bg-highlight/10"
          >
            Download CV
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="text-highlight">
          <ArrowDownCircle className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
