
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: [
      "Led a team of 5 developers in building a new customer-facing application using React and TypeScript",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Optimized application performance resulting in a 30% decrease in load time",
      "Mentored junior developers through code reviews and pair programming sessions"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: [
      "Developed responsive web applications using React, Redux, and Tailwind CSS",
      "Collaborated with designers to transform mockups into functional components",
      "Integrated RESTful APIs and implemented state management solutions",
      "Participated in Agile development processes including daily stand-ups and sprint planning"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "StartUp Vision",
    period: "2019 - 2020",
    description: [
      "Assisted in developing and maintaining the company's website and internal tools",
      "Learned modern JavaScript frameworks and best practices for web development",
      "Implemented responsive designs across multiple screen sizes",
      "Participated in code reviews to improve code quality and learn from senior developers"
    ]
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-darkNavy"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight">#</span> Experience
          </h2>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-highlight/30 transform md:-translate-x-px"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative grid md:grid-cols-2 gap-8",
                    index % 2 === 0 ? "md:text-right" : "", 
                    `animate-fade-in opacity-0`
                  )}
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {/* Left column (or full width on mobile) */}
                  <div className={cn(
                    "md:col-span-1",
                    index % 2 !== 0 && "md:col-start-2"
                  )}>
                    <div className="bg-slate p-6 rounded-lg hover:shadow-lg transition-all duration-300 h-full">
                      <h3 className="text-xl font-bold text-highlight mb-1">{exp.title}</h3>
                      <p className="text-primary/80 font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-primary/60 mb-4">{exp.period}</p>
                      <ul className={cn(
                        "space-y-2 text-primary/80",
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      )}>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-highlight transform -translate-x-1/2"></div>
                  
                  {/* Empty column for layout on desktop */}
                  <div className="hidden md:block md:col-span-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
