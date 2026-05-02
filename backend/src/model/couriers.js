import mongoose from 'mongoose';

const courierPartnerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String, default: 'Disconnected' },
  syncStatus: { type: String, default: 'N/A' },
  latency: { type: String, default: '--' },
  activeShipments: { type: Number, default: 0 },
  successRate: { type: String, default: '0%' },
  apiKey: { type: String, default: '' },
  secretKey: { type: String, default: '' },
  environment: { type: String, default: 'Production' }
}, { timestamps: true });

export const CourierPartner = mongoose.model('CourierPartner', courierPartnerSchema);

export const courierPartners = [
  {
    id: 'delhivery',
    name: 'Delhivery',
    status: 'Connected',
    syncStatus: 'Healthy',
    latency: '14ms',
    activeShipments: 1284,
    successRate: '98.2%',
    apiKey: '',
    secretKey: '',
    environment: 'Production'
  },
  {
    id: 'bluedart',
    name: 'Blue Dart',
    status: 'Disconnected',
    syncStatus: 'Action Required',
    latency: '--',
    activeShipments: 0,
    successRate: '96.8%',
    apiKey: '',
    secretKey: '',
    environment: 'Production'
  },
  {
    id: 'dtdc',
    name: 'DTDC',
    status: 'Connected',
    syncStatus: 'Healthy',
    latency: '82ms',
    activeShipments: 842,
    successRate: '95.5%',
    apiKey: '',
    secretKey: '',
    environment: 'Production'
  }
];
