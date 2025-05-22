import React, { useState } from 'react';
import Button from '../ui/Button';
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-500 mb-6">
                Ready to Transform Your Restaurant Accounting Practice?
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Get in touch to schedule a personalized demo and see how PieQ can streamline your workflow and help you provide more value to your restaurant clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-500 mb-1">Contact Us</h3>
                    <p className="text-neutral-400"><a href="mailto:support@pieq.ai" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">support@pieq.ai</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-500 mb-1">Email Us</h3>
                    <p className="text-neutral-400"><a href="mailto:demo@pieq.ai" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">demo@pieq.ai</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 mr-4 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-500 mb-1">Business Hours</h3>
                    <p className="text-neutral-400">Monday - Friday: 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-medium p-6 md:p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-500">Request a Demo</h3>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-neutral-500 mb-2">Thank You!</h4>
                  <p className="text-neutral-400">Your request has been submitted. Our team will contact you shortly to schedule your personalized demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-500 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-500 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-500 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-500 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-500 mb-1">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Your Demo'}
                  </Button>
                  
                  <p className="text-sm text-neutral-400 mt-4 text-center">
                    By submitting this form, you agree to our <a href="#" className="text-primary-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-500 hover:underline">Terms of Service</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;