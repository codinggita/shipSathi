import React, { useState } from 'react';
import { Plus, CheckCircle2, AlertTriangle, ChevronDown } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Couriers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
              
              {/* Delhivery */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#1d2b38] flex items-center justify-center text-white font-bold overflow-hidden">
                      {/* Logo placeholder - using text to approximate if logo not available */}
                      <span className="text-[10px] tracking-wider text-[#f58220]">Delhivery</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-slate-900">Delhivery</h2>
                        <span className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">
                          <CheckCircle2 className="h-3 w-3" /> Connected
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium mt-1">Primary domestic partner for Pan-India delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">STATUS</span>
                    <div className="w-12 h-6 bg-brand rounded-full flex items-center p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-brand" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 mt-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sync Status</p>
                    <p className="text-sm font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Healthy (14ms)
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Shipments</p>
                    <p className="text-sm font-bold text-slate-900">1,284</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Success Rate</p>
                    <p className="text-sm font-bold text-emerald-500">98.2%</p>
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

              {/* Blue Dart */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center overflow-hidden">
                       <span className="text-[10px] font-bold text-blue-800 italic">Blue Dart</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-slate-900">Blue Dart</h2>
                        <span className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold">
                          <AlertTriangle className="h-3 w-3" /> Action Required
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium mt-1">Premium express delivery for high-value items.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">STATUS</span>
                    <div className="w-12 h-6 bg-slate-200 rounded-full flex items-center p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 mt-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sync Status</p>
                    <p className="text-sm font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500"></span> Auth Failed
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Shipments</p>
                    <p className="text-sm font-bold text-slate-900">0</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Avg Latency</p>
                    <p className="text-sm font-bold text-slate-900">--</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Volume Discount Tiers</p>
                  <div className="flex gap-4">
                    <div className="flex-1 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-[10px] font-medium text-slate-400">Corporate</p>
                      <p className="text-sm font-bold text-slate-400">-5.0%</p>
                    </div>
                    <div className="flex-1 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-[10px] font-medium text-slate-400">Enterprise</p>
                      <p className="text-sm font-bold text-slate-400">-10.0%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DTDC */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#000000] flex items-center justify-center text-white overflow-hidden">
                       <span className="text-[12px] font-black text-[#e31837]">DTDC</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-slate-900">DTDC</h2>
                        <span className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">
                          <CheckCircle2 className="h-3 w-3" /> Connected
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium mt-1">Standard logistics for tier 2/3 city coverage.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">STATUS</span>
                    <div className="w-12 h-6 bg-brand rounded-full flex items-center p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm flex items-center justify-center">
                         <CheckCircle2 className="h-3 w-3 text-brand" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 mt-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sync Status</p>
                    <p className="text-sm font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Healthy (82ms)
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Shipments</p>
                    <p className="text-sm font-bold text-slate-900">842</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Success Rate</p>
                    <p className="text-sm font-bold text-emerald-500">95.5%</p>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column - Sidebars */}
            <div className="w-full xl:w-[350px] space-y-6">
              
              {/* Partner Credentials */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Partner Credentials</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Select Courier</label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors font-medium">
                        <option>Select a partner...</option>
                        <option>Delhivery</option>
                        <option>Blue Dart</option>
                        <option>DTDC</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">API Key</label>
                    <input 
                      type="text" 
                      placeholder="pk_live_xxxxxxxxx" 
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors font-mono placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Secret Key</label>
                    <input 
                      type="password" 
                      placeholder="•••••••••••••••••" 
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors font-mono placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Environment</label>
                    <div className="flex bg-slate-50 rounded-xl p-1 border border-slate-200">
                      <button className="flex-1 bg-white shadow-sm rounded-lg py-2 text-xs font-bold text-brand">Production</button>
                      <button className="flex-1 rounded-lg py-2 text-xs font-bold text-slate-500 hover:text-slate-700">Sandbox</button>
                    </div>
                  </div>

                  <button className="w-full bg-brand text-white font-bold rounded-xl py-3 text-sm mt-2 hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20">
                    Validate & Connect
                  </button>
                </div>
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
                  *Consolidated tier discounts are automatically applied based on your current volume across 3 active partners.
                </p>
              </div>

              {/* System Latency */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-4">System Latency</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">API Gateway</span>
                    <span className="text-xs font-bold text-emerald-600">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">Webhook Listener</span>
                    <span className="text-xs font-bold text-emerald-600">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">Carrier Sync Service</span>
                    <span className="text-xs font-bold text-amber-600">Degraded</span>
                  </div>
                </div>

                <button className="w-full text-center text-xs font-bold text-brand hover:underline">
                  View Full Incident Log
                </button>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Couriers;
