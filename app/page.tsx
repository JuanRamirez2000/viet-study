import AddCard from "@/components/LanguageCard/AddLanguageCard";
import LanguageCard from "@/components/LanguageCard/LanguageCard";
import Tiptap from "@/components/TipTap";
import { db } from "@/db";
import { card } from "@/db/schema";

export default async function Home() {
  const cards = await db.select().from(card);
  return (
    <section>
      <Tiptap />
    </section>
  );
}
