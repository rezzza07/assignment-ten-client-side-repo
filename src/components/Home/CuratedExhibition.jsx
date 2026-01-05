import React, { useRef } from 'react';
import { ArrowRight, MoveLeft, MoveRight, Box } from 'lucide-react';
import { Link } from 'react-router';

const CuratedExhibition = () => {
  const scrollRef = useRef(null);

  const exhibitionArt = [
    { 
      id: 1, 
      title: "Cyber Neon", 
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000", 
      artist: "Nova Arthemis",
      medium: "Digital 3D / Octane Render",
      description: "A futuristic exploration of light refraction in a vacuum state."
    },
    { 
      id: 2, 
      title: "Liquid Gold", 
      img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000", 
      artist: "Midas King",
      medium: "Acrylic & Gold Leaf",
      description: "Organic fluid movements captured using high-viscosity metallics."
    },
    { 
      id: 3, 
      title: "Etherial Flow", 
      img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000", 
      artist: "Luna Selene",
      medium: "Digital Painting",
      description: "Dreamscape sequences inspired by subconscious wandering."
    },
    { 
      id: 4, 
      title: "Vortex 9", 
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000", 
      artist: "Zenith Code",
      medium: "Generative Code (GLSL)",
      description: "Mathematically perfect spirals rendered in real-time."
    },
    { 
      id: 5, 
      title: "Abstract Soul", 
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000", 
      artist: "Arthea Soul",
      medium: "Oil on Canvas",
      description: "A raw, textured study of human emotion through color theory."
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="font-poppins relative w-full py-24 my-20 bg-gray-950 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/10 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-orange-600/10 blur-[120px] -z-0" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-xs mb-3">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              Midnight Exhibition
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Curated <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">Masterpieces</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')} 
              className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-90"
              aria-label="Scroll Left"
            >
              <MoveLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-90"
              aria-label="Scroll Right"
            >
              <MoveRight className="w-6 h-6" />
            </button>
          </div>
        </div>


        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-scroll no-scrollbar px-6 md:px-[calc((100vw-1280px)/2)] scroll-smooth pb-10"
          style={{ 
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          {exhibitionArt.map((art) => (
            <div 
              key={art.id} 
              className="flex-shrink-0 w-[320px] md:w-[480px] group cursor-pointer scroll-snap-align-start"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900">
                <img 
                  src={art.img} 
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20">
                      <Box className="w-3 h-3 text-orange-400" />
                    </div>
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{art.medium}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-pink-500 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mb-4 italic">by {art.artist}</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {art.description}
                  </p>

                  <Link 
                    to={`/arts/${art.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors w-fit"
                  >
                    Explore Piece <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* End-of-list "Explore" Card */}
          <div className="flex-shrink-0 w-[300px] flex items-center justify-center pr-10">
            <Link to="/exploreArtworks" className="group flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center group-hover:border-orange-500 group-hover:rotate-90 transition-all duration-700">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-orange-500" />
              </div>
              <span className="text-white font-black tracking-[0.3em] uppercase text-[10px]">View Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedExhibition;