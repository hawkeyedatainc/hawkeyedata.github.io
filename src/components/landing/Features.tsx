import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wallet,
  PieChart,
  TrendingUp,
  BarChart3,
  CreditCard,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense & Income Tracking",
    description: "Log every transaction effortlessly. Track both expenses and income in one unified view.",
  },
  {
    icon: PieChart,
    title: "Smart Budgets",
    description: "Build and manage monthly budgets by category. See exactly how much you have left to spend.",
  },
  {
    icon: TrendingUp,
    title: "Net Worth Tracking",
    description: "Keep account balances and overall net worth visible at a glance as you build wealth.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Spot spending patterns with calendar views, trends, and cash flow performance insights.",
  },
  {
    icon: CreditCard,
    title: "Account Management",
    description: "Organize money across checking, savings, credit cards, and cash accounts seamlessly.",
  },
  {
    icon: Download,
    title: "Data Export",
    description: "Export your data into clean spreadsheets — expenses, income, budgets, and accounts.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <feature.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Take Control</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed to give you complete visibility and control over your financial life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
