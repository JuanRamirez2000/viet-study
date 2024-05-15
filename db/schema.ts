import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  date,
  smallint,
  serial,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email"),
});

export const journal = pgTable("journal", {
  id: serial("id").primaryKey(),
  journalTitle: text("journal_title").notNull(),
});

export const journalRelations = relations(journal, ({ many }) => ({
  notes: many(note),
}));

export const note = pgTable("note", {
  id: serial("id").primaryKey(),
  noteTitle: text("note_title").notNull(),
  noteDescription: text("note_description"),
  journalIn: integer("journal_in").references(() => journal.id),
});

export const problemSet = pgTable("problem_set", {
  id: serial("id").primaryKey(),
});

export const problemSetRelations = relations(problemSet, ({ many }) => ({
  questionAnswers: many(questionAnswerCombo),
}));

export const questionAnswerCombo = pgTable("question_answer", {
  id: serial("id").primaryKey(),
  question: text("question"),
  answer: text("answer"),
  problemSetIn: integer("problem_set_in").references(() => problemSet.id),
});

export const questionAnswerComboRelations = relations(
  questionAnswerCombo,
  ({ one }) => ({
    problemSet: one(problemSet, {
      fields: [questionAnswerCombo.problemSetIn],
      references: [problemSet.id],
    }),
  })
);

export const noteRelations = relations(note, ({ one }) => ({
  journal: one(journal, {
    fields: [note.journalIn],
    references: [journal.id],
  }),
}));

export const deck = pgTable("deck", {
  id: serial("id").primaryKey(),
});

export const deckRelations = relations(deck, ({ many }) => ({
  cards: many(card),
}));

export const card = pgTable("cards", {
  id: serial("id").primaryKey(),
  frontText: text("front_text").notNull(),
  backText: text("back_text").notNull(),
  nextTimeShown: date("next_time_shown", { mode: "date" }),
  confidenceScore: smallint("confidence_score").default(3),
  deckIn: integer("deck_in").references(() => deck.id),
  lastStudied: date("last_studied").defaultNow(),
});

export const cardRelations = relations(card, ({ one }) => ({
  deck: one(deck, {
    fields: [card.deckIn],
    references: [deck.id],
  }),
}));
