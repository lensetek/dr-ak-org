import React from 'react';
import { Sprout } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-primary-600 p-1.5 rounded text-white">
              <Sprout size={20} />
            </div>
            <span className="font-bold text-lg text-slate-900">LPK-SDM Dr. AK</span>
          </div>

          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} LPK-SDM Dr. AK.</p>
            <p>Bekerja sama dengan Universitas Darwan Ali & LPK-SDM.</p>
            <p className="mt-2">Katingan - Sampit, Kalimantan Tengah.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;