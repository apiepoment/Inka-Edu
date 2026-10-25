import React, { useState } from 'react';
import { ASSETS, ScreenId } from '../utils/inkaeduLogic';

interface ProgramDetailScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

interface SyllabusWeek {
  id: string;
  badge: string;
  badgeStyle: string;
  title: string;
  summary: string;
  topics: string[];
}

const SYLLABUS_WEEKS: SyllabusWeek[] = [
  {
    id: 'w1-3',
    badge: 'Minggu 1 - 3',
    badgeStyle: 'bg-surface-container-high text-primary',
    title: 'Design Thinking & User Research',
    summary: '4 Modul Terstruktur • 2 Proyek Mandiri',
    topics: [
      'Framework Empathy Mapping & User Journey',
      'Menyusun Problem Statement & HMW (How Might We)',
      'Perencanaan dan Eksekusi In-Depth Interview (IDI)',
      'Sintesis Data Riset dengan Affinity Mapping',
    ],
  },
  {
    id: 'w4-7',
    badge: 'Minggu 4 - 7',
    badgeStyle: 'bg-surface-container-high text-primary',
    title: 'Wireframing & Advanced Figma',
    summary: '5 Modul Praktik • 2 Studi Kasus Interaktif',
    topics: [
      'Information Architecture (IA) & User Flow Diagram',
      'Low-Fidelity Wireframing & Rapid Prototyping',
      'Mastering Figma Auto-Layout 5.0 & Responsive Constraints',
      'Variables, Design Tokens & Component Properties',
    ],
  },
  {
    id: 'w8-10',
    badge: 'Minggu 8 - 10',
    badgeStyle: 'bg-surface-container-high text-primary',
    title: 'Hi-Fi UI & Design Systems',
    summary: '4 Modul Intensif • 1 Audit Aksesibilitas',
    topics: [
      'Membangun Scalable Design System Standar Industri',
      'WCAG Contrast, Typography Scale & Visual Hierarchy',
      'Micro-Interactions, Smart Animate & Interactive States',
      'Design Handoff & Kolaborasi Developer di Figma Dev Mode',
    ],
  },
  {
    id: 'w11-12',
    badge: 'Minggu 11 - 12 (Puncak)',
    badgeStyle: 'bg-badge-amber-surface text-tertiary',
    title: 'Real Client Capstone & Career',
    summary: 'Proyek Klien Mitra • Persiapan Rekrutmen',
    topics: [
      'Eksekusi End-to-End Proyek Riil bersama Product Manager',
      'Usability Testing menggunakan Maze & Iterasi Data',
      'Storytelling Studi Kasus Portofolio & Bedah CV ATS',
      'Simulasi Mock Interview 1-on-1 bersama Lead UX Rekanan',
    ],
  },
];

