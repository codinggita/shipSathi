import React from 'react';
import { Search, Bell, Grid, Menu } from 'lucide-react';

const DashboardHeader = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 z-30 transition-all">
      <div className="h-full px-4 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu & Search */}
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="relative flex-1 max-w-96 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-slate-100 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* User Profile & Actions */}
        <div className="flex items-center gap-2 lg:gap-6 ml-4">
          <div className="hidden md:flex items-center gap-2 pr-6 border-r border-slate-200">
            <button className="p-2 text-slate-500 hover:text-brand transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-500 hover:text-brand transition-colors">
              <Grid className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:flex flex-col">
              <span className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">Alex Rivera</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Super Admin</span>
            </div>
            <div className="h-9 w-9 lg:h-10 lg:w-10 rounded-full border-2 border-slate-100 overflow-hidden group-hover:border-brand/20 transition-all">
              <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Rivera" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default DashboardHeader;
