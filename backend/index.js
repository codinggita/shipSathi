import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecurejwtsecretshipsathipro';

app.use(cors());
app.use(express.json());

// In-Memory Database for rapid testing and zero-setup functionality
const users = [
  {
    id: 1,
    fullName: 'Admin User',
    email: 'admin@shipsathi.com',
    password: bcrypt.hashSync('admin123', 10)
  }
];

// Middleware: Authenticate Token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// --- AUTHENTICATION ROUTES ---

// 1. Register
app.post('/api/auth/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(400).json({ message: 'Email address is already in use.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length + 1,
      fullName,
      email: email.toLowerCase(),
      password: hashedPassword
    };

    users.push(newUser);

    // Create token
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(201).json({
      message: 'Registration successful!',
      token,
      user: { id: newUser.id, fullName: newUser.fullName, email: newUser.email }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error processing registration' });
  }
});

// 2. Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate Token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(200).json({
      message: 'Login successful!',
      token,
      user: { id: user.id, fullName: user.fullName, email: user.email }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error logging in' });
  }
});

// 3. User Detail profile (Me)
app.get('/api/auth/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User profile not found.' });
  }

  return res.status(200).json({
    id: user.id,
    fullName: user.fullName,
    email: user.email
  });
});

app.get('/', (req, res) => {
  res.send('ShipSathi Logistics Backend is live!');
});

app.listen(PORT, () => {
  console.log(`Express auth server listening on port ${PORT}`);
});
