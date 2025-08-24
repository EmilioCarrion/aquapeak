import { X } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
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
  );
}
