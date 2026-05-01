import React, { useState } from 'react';
import { 
  Plus, Upload, ChevronDown, Download, Truck, 
  DollarSign, Activity, Users, MoreHorizontal, Calendar, Search
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const EnterpriseDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <ProSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Operations Overview</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Real-time shipping intelligence and fleet performance.</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs lg:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                <Upload className="h-4 w-4" />
                Upload Bulk Orders
              </button>

              <button className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-xs lg:text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                <Plus className="h-4 w-4" />
                Create New Shipment
              </button>
            </div>
          </header>

          {/* Quick Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Shipments */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Shipments</p>
                <div className="h-8 w-8 bg-brand/5 rounded-lg flex items-center justify-center text-brand">
                  <Truck className="h-4 w-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">1,247</h3>
                <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                  ↗ 12.5% vs last month
                </p>
              </div>
            </div>

            {/* Shipping Cost */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Shipping Cost</p>
                <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <DollarSign className="h-4 w-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">₹1,28,450</h3>
                <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                  ⏱ Updated 2 mins ago
                </p>
              </div>
            </div>

            {/* Cost Savings */}
            <div className="bg-white p-6 rounded-2xl border-brand/20 bg-brand/[0.01] shadow-sm flex flex-col justify-between h-40 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-l-2xl"></div>
              <div className="flex justify-between items-center pl-1">
                <p className="text-[10px] font-bold text-brand uppercase tracking-wider">Cost Savings</p>
                <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
              <div className="pl-1">
                <h3 className="text-3xl font-extrabold text-brand mb-1">₹23,450</h3>
                <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                  ✨ Optimized via AI Rates
                </p>
              </div>
            </div>

            {/* Active Couriers */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Couriers</p>
                <div className="h-8 w-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">6</h3>
                <p className="text-[10px] font-bold text-slate-500 flex items-center gap-1 uppercase tracking-wider">
                  D1 FE EK <span className="text-slate-400 normal-case">+3 more online</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Shipping Cost Trend Chart */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-visible">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Shipping Cost Trend</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Daily cost analysis for the last 30 days</p>
                </div>
                <div className="relative">
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="appearance-none bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all outline-none cursor-pointer shadow-sm pr-8"
                  >
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>Last 12 Months</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Advanced Cost Trend Bar & Wave overlay */}
              <div className="overflow-x-auto pb-4 relative">
                <div className="h-60 min-w-[500px] flex items-end justify-between gap-3 border-b border-slate-100 pb-2 relative">
                  {/* Bars */}
                  {['01 NOV', '08 NOV', '15 NOV', '22 NOV', '30 NOV'].map((date, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center group relative z-10">
                      <div className="w-full flex justify-center gap-1 mb-1">
                        <div 
                          className={`w-[12px] md:w-[15px] rounded-t-lg transition-all ${idx === 4 ? 'bg-brand' : 'bg-brand/10'}`}
                          style={{ height: `${[45, 38, 42, 55, 62][idx]}px` }}
                        ></div>
                        <div 
                          className={`w-[16px] md:w-[22px] rounded-t-lg transition-all ${idx === 4 ? 'bg-brand' : 'bg-brand/20 group-hover:bg-brand/30'}`}
                          style={{ height: `${[65, 82, 48, 88, 110][idx]}px` }}
                        ></div>
                        <div 
                          className={`w-[20px] md:w-[28px] rounded-t-lg transition-all ${idx === 4 ? 'bg-brand/80' : 'bg-brand/30 group-hover:bg-brand/40'}`}
                          style={{ height: `${[85, 115, 68, 120, 160][idx]}px` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold mt-3 text-slate-400">{date}</span>
                    </div>
                  ))}

                  {/* Curvaceous trendline overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 500 240" preserveAspectRatio="none">
                    <path
                      d="M20,180 C100,165 120,130 200,135 C300,140 320,110 400,105 C450,102 480,85 500,80"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.35"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Courier Usage Donut Chart */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Courier Usage</h3>
                <p className="text-xs text-slate-400 font-medium mb-6">Volume distribution by partner</p>
                
                <div className="relative flex justify-center py-4 mb-6">
                  {/* Visual SVG Donut */}
                  <svg className="w-44 h-44 transform -rotate-90">
                    <circle cx="88" cy="88" r="70" stroke="#f1f5f9" strokeWidth="18" fill="transparent" />
                    {/* Delhivery Segment: 45% */}
                    <circle cx="88" cy="88" r="70" stroke="#4f46e5" strokeWidth="20" strokeDasharray={`${Math.PI * 2 * 70 * 0.45} ${Math.PI * 2 * 70 * 0.55}`} fill="transparent" />
                    {/* FedEx Segment: 30% */}
                    <circle cx="88" cy="88" r="70" stroke="#818cf8" strokeWidth="20" strokeDasharray={`${Math.PI * 2 * 70 * 0.3} ${Math.PI * 2 * 70 * 0.7}`} strokeDashoffset={`${-Math.PI * 2 * 70 * 0.45}`} fill="transparent" />
                    {/* Others: 25% */}
                    <circle cx="88" cy="88" r="70" stroke="#c7d2fe" strokeWidth="20" strokeDasharray={`${Math.PI * 2 * 70 * 0.25} ${Math.PI * 2 * 70 * 0.75}`} strokeDashoffset={`${-Math.PI * 2 * 70 * 0.75}`} fill="transparent" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight">
                    <span className="text-3xl font-black text-slate-900 tracking-tight">1,247</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Units</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-brand"></span>
                      <span className="text-xs font-bold text-slate-600">Delhivery</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-indigo-400"></span>
                      <span className="text-xs font-bold text-slate-600">FedEx</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-indigo-200"></span>
                      <span className="text-xs font-bold text-slate-600">Others</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500">25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Shipments */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8 relative">
            <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-xl">Recent Shipments</h3>
                <p className="text-xs font-medium text-slate-400">Managing latest active orders</p>
              </div>
              <button className="h-11 w-11 bg-brand hover:bg-brand-dark rounded-full text-white flex items-center justify-center shadow-lg shadow-brand/20 transition-all hover:scale-105 shrink-0">
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="px-6 md:px-8 py-4">Order ID</th>
                    <th className="px-6 md:px-8 py-4">Destination</th>
                    <th className="px-6 md:px-8 py-4">Courier</th>
                    <th className="px-6 md:px-8 py-4">Cost</th>
                    <th className="px-6 md:px-8 py-4">Time</th>
                    <th className="px-6 md:px-8 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900">#ORD-9921</td>
                    <td className="px-6 md:px-8 py-4.5 font-medium text-slate-700 text-xs">Mumbai, MH</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded bg-brand/10 text-brand text-[8px] font-black flex items-center justify-center shrink-0">DL</span>
                        <span className="font-bold text-slate-700 text-xs">Delhivery</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900 text-xs">₹450</td>
                    <td className="px-6 md:px-8 py-4.5 text-xs font-medium text-slate-400">2 hours ago</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold text-[10px] rounded-full uppercase tracking-wider">
                        Shipped
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900">#ORD-9918</td>
                    <td className="px-6 md:px-8 py-4.5 font-medium text-slate-700 text-xs">Bengaluru, KA</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded bg-indigo-50 text-indigo-600 text-[8px] font-black flex items-center justify-center shrink-0">FX</span>
                        <span className="font-bold text-slate-700 text-xs">FedEx</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900 text-xs">₹1,280</td>
                    <td className="px-6 md:px-8 py-4.5 text-xs font-medium text-slate-400">4 hours ago</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <span className="px-3 py-1 bg-indigo-50 text-brand border border-indigo-100 font-bold text-[10px] rounded-full uppercase tracking-wider">
                        In Transit
                      </span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900">#ORD-9915</td>
                    <td className="px-6 md:px-8 py-4.5 font-medium text-slate-700 text-xs">New Delhi, DL</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded bg-slate-100 text-slate-800 text-[8px] font-black flex items-center justify-center shrink-0">EK</span>
                        <span className="font-bold text-slate-700 text-xs">Ecom Exp</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900 text-xs">₹320</td>
                    <td className="px-6 md:px-8 py-4.5 text-xs font-medium text-slate-400">5 hours ago</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <span className="px-3 py-1 bg-amber-50 text-amber-600 border border-amber-100 font-bold text-[10px] rounded-full uppercase tracking-wider">
                        Delayed
                      </span>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900">#ORD-9912</td>
                    <td className="px-6 md:px-8 py-4.5 font-medium text-slate-700 text-xs">Pune, MH</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded bg-brand/10 text-brand text-[8px] font-black flex items-center justify-center shrink-0">DL</span>
                        <span className="font-bold text-slate-700 text-xs">Delhivery</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900 text-xs">₹410</td>
                    <td className="px-6 md:px-8 py-4.5 text-xs font-medium text-slate-400">Yesterday</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold text-[10px] rounded-full uppercase tracking-wider">
                        Delivered
                      </span>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900">#ORD-9909</td>
                    <td className="px-6 md:px-8 py-4.5 font-medium text-slate-700 text-xs">Kolkata, WB</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded bg-blue-50 text-blue-800 text-[8px] font-black flex items-center justify-center shrink-0">BD</span>
                        <span className="font-bold text-slate-700 text-xs">BlueDart</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-4.5 font-bold text-slate-900 text-xs">₹2,100</td>
                    <td className="px-6 md:px-8 py-4.5 text-xs font-medium text-slate-400">Yesterday</td>
                    <td className="px-6 md:px-8 py-4.5">
                      <span className="px-3 py-1 bg-indigo-50 text-brand border border-indigo-100 font-bold text-[10px] rounded-full uppercase tracking-wider">
                        In Transit
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100">
              <button className="text-xs font-extrabold text-brand hover:underline tracking-wider uppercase">
                View All Transactions
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
