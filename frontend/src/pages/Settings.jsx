import React, { useState } from 'react';
import { 
  Plus, Key, RefreshCw, Copy, CheckCircle, 
  HelpCircle, ExternalLink, Shield, ShieldCheck, HelpCircle as HelpIcon
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('API & Webhooks');

  const tabs = [
    'API & Webhooks',
    'Billing & Plan',
    'General Preferences',
    'Team Permissions'
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          {/* Main Title and Sub navigation */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Settings</h1>
              <div className="hidden md:flex items-center gap-4 text-sm">
                <span className="text-brand font-bold bg-brand/5 px-2 py-1 rounded-md">Advanced</span>
                <span className="text-slate-400 font-medium hover:text-slate-600 cursor-pointer">Global Config</span>
                <span className="text-slate-400 font-medium hover:text-slate-600 cursor-pointer">Integrations</span>
              </div>
            </div>
          </header>

          {/* Settings Sub-Tabs */}
          <div className="flex overflow-x-auto border-b border-slate-200 mb-8 gap-6 scrollbar-none">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 text-sm font-bold border-b-2 transition-all shrink-0 ${
                  activeTab === tab
                    ? 'border-brand text-brand font-extrabold'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col xl:flex-row gap-8 mb-8">
            {/* Left Column: API Credentials */}
            <div className="flex-1">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">API Credentials</h2>
                    <span className="px-3 py-1 bg-indigo-50 text-brand text-[9px] font-bold rounded-lg tracking-wider border border-brand/10 self-start sm:self-center">
                      PRODUCTION ENVIRONMENT
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 font-medium mb-8">
                    Manage your authentication keys to access the ShipSathi API.
                  </p>

                  <div className="space-y-6">
                    {/* Live Secret Key */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-wider">
                        <span>LIVE SECRET KEY</span>
                        <span className="flex items-center gap-1 text-emerald-600">
                          <span className="h-1.5 w-1.5 bg-emerald-600 rounded-full"></span> Active
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          defaultValue="••••••••••••••••••••••••••••••••••••••••••••"
                          readOnly
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-slate-700 outline-none select-none focus:border-brand transition-colors"
                        />
                        <button className="flex items-center gap-2 bg-brand text-white font-bold px-4 py-3 rounded-xl hover:bg-brand-dark shadow-sm hover:shadow-md transition-all shrink-0">
                          <RefreshCw className="h-4 w-4" />
                          <span className="hidden sm:inline text-xs">Regenerate</span>
                        </button>
                      </div>
                    </div>

                    {/* Test Secret Key */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-wider">
                        <span>TEST SECRET KEY</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <span className="h-1.5 w-1.5 bg-slate-400 rounded-full"></span> Sandbox Only
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          defaultValue="••••••••••••••••••••••••••••••••••••••••••••"
                          readOnly
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-slate-700 outline-none select-none focus:border-brand transition-colors"
                        />
                        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-4 py-3 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shrink-0 shadow-sm">
                          <Copy className="h-4 w-4" />
                          <span className="hidden sm:inline text-xs">Copy Key</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Plan Usage */}
            <div className="w-full xl:w-[350px]">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Plan Usage</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-4xl font-black text-brand tracking-tight">Growth</h3>
                      <span className="text-sm font-medium text-slate-400">$149/mo</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Next billing cycle: Oct 24, 2023</p>
                  </div>

                  <div className="space-y-5 mb-8">
                    {/* Shipments limit */}
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        <span>Shipments</span>
                        <span className="text-slate-700">4,281 / 5,000</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-1">
                        <div className="h-full w-[85%] bg-brand rounded-full"></div>
                      </div>
                      <p className="text-[10px] font-bold text-indigo-500">
                        <span className="inline-block mr-1">↗</span> 12% higher than last month
                      </p>
                    </div>

                    {/* API Requests limit */}
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        <span>Api Requests</span>
                        <span className="text-slate-700">890k / 1M</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[89%] bg-slate-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white border border-slate-200 text-brand text-sm font-bold py-3 rounded-xl hover:border-brand/30 hover:bg-brand/5 transition-all shadow-sm">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          {/* Webhook Endpoints */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-8">
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Webhook Endpoints</h3>
                <p className="text-sm font-medium text-slate-400">Receive real-time notifications about events in your account.</p>
              </div>
              <button className="flex items-center gap-2 bg-brand text-white font-bold px-5 py-2.5 rounded-xl hover:bg-brand-dark shadow-sm hover:shadow-md transition-all self-start md:self-center">
                <Plus className="h-4 w-4" />
                Add Endpoint
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="px-6 md:px-8 py-4">URL Destination</th>
                    <th className="px-6 md:px-8 py-4">Subscribed Events</th>
                    <th className="px-6 md:px-8 py-4">Status</th>
                    <th className="px-6 md:px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">https://api.acmelogistics.com/webhooks</span>
                        <span className="text-[10px] font-medium text-slate-400 mt-0.5">Created 4 months ago</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-indigo-50 border border-brand/10 text-brand text-[10px] font-bold rounded-lg tracking-wider">
                          shipment.created
                        </span>
                        <span className="px-2 py-0.5 bg-indigo-50 border border-brand/10 text-brand text-[10px] font-bold rounded-lg tracking-wider">
                          shipment.delivered
                        </span>
                        <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold rounded-lg tracking-wider">
                          +2 more
                        </span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100">
                        <span className="h-1.5 w-1.5 bg-emerald-600 rounded-full"></span> Enabled
                      </span>
                    </td>
                    <td className="px-6 md:px-8 py-5 text-right font-medium text-slate-400 hover:text-slate-600 cursor-pointer text-xs">
                      Edit
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">https://hooks.slack.com/services/T000...</span>
                        <span className="text-[10px] font-medium text-slate-400 mt-0.5">Slack Notification Integration</span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold rounded-lg tracking-wider">
                          delivery.failed
                        </span>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold border border-red-100">
                        <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span> Failing (5xx)
                      </span>
                    </td>
                    <td className="px-6 md:px-8 py-5 text-right font-medium text-slate-400 hover:text-slate-600 cursor-pointer text-xs">
                      Edit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Integration Banner */}
          <div className="bg-brand rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg shadow-brand/20">
            {/* Background SVG radial design mimicking flowers */}
            <div className="absolute right-0 top-0 bottom-0 opacity-15 pointer-events-none hidden md:block">
              <svg width="400" height="100%" viewBox="0 0 400 300" fill="none">
                <circle cx="280" cy="150" r="120" stroke="white" strokeWidth="20" />
                <circle cx="280" cy="150" r="100" stroke="white" strokeWidth="16" />
                <circle cx="280" cy="150" r="80" stroke="white" strokeWidth="12" />
                <circle cx="280" cy="150" r="60" stroke="white" strokeWidth="8" />
                <circle cx="280" cy="150" r="40" stroke="white" strokeWidth="4" />
                <circle cx="280" cy="150" r="20" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl md:text-3xl font-extrabold mb-3 leading-tight">Need help with integration?</h3>
              <p className="text-sm text-indigo-100 font-medium opacity-90 leading-relaxed mb-6 max-w-xl">
                Our developer documentation covers everything from authentication to complex carrier routing. Read the SDK guides or join our Discord community for real-time support.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="bg-white hover:bg-slate-50 text-brand font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all">
                  Explore Documentation
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all">
                  Contact Developer Support
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Settings;
