import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Batch Terbaru Dibuka
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Kuliah Sampai Lulus <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Dibayar dari Bisnis
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kami siapkan peternakannya, Anda dan teman-teman kelola penjualannya.
              Hasilnya membayar uang kuliah Anda sampai wisuda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://forms.gle/PAezR3qqYYk4MPf68"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Gabung Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
              >
                Pelajari Caranya
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>Tanpa Beban Orang Tua</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>Pilihan Prodi S.M. & S.Tr. Ak</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>Pengalaman Bisnis Nyata</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://cdn.lensetek.com/misc/drak/banner.png"
                alt="Mahasiswa Sukses Wirausaha"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Universitas Darwan Ali</p>
                  <p className="text-sm opacity-90">Program Wirausaha Mahasiswa</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce hidden md:flex">
              <div className="bg-secondary-100 p-2 rounded-full">
                <span className="text-2xl">🥚</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Target Produksi</p>
                <p className="text-slate-900 font-bold">50 Kg Telur / Hari</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;