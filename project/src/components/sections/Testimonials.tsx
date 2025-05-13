import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  position, 
  company, 
  rating 
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-soft relative">
      <div className="absolute top-6 right-8 text-secondary-500">
        <Quote className="h-10 w-10 opacity-20" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-200'}`} 
          />
        ))}
      </div>
      
      <p className="text-neutral-500 mb-6 relative z-10">"{quote}"</p>
      
      <div>
        <p className="font-semibold text-neutral-500">{author}</p>
        <p className="text-sm text-neutral-400">{position}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "PieQ has transformed how we manage our restaurant clients. The automated reports and industry benchmarks have saved us hours of work each week while providing much more value to clients.",
      author: "Sarah Johnson",
      position: "Partner",
      company: "Culinary Accountants LLC",
      rating: 5
    },
    {
      quote: "The restaurant-specific features make all the difference. Being able to integrate with POS systems and automatically categorize expenses has reduced our error rate by nearly 80%.",
      author: "Michael Chen",
      position: "Senior Manager",
      company: "Hospitality Financial Group",
      rating: 5
    },
    {
      quote: "We've been able to take on 30% more restaurant clients without adding staff because of the automation and efficiency PieQ provides. The ROI has been incredible.",
      author: "Leila Rodriguez",
      position: "Founder",
      company: "Food & Finance Advisors",
      rating: 4
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Trusted By Leading Accounting Firms
          </h2>
          <p className="text-lg text-neutral-400">
            Hear from accounting professionals who specialize in the restaurant and hospitality industry.
          </p>
        </div>

        {/* Testimonials slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary-500' : 'bg-neutral-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 h-10 w-10 rounded-full bg-white shadow-medium flex items-center justify-center text-neutral-500 hover:text-primary-500 transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 h-10 w-10 rounded-full bg-white shadow-medium flex items-center justify-center text-neutral-500 hover:text-primary-500 transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;