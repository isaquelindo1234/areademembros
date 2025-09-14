import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const faqs = [
    {
        question: "How will I access the product?",
        answer: "As soon as the melody is generated, it will appear on this page for you to listen to immediately. You can also download it to listen anytime."
    },
    {
        question: "Is it really safe?",
        answer: "Yes, the process is completely safe. The melody uses specific audio frequencies designed to influence your state of mind positively."
    },
    {
        question: "Is there a guarantee?",
        answer: "Absolutely. We offer a 30-day satisfaction guarantee. If you're not happy with the results, you can request a refund."
    },
    {
        question: "Do I need to pay a monthly fee?",
        answer: "No, this is a one-time generation. Once you create your melody, it's yours to keep forever."
    }
]

export function FaqSection() {
    return (
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
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
  