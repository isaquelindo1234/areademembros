"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { createMelodyAction } from "@/app/actions";
import { MelodyPlayer } from "./MelodyPlayer";

const formSchema = z.object({
  prompt: z.string().min(10, {
    message: "Please describe your desired outcome in at least 10 characters.",
  }),
});

export function HeroSection() {
  const [isPending, startTransition] = useTransition();
  const [melodyUrl, setMelodyUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setMelodyUrl(null);
    startTransition(async () => {
      const result = await createMelodyAction(values.prompt);
      if (result.error) {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      } else {
        setMelodyUrl(result.audioUrl);
        toast({
          title: "Success!",
          description: result.message,
        });
      }
    });
  }

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-background to-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-primary">
            Listen for 5 minutes
          </h2>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            And make your ex come back to you
          </h1>
          <p className="text-lg text-muted-foreground">
            You will have them in the palm of your hand when you activate this love attraction switch in your brain, opening the way to the relationship you've always dreamed of!
          </p>
        </div>

        <div className="mx-auto max-w-2xl mt-10">
          <Card className="bg-card/50 border-border shadow-lg">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="prompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your current situation and your desired relationship outcome... e.g., 'I want my ex to miss me and come back' or 'I want to attract a loving and committed partner.'"
                            className="min-h-[120px] resize-none text-base bg-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full text-lg py-7 font-bold hover:scale-105 transition-transform duration-300" disabled={isPending}>
                    {isPending ? (
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-6 w-6" />
                    )}
                    Generate Your Love Melody
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {melodyUrl && (
            <div className="mt-8">
              <MelodyPlayer audioUrl={melodyUrl} />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
