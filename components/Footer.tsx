import { 
  Twitter, 
  Linkedin, 
  Mail,
  ArrowRight,
  Youtube,
  HelpCircle
} from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    Platform: [
      { name: 'Core Features', action: () => scrollToSection('features') },
      { name: 'AI Capabilities', action: () => scrollToSection('features') }
    ],
    Solutions: [
      { name: 'Insurance Management', action: () => scrollToSection('solutions') },
      { name: 'Hospitality Bookkeeping', action: () => scrollToSection('solutions') }
    ],
    Resources: [
      { name: 'Documentation', action: () => scrollToSection('contact') },
      { name: 'Case Studies', action: () => scrollToSection('contact') }
    ],
    Support: [
      { name: 'Support Us', action: () => scrollToSection('contact') }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
            <a href="#" className="flex bg-white items-center space-x-2  px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-orange-500">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <span className="text-2xl font-bold text-gray-900">PieQ</span>
            </a>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Streamline every slice of your business with our AI-powered automation platform. Transform processes, boost productivity, and scale with confidence.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-orange-500" />
                <span>sales@pieq.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HelpCircle size={16} className="text-orange-500" />
                <span>support@pieq.ai</span>
              </div>
            </div>
           
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-orange-400">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PieQ. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <button className="text-sm text-gray-400 hover:text-white">Privacy Policy</button>
              <button className="text-sm text-gray-400 hover:text-white">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}