import React from 'react';
import { UserCheck, MessageSquareHeart, Clock, ShieldCheck, HeartHandshake, Headphones } from 'lucide-react';

const StepsAndSafety: React.FC = () => {
  return (
    <div className="space-y-24 py-20 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* HOW IT WORKS */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">3 simple steps to a great time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: UserCheck, 
              title: "1. Choose a Boyfriend", 
              desc: "Browse photos, check vibes, and pick your favorite companion." 
            },
            { 
              icon: MessageSquareHeart, 
              title: "2. Chat & Fix Time", 
              desc: "Chat securely to discuss plans. Decide where and when to meet." 
            },
            { 
              icon: Clock, 
              title: "3. Meet & Enjoy", 
              desc: "Meet at a public place. Enjoy your party, travel, or coffee date!" 
            }
          ].map((step, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-400">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY SECTION */}
      <section className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Your Safety is Our Priority</h2>
            <p className="text-slate-400 text-lg">
              We ensure every interaction is safe, respectful, and premium.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: MessageSquareHeart, text: "Chat before you meet" },
                { icon: ShieldCheck, text: "100% Verified IDs & Profiles" },
                { icon: HeartHandshake, text: "Safe & Secure Payments" },
                { icon: Headphones, text: "Support Team available 24/7" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-slate-200">
                  <div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
             <div className="relative glass-card p-8 rounded-2xl border border-white/10">
                <p className="text-xl italic text-slate-300 leading-relaxed">
                  "I was nervous at first, but the verified badge and pre-chat feature made me feel so comfortable. It was a very safe and fun experience!"
                </p>
                <div className="mt-6 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-400">
                     User
                   </div>
                   <div>
                     <p className="font-bold text-white">Riya S.</p>
                     <p className="text-xs text-emerald-400">Verified User</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StepsAndSafety;
