import mongoose from 'mongoose';

export let isDbConnected = false;

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/shipsathi';

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    isDbConnected = true;
  } catch (err) {
    console.error(`MongoDB connection error (falling back to in-memory db): ${err.message}`);
    isDbConnected = false;
  }
};
