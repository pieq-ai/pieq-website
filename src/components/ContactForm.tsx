import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { contactService } from '../services/contactService';
import { ContactFormData, ApiError } from '../types/api';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const apiData: ContactFormData = {
        full_name: formData.name,
        work_email: formData.email,
        company_name: formData.company,
        automation_requirements: formData.message,
        industry: 'Not Specified' // Default or add a field if needed
      };

      await contactService.sendContactForm(apiData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Side: Content */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#A6823C]/10 text-[#A6823C] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full border border-[#A6823C]/20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A6823C] animate-pulse" />
                  Connect
                </motion.div>
                <h2 className="text-5xl font-light tracking-tighter uppercase leading-[0.9] mb-8 text-black">
                  Talk <br /> <span className="font-black italic">to Us</span>
                </h2>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-12 max-w-xs border-l border-zinc-200 pl-6">
                  Ready to optimize your insurance or hospitality operations? Express your interest in the <span className="text-black font-bold uppercase tracking-widest text-[10px]">PieQ FLOW</span> engine below.
                </p>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glassmorphism Background Decoration */}
                <div className="absolute -inset-4 bg-white/40 backdrop-blur-3xl rounded-[2rem] -z-10 border border-white/20 hidden md:block" />
                
                {isSubmitted ? (
                  <div className="bg-white p-8 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-zinc-100 flex flex-col items-center justify-center text-center min-h-[400px]">
                    <CheckCircle className="text-[#A6823C] w-16 h-16 mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                    <p className="text-zinc-500">We'll be in touch shortly to discuss your automation needs.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-8 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-zinc-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] block text-zinc-400">Full Name *</label>
                        <input 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text" 
                          required
                          placeholder="ALEXANDER VANCE"
                          className="w-full bg-transparent border-b-2 border-zinc-100 focus:border-[#A6823C] py-4 px-0 outline-none transition-all placeholder:text-zinc-200 font-bold uppercase text-xs tracking-widest"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] block text-zinc-400">Work Email *</label>
                        <input 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          required
                          placeholder="VANCE@PIEQ.COM"
                          className="w-full bg-transparent border-b-2 border-zinc-100 focus:border-[#A6823C] py-4 px-0 outline-none transition-all placeholder:text-zinc-200 font-bold uppercase text-xs tracking-widest"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 mb-10">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] block text-zinc-400">Company Name *</label>
                      <input 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        type="text" 
                        required
                        placeholder="ENTERPRISE SOLUTIONS"
                        className="w-full bg-transparent border-b-2 border-zinc-100 focus:border-[#A6823C] py-4 px-0 outline-none transition-all placeholder:text-zinc-200 font-bold uppercase text-xs tracking-widest"
                      />
                    </div>

                    <div className="space-y-3 mb-12">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] block text-zinc-400">Tell us about your automation needs</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="DESCRIBE YOUR CURRENT WORKFLOW CHALLENGES..."
                        className="w-full bg-transparent border-b-2 border-zinc-100 focus:border-[#A6823C] py-4 px-0 outline-none transition-all placeholder:text-zinc-200 font-bold uppercase text-xs tracking-widest resize-none"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 p-4 mb-6 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest rounded-sm border border-red-100">
                        <AlertCircle size={16} />
                        {error}
                      </div>
                    )}

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-zinc-800 h-16 rounded-none font-black uppercase tracking-[0.6em] text-[10px] transition-all duration-500 relative overflow-hidden group flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Interest'}</span>
                      {!isSubmitting && <div className="w-1.5 h-1.5 rounded-full bg-[#A6823C]" />}
                      <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                    </Button>
                    
                    <div className="mt-8 flex items-center justify-center gap-4">
                      <div className="h-px flex-1 bg-zinc-100" />
                      <div className="h-px flex-1 bg-zinc-100" />
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
