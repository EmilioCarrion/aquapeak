export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold text-aquapeak-gradient mb-4 font-montserrat">
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
  );
}
