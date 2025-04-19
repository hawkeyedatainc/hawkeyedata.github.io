
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hawkeye-purple to-hawkeye-darkpurple opacity-90 z-0"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNmMwLTYuNjI3LTUuMzczLTEyLTEyLTEydjZjMy4zMTQgMCA2IDIuNjg2IDYgNmg2eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your data experience?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join innovative companies using HawkEye Data to unlock the true potential of their information.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-hawkeye-gold hover:bg-hawkeye-gold/80 text-hawkeye-purple font-medium">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-hawkeye-gold">24/7</div>
              <p className="text-white/80 text-sm">Support Access</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hawkeye-gold">99.9%</div>
              <p className="text-white/80 text-sm">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hawkeye-gold">14-day</div>
              <p className="text-white/80 text-sm">Free Trial</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hawkeye-gold">Enterprise</div>
              <p className="text-white/80 text-sm">Grade Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
