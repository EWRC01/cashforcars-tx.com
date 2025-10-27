"use client"

import { useParams } from "next/navigation"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = params.locale as string

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "es" : "en"
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <Button variant="ghost" size="icon" onClick={switchLocale} title="Switch language">
      <Globe className="h-5 w-5" />
      <span className="sr-only">{currentLocale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}</span>
    </Button>
  )
}
