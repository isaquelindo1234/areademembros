'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type Message = {
  role: 'user' | 'model';
  content: string;
};

const welcomeMessage: Message = {
  role: 'model',
  content:
    'Hola, soy Iris, tu guía personal. ¿En qué podemos enfocarnos hoy para realinear tu energía?',
};

export function IrisChat() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const history = messages;
        const response = await fetch('/api/iris-chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ history, message: input }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (result.response) {
            const modelMessage: Message = { role: 'model', content: result.response };
            setMessages(prev => [...prev, modelMessage]);
        } else {
            const errorMessage: Message = { role: 'model', content: 'Lo siento, no pude procesar tu mensaje. Por favor, inténtalo de nuevo.' };
            setMessages(prev => [...prev, errorMessage]);
        }
    } catch (error) {
        const errorMessage: Message = { role: 'model', content: 'Ocurrió un error. Por favor, inténtalo de nuevo más tarde.' };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        setTimeout(() => {
            const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }, 100);
    }
  }, [messages]);


  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white/10 to-transparent border border-primary/30 shadow-2xl glowing-shadow">
      <CardHeader className="text-center">
        <div className='flex justify-center items-center gap-3'>
          <Sparkles className="w-8 h-8 text-primary" />
          <CardTitle className="font-headline text-2xl md:text-3xl text-white">Habla con Iris</CardTitle>
        </div>
        <CardDescription className="text-white/70">
          Tu guía energética personal para cualquier duda que tengas.
        </CardDescription>
      </CardHeader>
      <CardContent>
         <div
          className={cn(
            'w-full h-[60vh] max-h-[500px] flex flex-col rounded-lg bg-background/50 border border-primary/20'
          )}
        >
          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {msg.role === 'model' && (
                    <div className="p-2 rounded-full bg-primary/20 flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-4 py-2 text-white/90 font-body text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-primary/30 rounded-br-none'
                        : 'bg-white/10 rounded-bl-none'
                    )}
                  >
                    {msg.content}
                  </div>
                   {msg.role === 'user' && (
                    <div className="p-2 rounded-full bg-white/20 flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                   <div className="p-2 rounded-full bg-primary/20 flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  <div className="bg-white/10 rounded-2xl px-4 py-3 rounded-bl-none">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Form */}
          <div className="p-4 border-t border-primary/20">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white/5 border-white/20 focus-visible:ring-primary h-12"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="h-12 w-12 btn-gradient-2 btn-glow"
                disabled={isLoading}
                aria-label="Enviar mensaje"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
