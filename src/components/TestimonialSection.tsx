import { useState, useEffect, useRef } from 'react';
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
    content: "AR Associates is one of the best Insurance providers in Palakkad district. I have very close contact with the staff and proprietor for the last five years. Their service is really appreciable. I recommend everyone to take the benefits of the services which they provide.",
    author: "Ram Prakash",
    rating: 5
  },
  {
    id: 2,
    content: "Best in Palakkad for insurance related services and assistance. All my staffs and family members got insured by different policies with the help of Mrs Prabhavathy's guidance.",
    author: "Anil Kumar",
    rating: 5
  },
  {
    id: 3,
    content: "I sought assistance from Mrs. Prabhavathi to choose a mutual fund investments (SIP). Her recommendations were aligned with my objectives, and she guided me through the investment process efficiently.",
    author: "Harsha Sarath",
    rating: 5
  },
  {
    id: 4,
    content: "Excellent service. Honestly well explained on each product. Advising benefits of clients with low premiums. Always reminders sending before the expiry.",
    author: "Jyothi Pulakkat",
    rating: 5
  },
  {
    id: 5,
    content: "Very professional investment service providers. Especially mentioning Prabhavathi madam who is very knowledgable and helped me to understand the different options and invest in the the right ones. Highly recommend.",
    author: "Deepthi Anna",
    rating: 5
  },
  {
    id: 6,
    content: "It seems to be a wonderful experience with AR Associates mainly about their services and fair dealings.",
    author: "Ramdas Vazhappulli Menon",
    rating: 5
  },
  {
    id: 7,
    content: "Very good service, they inform me every time a new project comes up, very good behavior, may the company and them personally prosper...",
    author: "Raghu Athipotta",
    rating: 5
  },
  {
    id: 8,
    content: "Very sincere and cooperative with her Clients and we are very satisfied with her services rendered to us.",
    author: "Dasan Ambat",
    rating: 5
  },
  {
    id: 9,
    content: "Highly rated for professionalism and quality of service.",
    author: "Vasudevan Korath",
    rating: 5
  },
  {
    id: 10,
    content: "Excellent service and highly recommended....",
    author: "Sugesh Bala Subramanian",
    rating: 5
  },
  {
    id: 11,
    content: "Excellent personalised service.",
    author: "Mohan Menon",
    rating: 5
  },
  {
    id: 12,
    content: "Excellent service and highly recommended.",
    author: "Rohit K",
    rating: 5
  },
  {
    id: 13,
    content: "Excellent.",
    author: "Raghunath Vazhappulli",
    rating: 5
  },
  {
    id: 14,
    content: "I had a great experience with this mutual fund distributor and Insurance advisor (Health and Life) in Palakkad. They were very professional, transparent, and helped me understand the various options clearly before making any investment. The advice given was tailored to my financial goals, and I felt confident throughout the process. I really appreciate the time and effort taken to explain everything patiently. If you're looking for trustworthy mutual fund and insurance services in Palakkad, I highly recommend them.",
    author: "Arjun Kotharamath",
    rating: 5
  },
  {
    id: 15,
    content: "I had a great experience with this mutual fund distributor and insurance advisor in Palakkad. They took the time to understand my financial goals and provided clear, well-informed advice on both mutual fund investments and insurance plans. What impressed me the most was their transparent approach and genuine commitment to helping clients make the right choices. I feel much more confident about my financial planning after working with them. Highly recommended for anyone looking for trustworthy and personalized financial guidance in Palakkad.",
    author: "Ashwin Kotharamath",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextTestimonial();
    }
    
    if (touchStart - touchEnd < -75) {
      prevTestimonial();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
    
    setTimeout(() => setIsPaused(false), 3000);
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
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
    <section id="testimonials" className="section-padding bg-gradient-to-b from-financial-purple/50 to-financial-purple/30">
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
              className="glass-card rounded-xl p-8 framer-motion-fix"
              ref={testimonialRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ transform: "translate3d(0,0,0)" }}
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
