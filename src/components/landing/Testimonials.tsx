import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelancer",
    content: "WealthFlow completely changed how I manage my finances. The budgeting feature alone saved me hundreds each month.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Software Engineer",
    content: "Finally an app that tracks net worth properly. Clean UI, fast, and just works. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily T.",
    role: "Small Business Owner",
    content: "The analytics are incredible. Being able to see spending patterns helped me cut unnecessary costs by 30%.",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg">See what our users have to say.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{t.content}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
