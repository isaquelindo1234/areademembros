
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BrainCircuit } from "lucide-react";

export function BenefitSection() {
    const benefitImage = PlaceHolderImages.find(p => p.id === 'benefit-woman');

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
                {benefitImage && (
                    <Image
                        src={benefitImage.imageUrl}
                        alt={benefitImage.description}
                        width={400}
                        height={500}
                        className="rounded-2xl shadow-2xl shadow-black/50"
                        data-ai-hint={benefitImage.imageHint}
                    />
                )}
                <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="space-y-6">
            <BrainCircuit className="w-12 h-12 text-primary"/>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
                Reprograma tu energía para reconectar los lazos afectivos
            </h2>
            <p className="font-body text-lg text-white/80 leading-relaxed">
                La "Frequencia del Reencuentro" no es magia, es ciencia. Utiliza ondas sonoras binaurales y frecuencias específicas que actúan directamente sobre tu campo energético. Al escucharla, ayudas a tu cerebro a entrar en un estado de coherencia, disolviendo bloqueos emocionales y realineando tu vibración con la del amor y la conexión. Esto permite que, a nivel subconsciente, la persona que amas vuelva a sentir esa conexión energética que los unió.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
