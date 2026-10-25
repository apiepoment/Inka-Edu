import React, { useState } from 'react';
import { ASSETS, ScreenId, UserProfile } from '../utils/inkaeduLogic';
import { MainTabHeader } from './NavigationChrome';

interface AkunPengaturanScreenProps {
  profile: UserProfile;
  onUpdateProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const AkunPengaturanScreen: React.FC<AkunPengaturanScreenProps> = ({
  profile,
  onUpdateProfile,
  onNavigate,
  onShowToast,
}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const [nameInput, setNameInput] = useState(profile.name);
  const [headlineInput, setHeadlineInput] = useState(profile.headline);
  const [phoneInput, setPhoneInput] = useState(profile.phone);
  const [behanceInput, setBehanceInput] = useState(profile.behanceUrl);
  const [linkedinInput, setLinkedinInput] = useState(profile.linkedinUrl);
  const [notionInput, setNotionInput] = useState(profile.notionUrl);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    onUpdateProfile((prev) => ({
      ...prev,
      name: nameInput.trim(),
      headline: headlineInput.trim(),
      phone: phoneInput.trim(),
      behanceUrl: behanceInput.trim(),
      linkedinUrl: linkedinInput.trim(),
      notionUrl: notionInput.trim(),
      portfolioCompletion: notionInput.trim() ? 100 : prev.portfolioCompletion,
    }));
    setEditModalOpen(false);
    onShowToast('Profil & Tautan Portofolio Berhasil Disimpan!');
  };

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Profil & Hub Karier"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pb-10 space-y-space-md pt-2">
        {/* Subpage Top Bar */}
        <div className="flex items-center justify-between pt-space-xs pb-space-xs">
          <div className="flex items-center gap-space-sm min-w-0">
            <button
              type="button"
              aria-label="Kembali ke Profil"
              onClick={() => onNavigate('profil')}
              className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <div className="min-w-0">
              <h1 className="font-headline-md text-headline-md text-on-surface truncate">
                Akun &amp; Pengaturan
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Kelola data personal &amp; preferensi belajar
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-label-sm shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Siswa Aktif
          </span>
        </div>

