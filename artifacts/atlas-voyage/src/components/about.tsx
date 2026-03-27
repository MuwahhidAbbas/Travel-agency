import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, end, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, end, suffix, duration]);

  return <span ref={nodeRef} className="text-4xl md:text-5xl font-bold text-primary mb-2">0{suffix}</span>;
}

export function About() {
  const stats = [
    { value: 10000, suffix: "+", label: "Happy Travelers" },
    { value: 40, suffix: "+", label: "Countries Explored" },
    { value: 8, suffix: "", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent font-semibold tracking-wider uppercase mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting bespoke journeys since 2016.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AtlasVoyage was founded on a simple premise: travel should be transformative, not stressful. As a premium travel company, we leverage our global network of elite partners to grant you access to the world's most exclusive experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For 8 years, our dedicated team of travel artisans has been meticulously planning every detail of your journey. From the moment you leave your doorstep to the minute you return, you are in expert hands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-6 rounded-2xl bg-white shadow-xl shadow-black/5 border border-border/50">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
