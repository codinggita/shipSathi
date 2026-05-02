import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, CheckCircle, Sparkles, Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const fromParam = searchParams.get('from');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert('Please fill in all your details.');
      return;
    }
    if (!termsAccepted) {
      alert('You must accept the terms and conditions.');
      return;
    }

    setIsLoading(true);
    const API_URL = import.meta.env.VITE_API_URL || 'https://shipsathi-db42.onrender.com';
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.');
      }

      alert('Account created successfully! Please log in.');
      if (fromParam) {
        navigate(`/login?from=${fromParam}`);
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between">
        
        {/* Logo and header */}
        <div className="flex flex-col items-center text-center mb-6 select-none">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center justify-center h-12 w-12 bg-brand text-white font-black rounded-2xl shadow-lg shadow-brand/20 cursor-pointer hover:bg-brand-dark transition-all text-xl mb-3"
          >
            S
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">Get Started</h2>
          <p className="text-xs font-bold text-slate-400 mt-1.5 leading-relaxed">
            Set up your free account to compare 25+ courier partners.
          </p>
        </div>

        {/* Social signup row */}
        <div className="flex gap-2.5 mb-5 select-none">
          <button 
            onClick={() => alert('Signing up with Google...')}
            className="flex-1 flex items-center justify-center gap-2 border border-slate-200/80 hover:bg-slate-50 rounded-xl py-3 text-xs font-bold text-slate-600 transition-all shadow-sm bg-white"
          >
            Google
          </button>
          <button 
            onClick={() => alert('Signing up with Microsoft...')}
            className="flex-1 flex items-center justify-center gap-2 border border-slate-200/80 hover:bg-slate-50 rounded-xl py-3 text-xs font-bold text-slate-600 transition-all shadow-sm bg-white"
          >
            Microsoft
          </button>
        </div>

        {/* separator line */}
        <div className="flex items-center gap-3 mb-5 select-none">
          <div className="flex-1 h-px bg-slate-100"></div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Or email signup</span>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 select-none">Full Name</label>
            <div className="flex relative">
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Alex Rivera" 
                className="bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm font-bold text-slate-800 outline-none rounded-xl focus:ring-2 focus:ring-brand/20 transition-all w-full" 
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 select-none">
                <User className="h-4.5 w-4.5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 select-none">Email Address</label>
            <div className="flex relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com" 
                className="bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm font-bold text-slate-800 outline-none rounded-xl focus:ring-2 focus:ring-brand/20 transition-all w-full" 
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 select-none">
                <Mail className="h-4.5 w-4.5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 select-none">Password</label>
            <div className="flex relative">
              <input 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="bg-white border border-slate-200 pl-11 pr-11 py-3.5 text-sm font-bold text-slate-800 outline-none rounded-xl focus:ring-2 focus:ring-brand/20 transition-all w-full" 
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 select-none">
                <Lock className="h-4.5 w-4.5" />
              </div>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 select-none transition-colors"
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-1 select-none">
            <input 
              type="checkbox" 
              id="terms" 
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="h-4 w-4 rounded border-slate-200 text-brand focus:ring-brand/20 transition-all outline-none cursor-pointer mt-0.5" 
            />
            <label htmlFor="terms" className="text-xs font-bold text-slate-500 leading-relaxed cursor-pointer select-none">
              I agree to the <span className="text-brand hover:underline">Terms of Service</span> and <span className="text-brand hover:underline">Privacy Policy</span>.
            </label>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand hover:bg-brand-dark disabled:opacity-75 text-white font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand/10 transition-all uppercase tracking-wide cursor-pointer select-none active:scale-95 mt-1"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'} <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="text-center text-xs font-bold text-slate-400 select-none leading-none">
          Already have an account? <span onClick={() => navigate(fromParam ? `/login?from=${fromParam}` : '/login')} className="text-brand hover:underline cursor-pointer">Sign in</span>
        </div>

      </div>
    </div>
  );
};

export default Signup;