        {/* Student Profile Summary Card */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-36 h-36 bg-gradient-to-br from-primary-fixed to-secondary-container opacity-40 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start gap-space-md relative">
            <div className="relative shrink-0">
              <img
                className="w-16 h-16 rounded-full object-cover shadow-sm"
                referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                alt={profile.name}
                src={profile.avatar}
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-mentor-verified text-on-primary flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[14px] icon-filled">
                  check
                </span>
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">
                  {profile.name}
                </h2>
              </div>
              <p className="font-label-md text-label-md text-primary truncate">
                {profile.batchLabel}
              </p>
              <div className="pt-1 flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm truncate">
                  <span className="material-symbols-outlined text-[15px] shrink-0 text-outline">
                    mail
                  </span>
                  <span className="truncate">{profile.email}</span>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm truncate">
                  <span className="material-symbols-outlined text-[15px] shrink-0 text-outline">
                    phone_iphone
                  </span>
                  <span>+62 {profile.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Snippet */}
          <div className="grid grid-cols-3 gap-2 bg-surface-container-low rounded-lg p-2.5">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Total Belajar
              </span>
              <span className="font-headline-sm text-headline-sm text-primary">
                {profile.totalHours} Jam
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Streak Aktif
              </span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-badge-amber icon-filled">
                  local_fire_department
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {profile.streakDays} Hari
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Predikat Akhir
              </span>
              <span className="font-headline-sm text-headline-sm text-mentor-verified">
                {profile.grade}
              </span>
            </div>
          </div>

          {/* Edit Profile Action Button */}
          <button
            type="button"
            id="open-edit-modal-btn"
            onClick={() => setEditModalOpen(true)}
            className="w-full h-11 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              edit_note
            </span>
            <span>Edit Profil Siswa &amp; Portofolio</span>
          </button>
        </div>

        {/* Kelompok Menu 1: Aktivitas Akademik & Studi */}
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Aktivitas Akademik &amp; Studi
            </span>
            <span className="font-label-sm text-label-sm text-primary">
              4 Modul Terbuka
            </span>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={() => setEditModalOpen(true)}
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    badge
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Edit Profil Pribadi &amp; Portofolio
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    KTP, headline karier, tautan Behance, Figma &amp; GitHub
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('belajar')}
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-track-cyan-surface text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    history_edu
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Riwayat Pembelajaran
                    </p>
                    <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm">
                      142 Jam
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Log rekaman webinar, sesi live class &amp; catatan belajar
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                onShowToast('Mengunduh Transkrip Nilai Resmi Batch 11 (Grade A)')
              }
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    workspace_premium
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Hasil Studi &amp; Transkrip Nilai
                    </p>
                    <span className="px-1.5 py-0.5 rounded bg-badge-amber-surface text-badge-amber font-label-sm text-label-sm">
                      Grade A
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Skor Capstone, evaluasi mentor &amp; unduh transkrip PDF
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('profil')}
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-mentor-verified flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    verified
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Sertifikat &amp; Lisensi
                    </p>
                    <span className="px-1.5 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-label-sm">
                      3 Tersedia
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Sertifikat kompetensi QR code resmi terverifikasi inkaedu
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        {/* Kelompok Menu 2: Preferensi & Keamanan Akun */}
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Preferensi &amp; Keamanan Akun
            </span>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={() =>
                onShowToast('Pengaturan notifikasi WhatsApp & Zoom aktif')
              }
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    notifications_active
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Pengaturan Notifikasi
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Jadwal Zoom, diskusi mentor, peringatan WhatsApp
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                onShowToast('Autentikasi 2 Faktor (2FA) aktif & terlindungi')
              }
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    lock
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Keamanan &amp; Kata Sandi
                    </p>
                    <span className="px-1.5 py-0.5 rounded bg-track-cyan-surface text-secondary font-label-sm text-label-sm">
                      2FA Aktif
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Ganti PIN/password &amp; kelola 2 perangkat terhubung
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('checkout')}
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    credit_card
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Metode Pembayaran &amp; Tagihan
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    BCA VA tersimpan, e-wallet, kuitansi pajak &amp; garansi
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <div className="w-full p-space-md flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    translate
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Bahasa &amp; Preferensi Sistem
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Bahasa Indonesia (ID) • Format WIB
                  </p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-primary px-2.5 py-1 bg-surface-container-high rounded-full">
                ID
              </span>
            </div>
          </div>
        </div>

        {/* Kelompok Menu 3: Bantuan & Kebijakan Resmi */}
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Bantuan &amp; Kebijakan Resmi
            </span>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={() => onNavigate('komunitas')}
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-track-cyan-surface text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    support_agent
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Pusat Bantuan &amp; Live Chat
                    </p>
                    <span className="w-2 h-2 rounded-full bg-mentor-verified" />
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Konsultasi karier &amp; kendala belajar dengan Student
                    Advisor
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                onShowToast('Menampilkan dokumen Syarat & Ketentuan inkaedu')
              }
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    gavel
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Syarat &amp; Ketentuan Penggunaan
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Hak cipta silabus &amp; etika komunitas inkaedu
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                onShowToast(
                  'Menampilkan standar perlindungan privasi ISO 27001 & PSE Kominfo'
                )
              }
              className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    shield
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Kebijakan Privasi &amp; Data
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Standar perlindungan ISO 27001 &amp; PSE Kominfo
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline shrink-0 text-[20px] ml-2">
                chevron_right
              </span>
            </button>

            <div className="w-full p-space-md flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    info
                  </span>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Tentang inkaedu
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Lisensi PT inkaedu Edukasi Indonesia
                  </p>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 bg-surface-container-low rounded">
                v2.4.0 (2025)
              </span>
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            id="logout-trigger-btn"
            onClick={() => setLogoutModalOpen(true)}
            className="w-full h-12 bg-error-container text-error font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-2 active:bg-error active:text-on-error transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">
              logout
            </span>
            <span>Keluar dari Akun Siswa</span>
          </button>
          <div className="flex items-center justify-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm text-center">
            <span className="material-symbols-outlined text-[15px] text-mentor-verified">
              lock_clock
            </span>
            <span>
              Sesi login Anda dienkripsi secara aman dengan TLS 1.3
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Sheet / Modal: Edit Profil Siswa */}
      {editModalOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex flex-col justify-end sm:justify-center sm:items-center">
          <div className="bg-surface-container-lowest w-full max-w-md max-h-[85vh] rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <div className="p-space-md flex items-center justify-between bg-surface-container-lowest shrink-0 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">
                    edit
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Ubah Profil &amp; Tautan
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Perbarui identitas dan portofolio profesional
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Tutup modal ubah profil"
                onClick={() => setEditModalOpen(false)}
                className="w-9 h-9 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            <form
              onSubmit={handleSaveProfile}
              className="p-space-md overflow-y-auto space-y-space-md flex-1"
            >
              <div className="flex items-center gap-space-md p-3 bg-surface-container-low rounded-xl">
                <div className="relative shrink-0">
                  <img
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                    alt="Amanda Maharani"
                    src={ASSETS.amandaModal}
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px]">
                    <span className="material-symbols-outlined text-[10px]">
                      photo_camera
                    </span>
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-headline-sm text-headline-sm text-on-surface text-[14px]">
                    Foto Profil Anda
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                    Format PNG/JPG, maks 2MB (Formal/Semi-formal)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onShowToast('Pilih foto profil baru dari perangkat Anda')
                  }
                  className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-primary font-label-sm text-label-sm shrink-0 cursor-pointer"
                >
                  Ganti Foto
                </button>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="profile-name-input"
                  className="block font-label-md text-label-md text-on-surface"
                >
                  Nama Lengkap (Sesuai KTP/Ijazah)
                </label>
                <input
                  id="profile-name-input"
                  type="text"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full h-12 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all"
                />
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                  Nama ini yang akan dicetak pada Sertifikat Kelulusan resmi.
                </p>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="profile-headline-input"
                  className="block font-label-md text-label-md text-on-surface"
                >
                  Headline Karier / Bio Singkat
                </label>
                <input
                  id="profile-headline-input"
                  type="text"
                  value={headlineInput}
                  onChange={(e) => setHeadlineInput(e.target.value)}
                  className="w-full h-12 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="profile-phone-input"
                  className="block font-label-md text-label-md text-on-surface"
                >
                  Nomor WhatsApp Aktif
                </label>
                <div className="flex gap-2">
                  <div className="h-12 px-3 rounded-lg bg-surface-container-low flex items-center font-label-md text-label-md text-on-surface-variant shrink-0">
                    +62
                  </div>
                  <input
                    id="profile-phone-input"
                    type="tel"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="flex-1 h-12 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <label className="block font-label-md text-label-md text-on-surface">
                  Tautan Portofolio &amp; Media Profesional
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 h-12 px-3 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                      palette
                    </span>
                    <input
                      type="url"
                      value={behanceInput}
                      onChange={(e) => setBehanceInput(e.target.value)}
                      placeholder="Tautan Behance / Dribbble"
                      className="flex-1 bg-transparent text-on-surface font-body-sm text-body-sm outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2 h-12 px-3 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                      link
                    </span>
                    <input
                      type="url"
                      value={linkedinInput}
                      onChange={(e) => setLinkedinInput(e.target.value)}
                      placeholder="Profil LinkedIn"
                      className="flex-1 bg-transparent text-on-surface font-body-sm text-body-sm outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2 h-12 px-3 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0">
                      folder_shared
                    </span>
                    <input
                      type="url"
                      value={notionInput}
                      onChange={(e) => setNotionInput(e.target.value)}
                      placeholder="https://notion.so/portofolio-amanda (Opsional)"
                      className="flex-1 bg-transparent text-on-surface font-body-sm text-body-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 pb-4">
                <button
                  type="submit"
                  className="w-full h-12 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    save
                  </span>
                  <span>Simpan Perubahan Data Siswa</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Logout Confirmation Dialog Modal */}
      {logoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-sm w-full rounded-2xl p-space-md shadow-2xl space-y-space-md text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-error-container text-error flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">
                logout
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Keluar dari Akun?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Anda harus memasukkan email dan kata sandi kembali untuk
                mengakses materi bootcamp inkaedu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setLogoutModalOpen(false)}
                className="h-11 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md active:bg-surface-container-high transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  setLogoutModalOpen(false);
                  onShowToast('Sesi ditutup. Mengalihkan ke halaman login...');
                  onNavigate('login');
                }}
                className="h-11 rounded-lg bg-error text-on-error font-label-md text-label-md shadow-sm active:opacity-90 transition-opacity cursor-pointer"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
