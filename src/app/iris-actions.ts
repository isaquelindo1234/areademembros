'use server';

import { irisChat, type IrisChatInput } from '@/ai/flows/iris-chat-flow';

type ActionResult = {
  response: string | null;
  error?: boolean;
  errorMessage?: string;
};

// export async function sendIrisMessage(
//   input: IrisChatInput
// ): Promise<ActionResult> {
//   try {
//     const result = await irisChat(input);
//     if (!result.response) {
//       throw new Error('La IA no retornó una respuesta.');
//     }
//     return {
//       response: result.response,
//     };
//   } catch (error: any) {
//     console.error('Error in sendIrisMessage:', error);
//     return {
//       response: null,
//       error: true,
//       errorMessage:
//         'Ocurrió un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
//     };
//   }
// }
