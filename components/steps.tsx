"use client"

import { FileText, DollarSign, Truck } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function Steps() {
  const t = useTranslations("steps")

  const steps = [
    { icon: FileText, title: t("step1"), description: t("step1Desc") },
    { icon: DollarSign, title: t("step2"), description: t("step2Desc") },
    { icon: Truck, title: t("step3"), description: t("step3Desc") },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <step.icon className="w-12 h-12 mx-auto mb-4 text-sky-500" />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
