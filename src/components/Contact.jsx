
import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-navy"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight">#</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact information */}
            <div className="space-y-8">
              <p className="text-primary/80 max-w-md">
                I'm interested in freelance opportunities – especially ambitious or large projects. 
                However, if you have a request or question, don't hesitate to use the form.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 bg-slate p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-sm text-primary/60">Location</h4>
                    <p className="text-primary">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 bg-slate p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-sm text-primary/60">Email</h4>
                    <p className="text-primary">hello@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 bg-slate p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-sm text-primary/60">Phone</h4>
                    <p className="text-primary">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-slate p-6 rounded-lg animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-darkNavy border-none focus-visible:ring-highlight"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-darkNavy border-none focus-visible:ring-highlight"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-darkNavy border-none focus-visible:ring-highlight"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-darkNavy border-none focus-visible:ring-highlight"
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-highlight text-navy hover:bg-highlight/90 font-medium"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
