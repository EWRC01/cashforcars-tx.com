"use client"

import { MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export function ServiceAreas() {
  const t = useTranslations("serviceAreas")

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-sky-500" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("title")}</h2>
          <p className="text-lg text-muted-foreground mb-6">{t("description")}</p>
          <p className="text-base">{t("counties")}</p>
        </div>
      </div>
    </section>
  )
}
