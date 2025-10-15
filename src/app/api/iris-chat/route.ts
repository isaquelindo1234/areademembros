
import { irisChat, type IrisChatInput } from '@/ai/flows/iris-chat-flow';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    const { history, message } = (await req.json()) as IrisChatInput;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const result = await irisChat({ history, message });
    
    if (!result.response) {
        throw new Error('La IA no retornó una respuesta.');
    }

    return NextResponse.json({ response: result.response });

  } catch (error: any) {
    console.error('Error in /api/iris-chat:', error);
    return NextResponse.json(
      { error: error.message || 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
