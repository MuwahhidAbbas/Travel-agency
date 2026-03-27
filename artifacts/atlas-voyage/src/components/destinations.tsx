import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const destinations = [
  {
    title: "Europe Tours",
    locations: "Paris, Rome, Barcelona",
    price: "4,500",
    // Europe street view
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Asia Adventures",
    locations: "Japan, Thailand, Bali",
    price: "3,200",
    // Japan temple
    image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Luxury Maldives",
    locations: "Overwater villas, crystal lagoons",
    price: "6,800",
    // Maldives overwater
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Desert Safaris",
    locations: "Dubai, Morocco, Sahara",
    price: "2,900",
    // Desert dunes
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Cultural Expeditions",
    locations: "Peru, Egypt, India",
    price: "3,500",
    // Machu picchu
    image: "https://images.unsplash.com/photo-1523496922380-91d5afba98a3?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-3",
  }
];

export function Destinations() {
  const { toast } = useToast();

  return (
    <section id="destinations" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase mb-4"
          >
            Curated Portfolios
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Discover Extraordinary Destinations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${dest.colSpan}`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img
                src={dest.image}
                alt={dest.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-2">
                  <span className="text-white/90 text-sm font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    From ${dest.price}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{dest.title}</h3>
                <p className="text-white/80 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {dest.locations}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toast({ title: `Exploring ${dest.title}`, description: "Loading itinerary details..." });
                  }}
                  className="w-fit text-white text-sm font-semibold uppercase tracking-wider flex items-center gap-2 group/btn"
                >
                  Explore 
                  <span className="w-8 h-[2px] bg-accent transition-all group-hover/btn:w-12 group-hover/btn:bg-white inline-block ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
