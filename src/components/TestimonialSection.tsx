
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Outstanding customer service and expert financial guidance!",
    author: "Jonathan Smith",
    rating: 5
  },
  {
    id: 2,
    content: "AR Associates transformed our financial outlook with their strategic advice.",
    author: "Maria Johnson",
    rating: 5
  },
  {
    id: 3,
    content: "Professional, knowledgeable, and always available when needed.",
    author: "David Williams",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"} 
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-b from-financial-purple/50 to-financial-purple/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-gray-300">What our clients say about us</p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <p className="text-lg text-white text-center mb-4">
                "{testimonials[currentIndex].content}"
              </p>
              
              <p className="text-financial-lightpurple font-medium text-center">
                {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full bg-financial-navy/30 backdrop-blur-sm text-white hover:bg-financial-navy/50"
            >
              <ChevronLeft />
            </Button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full bg-financial-navy/30 backdrop-blur-sm text-white hover:bg-financial-navy/50"
            >
              <ChevronRight />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-financial-lightpurple w-4" : "bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
