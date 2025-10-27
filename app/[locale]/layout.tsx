import type React from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: "Cash for Cars - We Buy Any Car, Any Condition | Same-Day Pickup",
    es: "Efectivo por Carros - Compramos Cualquier Carro | Retiro el Mismo Día",
  }

  const descriptions = {
    en: "Get instant cash for your car. Same-day pickup, free towing, licensed and insured. We buy cars in any condition throughout Florida.",
    es: "Obtén efectivo instantáneo por tu carro. Retiro el mismo día, remolque gratis, licenciados y asegurados. Compramos carros en cualquier condición en toda Florida.",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        "en-US": "/en",
        "es-US": "/es",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_US",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            {children}
            <Toaster />
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
