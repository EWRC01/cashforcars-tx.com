"use client"

import { Button } from "@/components/ui/button"
import { Phone, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-background to-background" />
      <div className="container relative px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-sky-600 dark:text-sky-400">{t("subtitle")}</p>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("description")}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600" asChild>
              <a href="tel:+12146073315">
                <Phone className="mr-2 h-5 w-5" />
                {t("callButton")}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="#quote-form">
                <FileText className="mr-2 h-5 w-5" />
                {t("offerButton")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
