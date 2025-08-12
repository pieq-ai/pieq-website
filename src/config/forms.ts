// Form configuration
export const FORM_CONFIG = {
  // Formspree endpoint for contact form
  // This endpoint will send emails to sangeetha.r@pieq.ai
  CONTACT_FORM_ENDPOINT: 'https://formspree.io/f/mblkwgez',
  
  // Email configuration
  EMAIL: {
    PRIMARY: 'sangeetha.r@pieq.ai',
    CONTACT: 'sangeetha.r@pieq.ai',
    SUPPORT: 'support@pieq.ai'
  },
  
  // Form settings
  FORM: {
    SUBJECT_PREFIX: 'New Contact Form Submission from',
    RESPONSE_TIME: '2 hours',
    AUTO_REPLY: true,
    MAX_SUBMISSIONS_PER_HOUR: 5,
    ENABLE_CAPTCHA: true
  },
  
  // Security settings
  SECURITY: {
    MAX_MESSAGE_LENGTH: 1000,
    ALLOWED_EMAIL_DOMAINS: [], // Empty array means all domains allowed
    BLOCKED_IPS: [], // Add IPs to block if needed
    ENABLE_RATE_LIMITING: true
  }
};
