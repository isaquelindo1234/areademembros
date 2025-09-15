import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl shadow-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative text-center">
                <ShieldCheck className="w-24 h-24 md:w-28 md:h-28 text-secondary mx-auto drop-shadow-[0_0_15px_hsl(var(--secondary))]"/>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mt-4">30 DÍAS</h2>
                <p className="text-lg md:text-xl font-headline text-white">DE GARANTÍA</p>
                <div className="absolute -inset-8 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-white text-xl md:text-2xl font-headline font-bold">
                Tu Reencuentro o Tu Dinero de Vuelta
              </h3>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-base">
                <p>
                  Estoy tan segura del poder de la Frequencia del Reencuentro que te ofrezco una{" "}
                  <strong className="text-white">
                    garantía incondicional de 30 días
                  </strong>
                  .
                </p>
                <p>
                  Si en 30 días él no ha vuelto a contactarte, o si por cualquier motivo no estás satisfecha, solo tienes que enviar un correo y te devolveré el 100% de tu inversión. Sin preguntas, sin complicaciones.
                </p>
                <p className="text-white font-semibold">
                  El riesgo es todo mío. Solo tienes por ganar el amor de tu vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
