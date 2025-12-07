import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChallengeSolution from './components/ChallengeSolution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Legality from './components/Legality';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ChallengeSolution />
        <HowItWorks />
        <Benefits />
        <Legality />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;