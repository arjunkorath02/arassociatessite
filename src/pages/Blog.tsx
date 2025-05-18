
import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-financial-navy via-[#2a2f42] to-financial-darkpurple overflow-hidden">
      {/* Enhanced Background elements for glassmorphism effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-financial-purple/25 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-financial-lightpurple/20 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-[#9b87f5]/20 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 pt-24">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <BlogSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
