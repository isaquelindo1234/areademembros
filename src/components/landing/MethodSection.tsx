import { CheckCircle } from 'lucide-react';

export function MethodSection() {
    const methods = [
        "Técnicas de psicologia aplicada ao amor",
        "Estratégias para despertar interesse",
        "Como criar a situação perfeita para voltar",
        "O que nunca fazer se quiser reconquistar",
        "Sinais que mostram que está funcionando",
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-10 mb-6">
                        Essa Melodia do Amor é o passo de<br/>
                        quebra-cabeças que faltava no seu relacionamento.
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl">
                        <div className="space-y-6">
                            {methods.map((method, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>
                                    <p className="text-lg text-muted-foreground font-light font-['Poppins']">{method}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-muted-foreground font-light font-['Poppins'] max-w-2xl mx-auto leading-relaxed">
                        Nosso método foi desenvolvido com base em anos de estudo sobre relacionamentos e psicologia humana. Já ajudou mais de 10.000 pessoas a reconquistarem seus amores perdidos.
                    </p>
                </div>
            </div>
        </section>
    );
}
