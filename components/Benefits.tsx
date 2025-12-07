import React from 'react';
import { Wallet, BookOpen, Briefcase, Car } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Wallet className="w-8 h-8 text-white" />,
      color: "bg-green-600",
      title: "Manfaat Finansial",
      desc: "SPP dan Uang Pembangunan (UP) terbayar lunas. Anda meringankan beban orang tua sekaligus mencapai kebebasan finansial sejak dini."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "bg-blue-600",
      title: "Manfaat Akademik",
      desc: "Aktivitas bisnis diakui sebagai praktik S1 Manajemen/D4 Akuntansi. Lulus dengan gelar Sarjana Manajemen (S.M.) atau Sarjana Terapan Akuntansi Perpajakan (S.Tr., Ak)."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      color: "bg-purple-600",
      title: "Manfaat Profesional",
      desc: "Lulus dengan portofolio nyata: laporan laba rugi yang Anda kelola dan jaringan distribusi yang Anda bangun. Nilai jual tinggi di dunia kerja."
    },
    {
      icon: <Car className="w-8 h-8 text-white" />,
      color: "bg-orange-600",
      title: "Manfaat Aset",
      desc: "Anda bukan buruh, Anda pemilik. Sebagai anggota Koperasi, Anda turut memiliki aset logistik (Mobil Box) yang produktif."
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Lebih dari Sekadar Gelar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami mencetak sarjana yang siap kerja dan siap usaha. Inilah yang akan Anda dapatkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="group p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;