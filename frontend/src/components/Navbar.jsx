import React from 'react';
import { Search, Bell, HelpCircle, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Logo & Core Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold">S</div>
            <span className="text-xl font-bold tracking-tight text-brand">ShipSathi</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 nav-link cursor-pointer">
              Solutions <ChevronDown className="h-4 w-4" />
            </div>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#enterprise" className="nav-link">Enterprise</a>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search rates..." 
              className="h-9 w-64 rounded-full bg-slate-100 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4 ml-2">
            <button className="p-2 text-slate-500 hover:text-brand transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-500 hover:text-brand transition-colors">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:ring-2 hover:ring-brand/20 transition-all">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
