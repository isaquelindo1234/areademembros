'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { sendIrisMessage } from '@/app/iris-actions';

type Message = {
  role: 'user' | 'model';
  content: string;
};

const welcomeMessage: Message = {
  role: 'model',
  content:
    'Hola, soy Iris, tu guía personal en el Códice Vivo de Venus. Mi misión es ser tu puente hacia la claridad y el magnetismo. ¿En qué podemos enfocarnos hoy?',
};

export function IrisChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

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
        const result = await sendIrisMessage({ history, message: input });

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
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="lg"
          className="rounded-full w-16 h-16 btn-gradient-2 btn-glow shadow-lg shadow-primary/30"
          aria-label="Abrir chat con Iris"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Sparkles className="h-7 w-7" />}
        </Button>
      </div>

      {/* Chat Window */}
      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] flex flex-col rounded-2xl bg-background border border-primary/30 shadow-2xl glowing-shadow transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-headline text-xl text-white">Iris</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
            <X className="h-5 w-5 text-white/70" />
          </Button>
        </div>

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
    </>
  );
}
