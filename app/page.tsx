import AddCard from "@/components/Card/AddCard";
import LanguageCard from "@/components/Card/LanguageCard";
import { db } from "@/db";
import { card } from "@/db/schema";

export default async function Home() {
  const cards = await db.select().from(card);
  return (
    <main>
      <AddCard />
      {cards.map((card) => (
        <LanguageCard cardInfo={card} key={card.id} />
      ))}
    </main>
  );
}
