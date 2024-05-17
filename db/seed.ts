import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users, deck, card, journal, note } from "./schema";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!("SUPABASE_DATABASE_URL" in process.env))
  throw new Error("SUPABASE_DATABASE_URL not found on .env.development");

const main = async () => {
  const client = new Pool({
    connectionString: process.env.SUPABASE_DATABASE_URL,
  });
  const db = drizzle(client);
  const deckData: typeof deck.$inferInsert = {
    id: faker.number.int({ max: 1000000 }),
  };
  const journalData: typeof journal.$inferInsert = {
    id: faker.number.int({ max: 1000000 }),
    journalTitle: faker.lorem.sentence(5),
  };

  const cardsData: (typeof card.$inferSelect)[] = [];
  const notesData: (typeof note.$inferSelect)[] = [];

  for (let i = 0; i < 5; i++) {
    cardsData.push({
      id: faker.number.int({ max: 1000000 }),
      frontText: faker.lorem.word(),
      backText: faker.lorem.word(),
      nextTimeShown: faker.date.soon(),
      confidenceScore: faker.number.int({ min: 1, max: 5 }),
      lastStudied: new Date().toUTCString(),
      deckIn: deckData.id!,
      favorited: false,
    });

    notesData.push({
      id: faker.number.int({ max: 1000000 }),
      noteTitle: faker.lorem.sentence(5),
      noteDescription: faker.lorem.sentences(10),
      journalIn: journalData.id!,
    });
  }

  console.log("Seed start");

  await db.insert(deck).values(deckData);
  console.log("Done inserting decks");
  await db.insert(card).values(cardsData);
  console.log("Done inserting cards");
  await db.insert(journal).values(journalData);
  console.log("Done inserting journals");
  await db.insert(note).values(notesData);
  console.log("Done inserting notes");

  console.log("Seed done");
};

main();
