import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:tDqMg0AR8HQX@ep-falling-sunset-a5zmc6mx.us-east-2.aws.neon.tech/beat_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });
