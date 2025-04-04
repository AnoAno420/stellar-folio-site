
import { useState, useEffect, useRef } from 'react';

const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "HTML & CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "SQL", level: 60, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "other" },
  { name: "UI/UX Design", level: 70, category: "other" },
  { name: "Responsive Design", level: 90, category: "frontend" }
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section 
      id="tech" 
      ref={sectionRef}
      className="py-20 bg-navy"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight">#</span> Tech Stack
          </h2>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 p-1 bg-slate rounded-lg">
              {['all', 'frontend', 'backend', 'other'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    filter === category 
                      ? 'bg-highlight text-navy font-medium' 
                      : 'text-primary/70 hover:text-primary'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-slate p-6 rounded-lg transition-all duration-500 hover:shadow-lg hover:shadow-highlight/20 animate-scale-in opacity-0"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-highlight font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-darkNavy rounded-full h-2.5">
                  <div 
                    className="bg-highlight h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${0.2 + index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
