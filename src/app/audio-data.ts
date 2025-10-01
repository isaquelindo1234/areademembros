
export type Frequency = {
    id: string;
    title: string;
    description: string;
    audioSrc: string;
};
  
export const mainFrequency: Frequency = {
    id: 'main-pulse',
    title: '💓 Frecuencia Principal: Pulso del Amor',
    description: 'Activa tu magnetismo para que él piense en ti sin parar…',
    audioSrc: 'https://firebasestorage.googleapis.com/v0/b/your-project-id/o/main_frequency.mp3?alt=media',
};
  
export const bonusFrequencies: Frequency[] = [
    {
        id: 'bonus-1',
        title: '💕 Atracción de la pareja ideal',
        description: 'Abre tus caminos para atraer a la persona que deseas.',
        audioSrc: 'https://youtu.be/zL8fgMMwoV4',
    },
    {
        id: 'bonus-2',
        title: '💫 Reconciliación amorosa',
        description: 'Armoniza las energías para facilitar el perdón y la unión.',
        audioSrc: 'https://firebasestorage.googleapis.com/v0/b/your-project-id/o/bonus_2.mp3?alt=media',
    },
    {
        id: 'bonus-3',
        title: '🔒 Restaurar la confianza',
        description: 'Sana las heridas del pasado y reconstruye la confianza mutua.',
        audioSrc: 'https://firebasestorage.googleapis.com/v0/b/your-project-id/o/bonus_3.mp3?alt=media',
    },
    {
        id: 'bonus-4',
        title: '✨ Encantamiento: solo tendrá ojos para ti',
        description: 'Potencia tu magnetismo personal y centra su atención en ti.',
        audioSrc: 'https://firebasestorage.googleapis.com/v0/b/your-project-id/o/bonus_4.mp3?alt=media',
    },
    {
        id: 'bonus-5',
        title: '🌙 Neutralizar emociones negativas',
        description: 'Limpia los bloqueos y las energías negativas que afectan la relación.',
        audioSrc: 'https://firebasestorage.googleapis.com/v0/b/your-project-id/o/bonus_5.mp3?alt=media',
    },
];
