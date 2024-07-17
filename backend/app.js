const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser'); // Keep for consistency (optional)
require('dotenv').config();
const pool = require('./connection'); // Replace with your database connection logic
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check for duplicate email (optional):
    const results = await pool.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    const user = results[0];

    if (user) {
      return res.status(400).json({
        status: false,
        message: 'User email already registered. Please login'
      });
    }

    // Hash the password with a cost factor (e.g., 10)
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (Name, Email, password) VALUES (?,?,?)';
    await pool.promise().query(query, [name, email, hashedPassword]);

    const token = await jwt.sign({ name, email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60
    });

    return res.status(200).json({
      status: true,
      token: token,
      message: 'account created successfully.'
    });

  } catch (error) {
    console.error(error); // Log the complete error object for debugging
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({
        status: false,
        message: 'Invalid JSON data in request body.'
      });
    }
    return res.status(500).json({
      status: false,
      message: 'Server Error.' // Consider providing more specific error messages if possible
    });
  }
});

app.listen(port, console.log(`app is listening on ${port}`));

