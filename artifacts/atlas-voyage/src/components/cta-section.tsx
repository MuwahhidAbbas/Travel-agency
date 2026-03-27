import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "Action Received",
      description: "Our concierge team will be in touch with you shortly.",
    });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Abstract geometric background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 right-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-[-10%] left-1/3 w-[800px] h-[800px] border border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join over 10,000 travelers who trust AtlasVoyage for their most memorable adventures. Your next extraordinary chapter awaits.
          </p>
          
          <button 
            onClick={handleCTA}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-primary bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
            <span className="relative text-lg tracking-wide">Plan My Trip</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
