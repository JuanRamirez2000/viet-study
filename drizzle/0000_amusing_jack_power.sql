CREATE TABLE IF NOT EXISTS "cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"front_text" text,
	"back_text" text,
	"next_time_shown" date,
	"confidence_score" smallint DEFAULT 3,
	"deck_in" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deck" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cards" ADD CONSTRAINT "cards_deck_in_deck_id_fk" FOREIGN KEY ("deck_in") REFERENCES "deck"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
