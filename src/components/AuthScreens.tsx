import React, { useState } from 'react';
import {
  ASSETS,
  evaluatePasswordStrength,
  ScreenId,
  UserProfile,
} from '../utils/inkaeduLogic';

interface LoginScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [loginMode, setLoginMode] = useState<'email' | 'fast'>('email');
  const [identifier, setIdentifier] = useState('amanda.maharani@email.com');
  const [password, setPassword] = useState('Inkaedu2025!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      onShowToast('Mohon isi email/nomor WhatsApp dan kata sandi Anda');
      return;
    }
    onShowToast('Berhasil masuk! Selamat datang kembali di inkaedu');
    onNavigate('beranda');
  };

  return (
    <div className="flex flex-col flex-1 bg-surface pb-10">
      {/* Header matching Image_8 */}
      <header className="relative inset-x-0 z-20 bg-surface border-b border-border-subtle/60">
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
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight">
              Login / Masuk
            </h1>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full px-gutter pt-4 space-y-5">
        {/* Hero Brand Icon & Title */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          <div className="relative w-16 h-16 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[32px]">
              school
            </span>
            <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-badge-amber text-on-tertiary-fixed flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[14px] icon-filled">
                bolt
              </span>
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-[10px] font-extrabold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary" />
            INKAEDU CAREER ECOSYSTEM
          </span>

          <h2 className="font-headline-xl-mobile text-[24px] text-on-surface font-extrabold">
            Selamat Datang Kembali! 👋
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
            Masuk untuk melanjutkan pembelajaran bootcamp dan konsultasi mentor.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-4">
          {/* Mode Tabs */}
          <div className="flex p-1 bg-surface-container-low rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setLoginMode('email')}
              className={
                loginMode === 'email'
                  ? 'flex-1 py-2.5 px-3 rounded-lg bg-surface-container-lowest shadow-xs text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 cursor-pointer'
                  : 'flex-1 py-2.5 px-3 rounded-lg text-on-surface-variant font-label-md text-label-md flex items-center justify-center gap-1.5 cursor-pointer'
              }
            >
              <span className="material-symbols-outlined text-[16px]">
                badge
              </span>
              <span>Email / HP</span>
            </button>
            <button
              type="button"
              onClick={() => setLoginMode('fast')}
              className={
                loginMode === 'fast'
                  ? 'flex-1 py-2.5 px-3 rounded-lg bg-surface-container-lowest shadow-xs text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 cursor-pointer'
                  : 'flex-1 py-2.5 px-3 rounded-lg text-on-surface-variant font-label-md text-label-md flex items-center justify-center gap-1.5 cursor-pointer'
              }
            >
              <span className="material-symbols-outlined text-[16px]">
                bolt
              </span>
              <span>Akses Cepat</span>
            </button>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <label
                htmlFor="login-id-input"
                className="block font-label-md text-label-md text-on-surface font-bold"
              >
                Email atau Nomor WhatsApp{' '}
                <span className="text-error">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                  alternate_email
                </span>
                <input
                  id="login-id-input"
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="nama@email.com atau 0812xxxx"
                  className="w-full h-12 pl-10 pr-4 rounded-xl bg-surface-container-low/70 text-on-surface font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="login-password-input"
                className="block font-label-md text-label-md text-on-surface font-bold"
              >
                Kata Sandi Akun <span className="text-error">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                  lock
                </span>
                <input
                  id="login-password-input"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ketik kata sandi Anda"
                  className="w-full h-12 pl-10 pr-11 rounded-xl bg-surface-container-low/70 text-on-surface font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none"
                />
                <button
                  type="button"
                  aria-label="Tampilkan atau sembunyikan kata sandi"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              <div className="flex justify-end pt-0.5">
                <button
                  type="button"
                  onClick={() =>
                    onShowToast(
                      'Tautan reset kata sandi telah dikirim ke email Anda'
                    )
                  }
                  className="font-label-sm text-label-sm text-primary font-bold hover:underline cursor-pointer"
                >
                  Lupa Kata Sandi?
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary"
                />
                <span>Ingat Saya di Perangkat Ini</span>
              </label>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-mentor-verified font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                Sesi Aman
              </span>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Masuk ke Akun Siswa</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 py-1">
            <div className="h-px bg-border-subtle flex-1" />
            <span className="font-body-sm text-[11px] text-on-surface-variant">
              atau masuk lebih cepat dengan
            </span>
            <div className="h-px bg-border-subtle flex-1" />
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={() => {
                onShowToast('Masuk cepat dengan akun Google berhasil!');
                onNavigate('beranda');
              }}
              className="w-full h-11 rounded-xl bg-surface-container-lowest border border-border-subtle hover:bg-surface-container-low font-label-md text-on-surface font-bold flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              <span className="font-headline-sm text-primary font-extrabold">
                G
              </span>
              <span>Lanjutkan dengan Google</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onShowToast('Masuk cepat dengan akun LinkedIn berhasil!');
                onNavigate('beranda');
              }}
              className="w-full h-11 rounded-xl bg-surface-container-lowest border border-border-subtle hover:bg-surface-container-low font-label-md text-on-surface font-bold flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              <span className="px-1.5 py-0.5 rounded bg-sky-700 text-white font-bold text-[11px]">
                in
              </span>
              <span>Lanjutkan dengan LinkedIn</span>
            </button>
          </div>
        </div>

        {/* Switch to Register */}
        <p className="text-center font-body-md text-body-md text-on-surface-variant">
          Belum punya akun inkaedu?{' '}
          <button
            type="button"
            onClick={() => onNavigate('register')}
            className="text-primary font-bold hover:underline cursor-pointer"
          >
            Daftar Akun Baru
          </button>
        </p>

        {/* Live Cohort Status Card */}
        <div className="bg-surface-container-low rounded-2xl p-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={ASSETS.bootcampUiUx}
              alt="Batch 14"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0">
              <p className="font-headline-sm text-[14px] text-on-surface font-bold truncate">
                Batch 14 Telah Dimulai
              </p>
              <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                3.400+ siswa belajar live malam ini
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-badge-amber-surface text-tertiary font-label-sm text-[11px] font-bold shrink-0">
            <span className="material-symbols-outlined text-[13px] icon-filled">
              local_fire_department
            </span>
            Aktif
          </span>
        </div>

        {/* Security Notice Card */}
        <div className="bg-track-cyan-surface/60 rounded-2xl p-3.5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-surface-container-lowest text-secondary flex items-center justify-center shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-[20px]">
              verified_user
            </span>
          </div>
          <div className="space-y-0.5">
            <p className="font-label-md text-secondary font-bold">
              Keamanan Enkripsi End-to-End
            </p>
            <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
              Seluruh data profil siswa, portofolio tugas, dan sesi mentoring
              privat dilindungi dengan standar kepatuhan privasi ISO 27001 &amp;
              PSE Kominfo.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

