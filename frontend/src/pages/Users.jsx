import React from 'react';
import { 
  UserPlus, Search, SlidersHorizontal, ChevronDown, 
  MoreVertical, ChevronLeft, ChevronRight, CheckCircle2,
  AlertTriangle, Users as UsersIcon, ShieldCheck
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';

const Users = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const users = [
    { name: 'Sarah Jenkins', email: 's.jenkins@fastship.com', role: 'Enterprise', status: 'Active', active: '2 mins ago', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'David Miller', email: 'david.m@d2c-direct.co', role: 'D2C Seller', status: 'Active', active: '45 mins ago', avatar: 'https://i.pravatar.cc/150?u=david' },
    { name: 'Elena Rodriguez', email: 'e.rodriguez@shipsathi.com', role: 'Admin', status: 'Active', active: '3 hours ago', avatar: 'https://i.pravatar.cc/150?u=elena' },
    { name: 'Arthur Morgan', email: 'arthur@outlaw-logistics.com', role: 'D2C Seller', status: 'Suspended', active: '12 Oct, 2023', initial: 'AM' },
    { name: 'Julian Voss', email: 'j.voss@voss-shipping.de', role: 'Enterprise', status: 'Active', active: 'Yesterday', avatar: 'https://i.pravatar.cc/150?u=julian' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFF] flex overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">User Management</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Manage roles, permissions and account status for all platform members.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-brand px-6 py-3 rounded-xl font-bold text-white shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all active:scale-95">
              <UserPlus className="h-5 w-5" />
              Add New User
            </button>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2">Filter By:</span>
              <button className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 border border-slate-100 hover:bg-white transition-all">
                All Roles <ChevronDown className="h-3 w-3" />
              </button>
              <button className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 border border-slate-100 hover:bg-white transition-all">
                All Status <ChevronDown className="h-3 w-3" />
              </button>
            </div>
            <div className="text-[11px] font-bold text-slate-400">
              Displaying <span className="text-slate-900">1-24</span> of <span className="text-slate-900">1,284</span> users
            </div>
          </div>

          {/* User Table */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-50">
                    <th className="px-8 py-5">User Details</th>
                    <th className="px-8 py-5">Role</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5">Last Active</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {users.map((user, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors group cursor-default">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          {user.avatar ? (
                            <div className="h-10 w-10 rounded-full border border-slate-100 overflow-hidden">
                              <img src={user.avatar} alt={user.name} />
                            </div>
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                              {user.initial}
                            </div>
                          )}
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900">{user.name}</span>
                            <span className="text-[11px] font-medium text-slate-400">{user.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold ${
                          user.role === 'Enterprise' ? 'bg-[#EEF2FF] text-[#4F46E5]' :
                          user.role === 'Admin' ? 'bg-[#F5F3FF] text-[#7C3AED]' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className={`text-[11px] font-bold ${user.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>
                            {user.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-xs font-medium text-slate-500">{user.active}</td>
                      <td className="px-8 py-4 text-right">
                        <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-8 py-6 bg-slate-50/30 flex items-center justify-between border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400">Showing 5 of 1,284 users</span>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-slate-900 disabled:opacity-50" disabled>
                  <span className="text-xs font-bold mr-1">Previous</span>
                </button>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map(p => (
                    <button key={p} className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${p === 1 ? 'bg-brand text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}>
                      {p}
                    </button>
                  ))}
                  <span className="px-1 text-slate-400">...</span>
                  <button className="h-8 w-8 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-100">
                    24
                  </button>
                </div>
                <button className="p-2 text-slate-900 flex items-center gap-1 group">
                  <span className="text-xs font-bold">Next</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryCard 
              icon={<UsersIcon className="h-5 w-5 text-green-600" />} 
              iconBg="bg-green-50"
              value="1,104"
              label="Active Users"
              trend="+12% from last week"
              trendColor="text-green-600"
            />
            <SummaryCard 
              icon={<ShieldCheck className="h-5 w-5 text-indigo-600" />} 
              iconBg="bg-indigo-50"
              value="428"
              label="Enterprise Accounts"
              trend="Premium Tier"
              trendColor="text-indigo-600"
            />
            <SummaryCard 
              icon={<AlertTriangle className="h-5 w-5 text-amber-500" />} 
              iconBg="bg-amber-50"
              value="16"
              label="Pending Verifications"
              trend="Awaiting Action"
              trendColor="text-amber-500"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, iconBg, value, label, trend, trendColor }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col">
    <div className="flex items-start justify-between mb-8">
      <div className={`p-3 rounded-2xl ${iconBg}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold ${trendColor} bg-white px-2 py-1`}>
        {trend}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="text-3xl font-extrabold text-slate-900 mb-1">{value}</span>
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
  </div>
);

export default Users;
