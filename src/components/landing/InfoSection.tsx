import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function InfoSection() {
    const womanImage = PlaceHolderImages.find(p => p.id === 'contemplative-woman');

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              If your relationship is on the line, or they left you...
            </h3>
            <h4 className="text-xl font-semibold text-primary">
              I know exactly how you feel... I've been there!
            </h4>
            <div className="text-muted-foreground space-y-4 text-base">
              <p>
                This melody is so powerful, it gives you an "unfair advantage." And I'll tell you now, if you don't like attracting attention, being seen and noticed, or being courted by your person, it's better not to listen.
              </p>
              <p>
                Stop wasting time on things that don't work: no contact, pickup lines, self-help books, or empty theories. They won't help you. I've tried everything you can imagine until I discovered this.
              </p>
              <p>
                The Melody of Love instantly boosts your misaligned energy field, the real reason you're facing challenges in your relationship, like fights, separations, or even difficulty finding someone.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {womanImage && (
                <Image
                src={womanImage.imageUrl}
                alt={womanImage.description}
                width={500}
                height={500}
                className="rounded-xl shadow-lg shadow-primary/10 object-cover"
                data-ai-hint={womanImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
