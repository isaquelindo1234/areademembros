import Image from "next/image";
import { Sparkles } from "lucide-react";

export function BenefitSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="https://i.postimg.cc/rFZWvC73/Chat-GPT-Image-15-de-set-de-2025-11-47-41-removebg-preview.png"
                alt="Mujer con energía a su alrededor"
                width={500}
                height={500}
                className="rounded-xl h-auto object-cover"
                data-ai-hint="woman energy"
              />
              <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <Sparkles className="w-12 h-12 text-primary mx-auto lg:mx-0" />
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">
              Reprograma tu energía para reconectar los lazos afectivos
            </h2>
            <div className="font-body text-base text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 space-y-4">
              <p>
                Esta frecuencia es tan poderosa que te da una{' '}
                <strong className="text-primary font-medium">
                  ventaja energética injusta
                </strong>{' '}
                sobre cualquier otra mujer. Y te lo digo desde ya: si no estás
                lista para ser deseada, buscada y recordada intensamente por
                ese hombre… <strong className="text-white">no la escuches.</strong>
              </p>
              <p>
                Llevo años viendo mujeres repetir los mismos errores: contacto
                cero, técnicas de manipulación emocional, eBooks de “cómo
                recuperar a tu ex”...{' '}
                <strong className="text-primary">
                  Nada de eso despierta la conexión real.
                </strong>
              </p>
              <p>
                Yo lo intenté todo. Lo que tú ya hiciste... yo también. Pero
                cuando activé esta frecuencia,{' '}
                <strong className="text-white">sentí algo diferente.</strong> No era lógica. Era
                energía. Y ahí fue cuando todo empezó a cambiar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
