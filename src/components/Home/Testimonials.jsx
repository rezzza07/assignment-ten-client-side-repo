import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Collector', content: 'Artopia transformed how I collect digital art. Intuitive and stunning.', avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Michael Chen', role: '3D Artist', content: 'The best space to showcase work and connect with global collectors.', avatar: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Emma Davis', role: 'Gallery Owner', content: 'Unmatched diversity. My go-to platform for new acquisitions.', avatar: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Liam Wilson', role: 'Digital Painter', content: 'The community support here is unlike any other platform.', avatar: 'https://i.pravatar.cc/150?u=4' },
    { name: 'Olivia Gao', role: 'Investor', content: 'High-quality curation. I trust the provenance of every piece.', avatar: 'https://i.pravatar.cc/150?u=5' },
    { name: 'Noah Smith', role: 'Hobbyist', content: 'Found my favorite artist here. The interface is butter smooth.', avatar: 'https://i.pravatar.cc/150?u=6' },
    { name: 'Sophia Lee', role: 'Crypto Artist', content: 'Seamless integration with my digital wallet. Very secure.', avatar: 'https://i.pravatar.cc/150?u=7' },
    { name: 'James Bond', role: 'Modern Collector', content: 'The Midnight Exhibition is a masterclass in UI design.', avatar: 'https://i.pravatar.cc/150?u=8' },
    { name: 'Isabella Ross', role: 'Curator', content: 'A breath of fresh air for the digital art world.', avatar: 'https://i.pravatar.cc/150?u=9' },
    { name: 'Lucas V.', role: 'Designer', content: 'Incredible inspiration for my daily creative sessions.', avatar: 'https://i.pravatar.cc/150?u=10' },
    { name: 'Amelia C.', role: 'Visual Artist', content: 'Finally a platform that treats digital art with respect.', avatar: 'https://i.pravatar.cc/150?u=11' },
    { name: 'Ethan Hunt', role: 'Collector', content: 'Fast transactions and beautiful presentation.', avatar: 'https://i.pravatar.cc/150?u=12' },
    { name: 'Mia Wong', role: 'Illustrator', content: 'The exposure I got here changed my career entirely.', avatar: 'https://i.pravatar.cc/150?u=13' },
    { name: 'Alex Rivera', role: 'NFT Artist', content: 'Low fees and high engagement. What more can you ask for?', avatar: 'https://i.pravatar.cc/150?u=14' },
    { name: 'Zoe Foster', role: 'Art Critic', content: 'Artopia is setting the gold standard for digital galleries.', avatar: 'https://i.pravatar.cc/150?u=15' },
    { name: 'Daniel Kim', role: 'Buyer', content: 'The customer support is lightning fast and very helpful.', avatar: 'https://i.pravatar.cc/150?u=16' },
    { name: 'Elena G.', role: 'Painter', content: 'I love how the site adapts to my style preferences.', avatar: 'https://i.pravatar.cc/150?u=17' },
    { name: 'Marcus T.', role: 'Sculptor', content: 'The 3D render previews are the best in the industry.', avatar: 'https://i.pravatar.cc/150?u=18' },
    { name: 'Chloe B.', role: 'Collector', content: 'Every piece tells a story. I’m addicted to browsing here.', avatar: 'https://i.pravatar.cc/150?u=19' },
    { name: 'Ryan S.', role: 'Artist', content: 'A truly decentralized feel with professional execution.', avatar: 'https://i.pravatar.cc/150?u=20' },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
   
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Fixed Header Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold pb-2 mb-4 text-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
            What Our Customers Are Saying
          </h2>
          <p className="text-gray-500 font-medium text-center max-w-lg">
            Join thousands of artists and collectors redefining the digital art frontier.
          </p>

          {/* Navigation Arrows moved below description for better centering */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-500/20 hover:bg-white/10 transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-500/20 hover:bg-white/10 transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

   
        <div className="relative flex justify-center items-center min-h-[400px]">
          {testimonials.map((t, index) => {
            let position = "opacity-0 scale-75 translate-x-0 pointer-events-none";
            if (index === activeIndex) {
              position = "opacity-100 scale-100 z-30 translate-x-0";
            } else if (index === (activeIndex + 1) % testimonials.length) {
              position = "opacity-40 scale-90 z-20 translate-x-[40%] md:translate-x-[75%]";
            } else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) {
              position = "opacity-40 scale-90 z-20 -translate-x-[40%] md:-translate-x-[75%]";
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-lg ${position}`}
              >
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/80 dark:bg-slate-900/40 border border-gray-500/10 backdrop-blur-xl shadow-2xl relative">
                  <div className="absolute -top-6 left-10 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="text-white w-6 h-6" />
                  </div>

                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 italic text-gray-700 dark:text-gray-200">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-gray-500/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-500/20 to-gray-500/5 flex items-center justify-center font-bold text-pink-500 border border-pink-500/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-black leading-none mb-1">{t.name}</h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-16">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex % 5 === i ? "w-10 bg-pink-500" : "w-2 bg-gray-500/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;