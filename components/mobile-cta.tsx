"use client"

import { Button } from "@/components/ui/button"
import { Phone, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export function MobileCTA() {
  const t = useTranslations("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t shadow-lg p-4">
      <div className="flex gap-3">
        <Button className="flex-1 bg-sky-500 hover:bg-sky-600" asChild>
          <a href="tel:+12146073315">
            <Phone className="mr-2 h-4 w-4" />
            {t("callButton")}
          </a>
        </Button>
        <Button className="flex-1 bg-transparent" variant="outline" asChild>
          <a href="#quote-form">
            <FileText className="mr-2 h-4 w-4" />
            {t("offerButton")}
          </a>
        </Button>
      </div>
    </div>
  )
}
