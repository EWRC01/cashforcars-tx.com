"use client"

import { Truck, Clock, FileCheck, Shield } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function TrustBadges() {
  const t = useTranslations("trust")

  const badges = [
    { icon: Truck, label: t("freeTowing") },
    { icon: Clock, label: t("sameDayPickup") },
    { icon: FileCheck, label: t("noTitle") },
    { icon: Shield, label: t("licensed") },
  ]

  return (
    <section className="py-12 border-b">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium">{badge.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
