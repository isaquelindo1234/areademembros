import Image from "next/image";
import { Star, Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-primary flex flex-col items-center justify-center text-white shadow-2xl">
                  <div className="text-7xl font-bold font-['Poppins']">30</div>
                  <div className="text-xl font-bold mb-2 font-['Poppins']">
                    DIAS DE
                  </div>
                  <div className="text-2xl font-bold font-['Poppins']">
                    GARANTIA
                  </div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-8 bg-primary/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-white text-3xl font-semibold font-['Poppins']">
                  30 dias de garantia
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground font-light font-['Poppins'] leading-relaxed">
                <p>
                  Estamos tão confiantes nos resultados da Melodia do Amor que
                  oferecemos uma{" "}
                  <strong className="text-white">
                    garantia incondicional de 30 dias
                  </strong>
                  .
                </p>
                <p>
                  Se por qualquer motivo você não conseguir reconquistar seu ex
                  ou não ficar satisfeito com o método, basta nos enviar um
                  e-mail e devolvemos 100% do seu investimento.
                </p>
                <p>
                  Sem perguntas, sem complicações. É simples assim.
                </p>
                <p className="text-white font-semibold">
                  Você não tem nada a perder, apenas o amor da sua vida para
                  reconquistar.
                </p>
              </div>
               <div className="pt-4">
                  <div className="bg-gray-800/30 p-4 rounded-lg shadow-2xl">
                      <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                              <Shield className="w-6 h-6 text-green-500"/>
                          </div>
                          <div>
                              <p className="font-semibold text-white font-['Poppins']">Garantia verificada</p>
                              <p className="text-sm text-muted-foreground font-light font-['Poppins']">Mais de 95% dos nossos clientes ficam satisfeitos</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
