import Card from "@/components/Card";
import { db } from "@/db";
import { card } from "@/db/schema";

export default async function Home() {
  const cards = await db.select().from(card);
  return (
    <main className="h-screen w-full">
      <section className="w-full">
        {cards.map((card) => (
          <Card key={card.id} className="size-44" card={card} />
        ))}
      </section>
    </main>
  );
}
