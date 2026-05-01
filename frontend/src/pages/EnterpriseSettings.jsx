import React, { useState } from 'react';
import { 
  User, Mail, Phone, Lock, Eye, CheckCircle, HelpCircle, Key, 
  Link2, RefreshCw, Bell, Shield, ShieldCheck, CreditCard, Save
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const EnterpriseSettings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  // Form states
  const [companyName, setCompanyName] = useState('ShipSathi Logistics Inc.');
  const [adminName, setAdminName] = useState('Alex Rivera');
  const [adminEmail, setAdminEmail] = useState('logistics@company.com');
  const [timeZone, setTimeZone] = useState('Asia/Kolkata (GMT+05:30)');

  // Notification states
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [apiLimitAlerts, setApiLimitAlerts] = useState(false);

  const handleSave = () => {
    alert('Settings successfully updated!');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <ProSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">Enterprise Settings</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Configure company profiles, webhook endpoints, and customized logistic thresholds.</p>
            </div>

            <button 
              onClick={handleSave}
              className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark px-5 py-3 rounded-xl text-xs lg:text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all self-start sm:self-center uppercase tracking-wide select-none active:scale-95"
            >
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </header>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 mb-8 gap-1 select-none overflow-x-auto pb-px">
            {[
              { id: 'general', label: 'General & Account', icon: <User className="h-4 w-4" /> },
              { id: 'billing', label: 'Subscription & Plan', icon: <CreditCard className="h-4 w-4" /> },
              { id: 'api', label: 'Developer & API', icon: <Key className="h-4 w-4" /> },
              { id: 'notifications', label: 'Notifications', icon: <Bell className="h-4 w-4" /> }
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 border-b-2 text-xs font-bold transition-all whitespace-nowrap ${
                    isActive 
                      ? 'border-brand text-brand font-extrabold' 
                      : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Section */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm">
            {activeTab === 'general' && (
              <div className="flex flex-col gap-6 max-w-2xl">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1 select-none">Account Profile</h3>
                  <p className="text-xs font-bold text-slate-400 select-none">Enter complete details of your registered logistics brand.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. ShipSathi Logistics Inc." 
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Primary Admin</label>
                    <input 
                      type="text" 
                      value={adminName}
                      onChange={(e) => setAdminName(e.target.value)}
                      placeholder="e.g. Alex Rivera" 
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Official Email</label>
                    <input 
                      type="email" 
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="e.g. logistics@company.com" 
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Default Time Zone</label>
                    <select 
                      value={timeZone}
                      onChange={(e) => setTimeZone(e.target.value)}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all select-none cursor-pointer"
                    >
                      <option>Asia/Kolkata (GMT+05:30)</option>
                      <option>America/New_York (GMT-05:00)</option>
                      <option>Europe/London (GMT+00:00)</option>
                      <option>Asia/Singapore (GMT+08:00)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="flex flex-col gap-6 max-w-2xl select-none">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Subscription & Plan</h3>
                  <p className="text-xs font-bold text-slate-400">View information about limits, add-ons, and pricing breakdowns.</p>
                </div>

                {/* current plan status banner */}
                <div className="bg-gradient-to-tr from-brand to-indigo-500 p-6 rounded-2xl text-white shadow-md flex flex-col justify-between h-44 relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 opacity-10 transition-all group-hover:scale-110">
                    <ShieldCheck className="h-36 w-36 text-white" />
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-wider text-white flex items-center gap-1 border border-white/20">
                      Active
                    </span>
                    <span className="text-[10px] font-bold text-indigo-100">Renewing Oct 15, 2026</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-200">Current Plan</span>
                    <h3 className="text-2xl font-black text-white mt-1 leading-tight tracking-tight">Enterprise Plus Tier</h3>
                  </div>
                </div>

                {/* API volume limits check */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-700">API Call Allowance</span>
                    <span className="text-xs font-black text-brand">8.5M / 10M used</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-1">
                    <div className="h-full w-[85%] bg-brand rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">85% of your quota is utilized this month.</span>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="flex flex-col gap-6 max-w-2xl">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1 select-none">Developer Credentials & Webhooks</h3>
                  <p className="text-xs font-bold text-slate-400 select-none">Manage API keys and integration webhook configurations for custom builds.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 select-none">Your Private API Key</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      readOnly 
                      value={import.meta.env.VITE_API_KEY || 'sh_live_9a2b7f3d8e01c45689ef23938'} 
                      className="bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl px-4 py-3.5 font-mono text-sm font-bold text-slate-600 outline-none w-full select-none" 
                    />
                    <button 
                      onClick={() => alert('API Key regenerated successfully!')}
                      className="bg-white hover:bg-slate-50 border border-slate-200 rounded-r-xl px-4 flex items-center justify-center text-slate-400 hover:text-brand transition-all select-none"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 leading-none select-none">Never share your secret credentials via email or untrusted forums.</span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 select-none">Webhook Callback Endpoint</label>
                  <input 
                    type="text" 
                    defaultValue="https://api.yourlogistics.com/webhooks/shipments"
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all select-none" 
                  />
                  <span className="text-[9px] font-bold text-slate-400 leading-none select-none">We will trigger delivery, tracking updates, and RTO alerts to this URL.</span>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="flex flex-col gap-6 max-w-2xl select-none">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Notifications & Alert Delivery</h3>
                  <p className="text-xs font-bold text-slate-400">Configure what kinds of status notifications are delivered to your administrative team.</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Email alerts */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-extrabold text-slate-800 leading-tight">Admin Email Alerts</span>
                      <span className="text-xs font-bold text-slate-400 mt-1">Receive daily performance digests and weekly transit summaries.</span>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={emailAlerts}
                        onChange={() => setEmailAlerts(!emailAlerts)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                  </div>

                  {/* SMS alerts */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-extrabold text-slate-800 leading-tight">Urgent SMS Alerts</span>
                      <span className="text-xs font-bold text-slate-400 mt-1">Directly notify operational teams for RTO or late SLA delivery.</span>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={smsAlerts}
                        onChange={() => setSmsAlerts(!smsAlerts)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                  </div>

                  {/* usage alert */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-extrabold text-slate-800 leading-tight">Usage Warning Notifications</span>
                      <span className="text-xs font-bold text-slate-400 mt-1">We will alert you when you hit 90% of your plan allowance.</span>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={apiLimitAlerts}
                        onChange={() => setApiLimitAlerts(!apiLimitAlerts)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
};

export default EnterpriseSettings;
