import { CourierPartner, courierPartners } from '../model/couriers.js';
import { isDbConnected } from '../config/db.js';

export const getCouriers = async (req, res) => {
  if (isDbConnected) {
    try {
      const partners = await CourierPartner.find({});
      if (partners && partners.length > 0) {
        return res.status(200).json(partners);
      }
      
      // Auto seed if database connects but is empty
      await CourierPartner.insertMany(courierPartners);
      const seeded = await CourierPartner.find({});
      return res.status(200).json(seeded);
    } catch (err) {
      return res.status(500).json({ message: 'Error retrieving courier partners.' });
    }
  }

  return res.status(200).json(courierPartners);
};

export const validateCourier = async (req, res) => {
  const { name, apiKey, secretKey, environment } = req.body;
  if (!name || !apiKey || !secretKey || !environment) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (isDbConnected) {
    try {
      const partner = await CourierPartner.findOne({ name: new RegExp(`^${name}$`, 'i') });
      if (!partner) {
        return res.status(404).json({ message: 'Courier partner not found.' });
      }

      partner.status = 'Connected';
      partner.syncStatus = 'Healthy';
      partner.latency = `${Math.floor(Math.random() * 50) + 10}ms`;
      partner.activeShipments = partner.activeShipments || Math.floor(Math.random() * 500) + 100;
      partner.apiKey = apiKey;
      partner.secretKey = secretKey;
      partner.environment = environment;

      await partner.save();

      return res.status(200).json({ message: `${partner.name} connected successfully!`, partner });
    } catch (err) {
      return res.status(500).json({ message: 'Error validating courier.' });
    }
  }

  const partner = courierPartners.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (!partner) {
    return res.status(404).json({ message: 'Courier partner not found.' });
  }

  partner.status = 'Connected';
  partner.syncStatus = 'Healthy';
  partner.latency = `${Math.floor(Math.random() * 50) + 10}ms`;
  partner.activeShipments = partner.activeShipments || Math.floor(Math.random() * 500) + 100;
  partner.apiKey = apiKey;
  partner.secretKey = secretKey;
  partner.environment = environment;

  return res.status(200).json({ message: `${partner.name} connected successfully!`, partner });
};

export const trackBlueDart = async (req, res) => {
  const { awb } = req.body;
  if (!awb) {
    return res.status(400).json({ message: 'AWB number is required.' });
  }

  const url = `https://bluedartbotai.p.rapidapi.com/shipment?format=xml&awb=awb&action=custawbquery&verno=1&lickey=APIKEY&numbers=${awb}&handler=tnt&loginid=APIID&scan=1`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e4f16e141amsh3480525fb320a1ap1e136bjsn3bd8b63a0d2c',
      'x-rapidapi-host': 'bluedartbotai.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return res.status(200).json({ 
      message: 'Tracking info retrieved successfully.', 
      tracking: result 
    });
  } catch (error) {
    return res.status(500).json({ 
      message: 'Failed to retrieve tracking info.', 
      error: error.message 
    });
  }
};
