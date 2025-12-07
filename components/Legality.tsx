import React from 'react';
import { ShieldCheck, FileSignature } from 'lucide-react';

const Legality: React.FC = () => {
  return (
    <section id="legalitas" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-slate-100">
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <ShieldCheck className="w-40 h-40 text-primary-600 relative z-10" />
              <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg z-20">
                 <FileSignature className="w-8 h-8 text-slate-700" />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Jaminan & Legalitas: <br/>
              <span className="text-primary-600">Keamanan Investasi Anda</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Kami memahami kekhawatiran Anda. Untuk menjamin rasa aman, seluruh mekanisme kerjasama ini diikat dalam 
              <span className="font-bold text-slate-900"> Perjanjian Kerjasama (PK) di hadapan Notaris</span>.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-primary-500 text-left">
              <p className="text-sm text-slate-700 font-medium">
                "Dokumen ini melindungi hak kepemilikan aset, transparansi keuangan, dan jaminan pembayaran kuliah ke Universitas."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Legality;