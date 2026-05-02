import express from 'express';
import { validateAddress, geocodeAddress } from '../controllers/addressController.js';

const router = express.Router();

router.post('/validate', validateAddress);
router.post('/geocode', geocodeAddress);

export default router;
