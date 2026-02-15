import { Link } from "react-router-dom";
import WealthflowLogo from "@/components/branding/WealthflowLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <WealthflowLogo className="h-8 w-8" />
            <span className="font-display font-bold text-foreground">Wealthflow</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wealthflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
