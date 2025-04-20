
import { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Presentation,
  Book,
  Monitor // Replacing 'Webinar' with 'Monitor' which is a valid icon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Expert-Led Training',
    description: 'Learn from industry professionals with years of experience in data analytics and cloud technologies.',
    icon: GraduationCap,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    title: 'Certification Prep',
    description: 'Comprehensive study materials and practice tests designed for AWS, Azure, and data analytics certifications.',
    icon: Book,
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
  },
  {
    title: 'Live Workshops',
    description: 'Interactive sessions with hands-on exercises to reinforce your learning and build practical skills.',
    icon: Presentation,
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
  },
  {
    title: 'On-Demand Content',
    description: 'Access recorded lessons and tutorials at your own pace, anywhere and anytime.',
    icon: Video,
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
  },
  {
    title: 'Study Resources',
    description: 'Comprehensive learning materials including practice questions, case studies, and reference guides.',
    icon: BookOpen,
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  },
  {
    title: 'Live Webinars',
    description: 'Regular webinars covering latest trends in data analytics and cloud technologies.',
    icon: Monitor, // Using Monitor icon instead of Webinar
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
            Comprehensive <span className="text-hawkeye-purple">Learning</span> Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to master data analytics and cloud technologies, from beginner to expert level.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">24/7</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Learning Support</p>
          </div>
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">50+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Courses</p>
          </div>
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">95%</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Pass Rate</p>
          </div>
          <div className="bg-gradient-to-br from-hawkeye-purple/10 to-hawkeye-gold/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-hawkeye-purple">1000+</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Alumni</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
