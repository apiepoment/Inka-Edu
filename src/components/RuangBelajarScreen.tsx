import React, { useState } from 'react';
import { ASSETS, ScreenId } from '../utils/inkaeduLogic';
import { MainTabHeader } from './NavigationChrome';

interface RuangBelajarScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const RuangBelajarScreen: React.FC<RuangBelajarScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'saved'>(
    'active'
  );

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Ruang Belajar"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full pb-8">
        {/* Title & Interactive Filter Tabs */}
        <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                Ruang Belajar Saya
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Lanjutkan progres dan raih sertifikasi impianmu.
              </p>
            </div>
            <div className="flex items-center gap-1 bg-badge-amber-surface px-2.5 py-1 rounded-full text-badge-amber shrink-0">
              <span className="material-symbols-outlined text-[16px] icon-filled">
                bolt
              </span>
              <span className="font-label-sm text-label-sm font-bold">
                14 Hari Streak
              </span>
            </div>
          </div>

          {/* Tab Switching Navigation */}
          <div className="flex p-1 bg-surface-container rounded-xl gap-1">
            {[
              { id: 'active', label: 'Sedang Berjalan (2)' },
              { id: 'completed', label: 'Selesai (3)' },
              { id: 'saved', label: 'Disimpan (5)' },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id as 'active' | 'completed' | 'saved')
                  }
                  className={
                    active
                      ? 'flex-1 py-2 px-2 rounded-lg bg-surface-container-lowest shadow-sm text-primary font-label-md text-label-md transition-all text-center cursor-pointer whitespace-nowrap'
                      : 'flex-1 py-2 px-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all text-center cursor-pointer whitespace-nowrap'
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </section>

        {activeTab === 'completed' && (
          <section className="px-4 sm:px-6 lg:px-8 mt-3 space-y-3">
            {[
              {
                title: 'Fullstack UI/UX Design Mastery',
                batch: 'Batch 10 • Nilai A (96/100)',
                date: 'Lulus Oktober 2024',
              },
              {
                title: 'Figma Auto Layout & Design Token',
                batch: 'Mini Course • Nilai A (96/100)',
                date: 'Lulus September 2024',
              },
              {
                title: 'UX Research & Usability Testing Fundamental',
                batch: 'Proyek Praktikum • Nilai A (91/100)',
                date: 'Lulus Agustus 2024',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-mentor-verified font-label-sm text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[13px]">
                      verified
                    </span>
                    Selesai &amp; Bersertifikat
                  </span>
                  <h3 className="font-headline-sm text-on-surface font-bold">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    {item.batch} • {item.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('profil')}
                  className="px-3 py-2 rounded-lg bg-surface-container-high text-primary font-label-sm font-bold shrink-0 cursor-pointer"
                >
                  Sertifikat
                </button>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'saved' && (
          <section className="px-gutter mt-3 space-y-3">
            {[
              'Design System Tokens & Variable Modes di Figma 2025',
              'Panduan Usability Testing dengan Maze & Lookback',
              'Template Studi Kasus Portofolio Notion Siap Pakai',
              'Framework Pertanyaan Interview Product Designer GoTo',
              'Arsitektur Micro-Frontend React & Next.js 14',
            ].map((topic, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px] icon-filled">
                      bookmark
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-headline-sm text-[14px] text-on-surface font-bold truncate">
                      {topic}
                    </h4>
                    <p className="font-body-sm text-on-surface-variant">
                      Materi Tersimpan • 15 mnt baca
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('active')}
                  className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm shrink-0 cursor-pointer"
                >
                  Buka
                </button>
              </div>
            ))}
          </section>
        )}

        {/* Main Active Course Hero Card */}
        <section className="px-gutter mt-3">
          <div className="relative bg-surface-container-lowest rounded-xl p-4 shadow-sm overflow-hidden">
            <div className="absolute -right-8 -top-8 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Badge & Batch Info */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-track-cyan-surface text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  Bootcamp Intensif
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md">
                Batch 11
              </span>
            </div>

            {/* Course Header */}
            <h2 className="font-headline-md text-headline-md text-on-surface leading-tight mb-2">
              Intensive UI/UX Design &amp; Product Research Bootcamp
            </h2>

            {/* Mentor Avatars & Class Stat */}
            <div className="flex items-center justify-between pb-3.5 pt-1">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    className="w-7 h-7 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    alt="Senior UI UX mentor"
                    src={ASSETS.belajarMentor1}
                  />
                  <img
                    className="w-7 h-7 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    alt="Product researcher mentor"
                    src={ASSETS.belajarMentor2}
                  />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Mentor Praktisi Industri
                </span>
              </div>
              <div className="flex items-center gap-1 text-mentor-verified">
                <span className="material-symbols-outlined text-[16px] icon-filled">
                  verified
                </span>
                <span className="font-label-sm text-label-sm font-semibold">
                  Kurikulum Terakreditasi
                </span>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-surface-container-low rounded-xl p-3 mb-3.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-label-md text-label-md text-on-surface">
                  Progres Belajar
                </span>
                <span className="font-label-md text-label-md text-primary font-bold">
                  75% Selesai
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div
                  className="h-full bg-primary-container rounded-full transition-all duration-500 ease-out"
                  style={{ width: '75%' }}
                />
              </div>
              <div className="flex items-center justify-between mt-2 font-body-sm text-body-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-mentor-verified">
                    check_circle
                  </span>
                  18 dari 24 modul tuntas
                </span>
                <span>Sisa 6 Modul</span>
              </div>
            </div>

            {/* Live Session Agenda Highlight */}
            <div className="bg-gradient-to-r from-surface-container to-surface-container-low rounded-xl p-3.5 mb-3.5 relative">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    videocam
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-label-sm text-label-sm text-tertiary-container bg-tertiary-fixed font-bold px-2 py-0.5 rounded-full">
                      Sesi Live Terdekat
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug truncate">
                    Sesi Live Mentoring: Usability Testing &amp; Bedah
                    Portofolio
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        calendar_today
                      </span>
                      Besok
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      19:30 WIB
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Class Action Button */}
              <button
                type="button"
                onClick={() =>
                  onShowToast(
                    'Menghubungkan ke ruang Zoom Terintegrasi Batch 11...'
                  )
                }
                className="mt-3 w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  video_call
                </span>
                <span>Masuk Kelas Live (Zoom Terintegrasi)</span>
              </button>
            </div>

            {/* Quick Action: Forum Discussion */}
            <button
              type="button"
              onClick={() => onNavigate('tanya-mentor-detail')}
              className="w-full py-2.5 px-4 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-between hover:bg-surface-container-highest transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                <span>Diskusi &amp; Tanya Mentor Kelas Ini</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="font-label-sm text-label-sm bg-surface-container-lowest px-1.5 py-0.5 rounded text-primary font-bold">
                  12 Baru
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* Syllabus & Learning Modules */}
        <section className="px-gutter mt-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Silabus &amp; Materi Belajar
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Akses video, quiz, dan panduan proyek
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('program')}
              className="font-label-md text-label-md text-primary flex items-center cursor-pointer"
            >
              <span>Semua (24)</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Modul 1: Completed */}
            <div className="bg-surface-container-lowest rounded-xl p-3.5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-mentor-verified/15 text-mentor-verified flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] icon-filled">
                    check_circle
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Modul 1 • 4 Video
                    </span>
                    <span className="text-[10px] bg-mentor-verified/10 text-mentor-verified font-bold px-1.5 py-0.2 rounded">
                      Tuntas
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Fondasi UX Research &amp; Empathy Map
                  </h3>
                </div>
              </div>
              <button
                type="button"
                aria-label="Review materi modul 1"
                onClick={() =>
                  onShowToast('Memutar ulang rekaman Modul 1: Fondasi UX Research')
                }
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  replay
                </span>
              </button>
            </div>

            {/* Modul 2: Completed */}
            <div className="bg-surface-container-lowest rounded-xl p-3.5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-mentor-verified/15 text-mentor-verified flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] icon-filled">
                    check_circle
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Modul 2 • 5 Video + 1 Kuis
                    </span>
                    <span className="text-[10px] bg-mentor-verified/10 text-mentor-verified font-bold px-1.5 py-0.2 rounded">
                      Tuntas
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Information Architecture &amp; Wireframing
                  </h3>
                </div>
              </div>
              <button
                type="button"
                aria-label="Review materi modul 2"
                onClick={() =>
                  onShowToast(
                    'Memutar ulang rekaman Modul 2: Information Architecture'
                  )
                }
                className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  replay
                </span>
              </button>
            </div>

            {/* Modul 3: In Progress (Active) */}
            <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px] icon-filled">
                      play_arrow
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Modul 3 • Sedang Dipelajari
                      </span>
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                      High-Fidelity UI &amp; Auto-Layout Figma
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onShowToast(
                      'Melanjutkan video Topik 4: Responsive Constraints (12:45)'
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm shrink-0 cursor-pointer"
                >
                  Lanjut
                </button>
              </div>
              <div className="mt-3 pt-2.5 bg-surface-container-low rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Topik 4: Responsive Constraints
                </span>
                <span className="font-label-sm text-label-sm text-primary font-semibold tabular-nums">
                  12:45 / 18:20
                </span>
              </div>
            </div>

            {/* Modul 4: Locked */}
            <div className="bg-surface-container-low/60 rounded-xl p-3.5 flex items-center justify-between opacity-75">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    lock
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Modul 4 • 6 Video Praktik
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant truncate">
                    Prototyping &amp; Micro-interactions
                  </h3>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                Terkunci
              </span>
            </div>

            {/* Modul 5: Locked */}
            <div className="bg-surface-container-low/60 rounded-xl p-3.5 flex items-center justify-between opacity-75">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    lock
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Modul 5 • Final Showcase
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant truncate">
                    Portfolio Presentation &amp; Job Interview Prep
                  </h3>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                Terkunci
              </span>
            </div>
          </div>
        </section>

        {/* Project & Homework Review Card */}
        <section className="px-gutter mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Tugas Praktik &amp; Review
            </h2>
            <span className="font-label-sm text-label-sm text-primary font-semibold">
              1 Menunggu Review
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-badge-amber-surface text-badge-amber font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  hourglass_top
                </span>
                <span>Sedang Direview oleh Mentor</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Deadline Batch 11
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
              Tugas 3: Buat Wireframe Alur Checkout Aplikasi E-commerce
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              Tautan Figma telah diserahkan kemarin pukul 21:15 WIB. Mentor
              sedang menguji usability flow dan keselarasan grid.
            </p>
            <div className="flex items-center justify-between bg-surface-container-low rounded-lg p-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  schedule
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  Estimasi Feedback:
                </span>
              </div>
              <span className="font-label-md text-label-md text-primary font-bold">
                Kurang dari 24 Jam
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  onShowToast(
                    'Membuka detail pengumpulan Figma Tugas 3 (Diserahkan 21:15 WIB)'
                  )
                }
                className="flex-1 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  visibility
                </span>
                <span>Lihat Pengumpulan</span>
              </button>
              <button
                type="button"
                aria-label="Edit Pengumpulan Tugas"
                onClick={() =>
                  onShowToast('Membuka editor tautan pengumpulan tugas')
                }
                className="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  edit_document
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Mentoring Support & Community Help Banner */}
        <section className="px-gutter mt-6">
          <div className="relative bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl p-4 shadow-md overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-on-primary/10 pointer-events-none" />
            <div className="absolute right-10 -top-10 w-24 h-24 rounded-full bg-on-primary/5 pointer-events-none" />
            <div className="relative z-10 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-on-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px] text-on-primary">
                  support_agent
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-primary leading-tight">
                  Mengalami Kebuntuan Belajar?
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary/90 mt-1 mb-3">
                  Jangan tunda progresmu! Hubungi Asisten Mentor 1-on-1 atau
                  tanyakan langsung di forum komunitas inkaedu.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('tanya-mentor-detail')}
                    className="px-3.5 py-2 rounded-lg bg-surface text-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform flex items-center gap-1.5 font-bold cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      headset_mic
                    </span>
                    <span>Hubungi Mentor</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('komunitas')}
                    className="px-3.5 py-2 rounded-lg bg-on-primary/15 text-on-primary font-label-md text-label-md hover:bg-on-primary/25 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      group
                    </span>
                    <span>Buka Forum Diskusi</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Program Teaser */}
        <section className="px-gutter mt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-label-lg text-label-lg text-on-surface-variant font-semibold">
              Program Lain yang Sedang Berjalan
            </h3>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-3.5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 font-bold font-headline-sm">
                FE
              </div>
              <div className="min-w-0">
                <h4 className="font-headline-sm text-headline-sm text-on-surface truncate">
                  Modern Frontend with Next.js &amp; Tailwind
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    35% Selesai
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    Modul 4
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Buka kelas Frontend"
              onClick={() =>
                onShowToast(
                  'Membuka kelas Modern Frontend with Next.js & Tailwind (Modul 4)'
                )
              }
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container text-on-surface hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
