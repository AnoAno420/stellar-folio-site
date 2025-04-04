
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with user authentication, product catalog, and payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "Smart task management application with AI-powered prioritization and scheduling features.",
    tech: ["Vue.js", "Firebase", "TensorFlow.js", "Express"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management with real-time statistics.",
    tech: ["React", "Redux", "Chart.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-navy to-darkNavy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center">
          Featured Projects
        </h2>
        <p className="text-primary/70 text-lg max-w-3xl mx-auto text-center mb-16">
          A collection of my recent work and personal projects. Each project represents unique challenges and solutions.
        </p>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project) => (
              <Card 
                key={project.id}
                className="bg-slate/30 border-slate/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-highlight/10 hover:-translate-y-2"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-darkNavy/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate/30 p-2 rounded-full hover:bg-highlight/20 transition-colors"
                        >
                          <Github className="h-6 w-6 text-white" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate/30 p-2 rounded-full hover:bg-highlight/20 transition-colors"
                        >
                          <ExternalLink className="h-6 w-6 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gradient">{project.title}</CardTitle>
                  <CardDescription className="text-primary/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-muted rounded-full text-primary/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost"
                    className="text-highlight hover:text-highlight/80 p-0 hover:bg-transparent"
                    asChild
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projectData.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="bg-slate/30 border-slate/50 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gradient">{project.title}</CardTitle>
                      <CardDescription className="text-primary/70">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 bg-muted rounded-full text-primary/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mx-2 translate-y-0" />
              <CarouselNext className="relative static mx-2 translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            className="btn-glow mt-8 bg-navy border border-highlight text-highlight hover:bg-navy/80"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Let's work together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
