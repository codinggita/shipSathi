import React, { useState } from 'react';
import { 
  Plus, MapPin, ShoppingBag, Receipt, ChevronsRight, 
  Info, GripVertical, Lock, Play, History, TrendingUp, Terminal
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import SEO from '../components/Seo';

const Pricing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <SEO title="Pricing Rules" description="Set dynamic, automated pricing rules across local, regional, and national courier channels." />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Pricing Rule Engine</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Define dynamic logistics pricing logic based on geography, weight, and order type.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
              <Plus className="h-4 w-4" />
              Create New Rule
            </button>
          </header>

          <div className="flex flex-col xl:flex-row gap-8">
            
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Rule Configurator */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">Rule Configurator</h2>
                  <span className="px-3 py-1 bg-indigo-50 text-brand text-[10px] font-bold rounded-full tracking-wider">
                    DRAFT MODE
                  </span>
                </div>

                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-4 bottom-12 w-0.5 bg-slate-100 z-0"></div>

                  <div className="space-y-6">
                    {/* Step 1: Zone */}
                    <div className="flex gap-4 relative z-10">
                      <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                        <MapPin className="h-4 w-4 text-brand" />
                      </div>
                      <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-3">If Zone Is...</p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          <button className="px-4 py-2 rounded-full text-xs font-bold bg-brand/10 text-brand border border-brand/20">Local</button>
                          <button className="px-4 py-2 rounded-full text-xs font-medium bg-white text-slate-500 border border-slate-200 hover:border-slate-300">Regional</button>
                          <button className="px-4 py-2 rounded-full text-xs font-medium bg-white text-slate-500 border border-slate-200 hover:border-slate-300">National</button>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Weight */}
                    <div className="flex gap-4 relative z-10">
                      <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                        <ShoppingBag className="h-4 w-4 text-brand" />
                      </div>
                      <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-3">And Weight Band Is...</p>
                        <div className="flex gap-4">
                          <div className="flex-1 relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">Min (kg)</span>
                            <input type="text" defaultValue="0.5" className="w-full border border-slate-200 rounded-lg py-2.5 pl-16 pr-3 text-sm font-bold text-slate-900 outline-none focus:border-brand" />
                          </div>
                          <div className="flex-1 relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">Max (kg)</span>
                            <input type="text" defaultValue="2.0" className="w-full border border-slate-200 rounded-lg py-2.5 pl-16 pr-3 text-sm font-bold text-slate-900 outline-none focus:border-brand" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Order Type */}
                    <div className="flex gap-4 relative z-10">
                      <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                        <Receipt className="h-4 w-4 text-brand" />
                      </div>
                      <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-3">And Order Type Is...</p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          <button className="px-4 py-2 rounded-full text-xs font-medium bg-white text-slate-500 border border-slate-200 hover:border-slate-300">COD</button>
                          <button className="px-4 py-2 rounded-full text-xs font-bold bg-brand/10 text-brand border border-brand/20">Prepaid</button>
                          <button className="px-4 py-2 rounded-full text-xs font-medium bg-white text-slate-500 border border-slate-200 hover:border-slate-300">Any</button>
                        </div>
                      </div>
                    </div>

                    {/* Step 4: Action */}
                    <div className="flex gap-4 relative z-10">
                      <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                        <ChevronsRight className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 bg-white border-2 border-dashed border-brand/30 rounded-xl p-4 md:p-5 shadow-sm bg-brand/[0.02]">
                        <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-3">Then Apply Action...</p>
                        <div className="space-y-3">
                          <select className="w-full appearance-none border border-slate-200 rounded-lg py-2.5 px-3 text-sm font-bold text-slate-900 outline-none focus:border-brand bg-white shadow-sm">
                            <option>Add Margin (%)</option>
                            <option>Set Fixed Price</option>
                            <option>Discount (%)</option>
                          </select>
                          
                          <div className="flex items-center gap-3">
                            <div className="relative flex-[2]">
                              <input type="text" defaultValue="12.5" className="w-full border border-slate-200 rounded-lg py-2.5 px-3 pr-8 text-sm font-bold text-slate-900 outline-none focus:border-brand shadow-sm" />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">%</span>
                            </div>
                            <div className="flex-[3] text-xs font-medium text-slate-500">
                              of total manifest value
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="flex justify-end items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                  <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                    Cancel
                  </button>
                  <button className="px-8 py-2.5 rounded-xl text-sm font-bold text-white bg-brand hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all">
                    Save Rule
                  </button>
                </div>
              </div>

              {/* Rule Simulator */}
              <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 relative overflow-visible text-white shadow-xl shadow-slate-900/10">
                <div className="flex items-center gap-2 mb-6 opacity-70">
                  <Terminal className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Rule Simulator</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10">
                  <div>
                    <p className="text-xs font-medium text-slate-400 mb-1">Sample Package</p>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      1.2kg Regional<br/>Prepaid Order
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs font-medium text-slate-400 mb-1">Calculated Cost</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3">$42.18</h2>
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-lg border border-emerald-500/30">
                      Rule #PR-202 matched
                    </span>
                  </div>
                </div>

                {/* Floating Play Button */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <button className="h-16 w-16 bg-brand hover:bg-brand-light rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all hover:scale-105">
                    <Play className="h-6 w-6 ml-1 fill-white" />
                  </button>
                </div>
              </div>

              {/* KPI Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Active Rules</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4">24</h3>
                  </div>
                  <div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div className="h-full w-[75%] bg-brand rounded-full"></div>
                    </div>
                    <p className="text-[10px] font-medium text-slate-500">75% of capacity used</p>
                  </div>
                </div>

                <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Rule Efficiency</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4">99.2%</h3>
                  </div>
                  <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +2.4% vs last month
                  </p>
                </div>

                <div className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Revenue Impact</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">+$12.4k</h3>
                    <p className="text-[11px] font-medium text-slate-500">Attributed to dynamic pricing</p>
                  </div>
                  <div className="absolute right-6 bottom-6 opacity-5">
                    <Receipt className="h-16 w-16" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="w-full xl:w-[350px] space-y-6">
              
              {/* Rule Priority */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Rule Priority</h3>
                  <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <Info className="h-3.5 w-3.5" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-6">Drag to reorder. Top rules take precedence.</p>

                <div className="space-y-3">
                  {/* Card 1 */}
                  <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-white hover:border-slate-300 transition-colors cursor-pointer group">
                    <GripVertical className="h-4 w-4 text-slate-300 group-hover:text-slate-400 shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900">Premium National</h4>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">CONDITION: NATIONAL + COD</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-brand">+15%</span>
                      <p className="text-[9px] font-medium text-slate-400">Margin</p>
                    </div>
                  </div>

                  {/* Card 2 (Active) */}
                  <div className="border-2 border-brand/20 bg-brand/[0.02] rounded-xl p-4 flex items-center gap-4 relative overflow-hidden cursor-pointer group shadow-sm">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>
                    <GripVertical className="h-4 w-4 text-slate-300 group-hover:text-slate-400 shrink-0 ml-1" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900">Standard Local</h4>
                      <p className="text-[9px] font-bold text-brand/70 uppercase tracking-wider mt-0.5">CONDITION: LOCAL + &lt; 1KG</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-brand">$12.00</span>
                      <p className="text-[9px] font-medium text-brand/60">Fixed</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-white hover:border-slate-300 transition-colors cursor-pointer group">
                    <GripVertical className="h-4 w-4 text-slate-300 group-hover:text-slate-400 shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900">Bulk Regional</h4>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">CONDITION: &gt; 10KG</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-brand">Base</span>
                      <p className="text-[9px] font-medium text-slate-400">Rate</p>
                    </div>
                  </div>

                  {/* Card 4 (Fallback) */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4 cursor-not-allowed">
                    <Lock className="h-4 w-4 text-slate-300 shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-400 italic">Fallback Default</h4>
                      <p className="text-[9px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">NO MATCH FOUND</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-400">$25.00</span>
                      <p className="text-[9px] font-medium text-slate-300">Flat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Edited & Change Log */}
              <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <History className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Last Edited</p>
                    <p className="text-[10px] font-medium text-slate-500">Oct 24, 2023 by Sarah M.</p>
                  </div>
                </div>
                <button className="w-full bg-white border border-slate-200 text-brand text-sm font-bold py-2.5 rounded-xl hover:border-brand/30 hover:bg-brand/5 transition-all shadow-sm">
                  View Change Log
                </button>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Pricing;
