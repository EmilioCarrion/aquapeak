import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";

export default function ComparisonSection() {
  return (
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
  );
}
