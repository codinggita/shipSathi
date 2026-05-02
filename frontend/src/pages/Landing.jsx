import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Brain, LayoutGrid, BarChart3, Calculator } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardPreview from '../components/DashboardPreview';

const Landing = () => {
  const navigate = useNavigate();
  const fadeInUp = {

    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            
            {/* Hero Text */}
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-600 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                </span>
                NEW: AI-OPTIMIZER V2.0
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-8 leading-tight">
                Compare Courier Rates in <span className="gradient-text italic">Seconds</span>, Not Hours
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                Streamline your logistics workflow with enterprise-grade aggregation. Save 15-25% on every shipment as our AI picks the most efficient courier for your specific route and timeline.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => {
                    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
                    if (token) {
                      navigate('/dashboard');
                    } else {
                      navigate('/signup');
                    }
                  }}
                  className="btn-primary flex items-center justify-center gap-2 select-none cursor-pointer"
                >
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </button>
                <button className="btn-secondary">View Demo</button>
              </div>


              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">
                  Joined by <span className="text-slate-900 font-bold">2,500+</span> logistics managers this month
                </p>
              </div>
            </motion.div>

            {/* Hero Graphic */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl"></div>
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              Engineered for Logistics Speed
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From startups to enterprise giants, ShipSathi scales with your shipping volume.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Zap className="h-6 w-6" />, title: 'Real-Time Aggregation', desc: 'Instant access to live pricing from hundreds of carriers without leaving your dashboard.', color: 'bg-indigo-50 text-indigo-600' },
              { icon: <Brain className="h-6 w-6" />, title: 'AI Recommendations', desc: 'Smart algorithms analyze weight, destination, and urgency to find the perfect carrier match.', color: 'bg-purple-50 text-purple-600' },
              { icon: <LayoutGrid className="h-6 w-6" />, title: 'Bulk Processing', desc: 'Upload manifests and generate thousands of labels in a single click with automated workflows.', color: 'bg-blue-50 text-blue-600' },
              { icon: <BarChart3 className="h-6 w-6" />, title: 'Cost Analytics', desc: 'Deep dive into your shipping spend with visualization tools designed for CFO-level reporting.', color: 'bg-violet-50 text-violet-600' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand/20 hover:shadow-premium transition-all"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-brand py-16 px-8 lg:px-16 shadow-2xl">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                  Measurable Impact for Your Supply Chain
                </h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-lg leading-relaxed">
                  We don't just talk about efficiency. We deliver it through data-driven precision that transforms logistics from a cost center to a competitive advantage.
                </p>
                <button className="bg-white text-brand px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2 group active:scale-95">
                  Calculate Your Savings <Calculator className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '22%', label: 'AVG. COST REDUCTION' },
                  { value: '14h', label: 'TIME SAVED PER WEEK' },
                  { value: '99.9%', label: 'RATE ACCURACY' },
                  { value: '200+', label: 'CARRIER INTEGRATIONS' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
                    <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold text-indigo-200 tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              Flexible Plans for Every Scale
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From startups to enterprise giants, ShipSathi scales with your shipping volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand/20 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Starter</h3>
              <p className="text-xs text-slate-500 mb-6">Perfect for growing e-commerce stores.</p>
              <p className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$49</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </p>
              <ul className="space-y-4 mb-10">
                <FeatureItem text="500 Shipments /mo" />
                <FeatureItem text="10 Carrier Integrations" />
                <FeatureItem text="Email Support" />
                <FeatureItem text="AI Route Optimizer" inactive />
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-all">
                Choose Starter
              </button>
            </div>

            {/* Growth */}
            <div className="relative p-8 rounded-2xl border-2 border-brand bg-white shadow-xl scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Recommended
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Growth</h3>
              <p className="text-xs text-slate-500 mb-6">For scaling logistics teams.</p>
              <p className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </p>
              <ul className="space-y-4 mb-10">
                <FeatureItem text="5,000 Shipments /mo" />
                <FeatureItem text="Unlimited Carriers" />
                <FeatureItem text="24/7 Priority Support" />
                <FeatureItem text="AI Route Optimizer" />
                <FeatureItem text="Bulk Manifest Processing" />
              </ul>
              <button className="w-full py-4 rounded-xl bg-brand text-white font-bold shadow-lg hover:bg-brand-dark transition-all">
                Choose Growth
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand/20 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Pro</h3>
              <p className="text-xs text-slate-500 mb-6">Full enterprise-grade control.</p>
              <p className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$499</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </p>
              <ul className="space-y-4 mb-10">
                <FeatureItem text="Unlimited Shipments" />
                <FeatureItem text="Custom API Access" />
                <FeatureItem text="Dedicated Account Manager" />
                <FeatureItem text="Custom BI Integrations" />
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureItem = ({ text, inactive }) => (
  <li className={`flex items-center gap-3 text-sm ${inactive ? 'text-slate-300' : 'text-slate-600'}`}>
    <div className={`flex h-5 w-5 items-center justify-center rounded-full ${inactive ? 'bg-slate-100' : 'bg-green-100 text-green-600'}`}>
      {inactive ? <div className="h-1.5 w-1.5 bg-slate-400 rounded-full"></div> : <Check className="h-3 w-3" />}
    </div>
    {text}
  </li>
);

export default Landing;
