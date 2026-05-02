import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import courierRoutes from './src/routes/courierRoutes.js';
import addressRoutes from './src/routes/addressRoutes.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/couriers', courierRoutes);
app.use('/api/address', addressRoutes);

app.get('/', (req, res) => {
  res.send('ShipSathi Logistics Backend is live!');
});

app.listen(PORT, () => {
  console.log(`Express auth server listening on port ${PORT}`);
});
