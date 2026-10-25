import React, { useState } from 'react';
import { ASSETS, ScreenId } from '../utils/inkaeduLogic';
import { OptimizedImage } from './OptimizedImage';

export type ViewportMode = 'auto' | 'mobile' | 'tablet' | 'desktop';

interface ResponsiveTopNavbarProps {
  activeScreen: ScreenId;
  viewportMode: ViewportMode;
  onChangeViewportMode: (mode: ViewportMode) => void;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

const SCREEN_SUBTITLES: Record<ScreenId, string> = {
  beranda: 'Beranda & Katalog',
  tentang: 'Tentang Kami',
  layanan: 'Layanan Ekosistem',
  kontak: 'Kontak & Bantuan',
  program: 'Detail Program',
  checkout: 'Checkout Bootcamp',
  komunitas: 'Komunitas & Mentor',
  'tanya-mentor-detail': 'Tanya Mentor Detail',
  belajar: 'Ruang Belajar Saya',
  profil: 'Profil & Hub Karier',
  pengaturan: 'Akun & Pengaturan',
  login: 'Login Siswa',
  register: 'Daftar Siswa Baru',
};

export const ECOSYSTEM_SCREENS: {
  id: ScreenId;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: string;
}[] = [
  {
    id: 'beranda',
    title: '1. Beranda',
    shortTitle: 'Beranda',
    subtitle: 'Home & Katalog Populer',
    icon: 'home',
  },
  {
    id: 'program',
    title: '2. Detail Program',
    shortTitle: 'Detail Program',
    subtitle: 'Silabus 12 Minggu & Alumni',
    icon: 'school',
  },
  {
    id: 'checkout',
    title: '3. Checkout Bootcamp',
    shortTitle: 'Checkout',
    subtitle: 'Voucher & Metode Bayar',
    icon: 'shopping_cart_checkout',
  },
  {
    id: 'komunitas',
    title: '4. Komunitas & Mentor',
    shortTitle: 'Komunitas',
    subtitle: 'Forum Diskusi & Filter',
    icon: 'forum',
  },
  {
    id: 'tanya-mentor-detail',
    title: '5. Tanya Mentor Detail',
    shortTitle: 'Tanya Mentor',
    subtitle: 'Solusi Praktisi & Voice Memo',
    icon: 'record_voice_over',
  },
  {
    id: 'belajar',
    title: '6. Ruang Belajar Saya',
    shortTitle: 'Ruang Belajar',
    subtitle: 'Progres, Live Zoom & Tugas',
    icon: 'local_library',
  },
  {
    id: 'profil',
    title: '7. Profil & Hub Karier',
    shortTitle: 'Profil & Karier',
    subtitle: 'Sertifikat QR, ATS & Loker',
    icon: 'workspace_premium',
  },
  {
    id: 'pengaturan',
    title: '8. Akun & Pengaturan',
    shortTitle: 'Pengaturan',
    subtitle: 'Edit Portofolio & Keamanan',
    icon: 'manage_accounts',
  },
  {
    id: 'login',
    title: '9. Login / Masuk',
    shortTitle: 'Login',
    subtitle: 'Akses Akun Siswa',
    icon: 'login',
  },
  {
    id: 'register',
    title: '10. Register Siswa Baru',
    shortTitle: 'Register',
    subtitle: 'Pendaftaran & Peminatan',
    icon: 'person_add',
  },
];

export const ResponsiveTopNavbar: React.FC<ResponsiveTopNavbarProps> = ({
  activeScreen,
  viewportMode,
  onChangeViewportMode,
  onNavigate,
  onShowToast,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const primaryNavLinks: { id: ScreenId; label: string; icon: string }[] = [
    { id: 'beranda', label: 'Beranda', icon: 'home' },
    { id: 'tentang', label: 'Tentang', icon: 'info' },
    { id: 'layanan', label: 'Layanan', icon: 'design_services' },
    { id: 'kontak', label: 'Kontak', icon: 'contact_support' },
  ];

  const modeOptions: { id: ViewportMode; label: string; icon: string }[] = [
    { id: 'auto', label: 'Responsif', icon: 'devices' },
    { id: 'mobile', label: 'Mobile', icon: 'smartphone' },
    { id: 'tablet', label: 'Tablet', icon: 'tablet_mac' },
    { id: 'desktop', label: 'Desktop', icon: 'desktop_windows' },
  ];

  const handleNavClick = (screen: ScreenId) => {
    setMobileMenuOpen(false);
    setNotifOpen(false);
    onNavigate(screen);
  };

  return (
    <header
      aria-label="Bilah Navigasi Utama"
      className="sticky top-0 inset-x-0 z-50 w-full bg-surface/95 backdrop-blur-xl border-b border-border-subtle shadow-[0_2px_10px_rgba(19,27,46,0.05)]"
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo & Subtitle */}
        <button
          type="button"
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-2.5 min-w-0 text-left focus:outline-none cursor-pointer"
        >
          <OptimizedImage
            alt="inkaedu Logo"
            src={ASSETS.logo}
            targetWidth={96}
            className="h-8 w-auto object-contain shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold truncate leading-none">
                inkaedu
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-md bg-primary-fixed text-primary font-label-sm text-[10px] font-bold">
                EdTech
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant truncate mt-0.5">
              {SCREEN_SUBTITLES[activeScreen] || 'Lentera Modern Edtech'}
            </span>
          </div>
        </button>

        {/* Desktop & Tablet Primary Navigation Links (Visible on md and up, hidden on mobile) */}
        <nav
          aria-label="Menu Navigasi Desktop"
          className="hidden md:flex items-center gap-1 lg:gap-1.5"
        >
          {primaryNavLinks.map((link) => {
            const isActive = activeScreen === link.id;
            return (
              <button
                key={link.id}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 lg:px-3.5 py-2 rounded-xl font-label-md text-[13px] transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low font-semibold'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Interactive 3-Mode Viewport Switcher (Mobile / Tablet / Desktop) */}
        <div
          role="group"
          aria-label="Mode Tampilan Layar"
          className="hidden xl:flex items-center bg-surface-container-low p-1 rounded-xl border border-border-subtle/60"
        >
          {modeOptions.map((mode) => {
            const active = viewportMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  onChangeViewportMode(mode.id);
                  onShowToast(`Mode tampilan diubah ke: ${mode.label}`);
                }}
                className={`px-2.5 py-1 rounded-lg font-label-sm text-[11px] flex items-center gap-1 transition-all cursor-pointer ${
                  active
                    ? 'bg-surface-container-lowest text-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {mode.icon}
                </span>
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Actions & Mobile Hamburger Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 relative">
          {/* Notification Bell */}
          <button
            type="button"
            aria-label="Notifikasi"
            onClick={() => {
              setNotifOpen((prev) => !prev);
              setMobileMenuOpen(false);
            }}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface" />
          </button>

          {/* User Profile Avatar & Desktop Name Pill */}
          <button
            type="button"
            aria-label="Profil Pengguna"
            onClick={() => handleNavClick('profil')}
            className="flex items-center gap-2 pl-1 pr-1 lg:pr-3 py-1 rounded-full hover:bg-surface-container-low transition-colors cursor-pointer"
          >
            <OptimizedImage
              alt="Profile"
              src={ASSETS.profileNav}
              targetWidth={64}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20 shrink-0"
            />
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-label-sm text-[12px] text-on-surface font-bold leading-none">
                Amanda M.
              </span>
              <span className="font-body-sm text-[10px] text-mentor-verified font-semibold">
                Batch 12 Active
              </span>
            </div>
          </button>

          {/* Hamburger Menu Toggle Button (Visible on smaller screens < md) */}
          <button
            type="button"
            aria-label="Menu Navigasi"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-hamburger-menu"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setNotifOpen(false);
            }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Notification Dropdown */}
          {notifOpen && (
            <div className="absolute right-0 top-13 w-72 sm:w-80 bg-surface-container-lowest rounded-2xl shadow-xl border border-border-subtle p-3 z-50 space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-border-subtle">
                <span className="font-headline-sm text-[13px] font-bold text-on-surface">
                  Notifikasi Terbaru
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setNotifOpen(false);
                    onShowToast('Semua notifikasi ditandai sudah dibaca');
                  }}
                  className="font-label-sm text-[11px] text-primary hover:underline cursor-pointer"
                >
                  Tandai Baca
                </button>
              </div>
              <button
                type="button"
                onClick={() => handleNavClick('tanya-mentor-detail')}
                className="w-full text-left p-2 rounded-xl hover:bg-surface-container-low transition-colors flex items-start gap-2.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                  verified
                </span>
                <div className="min-w-0">
                  <p className="font-label-sm text-on-surface font-semibold truncate">
                    Mentor Dimas menjawab pertanyaanmu
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                    “Halo Amanda! Selamat atas keputusannya...”
                  </p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('belajar')}
                className="w-full text-left p-2 rounded-xl hover:bg-surface-container-low transition-colors flex items-start gap-2.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-badge-amber text-[18px] mt-0.5">
                  videocam
                </span>
                <div className="min-w-0">
                  <p className="font-label-sm text-on-surface font-semibold truncate">
                    Sesi Live Mentoring Besok 19:30 WIB
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                    Usability Testing &amp; Bedah Portofolio
                  </p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tablet Quick Ecosystem Bar (Visible on Tablet md..lg so tablet users have 1-tap access to all screens) */}
      <div
        aria-label="Navigasi Cepat Tablet"
        className="hidden md:flex lg:hidden items-center gap-1.5 px-6 py-2 bg-surface-container-low/80 border-t border-border-subtle/60 overflow-x-auto no-scrollbar"
      >
        <span className="font-label-sm text-[11px] text-on-surface-variant font-bold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-primary">
            tablet_mac
          </span>
          Mode Tablet:
        </span>
        {ECOSYSTEM_SCREENS.map((scr) => {
          const active = activeScreen === scr.id;
          return (
            <button
              key={scr.id}
              type="button"
              onClick={() => handleNavClick(scr.id)}
              className={`shrink-0 px-2.5 py-1.5 rounded-lg font-label-sm text-[11px] flex items-center gap-1 transition-all cursor-pointer ${
                active
                  ? 'bg-primary text-on-primary font-bold shadow-xs'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary font-medium'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {scr.icon}
              </span>
              <span>{scr.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Collapsible Mobile Hamburger Menu (Smaller screens < md) */}
      {mobileMenuOpen && (
        <nav
          id="mobile-hamburger-menu"
          aria-label="Menu Hamburger Mobile"
          className="md:hidden bg-surface-container-lowest border-t border-border-subtle px-4 pt-3 pb-4 shadow-lg space-y-3 max-h-[80vh] overflow-y-auto"
        >
          <div className="grid grid-cols-2 gap-2">
            {primaryNavLinks.map((link) => {
              const isActive = activeScreen === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-label-md text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-bold shadow-xs'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high font-semibold'
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px]">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* All Ecosystem Screens inside Mobile Drawer */}
          <div className="pt-2 border-t border-border-subtle space-y-1.5">
            <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">
              Eksplorasi Fitur Ekosistem inkaedu
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {ECOSYSTEM_SCREENS.slice(1).map((scr) => {
                const active = activeScreen === scr.id;
                return (
                  <button
                    key={scr.id}
                    type="button"
                    onClick={() => handleNavClick(scr.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg font-label-sm text-[11px] text-left truncate cursor-pointer ${
                      active
                        ? 'bg-primary text-on-primary font-bold'
                        : 'bg-surface-container-low/70 text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px] shrink-0">
                      {scr.icon}
                    </span>
                    <span className="truncate">{scr.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-border-subtle flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('program')}
              className="flex-1 h-10 rounded-xl bg-surface-container-high text-primary font-label-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                school
              </span>
              <span>Program Bootcamp</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('login')}
              className="px-4 h-10 rounded-xl bg-primary-container text-on-primary font-label-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                login
              </span>
              <span>Masuk</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

interface MainTabHeaderProps {
  subtitle: string;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const MainTabHeader: React.FC<MainTabHeaderProps> = () => {
  return null;
};

interface BottomTabBarProps {
  activeScreen: ScreenId;
  viewportMode?: ViewportMode;
  onNavigate: (screen: ScreenId) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeScreen,
  viewportMode = 'auto',
  onNavigate,
}) => {
  const tabs: { id: ScreenId; label: string; icon: string; hasDot?: boolean }[] = [
    { id: 'beranda', label: 'Beranda', icon: 'home' },
    { id: 'program', label: 'Program', icon: 'school' },
    { id: 'komunitas', label: 'Komunitas', icon: 'forum', hasDot: true },
    { id: 'belajar', label: 'Belajar', icon: 'local_library' },
    { id: 'profil', label: 'Profil', icon: 'person' },
  ];

  const isTabActive = (tabId: ScreenId) => {
    if (tabId === 'profil' && (activeScreen === 'profil' || activeScreen === 'pengaturan')) {
      return true;
    }
    if (
      tabId === 'komunitas' &&
      (activeScreen === 'komunitas' || activeScreen === 'tanya-mentor-detail')
    ) {
      return true;
    }
    if (tabId === 'program' && (activeScreen === 'program' || activeScreen === 'checkout')) {
      return true;
    }
    return activeScreen === tabId;
  };

  return (
    <nav
      aria-label="Navigasi Bawah"
      className={`${
        viewportMode === 'mobile' ? 'sticky' : 'fixed md:hidden'
      } bottom-0 inset-x-0 z-40 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(15,23,42,0.06)] border-t border-border-subtle/60`}
    >
      <div className="flex justify-around items-center h-16 px-1">
        {tabs.map((tab) => {
          const active = isTabActive(tab.id);
          return (
            <button
              key={tab.id}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors cursor-pointer ${
                active
                  ? 'text-primary-container font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[22px] ${
                    active ? 'icon-filled' : ''
                  }`}
                >
                  {tab.icon}
                </span>
                {tab.hasDot && (
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-tertiary-container ring-1 ring-surface" />
                )}
              </span>
              <span className="font-label-sm text-[10px] leading-tight whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

interface DesktopScreenNavigatorProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const DesktopScreenNavigator: React.FC<DesktopScreenNavigatorProps> = ({
  activeScreen,
  onNavigate,
}) => {
  const screens: { id: ScreenId; title: string; subtitle: string; icon: string }[] = [
    ...ECOSYSTEM_SCREENS.slice(0, 1),
    {
      id: 'tentang',
      title: 'Tentang Kami',
      subtitle: 'Visi, Misi & Dewan Mentor',
      icon: 'info',
    },
    {
      id: 'layanan',
      title: 'Layanan Ekosistem',
      subtitle: 'Bootcamp, Mentoring & Karier',
      icon: 'design_services',
    },
    {
      id: 'kontak',
      title: 'Kontak & Bantuan',
      subtitle: 'WhatsApp, Email & Konsultasi',
      icon: 'contact_support',
    },
    ...ECOSYSTEM_SCREENS.slice(1),
  ];

  return (
    <aside
      aria-label="Sidebar Navigasi Desktop"
      className="hidden lg:flex flex-col w-72 shrink-0 sticky top-22 self-start bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-subtle space-y-3"
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-border-subtle">
        <OptimizedImage
          src={ASSETS.logo}
          alt="inkaedu"
          targetWidth={96}
          className="h-8 w-auto object-contain"
        />
        <div>
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary leading-none">
            inkaedu Ecosystem
          </h2>
          <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
            Mode Desktop • 13 Halaman
          </p>
        </div>
      </div>

      <div className="space-y-1 max-h-[72vh] overflow-y-auto pr-1">
        {screens.map((item) => {
          const active = activeScreen === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all cursor-pointer ${
                active
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'hover:bg-surface-container-low text-on-surface'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[19px] shrink-0 ${
                  active ? 'text-on-primary' : 'text-primary'
                }`}
              >
                {item.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`font-label-md text-[12.5px] truncate ${
                    active ? 'font-bold text-on-primary' : 'font-semibold text-on-surface'
                  }`}
                >
                  {item.title}
                </p>
                <p
                  className={`font-body-sm text-[10.5px] truncate ${
                    active ? 'text-on-primary/85' : 'text-on-surface-variant'
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
              <span
                className={`material-symbols-outlined text-[15px] ${
                  active ? 'text-on-primary' : 'text-outline'
                }`}
              >
                chevron_right
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
