import React from 'react';
import { MessageCircle, Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-4">
      {/* TESTIMONIALS */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-center text-3xl font-bold mb-12 flex items-center justify-center gap-2">
          Girls Love Us <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-lg text-slate-200 mb-4">"{t.text}"</p>
              <p className="text-sm font-bold text-rose-400">- {t.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-rose-900/50 to-purple-900/50 rounded-3xl p-10 md:p-20 border border-white/10 mb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to enjoy your day?</h2>
          <p className="text-xl text-slate-300 mb-10">Book a companion now. Make memories.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-xl">
               Book Now
             </button>
             <button className="px-10 py-4 glass-card border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
               <MessageCircle className="w-5 h-5" />
               Start Chat
             </button>
          </div>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-rose-500 text-lg mr-2">RentABoyfriend</span>
          © 2024. All rights reserved.
        </div>
        
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">Safety</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>

        <div className="flex gap-4">
          <Instagram className="w-5 h-5 hover:text-rose-400 cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
          <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
