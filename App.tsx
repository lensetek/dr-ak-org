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
  React.useEffect(() => {
    if (window.location.pathname === '/admin') {
      window.location.href = 'https://docs.google.com/spreadsheets/d/1ZZY1hkDLBDR9L0pu8rLBcyYbeLUqYDsv--OZwP2g7Yc/edit?usp=sharing';
    }
  }, []);

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