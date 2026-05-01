import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Truck, FileText, 
  Settings, BarChart2, Package, HelpCircle, LogOut, Layers
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Users className="h-5 w-5" />, label: 'Users', path: '/users' },
    { icon: <Truck className="h-5 w-5" />, label: 'Couriers', path: '/couriers' },
    { icon: <FileText className="h-5 w-5" />, label: 'Pricing Rules', path: '/pricing' },
    { icon: <Package className="h-5 w-5" />, label: 'Order Management', path: '/orders' },
    { icon: <BarChart2 className="h-5 w-5" />, label: 'Analytics', path: '/analytics' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside className={`fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white flex flex-col pt-8 pb-6 px-4 z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-2 mb-10">
          <div 
            onClick={() => { navigate('/'); onClose?.(); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold group-hover:bg-brand-dark transition-colors">S</div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-brand group-hover:text-brand-dark transition-colors">ShipSathi</span>
              <span className="text-[10px] font-medium text-slate-400">Admin Console</span>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:text-slate-900">
            <LogOut className="h-5 w-5 rotate-180" />
          </button>
        </div>
        
        {/* Nav Items */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <button 
                key={idx}
                onClick={() => { navigate(item.path); onClose?.(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                  ? 'bg-brand/5 text-brand shadow-sm font-bold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>


        {/* Bottom Actions - Same as before */}
        <div className="pt-6 border-t border-slate-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-all">
            <HelpCircle className="h-5 w-5" />
            Support
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all">
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};


export default Sidebar;
