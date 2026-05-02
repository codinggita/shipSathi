import express from 'express';
import { getCouriers, validateCourier, trackBlueDart } from '../controllers/courierController.js';

const router = express.Router();

router.get('/', getCouriers);
router.post('/validate', validateCourier);
router.post('/bluedart/track', trackBlueDart);

export default router;
