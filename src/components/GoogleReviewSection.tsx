
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const GoogleReviewSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-financial-darkpurple/90 to-financial-navy/90">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How was your experience with us?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Your feedback helps us improve and serves as a valuable resource for others seeking financial guidance.
          </p>
          
          <Button
            className="bg-financial-lightpurple hover:bg-financial-purple text-white px-8 py-6 h-auto text-lg rounded-xl shadow-lg transition-all duration-300"
            onClick={() => window.open("https://g.page/r/CZXP3LT8r3rnEBM/review", "_blank")}
          >
            Leave a Review on Google
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewSection;
