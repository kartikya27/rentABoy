import React from 'react';
import { Check } from 'lucide-react';
import { EXPERIENCES, PRICING_PLANS } from '../constants';

const ExperienceAndPricing: React.FC = () => {
  return (
    <div className="bg-slate-900/50 py-20">
      {/* EXPERIENCES */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <h2 className="text-center text-3xl font-bold mb-12">Perfect For Every Mood</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 min-w-[100px]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-rose-500/50 hover:bg-slate-800/80 transition-all cursor-default">
                <exp.icon className="w-8 h-8 text-rose-300" />
              </div>
              <span className="text-sm font-medium text-slate-300">{exp.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Hourly Pricing</h2>
          <p className="text-slate-400">Transparent rates. No hidden charges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card p-8 rounded-3xl ${plan.isPopular ? 'border-rose-500/50 shadow-2xl shadow-rose-900/20 bg-gradient-to-b from-slate-800 to-slate-900 z-10 scale-105' : 'border-white/10 hover:border-white/20'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-medium text-slate-300 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-slate-500">/hour</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="min-w-5 min-h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.isPopular 
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndPricing;
