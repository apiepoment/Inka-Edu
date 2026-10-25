import React, { useState } from 'react';
import { ASSETS, ScreenId } from '../utils/inkaeduLogic';
import { MainTabHeader } from './NavigationChrome';

interface BerandaScreenProps {
  userName: string;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

const CATEGORIES = [
  { id: 'uiux', label: 'UI/UX Design', icon: 'draw' },
  { id: 'data', label: 'Data Science', icon: 'database' },
  { id: 'marketing', label: 'Digital Marketing', icon: 'campaign' },
  { id: 'fullstack', label: 'Fullstack Web', icon: 'code' },
  { id: 'pm', label: 'Product Management', icon: 'insights' },
];

export const BerandaScreen: React.FC<BerandaScreenProps> = ({
  userName,
  onNavigate,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState('uiux');
  const [searchQuery, setSearchQuery] = useState('');

  const firstName = userName.split(' ')[0] || 'Amanda';

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Beranda"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-6">
        {/* Greeting & Search Header (Stacked on Mobile, Side-by-Side on Tablet & Desktop) */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-3.5">
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <h1 className="font-headline-sm md:text-[22px] text-on-surface font-extrabold truncate">
                  Halo, {firstName}! 👋
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-badge-amber-surface text-badge-amber font-label-sm text-label-sm font-bold">
                  <span className="material-symbols-outlined text-[13px] mr-0.5 icon-filled">
                    local_fire_department
                  </span>
                  Day 7
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Siap raih karier impianmu hari ini?
              </p>
            </div>
            <button
              type="button"
              aria-label="Sertifikat & Pencapaian"
              onClick={() => onNavigate('profil')}
              className="md:hidden shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-primary shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                workspace_premium
              </span>
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="flex items-center gap-2.5 w-full md:w-80 lg:w-96">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    onShowToast(`Menampilkan hasil pencarian untuk "${searchQuery}"`);
                  }
                }}
                className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 shadow-sm border border-border-subtle/50 focus:outline-none focus:ring-2 focus:ring-primary-container/20"
                placeholder="Cari bootcamp, materi, atau mentor..."
                type="text"
              />
              <button
                type="button"
                aria-label="Filter Pencarian"
                onClick={() => onShowToast('Filter katalog bootcamp diaktifkan')}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </button>
            </div>
            <button
              type="button"
              aria-label="Sertifikat & Pencapaian Desktop"
              onClick={() => onNavigate('profil')}
              className="hidden md:flex shrink-0 items-center justify-center w-11 h-11 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                workspace_premium
              </span>
            </button>
          </div>
        </section>

