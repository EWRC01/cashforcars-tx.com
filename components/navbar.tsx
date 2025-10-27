"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { Link, usePathname } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const t = useTranslations("nav")
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/how-it-works", label: t("howItWorks") },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Cash For Cars
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                pathname === link.href ? "text-sky-500" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild>
            <a href="tel:+15551234567">
              <Phone className="mr-2 h-4 w-4" />
              {t("callUs")}
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-sky-500 ${
                      pathname === link.href ? "text-sky-500" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <a href="tel:+15551234567">
                    <Phone className="mr-2 h-4 w-4" />
                    {t("callUs")}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
