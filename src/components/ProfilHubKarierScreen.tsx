import React, { useState } from 'react';
import { ASSETS, ScreenId, UserProfile } from '../utils/inkaeduLogic';
import { MainTabHeader } from './NavigationChrome';

interface ProfilHubKarierScreenProps {
  profile: UserProfile;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const ProfilHubKarierScreen: React.FC<ProfilHubKarierScreenProps> = ({
  profile,
  onNavigate,
  onShowToast,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'sertifikat' | 'karier' | 'aktivitas'
  >('sertifikat');
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({});

  const toggleApplyJob = (jobId: string, title: string) => {
    setAppliedJobs((prev) => {
      const next = !prev[jobId];
      onShowToast(
        next
          ? `Lamaran Fast Track untuk ${title} berhasil dikirim!`
          : `Lamaran untuk ${title} dibatalkan`
      );
      return { ...prev, [jobId]: next };
    });
  };

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Profil & Hub Karier"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-3 pb-8 space-y-5">
        {/* Student Profile Hero Card matching Image_20 */}
        <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  src={ASSETS.mentorSiti}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  className="w-16 h-16 rounded-full object-cover shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-mentor-verified text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[13px]">
                    check
                  </span>
                </span>
              </div>

              <div className="min-w-0 space-y-1">
                <h1 className="font-headline-md text-[19px] text-on-surface font-bold truncate">
                  {profile.name}
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Siswa {profile.batchLabel}
                </p>
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Siap Kerja / Open to Work
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-badge-amber-surface text-tertiary font-label-sm text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[12px] icon-filled">
                      bolt
                    </span>
                    Top 5% Batch
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Pengaturan Akun & Edit Profil"
              onClick={() => onNavigate('pengaturan')}
              className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">
                edit_square
              </span>
            </button>
          </div>

          {/* Kelengkapan Portofolio Karier */}
          <div className="bg-surface-container-low rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-primary">
                  donut_large
                </span>
                Kelengkapan Portofolio Karier
              </span>
              <span className="font-label-sm text-label-sm text-primary font-bold">
                {profile.portfolioCompletion}% Selesai
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div
                className="h-full bg-primary-container rounded-full"
                style={{ width: `${profile.portfolioCompletion}%` }}
              />
            </div>
            <div className="flex items-center justify-between gap-2 pt-0.5">
              <p className="font-body-sm text-[11px] text-on-surface-variant">
                Tinggal unggah link case study kedua untuk 100%
              </p>
              <button
                type="button"
                onClick={() => onNavigate('pengaturan')}
                className="font-label-sm text-[11px] text-primary font-bold flex items-center shrink-0 hover:underline cursor-pointer"
              >
                Lengkapi
                <span className="material-symbols-outlined text-[14px] ml-0.5">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Sub-navigation Tabs */}
        <section className="flex p-1 bg-surface-container rounded-xl gap-1">
          {[
            { id: 'sertifikat', label: 'Sertifikat', icon: 'workspace_premium' },
            { id: 'karier', label: 'Hub Karier', icon: 'work' },
            { id: 'aktivitas', label: 'Aktivitas', icon: 'monitoring' },
          ].map((tab) => {
            const active = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveSubTab(
                    tab.id as 'sertifikat' | 'karier' | 'aktivitas'
                  )
                }
                className={
                  active
                    ? 'flex-1 py-2 px-2 rounded-lg bg-surface-container-lowest shadow-sm text-primary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap'
                    : 'flex-1 py-2 px-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap'
                }
              >
                <span className="material-symbols-outlined text-[16px]">
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </section>

        {/* Section 1: Sertifikat Resmi Bootcamp */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-badge-amber text-[20px]">
                verified
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Sertifikat Resmi Bootcamp
              </h2>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-mentor-verified font-label-sm text-[10px] font-bold">
              Aktif &amp; Valid
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3.5 border border-border-subtle">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <p className="font-label-sm text-[10px] text-primary font-extrabold uppercase tracking-wider">
                  INKAEDU BOOTCAMP MASTERY
                </p>
                <h3 className="font-headline-md text-[18px] text-on-surface font-extrabold leading-snug">
                  Certificate of Excellence — Fullstack UI/UX Design Mastery
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-badge-amber-surface text-badge-amber flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  verified_user
                </span>
              </div>
            </div>

            <div className="space-y-1.5 pt-1 font-body-sm text-body-sm">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant">
                  Diberikan Kepada:
                </span>
                <span className="font-bold text-on-surface">
                  {profile.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant">ID Kredensial:</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low text-primary font-mono text-[11px] font-bold">
                  #INKA-2024-UX-8912
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant">Tanggal Terbit:</span>
                <span className="font-semibold text-on-surface">
                  18 Oktober 2024
                </span>
              </div>
            </div>

            {/* QR Code Verification Block */}
            <div className="bg-surface-container-low rounded-xl p-3 flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg bg-surface-container-lowest p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[40px] text-on-surface">
                  qr_code_2
                </span>
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className="font-label-md text-label-md text-on-surface font-bold">
                  Tervalidasi Sistem inkaedu
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
                  Pindai atau bagikan tautan kredensial untuk membuktikan
                  verifikasi portofolio langsung ke tim rekruter.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={() =>
                  onShowToast(
                    'Mengunduh Sertifikat #INKA-2024-UX-8912 (PDF)...'
                  )
                }
                className="h-10 rounded-xl bg-surface-container-high text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                <span>Unduh (PDF)</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  onShowToast(
                    'Kredensial #INKA-2024-UX-8912 siap dibagikan ke LinkedIn!'
                  )
                }
                className="h-10 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-primary transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
                <span>Bagikan LinkedIn</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Sertifikat Mini Kursus & Skill Track */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Sertifikat Mini Kursus &amp; Skill Track
            </h2>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              2 Terbit
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-track-cyan-surface text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  deployed_code
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-sm text-[14px] text-on-surface font-bold truncate">
                  Figma Auto Layout &amp; Design Token
                </h3>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  Batch Intensif • Nilai A (96/100) • Sep 2024
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Lihat Sertifikat Figma"
              onClick={() =>
                onShowToast(
                  'Menampilkan sertifikat Figma Auto Layout & Design Token'
                )
              }
              className="w-8 h-8 rounded-full text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                visibility
              </span>
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-badge-amber-surface text-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  psychology_alt
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-sm text-[14px] text-on-surface font-bold truncate">
                  UX Research &amp; Usability Testing Fundamental
                </h3>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  Proyek Praktikum • Nilai A (91/100) • Agu 2024
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Lihat Sertifikat UX Research"
              onClick={() =>
                onShowToast(
                  'Menampilkan sertifikat UX Research & Usability Testing'
                )
              }
              className="w-8 h-8 rounded-full text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                visibility
              </span>
            </button>
          </div>
        </section>

        {/* Section 3: Bimbingan Portofolio & CV */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[20px]">
                analytics
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Bimbingan Portofolio &amp; CV
              </h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-mentor-verified text-white font-label-sm text-[10px] font-bold">
              Lolos ATS
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    description
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-[10px] text-mentor-verified font-extrabold uppercase tracking-wider">
                    REVIEW KILAT CV &amp; PORTOFOLIO
                  </p>
                  <h3 className="font-headline-sm text-[16px] text-on-surface font-extrabold">
                    Skor Kelayakan: 92/100
                  </h3>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-[11px]">
                Batch 11
              </span>
            </div>

            <div className="bg-surface-container-low rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src={ASSETS.mentorRizky}
                  alt="Rian Pratama"
                  referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-label-sm text-label-sm text-on-surface font-bold">
                  Catatan dari Rian Pratama (HR Lead Rekanan):
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                “Struktur studi kasus Amanda pada aplikasi FinTech sangat runut
                dengan metric dampak konversi UX yang jelas. Kata kunci ATS
                sudah optimal untuk posisi Junior UX.”
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onShowToast('Mengunduh CV Teroptimasi ATS (v2.4.pdf)...')
              }
              className="w-full h-10 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              <span>Unduh CV Teroptimasi ATS (v2.4)</span>
            </button>
          </div>

          {/* Konsultasi Karier 1-on-1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-badge-amber-surface text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    record_voice_over
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Konsultasi Karier 1-on-1
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Simulasi interview kerja dengan HR Expert
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-label-sm text-primary font-bold">1 Sesi</p>
                <p className="font-body-sm text-[10px] text-on-surface-variant">
                  Kuota Gratis
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-mentor-verified">
                  event_available
                </span>
                Tersedia slot minggu ini
              </span>
              <button
                type="button"
                onClick={() =>
                  onShowToast(
                    'Slot simulasi interview bersama HR Expert berhasil dijadwalkan!'
                  )
                }
                className="px-3.5 py-2 rounded-xl bg-surface-container-high text-primary font-label-sm text-label-sm font-bold hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
              >
                Jadwalkan Sekarang
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Bursa Kerja Eksklusif Rekanan */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Bursa Kerja Eksklusif Rekanan
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rekomendasi loker terkurasi sesuai profil Amanda
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-bold">
              3 Cocok
            </span>
          </div>

          {/* Job 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-sm font-extrabold text-primary shrink-0">
                  GT
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Junior UI/UX Designer
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    GoTo Fintech • Hybrid Jakarta
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-mentor-verified font-label-sm text-[11px] font-bold">
                Match 95%
              </span>
            </div>

            <div className="flex items-center gap-4 font-body-sm text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  payments
                </span>
                IDR 6.5 – 9.0 Jt / bln
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  schedule
                </span>
                Full-time
              </span>
            </div>

            <button
              type="button"
              onClick={() =>
                toggleApplyJob('goto-ux', 'Junior UI/UX Designer (GoTo Fintech)')
              }
              className={`w-full h-10 rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                appliedJobs['goto-ux']
                  ? 'bg-emerald-600 text-white'
                  : 'bg-primary-container hover:bg-primary text-on-primary shadow-sm'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {appliedJobs['goto-ux'] ? 'check_circle' : 'rocket_launch'}
              </span>
              <span>
                {appliedJobs['goto-ux']
                  ? 'Lamaran Fast Track Terkirim'
                  : 'Lamar via Jalur Cepat inkaedu'}
              </span>
            </button>
          </div>

          {/* Job 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-track-cyan-surface flex items-center justify-center font-headline-sm font-extrabold text-secondary shrink-0">
                  BB
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Product Designer Associate
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Bibit / Stockbit • Remote Indonesia
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-mentor-verified font-label-sm text-[11px] font-bold">
                Match 90%
              </span>
            </div>

            <div className="flex items-center gap-4 font-body-sm text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  payments
                </span>
                Kompetitif + Tunjangan
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  laptop_mac
                </span>
                100% WFH
              </span>
            </div>

            <button
              type="button"
              onClick={() =>
                toggleApplyJob(
                  'bibit-pd',
                  'Product Designer Associate (Bibit / Stockbit)'
                )
              }
              className={`w-full h-10 rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                appliedJobs['bibit-pd']
                  ? 'bg-emerald-600 text-white'
                  : 'bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {appliedJobs['bibit-pd'] ? 'check_circle' : 'send'}
              </span>
              <span>
                {appliedJobs['bibit-pd']
                  ? 'Rekomendasi Fast Track Terkirim'
                  : 'Kirim Rekomendasi Fast Track'}
              </span>
            </button>
          </div>

          {/* Job 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm font-extrabold text-primary shrink-0">
                  BL
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    UX Researcher Intern
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Blibli • Jakarta Pusat (Onsite)
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-[11px] font-bold">
                Match 88%
              </span>
            </div>

            <div className="flex items-center gap-4 font-body-sm text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  payments
                </span>
                Uang Saku Bulanan + Mentoring
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  school
                </span>
                Magang 6 Bulan
              </span>
            </div>

            <button
              type="button"
              onClick={() =>
                toggleApplyJob('blibli-uxr', 'UX Researcher Intern (Blibli)')
              }
              className={`w-full h-10 rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                appliedJobs['blibli-uxr']
                  ? 'bg-emerald-600 text-white'
                  : 'bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {appliedJobs['blibli-uxr'] ? 'check_circle' : 'send'}
              </span>
              <span>
                {appliedJobs['blibli-uxr']
                  ? 'Rekomendasi Fast Track Terkirim'
                  : 'Kirim Rekomendasi Fast Track'}
              </span>
            </button>
          </div>
        </section>

        {/* Section 5: Pengaturan & Bantuan Siswa */}
        <section className="space-y-2.5">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Pengaturan &amp; Bantuan Siswa
          </h2>

          <div className="bg-surface-container-lowest rounded-2xl shadow-sm divide-y divide-border-subtle/60 overflow-hidden">
            <button
              type="button"
              onClick={() => onNavigate('pengaturan')}
              className="w-full p-3.5 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    badge
                  </span>
                </div>
                <span className="font-label-lg text-on-surface font-semibold">
                  Kelola Data Portofolio &amp; Behance Link
                </span>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                onShowToast('Menghubungkan ke Student Advisor Karier...');
                onNavigate('komunitas');
              }}
              className="w-full p-3.5 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    support_agent
                  </span>
                </div>
                <span className="font-label-lg text-on-surface font-semibold">
                  Hubungi Student Advisor (Bantuan Karier)
                </span>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('pengaturan')}
              className="w-full p-3.5 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    lock_reset
                  </span>
                </div>
                <span className="font-label-lg text-on-surface font-semibold">
                  Keamanan Akun &amp; Ganti Kata Sandi
                </span>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">
                chevron_right
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('login')}
            className="w-full py-3 flex items-center justify-center gap-1.5 font-label-md text-on-surface-variant hover:text-error transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              logout
            </span>
            <span>Keluar dari Akun Siswa</span>
          </button>
        </section>
      </main>
    </div>
  );
};
