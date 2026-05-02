import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

export const users = [
  {
    id: 1,
    fullName: 'Admin User',
    email: 'admin@shipsathi.com',
    password: bcrypt.hashSync('admin123', 10)
  }
];
