import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const faqs = [
    {
        question: "Como vou acessar o produto?",
        answer: "Assim que a melodia for gerada, ela aparecerá nesta página para você ouvir imediatamente. Você também pode baixá-la para ouvir a qualquer momento."
    },
    {
        question: "É realmente seguro?",
        answer: "Sim, o processo é totalmente seguro. A melodia usa frequências de áudio específicas projetadas para influenciar seu estado de espírito positivamente."
    },
    {
        question: "Existe garantia?",
        answer: "Absolutamente. Oferecemos uma garantia de satisfação de 30 dias. Se você não estiver satisfeito com os resultados, pode solicitar o reembolso."
    },
    {
        question: "Preciso pagar uma taxa mensal?",
        answer: "Não, esta é uma geração única. Depois de criar sua melodia, ela é sua para sempre."
    }
]

export function FaqSection() {
    return (
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dúvidas Frequentes
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
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
  