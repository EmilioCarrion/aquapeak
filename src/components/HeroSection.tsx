import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Droplets, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mountain-landscape-silhouette.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-montserrat leading-tight">
            La Botella que Conquista Montañas Contigo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Hidratación confiable a cualquier altitud. Diseñada por
            montañistas, para montañistas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Garantía 5 años
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Droplets className="h-4 w-4 mr-2" />
              Envío gratis
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              +10k aventureros
            </Badge>
          </div>

          <div className="mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-4 font-bold"
            >
              Consigue la Tuya - 25% OFF
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Solo $89 $67 (Oferta limitada)
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            <img
              src="/premium-water-bottle-mountain-design.png"
              alt="AquaPeak Bottle"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
