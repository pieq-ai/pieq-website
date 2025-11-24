import React from "react";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface LegalDocumentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
  showBackButton?: boolean;
}

export default function LegalDocumentDialog({
  open,
  onOpenChange,
  title,
  content,
  onNavigateToPrivacy,
  onNavigateToTerms,
  showBackButton = false,
}: LegalDocumentDialogProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link) {
      const href = link.getAttribute('href');
      
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
      
      // Handle data-legal-link for navigation between documents
      const legalLink = link.getAttribute('data-legal-link');
      if (legalLink) {
        e.preventDefault();
        e.stopPropagation();
        
        if (legalLink === 'privacy-policy' && onNavigateToPrivacy) {
          onNavigateToPrivacy();
        }
        return;
      }
      
      // Handle anchor links (hash links) for scrolling within the document
      if (href && href.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = href.substring(1); // Remove the # symbol
        const targetElement = contentRef.current?.querySelector(`#${targetId}`);
        
        if (targetElement && contentRef.current) {
          const container = contentRef.current;
          const containerRect = container.getBoundingClientRect();
          const elementRect = (targetElement as HTMLElement).getBoundingClientRect();
          
          // Calculate scroll position: current scroll + element position relative to container - offset
          const scrollPosition = container.scrollTop + (elementRect.top - containerRect.top) - 20;
          
          // Smooth scroll to the target element
          container.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[95vw] sm:!max-w-[90vw] md:!max-w-[85vw] lg:!max-w-[80vw] xl:!max-w-4xl max-h-[90vh] flex flex-col bg-white p-0 [&>button]:z-20 [&>button]:top-4 [&>button]:right-4">
        <DialogHeader className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 pr-12">
          <div className="flex items-center gap-3">
            {showBackButton && onNavigateToTerms && (
              <button
                onClick={onNavigateToTerms}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Back to Terms of Service"
              >
                <ArrowLeft size={18} />
                <span className="text-sm font-medium">Back to Terms</span>
              </button>
            )}
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {title}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div
          ref={contentRef}
          onClick={handleContentClick}
          className="legal-document-content text-gray-700 leading-relaxed space-y-4 overflow-y-auto px-6 py-4 flex-1"
          dangerouslySetInnerHTML={{ __html: content }}
          style={{
            fontSize: '14px',
            lineHeight: '1.7'
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

