
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/16606e0d-21ce-4e54-922c-8700323ba295.png" 
                alt="HawkEye Data Solutions" 
                className="h-10 w-10 rounded-full" 
              />
              <h3 className="font-bold text-xl">HawkEye Data</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Transforming complex data into actionable insights with innovative visualization solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-hawkeye-purple dark:text-gray-300 dark:hover:text-hawkeye-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-hawkeye-purple dark:text-gray-300 dark:hover:text-hawkeye-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-hawkeye-purple dark:text-gray-300 dark:hover:text-hawkeye-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-hawkeye-purple dark:text-gray-300 dark:hover:text-hawkeye-gold transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Case Studies', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link === 'Home' ? '' : link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center text-gray-600 hover:text-hawkeye-purple dark:text-gray-300 dark:hover:text-hawkeye-gold transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 text-hawkeye-purple dark:text-hawkeye-gold shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">123 Data Street, Analytics City, 10001</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-hawkeye-purple dark:text-hawkeye-gold" />
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-hawkeye-purple dark:text-hawkeye-gold" />
                <span className="text-gray-600 dark:text-gray-300">info@hawkeyedata.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Subscribe to Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Stay updated with our latest insights and news.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white dark:bg-gray-800 border-gray-300"
              />
              <Button className="w-full bg-hawkeye-purple hover:bg-hawkeye-darkpurple text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} HawkEye Data Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-hawkeye-purple dark:text-gray-400 dark:hover:text-hawkeye-gold">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-gray-600 hover:text-hawkeye-purple dark:text-gray-400 dark:hover:text-hawkeye-gold">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
