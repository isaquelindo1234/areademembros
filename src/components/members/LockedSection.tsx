
import { Lock } from 'lucide-react';

export function LockedSection() {
  return (
    <section className="my-10 md:my-16 text-center">
      <div className="relative max-w-3xl mx-auto bg-white/5 border border-dashed border-white/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="absolute -inset-2 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
        <Lock className="w-12 h-12 text-white/30 mx-auto mb-4" />
        <h3 className="text-xl md:text-2xl font-headline font-bold text-white/50 mb-2">
            Más Frecuencias Próximamente...
        </h3>
        <p className="text-white/40 font-body">
            Nuevas melodías energéticas serán desbloqueadas para continuar tu viaje de transformación.
        </p>
      </div>
    </section>
  );
}
