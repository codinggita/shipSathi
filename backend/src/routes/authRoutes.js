import express from 'express';
import jwt from 'jsonwebtoken';
import { register, login, me } from '../controllers/authController.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecurejwtsecretshipsathipro';

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

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken, me);

export default router;
