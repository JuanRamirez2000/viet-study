import { Card, CardButton, CardDesciption } from "@/components/Card";
import { db } from "@/db";
import { card } from "@/db/schema";
import { ClockIcon, Edit2Icon, StarIcon } from "lucide-react";

export default async function Home() {
  const cards = await db.select().from(card);
  return (
    <main className="h-screen w-full">
      <section className="w-full">
        {cards.map((card) => (
          <Card key={card.id} className="size-44" card={card}>
            <CardButton className="top-1 left-1">
              <StarIcon className="size-8 p-2 bg-transparent" />
            </CardButton>
            <CardButton className="top-1 right-1">
              <Edit2Icon className="size-8 p-2 bg-transparent" />
            </CardButton>
            <CardButton className="bottom-1 left-1">
              <ClockIcon className="size-8 p-2 bg-transparent" />
            </CardButton>
            <CardDesciption>{card.frontText}</CardDesciption>
          </Card>
        ))}
      </section>
    </main>
  );
}
