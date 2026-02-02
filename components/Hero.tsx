import React from 'react';
import { ArrowRight, MessageCircle, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProfiles = () => {
    document.getElementById('profiles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      
      {/* Header Logo */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-10 z-50">
        <div className="flex items-center gap-3 select-none cursor-pointer">
          <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-600/20 rotate-3 transition-transform hover:rotate-0">
             <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">RentABoyfriend</span>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full glass-card text-rose-300 text-sm font-medium tracking-wide mb-4 animate-fade-in-up">
          ✨ Premium Company. Zero Drama.
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Need a <span className="gradient-text">boyfriend</span> for today?
          <br />
          <span className="text-slate-300 text-4xl md:text-6xl mt-2 block">Hire one by the hour.</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Party together. Travel together. Talk together.<br />
          <span className="text-white font-medium">Simple. Safe. Fun.</span> No pressure, just a good time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button 
            onClick={scrollToProfiles}
            className="group px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-rose-600/30 flex items-center gap-2"
          >
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group px-8 py-4 glass-card hover:bg-white/10 text-white rounded-full font-semibold text-lg transition-all flex items-center gap-2 border border-white/20">
            <MessageCircle className="w-5 h-5" />
            Chat First
          </button>
        </div>
        
        <p className="text-sm text-slate-500 mt-6">
          100% Private & Confidential • Verified Profiles
        </p>
      </div>
    </section>
  );
};

export default Hero;