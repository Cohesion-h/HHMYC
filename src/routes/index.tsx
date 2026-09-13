import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/catalogue/Deck";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Deck />;
}
