# Formspree Setup Guide - Professional Form Handling

## 🚀 Quick Setup (3 minutes)

### Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io) and sign up
2. Verify your email address

### Step 2: Create New Form
1. Click **"New Form"**
2. Give it a name: "PieQ Contact Form"
3. **Copy the form endpoint** (e.g., `https://formspree.io/f/xpzgwqkq`)

### Step 3: Configuration Complete ✅
Your Formspree endpoint is already configured in `src/config/forms.ts`:

```typescript
// Formspree endpoint for contact form
CONTACT_FORM_ENDPOINT: 'https://formspree.io/f/mblkwgez',
```

### Step 4: Code Already Updated ✅
The ContactSection.tsx has already been updated to use Formspree with your endpoint.

## ✅ That's It! Your Form Will Work!

## 🔧 Advanced Features

### Spam Protection
- Built-in CAPTCHA
- Honeypot fields
- Rate limiting
- IP blocking

### Email Customization
- Custom subject lines
- Auto-replies
- CC/BCC support
- Email templates

### Dashboard Features
- View all submissions
- Export data
- Analytics
- Team collaboration

## 📧 How It Works

1. **User submits form** → Data sent to Formspree
2. **Formspree processes** → Applies spam protection
3. **Email sent** → To `sangeetha.r@pieq.ai`
4. **Auto-reply** → User gets confirmation
5. **Dashboard** → All submissions visible

## 💰 Pricing

- **Free Plan**: 50 submissions/month
- **Paid Plans**: Start at $8/month for 1,000 submissions
- **Enterprise**: Custom pricing

## 🔒 Security Features

- **HTTPS Only**: All communications encrypted
- **Spam Protection**: Advanced filtering
- **Rate Limiting**: Prevents abuse
- **Professional Delivery**: Reliable email service

---
**Formspree is excellent for production use with enterprise-grade security!**
