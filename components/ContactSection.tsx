import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Mail, 
  Send,
  CheckCircle,
  AlertCircle,
  Headphones
} from 'lucide-react';
import { FORM_CONFIG } from '../src/config/forms';



export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Using Formspree for secure email delivery
      const response = await fetch(FORM_CONFIG.CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          message: formData.message,
          _subject: `${FORM_CONFIG.FORM.SUBJECT_PREFIX} ${formData.name}`,
          _replyto: formData.email,
          _to: FORM_CONFIG.EMAIL.CONTACT
        }),
      });

      if (response.ok) {
        // Track successful form submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Success'
          });
        }
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', industry: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Formspree error:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      industry: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-orange-600" size={24} />,
      title: "Email Us",
      details: "sales@pieq.ai",
      email: "sales@pieq.ai"
    },
    {
      icon: <Headphones className="text-orange-600" size={24} />,
      title: "Support",
      details: "support@pieq.ai",
      email: "support@pieq.ai",
      subtitle: "Get technical assistance and support"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Ready to Transform
            <span className="block text-[#ed2200]">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join companies already automating their processes with PieQ. Get started with a free trial or schedule a personalized demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">Talk to Us</CardTitle>
              <p className="text-gray-600">Get up and running in minutes with full platform access</p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl mb-2">Welcome to PieQ!</h3>
                  <p className="text-gray-600">We've sent your details to our team. Our team will get back to you shortly. </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="shadow-sm focus:!bg-orange-50 focus:!border-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:!border-2 focus:!shadow-lg focus:!shadow-gray-200/50 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">Work Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="shadow-sm focus:!bg-orange-50 focus:!border-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:!border-2 focus:!shadow-lg focus:!shadow-gray-200/50 transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2">Company Name *</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                      className="shadow-sm focus:!bg-orange-50 focus:!border-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:!border-2 focus:!shadow-lg focus:!shadow-gray-200/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm mb-2">Industry</label>
                    <Select value={formData.industry} onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full border-none !bg-[#fef7f0] shadow-sm transition-all duration-200 rounded-md px-3 py-2 text-sm">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                        <SelectItem value="insurance" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50  data-[highlighted]:bg-orange-50">
                          <span>Insurance</span>
                        </SelectItem>
                        <SelectItem value="hospitality" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50 data-[highlighted]:bg-orange-50">
                          <span>Hospitality</span>
                        </SelectItem>
                        <SelectItem value="healthcare" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50  data-[highlighted]:bg-orange-50">
                          <span>Healthcare</span>
                        </SelectItem>
                        <SelectItem value="finance" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50  data-[highlighted]:bg-orange-50">
                          <span>Finance</span>
                        </SelectItem>
                        <SelectItem value="manufacturing" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50 data-[highlighted]:bg-orange-50">
                          <span>Manufacturing</span>
                        </SelectItem>
                        <SelectItem value="retail" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50  data-[highlighted]:bg-orange-50">
                          <span>Retail</span>
                        </SelectItem>
                        <SelectItem value="other" className="relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-orange-50 focus:bg-orange-50  data-[highlighted]:bg-orange-50">
                          <span>Other</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">Tell us about your automation needs</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What processes would you like to automate? What challenges are you facing?"
                      rows={4}
                      maxLength={FORM_CONFIG.SECURITY.MAX_MESSAGE_LENGTH}
                      className="shadow-sm focus:!bg-orange-50 focus:!border-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:!border-2 focus:!shadow-lg focus:!shadow-gray-200/50 transition-all duration-200"
                    />

                  </div>
                  
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
                      <AlertCircle size={20} />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl mb-4 font-bold text-gray-900">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Our automation experts are ready to help you transform your business processes. 
                Choose the option that works best for you.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white" style={{ borderColor: 'rgb(229 231 235 / var(--tw-border-opacity, 1))' }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-2 font-semibold text-gray-900">{info.title}</h4>
                      <a 
                        href={`https://mail.google.com/mail/u/0/#compose`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          // Track email link clicks
                          if (typeof window !== 'undefined' && window.gtag) {
                            window.gtag('event', 'click', {
                              event_category: 'Contact',
                              event_label: `Email Click - ${info.email}`
                            });
                          }
                        }}
                        className="text-lg mb-1 text-orange-600 hover:text-orange-700 transition-colors duration-200 block break-all"
                      >
                        {info.details}
                      </a>
                      {info.subtitle && (
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{info.subtitle}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl mb-2">Need Custom Solutions?</h4>
                <p className="text-orange-100 mb-4">
                  Our team can build custom automation solutions tailored to your specific industry and requirements.
                </p>
                <Button 
                  variant="outline" 
                  className="!bg-white text-orange-600 border-white hover:!bg-white hover:text-black hover:border-white"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Discuss Custom Solutions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

