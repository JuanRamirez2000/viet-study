CREATE TABLE IF NOT EXISTS "problem_set" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question_answer" (
	"id" serial PRIMARY KEY NOT NULL,
	"question" text,
	"answer" text,
	"problem_set_in" integer
);
--> statement-breakpoint
ALTER TABLE "cards" ADD COLUMN "favorited" boolean DEFAULT false;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_answer" ADD CONSTRAINT "question_answer_problem_set_in_problem_set_id_fk" FOREIGN KEY ("problem_set_in") REFERENCES "problem_set"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
