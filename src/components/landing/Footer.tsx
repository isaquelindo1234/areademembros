export function Footer() {
    return (
      <footer className="py-8 border-t border-white/10">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>Frequencia del Reencuentro © {new Date().getFullYear()} | Todos los derechos reservados</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
          </div>
        </div>
      </footer>
    );
  }
  