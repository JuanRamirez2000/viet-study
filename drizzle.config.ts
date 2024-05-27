import "dotenv/config";
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

if (!process.env.SUPABASE_DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}
export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SUPABASE_DATABASE_URL,
  },
} satisfies Config;
