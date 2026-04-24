import React from 'react';
import { Github, Twitter, Linkedin, Globe, Share2, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold text-sm">S</div>
              <span className="text-xl font-bold tracking-tight text-brand">ShipSathi</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Revolutionizing global logistics through intelligent automation and real-time data aggregation. Built for the modern supply chain.
            </p>
            <div className="mt-6 flex gap-4">
              <Share2 className="h-5 w-5 text-slate-400 hover:text-brand cursor-pointer transition-colors" />
              <Star className="h-5 w-5 text-slate-400 hover:text-brand cursor-pointer transition-colors" />
              <Globe className="h-5 w-5 text-slate-400 hover:text-brand cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Rate Comparison</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">AI Optimizer</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Enterprise API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Logistics Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © 2024 ShipSathi Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-slate-500 hover:text-slate-900 text-xs cursor-pointer transition-colors">
              English (US) <ChevronDown className="h-3 w-3" />
            </div>
            <a href="#" className="text-slate-500 hover:text-slate-900 text-xs transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper for ChevronDown since it's used in the footer too
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default Footer;
