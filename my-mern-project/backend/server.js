const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');  // To load environment variables from .env file
const cors = require('cors');

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
 
app.use(cors());
app.use(express.json());

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
    
    // Create the database if it doesn't exist
    const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;
    db.query(createDatabaseQuery, (err, result) => {
      if (err) {
        console.error('Error creating database:', err);
      } else {
        console.log('Database created or already exists:', result);
      }
      
      // Create tables or any necessary schema here
      // db.query('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100))');

      // Close the connection
      db.end();
    });
  }
});

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
