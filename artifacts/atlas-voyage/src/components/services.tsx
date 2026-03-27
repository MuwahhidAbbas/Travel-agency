import { motion } from "framer-motion";
import { Compass, Users, Briefcase, FileText, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Custom Trip Planning",
    description: "We design every itinerary precisely around your vision, preferences, and travel style.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Expertly managed luxury tours for groups of all sizes, ensuring seamless logistics.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Executive business travel solutions worldwide with dedicated account management.",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Full documentation and processing support for every destination in your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description: "Comprehensive luxury coverage options for total peace of mind while exploring.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h4 className="text-accent font-semibold tracking-wider uppercase mb-4">Our Expertise</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How We Serve You
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Beyond just booking flights and hotels, we provide end-to-end travel management designed for the discerning explorer.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 group ${
                    idx === services.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
