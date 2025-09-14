export function Footer() {
    return (
      <footer className="py-8 border-t border-border">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>AmorTune © {new Date().getFullYear()} | All rights reserved</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    );
  }
  