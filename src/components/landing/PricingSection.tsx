import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Plano BES",
        price: "R$ 47,00",
        features: [
            "Acesso completo ao método",
            "Suporte por 30 dias",
            "Garantia de satisfação",
            "Resultados em até 7 dias",
        ],
        popular: false,
    },
    {
        name: "Plano REO",
        price: "R$ 67,00",
        features: [
            "Tudo do plano anterior",
            "Suporte prioritário",
            "Acompanhamento personalizado",
            "Resultados em até 5 dias",
            "Bônus: Guia de manutenção",
        ],
        popular: true,
    },
    {
        name: "Plano VIP",
        price: "R$ 97,00",
        features: [
            "Tudo dos planos anteriores",
            "Consultoria individual de 1h",
            "Suporte 24/7 por WhatsApp",
            "Resultados em até 3 dias",
            "Garantia estendida de 60 dias",
        ],
        popular: false,
    },
];


export function PricingSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-10 mb-6">
                        Veja como é simples...
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-gray-800/30 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                           {plan.popular && (
                             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold font-['Poppins']">MAIS POPULAR</span>
                            </div>
                           )}
                            <div className="text-center mb-8">
                                <h3 className="text-white text-2xl font-semibold font-['Poppins'] mb-4">{plan.name}</h3>
                                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                                <p className="text-sm text-muted-foreground font-light font-['Poppins']">pagamento único</p>
                            </div>
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-muted-foreground font-light font-['Poppins']">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Button className={`w-full font-medium text-sm px-6 py-3 rounded-[28px] font-['Poppins'] h-auto ${plan.popular ? 'bg-[#61CE70] hover:bg-[#4fb85f]' : 'bg-primary hover:bg-primary/90'}`}>
                                ESCOLHER PLANO
                            </Button>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <p className="text-muted-foreground font-light font-['Poppins']">Todos os planos incluem garantia de 30 dias. Se não funcionar, devolvemos seu dinheiro.</p>
                </div>
            </div>
        </section>
    )
}
