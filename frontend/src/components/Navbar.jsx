import React, { useState } from 'react';
import { Search, Bell, HelpCircle, User, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

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
            <Link to="/" className="flex items-center gap-1 nav-link cursor-pointer hover:text-brand transition-colors">
              Solutions <ChevronDown className="h-4 w-4" />
            </Link>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/enterprise" className="nav-link cursor-pointer hover:text-brand transition-colors">Enterprise</Link>
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
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:ring-2 hover:ring-brand/20 transition-all select-none cursor-pointer"
              >
                <User className="h-5 w-5" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50 select-none animate-in fade-in zoom-in duration-200">
                  <button 
                    onClick={() => { setIsProfileOpen(false); navigate('/login'); }}
                    className="w-full text-left px-4 py-2.5 text-xs font-extrabold text-slate-700 hover:bg-slate-50 hover:text-brand transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => { setIsProfileOpen(false); navigate('/signup'); }}
                    className="w-full text-left px-4 py-2.5 text-xs font-extrabold text-slate-700 hover:bg-slate-50 hover:text-brand transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Signup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
