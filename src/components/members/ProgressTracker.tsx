
'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { type Frequency } from '@/app/audio-data';

type ProgressTrackerProps = {
  frequencies: Frequency[];
};

export function ProgressTracker({ frequencies }: ProgressTrackerProps) {
  const [playedCount, setPlayedCount] = useState(0);

  // This is a placeholder for tracking. In a real app, you'd save this to localStorage.
  useEffect(() => {
    // For demonstration, we'll just set the first one as "played"
    setPlayedCount(1);
  }, []);

  return (
    <section className="my-10 md:my-16">
      <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-headline font-bold text-white">Tu Progreso</h3>
            <span className="text-sm font-body text-white/70 font-semibold">{playedCount} de {frequencies.length} escuchadas</span>
        </div>
        <div className="space-y-3">
          {frequencies.map((freq, index) => (
            <div key={freq.id} className="flex items-center gap-3 text-white/80">
              {index < playedCount ? (
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-white/30 flex-shrink-0" />
              )}
              <span className={`font-body ${index < playedCount ? 'opacity-70 line-through' : 'font-medium'}`}>
                {freq.title.split(': ')[1] || freq.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
