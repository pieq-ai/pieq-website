# PieQ Professional Business Website

Modern, responsive business website showcasing PieQ's AI-powered business process management platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test:run
```

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🛠️ Tech Stack

- **React 19.1.1** - Latest React with new features and improvements
- **TypeScript 5.6** - Type-safe development
- **Vite 5.4** - Fast build tool and dev server
- **Vitest** - Fast unit testing framework
- **Tailwind CSS 3.4** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Framer Motion 11** - Smooth animations
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
pieq-website/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components (shadcn/ui)
│   │   ├── Header.tsx        # Site navigation
│   │   ├── HeroSection.tsx   # Landing hero
│   │   ├── FeaturesSection.tsx # Features showcase
│   │   ├── SolutionsSection.tsx # Solutions presentation
│   │   ├── ContactSection.tsx # Contact form
│   │   └── Footer.tsx        # Site footer
│   ├── App.tsx               # Main application
│   ├── main.tsx              # Entry point
│   ├── config/               # Configuration files
│   ├── types/                # TypeScript definitions
│   └── test/                 # Test files
├── styles/
│   └── globals.css           # Global styles
├── public/
│   └── favicon.svg           # Custom PieQ favicon
└── guidelines/               # Development guidelines
```

## ✨ Features

- **🎨 Modern UI** - Clean, professional interface
- **📱 Responsive** - Mobile-first design
- **♿ Accessible** - WCAG 2.1 AA compliant
- **⚡ Fast** - Optimized performance
- **🔒 Secure** - Type-safe with TypeScript
- **📊 Analytics** - Google Analytics integration

## 🔧 Development

```bash
# Type checking
npm run lint

# Build for production
npm run build

# Run tests
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🧪 Testing

The project uses **Vitest** for fast unit testing with comprehensive coverage:

- ✅ **Accessibility Testing** - WCAG 2.1 AA compliance
- ✅ **Component Testing** - React component functionality
- ✅ **Integration Testing** - Full application flow
- ✅ **Form Testing** - Contact form validation
- ✅ **Navigation Testing** - Menu and link functionality

**Test Coverage:**
- **Overall Coverage**: 29.33% (due to unused UI components)
- **Core Application**: 96-100% coverage for main components
- **Components Tested**: SolutionsSection, FeaturesSection, HeroSection, Footer, Header, ContactSection, App.tsx
- **Test Areas**: Skip links, form validation, email links, mobile menu, navigation, accessibility landmarks

**Note**: Lower overall coverage is due to many unused shadcn/ui components. Core application functionality has excellent test coverage.

## 🎯 Customization

- **🎨 Colors**: Update `tailwind.config.js`
- **📝 Content**: Modify components in `src/components/`
- **💅 Styling**: Edit `styles/globals.css`
- **⚙️ Config**: Update `src/config/` files

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🔍 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with tree-shaking
- **Loading Speed**: < 2s on 3G networks
- **Accessibility**: WCAG 2.1 AA compliant

## 🛡️ Security

- **TypeScript**: Compile-time type checking
- **ESLint**: Code quality and security rules
- **Dependencies**: Regularly updated and audited
- **HTTPS**: Secure by default in production

## 📄 License

Proprietary software for PieQ.

---

**Built with ❤️ for PieQ**