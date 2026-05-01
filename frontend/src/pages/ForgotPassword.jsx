import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    alert(`Reset password link has been sent to ${email}`);
    navigate('/login');
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
          <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">Forgot Password</h2>
          <p className="text-xs font-bold text-slate-400 mt-1.5 leading-relaxed">
            Enter your registered email address and we will send you secure reset instructions.
          </p>
        </div>

        {/* Email form inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-5">
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

          <button 
            type="submit"
            className="w-full bg-brand hover:bg-brand-dark text-white font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand/10 transition-all uppercase tracking-wide cursor-pointer select-none active:scale-95"
          >
            Send Reset Link <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="text-center text-xs font-bold text-slate-400 select-none leading-none">
          <span onClick={() => navigate('/login')} className="text-slate-400 hover:text-brand flex items-center justify-center gap-1.5 cursor-pointer">
            <ArrowLeft className="h-3 w-3" /> Back to sign in
          </span>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
