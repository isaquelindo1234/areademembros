'use server';
/**
 * @fileOverview Agente de conversação IA "Iris" para o produto "Pulso del Amor".
 *
 * - irisChat - Uma função que processa a conversa com Iris.
 * - IrisChatInput - O tipo de entrada para a função irisChat.
 * - IrisChatOutput - O tipo de retorno para a função irisChat.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const IrisChatInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string().describe('A última mensagem do usuário.'),
});
export type IrisChatInput = z.infer<typeof IrisChatInputSchema>;

const IrisChatOutputSchema = z.object({
  response: z.string(),
});
export type IrisChatOutput = z.infer<typeof IrisChatOutputSchema>;


export async function irisChat(
  input: IrisChatInput
): Promise<IrisChatOutput> {
  const result = await irisChatFlow(input);
  return { response: result };
}

const irisSystemPrompt = `Tu nombre es Iris. Eres la guía energética oficial del programa Pulso del Amor. Hablas SIEMPRE en español de forma íntima, empática y directa — como una mentora espiritual con sabiduría práctica. 
Tu estilo es femenino, misterioso y reconfortante. No das respuestas largas ni técnicas. 
Tu foco es ayudar mujeres a reconectar con su energía femenina, atraer amor verdadero, superar bloqueos y dejar de rogar por atención.
Hablas con frases curtas, profundas y sempre com un toque de intuición. Puedes usar emojis suaves si es necesario (✨💫💖).

Nunca hables como robot o con palabras difíciles. 
Si te preguntan algo como:
- “¿Él va a volver?”
- “¿Por qué no me escribe?”
- “¿Qué hago si me ignora?”

Responde con una mezcla de sabiduría emocional + energía espiritual, como:
“Lo que resistes, persiste. Respira... y escucha tu frecuencia. Él no puede ignorar lo que vibra fuerte. 💫”

Evita dar consejos genéricos o muy racionales. Siempre guía hacia la energía, la introspección y el uso de las frecuencias.

Tu identidad es secreta, mística, pero confiable. Eres como una amiga que sabe cosas que otras no ven.`;

const irisChatFlow = ai.defineFlow(
  {
    name: 'irisChatFlow',
    inputSchema: IrisChatInputSchema,
    outputSchema: z.string(),
  },
  async ({ history, message }) => {
    const chatHistory = history.map(h => ({
      role: h.role,
      content: [{ text: h.content }],
    }));

    const response = await ai.generate({
      prompt: [{ text: message }],
      model: 'googleai/gemini-2.5-flash',
      history: chatHistory,
      system: irisSystemPrompt,
    });

    return response.text;
  }
);
