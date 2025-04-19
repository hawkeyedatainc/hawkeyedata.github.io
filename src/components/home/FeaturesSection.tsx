
import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  LineChart, 
  Eye, 
  Shield,
  Zap,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Real-time Analytics',
    description: 'Monitor your data with real-time dashboards and alerts to make timely decisions.',
    icon: TrendingUp,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    title: 'Predictive Insights',
    description: 'Leverage AI and machine learning to forecast trends and anticipate market changes.',
    icon: LineChart,
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
  },
  {
    title: 'Data Integration',
    description: 'Connect multiple data sources into a unified platform for comprehensive analysis.',
    icon: Database,
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
  },
  {
    title: 'Visual Storytelling',
    description: 'Transform complex data into clear visual narratives that drive understanding.',
    icon: Eye,
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
  },
  {
    title: 'Enterprise Security',
    description: 'Protect sensitive data with advanced encryption and access controls.',
    icon: Shield,
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  },
  {
    title: 'High Performance',
    description: 'Process millions of data points with our optimized high-performance architecture.',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1"
    >
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
        <feature.icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features for <span className="text-hawkeye-purple">Modern</span> Analytics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Our platform offers everything you need to transform your data into strategic business decisions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">98%</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Customer Satisfaction</p>
          </div>
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">500+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Enterprise Clients</p>
          </div>
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">2B+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Data Points Analyzed</p>
          </div>
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">24/7</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Expert Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
