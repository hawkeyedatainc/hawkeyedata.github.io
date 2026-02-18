
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, BarChart3, LineChart, PieChart, Database, Server, ShieldCheck } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Data Visualization',
      description: 'Transform complex data sets into clear, actionable visual insights with our advanced visualization tools.',
      icon: BarChart3,
      features: [
        'Interactive dashboards',
        'Custom chart creation',
        'Real-time data updates',
        'Export capabilities'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage machine learning algorithms to forecast trends and anticipate future outcomes with precision.',
      icon: LineChart,
      features: [
        'Trend forecasting',
        'Anomaly detection',
        'Pattern recognition',
        'Scenario modeling'
      ]
    },
    {
      title: 'Data Integration',
      description: 'Connect and unify data from multiple sources into a centralized, accessible platform for comprehensive analysis.',
      icon: Database,
      features: [
        'API connectors',
        'ETL processes',
        'Data cleansing',
        'Automated syncing'
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'Gain strategic insights from your data with comprehensive reporting and analytics capabilities.',
      icon: PieChart,
      features: [
        'Custom reports',
        'KPI tracking',
        'Performance metrics',
        'Competitive analysis'
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Access your data and insights anywhere with our secure, scalable cloud-based infrastructure.',
      icon: Server,
      features: [
        'Elastic scaling',
        'Global accessibility',
        'High availability',
        '99.9% uptime guarantee'
      ]
    },
    {
      title: 'Data Security',
      description: 'Protect your valuable information with enterprise-grade security protocols and compliance adherence.',
      icon: ShieldCheck,
      features: [
        'Encryption at rest & in transit',
        'Role-based access control',
        'Audit logging',
        'Compliance with regulations'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive data solutions designed to transform how your organization leverages information.
              </p>
              <div className="flex justify-center">
                <Button className="bg-hawkeye-purple hover:bg-hawkeye-darkpurple text-white">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-hawkeye-purple/10 rounded-lg w-fit">
                      <service.icon className="h-8 w-8 text-hawkeye-purple" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-hawkeye-purple transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <ChevronRight className="h-4 w-4 text-hawkeye-gold mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button variant="link" className="p-0 text-hawkeye-purple dark:text-hawkeye-gold">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-hawkeye-purple">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your data experience?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you implement the right solutions for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-hawkeye-gold hover:bg-hawkeye-lightyellow text-hawkeye-darkpurple">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
