import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const { toast } = useToast();

  const handleExplore = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlan = () => {
    toast({
      title: "Trip Planner",
      description: "Let's start planning. An advisor will be with you shortly.",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      {/* parallax scenic mountain landscape */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide mb-6 uppercase">
            Elevate Your Experience
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 max-w-5xl mx-auto leading-tight"
        >
          Explore the World With <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#E0C895]">Confidence</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Premium curated travel experiences that create lifelong memories. 
          Discover extraordinary destinations tailored perfectly to your desires.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={handleExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Tours
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={handlePlan}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            Plan Your Trip
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
