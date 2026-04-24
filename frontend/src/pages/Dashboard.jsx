import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Package, DollarSign, Activity, Calendar, 
  Download, AlertCircle, TrendingUp, Info, ChevronDown 
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import KPICard from '../components/KPICard';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 lg:ml-64 flex flex-col transition-all">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        
        {/* Dashboard Content */}
        <main className="mt-20 p-4 lg:p-8">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Platform Overview</h1>
              <p className="text-xs lg:text-sm text-slate-500 font-medium mt-1">Live operational data for ShipSathi Global Network</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 px-3 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <Calendar className="h-4 w-4" />
                <span className="hidden xs:inline">Last 24 Hours</span>
                <span className="xs:hidden">24h</span>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand px-4 lg:px-6 py-2 rounded-xl text-xs lg:text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </header>


          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard 
              icon={<Users className="h-5 w-5" />} 
              label="Total Users" 
              value="42,892" 
              trend="+12%" 
              subtext={<><span className="text-brand font-bold">1,204</span> new this week</>}
              color="bg-indigo-50 text-indigo-600"
            />
            <KPICard 
              icon={<Package className="h-5 w-5" />} 
              label="Today's Shipments" 
              value="8,431" 
              trend="+8.4%" 
              subtext={<><span className="text-brand font-bold">152,042</span> month-to-date</>}
              color="bg-blue-50 text-blue-600"
            />
            <KPICard 
              icon={<DollarSign className="h-5 w-5" />} 
              label="Gross Revenue" 
              value="$2.48M" 
              trend="+14.2%" 
              subtext={<><span className="text-brand font-bold">$14.2k</span> avg. daily</>}
              color="bg-emerald-50 text-emerald-600"
            />
            <KPICard 
              icon={<Activity className="h-5 w-5" />} 
              label="Active Couriers" 
              value="1,105" 
              trend="Stable" 
              subtext={
                <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-2/3 bg-brand rounded-full"></div>
                </div>
              }
              color="bg-amber-50 text-amber-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Daily Shipment Chart */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-slate-900">Daily Shipment Volume</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Unit breakdown by carrier category</p>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                  Last 7 Days <ChevronDown className="h-3 w-3" />
                </button>
              </div>
              
              {/* Simple Mock Bar Chart */}
              <div className="h-64 flex items-end justify-between gap-4 mask-fade-top border-b border-slate-100 pb-2">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
                  <div key={day} className="flex-1 flex flex-col items-center group">
                    <div 
                      className={`w-full max-w-[40px] rounded-t-lg transition-all ${idx === 3 ? 'bg-brand shadow-lg cursor-default' : 'bg-slate-100 group-hover:bg-slate-200'}`}
                      style={{ height: `${[40, 55, 45, 85, 60, 40, 50][idx]}%` }}
                    ></div>
                    <span className={`text-[10px] font-bold mt-3 ${idx === 3 ? 'text-brand' : 'text-slate-400'}`}>{day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Alerts */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 mb-8">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <h3 className="font-bold text-slate-900">Platform Alerts</h3>
              </div>
              
              <div className="space-y-4">
                <AlertItem 
                  type="danger" 
                  title="Carrier API Downtime" 
                  desc="FedEx tracking endpoints are currently unresponsive. Sync delayed."
                  time="12 minutes ago"
                />
                <AlertItem 
                  type="warning" 
                  title="High RTO Spike" 
                  desc="Return to Origin rates for Region-West-4 exceeded 15% today."
                  time="2 hours ago"
                />
                <AlertItem 
                  type="info" 
                  title="Scheduled Maintenance" 
                  desc="Database optimization scheduled for Sunday, 02:00 AM UTC."
                  time="5 hours ago"
                />
              </div>
              
              <button className="w-full text-center text-xs font-bold text-brand mt-8 hover:underline">
                View All Alerts
              </button>
            </div>
          </div>

          {/* Revenue Trend */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-8 overflow-hidden relative">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Revenue Trend</h3>
                <p className="text-xs text-slate-400 font-medium">Daily earnings trajectory across all business tiers</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand"></div>
                  <span className="text-xs font-bold text-slate-500">Enterprise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-200"></div>
                  <span className="text-xs font-bold text-slate-500">SME</span>
                </div>
              </div>
            </div>
            
            {/* Wave SVG Chart */}
            <div className="h-48 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path 
                  d="M0,150 C100,150 150,110 250,110 C350,110 400,150 500,150 C600,150 650,80 750,80 C850,80 900,150 1000,150" 
                  fill="none" 
                  stroke="#4F46E5" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                <path 
                  d="M0,150 C100,150 150,110 250,110 C350,110 400,150 500,150 C600,150 650,80 750,80 C850,80 900,150 1000,150 L1000,200 L0,200 Z" 
                  fill="url(#grad1)" 
                  opacity="0.1"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#4F46E5', stopOpacity:0.5}} />
                    <stop offset="100%" style={{stopColor:'#4F46E5', stopOpacity:0}} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded shadow-xl">
                  MAY 25: $42,105.00
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              {['MAY 01', 'MAY 08', 'MAY 15', 'MAY 22', 'MAY 31'].map(label => (
                <span key={label} className="text-[10px] font-bold text-slate-400">{label}</span>
              ))}
            </div>
          </div>

          {/* Recent Shipments */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-lg">Recent Shipment Batches</h3>
              <button className="text-brand font-bold text-xs hover:underline">See All Shipments</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
                    <th className="px-8 py-4">Manifest ID</th>
                    <th className="px-8 py-4">Courier</th>
                    <th className="px-8 py-4">Region</th>
                    <th className="px-8 py-4">Units</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <TableRow id="#MNF-9902" logo="FX" courier="FedEx Air" region="North America" units="420 units" status="In Transit" revenue="$12,490" />
                  <TableRow id="#MNF-9891" logo="DH" courier="DHL Express" region="European Union" units="185 units" status="Sorted" revenue="$6,820" />
                  <TableRow id="#MNF-9885" logo="UP" courier="UPS Ground" region="Asia Pacific" units="92 units" status="Processing" revenue="$2,140" />
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const AlertItem = ({ type, title, desc, time }) => {
  const styles = {
    danger: 'bg-red-50 border-red-100 text-red-900',
    warning: 'bg-amber-50 border-amber-100 text-amber-900',
    info: 'bg-blue-50 border-blue-100 text-blue-900'
  };
  return (
    <div className={`p-4 rounded-xl border ${styles[type]}`}>
      <h4 className="text-xs font-bold mb-1">{title}</h4>
      <p className="text-[10px] opacity-80 leading-relaxed mb-2">{desc}</p>
      <span className="text-[10px] opacity-60 font-medium">{time}</span>
    </div>
  );
};

const TableRow = ({ id, logo, courier, region, units, status, revenue }) => (
  <tr className="hover:bg-slate-50 transition-colors group cursor-default">
    <td className="px-8 py-4 text-xs font-bold text-slate-900">{id}</td>
    <td className="px-8 py-4">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded bg-brand/10 text-brand text-[8px] font-black flex items-center justify-center">{logo}</div>
        <span className="text-xs font-bold text-slate-700">{courier}</span>
      </div>
    </td>
    <td className="px-8 py-4 text-xs font-medium text-slate-500">{region}</td>
    <td className="px-8 py-4 text-xs font-medium text-slate-700">{units}</td>
    <td className="px-8 py-4">
      <span className={`px-3 py-1 rounded-full text-[9px] font-bold ${
        status === 'In Transit' ? 'bg-green-100 text-green-700' : 
        status === 'Sorted' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
      }`}>
        {status}
      </span>
    </td>
    <td className="px-8 py-4 text-xs font-bold text-slate-900">{revenue}</td>
  </tr>
);

export default Dashboard;
