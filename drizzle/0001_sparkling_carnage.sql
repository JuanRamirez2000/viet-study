CREATE TABLE IF NOT EXISTS "journal" (
	"id" serial PRIMARY KEY NOT NULL,
	"journal_title" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "note" (
	"id" serial PRIMARY KEY NOT NULL,
	"note_title" text NOT NULL,
	"note_description" text,
	"journal_in" integer
);
--> statement-breakpoint
ALTER TABLE "cards" ALTER COLUMN "front_text" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cards" ALTER COLUMN "back_text" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_journal_in_journal_id_fk" FOREIGN KEY ("journal_in") REFERENCES "journal"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
