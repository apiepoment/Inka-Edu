import React from 'react';
import { ASSETS, ScreenId } from '../utils/inkaeduLogic';
import { OptimizedImage } from './OptimizedImage';

interface GlobalFooterProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@inkaedu.id',
    href: 'https://instagram.com/inkaedu.id',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'inkaedu Indonesia',
    href: 'https://facebook.com/inkaedu.id',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@inkaedu.id',
    href: 'https://tiktok.com/@inkaedu.id',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'PT inkaedu Edukasi',
    href: 'https://linkedin.com/company/inkaedu',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'inkaedu Official',
    href: 'https://youtube.com/@inkaedu',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export const GlobalFooter: React.FC<GlobalFooterProps> = ({
  onNavigate,
  onShowToast,
}) => {
  return (
    <footer
      aria-label="Footer Situs Web"
      className="w-full bg-inverse-surface text-inverse-on-surface mt-auto border-t border-outline-variant/20 px-4 sm:px-6 lg:px-8 pt-8 pb-8 space-y-6"
    >
      {/* Responsive 3-Mode Grid: 1 col on Mobile, 2 cols on Tablet (md), 12 cols on Desktop (xl) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 items-start">
        {/* Column 1: Brand & Quick Links */}
        <div className="md:col-span-2 xl:col-span-5 space-y-3">
          <div className="flex items-center gap-2.5">
            <OptimizedImage
              src={ASSETS.logo}
              alt="inkaedu Logo"
              targetWidth={96}
              className="h-8 w-auto object-contain bg-white rounded-md p-0.5"
            />
            <div>
              <span className="font-headline-sm text-white font-bold tracking-tight block leading-none">
                inkaedu
              </span>
              <span className="font-label-sm text-[10px] text-inverse-primary">
                Lentera Modern Edtech Ecosystem
              </span>
            </div>
          </div>
          <p className="font-body-sm text-inverse-on-surface/80 leading-relaxed max-w-md">
            Platform akselerasi karier teknologi, bootcamp intensif berstandar
            unicorn, mentoring praktisi 1-on-1, dan penyaluran kerja terpercaya
            di Indonesia.
          </p>

          {/* Quick Site Navigation */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 font-label-sm text-inverse-primary">
            <button
              type="button"
              onClick={() => onNavigate('beranda')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <button
              type="button"
              onClick={() => onNavigate('tentang')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Tentang
            </button>
            <button
              type="button"
              onClick={() => onNavigate('layanan')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Layanan
            </button>
            <button
              type="button"
              onClick={() => onNavigate('kontak')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Kontak
            </button>
            <button
              type="button"
              onClick={() => onNavigate('program')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Program Bootcamp
            </button>
            <button
              type="button"
              onClick={() => onNavigate('komunitas')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Komunitas
            </button>
          </div>
        </div>

        {/* Column 2: Contact Information (WhatsApp & Email) */}
        <div className="md:col-span-1 xl:col-span-4 bg-white/5 rounded-2xl p-4 space-y-2.5 border border-white/10">
          <h3 className="font-label-md text-white font-bold uppercase tracking-wider text-[11px]">
            Hubungi Kami (Layanan Siswa &amp; Kemitraan)
          </h3>
          <div className="flex flex-col gap-2.5">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onShowToast('Membuka WhatsApp Resmi inkaedu: +62 812-3456-7890');
              }}
              className="flex items-center gap-2.5 text-inverse-on-surface hover:text-secondary-fixed transition-colors font-body-sm"
            >
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[17px]">
                  chat
                </span>
              </span>
              <div>
                <span className="font-label-sm text-white/70 block text-[10px]">
                  WhatsApp (WA) Resmi
                </span>
                <span className="font-semibold text-white">
                  +62 812-3456-7890
                </span>
              </div>
            </a>

            <a
              href="mailto:halo@inkaedu.id"
              onClick={(e) => {
                e.preventDefault();
                onShowToast('Alamat email kontak disalin: halo@inkaedu.id');
              }}
              className="flex items-center gap-2.5 text-inverse-on-surface hover:text-secondary-fixed transition-colors font-body-sm"
            >
              <span className="w-8 h-8 rounded-lg bg-primary-container/30 text-inverse-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[17px]">
                  mail
                </span>
              </span>
              <div>
                <span className="font-label-sm text-white/70 block text-[10px]">
                  Alamat Email Kontak
                </span>
                <span className="font-semibold text-white">halo@inkaedu.id</span>
              </div>
            </a>
          </div>
        </div>

        {/* Column 3: Social Media Links (Instagram, Facebook, TikTok, LinkedIn, YouTube) */}
        <div className="md:col-span-1 xl:col-span-3 space-y-2.5">
          <p className="font-label-sm text-white/80 uppercase tracking-wider text-[11px] font-bold">
            Media Sosial Resmi
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Profil ${soc.name} inkaedu`}
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast(`Membuka profil ${soc.name} resmi (${soc.handle})`);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-primary-container text-white font-label-sm text-[11px] transition-colors"
              >
                {soc.svg}
                <span>{soc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Info */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-inverse-on-surface/70 font-body-sm text-[11px]">
        <p>© 2025 PT inkaedu Edukasi Indonesia. Hak Cipta Dilindungi.</p>
        <p className="text-[11px] text-inverse-primary">
          Terdaftar PSE Kominfo &amp; Standar ISO 27001 • Responsif Mobile, Tablet &amp; Desktop
        </p>
      </div>
    </footer>
  );
};
