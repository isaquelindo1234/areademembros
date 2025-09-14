import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const faqs = [
    {
        question: "Como isso é melhor que tentar sozinho?",
        answer: "Nosso método é baseado em anos de estudo e já ajudou milhares de pessoas. Tentar sozinho pode levar a erros que pioram a situação, enquanto nosso guia oferece um caminho comprovado."
    },
    {
        question: "Funciona mesmo que tenha passado muito tempo?",
        answer: "Sim! As técnicas funcionam para reacender a chama, não importa há quanto tempo vocês terminaram. O tempo pode até jogar a seu favor."
    },
    {
        question: "E se meu ex já estiver com outra pessoa?",
        answer: "Mesmo nessa situação, nosso método tem estratégias específicas para fazer seu ex repensar a decisão e ver que você é a pessoa certa para ele."
    },
    {
        question: "Quanto tempo leva para ver resultados?",
        answer: "Muitos de nossos clientes veem resultados nos primeiros 7 dias. No entanto, os resultados variam e dependem do seu comprometimento em seguir o método."
    }
]

export function FaqSection() {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-10 mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground font-light font-['Poppins'] text-lg max-w-2xl mx-auto">
              Respondemos as principais dúvidas sobre nosso método e como ele pode ajudar você a reconquistar seu amor.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-gray-800/30 rounded-lg px-6 border-none shadow-2xl">
                        <AccordionTrigger className="text-left font-semibold font-['Poppins'] text-white hover:no-underline py-6">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-light font-['Poppins'] leading-relaxed pb-6">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
           <div className="text-center mt-12">
            <p className="text-muted-foreground font-light font-['Poppins']">
                Ainda tem dúvidas? Entre em contato conosco pelo WhatsApp e nossa equipe irá te ajudar com qualquer questão.
            </p>
        </div>
        </div>
      </section>
    );
  }
  