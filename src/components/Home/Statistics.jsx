import React from 'react';

const Statistics = () => {
  const stats = [
    { number: '10K+', label: 'Artworks', color: 'from-orange-500 via-orange-400', glow: 'shadow-orange-500/20' },
    { number: '5K+', label: 'Artists', color: 'from-pink-500 via-rose-400', glow: 'shadow-pink-500/20' },
    { number: '50K+', label: 'Users', color: 'from-purple-600 via-purple-400', glow: 'shadow-purple-500/20' },
    { number: '100+', label: 'Countries', color: 'from-indigo-500 via-blue-400', glow: 'shadow-indigo-500/20' }
  ];

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">

      <div className="absolute top-0 -left-20 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="relative group/container">

          <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/20 rounded-[3rem] blur-sm opacity-50 group-hover/container:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-[#ffffff05] dark:bg-white/[0.01] backdrop-blur-[30px] rounded-[3rem] border border-white/10 py-16 px-6 md:px-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">


            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="relative group text-center flex flex-col items-center justify-center">

                  <div className={`absolute -inset-4 bg-gradient-to-r ${stat.color} to-transparent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />


                  <div className={`text-5xl md:text-6xl font-black mb-3 tracking-tighter bg-gradient-to-br ${stat.color} to-white bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}>
                    {stat.number}
                  </div>


                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </span>
                    <div className={`w-8 h-[2px] rounded-full bg-gradient-to-r ${stat.color} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                  </div>


                  {index !== stats.length - 1 && (
                    <div className="hidden lg:block absolute -right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>


      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}} />
    </section>
  );
};

export default Statistics;