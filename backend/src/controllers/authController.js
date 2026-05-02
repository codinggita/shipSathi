import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, users } from '../model/users.js';
import { isDbConnected } from '../config/db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecurejwtsecretshipsathipro';

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // MongoDB path
  if (isDbConnected) {
    try {
      const existingUser = await User.findOne({ email: email.toLowerCase() });
      if (existingUser) {
        return res.status(400).json({ message: 'Email address is already in use.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        fullName,
        email: email.toLowerCase(),
        password: hashedPassword
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

      return res.status(201).json({
        message: 'Registration successful!',
        token,
        user: { id: newUser._id, fullName: newUser.fullName, email: newUser.email }
      });
    } catch (err) {
      return res.status(500).json({ message: 'Error processing registration' });
    }
  }

  // Fallback path
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

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(201).json({
      message: 'Registration successful!',
      token,
      user: { id: newUser.id, fullName: newUser.fullName, email: newUser.email }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error processing registration' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // MongoDB path
  if (isDbConnected) {
    try {
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

      return res.status(200).json({
        message: 'Login successful!',
        token,
        user: { id: user._id, fullName: user.fullName, email: user.email }
      });
    } catch (err) {
      return res.status(500).json({ message: 'Error logging in' });
    }
  }

  // Fallback path
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(200).json({
      message: 'Login successful!',
      token,
      user: { id: user.id, fullName: user.fullName, email: user.email }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error logging in' });
  }
};

export const me = async (req, res) => {
  if (isDbConnected) {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User profile not found.' });
      }

      return res.status(200).json({
        id: user._id,
        fullName: user.fullName,
        email: user.email
      });
    } catch (err) {
      return res.status(500).json({ message: 'Error retrieving profile' });
    }
  }

  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User profile not found.' });
  }

  return res.status(200).json({
    id: user.id,
    fullName: user.fullName,
    email: user.email
  });
};
