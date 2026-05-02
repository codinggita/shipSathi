import React, { useState, useEffect } from 'react';
import { Plus, CheckCircle2, AlertTriangle, ChevronDown } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Couriers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [couriers, setCouriers] = useState([]);
  const [selectedCourier, setSelectedCourier] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [environment, setEnvironment] = useState('Production');
  const [isSyncing, setIsSyncing] = useState(false);

  const fetchCouriers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/couriers');
      if (response.ok) {
        const data = await response.json();
        setCouriers(data);
      }
    } catch (err) {
      console.error('Error fetching couriers:', err);
    }
  };

  useEffect(() => {
    fetchCouriers();
  }, []);

  const handleValidateConnect = async (e) => {
    e.preventDefault();
    if (!selectedCourier || !apiKey || !secretKey) {
      alert('Please fill out all the details.');
      return;
    }

    setIsSyncing(true);
    try {
      const response = await fetch('http://localhost:5000/api/couriers/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: selectedCourier,
          apiKey,
          secretKey,
          environment
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Validation failed.');
      }

      alert(data.message);
      fetchCouriers();
      setApiKey('');
      setSecretKey('');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Courier Management</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Manage global shipping integrations and API connectivity.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
              <Plus className="h-4 w-4" />
              Add New Courier
            </button>
          </header>

          <div className="flex flex-col xl:flex-row gap-8">
            
            {/* Left Column - Courier Cards */}
            <div className="flex-1 space-y-6">
              
              {couriers.map((partner) => (
                <div key={partner.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-[#1d2b38] flex items-center justify-center text-white font-bold overflow-hidden">
                        <span className="text-[10px] tracking-wider text-[#f58220]">{partner.name}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-xl font-bold text-slate-900">{partner.name}</h2>
                          {partner.status === 'Connected' ? (
                            <span className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">
                              <CheckCircle2 className="h-3 w-3" /> Connected
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold">
                              <AlertTriangle className="h-3 w-3" /> Action Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 font-medium mt-1">Integrated domestic and premium global operations for ShipSathi.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400">STATUS</span>
                      <div className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-all ${partner.status === 'Connected' ? 'bg-brand' : 'bg-slate-200'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center transition-all ${partner.status === 'Connected' ? 'ml-auto' : ''}`}>
                          {partner.status === 'Connected' && <CheckCircle2 className="h-3 w-3 text-brand" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 mt-6">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sync Status</p>
                      <p className="text-sm font-bold flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${partner.status === 'Connected' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        {partner.status === 'Connected' ? `Healthy (${partner.latency})` : 'Disconnected'}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Shipments</p>
                      <p className="text-sm font-bold text-slate-900">{partner.activeShipments}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Success Rate</p>
                      <p className="text-sm font-bold text-emerald-500">{partner.successRate}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Volume Discount Tiers</p>
                    <div className="flex gap-4">
                      <div className="flex-1 border border-slate-200 rounded-xl p-3 text-center">
                        <p className="text-[10px] font-bold text-slate-400">0-500/mo</p>
                        <p className="text-sm font-bold text-slate-900">Base Rate</p>
                      </div>
                      <div className="flex-1 border border-brand/20 bg-brand/5 rounded-xl p-3 text-center">
                        <p className="text-[10px] font-bold text-brand">501-2000/mo</p>
                        <p className="text-sm font-bold text-brand">-8.5%</p>
                      </div>
                      <div className="flex-1 border border-slate-200 rounded-xl p-3 text-center">
                        <p className="text-[10px] font-bold text-slate-400">2001+/mo</p>
                        <p className="text-sm font-bold text-slate-900">-12.0%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Right Column - Sidebars */}
            <div className="w-full xl:w-[350px] space-y-6">
              
              {/* Partner Credentials */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Partner Credentials</h3>
                
                <form onSubmit={handleValidateConnect} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Select Courier</label>
                    <div className="relative">
                      <select 
                        value={selectedCourier}
                        onChange={(e) => setSelectedCourier(e.target.value)}
                        className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors font-medium"
                      >
                        <option value="">Select a partner...</option>
                        {couriers.map(p => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">API Key</label>
                    <input 
                      type="text" 
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="pk_live_xxxxxxxxx" 
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors font-mono placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Secret Key</label>
                    <input 
                      type="password" 
                      value={secretKey}
                      onChange={(e) => setSecretKey(e.target.value)}
                      placeholder="•••••••••••••••••" 
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors font-mono placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Environment</label>
                    <div className="flex bg-slate-50 rounded-xl p-1 border border-slate-200">
                      <button 
                        type="button" 
                        onClick={() => setEnvironment('Production')}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${environment === 'Production' ? 'bg-white shadow-sm text-brand' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        Production
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setEnvironment('Sandbox')}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${environment === 'Sandbox' ? 'bg-white shadow-sm text-brand' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        Sandbox
                      </button>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSyncing}
                    className="w-full bg-brand text-white font-bold rounded-xl py-3 text-sm mt-2 hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20 disabled:opacity-75"
                  >
                    {isSyncing ? 'Validating...' : 'Validate & Connect'}
                  </button>
                </form>
              </div>

              {/* Total Savings */}
              <div className="bg-brand p-6 rounded-2xl text-white shadow-lg shadow-brand/20">
                <p className="text-sm font-medium text-brand-50 opacity-90 mb-1">Total Savings This Month</p>
                <h3 className="text-4xl font-extrabold mb-6">$12,480.00</h3>
                
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium opacity-90">Efficiency Gain</span>
                  <span className="text-sm font-bold">+24%</span>
                </div>
                
                <div className="w-full h-1 bg-white/20 rounded-full mb-6 overflow-hidden">
                  <div className="h-full w-[76%] bg-white rounded-full"></div>
                </div>

                <p className="text-[10px] italic opacity-75 leading-relaxed">
                  *Consolidated tier discounts are automatically applied based on your current volume across active partners.
                </p>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Couriers;
