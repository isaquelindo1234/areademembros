
import { MemberHeader } from '@/components/members/Header';
import { AudioPlayer } from '@/components/members/AudioPlayer';
import { LockedSection } from '@/components/members/LockedSection';
import { MemberFooter } from '@/components/members/Footer';
import { mainFrequency, bonusFrequencies } from '@/app/audio-data';
import { ParticleBackground } from '@/components/landing/ParticleBackground';
import { ProgressTracker } from '@/components/members/ProgressTracker';
import { IrisChat } from '@/components/members/IrisChat';

export default function MembersPage() {
  const allFrequencies = [mainFrequency, ...bonusFrequencies];

  return (
    <div className="relative flex min-h-screen flex-col bg-background overflow-x-hidden">
      <ParticleBackground />
      <main className="flex-1 z-10 container mx-auto px-4 py-8 md:py-12">
        <MemberHeader />

        <ProgressTracker frequencies={allFrequencies} />

        {/* Main Frequency */}
        <section className="my-10 md:my-16">
            <AudioPlayer
              title={mainFrequency.title}
              description={mainFrequency.description}
              audioSrc={mainFrequency.audioSrc}
              isMain={true}
            />
        </section>

        {/* Iris Chat Section - Temporarily disabled for static export */}
        {/* <section id="iris-chat" className="my-10 md:my-16">
            <IrisChat />
        </section> */}


        {/* Bonus Frequencies */}
        <section className="my-10 md:my-16">
            <h2 className="text-2xl font-headline font-bold text-white text-center mb-8">Tus Frecuencias Adicionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {bonusFrequencies.map((freq) => (
                    <AudioPlayer
                        key={freq.id}
                        title={freq.title}
                        description={freq.description}
                        audioSrc={freq.audioSrc}
                    />
                ))}
            </div>
        </section>

        <LockedSection />
      </main>
      <MemberFooter />
    </div>
  );
}
