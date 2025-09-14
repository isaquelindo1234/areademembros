import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Headphones, Mail, MessageSquareHeart } from "lucide-react";

const steps = [
    {
        icon: <Mail className="w-8 h-8 text-primary" />,
        title: "Step #01",
        description: "After generating your personalized Love Melody, grab your headphones, as each ear captures a specific frequency."
    },
    {
        icon: <Headphones className="w-8 h-8 text-primary" />,
        title: "Step #02",
        description: "Listen once upon waking and once before sleeping to attract your ex or win over the person you like even faster."
    },
    {
        icon: <MessageSquareHeart className="w-8 h-8 text-primary" />,
        title: "Step #03",
        description: "In just a few days, you'll receive a message, or they might even show up at your door. The way people look at you will change."
    }
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    See How Simple It Is...
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 hover:bg-accent transition-all transform hover:-translate-y-1">
                        <CardHeader className="flex flex-col items-center text-center gap-4">
                            {step.icon}
                            <CardTitle>{step.title}</CardTitle>
                            <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
