import { motion } from "framer-motion";
import { MapPin, Lock, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Expert Local Guides",
    desc: "Knowledgeable, vetted guides who bring the hidden gems of destinations to life."
  },
  {
    icon: Lock,
    title: "Secure Booking",
    desc: "Bank-level encryption on all transactions and total financial protection."
  },
  {
    icon: Clock,
    title: "24/7 Global Support",
    desc: "Round-the-clock dedicated assistance wherever you are in the world."
  },
  {
    icon: Heart,
    title: "Personalized Experiences",
    desc: "Every journey is uniquely tailored to your individual preferences and pace."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Travelers Choose <span className="text-accent">AtlasVoyage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            We set the gold standard in premium travel. Here is why our clients return to us year after year for their most important journeys.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-accent">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
