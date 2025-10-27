import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getTranslations } from "next-intl/server"
import { Phone, Mail } from "lucide-react"
import { Link } from "@/i18n/routing"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: "How It Works - Cash for Cars Process | Simple & Fast",
    es: "Cómo Funciona - Proceso de Efectivo por Carros | Simple y Rápido",
  }

  const descriptions = {
    en: "Learn how our simple 4-step process works. Get a quote, accept our offer, schedule pickup, and get paid instantly. No hassle, no hidden fees.",
    es: "Aprende cómo funciona nuestro simple proceso de 4 pasos. Obtén una cotización, acepta nuestra oferta, programa el retiro y recibe el pago instantáneo.",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: locale === "en" ? "/how-it-works" : `/${locale}/how-it-works`,
      languages: {
        "en-US": "/en/how-it-works",
        "es-US": "/es/how-it-works",
      },
    },
  }
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("howItWorksPage")

  // FAQ Schema for How It Works page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "es" ? "¿Necesito el título para vender mi carro?" : "Do I need a title to sell my car?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Aunque preferimos el título, a menudo podemos ayudarte a vender tu carro sin él. Contáctanos para discutir tu situación específica."
              : "While a title is preferred, we can often help you sell your car without one. Contact us to discuss your specific situation.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Qué tan rápido pueden retirar mi carro?" : "How quickly can you pick up my car?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Ofrecemos retiro el mismo día en la mayoría de los casos. Una vez que aceptes nuestra oferta, programaremos un horario conveniente."
              : "We offer same-day pickup in most cases. Once you accept our offer, we'll schedule a convenient time for pickup.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Qué condición de carros compran?" : "What condition cars do you buy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Compramos carros en cualquier condición - funcionando o no, dañados, viejos o con problemas mecánicos. ¡Cada carro tiene valor!"
              : "We buy cars in any condition - running or not, damaged, old, or with mechanical issues. Every car has value!",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Cómo recibo el pago?" : "How do I get paid?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Pagamos en efectivo en el momento cuando retiramos tu vehículo. También puedes solicitar un cheque de caja si prefieres."
              : "We pay cash on the spot when we pick up your vehicle. You can also request a cashier's check if you prefer.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("title")}</h1>
            <p className="text-xl text-muted-foreground text-balance">{t("subtitle")}</p>
          </div>

          <div className="space-y-8 mb-16">
            <StepCard
              number="1"
              title={t("step1Title")}
              description={t("step1Desc")}
              icon={
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            />
            <StepCard
              number="2"
              title={t("step2Title")}
              description={t("step2Desc")}
              icon={
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <StepCard
              number="3"
              title={t("step3Title")}
              description={t("step3Desc")}
              icon={
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
            />
            <StepCard
              number="4"
              title={t("step4Title")}
              description={t("step4Desc")}
              icon={
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            />
          </div>

          <Card className="p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">{t("benefitsTitle")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BenefitCard title={t("benefit1")} description={t("benefit1Desc")} />
              <BenefitCard title={t("benefit2")} description={t("benefit2Desc")} />
              <BenefitCard title={t("benefit3")} description={t("benefit3Desc")} />
            </div>
          </Card>

          <Card className="p-8 mb-16 bg-muted/30">
            <h2 className="text-3xl font-bold mb-4">{t("documentsTitle")}</h2>
            <p className="text-muted-foreground mb-6">{t("documentsDesc")}</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  ✓
                </Badge>
                <span>{t("doc1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  ✓
                </Badge>
                <span>{t("doc2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  ✓
                </Badge>
                <span>{t("doc3")}</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground italic">{t("documentsNote")}</p>
          </Card>

          <div className="text-center bg-gradient-to-br from-sky-500/10 to-emerald-500/10 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  +1-555-123-4567
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#quote-form">
                  <Mail className="mr-2 h-5 w-5" />
                  {locale === "es" ? "Obtener Oferta" : "Get an Offer"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}

function StepCard({
  number,
  title,
  description,
  icon,
}: {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card className="p-6 flex gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="text-sky-500 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
        ✓
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
