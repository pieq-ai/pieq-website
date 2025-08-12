# Contact Form Setup Guide

## Overview
The contact form is configured to send emails to `sangeetha.r@pieq.ai` using **Formspree**, a secure and reliable form handling service.

## Security Features
✅ **Spam Protection**: Formspree includes built-in spam filtering and CAPTCHA support  
✅ **Rate Limiting**: Prevents abuse and excessive submissions  
✅ **Email Validation**: Ensures valid email addresses  
✅ **HTTPS Only**: All submissions are encrypted  
✅ **No Backend Required**: Runs entirely on the frontend  

## Configuration

### 1. Formspree Setup
1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy the form endpoint (e.g., `https://formspree.io/f/xpzgwqkq`)
4. Update `src/config/forms.ts` with your endpoint

### 2. Email Configuration
The form is configured to:
- Send emails to: `sangeetha.r@pieq.ai`
- Include sender's email as reply-to
- Set a descriptive subject line
- Send a copy to the primary contact

### 3. Customization
Edit `src/config/forms.ts` to modify:
- Form endpoints
- Email addresses
- Response time promises
- Subject line prefixes

## How It Works

1. **User submits form** → Data is sent to Formspree
2. **Formspree processes** → Applies spam protection and validation
3. **Email sent** → To `sangeetha.r@pieq.ai` with form details
4. **Auto-reply** → User receives confirmation email
5. **Dashboard** → All submissions visible in Formspree dashboard

## Monitoring & Management

- **Formspree Dashboard**: View all submissions, manage spam, export data
- **Email Notifications**: Instant email alerts for new submissions
- **Analytics**: Track form performance and conversion rates

## Troubleshooting

- **Form not sending**: Check Formspree endpoint in config
- **Spam issues**: Enable CAPTCHA in Formspree settings
- **Rate limiting**: Check Formspree plan limits

## Production Deployment

1. Update Formspree endpoint in production config
2. Test form submission thoroughly
3. Monitor Formspree dashboard for issues
4. Set up email forwarding if needed

---
**Note**: This setup provides enterprise-grade security without requiring backend infrastructure.
