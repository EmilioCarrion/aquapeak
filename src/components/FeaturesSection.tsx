import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Droplets, Shield, Feather, Wrench } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-montserrat">
          Características que Marcan la Diferencia
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-transform duration-300 bg-card border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-accent font-semibold mb-3">
                  {feature.description}
                </p>
                <p className="text-muted-foreground text-sm">
                  {feature.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
