import { Badge } from "@/components/ui/badge";

interface UrgencySectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function UrgencySection({ timeLeft }: UrgencySectionProps) {
  return (
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
  );
}
