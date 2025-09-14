import Image from "next/image";
import { Star } from "lucide-react";

export function GuaranteeSection() {

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <h2 className="text-9xl font-bold text-primary">30</h2>
                    <div className="absolute -bottom-4 left-0 right-0 text-center">
                        <p className="text-2xl font-semibold text-white">DIAS DE GARANTIA</p>
                        <div className="flex justify-center mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    30 dias de garantia
                </h2>
                <div className="text-muted-foreground space-y-4 text-base">
                <p>
                    Eu te mostrei como isso pode mudar seu relacionamento e compartilhei depoimentos de mulheres cujas vidas foram transformadas.
                </p>
                <p>
                    Eu não quero que você apenas acredite em mim. Quero que você coloque seus fones de ouvido e ouça esta <strong>MELODIA DO AMOR</strong>. Se nada mudar em seu relacionamento, ou se seu ex nem mesmo lhe enviar uma única mensagem nos próximos 30 dias, eu reembolsarei seu dinheiro. Seu risco é zero.
                </p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
