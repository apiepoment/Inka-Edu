export type ScreenId =
  | 'beranda'
  | 'tentang'
  | 'layanan'
  | 'kontak'
  | 'program'
  | 'checkout'
  | 'komunitas'
  | 'tanya-mentor-detail'
  | 'belajar'
  | 'profil'
  | 'pengaturan'
  | 'login'
  | 'register';

export function optimizeImageUrl(
  url: string,
  width = 480,
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  if (!url) return '';
  const cleanBase = url.split('=')[0];
  if (cleanBase.includes('lh3.googleusercontent.com')) {
    const fmtFlag = format === 'webp' ? '-rw' : '';
    return `${cleanBase}=w${width}-q80${fmtFlag}`;
  }
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}fm=${format}&w=${width}&q=80`;
}

export interface DiscussionPost {
  id: string;
  tags: string[];
  categoryKey: 'uiux' | 'coding' | 'cv' | 'data';
  isTrending: boolean;
  isVerified: boolean;
  statusBadge: {
    label: string;
    icon: string;
    variant: 'verified' | 'pending' | 'coach';
  };
  author: {
    name: string;
    avatar: string;
    alt: string;
    timeAgo: string;
  };
  title: string;
  excerpt: string;
  codeSnippet?: {
    comment: string;
    lines: string[];
    trailingComment: string;
  };
  pendingNote?: string;
  mentorAnswer?: {
    badgeLabel?: string;
    rightLabel?: string;
    name: string;
    roleBadge: string;
    roleBadgeVariant: 'cyan' | 'primary';
    title: string;
    avatar: string;
    alt: string;
    quote: string;
  };
  upvotes: number;
  voted: boolean;
  replyCount: number;
  replyLabel: string;
  bookmarked: boolean;
}

export interface CommunityReply {
  id: string;
  authorName: string;
  roleBadge: string;
  roleVariant: 'cyan' | 'neutral';
  avatar: string;
  alt: string;
  timeAgo: string;
  content: string;
  upvotes: number;
  voted?: boolean;
  liked?: boolean;
}

export interface UserProfile {
  name: string;
  batchLabel: string;
  headline: string;
  email: string;
  phone: string;
  avatar: string;
  behanceUrl: string;
  linkedinUrl: string;
  notionUrl: string;
  totalHours: number;
  streakDays: number;
  grade: string;
  portfolioCompletion: number;
}

export const ASSETS = {
  logo: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCqGjGTv4UZSykVr-HgzwMbzbe3892hQh-5ayvc0LHt7O59_ikFBPqFtv7MGym_Kp_1Ed2oAlbuZmbrGMofws0omc33APZVe2MX9bvLln8YN9ctnqJjPFTNMTEf2sfrurQ1N8J0YEvhnB9fq7m_H_ReiATYGtGF3isWNDl51DHUVwx7qF1NnGoai0AKWWkOroaWKno2szzMH84RfKV73jRkh5ecG_9hxzVOg8vCNBY7EAmdMOzyDvoT', 160, 'webp'),
  profileNav: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuBZbDIQjhXSh2DLxebx9AD6RPGcO1IzNNIkVYzZjpXjLtkxzFkyCv4Y4Rf3vbq1CmM7REUrGC3yHBm56IuT1azu4kPlpyi_cL6RktpYwMq0TvdnjGo_wwx7uCtzZLguwyz1XlY8pUyoJg72vkNw5R9soALGNkqLbRhCfrAeJo9-8BziO7ChD5IpmkqRVTLn1kNtKdVlbNJAXqVIUkZM-f1TmS2tU7g7GJPBueREecBxEb8ZsGnb1_gK', 128, 'webp'),
  amandaSettings: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuChO_zixgnGrcUVAiuj4quONv7vlAg-GEDtO2HhvPQb0HSItn4au7PpuGi-or1xutDNMrQOtfxOYh18CVi-8jXa8Fq0q8Hcny8ZDXkA9oS075yU-CFD2TcnOVoEP51IuGDp7E99kl0p82mQt1yzkKvD6whLuuPeIBdnrMSSnuJiCf12nVlhvqLA5hxZiJdoKu1wJ2_iu_7g5ssqILoN677pDUat5G2YHt7FKE4dxW0o7QzBtJ3Ac0fM', 160, 'webp'),
  amandaModal: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuAB0l_xzxVaVRmAsJN_Zj3nO7J8woN1FGTrGq-FruQA0qjQJ8tWluk3MVLYcaoIjh6GETBtv5vkw8KTbT_yDglWs-lEw_w4Q6uX3Hsgq7TW0BwZ3Kbn5CnoRGA92r0-qCjJn95d9FG5VSyjr1l_aoz8trdtJy7gilLRbAdG2u0oZuDMBTdlt_sVXiONjhEcYMgaR_3kHE8aJfSXlAI8vfN4e8mYDUcsLQOCstuUfAMHQ49Yo7aHTLMn', 160, 'webp'),
  amandaThread: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDr-I4rnwzqmaf-XslIhAORTUAaTDF1tbXj2yf9izpMpkDumIGl2BtuqSySytpkYkrSsBGH-jzFV2rNQrSa6OrPnzeOfq4_52a70IHklvF4pQ-R3vAkWEEWH_2oi55cXoysG0uVJB9SNttbi0qhvRV7Qg1Qb1Aj6LI6bCKpFqBVaHE0gV1Bu9wMmWC-Njoqju4l6wDrnl-0gHjLiLmCW8I_F1oLwgnctkvAqjFwdNCAPa9sxgHwqk-o', 160, 'webp'),
  figmaThumb: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuABWSH7fNT5uoSPiKnKmDWYyTJ7fput8PmosQQKADZoNQ3hVHK_vkF26JzRdCD7t7C5ovlPqnPa26H0RvivPdD7IfmhQInMvq7MYT7uW2vnPS2D1tIsYxf2Uy-sku3MxZBCVJJ5LpMMs4i6mM5gxJGM2M8au6AMItNOnOhN58rHGdMPT5YGKjnq-0OWNY9fDHH91__uCOyjK4gpyMDuPvGi-LGxAS_S1xEx8KIRBYSVeRp747NIVFW3', 640, 'webp'),
  forumAvatar1: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDptTQaPaiT_gvPxDHNHsa4ll3nLG7kctWtijjwtoOz0cnC7a4iQKVhnNETWC_q8NxpElIqcUcrSqsLG1aCqrPra4Dt4nwPXqAQO6pUXtK4wICiCp9nKheUVVe4ytKjUGFzKUvyT3zRqwfyft4ufFbKUyxNM7v5wm6OOUN1R0SLITbrEDPqCaTBQta_QyAh3AEi-GlANw8jH2t1BRboIswqNTgNfdCkeniGiWf3pJs9q0ZAtzk5zB76', 96, 'webp'),
  forumAvatar2: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCTJYiRMrny7ntImt42og3V5YSgqV0p-Vd_oHs6-E5g_w9pbVkKxrtjuA_FODRU2eftZa7zFPLhh6QaZTebr3DHoJnin-isngX1cgUfoEZW0w3yALobNGkV8F7wU8AuLlcqUiTTU5N9e1dF5KiamgfzhFDE9wRAJFV547yzlTK9uB_queKSEGaU5CQVx6ILFhmh-GniUf49KJAfSaHmGC9BYN5a4RggzPQNAwhLgXz0MZvqQ7o9DYvp', 96, 'webp'),
  bootcampUiUx: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuBIR6I1uhM9lK5WKxD-LfiOt_g_39BMyLK9BXlvz22P2ShHwH7ha_M4jnpwYASKZQb4Ouns3v2gDe07iGnmgrlOv-KuUTQGtlCdyDUWgbhX9DcZgkrikUk1LuvdzKJiOtx-gtfHM3Z0BSU7L9lbV4ijVpl0kqFwtw_bnxGpYoIIgZYxbkn1e8ZrhX1dWaUphKy7vD7u4HUn9b1i7sIADd2k1xrQ1h5wcrxgBsFjyDALzRwsLdbJQCCr', 720, 'webp'),
  bootcampData: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCBQLDMggDoMRzb8SBWKw29EYj7IqlWJaBBsqlBQzMnWeYidJt7CVc-QkVqg3q0JnufhpacKvePLpXwzCgkn3rcYhGEHn_8SxIuttCHjtFaJ8nIvqAPoOe--BMP9dpFmrRFFpqpUwGjM4-XbN-4_ITFhTZWytoMovudOqULw6owYPIm2X0nea7wYVZqfH14Of4uKXPdjgmt_pQ8U02jXRXIh25M7Av_bVJ6rIrJQMDhOICy0nP93rSj', 720, 'webp'),
  alumniDinda: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCtMhTq3BePdaaF4SdwYV0YcokuOMRnC7Jg0-oYcelisQn_lrawub9RLmzBnD6jDLF2aET9HY_zN13mImijmmDX-OXITwT8ooqCK2RT7pjLblA18ODkkZ9VxkKlh5Qxu2IiljqMwDTlGix0kigFQHt13el28a373wa5fjKpjc4YwbpfH_OSqj9jphAyJsdVwKo3rUFSA7g2nSuGzGtM9oipK7PYPleEGOEvlLImjV0FJK8T6L-iVeWo', 160, 'webp'),
  mentorRizky: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuA7H8EGmGuL2c6G-0DsPJbtRI5RNwhdtlQxFWhuLfzEi096vN3-AlszPrsqIVCVNUHrz4mYu3ebWS1I5_TkI50bJs-E0VUVOe2pzeKDGASeRJ06dOFDIT9KYG7o-HO4MkrCUQaPGA9j5nbBQRVRSr2sRHWHJXO8iI13AoQpq2olFvdFpw0xC_PquA4tvgy3wPj5RxJSXdcelKnasOpRP9XAdcvhfT7nIk1gLE7iifg2VHDdk5XMDbc_', 160, 'webp'),
  mentorSiti: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCwpmDsuE2kBBWzoonwBIBdRMwf2KQ-GDp2dTYsfHvaG_7ByrnVddhtSvKbUNYErWASv2AdjqCi3qk_tsnfnSjcveL6WIeICnD5trnUji4m1yDWfkHTjB2iyYJh3v5LXpLhtonjJ-Ij8H2x5k6Im1u6MjLLsXvWpYPpvHm1z9euX8yV0s554TeLDsdksC-Zs7xjIGT5ekfs3D6_JodpzpNXePJQQJigLGVKq_YCwxgFuA1C4GeNlPzw', 160, 'webp'),
  mentorFajar: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuB0ygyG3pSgSatH5MgPtQKJduYitHOxHTplxHqIN5GBz8XFZLjlu41v1U2fkv3tWyE1o1xIDiRqaF2weNrKFqfcU9ed6AWJj4IcFqhy8HoOUU_-xi4GhhLyHFYIpBLyvOUTxY74encbGo0aPwtya5FEuS-BCpiPqHq_nnuA6kXJsid9AxJtcuFGJ073IUOGhPCrgaMYQ8o0a9KFIs-Wv7isKL9N_lUDfrJNndW6hfAb1oO0U5v492kz', 160, 'webp'),
  mentorJessica: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDqk8OqzmMkVGtYLiaeS6fKhKyh1DbVHGohRHi0JbaMHcu1Dr_ommPRNnorG05XCncVSBT5Ibsfgggx0Vmkh8mTgt6SPdZ2xJBLRpLFGnHYzH1q4hAjSGp_vc5OOJXZNIKu0gq3UmZv-Xha3hILTqq9N640uAc7kS3w4nHcrg2AV4q1xevOt0VmsaTKN1DYR5ECyhEr1f3z60VNGKEbOPE9-82hobrEzsSm0Ha6MgP57-MWoJGci_Cj', 160, 'webp'),
  studentBudi: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDqcHvBF07RKsg_XBJLT20XJXHyo3mmKBwYdFJ-1-t7j3oUoCXjSI68IiHXZNpFxg2KIuB9mkXscA3nJwQwH5BulVzcsPNMMsqYNax0ygbQ0cpXiEneCUnWYq44Rz5gwbZiGcUbJgiMC88ZenQQH7n8J2UuxkOdEYKmfMqBLm6bn2JOvBMegNLBWQOu6d3cqk2a5jSy6zzb5DUuVlqArUhSx5_LiL8XvqlR63yv6vEJlzO_Nr0hvXFN', 120, 'webp'),
  mentorDimas: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCPMDKttxg6_RgjFesejxMg0IhxoBMF9yf06CpnMM3OM6YslV1wf7_f6BWIvY0aZgreSL7DkTTVxzaRscjjuMj8_7yOisWhYvJk85gF_yclqUL8jJtrP0ndrZ9jzAcRkzSjHXK7SzdISeF8PhIV4GaewPeWZFepP6qMFg5rnStsOOyNKWtMt5tFSNdmQi913qSbp9dBGEhMheMMx_13_62S71DH-1e5X6yuHwHhm-I5VwUmtvCnkiVL', 160, 'webp'),
  studentSarah: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDkJeFc6pb25e_LB9_J8mr8pwsN_gW0uVBThhOHgedgIv56zRB_FmUfQSQlRXvKriinH0DV_bTh2g863R8wucsl0zpTJRpz6p4kjhvcnzFQVwpoMJ6MKJmQclhCHjM2zPfNllDcBYFNeXTDbIF85HUFz7PiuhzPrqeJkKVkiYJauj0T511r4HnMXMIBLcmq6XGs6p9q82kAcjtbirp6kHSuKGFZZ0zFvZpBZsgg2fdXxPij1UHV4tbf', 120, 'webp'),
  studentIlham: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuA08EzgxqGJM4la3LNQwMb3cN-eJV55JNoUxJ6lBlolZJNNhD1zVvmg4da8cBNYqy6N0WlwAWFP_KDi3y4kzVzhc0XHvHDRODrvbBAFdRxE57gosXucLpZrNBejxMhqaTDUu_O6Ifn9XK-Zp8nKH1cWC4iMNpia4QeB0oLLkvrbPkbZYUnUkFU02V7bJpQsNAc4DdPGLmOviIuDdubUmqyiXG0ZUkWx626mBjiJswkLaXVd6aTqzD8o', 120, 'webp'),
  mentorJessicaCard: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCaGnAdqvIDZr-9seInkXF95RF45VyDb-8dof6iYgT6wYhSjgCT2eAl9z0Jjh9Lrjb2gDnFHmQ7zMRygWA7JCTMu2_cDRNIc-2MiScH2kvqdZAC9Dl7nU2We6nPFeiEBy08yy1343zt21VK99DMvQFMU5gJPuHMpLCcHCDklgHR17ejNCs30RsQ3anqYSNJjwKFqmgPZxRvHdWF8JuBCuZq30H73e1WRySZ0bNx9l1J3lueO5SEvQK9', 160, 'webp'),
  belajarMentor1: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuB6WzZBswq7pPVoa6korP0E8yH6kUpM6Vw0_46lQbNv-HDWKedUhMUHmbSRc-jLjp1qnCUjJa3AMDgSAj0i8syttK8EUywBAc3cG_AcsBL7HA_c1xLyybwLo5SVp8rd2IkLHsndYbAb3vJSsyCXTTTEWl7yewYfwO30QqhAfG9d0TiQhCLAovRV8vkJbSzloOwqX6NAfV9ptAsA7BZFNF0GptY7nW-m5MIHev2fkOqwilXbYrH99ycS', 120, 'webp'),
  belajarMentor2: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuBWxiHhBWpA32KG5tBM6GbTlqQ2XrKxx_Hs8fzoQe6iFuISnq0OJq027a9S4hBPL6lE0FYnI4YpsFcCAdcBw253HsrPliB-9wy2CvKAgJcp_Dbc2AQuxPR3xVQREPuFx--xjsp-1Ni3wnbG-e_uC05402PHn6PPJNF39ykWxrebRtqn5TH5m4Qpq0o2l8LVZv1TvvPTjGCCUebJU_DpryaUj_dTd8p5QIxh0EjOi1kA5bVtgiZ_WpRm', 120, 'webp'),
  wireframeDraft: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuCf2gXz2eyzMgbZrmn5BEEf002DGQhGs-vVyl2lTUkKMwV5-IZ8vsz3IQwsqEejGcwinu9FA3jNDLmYjVd3blzZdyZNRSOXNk0hLKcR2P3AMbnsLzr5QFVDbZ4Db4b-BdEPw0p0Q4Rq_pxFJNqw3j9cCqyDOBQaBD-P70r824QsIT3gchA310M0zKPTJVcxd6tkJ_u4DocTY-cb4cDtAW0ZjWELgRDMSxxHaBgDbLTLKMhYMl6i7kUJ', 720, 'webp'),
  mentorDimasDetail: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDTeIrGQvx4ZNejdCPgNbv8091lf1vL1QKj5M0h9rmLHn6W2FWTZgZXl5HjJcMv4gCH0AKvzfGskuaJMAtPTH2rHSqorNam3y19dQu6oNRPCsKdf-jyY_RwLtpM2Tn49fgXPcmLgK9uJE3-WZecxPb1-MrIOkUF9kQ4JaVlZcUD6Fj8C4vRA1AJlteZgDI4mTDLFWnxQQc8p0Ir-8cJiDVriD7BbqC-s8EvfgnsGkbrAYV5vKbPJI4-', 200, 'webp'),
  replyFajar: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuDvvksAdxfScKPIlZFGEjD4rmY_nPkqZuJPQJBPgrLIcOegi3EhuiTbMgzpNUDfeJKHwb_qFNDlYBy08RJYnKpyqE6TxbSgK9Rotj2qXEupBmOnrVLIU-NMEG9qNktuxewoJFt1iC6Ws1EWOLH3MjuffkhTHwfxzX-xAmoQXClWWVnyNPQwXF7MznzHXpDbcLoeokFVTKJP2bdwfJw4pyB0IsjEr1P8Lg1NV7iq7T0EQIpESLRm1HYu', 120, 'webp'),
  replyKevin: optimizeImageUrl('https://lh3.googleusercontent.com/aida-public/AB6AXuC2SgDJojUWze-CcNx5nuogr3shlE8ytA6Mzz-NadqfTD_jbMyS4XYyBoP9qM64y_wtThIL3n6OZ-fVPB9g7_the20YBP0MVeMAyu-OU_039Yp35cwWPoXMB0SBlmdTmG9aLWOMb7VYbmoIHvdYbfRQzPE37X_iUx9aGmZ90U3utZXa9osSNPkt6gY02FZUqTnX_pUpYszoGTnBGCBTNdkHEjUjv-mRxDNjkiU_3VNNBvSxbemmhdHF', 120, 'webp'),
};

export function formatRupiah(amount: number): string {
  const absAmount = Math.abs(Math.round(amount));
  const formatted = absAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return amount < 0 ? `-Rp ${formatted}` : `Rp ${formatted}`;
}

export interface CheckoutSummary {
  normalPrice: number;
  earlyBirdDiscount: number;
  voucherDiscount: number;
  finalTotal: number;
  voucherValid: boolean;
  appliedCode: string;
}

export function calculateCheckoutSummary(
  normalPrice: number,
  earlyBirdDiscount: number,
  promoCode: string
): CheckoutSummary {
  const normalizedCode = promoCode.trim().toUpperCase();
  let voucherDiscount = 0;
  let voucherValid = false;

  if (normalizedCode === 'INKASUKSES') {
    voucherDiscount = 50000;
    voucherValid = true;
  } else if (normalizedCode === 'ALUMNI100') {
    voucherDiscount = 100000;
    voucherValid = true;
  } else if (normalizedCode === 'KARIR50') {
    voucherDiscount = 50000;
    voucherValid = true;
  }

  const finalTotal = Math.max(0, normalPrice - earlyBirdDiscount - voucherDiscount);

  return {
    normalPrice,
    earlyBirdDiscount,
    voucherDiscount,
    finalTotal,
    voucherValid,
    appliedCode: voucherValid ? normalizedCode : '',
  };
}

export function filterDiscussions(
  discussions: DiscussionPost[],
  activeTag: string,
  searchQuery = ''
): DiscussionPost[] {
  const query = searchQuery.trim().toLowerCase();
  return discussions.filter((post) => {
    const matchesTag =
      activeTag === 'all' ||
      (activeTag === 'trending' && post.isTrending) ||
      (activeTag === 'verified' && post.isVerified) ||
      post.categoryKey === activeTag;

    if (!matchesTag) return false;

    if (!query) return true;

    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.author.name.toLowerCase().includes(query) ||
      post.tags.some((t) => t.toLowerCase().includes(query))
    );
  });
}

export interface PasswordStrength {
  score: 0 | 1 | 2 | 3;
  label: string;
  colorClass: string;
}

export function evaluatePasswordStrength(password: string): PasswordStrength {
  if (!password) {
    return { score: 0, label: '-', colorClass: 'bg-surface-container-highest' };
  }
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if (password.length < 6) {
    return { score: 1, label: 'Lemah', colorClass: 'bg-error' };
  }
  if (password.length >= 8 && hasLetters && hasNumbers && (hasSpecial || password.length >= 10)) {
    return { score: 3, label: 'Kuat', colorClass: 'bg-mentor-verified' };
  }
  if (password.length >= 6 && (hasLetters || hasNumbers)) {
    return { score: 2, label: 'Sedang', colorClass: 'bg-badge-amber' };
  }
  return { score: 1, label: 'Lemah', colorClass: 'bg-error' };
}

export function formatCountdown(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(clamped / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  const seconds = clamped % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export function toggleUpvoteState(currentVotes: number, isVoted: boolean): { votes: number; isVoted: boolean } {
  if (isVoted) {
    return { votes: Math.max(0, currentVotes - 1), isVoted: false };
  }
  return { votes: currentVotes + 1, isVoted: true };
}

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Amanda Maharani',
  batchLabel: 'Bootcamp Batch 11 • UI/UX Design',
  headline: 'Aspiring Product & UI/UX Designer | Batch 11 inkaedu',
  email: 'amanda.maharani@email.com',
  phone: '812-3456-7890',
  avatar: ASSETS.amandaSettings,
  behanceUrl: 'https://behance.net/amandamaharani',
  linkedinUrl: 'https://linkedin.com/in/amanda-maharani-ui',
  notionUrl: '',
  totalHours: 142,
  streakDays: 14,
  grade: 'Grade A (94)',
  portfolioCompletion: 85,
};

export const INITIAL_DISCUSSIONS: DiscussionPost[] = [
  {
    id: 'disc-1',
    tags: ['UI/UX Design', 'Review Portofolio'],
    categoryKey: 'uiux',
    isTrending: true,
    isVerified: true,
    statusBadge: {
      label: 'Terverifikasi',
      icon: 'check_circle',
      variant: 'verified',
    },
    author: {
      name: 'Budi Santoso',
      avatar: ASSETS.studentBudi,
      alt: 'Casual profile photo of Budi Santoso, an enthusiastic young Indonesian college student wearing a green hoodie in a bright campus library.',
      timeAgo: '2 jam lalu',
    },
    title: 'Bagaimana cara menyusun case study UI/UX pertama kali tanpa pengalaman kerja formal?',
    excerpt:
      'Halo mentor, saya baru menyelesaikan program intensif Figma. Saat ini sedang bingung memilih topik studi kasus redesign aplikasi lokal atau membuat produk dari nol (0 to 1) agar dilirik recruiter?',
    mentorAnswer: {
      badgeLabel: 'Jawaban Terverifikasi Mentor',
      rightLabel: 'Solusi Terbaik',
      name: 'Dimas Suryo',
      roleBadge: 'Mentor',
      roleBadgeVariant: 'cyan',
      title: 'Lead Product Designer @ Tech Unicorn',
      avatar: ASSETS.mentorDimas,
      alt: 'Portrait of Dimas Suryo, a senior Indonesian tech product designer with stylish short hair wearing a minimal dark grey shirt against a bright modern creative office.',
      quote:
        '“Fokus pada problem statement yang nyata dan jelaskan alasan setiap iterasi desain, bukan hanya tampilan visual akhir. Tunjukkan alur research micro sederhana, user testing 3-5 teman, dan metrik keberhasilan desainmu.”',
    },
    upvotes: 48,
    voted: false,
    replyCount: 12,
    replyLabel: '12 Balasan',
    bookmarked: false,
  },
  {
    id: 'disc-2',
    tags: ['Fullstack Web', 'React & Next.js'],
    categoryKey: 'coding',
    isTrending: true,
    isVerified: false,
    statusBadge: {
      label: 'Menunggu Review',
      icon: 'hourglass_top',
      variant: 'pending',
    },
    author: {
      name: 'Sarah Melati',
      avatar: ASSETS.studentSarah,
      alt: 'Profile of Sarah Melati, a young Indonesian female junior software developer smiling comfortably while sitting by a laptop with code editor open.',
      timeAgo: '4 jam lalu',
    },
    title: 'Error useEffect looping saat fetch data API di Next.js 14, ada best practice solusinya?',
    excerpt:
      'Sudah mencoba memasukkan useMemo untuk params namun tetap triggered berkali-kali di App Router. Mohon insight arsitektur data fetching yang paling aman.',
    codeSnippet: {
      comment: '// Snippet kasus:',
      lines: [
        'useEffect(() => {',
        '  fetchData(params).then(res => setData(res));',
        '}, [params]);',
      ],
      trailingComment: '// infinite re-render triggered',
    },
    pendingNote: 'Menunggu balasan mentor kedua • 1 mentor mereview',
    upvotes: 24,
    voted: false,
    replyCount: 6,
    replyLabel: '6 Jawaban Komunitas',
    bookmarked: false,
  },
  {
    id: 'disc-3',
    tags: ['Career Tips', 'Gaji & Nego'],
    categoryKey: 'cv',
    isTrending: true,
    isVerified: true,
    statusBadge: {
      label: 'Verified Career Coach',
      icon: 'verified',
      variant: 'coach',
    },
    author: {
      name: 'Ilham Pratama',
      avatar: ASSETS.studentIlham,
      alt: 'Profile photo of Ilham Pratama, a clean-cut Indonesian fresh graduate male smiling eagerly outdoors in business casual polo shirt.',
      timeAgo: 'Kemarin',
    },
    title: 'Tips negosiasi gaji pertama untuk junior UI designer di Jakarta?',
    excerpt:
      'Saya baru dapat offering pertama dari digital agency di Jakarta Selatan. Rentang gaji standar junior designer saat ini berapa dan bagaimana cara counter offer secara sopan tanpa terkesan arogan?',
    mentorAnswer: {
      name: 'Jessica Tania',
      roleBadge: 'HR Lead',
      roleBadgeVariant: 'primary',
      title: 'HR & Career Coach inkaedu',
      avatar: ASSETS.mentorJessicaCard,
      alt: 'Portrait of Jessica Tania, Indonesian professional female HR leader and Career Coach in a stylish modern office background.',
      quote:
        '“Gunakan data pasar (standar entry-level Jakarta IDR 5.5 - 7.5 Jt tergantung kapabilitas prototype testing). Tanyakan paket total: tunjangan laptop, asuransi, dan review performa 6 bulan pertama.”',
    },
    upvotes: 71,
    voted: false,
    replyCount: 19,
    replyLabel: '19 Diskusi',
    bookmarked: false,
  },
];

export const INITIAL_THREAD_REPLIES: CommunityReply[] = [
  {
    id: 'rep-1',
    authorName: 'Fajar Nugraha',
    roleBadge: 'Teaching Assistant',
    roleVariant: 'cyan',
    avatar: ASSETS.replyFajar,
    alt: 'Portrait of an energetic Indonesian tech professional Fajar Nugraha in casual sweater, friendly smile, tech hub background with warm yellow ambient lights',
    timeAgo: '45 menit lalu',
    content:
      'Sepakat banget sama Mas Dimas! Amanda bisa manfaatin background Administrasi Bisnis kamu pas nulis bab “Business Impact & Problem Discovery”. Tunjukkan bagaimana kamu menghitung efisiensi alur operasional. Kalau butuh template format case study Notion, bisa cek channel Discord batch kita ya!',
    upvotes: 19,
    voted: false,
    liked: false,
  },
  {
    id: 'rep-2',
    authorName: 'Kevin Alamsyah',
    roleBadge: 'Siswa Batch 11',
    roleVariant: 'neutral',
    avatar: ASSETS.replyKevin,
    alt: 'Portrait of an Indonesian male student Kevin Alamsyah wearing glasses, bright natural daytime portrait outdoor cafe background',
    timeAgo: '25 menit lalu',
    content:
      'Poin ke-2 Mas Dimas ngena banget. Kemarin pas aku tes interview, recruiter malah lebih lama nanya di slide wireframe yang gagal dibanding final UI-nya. Semangat ya Amanda, kita barengan di Batch 11! 🙌',
    upvotes: 8,
    voted: false,
    liked: false,
  },
];
