import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/catalogue/Deck";
import { LocaleProvider } from "@/lib/locale";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <LocaleProvider>
      <Deck />
    </LocaleProvider>
  );
}
