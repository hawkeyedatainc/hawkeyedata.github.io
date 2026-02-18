import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[hsl(var(--glow))] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to Take Control of Your <span className="gradient-text">Finances</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Join thousands of users who are already mastering their money with Budgetly.
          </p>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
          >
            <Apple size={22} />
            <div className="text-left">
              <div className="text-[10px] font-normal opacity-70 leading-none">Download on the</div>
              <div className="leading-tight">App Store</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
