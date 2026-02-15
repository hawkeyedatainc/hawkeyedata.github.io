import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is WealthFlow free to use?",
    answer: "Yes! WealthFlow offers a free plan with core features including expense tracking, income logging, and basic budgets. You can upgrade to Premium for advanced analytics, net worth tracking, and more.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. Your data is stored locally on your device and never shared with third parties. We use industry-standard encryption to keep your information safe.",
  },
  {
    question: "Can I track multiple accounts?",
    answer: "Yes! You can add and manage multiple accounts including checking, savings, credit cards, and cash. Premium users get unlimited accounts.",
  },
  {
    question: "Can I export my data?",
    answer: "Premium users can export all their data into clean spreadsheets (CSV/XLSX) including expenses, income, budgets, and account information.",
  },
  {
    question: "Is WealthFlow available on Android?",
    answer: "WealthFlow is currently available exclusively on iOS. We're exploring an Android version — stay tuned for updates!",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can manage your subscription directly through the App Store. Go to Settings → Apple ID → Subscriptions to cancel anytime.",
  },
];

const FAQ = () => {
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-sm font-semibold hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
