import React, { useState } from 'react';
import { ASSETS, ScreenId } from '../utils/inkaeduLogic';
import { SOCIAL_LINKS } from './GlobalFooter';
import { MainTabHeader } from './NavigationChrome';
import { OptimizedImage } from './OptimizedImage';

interface InfoPageProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const TentangScreen: React.FC<InfoPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Tentang Kami"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-5">
        <section className="rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary p-5 lg:p-6 shadow-md space-y-2.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-white font-label-sm text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px]">
              verified
            </span>
            PT inkaedu Edukasi Indonesia
          </span>
          <h1 className="font-headline-lg-mobile md:text-[26px] font-extrabold leading-tight">
            Membangun Talenta Digital Indonesia Berstandar Global
          </h1>
          <p className="font-body-sm md:text-[14px] text-on-primary-container leading-relaxed max-w-2xl">
            inkaedu adalah ekosistem edukasi teknologi (EdTech) modern yang
            menjembatani kesenjangan antara kurikulum akademik dan kebutuhan
            industri teknologi nyata melalui bootcamp intensif dan mentoring
            praktisi 1-on-1.
          </p>
        </section>

        {/* Key Impact Metrics */}
        <section className="grid grid-cols-3 gap-3 md:gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-4 text-center shadow-sm border border-border-subtle/50">
            <p className="font-headline-md md:text-[24px] text-primary font-extrabold">
              2.400+
            </p>
            <p className="font-body-sm text-[11px] md:text-[12px] text-on-surface-variant">
              Alumni Berkarier
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-4 text-center shadow-sm border border-border-subtle/50">
            <p className="font-headline-md md:text-[24px] text-secondary font-extrabold">
              150+
            </p>
            <p className="font-body-sm text-[11px] md:text-[12px] text-on-surface-variant">
              Hiring Partner
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-4 text-center shadow-sm border border-border-subtle/50">
            <p className="font-headline-md md:text-[24px] text-mentor-verified font-extrabold">
              50+
            </p>
            <p className="font-body-sm text-[11px] md:text-[12px] text-on-surface-variant">
              Mentor Unicorn
            </p>
          </div>
        </section>

        {/* Responsive 2-Col on Tablet & Desktop: Visi Misi + Mentor Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-subtle/50 space-y-3">
            <h2 className="font-headline-sm text-on-surface font-bold">
              Visi &amp; Filosofi Lentera Modern Edtech
            </h2>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              Kami percaya bahwa setiap talenta muda Indonesia—baik lulusan baru
              maupun profesional yang beralih karier (career switch)—berhak
              mendapatkan bimbingan langsung dari praktisi terbaik di perusahaan
              teknologi terkemuka.
            </p>
            <div className="space-y-2 pt-1">
              {[
                'Kurikulum Berbasis Proyek Riil & Studi Kasus Industri',
                'Pendampingan Portofolio End-to-End hingga Lolos ATS',
                'Komunitas Kolaboratif & Jaringan Rekrutmen Jalur Cepat',
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 font-body-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-[16px] text-mentor-verified">
                    check_circle
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-subtle/50 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-on-surface font-bold">
                  Dewan Kurikulum &amp; Mentor
                </h2>
                <button
                  type="button"
                  onClick={() => onNavigate('komunitas')}
                  className="font-label-sm text-primary font-bold hover:underline cursor-pointer"
                >
                  Sapa Mentor
                </button>
              </div>
              <div className="flex items-center gap-3">
                <OptimizedImage
                  src={ASSETS.mentorRizky}
                  alt="Rizky Ardiansyah"
                  targetWidth={120}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-headline-sm text-[15px] text-on-surface font-bold">
                    Rizky Ardiansyah &amp; 50+ Praktisi
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    Lead UX, Principal Data Scientist, &amp; Tech Lead dari GoTo,
                    Traveloka, Blibli, dan BUMN Digital.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('program')}
              className="w-full h-10 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Jelajahi Kurikulum Bootcamp</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export const LayananScreen: React.FC<InfoPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const services: {
    title: string;
    badge: string;
    desc: string;
    icon: string;
    target: ScreenId;
    cta: string;
  }[] = [
    {
      title: 'Intensive Career Bootcamp (12 Minggu)',
      badge: 'Job Guarantee',
      desc: 'Program pelatihan intensif live via Zoom bersama praktisi unicorn di bidang UI/UX Design, Data Science & AI, Fullstack Web, dan Digital Marketing.',
      icon: 'school',
      target: 'program',
      cta: 'Lihat Silabus & Daftar',
    },
    {
      title: '1-on-1 Mentoring & Forum Tanya Mentor',
      badge: 'Respons 15 Menit',
      desc: 'Konsultasi privat bedah portofolio, debugging kode, dan diskusi karier langsung dengan 50+ mentor aktif setiap hari.',
      icon: 'forum',
      target: 'komunitas',
      cta: 'Buka Komunitas Mentor',
    },
    {
      title: 'Learning Management System (Ruang Belajar)',
      badge: 'Akses Selamanya',
      desc: 'Akses rekaman kelas HD, modul terstruktur, kuis evaluasi, dan review tugas praktik mingguan oleh asisten mentor.',
      icon: 'local_library',
      target: 'belajar',
      cta: 'Masuk Ruang Belajar',
    },
    {
      title: 'Review CV Kilat ATS & Bursa Kerja Rekanan',
      badge: '150+ Mitra',
      desc: 'Optimalisasi CV berstandar ATS, sertifikat kompetensi ber-QR Code, dan penyaluran kerja jalur cepat (Fast Track) ke perusahaan mitra.',
      icon: 'workspace_premium',
      target: 'profil',
      cta: 'Buka Hub Karier',
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Layanan Kami"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-5">
        <div className="space-y-1">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-[11px] font-bold">
            Solusi Terintegrasi
          </span>
          <h1 className="font-headline-lg-mobile md:text-[24px] text-on-surface font-bold">
            Layanan Ekosistem inkaedu
          </h1>
          <p className="font-body-sm text-on-surface-variant">
            Pilih layanan pengembangan kompetensi dan akselerasi karier yang
            sesuai dengan targetmu.
          </p>
        </div>

        {/* 1-col on Mobile, 2-col Grid on Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 border border-border-subtle/60"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      {srv.icon}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-mentor-verified font-label-sm text-[10px] font-bold">
                    {srv.badge}
                  </span>
                </div>
                <div className="space-y-1">
                  <h2 className="font-headline-sm text-on-surface font-bold">
                    {srv.title}
                  </h2>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onNavigate(srv.target)}
                className="w-full h-10 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{srv.cta}</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const KontakScreen: React.FC<InfoPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) return;
    onShowToast(
      `Terima kasih ${senderName}! Pesan Anda telah diterima tim Student Advisor.`
    );
    setSenderName('');
    setSenderEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Kontak & Bantuan"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-5">
        <div className="space-y-1">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-bold">
            Student Advisor 24/7
          </span>
          <h1 className="font-headline-lg-mobile md:text-[24px] text-on-surface font-bold">
            Hubungi Tim inkaedu
          </h1>
          <p className="font-body-sm text-on-surface-variant">
            Konsultasikan kurikulum bootcamp, kemitraan rekrutmen perusahaan,
            atau kendala teknis belajar.
          </p>
        </div>

        {/* Responsive 1-col on Mobile, 12-col Split on Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Left Column: Direct WhatsApp, Email & Social Directory */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onShowToast(
                  'Menghubungkan ke WhatsApp Student Advisor: +62 812-3456-7890'
                );
              }}
              className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-subtle/50 flex items-center justify-between gap-3 hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-mentor-verified flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    chat
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-mentor-verified font-bold">
                    WhatsApp (WA) Resmi
                  </p>
                  <p className="font-headline-sm text-on-surface font-bold">
                    +62 812-3456-7890
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    Balasan instan (08:00 – 22:00 WIB)
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary">
                open_in_new
              </span>
            </a>

            <a
              href="mailto:halo@inkaedu.id"
              onClick={(e) => {
                e.preventDefault();
                onShowToast('Alamat email disalin: halo@inkaedu.id');
              }}
              className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-subtle/50 flex items-center justify-between gap-3 hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-primary font-bold">
                    Alamat Email Kontak
                  </p>
                  <p className="font-headline-sm text-on-surface font-bold">
                    halo@inkaedu.id
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    Kemitraan korporat &amp; akademik
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary">
                content_copy
              </span>
            </a>

            {/* Social Media Directory */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-subtle/50 space-y-2.5">
              <h2 className="font-headline-sm text-on-surface font-bold">
                Media Sosial Resmi Kami
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      onShowToast(`Membuka ${soc.name} (${soc.handle})`);
                    }}
                    className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high flex items-center gap-2 text-on-surface transition-colors"
                  >
                    <span className="text-primary">{soc.svg}</span>
                    <div className="min-w-0">
                      <p className="font-label-sm font-bold truncate">
                        {soc.name}
                      </p>
                      <p className="font-body-sm text-[10px] text-on-surface-variant truncate">
                        {soc.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Consultation Form */}
          <form
            onSubmit={handleContactSubmit}
            className="md:col-span-7 bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-subtle/50 space-y-3.5"
          >
            <h2 className="font-headline-sm text-on-surface font-bold">
              Kirim Pesan Konsultasi
            </h2>
            <div>
              <label
                htmlFor="contact-name"
                className="block font-label-sm text-on-surface mb-1"
              >
                Nama Lengkap
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block font-label-sm text-on-surface mb-1"
              >
                Email atau Nomor WhatsApp
              </label>
              <input
                id="contact-email"
                type="text"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="nama@email.com / 0812xxxx"
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
            <div>
              <label
                htmlFor="contact-msg"
                className="block font-label-sm text-on-surface mb-1"
              >
                Pesan atau Pertanyaan
              </label>
              <textarea
                id="contact-msg"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pertanyaan seputar program bootcamp atau jadwal kelas..."
                className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg font-bold shadow-sm cursor-pointer"
            >
              Kirim Pesan Sekarang
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
