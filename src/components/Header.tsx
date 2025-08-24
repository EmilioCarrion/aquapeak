import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-aquapeak-gradient font-montserrat">
          AquaPeak
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Consigue la Tuya - 25% OFF
        </Button>
      </div>
    </header>
  );
}
