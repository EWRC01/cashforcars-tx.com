"use client"

import { Button } from "@/components/ui/button"
import { Phone, FileText } from "lucide-react"
import { useTranslations } from "next-intl"

export function FinalCTA() {
  const t = useTranslations("cta")

  return (
    <section className="py-20 bg-gradient-to-br from-sky-500/10 to-emerald-500/10">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("title")}</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">{t("description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600" asChild>
              <a href="tel:+12146073315">
                <Phone className="mr-2 h-5 w-5" />
                214-607-3315
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#quote-form">
                <FileText className="mr-2 h-5 w-5" />
                {t("button")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
