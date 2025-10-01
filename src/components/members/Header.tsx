
import { Headphones } from 'lucide-react';

export function MemberHeader() {
    return (
        <header className="text-center my-8 md:my-12">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mb-2">
                Bienvenida al Pulso del Amor 💗
            </h1>
            <p className="text-base md:text-lg text-white/80 font-body max-w-3xl mx-auto px-4">
                Aquí encontrarás las frecuencias energéticas para transformar tu vida amorosa.
            </p>
            <p className="text-base text-white/80 font-body max-w-3xl mx-auto mt-4 px-4">
                🔁 Escucha una frecuencia cada día y observa los cambios en tu campo energético.
            </p>
            <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 mx-4 text-center">
                <Headphones className="h-4 w-4 flex-shrink-0" />
                <span>Para mejores resultados, escucha con auriculares en un lugar tranquilo.</span>
            </div>
        </header>
    );
}
