import React, { useState } from 'react';
import { 
  Sparkles, Layers, CheckCircle, Info, Star, Filter, 
  ArrowUpDown, ChevronDown, Award, TrendingUp, AlertCircle
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const RateComparison = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [paymentType, setPaymentType] = useState('prepaid');
  const [pickup, setPickup] = useState('110001');
  const [delivery, setDelivery] = useState('400001');
  const [weight, setWeight] = useState('2.5');

  const carriers = [
    {
      id: 'DL',
      name: 'Delhivery Surface',
      tag: 'RECOMMENDED',
      time: '2-3 Days',
      est: 'Expected by Friday',
      rating: '4.8',
      reviews: '2.4k',
      cod: '₹0.00',
      cost: '₹156.00',
      note: 'All Inclusive'
    },
    {
      id: 'BD',
      name: 'BlueDart Air',
      tag: 'FASTEST',
      time: 'Next Day',
      est: 'Expected by Tomorrow',
      rating: '4.9',
      reviews: '5.1k',
      cod: '₹50.00',
      cost: '₹342.00',
      note: 'Priority Handling'
    },
    {
      id: 'EX',
      name: 'Ecom Express',
      tag: 'CHEAPEST',
      time: '5-7 Days',
      est: 'Expected by next Tuesday',
      rating: '4.1',
      reviews: '1.2k',
      cod: '₹20.00',
      cost: '₹134.00',
      note: 'Economic Route'
    },
    {
      id: 'XM',
      name: 'XpressBees',
      tag: null,
      time: '3-4 Days',
      est: 'Expected by Saturday',
      rating: '4.3',
      reviews: '3.1k',
      cod: '₹0.00',
      cost: '₹182.00',
      note: 'Standard Rate'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <ProSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Rate Comparison</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Find the best shipping rates across 25+ courier partners in seconds.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col h-full justify-between">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Pickup Pincode</label>
                    <input 
                      type="text" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="110001" 
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Delivery Pincode</label>
                    <input 
                      type="text" 
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                      placeholder="400001" 
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Weight (KG)</label>
                    <input 
                      type="text" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="2.5" 
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Dimensions (L X B X H CM) - Optional</label>
                    <div className="grid grid-cols-3 gap-2">
                      <input type="text" placeholder="L" className="bg-white border border-slate-200 rounded-xl px-2 py-3.5 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20 transition-all text-center min-w-0" />
                      <input type="text" placeholder="B" className="bg-white border border-slate-200 rounded-xl px-2 py-3.5 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20 transition-all text-center min-w-0" />
                      <input type="text" placeholder="H" className="bg-white border border-slate-200 rounded-xl px-2 py-3.5 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20 transition-all text-center min-w-0" />
                    </div>
                  </div>
                </div>

                {/* payment type select info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 bg-indigo-50 rounded-xl flex items-center justify-center text-brand">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider select-none">Payment Type</span>
                      <span className="text-[10px] font-bold text-slate-400 select-none">Prepaid gets additional 2% discount</span>
                    </div>
                  </div>

                  <div className="flex p-1 bg-slate-200/60 rounded-xl gap-1 shrink-0 select-none">
                    <button 
                      onClick={() => setPaymentType('prepaid')}
                      className={`px-4 py-2 text-xs font-extrabold tracking-wide rounded-lg transition-all ${paymentType === 'prepaid' ? 'bg-white text-brand shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Prepaid
                    </button>
                    <button 
                      onClick={() => setPaymentType('cod')}
                      className={`px-4 py-2 text-xs font-extrabold tracking-wide rounded-lg transition-all ${paymentType === 'cod' ? 'bg-white text-brand shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      COD
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand hover:bg-brand-dark text-white font-extrabold text-sm py-4 rounded-xl shadow-lg shadow-brand/20 transition-all uppercase tracking-wide active:scale-95">
                Compare Rates
              </button>
            </div>

            {/* AI Recommendation Column */}
            <div className="flex flex-col gap-6">
              {/* AI recommendation card */}
              <div className="bg-gradient-to-br from-indigo-600 to-brand text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-[210px] relative overflow-hidden select-none group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-all">
                  <Award className="h-44 w-44 text-white" />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-wider text-white flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="h-3 w-3" /> AI Recommended Courier
                  </span>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight">Delhivery</h3>
                    <p className="text-xs font-bold text-indigo-100/90 mt-1">Reliable & Cost-Effective</p>
                  </div>

                  <div className="text-right flex flex-col">
                    <span className="text-3xl font-black text-white">₹156</span>
                    <span className="text-[10px] font-bold text-indigo-100">Incl. Taxes</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs font-bold text-indigo-50 mt-4">
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] font-black uppercase text-indigo-200 tracking-wider mb-1">Delivery Time</span>
                    <span className="text-sm font-black text-white">2-3 Days</span>
                  </div>
                  <div className="flex flex-col leading-none text-right">
                    <span className="text-[9px] font-black uppercase text-indigo-200 tracking-wider mb-1">Success Rate</span>
                    <span className="text-sm font-black text-white">98.2%</span>
                  </div>
                </div>
              </div>

              {/* Your Selection Summary Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-[280px]">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base mb-4">Your Selection</h3>
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-400">Base Shipping Rate</span>
                      <span className="font-extrabold text-slate-800">₹132.20</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-400">Fuel Surcharge</span>
                      <span className="font-extrabold text-slate-800">₹12.50</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-400">GST (18%)</span>
                      <span className="font-extrabold text-slate-800">₹26.04</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest leading-none select-none">Total Payable</span>
                    <span className="text-xl font-black text-indigo-600">₹170.74</span>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100/60 px-3.5 py-2.5 rounded-xl text-emerald-900 flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[10px] font-bold text-emerald-700 tracking-wide leading-relaxed">
                      You're saving <span className="font-black text-emerald-600">₹24.00</span> compared to the average marketplace rate.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower section: Comparison Results */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-slate-900 text-lg lg:text-xl">Comparison Results</h3>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                  <Filter className="h-3 w-3" /> Filters
                </button>
                <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                  <ArrowUpDown className="h-3 w-3" /> Sort by Price
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100 select-none">
                    <th className="px-6 md:px-8 py-4">Courier Partner</th>
                    <th className="px-6 md:px-8 py-4">Delivery Time</th>
                    <th className="px-6 md:px-8 py-4">Rating</th>
                    <th className="px-6 md:px-8 py-4">COD Charges</th>
                    <th className="px-6 md:px-8 py-4">Shipping Cost</th>
                    <th className="px-6 md:px-8 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {carriers.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50/50 transition-colors cursor-default">
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-indigo-50 text-brand text-xs font-black rounded-xl border border-indigo-100 flex items-center justify-center shrink-0">
                            {c.id}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800 flex items-center gap-2">
                              {c.name}
                              {c.tag && (
                                <span className={`px-2 py-0.5 text-[8px] font-extrabold rounded-md border ${
                                  c.tag === 'RECOMMENDED' ? 'bg-brand text-white border-brand' :
                                  c.tag === 'FASTEST' ? 'bg-blue-500 text-white border-blue-500' :
                                  'bg-amber-500 text-white border-amber-500'
                                }`}>
                                  {c.tag}
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-800">{c.time}</span>
                          <span className="text-[10px] font-bold text-slate-400 mt-0.5">{c.est}</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex items-center gap-1.5">
                          <span className="flex items-center gap-1 text-amber-500 text-xs font-extrabold">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {c.rating}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400">({c.reviews})</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-xs font-extrabold text-slate-700">
                        {c.cod}
                      </td>
                      <td className="px-6 md:px-8 py-5">
                        <div className="flex flex-col">
                          <span className="text-base font-black text-emerald-600">{c.cost}</span>
                          <span className="text-[9px] font-bold text-slate-400 mt-0.5 uppercase tracking-wide">{c.note}</span>
                        </div>
                      </td>
                      <td className="px-6 md:px-8 py-5 text-right">
                        <button className="bg-brand hover:bg-brand-dark px-4 py-2 rounded-xl text-xs font-extrabold text-white transition-all select-none shadow-sm active:scale-95">
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default RateComparison;
