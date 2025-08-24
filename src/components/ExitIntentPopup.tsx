import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExitIntentPopupProps {
  showExitIntent: boolean;
  setShowExitIntent: (show: boolean) => void;
}

export default function ExitIntentPopup({ showExitIntent, setShowExitIntent }: ExitIntentPopupProps) {
  if (!showExitIntent) return null;

  return (
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
  );
}
