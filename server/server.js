import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";
import express from "express";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const PORT = 1917;

app.listen(PORT, () => {
  console.log(`Port currently running on Localhost:${PORT} ☉ ‿ ⚆`);
});

app.get("/", (req, res) => {});

app.post("/", (req, res) => {});

app.delete("/", (req, res) => {});
