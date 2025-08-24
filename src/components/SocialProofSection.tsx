import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

interface SocialProofSectionProps {
  testimonials: Testimonial[];
}

export default function SocialProofSection({
  testimonials,
}: SocialProofSectionProps) {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 font-montserrat">
          Lo que Dicen Nuestros Aventureros
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Recomendado por 3 guías certificados de alta montaña
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {/* <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
