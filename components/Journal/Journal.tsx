import { journal } from "@/db/schema";

type JournalContent = typeof journal.$inferSelect;

export default function Journal({
  journalContent,
}: {
  journalContent: JournalContent;
}) {
  return (
    <div>
      <h2>{journalContent.journalTitle}</h2>
    </div>
  );
}
