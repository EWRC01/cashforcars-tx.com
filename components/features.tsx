import { Card } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed. Deploy and scale your applications in seconds, not hours. Experience unmatched performance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance. Your data is protected with industry-leading security standards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly. Real-time collaboration tools that keep your team in sync and productive.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Make data-driven decisions. Comprehensive insights and reporting to track what matters most.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help your team work smarter, not harder.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/40 bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
