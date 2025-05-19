import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  toggleOpen 
}) => {
  return (
    <div className="border-b border-neutral-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-neutral-500">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-neutral-400">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-neutral-400 animate-fade-in">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How does PieQ integrate with existing accounting software?",
      answer: "PieQ seamlessly integrates with popular accounting software like QuickBooks, Xero, and Sage. Our platform pulls data from these systems and enhances it with restaurant-specific features without disrupting your existing workflow. We provide custom connectors for POS systems common in the restaurant industry as well."
    },
    {
      question: "Can PieQ handle multiple restaurant locations under one client?",
      answer: "Absolutely! PieQ is designed to handle complex business structures common in the restaurant industry. You can manage multiple locations, franchises, or concepts under a single client profile while maintaining separate financial reporting and performance metrics for each location."
    },
    {
      question: "What makes PieQ different from general accounting software?",
      answer: "PieQ is built specifically for accounting professionals serving the restaurant and hospitality industry. We offer specialized features like tip reporting, food cost analysis, POS integration, and industry benchmarking tools that general accounting software doesn't provide. Our AI tools are also trained on restaurant-specific data and workflows."
    },
    {
      question: "How secure is my clients' financial data on PieQ?",
      answer: "PieQ employs bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits. All data is encrypted both in transit and at rest, and we maintain strict access controls and backup protocols. We never share or sell your data, and you maintain full ownership of all client information."
    },
    {
      question: "Is there a limit to how many clients I can manage in PieQ?",
      answer: "No, there's no limit to the number of clients you can manage. Our pricing is based on tiers that accommodate different firm sizes, from small practices to large accounting firms with hundreds of restaurant clients. Each plan includes unlimited users within your firm."
    },
    {
      question: "Do you offer training and support for my team?",
      answer: "Yes, we provide comprehensive onboarding and training for your entire team. This includes live training sessions, on-demand video resources, and a dedicated success manager for our Professional and Enterprise plans. Our support team has experience in both accounting and restaurant operations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-400">
            Get answers to common questions about our platform and how it can benefit your accounting practice.
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-soft p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;