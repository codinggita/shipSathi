import React, { useState } from 'react';
import { 
  Clock, Activity, BarChart2, Shield, Settings, HelpCircle, 
  Download, ChevronDown, Star, Search, Filter, Grid, List, 
  ChevronLeft, ChevronRight, TrendingUp, Sparkles, CheckCircle
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const CourierPerformance = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  const carriers = [
    {
      id: 'SF',
      name: 'SwiftForce Logistics',
      sub: 'Global Express Partner',
      badge: 'BEST PERFORMER',
      regions: ['NA', 'EL', 'AS'],
      time: '1.8 Days',
      timeLabel: 'Fastest',
      success: 98.2,
      rto: 2.1,
      rating: 5
    },
    {
      id: 'UE',
      name: 'UrbanExpress',
      sub: 'Domestic Last Mile',
      badge: null,
      regions: ['NA'],
      time: '2.4 Days',
      timeLabel: null,
      success: 94.1,
      rto: 4.5,
      rating: 5
    },
    {
      id: 'BL',
      name: 'BlueLine Logistics',
      sub: 'Regional Ground',
      badge: null,
      regions: ['EL', 'ME'],
      time: '3.1 Days',
      timeLabel: null,
      success: 89.5,
      rto: 6.8,
      rating: 4
    }
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
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Courier Performance</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Real-time efficiency metrics across all shipping partners.</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <div className="relative">
                <select 
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 px-4 py-2.5 pr-10 rounded-xl text-xs lg:text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all outline-none cursor-pointer shadow-sm"
                >
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>Last 90 Days</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              <button className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-xs lg:text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                <Download className="h-4 w-4" />
                Export Report
              </button>
            </div>
          </header>

          {/* KPI Analytics Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Avg Delivery Time */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <Clock className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-brand">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Delivery Time</span>
                </div>
                <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg border border-red-100 flex items-center gap-1">
                  ↑ 12%
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-black text-slate-900 flex items-end gap-1.5 leading-none">
                  2.4 <span className="text-sm font-bold text-slate-400 mb-1 leading-none">days</span>
                </h3>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <CheckCircle className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Success Rate</span>
                </div>
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-lg border border-indigo-100 flex items-center gap-1">
                  ↑ 3.2%
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-black text-slate-900 flex items-end gap-1 leading-none">
                  94.8<span className="text-lg font-bold text-slate-400 mb-0.5">%</span>
                </h3>
              </div>
            </div>

            {/* RTO % */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-brand/20 transition-all">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-all">
                <Settings className="h-32 w-32 text-slate-900" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                    <Settings className="h-5 w-5 rotate-45" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">RTO %</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100 flex items-center gap-1">
                  ↓ 0.8%
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-black text-slate-900 flex items-end gap-1 leading-none">
                  4.2<span className="text-lg font-bold text-slate-400 mb-0.5">%</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Courier Comparison Table Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Courier Comparison</h3>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 self-end md:self-center">
                <span className="text-xs font-bold text-slate-400">Showing 8 Active Carriers</span>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button className="h-8 w-8 bg-white shadow-sm flex items-center justify-center rounded-lg text-slate-700">
                    <List className="h-4 w-4" />
                  </button>
                  <button className="h-8 w-8 hover:bg-slate-50 flex items-center justify-center rounded-lg text-slate-400">
                    <Grid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="px-6 md:px-8 py-4">Courier Name</th>
                    <th className="px-6 md:px-8 py-4">Region Coverage</th>
                    <th className="px-6 md:px-8 py-4">Avg Time</th>
                    <th className="px-6 md:px-8 py-4">Success %</th>
                    <th className="px-6 md:px-8 py-4">RTO %</th>
                    <th className="px-6 md:px-8 py-4">Overall Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {carriers.map(carrier => (
                    <tr key={carrier.id} className="hover:bg-slate-50/50 transition-colors cursor-default">
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-indigo-50 text-brand text-xs font-black flex items-center justify-center shrink-0 border border-indigo-100">
                            {carrier.id}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800 flex items-center gap-2">
                              {carrier.name}
                              {carrier.badge && (
                                <span className="px-2 py-0.5 bg-brand text-white text-[8px] font-extrabold rounded uppercase tracking-wider">
                                  {carrier.badge}
                                </span>
                              )}
                            </span>
                            <span className="text-[10px] font-medium text-slate-400 mt-0.5">{carrier.sub}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-wrap items-center gap-1">
                          {carrier.regions.map(r => (
                            <span key={r} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[9px] font-bold rounded-md">
                              {r}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-700 text-xs">{carrier.time}</span>
                          {carrier.timeLabel && (
                            <span className="text-[9px] font-bold text-emerald-600 mt-0.5 uppercase tracking-wider">{carrier.timeLabel}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden shrink-0">
                            <div className="h-full bg-brand rounded-full" style={{ width: `${carrier.success}%` }}></div>
                          </div>
                          <span className="text-xs font-bold text-slate-700">{carrier.success}%</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-bold text-slate-600">
                        {carrier.rto}%
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < carrier.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-100 text-xs">
              <button className="text-xs font-extrabold text-brand hover:underline tracking-wider uppercase">
                View All Active Carriers
              </button>
              <div className="flex items-center gap-1.5">
                <button className="h-7 w-7 rounded-lg bg-white border border-slate-100 text-slate-400 flex items-center justify-center">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="h-7 w-7 bg-brand text-white font-bold rounded-lg flex items-center justify-center text-xs">1</button>
                <button className="h-7 w-7 bg-white border border-slate-100 text-slate-600 font-bold rounded-lg flex items-center justify-center text-xs">2</button>
                <button className="h-7 w-7 bg-white border border-slate-100 text-slate-600 font-bold rounded-lg flex items-center justify-center text-xs">3</button>
                <button className="h-7 w-7 rounded-lg bg-white border border-slate-100 text-slate-600 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Trend Analysis & Operational Insight row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            {/* Trend Analysis Card */}
            <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-slate-900 text-lg">Trend Analysis</h3>
                <TrendingUp className="h-5 w-5 text-slate-400" />
              </div>

              {/* Bar Chart Svg */}
              <div className="h-48 flex items-end justify-between gap-2 md:gap-4 border-b border-slate-100 pb-2">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, idx) => (
                  <div key={day} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-full max-w-[36px] rounded-t-lg transition-all ${idx === 2 ? 'bg-brand hover:bg-brand-dark' : 'bg-indigo-50 hover:bg-indigo-100'}`}
                      style={{ height: `${[42, 60, 95, 78, 85, 58][idx]}%` }}
                    ></div>
                    <span className="text-[10px] font-bold text-slate-400 mt-2.5">{day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Insight Card */}
            <div className="lg:col-span-2 bg-gradient-to-tr from-brand to-indigo-500 p-6 md:p-8 rounded-2xl shadow-lg shadow-brand/20 text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-all">
                <Shield className="h-48 w-48 text-white" />
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="h-11 w-11 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <button className="h-11 w-11 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white flex items-center justify-center border border-white/20 transition-all">
                  <Settings className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xl lg:text-2xl mb-3 leading-snug">Operational Insight</h3>
                  <p className="text-xs text-indigo-100/90 font-medium leading-relaxed mb-6">
                    SwiftForce Logistics has shown a 14% improvement in delivery speed within the EU region this month. Consider shifting higher priority urban shipments to their network to maintain your KPI targets.
                  </p>
                </div>

                <button className="w-full bg-white hover:bg-slate-50 text-brand text-xs font-extrabold px-6 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md active:scale-95">
                  Apply Routing Rule
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default CourierPerformance;
