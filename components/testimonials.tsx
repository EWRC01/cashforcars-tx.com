"use client"

import { Card } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function Testimonials() {
  const t = useTranslations("testimonials")

  const testimonials = [
    { quote: t("testimonial1"), author: t("author1") },
    { quote: t("testimonial2"), author: t("author2") },
    { quote: t("testimonial3"), author: t("author3") },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <Quote className="w-8 h-8 text-sky-500 mb-4" />
                <p className="text-sm leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-muted-foreground">— {testimonial.author}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
