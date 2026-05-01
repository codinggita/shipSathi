import React, { useState } from 'react';
import { 
  BarChart2, TrendingUp, Download, Calendar, Layers, Activity, 
  Truck, Settings, Shield, Plus, Star, ArrowUpRight, ArrowDownRight, 
  Clock, ChevronDown
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const EnterpriseAnalytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  const carrierPerformance = [
    { name: 'SwiftForce Express', orders: 1842, volume: '₹1.84M', sla: '99.1%', speed: '1.4 days' },
    { name: 'Delhivery Surface', orders: 1255, volume: '₹1.12M', sla: '98.2%', speed: '2.5 days' },
    { name: 'BlueDart Air', orders: 840, volume: '₹1.48M', sla: '97.4%', speed: '1.1 days' },
    { name: 'Ecom Express', orders: 630, volume: '₹0.36M', sla: '96.8%', speed: '4.8 days' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <ProSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">Enterprise Logistics Analytics</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Detailed tracking, cost distributions, and SLA metrics for your enterprise operations.</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <div className="relative">
                <select 
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 px-4 py-2.5 pr-10 rounded-xl text-xs lg:text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all outline-none cursor-pointer shadow-sm select-none"
                >
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>Last 90 Days</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              <button className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark px-5 py-2.5 rounded-xl text-xs lg:text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                <Download className="h-4 w-4" /> Export CSV
              </button>
            </div>
          </header>

          {/* Premium KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total volume card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <TrendingUp className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-brand">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">Gross Volume</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100 flex items-center gap-0.5 select-none">
                  <ArrowUpRight className="h-3 w-3" /> 12.4%
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 flex items-end gap-1 leading-none tracking-tight">
                  ₹4.8M
                </h3>
              </div>
            </div>

            {/* SLA compliance card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <Shield className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">SLA Compliance</span>
                </div>
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-lg border border-indigo-100 flex items-center gap-0.5 select-none">
                  <ArrowUpRight className="h-3 w-3" /> 0.4%
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 flex items-end gap-1 leading-none tracking-tight">
                  98.5<span className="text-lg font-bold text-slate-400 mb-0.5">%</span>
                </h3>
              </div>
            </div>

            {/* avg speed card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <Clock className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">Transit Duration</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100 flex items-center gap-0.5 select-none">
                  <ArrowDownRight className="h-3 w-3" /> 0.3d
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 flex items-end gap-1 leading-none tracking-tight">
                  1.9 <span className="text-xs font-bold text-slate-400 tracking-wide uppercase">days</span>
                </h3>
              </div>
            </div>

            {/* shipping cost card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <Settings className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">Avg Cost / Ship</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100 flex items-center gap-0.5 select-none">
                  <ArrowDownRight className="h-3 w-3" /> ₹12.50
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 flex items-end gap-1 leading-none tracking-tight">
                  ₹182<span className="text-base font-bold text-slate-400 mb-0.5">.40</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Graphical Trends Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* volume by day chart */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-extrabold text-slate-800 text-lg">Weekly Shipping Volume</h3>
                <TrendingUp className="h-4 w-4 text-slate-400" />
              </div>

              <div className="h-52 flex items-end justify-between gap-3 md:gap-4 border-b border-slate-100 pb-2">
                {['WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5'].map((wk, idx) => (
                  <div key={wk} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-full max-w-[42px] rounded-t-lg transition-all ${idx === 3 ? 'bg-brand' : 'bg-indigo-50/70 hover:bg-indigo-100'}`}
                      style={{ height: `${[42, 60, 95, 78, 85][idx]}%` }}
                    ></div>
                    <span className="text-[10px] font-bold text-slate-400 mt-2.5 tracking-wider">{wk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery status breakout */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-extrabold text-slate-800 text-lg">Status Distribution</h3>
                <Layers className="h-4 w-4 text-slate-400" />
              </div>

              <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="flex flex-col">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1 leading-none">
                    <span>Delivered Successfully</span>
                    <span>84%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1 leading-none">
                    <span>In Transit</span>
                    <span>12%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1 leading-none">
                    <span>RTO / Returned</span>
                    <span>4%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carrier distribution list table section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-extrabold text-slate-900 text-lg">Carrier SLA Breakdown</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="px-6 md:px-8 py-4">Carrier Name</th>
                    <th className="px-6 md:px-8 py-4">Orders (30d)</th>
                    <th className="px-6 md:px-8 py-4">Volume</th>
                    <th className="px-6 md:px-8 py-4">SLA Compliance</th>
                    <th className="px-6 md:px-8 py-4">Delivery Speed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {carrierPerformance.map(cp => (
                    <tr key={cp.name} className="hover:bg-slate-50/50 transition-colors cursor-default">
                      <td className="px-6 md:px-8 py-5">
                        <span className="font-bold text-slate-800">{cp.name}</span>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-bold text-slate-600">
                        {cp.orders.toLocaleString()}
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-bold text-slate-600">
                        {cp.volume}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden shrink-0">
                            <div className="h-full bg-brand rounded-full" style={{ width: cp.sla }}></div>
                          </div>
                          <span className="text-xs font-bold text-slate-700">{cp.sla}</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-bold text-slate-600">
                        {cp.speed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default EnterpriseAnalytics;
