import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import WealthflowLogo from "@/components/branding/WealthflowLogo";
import screenshot3 from "@/assets/screenshots/screenshot-3.png";
import screenshot8 from "@/assets/screenshots/screenshot-8.png";

const sections = [
  {
    title: "1. Core Privacy Principle",
    content: [
      "Wealthflow is designed so your financial data stays on your device.",
      "We do not collect, upload, or store your personal finance data on our servers.",
      "This includes:",
    ],
    bullets: [
      "Expenses and income entries",
      "Budgets",
      "Categories",
      "Account names and balances",
      "Net worth-related data",
      "Notes and transaction details",
    ],
  },
  {
    title: "2. Data We Do Not Collect",
    content: [
      "We do not operate a backend that receives your personal financial records from the app.",
      "We cannot view your in-app financial data unless you explicitly share exported files with us (for example, when contacting support).",
    ],
  },
  {
    title: "3. Purchases and Premium Access",
    content: [
      "If you buy premium features, payment is handled by Apple through the App Store.",
      "We use RevenueCat to manage subscription/purchase entitlement status (for example, whether Premium is active and to restore purchases). For this, Apple and RevenueCat may process limited purchase-related metadata needed for billing and entitlement validation.",
      "We do not receive your full payment card information.",
    ],
  },
  {
    title: "4. Data Export",
    content: [
      "Wealthflow lets you export your data to spreadsheet files.",
      "Exported files are created only when you request them and are stored according to your device/file destination choices.",
      "Once exported outside the app, file handling is under your control.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "Because your financial data is stored locally, retention is controlled by you:",
    ],
    bullets: [
      "Keep data in app",
      "Delete entries in app",
      "Delete the app and local app data (subject to device/OS behavior)",
    ],
    note: "Purchase entitlement records may still be retained by Apple/RevenueCat per their policies.",
  },
  {
    title: "6. Third-Party Services",
    content: ["Wealthflow relies on:"],
    bullets: [
      "Apple App Store / StoreKit (payments, purchase restore)",
      "RevenueCat (purchase entitlement management)",
    ],
    note: "Their processing is governed by their own privacy policies and terms.",
  },
  {
    title: "7. Children's Privacy",
    content: [
      "Wealthflow is not directed to children under 13 (or the minimum age in your region).",
      "We do not knowingly collect personal data from children.",
    ],
  },
  {
    title: "8. Security",
    content: [
      "Your app data remains on your device. You are responsible for your device security settings (passcode, Face ID/Touch ID, backup settings, etc.).",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time.",
      "Any updates will appear on this page with a revised \"Last updated\" date.",
    ],
  },
  {
    title: "10. Contact",
    content: ["If you have questions about this Privacy Policy, contact:"],
    bullets: [
      "Name: Amandeep Sawhney",
      "Email: learn@hawkeyedata.ca",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <div className="orb left-[-180px] top-24 h-[440px] w-[440px] bg-[hsl(var(--glow))] animate-pulse-glow" />
      <div
        className="orb right-[-160px] top-[360px] h-[380px] w-[380px] bg-[hsl(var(--glow-secondary))] animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32"
      >
        <section className="glass-card gradient-border mb-10 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Local-first and transparent by design
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                Privacy Policy for <span className="gradient-text">Wealthflow</span>
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">
                Effective date: Feb 14, 2026
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: Feb 14, 2026
              </p>
              <p className="mt-5 max-w-2xl text-lg text-foreground/90">
                Wealthflow is a local-first personal finance app.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 self-start md:self-center"
            >
              <WealthflowLogo className="h-16 w-16" />
              <div className="glass-card p-3">
                <img
                  src={screenshot8}
                  alt="Wealthflow app insights view"
                  className="h-24 w-24 rounded-xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="glass-card p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.note && <p>{section.note}</p>}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="glass-card p-7">
            <h3 className="font-display text-2xl font-semibold">Privacy In Action</h3>
            <p className="mt-3 text-muted-foreground">
              Your finances stay local to your device, and your export choices stay in your control. That is the foundation of Wealthflow.
            </p>
          </div>
          <div className="phone-frame mx-auto w-[220px] glow-blue md:mx-0">
            <img
              src={screenshot3}
              alt="Wealthflow app budget screen"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Privacy;
