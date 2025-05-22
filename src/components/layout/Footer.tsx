import React from 'react';
import { PieChart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <PieChart className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">PieQ</span>
            </div>
            <p className="text-neutral-200 mb-6">
              The AI-powered practice management platform built specifically for bookkeepers and accountants serving the restaurant and hospitality industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">How It Works</a></li>
              <li><a href="#industries" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Industries</a></li>
              <li><a href="#testimonials" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Webinars</a></li>
              <li><a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">API Documentation</a></li>
              <li><a href="#" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">Partners</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              {/*<li className="text-neutral-200">123 Main Street, Suite 400</li>*/}
              {/*<li className="text-neutral-200">Boston, MA 02110</li>*/}
              {/*<li><a href="tel:5551234567" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">(555) 123-4567</a></li>*/}
              <li><a href="mailto:support@pieq.ai" className="text-neutral-200 hover:text-primary-500 transition-colors duration-300">support@pieq.ai</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PieQ Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-neutral-300 hover:text-primary-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm text-neutral-300 hover:text-primary-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-sm text-neutral-300 hover:text-primary-500 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;