import React, { useState } from 'react';
import {
  ASSETS,
  DiscussionPost,
  filterDiscussions,
  ScreenId,
  toggleUpvoteState,
} from '../utils/inkaeduLogic';
import { MainTabHeader } from './NavigationChrome';

interface KomunitasScreenProps {
  discussions: DiscussionPost[];
  onUpdateDiscussions: React.Dispatch<React.SetStateAction<DiscussionPost[]>>;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

const FILTER_TABS = [
  { id: 'all', label: 'Semua Diskusi' },
  { id: 'trending', label: '🔥 Terpopuler' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'data', label: 'Data & AI' },
  { id: 'coding', label: 'Coding & Web' },
  { id: 'cv', label: 'Review CV & Portofolio' },
  { id: 'verified', label: '✅ Terjawab Mentor' },
];

const ACTIVE_MENTORS = [
  {
    name: 'Rizky Ardiansyah',
    role: 'Lead UX @ Unicorn',
    avatar: ASSETS.mentorRizky,
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Data Scientist @ BUMN',
    avatar: ASSETS.mentorSiti,
  },
  {
    name: 'Fajar Nugraha',
    role: 'Senior Frontend Eng',
    avatar: ASSETS.mentorFajar,
  },
  {
    name: 'Jessica Tania',
    role: 'Career Coach inkaedu',
    avatar: ASSETS.mentorJessica,
  },
];

export const KomunitasScreen: React.FC<KomunitasScreenProps> = ({
  discussions,
  onUpdateDiscussions,
  onNavigate,
  onShowToast,
}) => {
  const [activeTag, setActiveTag] = useState('all');
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newCategory, setNewCategory] = useState<'uiux' | 'coding' | 'cv' | 'data'>('uiux');

  const filteredPosts = filterDiscussions(discussions, activeTag);

  const handleUpvote = (id: string) => {
    onUpdateDiscussions((prev) =>
      prev.map((post) => {
        if (post.id !== id) return post;
        const next = toggleUpvoteState(post.upvotes, post.voted);
        return { ...post, upvotes: next.votes, voted: next.isVoted };
      })
    );
  };

