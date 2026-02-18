
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, LineChart, PieChart } from 'lucide-react';

const Hero = () => {
  const dataPointsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const dataPoints = dataPointsRef.current?.querySelectorAll('.data-point');
    dataPoints?.forEach((point) => {
      observer.observe(point);
    });

    return () => {
      dataPoints?.forEach((point) => {
        observer.unobserve(point);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-hawkeye-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-hawkeye-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-hawkeye-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-hawkeye-purple dark:text-hawkeye-gold font-medium mb-3 animate-fade-in">
                Expert Data Analytics & Cloud Training
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
                Master <span className="text-hawkeye-purple">Data</span> & 
                <span className="text-hawkeye-gold"> Cloud</span> Certifications
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
              Accelerate your career with our specialized training programs in data analytics and cloud technologies. Get certified, gain practical skills, and transform your career path.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Button size="lg" className="bg-hawkeye-purple hover:bg-hawkeye-darkpurple text-white">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-hawkeye-purple text-hawkeye-purple hover:bg-hawkeye-purple/10">
                View Certifications
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-800">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">1000+</span> certified professionals
              </p>
            </div>
          </div>

          {/* Animated Data Points */}
          <div 
            className="relative flex items-center justify-center h-96" 
            ref={dataPointsRef}
          >
            <div className="absolute w-80 h-80 border-4 border-dashed border-hawkeye-gold/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
            
            {/* Data Nodes */}
            <div className="data-point absolute top-10 left-10 opacity-0 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-lg flex items-center">
                <LineChart className="text-hawkeye-purple h-6 w-6 mr-2" />
                <span className="font-medium">Sales Trends</span>
              </div>
            </div>
            
            <div className="data-point absolute top-1/4 right-0 opacity-0 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-lg flex items-center">
                <BarChart3 className="text-hawkeye-gold h-6 w-6 mr-2" />
                <span className="font-medium">Growth Metrics</span>
              </div>
            </div>
            
            <div className="data-point absolute bottom-1/4 left-5 opacity-0 animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-lg flex items-center">
                <PieChart className="text-hawkeye-purple h-6 w-6 mr-2" />
                <span className="font-medium">Market Share</span>
              </div>
            </div>
            
            {/* Central Logo Element */}
            <div className="relative w-48 h-48 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center animate-data-pulse">
              <img 
                src="/lovable-uploads/16606e0d-21ce-4e54-922c-8700323ba295.png" 
                alt="HawkEye Data Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white dark:text-gray-900">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,163.36,103.42,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
