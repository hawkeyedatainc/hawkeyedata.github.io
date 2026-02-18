import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ListChecks, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "Track",
    description: "Log your expenses and income as they happen. Every dollar accounted for.",
    step: "01",
  },
  {
    icon: Target,
    title: "Budget",
    description: "Set monthly budgets by category and stay on top of your spending limits.",
    step: "02",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Watch your net worth climb as you make smarter financial decisions.",
    step: "03",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Simple as <span className="gradient-text">1, 2, 3</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with Budgetly takes just minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                {step.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
