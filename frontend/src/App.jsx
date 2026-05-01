import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Couriers from './pages/Couriers';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import EnterpriseDashboard from './pages/EnterpriseDashboard';
import BulkOrders from './pages/BulkOrders';
import CourierPerformance from './pages/CourierPerformance';
import CreateShipment from './pages/CreateShipment';
import RateComparison from './pages/RateComparison';
import EnterpriseAnalytics from './pages/EnterpriseAnalytics';
import EnterpriseSettings from './pages/EnterpriseSettings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/couriers" element={<Couriers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/enterprise" element={<EnterpriseDashboard />} />
          <Route path="/bulk-orders" element={<BulkOrders />} />
          <Route path="/courier-performance" element={<CourierPerformance />} />
          <Route path="/create-shipment" element={<CreateShipment />} />
          <Route path="/rate-comparison" element={<RateComparison />} />
          <Route path="/enterprise-analytics" element={<EnterpriseAnalytics />} />
          <Route path="/enterprise-settings" element={<EnterpriseSettings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
