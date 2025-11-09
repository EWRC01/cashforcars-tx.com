"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { useParams } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  year: z.string().min(4, "Year is required"),
  make: z.string().min(2, "Make is required"),
  model: z.string().min(2, "Model is required"),
  city: z.string().min(2, "City or ZIP is required"),
  condition: z.string().min(1, "Condition is required"),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function LeadForm() {
  const t = useTranslations("form")
  const params = useParams()
  const locale = params.locale as string
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const condition = watch("condition")

  // Capture UTM parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const utmData = {
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        gclid: params.get("gclid"),
      }
      sessionStorage.setItem("utmData", JSON.stringify(utmData))
    }
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Get UTM data from sessionStorage
      const utmData = JSON.parse(sessionStorage.getItem("utmData") || "{}")

      const payload = {
        ...data,
        locale,
        sourcePath: window.location.pathname,
        ...utmData,
      }

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        toast.success(t("success"))
      } else {
        toast.error(t("error"))
      }
    } catch (error) {
      toast.error(t("error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl md:text-3xl">{t("title")}</CardTitle>
        <CardDescription>
          {locale === "es"
            ? "Completa el formulario y te contactaremos pronto"
            : "Fill out the form and we'll contact you soon"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="name">{t("name")}</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="year">{t("year")}</Label>
              <Input id="year" placeholder="2020" {...register("year")} />
              {errors.year && <p className="text-sm text-destructive mt-1">{errors.year.message}</p>}
            </div>
            <div>
              <Label htmlFor="make">{t("make")}</Label>
              <Input id="make" placeholder="Ford" {...register("make")} />
              {errors.make && <p className="text-sm text-destructive mt-1">{errors.make.message}</p>}
            </div>
            <div>
              <Label htmlFor="model">{t("model")}</Label>
              <Input id="model" placeholder="F-150" {...register("model")} />
              {errors.model && <p className="text-sm text-destructive mt-1">{errors.model.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">{t("city")}</Label>
              <Input id="city" placeholder="Dallas, TX" {...register("city")} />
              {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
            </div>
            <div>
              <Label htmlFor="condition">{t("condition")}</Label>
              <Select onValueChange={(value) => setValue("condition", value)} value={condition}>
                <SelectTrigger id="condition">
                  <SelectValue placeholder={t("condition")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">{t("conditionExcellent")}</SelectItem>
                  <SelectItem value="good">{t("conditionGood")}</SelectItem>
                  <SelectItem value="fair">{t("conditionFair")}</SelectItem>
                  <SelectItem value="poor">{t("conditionPoor")}</SelectItem>
                  <SelectItem value="not-running">{t("conditionNotRunning")}</SelectItem>
                </SelectContent>
              </Select>
              {errors.condition && <p className="text-sm text-destructive mt-1">{errors.condition.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="notes">{t("notes")}</Label>
            <Textarea id="notes" rows={3} {...register("notes")} />
          </div>

          <Button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 h-12 text-lg font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
