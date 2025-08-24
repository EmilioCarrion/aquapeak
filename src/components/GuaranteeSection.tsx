import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mountain } from "lucide-react";

export default function GuaranteeSection() {
  return (
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
  );
}