        {/* Quick Category Pills */}
        <section className="w-full">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={
                    active
                      ? 'shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm cursor-pointer whitespace-nowrap'
                      : 'shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md shadow-sm hover:text-primary transition-colors cursor-pointer whitespace-nowrap'
                  }
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Hero Promo Banner + Lanjutkan Belajar (1-col on Mobile, 12-col Split on Tablet & Desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Hero Promo Card */}
          <div className="md:col-span-7 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary p-5 lg:p-6 shadow-md flex flex-col justify-between">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute -right-4 -top-8 w-28 h-28 rounded-full bg-secondary-container/20 blur-md pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-3 h-full justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm shadow-sm">
                    <span className="material-symbols-outlined text-[13px] mr-1">
                      timer
                    </span>
                    Pendaftaran Ditutup dalam 3 Hari
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-label-sm text-label-sm font-semibold">
                    Batch 12
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-headline-lg-mobile md:text-[24px] lg:text-[26px] font-extrabold leading-tight">
                    Intensive Bootcamp &amp; Akselerasi Karier
                  </h2>
                  <p className="font-body-sm md:text-[14px] text-on-primary-container leading-relaxed max-w-lg">
                    Diskon 40% &amp; jaminan penyaluran kerja ke 150+ hiring
                    partner ternama Indonesia.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/15 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-[11px] font-bold">
                      4.9
                    </span>
                    <span className="w-6 h-6 rounded-full bg-secondary-container/80 text-on-secondary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-[13px] icon-filled">
                        star
                      </span>
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-white/90">
                    2,400+ Alumni Berkarier
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('program')}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg shadow-sm transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Daftar Sekarang
                  <span className="material-symbols-outlined text-[16px] ml-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Lanjutkan Belajar Widget */}
          <div className="md:col-span-5 p-4 lg:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-border-subtle/50 flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    play_circle
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Lanjutkan Belajar
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('belajar')}
                  className="font-label-sm text-label-sm text-primary font-semibold hover:underline cursor-pointer"
                >
                  Semua Modul
                </button>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-container-high relative">
                  <img
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    alt="Close up modern UI design workspace on a laptop screen showing Figma auto layout components"
                    src={ASSETS.figmaThumb}
                  />
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[20px] drop-shadow">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block px-1.5 py-0.5 rounded-md bg-track-cyan-surface text-secondary font-label-sm text-label-sm mb-0.5">
                    UI/UX Expert Track
                  </span>
                  <h4 className="font-headline-sm text-[14px] leading-tight text-on-surface font-bold truncate">
                    Figma Design System &amp; Auto Layout
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Bab 4: Komponen Bertingkat &amp; Token
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Track */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-label-sm text-label-sm">
                  Progress Belajar
                </span>
                <span className="font-label-sm text-label-sm font-semibold text-primary">
                  72% (18/25 Materi)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div
                  className="h-full bg-primary-container rounded-full"
                  style={{ width: '72%' }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-badge-amber icon-filled">
                  timer
                </span>
                Estimasi 15 mnt lagi
              </span>
              <button
                type="button"
                onClick={() => onNavigate('belajar')}
                className="h-9 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">
                  play_arrow
                </span>
                Lanjut Belajar
              </button>
            </div>
          </div>
        </section>

        {/* Rekomendasi Bootcamp Populer (1-col on Mobile, 2-col Grid on Tablet & Desktop) */}
        <section className="space-y-3.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline-sm md:text-[18px] text-on-surface font-bold">
                Bootcamp Populer
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kurikulum komprehensif siap kerja berstandar industri
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('program')}
              className="font-label-sm text-label-sm text-primary font-semibold hover:underline cursor-pointer"
            >
              Lihat Semua Program
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* Bootcamp Card 1 */}
            {(!searchQuery ||
              'fullstack ui/ux designer bootcamp: zero to hero'.includes(
                searchQuery.toLowerCase()
              )) && (
              <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm border border-border-subtle/50 flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-40 bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      alt="Creative UX design workshop with students collaborating over wireframes"
                      src={ASSETS.bootcampUiUx}
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold">
                        UI/UX &amp; Product Design
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface font-label-sm text-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        videocam
                      </span>
                      3 Bulan (Live via Zoom)
                    </div>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-badge-amber font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-[16px] icon-filled">
                          star
                        </span>
                        <span>4.9</span>
                        <span className="text-on-surface-variant font-normal">
                          (1.2k alumni)
                        </span>
                      </div>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-mentor-verified/10 text-mentor-verified font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[13px] mr-0.5">
                          verified_user
                        </span>
                        Job Guarantee
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                      Fullstack UI/UX Designer Bootcamp: Zero to Hero
                    </h4>
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        person
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        Mentor:{' '}
                        <span className="font-semibold text-on-surface">
                          Rian Pratama
                        </span>{' '}
                        (Lead UX at Tech Unicorn)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-low/50 border-t border-border-subtle/40">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant line-through">
                        Rp 2.499.000
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-container font-bold">
                        -40%
                      </span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-primary font-bold">
                      Rp 1.499.000
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('program')}
                    className="h-10 px-4 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    Lihat Silabus
                  </button>
                </div>
              </div>
            )}

            {/* Bootcamp Card 2 */}
            {(!searchQuery ||
              'data science & machine learning intensive'.includes(
                searchQuery.toLowerCase()
              )) && (
              <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm border border-border-subtle/50 flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-40 bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      alt="High tech developer workstation displaying colorful code lines"
                      src={ASSETS.bootcampData}
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-secondary font-label-sm text-label-sm font-semibold">
                        Data &amp; AI
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface font-label-sm text-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        videocam
                      </span>
                      3.5 Bulan (Live via Zoom)
                    </div>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-badge-amber font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-[16px] icon-filled">
                          star
                        </span>
                        <span>4.9</span>
                        <span className="text-on-surface-variant font-normal">
                          (890 alumni)
                        </span>
                      </div>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-badge-amber-surface text-badge-amber font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[13px] mr-0.5">
                          workspace_premium
                        </span>
                        Portofolio Riil
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                      Data Science &amp; Machine Learning Intensive
                    </h4>
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        person
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        Mentor:{' '}
                        <span className="font-semibold text-on-surface">
                          Nadya Safira
                        </span>{' '}
                        (Senior Data Scientist)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-low/50 border-t border-border-subtle/40">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant line-through">
                        Rp 2.999.000
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-container font-bold">
                        -35%
                      </span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-primary font-bold">
                      Rp 1.949.000
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('program')}
                    className="h-10 px-4 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    Lihat Silabus
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tanya Mentor & Testimoni Alumni (1-col on Mobile, 2-col Grid on Tablet & Desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          {/* Fitur Baru: Tanya Mentor & Komunitas */}
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-4 lg:p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                    Fitur Baru
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-mentor-verified/15 text-mentor-verified font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[12px] mr-0.5">
                      verified
                    </span>
                    100% Dijawab
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  Bingung Portofolio atau Bug Coding?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tanyakan langsung ke 50+ praktisi industri top tech. Diskusi
                  interaktif &amp; review tugas mingguan!
                </p>
              </div>

              {/* Visual Icon Badge Stack */}
              <div className="shrink-0 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">
                    support_agent
                  </span>
                </div>
                <div className="mt-2 flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      alt="Indonesian male tech lead"
                      src={ASSETS.forumAvatar1}
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      alt="Indonesian female product designer"
                      src={ASSETS.forumAvatar2}
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-secondary text-white font-label-sm text-[9px] flex items-center justify-center">
                    +48
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-2">
              <button
                type="button"
                onClick={() => onNavigate('komunitas')}
                className="h-10 px-4 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">
                  forum
                </span>
                Buka Forum Diskusi
              </button>
            </div>
          </div>

          {/* Testimoni Alumni Singkat */}
          <div className="p-4 lg:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-border-subtle/50 flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    format_quote
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Kisah Sukses Alumni
                  </h4>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Cerita Karier
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    alt="Dinda Larasati Product Designer di GoTo Group"
                    src={ASSETS.alumniDinda}
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-mentor-verified flex items-center justify-center text-white text-[9px]">
                    ✓
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">
                      Dinda Larasati
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      | Batch 8
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary font-semibold truncate">
                    Product Designer di GoTo Group
                  </p>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                “Dari nol tanpa latar belakang IT, bimbingan portofolio dan sesi
                1-on-1 mentor di inkaedu benar-benar membuka jalan diterima kerja
                impian dalam 2 bulan pasca kelulusan!”
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border-subtle/50 font-label-sm text-label-sm text-on-surface-variant">
              <span>Alumni berkarier di:</span>
              <span className="font-semibold text-on-surface">
                GoTo, Bukalapak, &amp; Telkom
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
