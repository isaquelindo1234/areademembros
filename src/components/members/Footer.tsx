
'use client';
import { Share2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MemberFooter() {

    const handleShare = () => {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: 'Frecuencia del Reencuentro',
                text: 'Descubre las frecuencias que pueden transformar tu vida amorosa.',
                url: url,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            navigator.clipboard.writeText(url);
            alert('¡Enlace copiado al portapapeles!');
        }
    };

    return (
      <footer className="py-8 border-t border-white/10 mt-16">
        <div className="container px-4 md:px-6 text-center text-sm md:text-base text-white/70 font-body">
          <div className="flex flex-col items-center gap-6">
            <Button 
                onClick={handleShare}
                variant="outline"
                className="bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary rounded-full text-sm md:text-base"
            >
                <Share2 className="mr-2 h-4 w-4" />
                ¿Conoces a alguien que necesita esto?
            </Button>
            <p>Disfruta de un acceso ilimitado. Escucha cuando quieras, desde cualquier lugar.</p>
            <div className="text-xs md:text-sm">
                <a href="mailto:soporte@tudominio.com" className="flex items-center justify-center gap-2 text-white/50 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>Contacto y Soporte</span>
                </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