export const ProgramDetailScreen: React.FC<ProgramDetailScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [openWeekId, setOpenWeekId] = useState<string>('w1-3');

  return (
    <div className="flex flex-col flex-1 bg-surface pb-24">
      {/* Contextual Sub-Bar below ResponsiveTopNavbar */}
      <div className="relative inset-x-0 z-20 bg-surface border-b border-border-subtle/60">
        <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs min-w-0">
            <button
              type="button"
              aria-label="Kembali ke Beranda"
              onClick={() => onNavigate('beranda')}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                arrow_back
              </span>
            </button>
            <img
              alt="inkaedu Logo"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="h-7 w-auto object-contain shrink-0"
              src={ASSETS.logo}
            />
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight ml-1">
              Detail Program &amp; Pendaftaran
            </h1>
          </div>
          <button
            type="button"
            aria-label="Profil Pengguna"
            onClick={() => onNavigate('profil')}
            className="shrink-0 cursor-pointer"
          >
            <img
              alt="Profile"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20"
              src={ASSETS.profileNav}
            />
          </button>
        </div>
      </div>

      <main className="flex-1 flex flex-col w-full px-gutter pt-3 space-y-6">
        {/* Hero Program Card */}
        <section className="rounded-2xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-4 shadow-sm space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-badge-amber-surface text-tertiary font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[13px]">
                timer
              </span>
              Pendaftaran Ditutup dalam 3 Hari
            </span>
            <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">
              Batch 12
            </span>
          </div>

          <h2 className="font-headline-xl-mobile text-[24px] leading-tight text-on-surface font-extrabold">
            Fullstack UI/UX Designer &amp; Product Strategy Bootcamp
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Program intensif 12 minggu dirancang khusus dari pemula hingga siap
            kerja. Kuasai riset produk, prototyping Figma tingkat lanjut, hingga
            design sprint berstandar industri unicorn.
          </p>

          <div className="flex items-center gap-2 flex-wrap pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-xs font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-badge-amber icon-filled">
                star
              </span>
              <span className="font-bold text-on-surface">4.9</span>
              <span className="text-on-surface-variant font-normal">
                (1.2k+ alumni)
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[15px]">
                verified_user
              </span>
              <span>Job Guarantee 150+ Partner</span>
            </div>
          </div>
        </section>

        {/* Kenapa Ikut Batch 12? */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              Kenapa Ikut Batch 12?
            </h3>
            <span className="font-label-sm text-label-sm text-primary font-semibold">
              Standar Industri
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  terminal
                </span>
              </div>
              <h4 className="font-headline-sm text-[15px] font-bold text-on-surface">
                Studi Kasus Riil
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Kurikulum berbasis proyek autentik dari partner startup unicorn.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-track-cyan-surface text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  video_camera_front
                </span>
              </div>
              <h4 className="font-headline-sm text-[15px] font-bold text-on-surface">
                24 Sesi Live
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Interaktif bareng Lead UX praktisi via live streaming tiap akhir
                pekan.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-mentor-verified flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  groups
                </span>
              </div>
              <h4 className="font-headline-sm text-[15px] font-bold text-on-surface">
                1-on-1 Mentoring
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Bedah portfolio personal &amp; simulasi interview kerja
                komprehensif.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-badge-amber-surface text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  all_inclusive
                </span>
              </div>
              <h4 className="font-headline-sm text-[15px] font-bold text-on-surface">
                Akses Selamanya
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Rekaman kelas, resource kit, template Figma, dan grup komunitas
                privat.
              </p>
            </div>
          </div>
        </section>

        {/* Instruktur & Mentor */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Instruktur &amp; Mentor
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Belajar langsung dari praktisi teknologi terkemuka
              </p>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-mentor-verified font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[14px] icon-filled">
                verified
              </span>
              Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm flex items-start gap-3">
              <img
                src={ASSETS.mentorRizky}
                alt="Rian Pratama"
                referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0 flex-1 space-y-0.5">
                <div className="flex items-center gap-1">
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Rian Pratama
                  </h4>
                  <span className="material-symbols-outlined text-[16px] text-mentor-verified">
                    check_circle
                  </span>
                </div>
                <p className="font-label-sm text-label-sm text-primary font-semibold">
                  Lead UX Designer di Tech Unicorn
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  8+ tahun pengalaman memimpin transformasi produk fintech,
                  ekosistem pembayaran, dan arsitektur design system.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm flex items-start gap-3">
              <img
                src={ASSETS.mentorDimas}
                alt="Dimas Suryo"
                referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0 flex-1 space-y-0.5">
                <div className="flex items-center gap-1">
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Dimas Suryo
                  </h4>
                  <span className="material-symbols-outlined text-[16px] text-mentor-verified">
                    check_circle
                  </span>
                </div>
                <p className="font-label-sm text-label-sm text-primary font-semibold">
                  Senior Product Designer di SuperApp
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Spesialis User Research, Design Sprints, dan
                  Micro-Interactions untuk aplikasi berskala puluhan juta pengguna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Silabus 12 Minggu (Interactive Accordion) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Silabus 12 Minggu
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Alur belajar progresif dirancang dari nol hingga level
                profesional
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
              Step-by-Step
            </span>
          </div>

          <div className="space-y-2.5">
            {SYLLABUS_WEEKS.map((week) => {
              const isOpen = openWeekId === week.id;
              return (
                <div
                  key={week.id}
                  className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm transition-all"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenWeekId(isOpen ? '' : week.id)
                    }
                    className="w-full flex items-center justify-between text-left gap-2 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-md font-label-sm text-[11px] font-bold ${week.badgeStyle}`}
                      >
                        {week.badge}
                      </span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        {week.title}
                      </h4>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 p-3 rounded-xl bg-surface-container-low space-y-2">
                      <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-[15px]">
                          menu_book
                        </span>
                        <span>{week.summary}</span>
                      </div>
                      <ul className="space-y-1.5 pl-4 list-disc font-body-sm text-body-sm text-on-surface-variant">
                        {week.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Proyek Portofolio Siswa */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Proyek Portofolio Siswa
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kamu akan lulus dengan studi kasus portofolio berstandar
                rekrutmen internasional
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-semibold shrink-0">
              Karya Nyata
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
            <div className="h-44 w-full bg-surface-container-high relative">
              <img
                src={ASSETS.figmaThumb}
                alt="NusantaraPay Capstone Showcase"
                referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-[11px] font-bold">
                  Fintech Capstone Showcase
                </span>
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-semibold">
                  <span className="material-symbols-outlined text-[15px] text-badge-amber icon-filled">
                    star
                  </span>
                  4.95 Rating
                </span>
              </div>

              <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface leading-snug">
                NusantaraPay: Redesain Arsitektur Pembayaran QRIS &amp; Tabungan
                Mikro
              </h4>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Hasil karya alumni Batch 10 yang berhasil memenangkan
                penghargaan Capstone of the Batch dan membantunya lolos
                rekrutmen di decacorn tanah air.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-surface-container-low rounded-xl p-2 text-center">
                  <p className="font-headline-sm text-primary font-bold">100%</p>
                  <p className="font-body-sm text-[10px] text-on-surface-variant">
                    Figma Token
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-2 text-center">
                  <p className="font-headline-sm text-mentor-verified font-bold">
                    +38%
                  </p>
                  <p className="font-body-sm text-[10px] text-on-surface-variant">
                    Task Success
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-2 text-center">
                  <p className="font-headline-sm text-tertiary font-bold">
                    12 Sesi
                  </p>
                  <p className="font-body-sm text-[10px] text-on-surface-variant">
                    Usability Test
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kisah Alumni Hired */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Kisah Alumni Hired
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Career switch nyata dari berbagai latar belakang pendidikan
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-mentor-verified font-semibold">
              Buktikan Hasilnya
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={ASSETS.alumniDinda}
                    alt="Maya Indah"
                    referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-headline-sm text-[15px] font-bold text-on-surface">
                      Maya Indah
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Eks Guru SD → UI/UX di GoTo
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-[11px] font-bold">
                  Batch 9
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                &ldquo;Mentoring 1-on-1 benar-benar jadi pembeda utama.
                Portfolio saya dibongkar habis dan diajari cara storytelling
                yang dicari tim hiring manager. Bulan ke-2 setelah lulus
                langsung dapat penawaran!&rdquo;
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={ASSETS.studentIlham}
                    alt="Kevin Ardiansyah"
                    referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-headline-sm text-[15px] font-bold text-on-surface">
                      Kevin Ardiansyah
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Fresh Grad Sastra → Product Designer di Traveloka
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-[11px] font-bold">
                  Batch 10
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                &ldquo;Penyaluran kerja inkaedu bukan gimmick. Dalam 3 minggu
                ada 4 undangan interview dari mitra partner mereka. Komunitas
                alumni juga aktif saling lempar lowongan kerja tiap hari.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Summary Card */}
        <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3 border border-border-subtle">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-badge-amber-surface text-tertiary font-label-sm text-label-sm font-bold">
            <span className="material-symbols-outlined text-[14px] icon-filled">
              local_fire_department
            </span>
            Early Bird Diskon 40% Terbatas
          </span>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl-mobile text-[28px] text-primary font-extrabold">
                Rp 1.499.000
              </span>
              <span className="font-body-sm text-on-surface-variant line-through">
                Rp 2.499.000
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-secondary font-semibold mt-0.5">
              Atau opsi cicilan ringan 0% mulai Rp 499.000 / bulan
            </p>
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 space-y-2">
            {[
              '24 Pertemuan Live Interactive Class',
              'Review Portofolio Pribadi & Mock Interview',
              'Akses Kurikulum & Rekaman Selamanya',
              'Jaminan Penyaluran Kerja ke 150+ Mitra Startup',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-mentor-verified">
                  check
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-1 space-y-0.5">
            <p className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-badge-amber">
                event_seat
              </span>
              Sisa Kuota:{' '}
              <span className="text-tertiary font-bold">Tinggal 4 Kursi</span>
            </p>
            <p className="font-body-md text-body-md text-on-surface font-medium">
              Mulai: 12 April 2025
            </p>
          </div>
        </section>
      </main>

      {/* Sticky Enrollment Bottom Bar matching Image_3 */}
      <div className="fixed lg:sticky bottom-0 inset-x-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.08)] border-t border-border-subtle p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-primary font-extrabold">
                Rp 1.499.000
              </span>
              <span className="px-1.5 py-0.5 rounded bg-error-container text-error font-label-sm text-[10px] font-bold">
                Sisa 4 Kursi
              </span>
            </div>
            <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
              Batch 12 • 12 Minggu
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Konsultasi via Chat"
              onClick={() => {
                onShowToast('Membuka ruang tanya mentor & student advisor...');
                onNavigate('komunitas');
              }}
              className="w-11 h-11 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('checkout')}
              className="h-11 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Daftar Sekarang</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
