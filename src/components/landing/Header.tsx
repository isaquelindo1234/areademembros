import { Music4 } from "lucide-react";

export function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2">
          <Music4 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight text-white">
            AmorTune
          </h1>
        </div>
      </div>
    </header>
  );
}
