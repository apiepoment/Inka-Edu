import React, { useEffect, useState } from 'react';
import {
  ASSETS,
  calculateCheckoutSummary,
  formatCountdown,
  formatRupiah,
  ScreenId,
} from '../utils/inkaeduLogic';

interface CheckoutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(86382); // 23:59:42
  const [promoInput, setPromoInput] = useState('INKASUKSES');
  const [appliedPromo, setAppliedPromo] = useState('INKASUKSES');
  const [selectedMethod, setSelectedMethod] = useState('jateng-va');
  const [bankSectionOpen, setBankSectionOpen] = useState(true);
  const [walletSectionOpen, setWalletSectionOpen] = useState(true);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const summary = calculateCheckoutSummary(2499000, 1000000, appliedPromo);

  const handleApplyPromo = () => {
    const check = calculateCheckoutSummary(2499000, 1000000, promoInput);
    if (check.voucherValid) {
      setAppliedPromo(promoInput.trim().toUpperCase());
      onShowToast(
        `Voucher ${check.appliedCode} berhasil diaktifkan! Hemat ${formatRupiah(
          check.voucherDiscount
        )}`
      );
    } else {
      setAppliedPromo('');
      onShowToast('Kode voucher tidak ditemukan. Gunakan INKASUKSES');
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-surface pb-24">
      {/* Contextual Sub-Bar below ResponsiveTopNavbar */}
      <div className="relative inset-x-0 z-20 bg-surface border-b border-border-subtle/60">
        <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs min-w-0">
            <button
              type="button"
              aria-label="Kembali ke Detail Program"
              onClick={() => onNavigate('program')}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                arrow_back
              </span>
            </button>
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight">
              Pembayaran &amp; Checkout Bootcamp
            </h1>
          </div>
          <button
            type="button"
            aria-label="Akun Siswa"
            onClick={() => onNavigate('profil')}
            className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </button>
        </div>
      </div>

      <main className="flex-1 flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-3 space-y-5">
        {/* Countdown Timer Banner */}
        <section className="rounded-2xl bg-badge-amber-surface/80 p-3.5 flex items-center justify-between border border-badge-amber/20">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-badge-amber text-[22px]">
              timer
            </span>
            <div>
              <p className="font-label-sm text-[11px] text-tertiary font-bold">
                Batas Waktu Bayar
              </p>
              <p className="font-headline-md text-[19px] text-on-surface font-extrabold tabular-nums leading-tight">
                {formatCountdown(secondsLeft)}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-badge-amber/20 text-tertiary font-label-sm text-label-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-badge-amber" />
            Menunggu Bayar
          </span>
        </section>

        {/* Detail Program Bootcamp Card */}
        <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3.5">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Detail Program Bootcamp
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-[11px] font-bold">
              Batch 12
            </span>
          </div>

          <div className="flex gap-3 items-start">
            <img
              src={ASSETS.bootcampUiUx}
              alt="Fullstack UI/UX Designer Bootcamp"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <div className="min-w-0 flex-1 space-y-1">
              <h3 className="font-headline-sm text-[15px] text-on-surface font-bold leading-snug">
                Fullstack UI/UX Designer &amp; Product Strategy Bootcamp
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-primary">
                  calendar_today
                </span>
                Mulai 12 April 2025
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-mentor-verified">
                  schedule
                </span>
                12 Minggu (Intensif &amp; Portofolio)
              </p>
            </div>
          </div>

          {/* Price Breakdown Box */}
          <div className="bg-surface-container-low rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between font-body-sm text-body-sm">
              <span className="text-on-surface-variant">
                Harga Normal Program
              </span>
              <span className="text-on-surface font-medium line-through tabular-nums">
                Rp 2.499.000
              </span>
            </div>
            <div className="flex items-center justify-between font-body-sm text-body-sm">
              <span className="text-secondary font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  sell
                </span>
                Diskon Early Bird (40%)
              </span>
              <span className="text-secondary font-bold tabular-nums">
                -Rp 1.000.000
              </span>
            </div>
            {summary.voucherValid && (
              <div className="flex items-center justify-between font-body-sm text-body-sm">
                <span className="text-primary font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">
                    check_circle
                  </span>
                  Voucher {summary.appliedCode}
                </span>
                <span className="text-primary font-bold tabular-nums">
                  {formatRupiah(-summary.voucherDiscount)}
                </span>
              </div>
            )}
          </div>

          {/* Promo Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="promo-code-input"
              className="block font-label-sm text-label-sm text-on-surface-variant font-semibold"
            >
              Punya Kode Promo / Referral?
            </label>
            <div className="flex gap-2">
              <input
                id="promo-code-input"
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Masukkan kode voucher"
                className="flex-1 min-w-0 h-11 px-3.5 rounded-xl bg-surface-container-low font-label-lg text-on-surface uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="shrink-0 h-11 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold transition-colors cursor-pointer"
              >
                Terapkan
              </button>
            </div>
            {summary.voucherValid && (
              <p className="font-label-sm text-label-sm text-mentor-verified flex items-center gap-1 pt-0.5">
                <span className="material-symbols-outlined text-[15px]">
                  verified
                </span>
                Voucher berhasil diaktifkan! Hemat{' '}
                {formatRupiah(summary.voucherDiscount)}
              </p>
            )}
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
              verified_user
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
              Biaya sudah mencakup sertifikasi BNSP, PPN, &amp; 1-on-1 Mentoring
              Karir.
            </p>
          </div>
        </section>

        {/* Pilih Metode Pembayaran */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                Pilih Metode Pembayaran
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Transaksi aman terverifikasi otomatis dalam 1 menit
              </p>
            </div>
            <span className="material-symbols-outlined text-primary text-[22px] icon-filled">
              security
            </span>
          </div>

          {/* Transfer Bank & Virtual Account */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <button
              type="button"
              onClick={() => setBankSectionOpen(!bankSectionOpen)}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    account_balance
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[15px] text-on-surface font-bold">
                    Transfer Bank &amp; Virtual Account
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Verifikasi instan tanpa bukti transfer
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">
                {bankSectionOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {bankSectionOpen && (
              <div className="space-y-2.5 pt-1">
                {[
                  {
                    id: 'bca-va',
                    title: 'BCA Virtual Account',
                    subtitle: 'Verifikasi 24/7 Otomatis',
                    badge: 'Instan',
                  },
                  {
                    id: 'bni-va',
                    title: 'BNI Virtual Account',
                    subtitle: 'M-Banking & ATM',
                    badge: 'Instan',
                  },
                  {
                    id: 'bri-va',
                    title: 'BRI BRIVA',
                    subtitle: 'BRImo & Konfirmasi Cepat',
                    badge: 'Instan',
                  },
                  {
                    id: 'jateng-va',
                    title: 'Bank Jateng Virtual Account',
                    subtitle: 'Rekening Resmi PT inkaedu Edukasi',
                    badge: 'Rekomendasi',
                    extraNote: 'Bebas Biaya Admin',
                  },
                ].map((method) => {
                  const selected = selectedMethod === method.id;
                  return (
                    <label
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${
                        selected
                          ? 'bg-surface-container-high/70 ring-1 ring-primary'
                          : 'bg-surface-container-low/70 hover:bg-surface-container-low'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <input
                          type="radio"
                          name="payment-method"
                          checked={selected}
                          onChange={() => setSelectedMethod(method.id)}
                          className="w-4 h-4 accent-primary shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-headline-sm text-[14px] text-on-surface font-bold">
                            {method.title}
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {method.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full font-label-sm text-[10px] font-bold ${
                            method.badge === 'Rekomendasi'
                              ? 'bg-primary-fixed text-primary'
                              : 'bg-track-cyan-surface text-secondary'
                          }`}
                        >
                          {method.badge}
                        </span>
                        {method.extraNote && (
                          <p className="font-label-sm text-[10px] text-secondary font-bold mt-0.5">
                            {method.extraNote}
                          </p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* Dompet Digital (E-Wallet) */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3">
            <button
              type="button"
              onClick={() => setWalletSectionOpen(!walletSectionOpen)}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-track-cyan-surface text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    account_balance_wallet
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[15px] text-on-surface font-bold">
                    Dompet Digital (E-Wallet)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Bayar cepat dari aplikasi ponsel
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">
                {walletSectionOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {walletSectionOpen && (
              <div className="space-y-2.5 pt-1">
                {[
                  {
                    id: 'dana',
                    prefix: 'DANA',
                    prefixColor: 'text-sky-600',
                    title: 'Dompet Digital',
                    subtitle: 'Direct Debit via Nomor HP',
                  },
                  {
                    id: 'gopay',
                    prefix: 'GoPay',
                    prefixColor: 'text-emerald-600',
                    title: '/ QRIS Instan',
                    subtitle: 'Langsung buka aplikasi Gojek',
                  },
                ].map((wallet) => {
                  const selected = selectedMethod === wallet.id;
                  return (
                    <label
                      key={wallet.id}
                      onClick={() => setSelectedMethod(wallet.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${
                        selected
                          ? 'bg-surface-container-high/70 ring-1 ring-primary'
                          : 'bg-surface-container-low/70 hover:bg-surface-container-low'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <input
                          type="radio"
                          name="payment-method"
                          checked={selected}
                          onChange={() => setSelectedMethod(wallet.id)}
                          className="w-4 h-4 accent-primary shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-headline-sm text-[14px] text-on-surface font-bold">
                            <span className={wallet.prefixColor}>
                              {wallet.prefix}
                            </span>{' '}
                            {wallet.title}
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {wallet.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-track-cyan-surface text-secondary font-label-sm text-[10px] font-bold shrink-0">
                        Bebas Biaya
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Transaksi Aman & Terlisensi */}
        <section className="bg-surface-container-low rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-1.5 font-headline-sm text-[14px] text-on-surface font-bold">
            <span className="material-symbols-outlined text-[18px] text-mentor-verified">
              verified
            </span>
            <span>Transaksi Aman &amp; Terlisensi</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            inkaedu menggunakan enkripsi TLS 256-bit kelas perbankan. Sistem
            pembayaran terhubung dengan payment gateway berizin resmi &amp;
            diawasi oleh{' '}
            <span className="font-semibold text-on-surface">
              Bank Indonesia (BI)
            </span>{' '}
            serta <span className="font-semibold text-on-surface">OJK</span>.
          </p>
          <div className="flex items-center gap-4 pt-1 font-label-sm text-label-sm text-on-surface">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-primary">
                lock
              </span>
              256-Bit SSL
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-mentor-verified">
                thumb_up
              </span>
              100% Garansi Akses
            </span>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Payment Bar */}
      <div className="fixed lg:sticky bottom-0 inset-x-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.08)] border-t border-border-subtle p-3.5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
              Total Tagihan
              <span className="material-symbols-outlined text-[14px] text-primary">
                info
              </span>
            </p>
            <p className="font-headline-lg-mobile text-[21px] text-primary font-extrabold tabular-nums">
              {formatRupiah(summary.finalTotal)}
            </p>
            <button
              type="button"
              onClick={() =>
                onShowToast(
                  `Rincian: Rp 2.499.000 - Diskon Rp 1.000.000 ${
                    summary.voucherValid
                      ? `- Voucher ${formatRupiah(summary.voucherDiscount)}`
                      : ''
                  }`
                )
              }
              className="font-label-sm text-[11px] text-primary underline cursor-pointer"
            >
              Lihat Rincian
            </button>
          </div>

          <button
            type="button"
            onClick={() => setPaymentModalOpen(true)}
            className="h-12 px-6 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Bayar Sekarang</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Payment Instruction Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-sm w-full rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-mentor-verified flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline-sm text-on-surface font-bold">
                  Kode Virtual Account Aktif
                </h3>
              </div>
              <button
                type="button"
                aria-label="Tutup modal pembayaran"
                onClick={() => setPaymentModalOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-container-low space-y-2 text-center">
              <p className="font-label-sm text-on-surface-variant">
                Nomor Virtual Account ({selectedMethod.toUpperCase()})
              </p>
              <p className="font-headline-md text-primary font-extrabold tracking-wider tabular-nums">
                8801 9283 7410 2025
              </p>
              <p className="font-label-md text-on-surface font-bold">
                Total: {formatRupiah(summary.finalTotal)}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  onShowToast('Nomor Virtual Account disalin ke clipboard!');
                }}
                className="flex-1 h-11 rounded-xl bg-surface-container-high text-primary font-label-md font-bold cursor-pointer"
              >
                Salin Nomor VA
              </button>
              <button
                type="button"
                onClick={() => {
                  setPaymentModalOpen(false);
                  onShowToast(
                    'Pembayaran terverifikasi! Selamat bergabung di Batch 12'
                  );
                  onNavigate('belajar');
                }}
                className="flex-1 h-11 rounded-xl bg-primary-container text-on-primary font-label-md font-bold cursor-pointer"
              >
                Cek Status Lunas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
