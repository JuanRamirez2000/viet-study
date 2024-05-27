"use client";

import { note } from "@/db/schema";
import { Card } from "../ui/Card";

type NoteContent = typeof note.$inferSelect;

export default function Note({ noteContent }: { noteContent: NoteContent }) {
  return (
    <Card className="max-w-xl bg-primary-100 p-4 rounded-xl border-2 border-primary-200">
      <h2 className="p-4 text-lg font-semibold tracking-tight">
        {noteContent.noteTitle}
      </h2>
      <div className="bg-slate-50 p-4 rounded-xl">
        <p>{noteContent.noteDescription}</p>
      </div>
    </Card>
  );
}
