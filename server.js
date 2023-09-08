// server.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database connection module

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle user registration form submission
app.post('/register', async (req, res) => {
  try {
    const { full_name, email, phone, country, password } = req.body;

    // Initialize the database connection
    const connection = await db.initialize();

    // Execute an INSERT statement
    await connection.execute(
      `INSERT INTO users (full_name, email, phone, country, password) VALUES (:full_name, :email, :phone, :country, :password)`,
      {
        full_name,
        email,
        phone,
        country,
        password,
      },
      {
        autoCommit: true, // Commit the transaction automatically
      }
    );

    // Release the database connection
    await connection.close();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
