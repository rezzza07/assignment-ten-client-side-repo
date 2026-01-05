import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Send, Sparkles, Bell, ShieldCheck, Zap, Palette } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Welcome to the inner circle! Check your inbox soon.');
    setEmail('');
  };

  const gradientText = "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent";

  return (
    <section className="relative py-32 overflow-hidden px-4">
      
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950 -z-20"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        
        <div className="hidden lg:block absolute -top-12 -left-12 animate-bounce transition-all duration-1000">
           <div className="p-4 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl rotate-12 border border-gray-200 dark:border-gray-700">
              <Palette className="w-8 h-8 text-orange-500" />
           </div>
        </div>
        <div className="hidden lg:block absolute -bottom-8 -right-8 animate-pulse">
           <div className="p-4 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl -rotate-12 border border-gray-200 dark:border-gray-700">
              <Zap className="w-8 h-8 text-purple-500" />
           </div>
        </div>

        <div className="relative bg-slate-900 dark:bg-black rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
          
     
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-purple-600/10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
          
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-pink-400 text-xs font-black uppercase tracking-[0.2em] border border-white/10">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                Inner Circle Access
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Don't just watch <br /> 
                <span className={gradientText}>Own the Future</span>
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                Be the first to know when legendary pieces drop. Join 15,000+ collectors worldwide.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_orange]"></div>
                  Exclusive Drops
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_purple]"></div>
                  Artist Pre-sales
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@artopia.com"
                    className="w-full px-8 py-5 bg-slate-800/50 rounded-2xl border border-white/10 text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-600"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_-10px_rgba(236,72,153,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  Join the Circle
                  <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="flex items-center gap-1"><Bell className="w-3 h-3" /> Weekly Only</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;