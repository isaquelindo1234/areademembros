
import { Lock, Star } from 'lucide-react';

export function LockedSection() {
  return (
    <>
      <section className="my-10 md:my-16 text-center">
        <div className="relative max-w-3xl mx-auto bg-white/5 border border-dashed border-white/20 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
          <div className="absolute -inset-2 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
          <Lock className="w-10 h-10 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-headline font-bold text-white/50 mb-2">
            Más Frecuencias Próximamente...
          </h3>
          <p className="text-white/40 font-body max-w-xl mx-auto text-sm md:text-base">
            Estas frecuencias se desbloquearán solo para quienes escuchen al menos 3 melodías…
          </p>
        </div>
      </section>

      <section className="my-10 md:my-16 text-center">
        <div className="max-w-3xl mx-auto text-center">
            <Star className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-headline font-bold text-white mb-2">
                🌟 ¿Quieres más frecuencias avanzadas?
            </h3>
            <p className="text-white/60 font-body text-sm md:text-base">
                Pronto abriremos acceso exclusivo a melodías aún más potentes para acelerar tu manifestación.
            </p>
        </div>
      </section>
    </>
  );
}
