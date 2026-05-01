import React, { useState } from 'react';
import { 
  BarChart2, TrendingUp, Calendar, ChevronDown, Download,
  MapPin, Clock, Shield, Star, DollarSign, Activity, Package
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Analytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Advanced Analytics</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Deep visual insights into logistics trends, carrier efficiency, and RTO optimization.</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <div className="relative">
                <select 
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 px-4 py-2.5 pr-10 rounded-xl text-xs lg:text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all outline-none cursor-pointer shadow-sm"
                >
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              <button className="flex items-center justify-center gap-2 bg-brand px-4 lg:px-6 py-2.5 rounded-xl text-xs lg:text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                <Download className="h-4 w-4" />
                Export CSV
              </button>
            </div>
          </header>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gross Shipment Volume</p>
                <span className="text-[10px] font-bold text-emerald-600">+12.2%</span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">152,042</h3>
              <span className="text-xs text-slate-400 font-medium">Month-to-date total</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg. Transit Duration</p>
                <span className="text-[10px] font-bold text-emerald-600">-0.4 Days</span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">2.4 Days</h3>
              <span className="text-xs text-slate-400 font-medium">Average en-route to delivery</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SLA Compliance Rate</p>
                <span className="text-[10px] font-bold text-brand">+1.1%</span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">97.8%</h3>
              <span className="text-xs text-slate-400 font-medium">Against 48hr delivery standards</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Carrier Claim Ratio</p>
                <span className="text-[10px] font-bold text-emerald-600">-2.3%</span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">0.14%</h3>
              <span className="text-xs text-slate-400 font-medium">Disputed / missing parcels</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Delivery Trend Chart */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Shipment Delivery Volume</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Weekly progress of packages arriving to customers</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand"></div>
                  <span className="text-xs font-bold text-slate-600">Completed Orders</span>
                </div>
              </div>

              {/* Weekly Analytics Chart Bar */}
              <div className="overflow-x-auto pb-4">
                <div className="h-60 min-w-[500px] flex items-end justify-between gap-4 border-b border-slate-100 pb-2">
                  {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'].map((week, idx) => (
                    <div key={week} className="flex-1 flex flex-col items-center group">
                      <div
                        className={`w-full max-w-[50px] rounded-t-xl transition-all ${
                          idx === 3 
                            ? 'bg-brand hover:bg-brand-dark shadow-lg shadow-brand/10 cursor-default' 
                            : 'bg-indigo-100/60 group-hover:bg-indigo-200'
                        }`}
                        style={{ height: `${[45, 65, 55, 92, 70][idx]}%` }}
                      ></div>
                      <span className={`text-[10px] font-bold mt-3 ${idx === 3 ? 'text-brand' : 'text-slate-400'}`}>{week}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Overview (Radial / Stats Card) */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Regional Distribution</h3>
                <p className="text-xs text-slate-400 font-medium mb-6">Order volume share by shipping zone</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>Maharashtra</span>
                      <span>34%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[34%] bg-brand rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>Karnataka</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[28%] bg-indigo-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>Delhi NCR</span>
                      <span>21%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[21%] bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>Other States</span>
                      <span>17%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[17%] bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Conversion Efficiency</span>
                <span className="text-sm font-extrabold text-emerald-600">89.2%</span>
              </div>
            </div>
          </div>

          {/* Carrier Performance Details */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Carrier Scorecard</h3>
                <p className="text-xs text-slate-400 font-medium">Overall quality, claims, and delivery costs breakdown per carrier</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="px-6 md:px-8 py-4">Carrier</th>
                    <th className="px-6 md:px-8 py-4">Avg Cost / Shipment</th>
                    <th className="px-6 md:px-8 py-4">RTO Rate</th>
                    <th className="px-6 md:px-8 py-4">SLA Met Rate</th>
                    <th className="px-6 md:px-8 py-4">Operational Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">DH</div>
                        <div>
                          <span className="font-bold text-slate-800">Delhivery</span>
                          <p className="text-[10px] font-medium text-slate-400 mt-0.5">Primary domestic tier</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5 font-bold text-slate-900">$3.82</td>
                    <td className="px-6 md:px-8 py-5 text-slate-500 font-medium">2.4%</td>
                    <td className="px-6 md:px-8 py-5 text-emerald-600 font-bold">98.2%</td>
                    <td className="px-6 md:px-8 py-5">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold rounded-full">
                        Fully Operational
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-indigo-50 text-brand text-xs font-bold flex items-center justify-center">BD</div>
                        <div>
                          <span className="font-bold text-slate-800">Blue Dart</span>
                          <p className="text-[10px] font-medium text-slate-400 mt-0.5">High-value express</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5 font-bold text-slate-900">$8.15</td>
                    <td className="px-6 md:px-8 py-5 text-slate-500 font-medium">1.1%</td>
                    <td className="px-6 md:px-8 py-5 text-emerald-600 font-bold">99.1%</td>
                    <td className="px-6 md:px-8 py-5">
                      <span className="px-3 py-1 bg-amber-50 text-amber-600 border border-amber-100 text-[10px] font-bold rounded-full">
                        Action Required
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">DT</div>
                        <div>
                          <span className="font-bold text-slate-800">DTDC</span>
                          <p className="text-[10px] font-medium text-slate-400 mt-0.5">Tier 2/3 city logistics</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5 font-bold text-slate-900">$4.95</td>
                    <td className="px-6 md:px-8 py-5 text-slate-500 font-medium">4.8%</td>
                    <td className="px-6 md:px-8 py-5 text-emerald-600 font-bold">95.5%</td>
                    <td className="px-6 md:px-8 py-5">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold rounded-full">
                        Operational
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Analytics;
