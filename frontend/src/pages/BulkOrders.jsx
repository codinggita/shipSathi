import React, { useState } from 'react';
import { 
  Layers, Calendar, Activity, DollarSign, Upload, Filter, 
  Download, MoreVertical, Search, ArrowUpDown, ChevronDown, Info, 
  MapPin, Clock, Package, Truck
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const BulkOrders = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const manifests = [
    {
      id: '#ORD-2023-9912',
      date: 'Aug 24, 2023 • 14:20 PM',
      customer: 'Global Tech Solutions',
      location: 'San Francisco, CA',
      courier: 'FedEx Priority',
      status: 'Shipped',
      items: '42 units',
      cost: '$1,240.50'
    },
    {
      id: '#ORD-2023-9913',
      date: 'Aug 24, 2023 • 15:45 PM',
      customer: 'Avenue Retail Group',
      location: 'London, UK',
      courier: 'DHL Express',
      status: 'Processing',
      items: '156 units',
      cost: '$4,520.00'
    },
    {
      id: '#ORD-2023-9914',
      date: 'Aug 24, 2023 • 16:10 PM',
      customer: 'Nordic Furniture Co.',
      location: 'Stockholm, SE',
      courier: 'Maersk Freight',
      status: 'Delayed',
      items: '890 units',
      cost: '$12,800.25'
    },
    {
      id: '#ORD-2023-9915',
      date: 'Aug 24, 2023 • 17:00 PM',
      customer: 'Swift Logistics Ltd',
      location: 'Berlin, DE',
      courier: 'UPS Ground',
      status: 'Out for Delivery',
      items: '24 units',
      cost: '$840.00'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <ProSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">
            <span>Operations</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Global Fleet</span>
          </div>

          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Bulk Orders</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Manage high-volume shipping manifests and batch processing.</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                <Filter className="h-4 w-4" />
                Filter & Sort
              </button>

              <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                <Download className="h-4 w-4" />
                Download Report
              </button>

              <button className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                <Upload className="h-4 w-4" />
                Upload CSV
              </button>
            </div>
          </header>

          {/* Quick Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-36">
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-brand">
                  <Layers className="h-5 w-5" />
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100">
                  +12%
                </span>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-0.5">1,284</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Bulk Orders</span>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-36">
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-0.5">42</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pending Review</span>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-36">
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <Activity className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-0.5">98.2%</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Success Rate</span>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-36">
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <DollarSign className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-0.5">$42.5k</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gross Shipping Value</span>
              </div>
            </div>
          </div>

          {/* Current Manifests Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-slate-900 text-lg">Current Manifests</h3>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?u=1" alt="" />
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?u=2" alt="" />
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 border-2 border-white">+3</span>
                  </div>
                </div>
              </div>

              <span className="text-xs font-medium text-slate-400 self-end md:self-center">
                Showing <span className="font-bold text-slate-700">1-10</span> of 1,284 results
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="px-6 md:px-8 py-4">Order ID</th>
                    <th className="px-6 md:px-8 py-4">Customer</th>
                    <th className="px-6 md:px-8 py-4">Courier</th>
                    <th className="px-6 md:px-8 py-4">Status</th>
                    <th className="px-6 md:px-8 py-4">Items</th>
                    <th className="px-6 md:px-8 py-4">Cost</th>
                    <th className="px-6 md:px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {manifests.map(manifest => (
                    <tr key={manifest.id} className="hover:bg-slate-50/50 transition-colors cursor-default">
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            {manifest.id}
                            <span className="opacity-0 hover:opacity-100 cursor-pointer">📋</span>
                          </span>
                          <span className="text-[10px] font-medium text-slate-400 mt-1">{manifest.date}</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800">{manifest.customer}</span>
                          <span className="text-[10px] font-medium text-slate-400 mt-0.5">{manifest.location}</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-2">
                          {manifest.status === 'Shipped' ? (
                            <Truck className="h-4 w-4 text-brand shrink-0" />
                          ) : manifest.status === 'Processing' ? (
                            <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                          ) : manifest.status === 'Delayed' ? (
                            <Package className="h-4 w-4 text-red-500 shrink-0" />
                          ) : (
                            <Truck className="h-4 w-4 text-blue-500 shrink-0" />
                          )}
                          <span className="font-bold text-slate-700 text-xs">{manifest.courier}</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border tracking-wider uppercase ${
                          manifest.status === 'Shipped' 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                            : manifest.status === 'Processing' 
                            ? 'bg-amber-50 text-amber-600 border-amber-100'
                            : manifest.status === 'Delayed' 
                            ? 'bg-red-50 text-red-600 border-red-100'
                            : 'bg-blue-50 text-blue-600 border-blue-100'
                        }`}>
                          {manifest.status}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-bold text-slate-600">
                        {manifest.items}
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-bold text-slate-900">
                        {manifest.cost}
                      </td>
                      <td className="px-6 md:px-8 py-5 text-right">
                        <button className="text-slate-400 hover:text-brand transition-colors p-2 rounded-lg">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination footer */}
            <div className="p-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-100 text-sm">
              <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                Previous
              </button>
              <div className="flex items-center gap-1.5">
                <span className="h-8 w-8 rounded-xl bg-brand text-white font-bold flex items-center justify-center text-xs">1</span>
                <span className="h-8 w-8 rounded-xl bg-white text-slate-600 font-bold flex items-center justify-center text-xs hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-200">2</span>
                <span className="h-8 w-8 rounded-xl bg-white text-slate-600 font-bold flex items-center justify-center text-xs hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-200">3</span>
                <span className="text-slate-400 px-1 font-bold text-xs">...</span>
                <span className="h-8 w-8 rounded-xl bg-white text-slate-600 font-bold flex items-center justify-center text-xs hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-200">12</span>
              </div>
              <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                Next
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default BulkOrders;
