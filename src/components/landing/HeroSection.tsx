"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { createMelodyAction } from "@/app/actions";
import { MelodyPlayer } from "./MelodyPlayer";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const formSchema = z.object({
  prompt: z.string().min(10, {
    message: "Por favor, descreva o resultado desejado com pelo menos 10 caracteres.",
  }),
});

export function HeroSection() {
  const [isPending, startTransition] = useTransition();
  const [melodyUrl, setMelodyUrl] = useState<string | null>(null);
  const { toast } = useToast();
  const soundWaveImage = PlaceHolderImages.find(p => p.id === 'sound-wave-hero');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setMelodyUrl(null);
    startTransition(async () => {
      const result = await createMelodyAction(values.prompt);
      if (result.error) {
        toast({
          title: "Erro",
          description: result.message,
          variant: "destructive",
        });
      } else {
        setMelodyUrl(result.audioUrl);
        toast({
          title: "Sucesso!",
          description: "Sua melodia foi gerada. Ouça abaixo.",
        });
      }
    });
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if(pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-background to-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-primary">
            Ouça uma melodia do amor por 5 minutos
          </h2>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            E faça o seu ex voltar correndo para você
          </h1>
          <p className="text-lg text-muted-foreground">
            Você o terá na palma da sua mão quando ativar este interruptor de atração de amor em seu cérebro, abrindo caminho para o relacionamento que você sempre sonhou!
          </p>
          
          <div className="flex justify-center pt-4">
            <Button size="lg" className="text-lg py-7 px-10 font-bold bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-300" onClick={scrollToPricing}>
                QUERO EXPERIMENTAR
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2 pt-2">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-sm text-muted-foreground">Avaliado por mais de 6,000 mulheres</p>
          </div>

        </div>

        <div className="mx-auto max-w-5xl mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
                <p>Este som poderoso, que te dá uma "vantagem injusta", ativará o interruptor de atração do amor em seu cérebro em apenas 5 minutos para que seu ex se arrependa, volte correndo para você, ou para que o homem que você gosta finalmente te peça em namoro.</p>
                <p>Imagine o rosto dele ao te ver, o desejo em seus olhos, a maneira como ele te abraçará e nunca mais te soltará... Este é o poder da Melodia do Amor.</p>
                <p>Não perca mais tempo. Clique no botão, gere sua melodia e prepare-se para a transformação.</p>
            </div>
            <div className="flex justify-center">
                {soundWaveImage && (
                    <Image
                    src={soundWaveImage.imageUrl}
                    alt={soundWaveImage.description}
                    width={500}
                    height={300}
                    className="rounded-xl"
                    data-ai-hint={soundWaveImage.imageHint}
                    />
                )}
            </div>
        </div>
        
        {melodyUrl && (
            <div className="mt-8 max-w-2xl mx-auto">
              <MelodyPlayer audioUrl={melodyUrl} />
            </div>
        )}

      </div>
    </section>
  );
}