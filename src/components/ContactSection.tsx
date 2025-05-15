import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {
    toast
  } = useToast();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here would be the actual form submission logic

    toast({
      title: "Success",
      description: "Your message has been sent. We'll contact you soon!"
    });

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };
  const contactVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="contact" className="section-padding bg-financial-navy">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={contactVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">Get in touch for expert financial guidance</p>
        </motion.div>
        
        <div className="glass-card rounded-xl p-6 md:p-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="bg-financial-navy/50 border-financial-purple/30 text-white placeholder:text-gray-400" />
                </div>
                
                <div>
                  <Input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="bg-financial-navy/50 border-financial-purple/30 text-white placeholder:text-gray-400" />
                </div>
                
                <div>
                  <Textarea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} className="bg-financial-navy/50 border-financial-purple/30 text-white placeholder:text-gray-400 min-h-[120px]" />
                </div>
                
                <Button type="submit" className="w-full bg-financial-lightpurple hover:bg-financial-purple text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/30 flex items-center justify-center text-financial-lightpurple">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-gray-300">+91 9677128566 (Whatsapp available)</p>
                    <p className="text-gray-300">+91 8281956646 (Whatsapp available)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/30 flex items-center justify-center text-financial-lightpurple">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p className="text-gray-300">ar.associates1957@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/30 flex items-center justify-center text-financial-lightpurple">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Visit Us</p>
                    <p className="text-gray-300">1st Floor Harmony Tower, Opp SBI Koppam Branch, Palakkad Kerala-678001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;