import React, { useState } from 'react';
import { 
  MapPin, Truck, Box, CreditCard, CheckCircle, Info, 
  ChevronRight, ArrowRight, ShieldCheck, HelpCircle, Layers, 
  Lock, Calendar, Star, Sparkles, MoveRight, Plus, Copy,
  BarChart2, Map
} from 'lucide-react';
import ProSidebar from '../components/ProSidebar';
import DashboardHeader from '../components/DashboardHeader';

const CreateShipment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentType, setPaymentType] = useState('prepaid');
  const [termsAccepted, setTermsAccepted] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText('SHP-8921-X9');
    alert('Tracking ID copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden text-slate-900 font-sans">
      <ProSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 transition-all max-w-full">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="mt-20 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          
          {step === 1 ? (
            <>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand mb-2">
                <span>Shipment Intake</span>
              </div>

              <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Create New Shipment</h1>
                  <p className="text-sm text-slate-500 font-medium mt-1">Enter pickup, delivery, and package details to get the best courier rates across our network.</p>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                  <button className="flex items-center justify-center bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                    Save Draft
                  </button>

                  <button 
                    onClick={() => setStep(2)}
                    className="flex items-center justify-center gap-2 bg-brand px-5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-brand-dark shadow-lg shadow-brand/20 transition-all"
                  >
                    Get Courier Options
                  </button>
                </div>
              </header>

              {/* Form Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* 1. Pickup Details */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col border-t-4 border-t-brand h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-brand">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-extrabold text-slate-900">1. Pickup Details</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Sender Name</label>
                      <input type="text" placeholder="e.g. John Doe" defaultValue="Alex Rivera" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone Number</label>
                      <input type="text" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 000-0000" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300" />
                    </div>
                  </div>

                  <div className="flex flex-col mb-4 flex-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Complete Address</label>
                    <textarea rows="3" placeholder="Building, Street, Area" defaultValue="San Francisco, CA, 94105" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300 resize-none flex-1"></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Pincode / Zip</label>
                      <input type="text" placeholder="10001" defaultValue="94105" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">City / State</label>
                      <input type="text" placeholder="New York, NY" defaultValue="San Francisco, CA" className="bg-indigo-50/40 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-700 placeholder:text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* 2. Delivery Details */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col border-t-4 border-t-amber-600 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                      <Truck className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-extrabold text-slate-900">2. Delivery Details</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Receiver Name</label>
                      <input type="text" placeholder="e.g. Jane Smith" defaultValue="Jane Doe" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone Number</label>
                      <input type="text" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300" />
                    </div>
                  </div>

                  <div className="flex flex-col mb-4 flex-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Complete Address</label>
                    <textarea rows="3" placeholder="Building, Street, Area" defaultValue="New York, NY, 10001" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300 resize-none flex-1"></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Pincode / Zip</label>
                      <input type="text" placeholder="90001" defaultValue="10001" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">City / State</label>
                      <input type="text" placeholder="Los Angeles, CA" defaultValue="New York, NY" className="bg-indigo-50/40 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-700 placeholder:text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* More Form Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* 3. Package Details */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between border-t-4 border-t-blue-500 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                      <Box className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-extrabold text-slate-900">3. Package Details</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 items-start">
                    {/* weight & dimensions */}
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Weight (KG)</label>
                        <div className="flex">
                          <input type="text" placeholder="12.5" defaultValue="12.5" className="bg-white border border-slate-200 rounded-l-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-brand/20 transition-all w-full flex-1" />
                          <span className="bg-slate-50 border border-l-0 border-slate-200 rounded-r-xl px-4 py-3 text-xs font-bold text-slate-400 flex items-center justify-center uppercase select-none">kg</span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Dimensions (L × W × H)</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder="l" defaultValue="40" className="bg-white border border-slate-200 rounded-xl px-2 py-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20 transition-all text-center flex-1 min-w-0" />
                          <input type="text" placeholder="w" defaultValue="30" className="bg-white border border-slate-200 rounded-xl px-2 py-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20 transition-all text-center flex-1 min-w-0" />
                          <input type="text" placeholder="h" defaultValue="25" className="bg-white border border-slate-200 rounded-xl px-2 py-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20 transition-all text-center flex-1 min-w-0" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 mt-2 tracking-wider uppercase select-none">All Measurements in cm</span>
                      </div>
                    </div>

                    {/* description */}
                    <div className="flex flex-col h-full">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Item Description</label>
                      <textarea rows="5" placeholder="List the items inside (e.g. 2x Electronics, 1x Clothing)" defaultValue="Electronics" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand/20 transition-all text-slate-800 placeholder:text-slate-300 resize-none h-full flex-1 min-h-[140px]"></textarea>
                    </div>
                  </div>
                </div>

                {/* 4. Payment Type */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col border-t-4 border-t-indigo-600 h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <h2 className="text-lg font-extrabold text-slate-900">4. Payment Type</h2>
                    </div>

                    {/* payment selection */}
                    <div className="flex p-1 bg-slate-100 rounded-xl gap-1 mb-6">
                      <button 
                        onClick={() => setPaymentType('prepaid')} 
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${paymentType === 'prepaid' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        <Layers className="h-4 w-4" />
                        Prepaid
                      </button>
                      <button 
                        onClick={() => setPaymentType('cod')} 
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${paymentType === 'cod' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        <Layers className="h-4 w-4" />
                        COD
                      </button>
                    </div>

                    {/* total fare card */}
                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl flex flex-col gap-3 mb-4">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-slate-400">Est. Base Fare</span>
                        <span className="font-extrabold text-slate-800">$124.50</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-slate-400">Fuel Surcharge</span>
                        <span className="font-extrabold text-slate-800">$5.23</span>
                      </div>
                      <div className="border-t border-slate-200/60 pt-3 flex justify-between items-center mt-1">
                        <span className="font-bold text-slate-500 text-xs uppercase tracking-wider">Grand Total</span>
                        <span className="text-2xl font-black text-indigo-600 tracking-tight">$167.24</span>
                      </div>
                    </div>

                    {/* exact rate calculated alert info */}
                    <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-100 px-4 py-3.5 rounded-xl text-slate-500 mb-2">
                      <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-[10px] font-bold text-slate-400 tracking-wide leading-relaxed">
                        Exact rates will be calculated after you select a courier partner in the next step.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Insured shipment & action button section */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
                      Insured Shipment
                      <span className="text-xs font-normal text-slate-400 flex items-center gap-1 before:content-['|'] before:mr-1 before:text-slate-300">
                        Tracking ID will be generated upon confirmation
                      </span>
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark px-6 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-brand/20 transition-all select-none self-end md:self-center"
                >
                  Get Courier Options
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : step === 2 ? (
            /* Step 2: Confirm Shipment */
            <>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand mb-2">
                <span>Shipments</span>
                <span className="text-slate-300">/</span>
                <span>New Shipment</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-500">Confirmation</span>
              </div>

              <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Confirm Shipment</h1>
                  <p className="text-sm text-slate-500 font-medium mt-1">Please review your shipment details and selected courier.</p>
                </div>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Left Columns (selected courier, route details, package spec) */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {/* Selected Courier Card */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between border-t-4 border-t-brand relative">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 select-none">Selected Courier</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Best Value
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 bg-slate-900 rounded-xl flex items-center justify-center shrink-0 border border-slate-800 font-extrabold text-xs text-white uppercase tracking-wider select-none text-center leading-none p-1">
                          Courier
                        </div>
                        <div className="flex flex-col leading-tight">
                          <span className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">FastTrack Express</span>
                          <span className="text-xs font-bold text-slate-400 mt-1 flex items-center gap-1">
                            Premium Air Freight <span className="text-slate-300">•</span> <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> 4.9/5.0
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:text-right leading-tight">
                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Delivery Estimate</span>
                        <span className="text-base lg:text-lg font-black text-brand mt-1">24 - 48 Hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Route Details Card */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between border-t-4 border-t-amber-500 relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 select-none">Route Details</span>
                    </div>

                    <div className="flex items-center justify-between gap-4 px-2 py-4 relative">
                      {/* starting point */}
                      <div className="flex flex-col items-center text-center">
                        <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-brand border-2 border-brand/20 shrink-0">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-800 mt-3 leading-none">San Francisco</span>
                        <span className="text-[10px] font-bold text-slate-400 mt-1 leading-none uppercase tracking-wider">CA, 94105</span>
                      </div>

                      {/* Moving Truck or line */}
                      <div className="flex-1 flex flex-col items-center justify-center relative px-2">
                        <div className="w-full h-0.5 bg-slate-100 border-t-2 border-dashed border-slate-300"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 h-8 w-8 bg-brand text-white rounded-xl border border-brand-dark flex items-center justify-center shadow-md select-none transform rotate-12">
                          <Truck className="h-4 w-4" />
                        </div>
                      </div>

                      {/* ending point */}
                      <div className="flex flex-col items-center text-center">
                        <div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 border-2 border-amber-500/20 shrink-0">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-800 mt-3 leading-none">New York</span>
                        <span className="text-[10px] font-bold text-slate-400 mt-1 leading-none uppercase tracking-wider">NY, 10001</span>
                      </div>
                    </div>
                  </div>

                  {/* Package Specification Card */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between border-t-4 border-t-blue-500 relative">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 select-none">Package Specification</span>
                      <button 
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-brand hover:underline flex items-center gap-1 select-none"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 select-none">Weight</span>
                        <span className="text-base font-black text-slate-900">12.5 kg</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 select-none">Dimensions</span>
                        <span className="text-base font-black text-slate-900">40×30×25 cm</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 select-none">Items</span>
                        <span className="text-base font-black text-slate-900">3 Units</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 select-none">Content</span>
                        <span className="text-base font-black text-slate-900">Electronics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (payment summary, confirm action) */}
                <div className="flex flex-col gap-6">
                  {/* Payment Summary */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col border-t-4 border-t-indigo-600 h-full">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-extrabold text-slate-900 leading-tight">Payment Summary</h2>
                    </div>
                    <p className="text-[11px] font-medium text-slate-400 mb-6 leading-relaxed select-none">Charges calculated for priority handling.</p>

                    <div className="flex flex-col gap-3.5 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-slate-400">Base Shipping Rate</span>
                        <span className="font-extrabold text-slate-800">$124.50</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-slate-400">Fuel Surcharge (4.2%)</span>
                        <span className="font-extrabold text-slate-800">$5.23</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-slate-400">Insurance Coverage</span>
                        <span className="font-extrabold text-red-600">+$12.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-slate-400">GST / Local Taxes (18%)</span>
                        <span className="font-extrabold text-slate-800">$25.51</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-200/60 pt-4 flex items-center justify-between mb-4">
                      <div className="flex flex-col leading-none">
                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1 select-none">Total Payable</span>
                        <h3 className="text-3xl font-black text-indigo-600 tracking-tight">$167.24</h3>
                      </div>
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100 select-none flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Save $12.40
                      </span>
                    </div>

                    {/* price includes note box */}
                    <div className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-slate-500 mb-6">
                      <span className="text-indigo-500 shrink-0 mt-0.5"><Info className="h-4 w-4" /></span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wide leading-relaxed">
                        Price includes real-time tracking and signature on delivery as standard for ShipSathi Pro users.
                      </span>
                    </div>

                    {/* Terms checkbox */}
                    <div className="flex items-start gap-2 mb-6">
                      <input 
                        type="checkbox" 
                        id="terms"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                        className="h-4 w-4 mt-0.5 rounded border-slate-200 text-indigo-600 focus:ring-brand/20 transition-all outline-none cursor-pointer" 
                      />
                      <label htmlFor="terms" className="text-xs font-bold text-slate-500 leading-relaxed tracking-normal select-none">
                        I agree to the <span className="text-indigo-600 hover:underline">Terms of Service</span> and <span className="text-indigo-600 hover:underline">Shipping Guidelines</span>.
                      </label>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => setStep(3)}
                        disabled={!termsAccepted}
                        className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold text-xs lg:text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand/20 transition-all select-none uppercase tracking-wide cursor-pointer active:scale-95"
                      >
                        <Lock className="h-4 w-4" />
                        Confirm & Book Shipment
                      </button>

                      <button 
                        onClick={() => setStep(1)}
                        className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs lg:text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all select-none uppercase tracking-wide cursor-pointer shadow-sm active:scale-95"
                      >
                        Save as Draft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Step 3: Confirmation */
            <>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mt-6">
                
                {/* Left side checkmark & basic shipment cards */}
                <div className="lg:col-span-3 flex flex-col">
                  
                  {/* checkmark circle */}
                  <div className="h-20 w-20 bg-indigo-50/60 rounded-full flex items-center justify-center border border-indigo-100 shadow-sm mb-6 select-none">
                    <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow shadow-indigo-600/30">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                    Shipment Booked <br className="hidden sm:block" /> Successfully 🎉
                  </h1>
                  <p className="text-sm font-medium text-slate-500 max-w-md leading-relaxed mb-8">
                    Your shipment is scheduled and the courier has been notified. You can now track its journey in real-time.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Courier Partner */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between h-32 hover:border-brand/20 transition-all">
                      <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 select-none">Courier Partner</span>
                      <div className="flex items-center gap-3.5 mt-2">
                        <div className="h-11 w-11 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-xs font-extrabold tracking-widest text-slate-400 shrink-0 select-none">
                          Courier
                        </div>
                        <span className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">ShipSathi Pro</span>
                      </div>
                    </div>

                    {/* Tracking ID */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between h-32 hover:border-brand/20 transition-all">
                      <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 select-none">Tracking ID</span>
                      <div className="flex items-center justify-between gap-2 mt-2">
                        <span className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">SHP-8921-X9</span>
                        <button 
                          onClick={handleCopy}
                          className="h-9 w-9 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:text-brand transition-colors select-none"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Delivery Card */}
                  <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1 select-none">Estimated Delivery</span>
                        <span className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">Thursday, Oct 24, 2023</span>
                      </div>
                    </div>

                    <span className="px-3 py-1.5 bg-brand text-white text-[10px] font-extrabold rounded-xl uppercase tracking-wider select-none shadow-sm shadow-brand/10 inline-flex items-center self-start sm:self-center">
                      Priority Service
                    </span>
                  </div>

                  {/* Bottom actions */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => alert('Opening tracking console...')}
                      className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark px-6 py-3.5 rounded-xl text-xs font-bold text-white shadow-md shadow-brand/10 transition-all select-none"
                    >
                      <BarChart2 className="h-4 w-4" /> Track Shipment
                    </button>
                    <button 
                      onClick={() => setStep(1)}
                      className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-600 shadow-sm transition-all select-none"
                    >
                      <Plus className="h-4 w-4" /> Create New Shipment
                    </button>
                  </div>

                </div>

                {/* Right Column: Route Overview */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {/* Route Overview card */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between select-none">
                    <div className="flex justify-between items-center mb-5">
                      <h3 className="font-extrabold text-slate-900 text-lg lg:text-xl">Route Overview</h3>
                      <Map className="h-4 w-4 text-slate-400" />
                    </div>

                    {/* Dark map-like placeholder container */}
                    <div className="bg-slate-500/80 aspect-[4/3] rounded-2xl flex flex-col items-center justify-center p-6 text-white mb-6 relative overflow-hidden">
                      {/* abstract lines */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                      <div className="flex items-center gap-10 lg:gap-14 z-10 select-none">
                        <div className="flex flex-col items-center">
                          <div className="h-9 w-9 bg-brand border-2 border-white rounded-full flex items-center justify-center text-white shadow-md">
                            <MapPin className="h-4 w-4" />
                          </div>
                        </div>

                        <div className="h-0.5 border-t-2 border-dashed border-white/40 flex items-center justify-center w-20 relative">
                          <div className="h-7 w-7 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center">
                            <Truck className="h-3 w-3 text-white" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="h-9 w-9 bg-amber-500 border-2 border-white rounded-full flex items-center justify-center text-white shadow-md">
                            <MapPin className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* origin destination breakdown */}
                    <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-400 select-none">Origin</span>
                        <span className="font-extrabold text-slate-800 tracking-tight">Port of Long Beach, CA</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-400 select-none">Destination</span>
                        <span className="font-extrabold text-slate-800 tracking-tight">Chicago Distribution Center, IL</span>
                      </div>
                    </div>
                  </div>

                  {/* Confirmation email alert box */}
                  <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-100/60 p-4 rounded-2xl text-amber-900 select-none">
                    <Info className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-bold tracking-wide leading-relaxed text-amber-800">
                      A confirmation email has been sent to <span className="font-extrabold text-slate-900">logistics@company.com</span>
                    </span>
                  </div>

                </div>

              </div>
            </>
          )}

          {/* Copyright Section */}
          <footer className="text-center text-xs font-bold text-slate-400 tracking-wide mt-4 pb-2">
            © 2024 ShipSathi Pro. All rights reserved. Precise Logistics Solutions.
          </footer>

        </main>
      </div>
    </div>
  );
};

export default CreateShipment;
