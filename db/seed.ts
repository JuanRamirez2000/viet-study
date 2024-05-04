import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users } from "./schema";
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
  const data: (typeof users.$inferInsert)[] = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: faker.string.uuid(),
      email: faker.internet.email(),
    });
  }

  console.log("Seed start");
  await db.insert(users).values(data);
  console.log("Seed done");
};

main();
