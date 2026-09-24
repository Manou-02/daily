import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  driver: "expo", // Dictates native mobile execution
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
});
