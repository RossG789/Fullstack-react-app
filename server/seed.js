import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

db.query(`CREATE TABLE IF NOT EXISTS test (
        test_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INT,
        datePosted DATE NOT NULL DEFAULT CURRENT_DATE
        
    );`);

db.query(`INSERT INTO test (name, age, datePosted)
    VALUES 
    ('Ross', 28, '2024-02-22'),
    ('Bruce', 34, '1995-12-18'),
    ('Adam', 18, '2019-06-12')
    
    ;`);
