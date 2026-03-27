import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AtlasVoyage turned our dream honeymoon into reality. Every detail was perfect, from the overwater villa to the private dinners.",
    name: "Sarah & James T.",
    trip: "Maldives Trip",
    initials: "SJ"
  },
  {
    quote: "The Japan itinerary was beyond our imagination. Professional service from start to finish. We felt like VIPs everywhere we went.",
    name: "Michael Chen",
    trip: "Asia Adventure",
    initials: "MC"
  },
  {
    quote: "Best investment we've made. The Europe tour exceeded every expectation and completely removed the stress of logistics.",
    name: "The Rodriguez Family",
    trip: "Europe Tour",
    initials: "TR"
  },
  {
    quote: "Corporate travel has never been easier. Our entire executive team travels exclusively with AtlasVoyage. Flawless execution.",
    name: "Rebecca Walsh",
    trip: "VP Operations",
    initials: "RW"
  },
  {
    quote: "The Sahara safari was transformative. Truly a once-in-a-lifetime experience crafted perfectly to our adventurous spirit.",
    name: "David Okonkwo",
    trip: "Desert Safari",
    initials: "DO"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Quote className="w-12 h-12 mx-auto text-accent/30 mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">What Our Travelers Say</h2>
        </motion.div>

        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl md:text-3xl font-medium text-foreground leading-relaxed mb-10 italic">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold tracking-wider">
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">{testimonials[current].name}</div>
                  <div className="text-sm text-accent font-medium">{testimonials[current].trip}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx ? "bg-accent scale-125" : "bg-border hover:bg-accent/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
