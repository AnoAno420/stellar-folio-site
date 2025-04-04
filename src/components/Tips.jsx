
import { useState, useEffect, useRef } from 'react';
import { Lightbulb, Rocket, Clock, Code, Shield, Users } from 'lucide-react';

const tips = [
  {
    icon: <Lightbulb className="h-6 w-6 text-highlight" />,
    title: "Start with Planning",
    content: "Always begin with a solid plan. Outline your project requirements, create wireframes, and establish a clear roadmap before writing any code."
  },
  {
    icon: <Rocket className="h-6 w-6 text-highlight" />,
    title: "Embrace Modern Tools",
    content: "Stay up-to-date with the latest tools and technologies. Using modern frameworks and libraries can significantly improve your development workflow."
  },
  {
    icon: <Clock className="h-6 w-6 text-highlight" />,
    title: "Time Management",
    content: "Break large tasks into smaller, manageable chunks. Use techniques like Pomodoro to maintain focus and prevent burnout during long coding sessions."
  },
  {
    icon: <Code className="h-6 w-6 text-highlight" />,
    title: "Clean Code Practices",
    content: "Write clean, readable code with proper comments and documentation. Your future self and team members will thank you for it."
  },
  {
    icon: <Shield className="h-6 w-6 text-highlight" />,
    title: "Security First",
    content: "Always prioritize security in your applications. Follow best practices for authentication, data validation, and protection against common vulnerabilities."
  },
  {
    icon: <Users className="h-6 w-6 text-highlight" />,
    title: "User-Centered Design",
    content: "Design your applications with the end-user in mind. Conduct user testing and gather feedback to continuously improve the user experience."
  }
];

const Tips = () => {
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
      id="tips" 
      ref={sectionRef}
      className="py-20 bg-darkNavy"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight">#</span> Development Tips
          </h2>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          <p className="text-primary/80 max-w-3xl mx-auto text-center mb-12">
            Over the years, I've gathered some insights that might help you in your development journey. 
            Here are some of my top recommendations for building better applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-slate p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 bg-navy p-2 rounded-lg">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-highlight">{tip.title}</h3>
                </div>
                <p className="text-primary/80">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
