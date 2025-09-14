import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2 } from "lucide-react";

type MelodyPlayerProps = {
  audioUrl: string;
};

export function MelodyPlayer({ audioUrl }: MelodyPlayerProps) {
  return (
    <Card className="bg-card/70 border-primary/20 animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music2 className="h-6 w-6 text-primary" />
          Your Personalized Melody
        </CardTitle>
      </CardHeader>
      <CardContent>
        <audio controls autoPlay src={audioUrl} className="w-full">
          Your browser does not support the audio element.
        </audio>
        <p className="text-sm text-muted-foreground mt-3">
          Listen with headphones for the best experience. Find a quiet place and let the frequencies work their magic.
        </p>
      </CardContent>
    </Card>
  );
}
