import { Headphones, Eye, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
    {
        icon: <Headphones className="w-10 h-10 text-primary mb-4" />,
        title: "Paso 1",
        description: "Escucha la frecuencia con auriculares durante 5 minutos en un lugar tranquilo."
    },
    {
        icon: <Eye className="w-10 h-10 text-primary mb-4" />,
        title: "Paso 2",
        description: "Mientras escuchas, visualiza el reencuentro con la persona amada, sintiendo la emoción como si ya fuera real."
    },
    {
        icon: <Sparkles className="w-10 h-10 text-primary mb-4" />,
        title: "Paso 3",
        description: "Suelta tus expectativas y deja que la nueva vibración energética atraiga la situación hacia ti."
    }
];

export function MethodSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-white text-2xl md:text-3xl font-headline font-bold mb-4">
                        Mira lo simple que es:
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <Card key={index} className="bg-white/5 border border-white/10 text-center p-6 rounded-2xl transform transition-transform duration-300 hover:-translate-y-2">
                            <CardHeader className="p-0 items-center">
                                {step.icon}
                                <CardTitle className="font-headline text-xl text-white">{step.title}</CardTitle>
                                <CardDescription className="font-body text-white/70 leading-relaxed mt-2 text-base">{step.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
