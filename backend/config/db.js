import { neon } from "@neondatabase/serverless";
import "dotenv/config";

// creates a SQL connection using our DB URL
export const sql = neon(process.env.DATABASE_URL);
