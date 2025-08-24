"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Mountain,
  Droplets,
  Shield,
  Feather,
  Wrench,
  Users,
  CheckCircle,
  X,
} from "lucide-react";

export default function AquaPeakLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Guía de Alta Montaña",
      image: "/mountain-guide-portrait.png",
      rating: 5,
      text: "Después de 15 años guiando en los Andes, puedo decir que AquaPeak es la única botella que realmente resiste las condiciones extremas.",
    },
    {
      name: "Ana Rodríguez",
      role: "Montañista Profesional",
      image: "/female-mountaineer-portrait.png",
      rating: 5,
      text: "Subí el Aconcagua con mi AquaPeak. Ni una sola fuga a 6,000m de altitud. Increíble calidad.",
    },
    {
      name: "Miguel Torres",
      role: "Aventurero",
      image: "/male-hiker-portrait.png",
      rating: 5,
      text: "La mejor inversión para mis aventuras. Ligera, resistente y mantiene el agua fría por horas.",
    },
  ];

  const features = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Anti-Altitud",
      description: "Sellado hermético hasta 4000m",
      detail:
        "Tecnología de válvula especial que mantiene la presión interna estable",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Termo-Smart",
      description: "24h frío, 12h caliente",
      detail: "Doble pared de acero inoxidable con aislamiento al vacío",
    },
    {
      icon: <Feather className="h-8 w-8" />,
      title: "Ultra-Light",
      description: "Solo 180g, capacidad 750ml",
      detail: "Diseño optimizado sin comprometer la resistencia",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Titanium-Grade",
      description: "Resistente a caídas y golpes",
      detail: "Aleación especial que soporta impactos extremos",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Easy-Clean",
      description: "Boca ancha, desmontable 100%",
      detail: "Limpieza profunda en segundos, sin rincones ocultos",
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient font-montserrat">
            AquaPeak
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Consigue la Tuya - 25% OFF
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              ¿Cansado de botellas que fallan cuando más las necesitas?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Fugas en altitud</h3>
                <p className="text-muted-foreground">
                  Las botellas comunes fallan con los cambios de presión
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Peso excesivo</h3>
                <p className="text-muted-foreground">
                  Cargar kilos extra en tu mochila es agotador
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">
                  Temperatura inconsistente
                </h3>
                <p className="text-muted-foreground">
                  Tu bebida se calienta o enfría cuando no debe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Social Proof Section */}
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
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-montserrat">
            AquaPeak vs Competencia
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-montserrat">
                          Característica
                        </th>
                        <th className="text-center p-4 bg-primary/10 font-montserrat">
                          AquaPeak
                        </th>
                        <th className="text-center p-4 font-montserrat">
                          Competencia
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4">Peso</td>
                        <td className="text-center p-4 bg-primary/10">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto mb-1" />
                          180g
                        </td>
                        <td className="text-center p-4">
                          <X className="h-5 w-5 text-destructive mx-auto mb-1" />
                          300g+
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4">Duración térmica</td>
                        <td className="text-center p-4 bg-primary/10">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto mb-1" />
                          24h frío
                        </td>
                        <td className="text-center p-4">
                          <X className="h-5 w-5 text-destructive mx-auto mb-1" />
                          12h máx
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4">Resistencia altitud</td>
                        <td className="text-center p-4 bg-primary/10">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto mb-1" />
                          4000m+
                        </td>
                        <td className="text-center p-4">
                          <X className="h-5 w-5 text-destructive mx-auto mb-1" />
                          2000m máx
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4">Precio</td>
                        <td className="text-center p-4 bg-primary/10">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto mb-1" />
                          $67
                        </td>
                        <td className="text-center p-4">
                          <X className="h-5 w-5 text-destructive mx-auto mb-1" />
                          $89+
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">
            ⏰ Oferta de Lanzamiento Termina Pronto
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Días</div>
            </div>
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Horas</div>
            </div>
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Min</div>
            </div>
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seg</div>
            </div>
          </div>

          <div className="mb-8">
            <Badge variant="destructive" className="px-4 py-2 text-lg mb-4">
              Solo quedan 47 unidades
            </Badge>
            <p className="text-muted-foreground">
              Los primeros 100 incluyen correa premium gratis
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">
            Garantía de Riesgo Cero
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">30 Días de Garantía</h3>
                <p className="text-muted-foreground">
                  Si no estás 100% satisfecho, devolvemos tu dinero sin
                  preguntas
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Garantía de Aventura</h3>
                <p className="text-muted-foreground">
                  Si se rompe en tu primera aventura, la reemplazamos gratis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-mountain-gradient text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white font-montserrat">
            ¿Listo para tu Próxima Aventura?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Únete a más de 10,000 aventureros que ya confían en AquaPeak para
            sus expediciones
          </p>

          <div className="space-y-4 mb-8">
            <div className="text-3xl font-bold text-white">
              <span className="line-through text-white/60">$89</span>
              <span className="ml-4">$67</span>
              <span className="text-lg ml-2">(25% OFF)</span>
            </div>
            <p className="text-white/80">
              Envío gratis + Correa premium incluida
            </p>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-4 font-bold"
            >
              Sí, quiero mi AquaPeak ahora
            </Button>
            <div>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Ver más fotos del producto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-gradient mb-4 font-montserrat">
            AquaPeak
          </div>
          <p className="text-muted-foreground mb-6">
            Diseñada por montañistas, para montañistas
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-foreground">
              Contacto
            </a>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full bg-card border-border">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">
                ¡Espera!
              </h3>
              <p className="mb-6 text-muted-foreground">
                Antes de irte, toma un 10% de descuento adicional en tu AquaPeak
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Aplicar descuento extra
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setShowExitIntent(false)}
                >
                  No, gracias
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
