import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquareText, User, ShieldCheck } from "lucide-react";
import WealthflowLogo from "@/components/branding/WealthflowLogo";
import screenshot6 from "@/assets/screenshots/screenshot-6.png";
import screenshot9 from "@/assets/screenshots/screenshot-9.png";

const contactCards = [
  {
    icon: User,
    title: "Contact Name",
    value: "Amandeep Sawhney",
    hint: "Primary point of contact for policy and support questions.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "learn@hawkeyedata.ca",
    hint: "Best channel for questions, requests, and issue reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Policy Requests",
    value: "Privacy and Data",
    hint: "Ask about local-first handling, exports, and retention behavior.",
  },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <div className="orb top-20 right-[-140px] h-[400px] w-[400px] bg-[hsl(var(--glow))] animate-pulse-glow" />
      <div
        className="orb bottom-20 left-[-160px] h-[420px] w-[420px] bg-[hsl(var(--glow-secondary))] animate-pulse-glow"
        style={{ animationDelay: "1.1s" }}
      />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto px-6 pb-24 pt-32"
      >
        <div className="mx-auto max-w-6xl">
          <section className="glass-card gradient-border mb-10 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Fast and personal support
                </div>
                <h1 className="font-display text-4xl font-bold md:text-5xl">
                  Contact <span className="gradient-text">Wealthflow</span>
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  We built Wealthflow to be local-first and privacy-focused. If you need help, have a feature request, or have a privacy question, we are here for you.
                </p>
                <a
                  href="mailto:learn@hawkeyedata.ca?subject=Wealthflow%20Support"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  <Mail className="h-4 w-4" />
                  Email learn@hawkeyedata.ca
                </a>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 self-start md:self-center"
              >
                <WealthflowLogo className="h-16 w-16" />
                <div className="glass-card p-3">
                  <img
                    src={screenshot9}
                    alt="Wealthflow app analytics view"
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            {contactCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-base text-foreground">{card.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{card.hint}</p>
              </motion.article>
            ))}
          </section>

          <section className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <motion.article
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-7 md:p-8"
            >
              <h2 className="font-display mb-4 text-2xl font-semibold">Send a Message</h2>
              <p className="mb-5 text-muted-foreground">
                Share details and we will reply by email.
              </p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:learn@hawkeyedata.ca?subject=Wealthflow%20Inquiry";
                }}
              >
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Open Email Draft
                </button>
              </form>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-semibold">What We Can Help With</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
                <li>App usage and onboarding guidance</li>
                <li>Questions about exports and local data behavior</li>
                <li>Purchase restore and premium entitlement issues</li>
                <li>Privacy-policy clarifications</li>
                <li>Feature requests and product feedback</li>
              </ul>
              <div className="mt-6 phone-frame mx-auto w-[220px] glow-blue">
                <img
                  src={screenshot6}
                  alt="Wealthflow app transactions screen"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.article>
          </section>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;
