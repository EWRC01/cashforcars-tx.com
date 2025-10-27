import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "10 GB storage", "Basic analytics", "Email support", "Core features"],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams that need more power",
    features: [
      "Up to 20 team members",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "All features",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "All features",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/40 py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-border/40 bg-card p-8 ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
