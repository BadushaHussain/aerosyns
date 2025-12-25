# Aerosyns Enterprise Website

Enterprise IT and AI infrastructure services website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the website.

## 📁 Project Structure

```
d:/Cresto/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── services/          # Service pages
│   │   ├── infrastructure/
│   │   ├── ai-infrastructure/
│   │   ├── cloud/
│   │   ├── cybersecurity/
│   │   ├── managed-services/
│   │   └── software/
│   ├── products/          # Product pages
│   │   ├── saas/         # SaaS products
│   │   └── hardware/     # Hardware catalog
│   ├── solutions/         # Solution pages
│   ├── company/           # Company pages
│   ├── contact/           # Contact page
│   └── case-studies/      # Case studies
├── components/            # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── HeroEnterprise.tsx
│   ├── ServiceTiles.tsx
│   ├── LeadForm.tsx
│   └── CookieConsent.tsx
├── lib/                   # Utility functions
│   ├── seo.ts            # SEO metadata helpers
│   └── api.ts            # CRM & analytics integration
├── styles/               # Global styles
│   └── globals.css
├── public/               # Static assets
└── data/                 # Data files (SLA, catalog)
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://aerosyns.com

# CRM Integration
NEXT_PUBLIC_CRM_WEBHOOK_URL=https://your-crm-webhook-url
NEXT_PUBLIC_QUOTE_WEBHOOK_URL=https://your-quote-webhook-url

# Analytics
NEXT_PUBLIC_ANALYTICS_ENDPOINT=https://your-analytics-endpoint

# SEO
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0284c7 to #0369a1)
- **Secondary**: Purple gradient (#a855f7 to #7e22ce)
- **Accent**: Orange (#f97316)

### Typography
- **Display Font**: Outfit (headings)
- **Body Font**: Inter (body text)

### Components
- `btn-primary`: Primary CTA button
- `btn-secondary`: Secondary outlined button
- `card-enterprise`: Enterprise card with shadow
- `section-padding`: Consistent section spacing

## 📄 Pages

### Completed Pages
- ✅ Home (`/`)
- ✅ Infrastructure & Cabling (`/services/infrastructure`)
- ✅ AI Infrastructure (`/services/ai-infrastructure`)
- ✅ Contact (`/contact`)

### To Be Created
- Cloud & Hybrid IT
- Cybersecurity
- Managed Services
- Software Engineering
- SaaS Products (Nizsoft, Nautify, HRMS, Biometric, CRM)
- Hardware Sales
- Solutions
- Company Pages (About, Partners, Compliance)
- Case Studies
- Careers

## 🔌 Integrations

### CRM Integration
Lead forms submit to configured webhook URL. Update `lib/api.ts` to customize integration logic.

### Analytics
Event tracking available via `trackEvent()` function in `lib/api.ts`.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

```bash
# Build
npm run build

# The output will be in .next/ directory
# Deploy .next/ to your hosting provider
```

### Environment Variables in Production
Add all environment variables from `.env.local` to your hosting provider's environment configuration.

## 📝 Content Management

### Adding a New Service Page
1. Create file in `app/services/[service-name]/page.tsx`
2. Copy structure from existing service page
3. Update metadata, content, and CTAs
4. Add to navigation in `components/Navigation.tsx`

### Adding a New Product
1. Create file in `app/products/[category]/[product]/page.tsx`
2. Use ProductCard component for consistent styling
3. Update product navigation

### Updating SEO
Edit `lib/seo.ts` to update default SEO configuration or page-specific metadata.

## 🎯 Performance Optimization

- Images: Use Next.js Image component with AVIF/WebP formats
- Code Splitting: Automatic with Next.js App Router
- Fonts: Self-hosted Google Fonts with `next/font`
- CSS: Tailwind CSS with PurgeCSS in production

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📊 Lighthouse Targets
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Submit for review

## 📞 Support

For questions or issues:
- Email: info@aerosyns.com
- Phone: +971 XX XXX XXXX

## 📜 License

Proprietary - Aerosyns © 2024

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
