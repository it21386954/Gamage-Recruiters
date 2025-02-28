const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');  // To load environment variables from .env file
const cors = require('cors');

// Initialize dotenv to load environment variablesee
dotenv.config();

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,  // 127.0.0.1 or localhost
  user: process.env.DB_USER,  // root
  password: process.env.DB_PASS,  // root (your MySQL root password)
  database: process.env.DB_NAME  // my_database
});

// Connect to MySQL server
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL server');
  }
}); 

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
