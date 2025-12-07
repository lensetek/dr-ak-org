import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
         <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Siap Bergabung dengan <br/> Generasi Wirausaha Mandiri?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Jangan biarkan biaya menghalangi impian sarjana Anda. Modal terjangkau, kelola bisnisnya, dan biarkan hasil usaha yang membiayai masa depan Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://forms.gle/PAezR3qqYYk4MPf68"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-500 hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
             href="https://wa.me/" 
             className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border border-slate-600 rounded-full hover:bg-white/10"
          >
            Hubungi Kami
          </a>
        </div>
        
        <p className="mt-8 text-sm text-slate-400">
          Kuota terbatas untuk 100 Mahasiswa per batch. Amankan kursimu sekarang.
        </p>
      </div>
    </section>
  );
};

export default CTA;