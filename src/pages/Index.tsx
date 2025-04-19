
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Advanced Analytics for <span className="text-hawkeye-purple">Data-Driven</span> Organizations
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    HawkEye Data helps organizations harness the power of their data through intuitive visualization tools, 
                    predictive analytics, and real-time monitoring solutions.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Our platform integrates seamlessly with your existing infrastructure, providing immediate insights 
                    without disrupting your workflows.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold text-2xl text-hawkeye-purple">500+</h3>
                      <p className="text-gray-600 dark:text-gray-400">Enterprise Clients</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold text-2xl text-hawkeye-purple">98%</h3>
                      <p className="text-gray-600 dark:text-gray-400">Customer Satisfaction</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-hawkeye-purple/80 to-hawkeye-darkpurple p-1 rounded-xl">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                      alt="Data Analytics Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        
        {/* How it Works Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How <span className="text-hawkeye-purple">HawkEye Data</span> Works
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our streamlined process transforms your raw data into actionable insights in four simple steps.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: '01',
                  title: 'Connect',
                  description: 'Integrate your data sources with our secure API connectors'
                },
                {
                  number: '02',
                  title: 'Analyze',
                  description: 'Our AI-powered engine identifies patterns and correlations'
                },
                {
                  number: '03',
                  title: 'Visualize',
                  description: 'Create custom dashboards with interactive visualizations'
                },
                {
                  number: '04',
                  title: 'Act',
                  description: 'Receive actionable insights and implement data-driven decisions'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 h-full">
                    <div className="text-5xl font-bold text-hawkeye-gold/30 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6H38.5M38.5 6L33.5 1M38.5 6L33.5 11" stroke="currentColor" strokeWidth="2" className="text-hawkeye-purple" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
