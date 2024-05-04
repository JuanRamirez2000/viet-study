import { migrate } from "drizzle-orm/postgres-js/migrator";
import { client, db } from "./index";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await client.end();
}
main();
