
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-navy"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight">#</span> About Me
          </h2>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-primary/80">
                Hello! I'm a passionate developer who loves creating elegant solutions to complex problems. 
                With a strong foundation in both front-end and back-end technologies, I bring ideas to life 
                through clean, efficient code and thoughtful user experiences.
              </p>
              
              <p className="text-primary/80">
                My journey in web development started 5 years ago, and since then, I've worked on a diverse 
                range of projects from e-commerce platforms to real-time applications. I'm constantly learning 
                and exploring new technologies to stay at the forefront of this ever-evolving field.
              </p>
              
              <p className="text-primary/80">
                When I'm not coding, you'll find me hiking in nature, reading about new tech trends, or 
                experimenting with photography. I believe that diverse experiences fuel creativity and 
                bring fresh perspectives to problem-solving.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden h-[400px] relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-highlight/20 group-hover:bg-highlight/10 transition-all duration-300"></div>
              <img 
                src="https://placehold.co/600x800/1E293B/FFFFFF?text=Your+Photo" 
                alt="Developer" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
