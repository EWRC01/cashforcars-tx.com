# Cash for Cars - Bilingual Landing Page

A modern, SEO-optimized bilingual (English/Spanish) landing page built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Bilingual Support**: Full English and Spanish translations with next-intl
- 🎨 **Modern Design**: Clean, conversion-focused UI with Tailwind CSS
- 🌓 **Dark Mode**: Optional dark theme with local storage persistence
- 📱 **Fully Responsive**: Mobile-first design with sticky mobile CTA
- ♿ **Accessible**: WCAG AA compliant with proper ARIA labels and semantic HTML
- 🚀 **SEO Optimized**: 
  - Metadata API with hreflang tags
  - JSON-LD schemas (LocalBusiness, FAQPage)
  - Dynamic OG images
  - Sitemap and robots.txt
- 📊 **Analytics Ready**: Vercel Analytics integration
- 🎯 **Lead Tracking**: UTM parameter capture and form submission

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Form Validation**: react-hook-form + zod
- **Animations**: Framer Motion (respects prefers-reduced-motion)

## Getting Started

### Installation

\`\`\`bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Configuration

#### Update Contact Information

Replace placeholder phone number and email in:
- `i18n/messages/en.json` and `i18n/messages/es.json`
- `components/navbar.tsx`
- `components/hero.tsx`
- `components/footer.tsx`
- `components/mobile-cta.tsx`
- `app/og/route.tsx`

**TODO**: Search for `+1-555-123-4567` and replace with your actual phone number.

#### Update Service Areas

Edit the service areas in `i18n/messages/en.json` and `i18n/messages/es.json`:
- Update cities and ZIP codes in the `serviceAreas` section

**TODO**: Customize cities and regions you serve.

#### Update Domain

Replace `cashforcars.example.com` with your actual domain in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`
- `app/[locale]/page.tsx` (JSON-LD schema)

## Routes

- `/en` - English homepage
- `/es` - Spanish homepage
- `/en/how-it-works` - English "How It Works" page
- `/es/how-it-works` - Spanish "Cómo Funciona" page

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

The site will automatically:
- Build with Next.js 14
- Generate sitemap and robots.txt
- Create dynamic OG images
- Enable Vercel Analytics

### Environment Variables

No environment variables are required for basic functionality. Optional:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - For Plausible Analytics
- `NEXT_PUBLIC_GA_ID` - For Google Analytics (requires consent banner)

## QA Checklist

Before going live, verify:

- [ ] hreflang tags present on all pages (view source)
- [ ] Canonical URLs correct for each locale
- [ ] OG images render correctly for both languages
- [ ] LCP under 2.5 seconds (test with Lighthouse)
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus visible on all interactive elements
- [ ] Form validation works (test with and without errors)
- [ ] Sticky mobile CTA appears on scroll
- [ ] Language switcher maintains current route
- [ ] Phone number links work on mobile
- [ ] Dark mode toggle persists preference
- [ ] All translations are accurate

## Customization

### Add New Translations

1. Add keys to `i18n/messages/en.json` and `i18n/messages/es.json`
2. Use `useTranslations()` hook in components:

\`\`\`tsx
const t = useTranslations('yourSection');
<p>{t('yourKey')}</p>
\`\`\`

### Modify Colors

Update the color palette in `app/globals.css`:
- Light mode: `:root` section
- Dark mode: `.dark` section

### Add New Pages

1. Create `app/[locale]/your-page/page.tsx`
2. Add translations to message files
3. Update navigation in `components/navbar.tsx`

## Performance

- Optimized fonts with next/font
- Lazy loading for non-critical sections
- SVG icons (inline, no external requests)
- Minimal JavaScript bundle
- Route-based code splitting

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
