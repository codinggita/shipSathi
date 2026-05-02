import React, { useState } from 'react';
import { 
  Plus, Search, Filter, ArrowUpDown, ChevronDown, 
  Package, MoreHorizontal, Calendar, Eye, RefreshCcw, 
  Truck, CheckCircle, Clock, AlertCircle
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Orders = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState('');
  const [newCourier, setNewCourier] = useState('Delhivery');
  const [newWeight, setNewWeight] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const [ordersData, setOrdersData] = useState([
    { id: '#ORD-2093', customer: 'John Doe', email: 'john@example.com', date: 'May 01, 2026', courier: 'Delhivery', weight: '1.2 kg', status: 'In Transit', amount: '$42.18' },
    { id: '#ORD-2092', customer: 'Sarah Smith', email: 'sarah@example.com', date: 'May 01, 2026', courier: 'Blue Dart', weight: '0.8 kg', status: 'Delivered', amount: '$31.50' },
    { id: '#ORD-2091', customer: 'Michael R.', email: 'michael@example.com', date: 'Apr 30, 2026', courier: 'DTDC', weight: '2.5 kg', status: 'Pending', amount: '$54.00' },
    { id: '#ORD-2090', customer: 'Emma Watson', email: 'emma@example.com', date: 'Apr 30, 2026', courier: 'Delhivery', weight: '0.5 kg', status: 'In Transit', amount: '$24.90' },
    { id: '#ORD-2089', customer: 'James Bond', email: 'james@example.com', date: 'Apr 29, 2026', courier: 'Blue Dart', weight: '5.0 kg', status: 'Delivered', amount: '$85.00' },
  ]);

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!newCustomer || !newWeight || !newAmount) {
      alert('Please fill out all order details.');
      return;
    }

    const newOrder = {
      id: `#ORD-${Math.floor(Math.random() * 9000) + 1000}`,
      customer: newCustomer,
      email: `${newCustomer.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      courier: newCourier,
      weight: `${newWeight} kg`,
      status: 'Pending',
      amount: `$${newAmount}`
    };

    setOrdersData([newOrder, ...ordersData]);
    setNewCustomer('');
    setNewWeight('');
    setNewAmount('');
    setShowAddForm(false);
  };

  const filteredOrders = ordersData.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Order Management</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Manage, filter, and track individual shipment manifests globally.</p>
            </div>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all"
            >
              <Plus className="h-4 w-4" />
              {showAddForm ? 'Cancel' : 'Create New Order'}
            </button>
          </header>

          {showAddForm && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Add a New Order</h3>
              <form onSubmit={handleAddOrder} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Customer Name</label>
                  <input type="text" value={newCustomer} onChange={(e) => setNewCustomer(e.target.value)} placeholder="e.g. Bob Vance" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand w-full" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Weight (kg)</label>
                  <input type="text" value={newWeight} onChange={(e) => setNewWeight(e.target.value)} placeholder="e.g. 1.5" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand w-full" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Amount ($)</label>
                  <input type="text" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} placeholder="e.g. 45.00" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand w-full" />
                </div>
                <button type="submit" className="bg-brand text-white hover:bg-brand-dark font-bold text-xs px-5 py-3 rounded-xl shadow transition-all h-11">
                  Save Order
                </button>
              </form>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Active Orders</p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-0.5">12,842</h3>
                <span className="text-[10px] font-medium text-emerald-600">+14.2% since last month</span>
              </div>
              <div className="h-12 w-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand">
                <Package className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pending Fulfillment</p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-0.5">481</h3>
                <span className="text-[10px] font-medium text-amber-600">Requires processing</span>
              </div>
              <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Clock className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">In Transit</p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-0.5">8,431</h3>
                <span className="text-[10px] font-medium text-indigo-600">En route to customers</span>
              </div>
              <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Truck className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Delivered Today</p>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-0.5">1,420</h3>
                <span className="text-[10px] font-medium text-emerald-600">98.2% on-time rate</span>
              </div>
              <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Filters and List */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            {/* Action Bar */}
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1 relative max-w-sm">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search orders, customers..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-brand transition-colors font-medium placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                {/* Status Tabs/Buttons */}
                <div className="flex bg-slate-50 border border-slate-200 rounded-xl p-1 shrink-0">
                  {['All', 'Pending', 'In Transit', 'Delivered'].map(status => (
                    <button 
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        statusFilter === status 
                          ? 'bg-white text-brand shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="px-6 md:px-8 py-4">Order ID</th>
                    <th className="px-6 md:px-8 py-4">Customer</th>
                    <th className="px-6 md:px-8 py-4">Fulfillment Date</th>
                    <th className="px-6 md:px-8 py-4">Courier</th>
                    <th className="px-6 md:px-8 py-4">Weight</th>
                    <th className="px-6 md:px-8 py-4">Value</th>
                    <th className="px-6 md:px-8 py-4">Status</th>
                    <th className="px-6 md:px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map(order => (
                      <tr key={order.id} className="hover:bg-slate-50 transition-colors cursor-default">
                        <td className="px-6 md:px-8 py-4 font-bold text-slate-900">{order.id}</td>
                        <td className="px-6 md:px-8 py-4">
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800">{order.customer}</span>
                            <span className="text-[10px] font-medium text-slate-400">{order.email}</span>
                          </div>
                        </td>
                        <td className="px-6 md:px-8 py-4 font-medium text-slate-500 text-xs">
                          {order.date}
                        </td>
                        <td className="px-6 md:px-8 py-4">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-brand"></span>
                            <span className="font-bold text-slate-700 text-xs">{order.courier}</span>
                          </div>
                        </td>
                        <td className="px-6 md:px-8 py-4 text-xs font-medium text-slate-500">
                          {order.weight}
                        </td>
                        <td className="px-6 md:px-8 py-4 text-xs font-bold text-slate-900">
                          {order.amount}
                        </td>
                        <td className="px-6 md:px-8 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                            order.status === 'Delivered' 
                              ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                              : order.status === 'In Transit' 
                              ? 'bg-indigo-50 text-brand border-indigo-100'
                              : 'bg-amber-50 text-amber-600 border-amber-100'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 md:px-8 py-4 text-right">
                          <button className="text-slate-400 hover:text-brand font-bold text-xs p-2 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-6 md:px-8 py-12 text-center text-slate-400 text-sm font-medium">
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Allocation Breakdown and Recent Events Footer Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Carrier Allocation Efficiency */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Carrier Allocation Efficiency</h3>
                <p className="text-xs text-slate-400 font-medium mb-6">Distribution of orders routed through integrated couriers.</p>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>Delhivery</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[42%] bg-brand rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>Blue Dart</span>
                      <span>35%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[35%] bg-indigo-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                      <span>DTDC</span>
                      <span>23%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[23%] bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 relative overflow-hidden text-white shadow-xl shadow-slate-900/10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-brand text-white text-[10px] font-bold rounded-lg tracking-wider mb-4">
                  OPERATIONAL TIP
                </span>
                <h3 className="text-lg md:text-xl font-bold leading-snug mb-3">Optimize routing via Volume Discounts</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed mb-4">
                  Route 158 more shipments through Delhivery this month to unlock an 8.5% margin reduction on your tier pricing.
                </p>
              </div>

              <button className="w-full bg-brand text-white hover:bg-brand-light font-bold py-2.5 rounded-xl text-xs transition-colors shadow-lg shadow-brand/20">
                Adjust Routing Strategy
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Orders;
