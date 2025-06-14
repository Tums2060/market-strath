const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

//DB setup
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error(err.message);
    else {
        console.log('Connected to SQLite database');

        db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        age INTEGER
      )
    `, (err) => {
      if (err) console.error("Error creating table:", err.message);
      else console.log("Table 'users' is ready.");
    });
    }
});

//Example endpoint
app.get('/api/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) res.status(500).json({error: err.message});
        else res.json({users: rows});
    });
});

//Start Server
app.listen(PORT, () => {
    console.log("Started on http://localhost:${PORT}");
});