  const handleBookmark = (id: string) => {
    onUpdateDiscussions((prev) =>
      prev.map((post) => {
        if (post.id !== id) return post;
        const nextBookmarked = !post.bookmarked;
        onShowToast(
          nextBookmarked
            ? 'Diskusi disimpan ke koleksi belajar'
            : 'Diskusi dihapus dari simpanan'
        );
        return { ...post, bookmarked: nextBookmarked };
      })
    );
  };

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newExcerpt.trim()) return;

    const categoryLabelMap = {
      uiux: 'UI/UX Design',
      coding: 'Fullstack Web',
      cv: 'Career Tips',
      data: 'Data & AI',
    };

    const newPost: DiscussionPost = {
      id: `disc-${Date.now()}`,
      tags: [categoryLabelMap[newCategory], 'Tanya Mentor'],
      categoryKey: newCategory,
      isTrending: true,
      isVerified: false,
      statusBadge: {
        label: 'Menunggu Review',
        icon: 'hourglass_top',
        variant: 'pending',
      },
      author: {
        name: 'Amanda Maharani',
        avatar: ASSETS.amandaThread,
        alt: 'Amanda Maharani',
        timeAgo: 'Baru saja',
      },
      title: newTitle.trim(),
      excerpt: newExcerpt.trim(),
      pendingNote: 'Pertanyaan diteruskan ke mentor aktif • Estimasi 15 menit',
      upvotes: 1,
      voted: true,
      replyCount: 0,
      replyLabel: '0 Balasan',
      bookmarked: false,
    };

    onUpdateDiscussions((prev) => [newPost, ...prev]);
    setNewTitle('');
    setNewExcerpt('');
    setAskModalOpen(false);
    setActiveTag('all');
    onShowToast('Pertanyaan berhasil dikirim ke Mentor Aktif!');
  };

  return (
    <div className="flex flex-col flex-1 bg-surface">
      <MainTabHeader
        subtitle="Komunitas"
        onNavigate={onNavigate}
        onShowToast={onShowToast}
      />

      <main className="flex-1 flex flex-col w-full pb-8">
        {/* Header Section Komunitas */}
        <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-3 flex flex-col gap-1">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-track-cyan-surface text-secondary text-label-sm font-label-sm">
            <span className="material-symbols-outlined text-[14px]">forum</span>
            <span>Ruang Kolaborasi &amp; Karir</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mt-1">
            Komunitas Belajar &amp; Tanya Mentor
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Diskusikan tugas, bedah portofolio, dan dapatkan solusi langsung
            dari praktisi industri berpengalaman.
          </p>
        </section>

        {/* CTA Card "Mulai Tanya Mentor" */}
        <section className="px-gutter my-2">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container via-surface-tint to-primary p-4 shadow-sm text-on-primary">
            <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute right-4 top-3 opacity-20 pointer-events-none">
              <span className="material-symbols-outlined text-[72px]">
                psychology_alt
              </span>
            </div>
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-on-primary">
                    help_center
                  </span>
                </span>
                <span className="font-label-md text-label-md text-on-primary-container bg-white/15 px-2.5 py-0.5 rounded-full">
                  Respons Cepat • Rata-rata 15 Menit
                </span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  Punya kendala belajar atau review karier?
                </h2>
                <p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
                  Tanyakan studi kasus, error coding, atau telaah portofolio
                  desainmu hari ini.
                </p>
              </div>
              <button
                type="button"
                id="btn-ajukan-tanya"
                onClick={() => setAskModalOpen(true)}
                className="mt-1 w-full h-11 bg-surface-container-lowest text-primary font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  add_circle
                </span>
                <span>+ Ajukan Pertanyaan ke Mentor</span>
              </button>
            </div>
          </div>
        </section>

        {/* Baris "Mentor Aktif Hari Ini" */}
        <section className="mt-3 flex flex-col gap-2.5">
          <div className="px-gutter flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mentor-verified" />
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Mentor Aktif Hari Ini
              </h2>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              14 Online
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto px-gutter no-scrollbar py-1">
            {ACTIVE_MENTORS.map((mentor) => (
              <div
                key={mentor.name}
                className="flex flex-col items-center justify-between p-3 rounded-xl bg-surface-container-lowest shadow-sm w-36 shrink-0 text-center gap-2"
              >
                <div className="relative">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                    alt={mentor.name}
                    src={mentor.avatar}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-mentor-verified ring-2 ring-surface-container-lowest" />
                </div>
                <div className="min-w-0 w-full">
                  <p className="font-label-md text-label-md text-on-surface truncate font-semibold">
                    {mentor.name}
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                    {mentor.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onShowToast(`Membuka sesi konsultasi dengan ${mentor.name}`);
                    onNavigate('tanya-mentor-detail');
                  }}
                  className="w-full py-1.5 px-2 rounded-lg bg-surface-container-high text-primary font-label-sm text-[11px] hover:bg-primary hover:text-on-primary transition-colors cursor-pointer whitespace-nowrap"
                >
                  Konsultasi 1-on-1
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Tab Horizontal */}
        <section className="mt-4 px-gutter">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {FILTER_TABS.map((tab) => {
              const active = activeTag === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTag(tab.id)}
                  className={`filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Feed Diskusi & Tanya Mentor */}
        <section className="px-gutter mt-3 flex flex-col gap-3.5">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="feed-card bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3"
            >
              {/* Tag Pills & Status */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-semibold ${
                      post.categoryKey === 'uiux'
                        ? 'bg-track-cyan-surface text-secondary'
                        : post.categoryKey === 'coding'
                        ? 'bg-surface-container-high text-primary'
                        : 'bg-badge-amber-surface text-tertiary-container'
                    }`}
                  >
                    {post.tags[0]}
                  </span>
                  {post.tags[1] && (
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                      {post.tags[1]}
                    </span>
                  )}
                </div>

                <span
                  className={`inline-flex items-center gap-1 font-label-sm text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    post.statusBadge.variant === 'pending'
                      ? 'text-badge-amber bg-amber-50'
                      : 'text-mentor-verified bg-emerald-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {post.statusBadge.icon}
                  </span>
                  {post.statusBadge.label}
                </span>
              </div>

              {/* Penanya Info */}
              <div className="flex items-center gap-2">
                <img
                  className="w-7 h-7 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                  alt={post.author.alt}
                  src={post.author.avatar}
                />
                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="font-semibold text-on-surface">
                    {post.author.name}
                  </span>
                  <span>•</span>
                  <span>{post.author.timeAgo}</span>
                </div>
              </div>

              {/* Judul Pertanyaan */}
              <button
                type="button"
                onClick={() => onNavigate('tanya-mentor-detail')}
                className="text-left group cursor-pointer"
              >
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </button>

              {post.codeSnippet && (
                <div className="bg-inverse-surface text-inverse-on-surface rounded-lg p-3 font-mono text-[11px] leading-relaxed overflow-x-auto">
                  <span className="text-tertiary-fixed">
                    {post.codeSnippet.comment}
                  </span>
                  <br />
                  {post.codeSnippet.lines[0]}
                  <br />
                  &nbsp;&nbsp;{post.codeSnippet.lines[1]}
                  <br />
                  {post.codeSnippet.lines[2]}{' '}
                  <span className="text-error-container">
                    {post.codeSnippet.trailingComment}
                  </span>
                </div>
              )}

              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                {post.excerpt}
              </p>

              {/* Mentor Answer Box if present */}
              {post.mentorAnswer && (
                <div className="rounded-xl bg-surface-container-low p-3.5 flex flex-col gap-2.5">
                  {post.mentorAnswer.badgeLabel && (
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-badge-amber-surface text-badge-amber font-label-sm text-[11px] font-bold">
                        <span className="material-symbols-outlined text-[14px] icon-filled">
                          workspace_premium
                        </span>
                        {post.mentorAnswer.badgeLabel}
                      </span>
                      <span className="font-label-sm text-[11px] text-on-surface-variant">
                        {post.mentorAnswer.rightLabel}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <div className="relative shrink-0">
                      <img
                        className="w-9 h-9 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        alt={post.mentorAnswer.alt}
                        src={post.mentorAnswer.avatar}
                      />
                      <span className="material-symbols-outlined text-[13px] text-mentor-verified absolute -bottom-0.5 -right-0.5 bg-surface-container-lowest rounded-full p-0.5 icon-filled">
                        verified
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                          {post.mentorAnswer.name}
                        </span>
                        <span
                          className={
                            post.mentorAnswer.roleBadgeVariant === 'primary'
                              ? 'font-label-sm text-[10px] text-on-primary bg-primary px-1.5 py-0.2 rounded font-semibold'
                              : 'font-label-sm text-[10px] text-secondary font-semibold bg-secondary-container/40 px-1.5 py-0.2 rounded'
                          }
                        >
                          {post.mentorAnswer.roleBadge}
                        </span>
                      </div>
                      <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                        {post.mentorAnswer.title}
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest rounded-lg p-2.5">
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      {post.mentorAnswer.quote}
                    </p>
                  </div>
                </div>
              )}

              {/* Pending Note if present */}
              {post.pendingNote && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[18px] text-badge-amber">
                    pending_actions
                  </span>
                  <span>{post.pendingNote}</span>
                </div>
              )}

              {/* Footer Interaksi */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleUpvote(post.id)}
                    className={`upvote-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-label-sm active:scale-95 transition-all cursor-pointer ${
                      post.voted
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container text-on-surface'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        post.voted ? 'icon-filled' : ''
                      }`}
                    >
                      thumb_up
                    </span>
                    <span className="vote-count tabular-nums">
                      {post.upvotes}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('tanya-mentor-detail')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      chat_bubble_outline
                    </span>
                    <span>{post.replyLabel}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Simpan Diskusi"
                    onClick={() => handleBookmark(post.id)}
                    className={`bookmark-btn w-9 h-9 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                      post.bookmarked
                        ? 'text-primary'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        post.bookmarked ? 'icon-filled' : ''
                      }`}
                    >
                      {post.bookmarked ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-label="Bagikan Diskusi"
                    onClick={() =>
                      onShowToast('Tautan diskusi disalin ke clipboard!')
                    }
                    className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      share
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Floating Micro-banner Tanya Mentor */}
        <div className="px-gutter mt-5">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  support_agent
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <p className="font-label-md text-label-md text-on-surface font-semibold truncate">
                  Butuh Review CV Kilat?
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                  Kirim draft PDF, mentor bedah dalam 24 jam
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                onShowToast('Membuka panel Review CV & Portofolio ATS...');
                onNavigate('profil');
              }}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm active:scale-95 transition-transform cursor-pointer whitespace-nowrap"
            >
              Upload CV
            </button>
          </div>
        </div>
      </main>

      {/* Modal Ajukan Pertanyaan ke Mentor */}
      {askModalOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-surface-container-lowest w-full max-w-md rounded-t-2xl sm:rounded-2xl p-4 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-on-surface font-bold">
                  Ajukan Pertanyaan ke Mentor
                </h3>
                <p className="font-body-sm text-on-surface-variant">
                  Dijawab langsung oleh mentor praktisi aktif
                </p>
              </div>
              <button
                type="button"
                aria-label="Tutup modal pertanyaan"
                onClick={() => setAskModalOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>

            <form onSubmit={handleCreateQuestion} className="space-y-3">
              <div>
                <label className="block font-label-sm text-on-surface mb-1">
                  Kategori Topik
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'uiux', label: 'UI/UX Design' },
                    { id: 'coding', label: 'Coding & Web' },
                    { id: 'data', label: 'Data & AI' },
                    { id: 'cv', label: 'Review CV & Karir' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() =>
                        setNewCategory(cat.id as 'uiux' | 'coding' | 'cv' | 'data')
                      }
                      className={`py-2 px-3 rounded-lg font-label-sm text-left transition-colors ${
                        newCategory === cat.id
                          ? 'bg-primary-container text-on-primary font-bold'
                          : 'bg-surface-container-low text-on-surface-variant'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="question-title-input"
                  className="block font-label-sm text-on-surface mb-1"
                >
                  Judul Pertanyaan
                </label>
                <input
                  id="question-title-input"
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Contoh: Bagaimana cara riset user untuk aplikasi fintech?"
                  className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>

              <div>
                <label
                  htmlFor="question-body-input"
                  className="block font-label-sm text-on-surface mb-1"
                >
                  Detail Kendala / Konteks
                </label>
                <textarea
                  id="question-body-input"
                  rows={3}
                  required
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                  placeholder="Ceritakan konteks proyek atau masalah teknis yang sedang kamu hadapi..."
                  className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-primary-container text-on-primary font-label-lg font-bold shadow-sm cursor-pointer"
              >
                Kirim Pertanyaan Sekarang
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
