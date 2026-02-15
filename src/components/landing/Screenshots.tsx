import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import screenshot2 from "@/assets/screenshots/screenshot-2.png";
import screenshot3 from "@/assets/screenshots/screenshot-3.png";
import screenshot4 from "@/assets/screenshots/screenshot-4.png";
import screenshot5 from "@/assets/screenshots/screenshot-5.png";
import screenshot6 from "@/assets/screenshots/screenshot-6.png";
import screenshot7 from "@/assets/screenshots/screenshot-7.png";
import screenshot8 from "@/assets/screenshots/screenshot-8.png";
import screenshot9 from "@/assets/screenshots/screenshot-9.png";

const screenshots = [
  { src: screenshot2, alt: "Transactions view" },
  { src: screenshot3, alt: "Budget overview" },
  { src: screenshot4, alt: "Analytics dashboard" },
  { src: screenshot5, alt: "Accounts view" },
  { src: screenshot6, alt: "Net worth tracker" },
  { src: screenshot7, alt: "Category breakdown" },
  { src: screenshot8, alt: "Calendar view" },
  { src: screenshot9, alt: "Settings and themes" },
];

const Screenshots = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[hsl(var(--glow-secondary))] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Beautiful on <span className="gradient-text">Every Screen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafted with attention to detail, WealthFlow looks stunning in both light and dark modes.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll row */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {screenshots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-shrink-0 snap-center"
            >
              <div className="phone-frame w-[220px] md:w-[260px] hover:scale-105 transition-transform duration-500">
                <img src={shot.src} alt={shot.alt} className="w-full h-auto" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Screenshots;
