import React from 'react';
import { Truck, Egg, Coins, Building2, UserCheck, ArrowRightLeft } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="cara-kerja" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Transparansi Model Bisnis</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Kemitraan Inti-Plasma
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kerjasama strategis antara LPK-SDM Dr. AK (Inti) dan Koperasi Mahasiswa (Plasma) yang saling menguntungkan.
          </p>
        </div>

        {/* Partnership Structure Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-20 border border-slate-200">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Core */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                  <Building2 size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Pihak Inti</h3>
                  <p className="text-sm text-slate-500">Investor & Pemasok (LPK-SDM Dr. AK)</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 min-w-[20px] h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-3">✓</div>
                  <p className="text-slate-700">Menyediakan <span className="font-semibold">500 - 1.000 ekor</span> Indukan Ayam Petelur (Pullet) siap produksi.</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 min-w-[20px] h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-3">✓</div>
                  <p className="text-slate-700">Menyediakan pakan ternak berkualitas.</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 min-w-[20px] h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-3">✓</div>
                  <p className="text-slate-700">Memberikan bimbingan teknis peternakan penuh.</p>
                </li>
              </ul>
            </div>

            {/* Plasma */}
            <div className="p-8 bg-primary-50/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <UserCheck size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Pihak Plasma</h3>
                  <p className="text-sm text-slate-500">Mahasiswa & Koperasi (100 Orang)</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 min-w-[20px] h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-3">✓</div>
                  <p className="text-slate-700">Modal Awal: <span className="font-bold text-slate-900">Terjangkau</span> (Patungan Kolektif untuk Mobil Box).</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 min-w-[20px] h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-3">✓</div>
                  <p className="text-slate-700">Manajemen operasional kandang (Sistem Piket).</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 min-w-[20px] h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-3">✓</div>
                  <p className="text-slate-700">Distribusi & Penjualan menggunakan Mobil Box milik sendiri.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Process Steps */}
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-10">Alur Bisnis Kandang ke Kampus</h3>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-slate-200 -z-10"></div>

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
            <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 border-8 border-slate-50 shadow-lg">
              1
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Aset Mobil Box</h4>
            <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded mb-3">Modal Terjangkau</div>
            <p className="text-slate-600 text-sm">
              Dana patungan mahasiswa dibelikan <span className="font-semibold">Mobil Box Second</span>. Aset vital agar koperasi mandiri dalam distribusi dan mendapat margin keuntungan tertinggi.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white mb-6 border-8 border-slate-50 shadow-lg">
              <Egg size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Produksi & Distribusi</h4>
            <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mb-3">25-50 kg Telur/Hari</div>
            <p className="text-slate-600 text-sm">
              Sistem piket mengelola kandang. Hasil panen telur + "Trading" stok luar didistribusikan ke warung/agen di <span className="font-semibold">Katingan & Sampit</span>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
            <div className="w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center text-white mb-6 border-8 border-slate-50 shadow-lg">
              <Coins size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Kuliah Terbayar</h4>
            <div className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mb-3">Auto-Debet Kampus</div>
            <p className="text-slate-600 text-sm">
              Profit penjualan dikurangi biaya operasional & angsuran indukan. Sisa bersih langsung disetor ke <span className="font-semibold">Univ. Darwan Ali</span> untuk SPP & Uang Gedung Anda.
            </p>
          </div>
        </div>

        {/* Finance Flow Visualization */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <ArrowRightLeft className="text-primary-400" />
                        Arus Kas Koperasi
                    </h3>
                    <p className="text-slate-300 text-sm">
                        Sistem keuangan transparan yang memprioritaskan keberlanjutan bisnis dan kewajiban pendidikan anggota.
                    </p>
                </div>
                <div className="md:w-2/3 w-full">
                    <div className="space-y-4">
                        <div className="bg-slate-800 p-4 rounded-lg flex justify-between items-center border-l-4 border-yellow-500">
                            <span>1. Pendapatan Penjualan Telur</span>
                            <span className="font-mono font-bold text-green-400">+ Masuk Kas</span>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg flex justify-between items-center border-l-4 border-red-500 opacity-90">
                            <span>2. Biaya Operasional (Bensin/Supir)</span>
                            <span className="font-mono text-red-300">- Keluar</span>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg flex justify-between items-center border-l-4 border-red-500 opacity-90">
                            <span>3. Angsuran Indukan & Pakan ke LPK</span>
                            <span className="font-mono text-red-300">- Keluar</span>
                        </div>
                        <div className="bg-primary-900/50 p-4 rounded-lg flex justify-between items-center border-l-4 border-primary-500 shadow-inner">
                            <span className="font-bold text-primary-200">4. PROFIT BERSIH = BAYAR KULIAH</span>
                            <span className="font-mono font-bold text-primary-400">TRANSFER KE KAMPUS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;