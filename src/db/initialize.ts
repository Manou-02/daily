import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import * as schema from "./schema";

// Open the native sqlite wrapper
const expoDb = openDatabaseSync("daily_app.db", { enableChangeListener: true });

// Construct the operational drizzle context
export const db = drizzle(expoDb, { schema });
