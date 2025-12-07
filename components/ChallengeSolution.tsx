import React from 'react';
import { TrendingUp, Briefcase, GraduationCap, Users } from 'lucide-react';

const ChallengeSolution: React.FC = () => {
  return (
    <section id="solusi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Wujudkan Mimpi Sarjana <br className="hidden md:block"/> Tanpa Beban Biaya
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Biaya kuliah yang terus meningkat tidak seharusnya mengubur mimpi Anda. 
            Kami menghadirkan <span className="text-primary-600 font-semibold">Edu-Preneurship</span>, 
            laboratorium bisnis hidup dimana Anda belajar sambil menghasilkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tantangan Biaya</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pendidikan tinggi seringkali menjadi beban berat bagi orang tua. 
                  Banyak potensi muda terhambat hanya karena kendala finansial, bukan karena kurangnya kemampuan.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Solusi: Laboratorium Bisnis Hidup</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bukan sekadar beasiswa. Anda langsung terjun mengelola bisnis nyata dari hulu ke hilir. 
                  Teori di kelas langsung dipraktikkan di lapangan.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gotong Royong Koperasi</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bekerja sama dalam wadah Koperasi. Membangun usaha bersama rekan mahasiswa untuk 
                  membayar seluruh biaya perkuliahan secara mandiri.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
               Konsep Utama
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Edu-Preneurship</h3>
             <img 
               src="https://picsum.photos/600/400?random=2" 
               alt="Collaboration" 
               className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm"
             />
             <p className="text-slate-600 italic mb-4">
               "Mahasiswa tidak hanya menjadi penonton, tetapi pemain utama dalam ekosistem ekonomi pendidikan mereka sendiri."
             </p>
             <ul className="space-y-3">
               <li className="flex items-center text-slate-700">
                 <GraduationCap className="w-5 h-5 mr-3 text-primary-600" />
                 Lulus dengan gelar <strong>Sarjana Manajemen (S.M.)</strong>
               </li>
               <li className="flex items-center text-slate-700">
                 <TrendingUp className="w-5 h-5 mr-3 text-primary-600" />
                 Miliki portofolio bisnis nyata
               </li>
               <li className="flex items-center text-slate-700">
                 <Users className="w-5 h-5 mr-3 text-primary-600" />
                 Jaringan bisnis Katingan & Sampit
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;