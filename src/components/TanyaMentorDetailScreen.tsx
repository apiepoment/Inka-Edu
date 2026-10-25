import React, { useState } from 'react';
import {
  ASSETS,
  CommunityReply,
  INITIAL_THREAD_REPLIES,
  ScreenId,
  toggleUpvoteState,
} from '../utils/inkaeduLogic';

interface TanyaMentorDetailScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const TanyaMentorDetailScreen: React.FC<TanyaMentorDetailScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [saved, setSaved] = useState(false);
  const [threadVotes, setThreadVotes] = useState(34);
  const [threadVoted, setThreadVoted] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(86);
  const [helpfulVoted, setHelpfulVoted] = useState(false);
  const [playingVoice, setPlayingVoice] = useState(false);
  const [replies, setReplies] = useState<CommunityReply[]>(INITIAL_THREAD_REPLIES);
  const [replyText, setReplyText] = useState('');

  const handleThreadUpvote = () => {
    const next = toggleUpvoteState(threadVotes, threadVoted);
    setThreadVotes(next.votes);
    setThreadVoted(next.isVoted);
    onShowToast('Dukungan kamu berhasil diperbarui!');
  };

  const handleHelpful = () => {
    const next = toggleUpvoteState(helpfulCount, helpfulVoted);
    setHelpfulCount(next.votes);
    setHelpfulVoted(next.isVoted);
    onShowToast('Terima kasih atas konfirmasi jawaban bermanfaat!');
  };

  const handleReplyUpvote = (id: string) => {
    setReplies((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const next = toggleUpvoteState(r.upvotes, Boolean(r.voted));
        return { ...r, upvotes: next.votes, voted: next.isVoted };
      })
    );
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) {
      onShowToast('Tuliskan pesan tanggapanmu terlebih dahulu');
      return;
    }
    const newReply: CommunityReply = {
      id: `rep-${Date.now()}`,
      authorName: 'Amanda Maharani',
      roleBadge: 'Siswa Bootcamp Batch 11',
      roleVariant: 'neutral',
      avatar: ASSETS.amandaThread,
      alt: 'Amanda Maharani',
      timeAgo: 'Baru saja',
      content: replyText.trim(),
      upvotes: 1,
      voted: true,
    };
    setReplies((prev) => [...prev, newReply]);
    setReplyText('');
    onShowToast('Tanggapan Anda berhasil diunggah ke thread!');
  };

  return (
    <div className="flex flex-col flex-1 bg-surface pb-24">
      {/* Contextual Sub-Bar below ResponsiveTopNavbar */}
      <div className="relative inset-x-0 z-20 bg-surface border-b border-border-subtle/60">
        <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs min-w-0">
            <button
              type="button"
              aria-label="Kembali ke Komunitas"
              onClick={() => onNavigate('komunitas')}
              className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">
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
              Tanya Mentor Detail
            </h1>
          </div>
          <button
            type="button"
            aria-label="Profil Pengguna"
            onClick={() => onNavigate('profil')}
            className="flex items-center shrink-0 cursor-pointer"
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

      <main className="flex-1 flex flex-col w-full">
        {/* Top Navigation & Action Meta */}
        <div className="px-4 sm:px-6 lg:px-8 pt-space-sm pb-space-xs flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
            <button
              type="button"
              onClick={() => onNavigate('komunitas')}
              className="font-label-sm text-label-sm text-secondary font-semibold hover:underline cursor-pointer"
            >
              Komunitas
            </button>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              UI/UX Design
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed px-2 py-0.5 rounded-full">
              Tanya Mentor
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              aria-label="Simpan Thread"
              onClick={() => {
                setSaved(!saved);
                onShowToast(
                  !saved
                    ? 'Thread tersimpan di koleksi belajar Anda'
                    : 'Thread dihapus dari simpanan'
                );
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-container text-on-surface hover:text-primary transition-colors cursor-pointer"
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  saved ? 'text-primary icon-filled' : ''
                }`}
              >
                {saved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
            <button
              type="button"
              aria-label="Bagikan Thread"
              onClick={() => onShowToast('Tautan thread disalin ke clipboard')}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-container text-on-surface hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </button>
          </div>
        </div>

        {/* Main Question Section */}
        <div className="px-gutter mt-space-sm">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            {/* Author Profile Card Header */}
            <div className="flex items-center justify-between gap-space-sm mb-space-sm">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="relative shrink-0">
                  <img
                    className="w-11 h-11 rounded-full object-cover shadow-sm"
                    referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                    alt="Amanda Maharani"
                    src={ASSETS.amandaThread}
                  />
                  <span className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[9px] font-bold px-1 py-0.2 rounded-full shadow-xs">
                    B11
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h2 className="font-label-lg text-label-lg text-on-surface font-bold truncate">
                      Amanda Maharani
                    </h2>
                    <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-medium shrink-0">
                      Siswa Bootcamp Batch 11
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-outline">
                      schedule
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      3 jam lalu • 142 dilihat
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Pilihan Lain"
                onClick={() => onShowToast('Opsi diskusi ditampilkan')}
                className="text-outline hover:text-on-surface transition-colors p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  more_vert
                </span>
              </button>
            </div>

            {/* Question Title */}
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold mb-space-sm leading-snug">
              Bagaimana cara menyusun case study UI/UX pertama untuk portofolio
              tanpa pengalaman kerja formal?
            </h1>

            {/* Detailed Description */}
            <div className="text-on-surface-variant font-body-md text-body-md space-y-2 mb-space-md leading-relaxed">
              <p>
                Halo teman-teman &amp; para mentor! Saya sedang dalam proses
                beralih karier (career switch) dari latar belakang Administrasi
                Bisnis non-IT ke UI/UX Design.
              </p>
              <p>
                Tantangan terbesarku sekarang adalah bingung menentukan topik
                studi kasus pertama. Apakah recruiter tech di Indonesia lebih
                mengapresiasi solusi aplikasi lokal yang sederhana atau kita
                wajib bikin end-to-end prototype produk raksasa? Mohon
                pencerahan langkah-langkah praktisnya agar portofolio tidak
                terlihat seperti “tugas kuliah biasa”.
              </p>
            </div>

            {/* Attachment Card Preview */}
            <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    attachment
                  </span>
                  Lampiran Konsep (1 File)
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  PNG • 1.4 MB
                </span>
              </div>
              <div className="relative rounded-lg overflow-hidden group bg-surface-container">
                <img
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                  alt="Draft wireframe aplikasi redesign"
                  src={ASSETS.wireframeDraft}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-space-sm">
                  <div className="flex items-center justify-between w-full text-surface">
                    <span className="font-label-md text-label-md truncate">
                      Draft wireframe aplikasi redesign - v0.2.png
                    </span>
                    <button
                      type="button"
                      aria-label="Lihat Lampiran"
                      onClick={() =>
                        onShowToast(
                          'Membuka pratinjau penuh Draft wireframe - v0.2.png'
                        )
                      }
                      className="bg-surface/20 backdrop-blur-md hover:bg-surface/30 p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-surface">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Topic Tags & Upvote */}
            <div className="flex items-center justify-between flex-wrap gap-2 pt-space-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-label-sm text-label-sm text-primary bg-primary-fixed/60 px-2.5 py-1 rounded-full font-semibold">
                  #PortfolioTips
                </span>
                <span className="font-label-sm text-label-sm text-primary bg-primary-fixed/60 px-2.5 py-1 rounded-full font-semibold">
                  #CareerSwitch
                </span>
                <span className="font-label-sm text-label-sm text-primary bg-primary-fixed/60 px-2.5 py-1 rounded-full font-semibold">
                  #UIUXCaseStudy
                </span>
              </div>
              <button
                type="button"
                onClick={handleThreadUpvote}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-primary icon-filled">
                  thumb_up
                </span>
                <span className="font-label-md text-label-md font-bold text-primary tabular-nums">
                  {threadVotes}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Card: Official Mentor Answer */}
        <div className="px-gutter mt-space-lg">
          <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-md">
            <div className="h-2 w-full bg-gradient-to-r from-badge-amber via-primary to-secondary" />
            <div className="p-space-md">
              {/* Verified Header Banner */}
              <div className="flex items-center justify-between gap-space-xs mb-space-md flex-wrap">
                <div className="inline-flex items-center gap-1.5 bg-badge-amber-surface text-tertiary px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[18px] text-badge-amber icon-filled">
                    verified
                  </span>
                  <span className="font-label-md text-label-md font-bold">
                    Jawaban Resmi Mentor Praktisi
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold bg-track-cyan-surface px-2.5 py-0.5 rounded-full">
                  Terpilih Solusi Terbaik
                </span>
              </div>

              {/* Mentor Profile Info */}
              <div className="flex items-start gap-space-sm mb-space-md">
                <div className="relative shrink-0">
                  <img
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                    referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                    alt="Dimas Suryo Pratama"
                    src={ASSETS.mentorDimasDetail}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-mentor-verified text-on-primary rounded-full flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[14px]">
                      check
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                      Dimas Suryo Pratama
                    </h3>
                    <span className="material-symbols-outlined text-[18px] text-mentor-verified icon-filled">
                      verified_user
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant font-medium">
                    Lead Product Designer di GoTo Financial
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-label-sm text-label-sm text-tertiary-container font-semibold flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        workspace_premium
                      </span>{' '}
                      7+ Th Pengalaman
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      •
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Menjawab 1 jam lalu
                    </span>
                  </div>
                </div>
              </div>

              {/* Mentor Answer Content Body */}
              <div className="text-on-surface font-body-md text-body-md space-y-space-sm leading-relaxed mb-space-md">
                <div className="bg-surface-container-low p-3 rounded-lg text-on-surface font-medium">
                  “Halo Amanda! Selamat atas keputusannya switch career ke
                  UI/UX. Pertanyaan ini sangat wajar dan justru dilema 90%
                  talenta baru. Rekruter tidak mencari kesempurnaan fitur
                  fiktif, mereka mencari kejelasan pola pikir (design
                  rationale). Ada 3 formula utama yang disukai tech recruiter:”
                </div>

                <div className="space-y-3 mt-space-sm">
                  <div className="flex items-start gap-3 bg-surface-container-lowest p-3 rounded-lg shadow-sm border border-border-subtle/50">
                    <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold font-label-md text-label-md flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        Pilih masalah nyata di sekitarmu
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Jangan langsung redesain Spotify atau Netflix tanpa
                        akses data riil. Ambil problem konkret: misalnya UMKM
                        warung makan tetangga yang kewalahan mencatat stok
                        manual, atau alur antrean klinik dokter gigi terdekat.
                        Ini membuktikan empati riset lapanganmu nyata.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-surface-container-lowest p-3 rounded-lg shadow-sm border border-border-subtle/50">
                    <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold font-label-md text-label-md flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        Dokumentasikan proses “Failure &amp; Iteration”
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Portofolio pemula sering hanya pamer hasil akhir UI yang
                        cantik (Dribbble-shot). Tunjukkan sketsa wireframe awal
                        yang gagal saat diuji ke 3 calon pengguna, lalu
                        ceritakan alasan logis kamu mengubah rancangannya.
                        Kegagalan yang dipelajari bernilai emas di mata tim
                        hiring.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-surface-container-lowest p-3 rounded-lg shadow-sm border border-border-subtle/50">
                    <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold font-label-md text-label-md flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        Sertakan metrik hipotesis terukur
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Karena belum ada metrik live production, buat hipotesis
                        dampak desain: misalnya{' '}
                        <span className="font-semibold text-primary">
                          “Memangkas proses checkout dari 5 step menjadi 3 step
                          dengan estimasi penurunan drop-off rate 25%”
                        </span>
                        . Background bisnismu adalah superpower besar di sini!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Memo Player Widget */}
              <div className="bg-surface-container p-space-sm rounded-xl mb-space-md">
                <div className="flex items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <button
                      type="button"
                      aria-label={
                        playingVoice
                          ? 'Jeda penjelasan audio'
                          : 'Putar penjelasan audio'
                      }
                      onClick={() => {
                        setPlayingVoice(!playingVoice);
                        if (!playingVoice) {
                          onShowToast('Memutar pesan suara mentor Dimas');
                        }
                      }}
                      className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {playingVoice ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <div className="min-w-0">
                      <p className="font-label-md text-label-md font-bold text-on-surface truncate">
                        Penjelasan Audio Mentor Dimas
                      </p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-badge-amber">
                          mic
                        </span>
                        Voice Memo •{' '}
                        <span>
                          {playingVoice ? 'Memutar (00:42 / 02:45)' : '02:45 min'}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 px-2 py-1 bg-surface-container-highest rounded-lg">
                    <div className="w-1 bg-primary h-3 rounded-full" />
                    <div className="w-1 bg-primary h-6 rounded-full" />
                    <div className="w-1 bg-primary h-4 rounded-full" />
                    <div className="w-1 bg-primary h-7 rounded-full" />
                    <div className="w-1 bg-primary h-5 rounded-full" />
                    <div className="w-1 bg-primary h-3 rounded-full" />
                    <div className="w-1 bg-primary h-6 rounded-full" />
                    <div className="w-1 bg-primary h-2 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Mentor Answer Actions & 1-on-1 CTA */}
              <div className="space-y-space-sm pt-space-xs">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleHelpful}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container hover:opacity-90 font-label-md text-label-md font-bold transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        thumb_up
                      </span>
                      <span>Membantu ({helpfulCount})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onShowToast(
                          'Apresiasi & Bintang dikirim ke Mentor Dimas! 🌟'
                        )
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-badge-amber-surface text-tertiary hover:opacity-90 font-label-md text-label-md font-bold transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-badge-amber icon-filled">
                        favorite
                      </span>
                      <span>Beri Apresiasi</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('replyInput');
                      el?.focus();
                    }}
                    className="text-on-surface-variant hover:text-primary p-1 flex items-center gap-1 font-label-sm text-label-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      reply
                    </span>
                    Balas Mentor
                  </button>
                </div>

                {/* Direct Mentoring Booking Card CTA */}
                <div className="bg-gradient-to-r from-primary-container to-primary rounded-xl p-3.5 text-on-primary flex items-center justify-between gap-space-sm shadow-sm">
                  <div className="min-w-0">
                    <p className="font-label-sm text-label-sm text-on-primary-container font-semibold uppercase tracking-wider">
                      Mentoring Privat
                    </p>
                    <h5 className="font-headline-sm text-headline-sm font-bold text-on-primary truncate">
                      Jadwalkan Sesi 1-on-1 dengan Dimas
                    </h5>
                    <p className="font-body-sm text-body-sm text-on-primary/90 mt-0.5">
                      Tersedia 3 slot review portofolio minggu ini
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onShowToast(
                        'Slot 1-on-1 Mentoring bersama Dimas Suryo berhasil dipesan!'
                      )
                    }
                    className="px-3.5 py-2 rounded-lg bg-surface text-primary font-label-md text-label-md font-bold shrink-0 hover:bg-surface-container transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    Book Sesi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Community Responses Section */}
        <div className="px-gutter mt-space-lg">
          <div className="flex items-center justify-between mb-space-sm">
            <div className="flex items-center gap-2">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Balasan Komunitas Lainnya
              </h3>
              <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-bold px-2 py-0.5 rounded-full">
                {replies.length + 2} Diskusi
              </span>
            </div>
            <button
              type="button"
              onClick={() => onShowToast('Urutan balasan: Terbaru')}
              className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-0.5 cursor-pointer"
            >
              Terbaru{' '}
              <span className="material-symbols-outlined text-[16px]">
                expand_more
              </span>
            </button>
          </div>

          <div className="space-y-space-sm">
            {replies.map((reply) => (
              <div
                key={reply.id}
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm"
              >
                <div className="flex items-start justify-between gap-space-sm mb-2">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <img
                      className="w-9 h-9 rounded-full object-cover"
                      referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
                      alt={reply.alt}
                      src={reply.avatar}
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                          {reply.authorName}
                        </span>
                        <span
                          className={
                            reply.roleVariant === 'cyan'
                              ? 'font-label-sm text-label-sm bg-track-cyan-surface text-secondary px-2 py-0.2 rounded-full font-bold'
                              : 'font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.2 rounded-full font-medium'
                          }
                        >
                          {reply.roleBadge}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {reply.timeAgo}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleReplyUpvote(reply.id)}
                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      thumb_up
                    </span>
                    <span className="font-label-sm text-label-sm font-bold tabular-nums">
                      {reply.upvotes}
                    </span>
                  </button>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {reply.content}
                </p>

                <div className="flex items-center gap-space-md mt-3 pt-2 text-on-surface-variant font-label-sm text-label-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setReplyText(`@${reply.authorName} `);
                      document.getElementById('replyInput')?.focus();
                    }}
                    className="hover:text-primary font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      reply
                    </span>{' '}
                    Balas
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReplyUpvote(reply.id)}
                    className="hover:text-primary flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      favorite_border
                    </span>{' '}
                    Suka
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Bottom Reply Input Bar */}
      <form
        onSubmit={handleSendReply}
        className="fixed lg:sticky bottom-0 inset-x-0 z-40 bg-surface-container-lowest shadow-[0_-4px_16px_rgba(0,0,0,0.06)] border-t border-border-subtle p-space-sm flex items-center gap-2"
      >
        <button
          type="button"
          aria-label="Unggah Lampiran"
          onClick={() =>
            onShowToast('Pilih gambar atau mockup pendukung tanggapan')
          }
          className="w-10 h-10 rounded-full bg-surface-container text-on-surface hover:text-primary flex items-center justify-center shrink-0 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">
            add_photo_alternate
          </span>
        </button>
        <div className="flex-1 relative min-w-0">
          <input
            id="replyInput"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md px-3.5 py-2.5 rounded-full focus:outline-none focus:bg-surface focus:ring-2 focus:ring-primary/20"
            placeholder="Tulis tanggapan atau tanya lanjutan ke mentor..."
            type="text"
          />
        </div>
        <button
          type="submit"
          aria-label="Kirim Tanggapan"
          className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-transform active:scale-95 shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>
      </form>
    </div>
  );
};
