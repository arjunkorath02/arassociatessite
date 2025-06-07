
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogSection = () => {
  const { t } = useLanguage();

  const blogs = [
    {
      id: 1,
      title: 'Understanding Mutual Fund SIPs',
      excerpt: 'Learn how Systematic Investment Plans can help you build wealth over time with disciplined investing.',
      author: 'AR Associates',
      date: '2024-03-15',
      image: '/lovable-uploads/a4ce71d1-72e0-4c93-8b20-49dc317c9558.png',
      category: 'Investment'
    },
    {
      id: 2,
      title: 'Tax Saving Investment Options',
      excerpt: 'Explore various tax-saving investment instruments under Section 80C and maximize your returns.',
      author: 'AR Associates',
      date: '2024-03-10',
      image: '/lovable-uploads/6b75a38c-f124-4d76-ba2b-ce696ef09c77.png',
      category: 'Tax Planning'
    },
    {
      id: 3,
      title: 'Life Insurance vs Term Insurance',
      excerpt: 'Understand the key differences and choose the right insurance policy for your family.',
      author: 'AR Associates',
      date: '2024-03-05',
      image: '/lovable-uploads/9e86d84a-c22c-4382-9a82-59007e1714b0.png',
      category: 'Insurance'
    }
  ];

  return (
    <section className="section-padding bg-financial-navy bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('blogTitle')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('blogSubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="enhanced-glassmorphism border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-financial-lightpurple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-financial-lightpurple transition-colors duration-300">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-financial-lightpurple hover:text-white hover:bg-financial-purple/20 group/btn"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
