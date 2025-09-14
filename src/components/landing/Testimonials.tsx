import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        id: "testimonial-1",
        text: "It's scary... he messaged me on the SAME DAY I started listening. He said he couldn't stop thinking about me!",
        author: "Juliana R."
    },
    {
        id: "testimonial-2",
        text: "We were broken up for 6 months. After a week of listening, he called me out of the blue asking to meet. We're back together and happier than ever. Thank you!",
        author: "Fernanda S."
    },
    {
        id: "testimonial-3",
        text: "I was skeptical, but my relationship was falling apart. This melody didn't just bring him back, it changed the entire vibe between us. The fights stopped.",
        author: "Carla M."
    }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h3 className="text-primary font-semibold">Over 6,000 women have used this frequency</h3>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
                    Better than talking... is showing the results
                </h2>
            </div>

            <div className="flex justify-center">
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl"
                    >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => {
                            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                            return (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card className="bg-background/50">
                                        <CardContent className="flex aspect-video flex-col items-center justify-center p-4 text-center">
                                            <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                                            <p className="font-bold text-white mt-4">- {testimonial.author}</p>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="text-white" />
                    <CarouselNext className="text-white" />
                </Carousel>
            </div>
        </div>
    </section>
  );
}
