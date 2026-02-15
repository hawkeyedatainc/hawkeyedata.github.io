import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import screenshot1 from "@/assets/screenshots/screenshot-1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-[hsl(var(--glow))] top-1/4 -left-40 animate-pulse-glow" />
      <div className="orb w-[500px] h-[500px] bg-[hsl(var(--glow-secondary))] bottom-1/4 -right-40 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="orb w-[300px] h-[300px] bg-[hsl(var(--glow))] top-1/2 left-1/2 -translate-x-1/2 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now available on the App Store
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Master Your Money.{" "}
              <span className="gradient-text">Build Your Wealth.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Track expenses, manage budgets, and grow your net worth — all in one beautifully crafted app designed to put you in control.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
              >
                <Apple size={20} />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-70 leading-none">Download on the</div>
                  <div className="leading-tight">App Store</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="phone-frame w-[280px] md:w-[300px] glow-blue animate-float">
                <img
                  src={screenshot1}
                  alt="WealthFlow app dashboard"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -left-8 glass-card p-3 px-4 animate-float-slow"
              >
                <div className="text-xs text-muted-foreground">Monthly savings</div>
                <div className="text-lg font-display font-bold text-primary">+$2,450</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -top-4 -right-8 glass-card p-3 px-4 animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="text-xs text-muted-foreground">Net Worth</div>
                <div className="text-lg font-display font-bold text-foreground">$84,230</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
