import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path="/couriers" element={<ProtectedRoute><Couriers /></ProtectedRoute>} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/enterprise" element={<ProtectedRoute><EnterpriseDashboard /></ProtectedRoute>} />
          <Route path="/bulk-orders" element={<ProtectedRoute><BulkOrders /></ProtectedRoute>} />
          <Route path="/courier-performance" element={<ProtectedRoute><CourierPerformance /></ProtectedRoute>} />
          <Route path="/create-shipment" element={<ProtectedRoute><CreateShipment /></ProtectedRoute>} />
          <Route path="/rate-comparison" element={<ProtectedRoute><RateComparison /></ProtectedRoute>} />
          <Route path="/enterprise-analytics" element={<ProtectedRoute><EnterpriseAnalytics /></ProtectedRoute>} />
          <Route path="/enterprise-settings" element={<ProtectedRoute><EnterpriseSettings /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
