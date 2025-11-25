import { useState } from 'react';
import {
  Mail,
  Headphones
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import LegalDocumentDialog from './LegalDocumentDialog';
import { termsOfServiceHTML, privacyPolicyHTML } from '../data/legalDocuments';

export default function Footer() {
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [privacyFromTerms, setPrivacyFromTerms] = useState(false);

  const footerLinks = {
    Platform: [
      { name: 'Core Features', action: () => scrollToSection('features') },
      { name: 'AI Capabilities', action: () => scrollToSection('features') }
    ],
    Solutions: [
      { name: 'Insurance Management', action: () => scrollToSection('insurance-management') },
      { name: 'Hospitality Bookkeeping', action: () => scrollToSection('hospitality-bookkeeping') }
    ],
    Support: [
      { name: 'Support', action: () => scrollToSection('contact') }
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
              <a
                href="#"
                className="flex bg-white items-center space-x-2 px-3 py-2 focus:outline-none"
                aria-label="PieQ Home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-orange-500"
                  aria-hidden="true"
                >
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
                <Mail size={16} className="text-orange-500" aria-hidden="true" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@pieq.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Track email link clicks
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'Footer',
                        event_label: 'Email Click - sales@pieq.ai'
                      });
                    }
                  }}
                  className="hover:text-orange-400 transition-colors duration-200 focus:outline-none rounded px-1"
                  aria-label="Send email to sales team"
                >
                  sales@pieq.ai
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Headphones size={16} className="text-orange-500" aria-hidden="true" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@pieq.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Track email link clicks
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'Footer',
                        event_label: 'Email Click - support@pieq.ai'
                      });
                    }
                  }}
                  className="hover:text-orange-400 transition-colors duration-200 focus:outline-none rounded px-1"
                  aria-label="Send email to support team"
                >
                  support@pieq.ai
                </a>
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
                      className="text-gray-400 hover:text-white transition-colors text-left focus:outline-none"
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 PieQ. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0 sm:mr-32 md:mr-36 rounded-full px-4 py-2">
              <button
                onClick={() => {
                  setPrivacyFromTerms(false);
                  setShowPrivacyDialog(true);
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'Footer',
                      event_label: 'Privacy Policy'
                    });
                  }
                }}
                className="hover:text-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap flex-shrink-0"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600 flex-shrink-0">|</span>
              <button
                onClick={() => {
                  setShowTermsDialog(true);
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'Footer',
                      event_label: 'Terms of Service'
                    });
                  }
                }}
                className="hover:text-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap flex-shrink-0"
                aria-label="View Terms of Service"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Document Dialogs */}
      <LegalDocumentDialog
        open={showTermsDialog}
        onOpenChange={setShowTermsDialog}
        title="Terms of Service"
        content={termsOfServiceHTML}
        onNavigateToPrivacy={() => {
          setPrivacyFromTerms(true);
          setShowTermsDialog(false);
          setShowPrivacyDialog(true);
        }}
      />
      <LegalDocumentDialog
        open={showPrivacyDialog}
        onOpenChange={(open) => {
          setShowPrivacyDialog(open);
          if (!open) {
            setPrivacyFromTerms(false);
          }
        }}
        title="Privacy Policy"
        content={privacyPolicyHTML}
        onNavigateToTerms={() => {
          setShowPrivacyDialog(false);
          setShowTermsDialog(true);
        }}
        showBackButton={privacyFromTerms}
      />
    </footer>
  );
}