import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function GuaranteeSection() {
    const guaranteeImage = PlaceHolderImages.find(p => p.id === 'guarantee-seal');

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center">
                {guaranteeImage && (
                    <Image
                    src={guaranteeImage.imageUrl}
                    alt={guaranteeImage.description}
                    width={400}
                    height={400}
                    className="rounded-full object-cover"
                    data-ai-hint={guaranteeImage.imageHint}
                    />
                )}
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    30-Day Guarantee
                </h2>
                <div className="text-muted-foreground space-y-4 text-base">
                <p>
                    I've shown you how this can change your relationship and shared testimonials from women whose lives were transformed.
                </p>
                <p>
                    I don't want you to just believe me. I want you to put on your headphones and listen to this <strong>MELODY OF LOVE</strong>. If nothing changes in your relationship, or if your ex doesn't even send you a single message within the next 30 days, I'll refund your money. Your risk is zero.
                </p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
