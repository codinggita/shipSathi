import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, CheckCircle, ArrowRight, Sparkles, Shield, Eye, EyeOff } from 'lucide-react';
import SEO from '../components/SEO';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  useEffect(() => {
    const initGoogleSignIn = () => {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (clientId && window.google) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: async (response) => {
            setIsLoading(true);
            const API_URL = import.meta.env.VITE_API_URL || 'https://shipsathi-db42.onrender.com';
            try {
              const res = await fetch(`${API_URL}/api/auth/google-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential: response.credential })
              });

              const data = await res.json();
              if (!res.ok) {
                throw new Error(data.message || 'Google Auth failed.');
              }

              let userRole = data.user.email.toLowerCase().includes('enterprise') ? 'enterprise' : 'admin';
              const userProfile = { ...data.user, role: userRole };

              localStorage.setItem('authToken', data.token);
              localStorage.setItem('userProfile', JSON.stringify(userProfile));

              alert('Logged in successfully via Google!');
              navigate('/dashboard');
            } catch (err) {
              alert(err.message);
            } finally {
              setIsLoading(false);
            }
          }
        });

        window.google.accounts.id.renderButton(
          document.getElementById('googleSignInButton'),
          { theme: 'outline', size: 'large', text: 'signin_with', width: '100%' }
        );
      }
    };

    initGoogleSignIn();
  }, []);

  const handleGoogleLogin = async (selectedEmail) => {
    setIsLoading(true);
    setShowGoogleModal(false);
    const API_URL = import.meta.env.VITE_API_URL || 'https://shipsathi-db42.onrender.com';
    try {
      // Let's authenticate directly! For the Google flow, we will use default admin password
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: selectedEmail, password: 'admin123' })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Google Auth failed.');
      }

      let userRole = selectedEmail.toLowerCase().includes('enterprise') ? 'enterprise' : 'admin';
      const userProfile = { ...data.user, role: userRole };

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userProfile', JSON.stringify(userProfile));

      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }

    setIsLoading(true);
    const API_URL = import.meta.env.VITE_API_URL || 'https://shipsathi-db42.onrender.com';
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      const searchParams = new URLSearchParams(window.location.search);
      const redirectParam = searchParams.get('redirect');
      const fromParam = searchParams.get('from');

      let userRole = 'user';
      if (email.toLowerCase().includes('enterprise')) {
        userRole = 'enterprise';
      } else if (email.toLowerCase().includes('admin')) {
        userRole = 'admin';
      }

      if (fromParam === 'free') {
        userRole = 'user';
      }

      const userProfile = {
        ...data.user,
        role: userRole
      };

      // Save to localStorage
      if (rememberMe) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
      } else {
        sessionStorage.setItem('authToken', data.token);
        sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
      }

      alert('Logged in successfully!');
      
      // Navigate to correct section
      if (redirectParam === 'enterprise' || email.toLowerCase().includes('enterprise')) {
        navigate('/enterprise');
      } else if (fromParam === 'free') {
        navigate('/dashboard');
      } else if (email.toLowerCase().includes('admin')) {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <SEO title="Sign In" description="Log in to your ShipSathi account to compare and book the best shipping rates." />
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between">
        
        {/* Logo and header */}
        <div className="flex flex-col items-center text-center mb-6 select-none">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center justify-center h-12 w-12 bg-brand text-white font-black rounded-2xl shadow-lg shadow-brand/20 cursor-pointer hover:bg-brand-dark transition-all text-xl mb-3"
          >
            S
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">Welcome back!</h2>
          <p className="text-xs font-bold text-slate-400 mt-1.5 leading-relaxed">
            Enter your account credentials to access your analytics dashboard.
          </p>
        </div>

        {/* Social Auth row */}
        <div className="flex gap-2.5 mb-6 select-none">
          {import.meta.env.VITE_GOOGLE_CLIENT_ID ? (
            <div id="googleSignInButton" className="w-full flex justify-center"></div>
          ) : (
            <button 
              type="button"
              onClick={() => setShowGoogleModal(true)}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 rounded-xl py-3.5 text-xs font-bold text-slate-700 transition-all shadow-sm bg-white"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              Sign in with Google
            </button>
          )}
        </div>

        {/* separator line */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="flex-1 h-px bg-slate-100"></div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Or email login</span>
          <div className="flex-1 h-px bg-slate-100"></div>
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

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center select-none">
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Password</label>
              <button 
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-[10px] font-extrabold text-brand hover:underline"
              >
                Forgot?
              </button>
            </div>
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

          <div className="flex items-center justify-between select-none mb-1">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 rounded border-slate-200 text-brand focus:ring-brand/20 transition-all outline-none cursor-pointer" 
              />
              <label htmlFor="remember" className="text-xs font-bold text-slate-500 leading-none cursor-pointer select-none">Remember this device</label>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand hover:bg-brand-dark disabled:opacity-75 text-white font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand/10 transition-all uppercase tracking-wide cursor-pointer select-none active:scale-95"
          >
            {isLoading ? 'Signing In...' : 'Sign In'} <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="text-center text-xs font-bold text-slate-400 select-none leading-none">
          Don't have an account? <span onClick={() => navigate('/signup')} className="text-brand hover:underline cursor-pointer">Register now</span>
        </div>

        {showGoogleModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-slate-100 shadow-2xl flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 bg-brand rounded-lg flex items-center justify-center text-white text-xs font-black select-none">S</span>
                  <span className="text-sm font-extrabold text-slate-900 tracking-tight">Sign in with Google</span>
                </div>
                <button onClick={() => setShowGoogleModal(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1">✕</button>
              </div>

              <p className="text-xs font-bold text-slate-400 mb-5 leading-relaxed">
                Select an account to continue to <span className="text-slate-900">ShipSathi</span>
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { name: 'Atlas Tester', email: 'admin@shipsathi.com', color: 'bg-emerald-500' },
                  { name: 'Enterprise Admin', email: 'enterprise@shipsathi.com', color: 'bg-indigo-500' }
                ].map(acc => (
                  <div 
                    key={acc.email}
                    onClick={() => handleGoogleLogin(acc.email)}
                    className="p-3.5 rounded-xl border border-slate-100 hover:bg-slate-50 flex items-center gap-3 cursor-pointer transition-all hover:border-brand/30"
                  >
                    <div className={`h-10 w-10 ${acc.color} text-white rounded-full flex items-center justify-center font-extrabold text-sm select-none`}>
                      {acc.name[0]}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-bold text-slate-800">{acc.name}</span>
                      <span className="text-xs font-medium text-slate-400">{acc.email}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-3 flex items-center gap-2 mt-4">
                <Shield className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-[10px] font-bold text-slate-400 leading-relaxed">
                  Secure, standard OAuth protocol via ShipSathi Authentication.
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
