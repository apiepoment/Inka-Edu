/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  DiscussionPost,
  INITIAL_DISCUSSIONS,
  INITIAL_USER_PROFILE,
  ScreenId,
  UserProfile,
} from './utils/inkaeduLogic';
import {
  BottomTabBar,
  DesktopScreenNavigator,
  ResponsiveTopNavbar,
  ViewportMode,
} from './components/NavigationChrome';
import { GlobalFooter } from './components/GlobalFooter';
import {
  KontakScreen,
  LayananScreen,
  TentangScreen,
} from './components/InfoPages';
import { BerandaScreen } from './components/BerandaScreen';
import { ProgramDetailScreen } from './components/ProgramDetailScreen';
import { CheckoutScreen } from './components/CheckoutScreen';
import { KomunitasScreen } from './components/KomunitasScreen';
import { TanyaMentorDetailScreen } from './components/TanyaMentorDetailScreen';
import { RuangBelajarScreen } from './components/RuangBelajarScreen';
import { ProfilHubKarierScreen } from './components/ProfilHubKarierScreen';
import { AkunPengaturanScreen } from './components/AkunPengaturanScreen';
import { LoginScreen, RegisterScreen } from './components/AuthScreens';

const TAB_BAR_SCREENS: ScreenId[] = [
  'beranda',
  'tentang',
  'layanan',
  'kontak',
  'komunitas',
  'belajar',
  'profil',
  'pengaturan',
];

const ALL_VALID_SCREENS: ScreenId[] = [
  'beranda',
  'tentang',
  'layanan',
  'kontak',
  'program',
  'checkout',
  'komunitas',
  'tanya-mentor-detail',
  'belajar',
  'profil',
  'pengaturan',
  'login',
  'register',
];

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('screen') as ScreenId | null;
    if (s && ALL_VALID_SCREENS.includes(s)) {
      return s;
    }
    return 'beranda';
  });

  const [viewportMode, setViewportMode] = useState<ViewportMode>('auto');
  const [profile, setProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [discussions, setDiscussions] =
    useState<DiscussionPost[]>(INITIAL_DISCUSSIONS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNavigate = (screen: ScreenId) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const t = setTimeout(() => setToastMessage(null), 2800);
    return () => clearTimeout(t);
  }, [toastMessage]);

  const showBottomTabBar = TAB_BAR_SCREENS.includes(activeScreen);

  const getMainFrameClasses = () => {
    if (viewportMode === 'mobile') {
      return 'w-full max-w-[430px] mx-auto my-4 rounded-3xl shadow-[0_12px_40px_rgba(19,27,46,0.12)] border border-border-subtle';
    }
    if (viewportMode === 'tablet') {
      return 'w-full max-w-[820px] mx-auto my-4 rounded-3xl shadow-[0_12px_40px_rgba(19,27,46,0.12)] border border-border-subtle';
    }
    // Default 'auto' or 'desktop': genuinely responsive across Mobile (<768px), Tablet (768px-1023px), and Desktop (>=1024px)
    return 'w-full flex-1 min-w-0 md:rounded-3xl md:shadow-[0_12px_40px_rgba(19,27,46,0.08)] md:border md:border-border-subtle';
  };

  return (
    <div className="min-h-screen bg-[#eef1fb] text-on-surface flex flex-col">
      {/* Global Sticky Responsive Top Navigation Bar (Mobile, Tablet & Desktop) */}
      <ResponsiveTopNavbar
        activeScreen={activeScreen}
        viewportMode={viewportMode}
        onChangeViewportMode={setViewportMode}
        onNavigate={handleNavigate}
        onShowToast={handleShowToast}
      />

      <div className="w-full max-w-7xl mx-auto flex-1 flex items-start justify-center gap-6 md:py-5 md:px-6 lg:py-6 lg:px-8">
        {/* Desktop Screen Explorer Sidebar (visible on lg+ when not locked to mobile/tablet preview) */}
        {(viewportMode === 'auto' || viewportMode === 'desktop') && (
          <DesktopScreenNavigator
            activeScreen={activeScreen}
            onNavigate={handleNavigate}
          />
        )}

        {/* Adaptive Main Workspace (Mobile 1-col, Tablet 2-col, Desktop Multi-col) */}
        <div
          data-viewport-mode={viewportMode}
          className={`${getMainFrameClasses()} min-h-screen md:min-h-[860px] bg-surface flex flex-col relative overflow-x-hidden ${
            showBottomTabBar ? 'pb-16 md:pb-0' : ''
          }`}
        >
          {activeScreen === 'beranda' && (
            <BerandaScreen
              userName={profile.name}
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'tentang' && (
            <TentangScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'layanan' && (
            <LayananScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'kontak' && (
            <KontakScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'program' && (
            <ProgramDetailScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'checkout' && (
            <CheckoutScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'komunitas' && (
            <KomunitasScreen
              discussions={discussions}
              onUpdateDiscussions={setDiscussions}
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'tanya-mentor-detail' && (
            <TanyaMentorDetailScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'belajar' && (
            <RuangBelajarScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'profil' && (
            <ProfilHubKarierScreen
              profile={profile}
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'pengaturan' && (
            <AkunPengaturanScreen
              profile={profile}
              onUpdateProfile={setProfile}
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'login' && (
            <LoginScreen
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {activeScreen === 'register' && (
            <RegisterScreen
              onRegisterSuccess={(newUser) =>
                setProfile((prev) => ({ ...prev, ...newUser }))
              }
              onNavigate={handleNavigate}
              onShowToast={handleShowToast}
            />
          )}

          {/* Global Footer at the bottom of EVERY page */}
          <GlobalFooter
            onNavigate={handleNavigate}
            onShowToast={handleShowToast}
          />

          {showBottomTabBar && (
            <BottomTabBar
              activeScreen={activeScreen}
              viewportMode={viewportMode}
              onNavigate={handleNavigate}
            />
          )}

          {/* Global Feedback Toast */}
          {toastMessage && (
            <div
              role="status"
              aria-live="polite"
              className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 font-label-md text-label-md max-w-[90vw]"
            >
              <span className="material-symbols-outlined text-[18px] text-mentor-verified icon-filled shrink-0">
                check_circle
              </span>
              <span className="truncate">{toastMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
