
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations after component mounts
    setIsLoaded(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className={`text-2xl font-bold text-gradient opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.1s' }}
        >
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {['about', 'experience', 'tech', 'projects', 'tips', 'contact'].map((item, index) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className={`nav-link capitalize text-primary/80 hover:text-highlight transition-colors opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu with animation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {['about', 'experience', 'tech', 'projects', 'tips', 'contact'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="text-left px-4 py-2 capitalize text-primary/80 hover:text-highlight transition-colors animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
