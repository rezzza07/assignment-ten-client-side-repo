import React from "react";
import { Users, Image, Trophy, ArrowRight, Zap, Star, Medal, Sparkles } from "lucide-react";
import { Link } from "react-router";

const CommunityHighlights = () => {
  return (
    <section className="relative py-32 px-6 bg-transparent overflow-hidden font-['Poppins']">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left pointer-events-none select-none opacity-[0.03] dark:opacity-[0.07]">
        <span className="text-[14rem] font-black text-slate-500 uppercase tracking-tighter">
          Mastery
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
 
          <div className="lg:col-span-5 relative">
            <div className="relative space-y-8">
              
              
              <h2 className="text-5xl md:text-7xl font-black text-base-content leading-[0.95] tracking-tighter">
                Where Talent <br />
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent italic">
                  Gets Noticed.
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-l-4 border-pink-500 pl-6">
                Artopia isn't just a gallery; it's a launchpad. We highlight the bold, the new, and the visionary every single week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/exploreArtworks" className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3">
                  View Hall of Fame
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            

            <div className="relative group overflow-hidden rounded-[3rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-2 shadow-2xl md:translate-y-12">
              <div className="relative h-80 w-full overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Featured Art" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-white font-black text-2xl tracking-tighter uppercase italic">Artist of the Week</p>
                   <p className="text-white/60 text-xs font-bold tracking-widest uppercase">@Elena_Visions</p>
                </div>
              </div>
            </div>


            <div className="space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-blue-700 text-white shadow-xl relative overflow-hidden group">
                <Medal className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black mb-2 tracking-tight">Curator's Choice</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">
                    Over 50+ artworks hand-picked for the Artopia Global Exhibition.
                  </p>
                </div>
              </div>


              <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl group hover:border-pink-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                    <Zap className="w-6 h-6 fill-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-black dark:text-white uppercase tracking-tighter">Rising Stars</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trending Now</p>
                  </div>
                </div>
                <div className="flex -space-x-3 mt-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                    +150
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
};

export default CommunityHighlights;