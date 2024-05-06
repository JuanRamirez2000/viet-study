import LanguageCard from "@/components/LanguageCard";
import { Card, CardButton, CardDesciption } from "@/components/ui/Card";
import { db } from "@/db";
import { card } from "@/db/schema";

export default async function Home() {
  const cards = await db.select().from(card);
  return (
    <main className="h-screen w-full">
      <section className="w-full">
        {cards.map((card) => (
          <LanguageCard cardInfo={card} key={card.id} />
        ))}
      </section>
    </main>
  );
}
