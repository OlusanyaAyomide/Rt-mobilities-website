import { ShieldCheck, Settings, LineChart, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import CardWrapper from "@/components/landing/CardWrapper";

const features = [
  {
    title: "Asset-Backed Model",
    description: "Your participation is tied to real, physical transportation assets that generate daily value.",
    icon: ShieldCheck,
  },
  {
    title: "Managed Operations",
    description: "Professional teams handle all logistics, maintenance, and drivers, ensuring maximum efficiency.",
    icon: Settings,
  },
  {
    title: "Transparent Performance",
    description: "Track asset performance, revenue, and utilization in real-time through our app.",
    icon: LineChart,
  },
  {
    title: "Secure Technology",
    description: "Built on robust infrastructure to ensure data integrity and secure earnings distribution.",
    icon: Lock,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern - Plus CSS */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            The Fundamentals
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6">
            Why  <span className="text-primary">RT Mobility ?</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            In a volatile economic landscape, mobility remains a critical utility with consistent cash-flow characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <CardWrapper
                key={index}
                className="p-8 border-transparent bg-white shadow-sm"
                showCircle={true}
                circlePosition="top-right"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/5 text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-foreground mb-3 group-hover/card:text-primary-deep transition-colors duration-300">
                  {feature.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
