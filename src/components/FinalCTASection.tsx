import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
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
  );
}
