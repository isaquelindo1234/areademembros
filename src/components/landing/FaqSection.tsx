import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const faqs = [
    {
        question: "¿Cómo accedo al producto?",
        answer: "Una vez que completes la compra, recibirás acceso inmediato a la frecuencia en esta misma página. Podrás escucharla y descargarla para usarla cuando quieras."
    },
    {
        question: "¿Es realmente seguro?",
        answer: "Sí, el proceso es 100% seguro. La frecuencia utiliza ondas sonoras diseñadas para influir positivamente en tu estado de ánimo y energía, sin ningún riesgo."
    },
    {
        question: "¿Cuánto dura la garantía?",
        answer: "Ofrecemos una garantía incondicional de 30 días. Si no estás satisfecha con los resultados, te devolvemos el 100% de tu dinero, sin preguntas."
    },
    {
        question: "¿Debo pagar algo mensual?",
        answer: "No, es un pago único. Una vez que adquieres la 'Frequencia del Reencuentro', es tuya para siempre, incluyendo futuras actualizaciones."
    }
]

export function FaqSection() {
    return (
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-2xl md:text-3xl font-headline font-bold mb-4">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-white/5 rounded-2xl border border-white/10 px-6">
                        <AccordionTrigger className="text-left font-semibold font-body text-base md:text-lg text-white hover:no-underline py-5">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-light font-body leading-relaxed pb-5 text-sm">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
  