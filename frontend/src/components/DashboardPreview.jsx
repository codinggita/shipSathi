import React from 'react';
import { Plane, Ship, Truck, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardPreview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-lg lg:max-w-[580px] rounded-2xl border border-slate-200 bg-white p-4 shadow-premium lg:p-6 hero-gradient overflow-hidden"
    >

      {/* Window Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
        </div>
        <span className="text-[10px] font-medium text-slate-400/80 uppercase tracking-widest">ShipSathi Pro — Rate Dashboard</span>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {/* Best Value Highlight */}
        <div className="relative overflow-hidden rounded-xl border border-brand bg-brand/5 p-4 transition-all hover:bg-brand/10 group cursor-default">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white shadow-sm">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-0.5">Best Value</p>
                <h4 className="font-semibold text-slate-900">SwiftExpress Global</h4>
                <p className="text-xs text-slate-500">Arrives in 3 days</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-brand">$42.15</p>
              <p className="text-[10px] text-slate-400 font-medium">STANDARD RATE</p>
            </div>
          </div>
        </div>

        {/* Other Options */}
        <div className="space-y-2">
          {[
            { icon: <Plane className="h-4 w-4" />, name: 'SkyCargo Priority', price: '$89.00', color: 'text-blue-500' },
            { icon: <Ship className="h-4 w-4" />, name: 'Oceanic Bulk', price: '$12.40', color: 'text-indigo-500' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all cursor-default">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-slate-100 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-slate-700">{item.name}</span>
              </div>
              <span className="text-sm font-bold text-slate-900">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Analytics Feed Visualization */}
        <div className="mt-6 rounded-xl border-2 border-dashed border-slate-100 p-8 flex flex-col items-center justify-center">
          <div className="h-2 w-32 bg-slate-100 rounded-full mb-3"></div>
          <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Real-Time Analytics Feed</p>
          <div className="mt-4 flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-1.5 w-8 bg-slate-100/50 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPreview;
