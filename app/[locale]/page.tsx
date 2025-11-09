import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { LeadForm } from "@/components/lead-form"
import { Steps } from "@/components/steps"
import { Testimonials } from "@/components/testimonials"
import { ServiceAreas } from "@/components/service-areas"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": "https://cashforcars.example.com",
    name: "Cash for Cars",
    telephone: "+1-214-607-3315",
    areaServed: [
      {
        "@type": "City",
        name: "Dallas",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hunt County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Lamar County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Rains County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Wood County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Collin County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Rockwall County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Dallas County",
        addressRegion: "TX",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hopkins County",
        addressRegion: "TX",
      },
    ],
    knowsLanguage: ["en", "es"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <section id="quote-form" className="py-16 bg-muted/30">
          <div className="container max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </section>
        <Steps />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