interface RegisterScreenProps {
  onRegisterSuccess: (newUser: Partial<UserProfile>) => void;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  onRegisterSuccess,
  onNavigate,
  onShowToast,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('UI/UX Design');
  const [agreed, setAgreed] = useState(true);

  const strength = evaluatePasswordStrength(password);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !whatsapp.trim() || !password) {
      onShowToast('Mohon lengkapi semua kolom pendaftaran wajib');
      return;
    }
    if (!agreed) {
      onShowToast('Harap setujui Syarat & Ketentuan serta Kebijakan Privasi');
      return;
    }
    onRegisterSuccess({
      name: fullName.trim(),
      email: email.trim(),
      phone: whatsapp.trim(),
      batchLabel: `Bootcamp Batch 12 • ${selectedTrack}`,
    });
    onShowToast(
      `Selamat bergabung, ${fullName.trim()}! Akun siswa berhasil dibuat.`
    );
    onNavigate('beranda');
  };

  return (
    <div className="flex flex-col flex-1 bg-surface pb-10">
      {/* Header matching Image_18 */}
      <header className="relative inset-x-0 z-20 bg-surface border-b border-border-subtle/60">
        <div className="h-16 px-gutter flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs min-w-0">
            <button
              type="button"
              aria-label="Kembali ke Login"
              onClick={() => onNavigate('login')}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                arrow_back
              </span>
            </button>
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight">
              Register / Daftar Akun Siswa
            </h1>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full px-gutter pt-4 space-y-5">
        {/* Top Hero Copy */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-[10px] font-extrabold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary" />
            PENDAFTARAN SISWA BARU • GRATIS
          </span>
          <h2 className="font-headline-xl-mobile text-[24px] text-on-surface font-extrabold">
            Mulai Akselerasi Kariermu 🚀
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Daftar sekarang untuk akses bootcamp intensif, bimbingan portofolio,
            dan bursa kerja.
          </p>
        </div>

        {/* Social Signup Buttons */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() => {
              onShowToast('Pendaftaran cepat via Google berhasil!');
              onNavigate('beranda');
            }}
            className="w-full h-11 rounded-xl bg-surface-container-lowest shadow-xs border border-border-subtle hover:bg-surface-container-low font-label-md text-on-surface font-bold flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span className="font-headline-sm text-primary font-extrabold">
              G
            </span>
            <span>Daftar Cepat dengan Google</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onShowToast('Pendaftaran cepat via LinkedIn berhasil!');
              onNavigate('beranda');
            }}
            className="w-full h-11 rounded-xl bg-surface-container-lowest shadow-xs border border-border-subtle hover:bg-surface-container-low font-label-md text-on-surface font-bold flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span className="px-1.5 py-0.5 rounded bg-sky-700 text-white font-bold text-[11px]">
              in
            </span>
            <span>Daftar dengan LinkedIn</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-px bg-border-subtle flex-1" />
          <span className="font-body-sm text-[11px] text-on-surface-variant">
            atau daftar dengan email
          </span>
          <div className="h-px bg-border-subtle flex-1" />
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="reg-name-input"
              className="block font-label-md text-on-surface font-bold"
            >
              Nama Lengkap <span className="text-error">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                badge
              </span>
              <input
                id="reg-name-input"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Contoh: Amanda Maharani"
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-body-md focus:ring-2 focus:ring-primary-container outline-none"
              />
            </div>
            <p className="font-body-sm text-[11px] text-on-surface-variant">
              Sesuai KTP untuk penerbitan sertifikat resmi
            </p>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="reg-email-input"
              className="block font-label-md text-on-surface font-bold"
            >
              Alamat Email Aktif <span className="text-error">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                mail
              </span>
              <input
                id="reg-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emailkamu@domain.com"
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-body-md focus:ring-2 focus:ring-primary-container outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="reg-wa-input"
              className="block font-label-md text-on-surface font-bold"
            >
              Nomor WhatsApp Aktif <span className="text-error">*</span>
            </label>
            <div className="flex gap-2">
              <div className="h-12 px-3 rounded-xl bg-surface-container-low flex items-center gap-1.5 font-label-md text-on-surface font-bold shrink-0">
                <span
                  aria-hidden="true"
                  className="w-4 h-3 rounded-[2px] overflow-hidden flex flex-col border border-border-subtle shadow-2xs shrink-0"
                >
                  <span className="h-1/2 w-full bg-red-600 block" />
                  <span className="h-1/2 w-full bg-white block" />
                </span>
                <span>+62</span>
              </div>
              <input
                id="reg-wa-input"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="812-3456-7890"
                className="flex-1 h-12 px-3.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-body-md focus:ring-2 focus:ring-primary-container outline-none"
              />
            </div>
            <p className="font-body-sm text-[11px] text-on-surface-variant">
              Untuk undangan grup koordinasi &amp; mentor batch
            </p>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="reg-password-input"
              className="block font-label-md text-on-surface font-bold"
            >
              Kata Sandi <span className="text-error">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                lock
              </span>
              <input
                id="reg-password-input"
                type={showPass ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 8 karakter kombinasi"
                className="w-full h-12 pl-10 pr-11 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-body-md focus:ring-2 focus:ring-primary-container outline-none"
              />
              <button
                type="button"
                aria-label="Tampilkan kata sandi pendaftaran"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPass ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>

            {/* Password Strength Bar */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {[1, 2, 3].map((bar) => (
                <div
                  key={bar}
                  className={`h-1.5 rounded-full transition-colors ${
                    strength.score >= bar
                      ? strength.colorClass
                      : 'bg-surface-container-high'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between font-label-sm text-[11px] text-on-surface-variant">
              <span>Kekuatan: {strength.label}</span>
              <span>Kombinasi huruf &amp; angka</span>
            </div>
          </div>

          {/* Peminatan Utama (Career Track) */}
          <div className="space-y-2">
            <label className="block font-label-md text-on-surface font-bold">
              Peminatan Utama (Career Track){' '}
              <span className="text-error">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: 'UI/UX Design', icon: 'palette', color: 'text-secondary' },
                { label: 'Fullstack Web', icon: 'code', color: 'text-primary' },
                {
                  label: 'Data Science & AI',
                  icon: 'insights',
                  color: 'text-tertiary',
                },
                {
                  label: 'Digital Marketing',
                  icon: 'campaign',
                  color: 'text-badge-amber',
                },
              ].map((track) => {
                const active = selectedTrack === track.label;
                return (
                  <button
                    key={track.label}
                    type="button"
                    onClick={() => setSelectedTrack(track.label)}
                    className={`p-3 rounded-xl flex items-center gap-2 text-left font-label-md transition-all cursor-pointer ${
                      active
                        ? 'bg-surface-container-lowest ring-2 ring-primary shadow-sm text-primary font-bold'
                        : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low shadow-xs'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${track.color}`}
                    >
                      {track.icon}
                    </span>
                    <span className="truncate">{track.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <label className="flex items-start gap-2.5 pt-1 cursor-pointer font-body-sm text-body-sm text-on-surface-variant">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-primary"
            />
            <span>
              Saya menyetujui{' '}
              <span className="text-primary font-semibold">
                Syarat &amp; Ketentuan
              </span>{' '}
              serta{' '}
              <span className="text-primary font-semibold">
                Kebijakan Privasi
              </span>{' '}
              inkaedu.
            </span>
          </label>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all cursor-pointer"
          >
            <span>Buat Akun Siswa Sekarang</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </form>

        <p className="text-center font-body-md text-body-md text-on-surface-variant">
          Sudah punya akun inkaedu?{' '}
          <button
            type="button"
            onClick={() => onNavigate('login')}
            className="text-primary font-bold hover:underline cursor-pointer"
          >
            Masuk di Sini
          </button>
        </p>

        {/* Keuntungan Bergabung Box */}
        <div className="bg-surface-container-low rounded-2xl p-4 space-y-3">
          <p className="font-label-sm text-[11px] text-on-surface-variant font-extrabold uppercase tracking-wider">
            KEUNTUNGAN BERGABUNG:
          </p>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-badge-amber-surface text-badge-amber flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] icon-filled">
                  bolt
                </span>
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  Akses Rekaman Selamanya
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  Review modul kapan pun tanpa batas waktu
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-track-cyan-surface text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  Sertifikat Ber-QR Code
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  Terverifikasi dan siap disematkan di LinkedIn
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]">
                  work
                </span>
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  Job Guarantee Partner
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  Tersambung ke 350+ jaringan perusahaan hiring
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
