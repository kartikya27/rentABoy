import React from 'react';
import Hero from './components/Hero';
import StepsAndSafety from './components/StepsAndSafety';
import BoyfriendList from './components/BoyfriendList';
import ExperienceAndPricing from './components/ExperienceAndPricing';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-rose-500 selection:text-white">
      {/* Background fixed gradient for consistency across scroll */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"></div>
      
      <Hero />
      <StepsAndSafety />
      <BoyfriendList />
      <ExperienceAndPricing />
      <Footer />
    </main>
  );
}

export default App;
