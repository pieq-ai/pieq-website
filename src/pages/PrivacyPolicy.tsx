import React, { useEffect, useRef } from 'react';
import { privacyPolicyHTML } from '../data/legalDocuments';

export default function PrivacyPolicy() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-TZ87S43S52', {
        page_title: 'Privacy Policy - PieQ',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, []);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link) {
      const href = link.getAttribute('href');
      const targetAttr = link.getAttribute('target');
      
      // Allow email links (Gmail compose links) to work normally - they have target="_blank"
      if (href && href.includes('mail.google.com')) {
        // Track email link clicks if gtag is available
        if (typeof window !== 'undefined' && window.gtag) {
          const emailMatch = href.match(/to=([^&]+)/);
          if (emailMatch) {
            window.gtag('event', 'click', {
              event_category: 'Legal Document',
              event_label: `Email Click - ${emailMatch[1]}`
            });
          }
        }
        // Let the link work normally (open in new tab)
        return;
      }
      
      // Allow external links with target="_blank" to work normally
      if (href && (href.startsWith('http://') || href.startsWith('https://')) && targetAttr === '_blank') {
        // Track external link clicks if gtag is available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'Legal Document',
            event_label: `External Link - ${href}`
          });
        }
        // Let the link work normally (open in new tab)
        return;
      }
      
      // Handle data-legal-link for navigation between documents
      const legalLink = link.getAttribute('data-legal-link');
      if (legalLink) {
        e.preventDefault();
        e.stopPropagation();
        
        if (legalLink === 'terms-of-service' || legalLink === 'terms') {
          // Open terms of service page in new tab
          window.open('/terms-of-service', '_blank', 'noopener,noreferrer');
        }
        return;
      }
      
      // Handle anchor links (hash links) for scrolling within the document
      if (href && href.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = href.substring(1); // Remove the # symbol
        const targetElement = document.querySelector(`#${targetId}`);
        
        if (targetElement) {
          const elementRect = (targetElement as HTMLElement).getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const offset = 20; // Small offset for better visibility
          
          // Smooth scroll to the target element at the top of the viewport
          window.scrollTo({
            top: absoluteElementTop - offset,
            behavior: 'smooth'
          });
        }
        return;
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div
            ref={contentRef}
            onClick={handleContentClick}
            className="legal-document-content text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }}
            style={{
              fontSize: '14px',
              lineHeight: '1.7'
            }}
          />
        </div>
      </main>
    </div>
  );
}

