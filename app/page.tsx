import Note from "@/components/Note/Note";
import Tiptap from "@/components/TipTap";
import { db } from "@/db";
import { note } from "@/db/schema";

export default async function Home() {
  const notes = await db.select().from(note);
  return (
    <section>
      <ul className="space-y-2">
        {notes.map((note) => {
          return <Note noteContent={note} key={note.id} />;
        })}
      </ul>
    </section>
  );
}
