import { ArrowRight, Linkedin } from 'lucide-react';
import logo from "../assets/f5cb44d26c3dd245f0b3a59ffa05a4fffa42de64.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logo} alt="PieQ Logo" className="h-16 md:h-20 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Federated Logic for Optimised Workflow. The first agentic AI platform built for the complex demands of modern enterprise.
            </p>
            <div className="flex gap-4">
              <a href="https://in.linkedin.com/company/pieq-ai" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 hover:border-[#A6823C] hover:text-[#A6823C] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              {/* <a href="#" className="p-2 border border-zinc-800 hover:border-[#A6823C] hover:text-[#A6823C] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-zinc-800 hover:border-[#A6823C] hover:text-[#A6823C] transition-colors">
                <Github className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Hospitality Bookkeeper</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Insurance Architect</a></li>
              {/* <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Security & Trust</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Industries</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Insurance</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Hospitality</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-[#A6823C] transition-colors">Bio Surveilance</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Stay Updated</h4>
            <p className="text-sm text-zinc-400">Join our newsletter for the latest in agentic AI orchestration.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Work email" 
                className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-sm w-full focus:outline-none focus:border-[#A6823C]"
              />
              <button className="bg-[#A6823C] text-black px-4 py-2 hover:bg-[#8C6C2D] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          <p>© {currentYear} PieQ AI Technologies. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a 
              href="/privacy-policy" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'Footer',
                    event_label: 'Privacy Policy'
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'Footer',
                    event_label: 'Terms of Service'
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            {/* <a href="#" className="hover:text-white transition-colors">Cookies</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
