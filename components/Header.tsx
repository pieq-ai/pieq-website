import { useState } from 'react';
import { Button } from "./ui/button";
import { Menu, X } from 'lucide-react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
          <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2  px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-orange-500">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <span className="text-2xl font-bold text-gray-900">PieQ</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-orange-600 transition-colors">
              Platform
            </button>
            <button onClick={() => scrollToSection('features')} className="hover:text-orange-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('solutions')} className="hover:text-orange-600 transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white" onClick={() => scrollToSection('contact')}>
              Talk to us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-orange-600 transition-colors">
                Platform
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left hover:text-orange-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('solutions')} className="text-left hover:text-orange-600 transition-colors">
                Solutions
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-orange-600 transition-colors">
                Contact
              </button>
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white" onClick={() => scrollToSection('contact')}>
                  Talk to us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}