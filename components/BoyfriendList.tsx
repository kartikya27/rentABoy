import React from 'react';
import { MapPin, Star, Sparkles } from 'lucide-react';
import { BOYFRIEND_PROFILES } from '../constants';

const BoyfriendList: React.FC = () => {
  return (
    <section id="profiles" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
         <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Meet the Guys</h2>
            <p className="text-slate-400">Charming, polite, and fun companions tailored for you.</p>
         </div>
         <div className="flex gap-2">
            <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-sm">Party</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Travel</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Chat</span>
         </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOYFRIEND_PROFILES.map((profile) => (
            <div key={profile.id} className="group relative glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300">
              {/* Image Area */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Rating */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold">{profile.rating}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="absolute bottom-0 left-0 w-full p-5 space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h3>
                    <div className="flex items-center gap-1 text-slate-300 text-sm">
                      <MapPin className="w-3 h-3" />
                      {profile.city}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-rose-400 font-bold text-xl">₹{profile.price}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Per Hour</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {profile.vibes.slice(0, 2).map((vibe, i) => (
                    <span key={i} className="text-[10px] uppercase font-semibold tracking-wide px-2 py-1 bg-white/10 rounded-md border border-white/5 text-slate-200">
                      {vibe}
                    </span>
                  ))}
                </div>

                <button className="w-full mt-4 bg-white text-slate-950 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-500" />
                  Book {profile.name}
                </button>
              </div>
            </div>
          ))}
       </div>
       
       <div className="mt-12 text-center">
         <button className="px-6 py-3 border border-slate-700 text-slate-400 rounded-full hover:bg-slate-800 transition-colors">
            View All Profiles
         </button>
       </div>
    </section>
  );
};

export default BoyfriendList;
