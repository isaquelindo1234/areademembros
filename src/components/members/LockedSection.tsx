
import { Gift, Sparkles } from 'lucide-react';

export function LockedSection() {
  return (
    <section className="my-10 md:my-16">
      <a 
        href="#" // TODO: Substitua pelo seu link de checkout
        className="block group"
      >
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/50 rounded-2xl p-6 md:p-10 text-center shadow-2xl shadow-secondary/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-secondary/20">
          <div className="absolute -inset-2 bg-secondary/10 rounded-full blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative inline-block mb-4">
            <Gift className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto" />
            <Sparkles className="w-5 h-5 text-white absolute -top-1 -right-2 animate-ping" />
            <Sparkles className="w-4 h-4 text-white absolute top-0 right-0" />
          </div>

          <h3 className="text-xl md:text-2xl font-headline font-bold text-white mb-2">
            ✨ Oferta Exclusiva: Desbloqueie o Próximo Nível
          </h3>
          <p className="text-white/70 font-body max-w-xl mx-auto text-sm md:text-base mb-4">
            Descubra a <span className="font-bold text-secondary">Frequência Secreta</span> e o <span className="font-bold text-secondary">Guia Infalível</span> para conquistar a atenção de qualquer pessoa que você desejar.
          </p>
          <span className="inline-block bg-secondary/20 text-secondary font-bold text-sm px-4 py-2 rounded-full border border-secondary/50 group-hover:bg-secondary/30 transition-colors">
            Eu quero desbloquear agora!
          </span>
        </div>
      </a>
    </section>
  );
}
