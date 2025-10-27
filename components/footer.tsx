"use client"

import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-4">Cash For Cars</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-500" />
                <a href="tel:+15551234567" className="hover:text-sky-500 transition-colors">
                  +1-555-123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-500" />
                <a href="mailto:info@cashforcars.example.com" className="hover:text-sky-500 transition-colors">
                  info@cashforcars.example.com
                </a>
              </div>
              <p className="text-muted-foreground">{t("hours")}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="#quote-form" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  {t("privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  {t("terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">{t("legal")}</p>
          <p>&copy; {new Date().getFullYear()} Cash For Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
