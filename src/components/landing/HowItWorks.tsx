import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Headphones, Mail, MessageSquareHeart } from "lucide-react";

const steps = [
    {
        icon: <Mail className="w-8 h-8 text-primary" />,
        title: "Passo #01",
        description: "Após gerar sua Melodia de Amor personalizada, pegue seus fones de ouvido, pois cada ouvido captura uma frequência específica."
    },
    {
        icon: <Headphones className="w-8 h-8 text-primary" />,
        title: "Passo #02",
        description: "Ouça uma vez ao acordar e uma vez antes de dormir para atrair seu ex ou conquistar a pessoa que você gosta ainda mais rápido."
    },
    {
        icon: <MessageSquareHeart className="w-8 h-8 text-primary" />,
        title: "Passo #03",
        description: "Em poucos dias, você receberá uma mensagem, ou eles podem até aparecer na sua porta. A maneira como as pessoas te olham vai mudar."
    }
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Veja como é simples...
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 hover:bg-accent transition-all transform hover:-translate-y-1">
                        <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                            {step.icon}
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <CardDescription className="text-base">{step.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
