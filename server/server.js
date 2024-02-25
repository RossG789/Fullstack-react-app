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

app.delete("/posts", async (req, res) => {
  try {
    await db.query(`DELETE FROM posts`);
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    let query = `INTERT INTO posts `;
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/categories", async (req, res) => {
  try {
    let result = await db.query(`SELECT * FROM categories`);
    res.status(200).json(result.rows);
  } catch (err) {}
});

app.listen(PORT, () => {
  console.log(`Port currently running on Localhost:${PORT} ☉ ‿ ⚆`);
});
