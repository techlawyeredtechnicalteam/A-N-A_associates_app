# A.N.A & Associates - Law Firm Website

A modern, responsive website for A.N.A & Associates, a full-service law firm based in Lagos, Nigeria.

## 🏢 About A.N.A & Associates

A.N.A & Associates is a modern and full-service law firm committed to providing exceptional legal solutions tailored to meet the unique needs of clients. Led by Principal Partner Adekunle Aribisala, the firm combines local knowledge with global best practices.

### Practice Areas

- Insolvency and Debt Recovery
- Corporate and Commercial Practice
- Arbitration and Alternative Dispute Resolution
- Civil Litigation
- Property Management and Real Estate Law
- Probate and Administration of Estate Law
- Family Law
- Employment and Labour Law

## 🚀 Deployment

- **Deployment**: Optimized for [Vercel](https://www.com/)

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: TypeScript/JavaScript


## 📋 Features

### ✨ Core Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times and optimized bundle size
- **SEO Friendly**: Structured data, meta tags, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

### 🎨 Design Features

- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Elements**: Hover effects and engaging user interactions
- **Professional Color Scheme**: Gold (#b98e44) and Navy (#152833) branding
- **Typography**: Optimized font loading with next/font

### 📱 Pages

- **Home**: Hero section, services overview, and call-to-action
- **About**: Detailed firm information and principal partner profile
- **Services**: Comprehensive practice areas with detailed descriptions
- **Contact**: Contact information, office hours, and location map

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/a-n-a_associates.git
cd ana-associates
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
ana_associates/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/
│   │   │   └── page.jsx       # About page
│   │   ├── contact/
│   │   │   └── page.jsx       # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout
│   │   └── page.js            # Home page
│   └── components/            # Reusable components
│       ├── AboutPage.jsx      # About page component
│       ├── AnimationVariants.js # Animation configurations
│       ├── Footer.jsx         # Footer component
│       ├── Header.jsx         # Header/Navigation
│       └── Services.jsx       # Services component
├── public/                    # Static assets
│   ├── logo1.jpg             # Company logo
│   └── ...                   # Other static files
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Key Components

### Header Component

- Responsive navigation
- Mobile menu with smooth animations
- Logo and branding

### Services Component

- Grid layout for practice areas
- Interactive service cards
- Call-to-action section

### About Component

- Principal partner profile
- Mission and vision statements
- Why choose us section

### Contact Component

- Contact information cards
- Office hours and location
- Interactive map section

## 🎨 Styling & Theming

### Color Palette

```css
/* Primary Colors */
--primary-gold: #b98e44;
--primary-navy: #152833;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-600: #4b5563;
--gray-900: #111827;
```

### Typography

- **Font Family**: Geist (optimized with next/font)
- **Responsive Typography**: Fluid scaling across devices
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)

## ⚡ Performance Optimizations

### Loading Time Optimizations

- **Simplified Animations**: Reduced complex spring animations
- **Optimized Bundle**: Tree-shaking and code splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Preloaded fonts with next/font

### Animation Performance

- **Reduced Animation Duration**: 0.4s instead of 0.8s
- **Simplified Variants**: Streamlined animation configurations
- **Viewport Optimization**: Efficient scroll-triggered animations
- **Hardware Acceleration**: CSS transforms for smooth animations

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

- Extended color palette
- Custom spacing and sizing
- Responsive breakpoints
- Animation utilities

### Next.js

Configuration in `next.config.js`:

- Image optimization settings
- Build optimizations
- Performance enhancements

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach

- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactions


### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔍 SEO Features

### Structured Data

- JSON-LD schema for legal services
- Organization and person markup
- Local business information

### Meta Tags

- Dynamic page titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support

### Performance

- Core Web Vitals optimization
- Fast loading times
- Mobile-friendly design

## 🧪 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Code Quality

- ESLint configuration
- Prettier formatting
- Component-based architecture
- Consistent naming conventions

## 📞 Contact Information

**A.N.A & Associates**

- **Address**: 1st Floor, Scapular Plaza, Igbo Efon Bus-stop, Lekki Epe Expressway, Lekki, Lagos
- **Phone**: +234 803 777 8498, +234 805 059 0365
- **Hours**: Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 1:00 PM

## 📄 License

This project is proprietary and confidential. All rights reserved by A.N.A & Associates.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **React Icons** for the comprehensive icon library

---
