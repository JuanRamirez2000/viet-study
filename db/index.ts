import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "./schema";

dotenv.config({
  path: ".env.local",
});

if (!process.env.SUPABASE_DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const connectionString = process.env.SUPABASE_DATABASE_URL;

export const client = postgres(connectionString, {
  prepare: false,
  ssl: { rejectUnauthorized: false },
});
export const db = drizzle(client, { schema: schema });
