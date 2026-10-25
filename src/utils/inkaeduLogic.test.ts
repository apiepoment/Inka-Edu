import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCheckoutSummary,
  evaluatePasswordStrength,
  filterDiscussions,
  formatCountdown,
  formatRupiah,
  INITIAL_DISCUSSIONS,
  optimizeImageUrl,
  toggleUpvoteState,
} from './inkaeduLogic';

test('optimizeImageUrl appends WebP compression parameters to Google image URLs', () => {
  const raw = 'https://lh3.googleusercontent.com/aida-public/AB6AXuTest';
  assert.equal(
    optimizeImageUrl(raw, 400, 'webp'),
    'https://lh3.googleusercontent.com/aida-public/AB6AXuTest=w400-q80-rw'
  );
  assert.equal(
    optimizeImageUrl(raw, 320, 'jpg'),
    'https://lh3.googleusercontent.com/aida-public/AB6AXuTest=w320-q80'
  );
});

test('formatRupiah formats positive and negative IDR amounts accurately', () => {
  assert.equal(formatRupiah(1499000), 'Rp 1.499.000');
  assert.equal(formatRupiah(-50000), '-Rp 50.000');
});

test('calculateCheckoutSummary applies INKASUKSES voucher and computes total', () => {
  const summary = calculateCheckoutSummary(2499000, 1000000, 'inkasukses');
  assert.equal(summary.voucherValid, true);
  assert.equal(summary.voucherDiscount, 50000);
  assert.equal(summary.finalTotal, 1449000);

  const noVoucher = calculateCheckoutSummary(2499000, 1000000, 'INVALID');
  assert.equal(noVoucher.voucherValid, false);
  assert.equal(noVoucher.voucherDiscount, 0);
  assert.equal(noVoucher.finalTotal, 1499000);
});

test('filterDiscussions filters by category tag and search query', () => {
  const all = filterDiscussions(INITIAL_DISCUSSIONS, 'all');
  assert.equal(all.length, 3);

  const uiux = filterDiscussions(INITIAL_DISCUSSIONS, 'uiux');
  assert.equal(uiux.length, 1);
  assert.equal(uiux[0].author.name, 'Budi Santoso');

  const verified = filterDiscussions(INITIAL_DISCUSSIONS, 'verified');
  assert.equal(verified.length, 2);

  const searched = filterDiscussions(INITIAL_DISCUSSIONS, 'all', 'Next.js');
  assert.equal(searched.length, 1);
  assert.equal(searched[0].author.name, 'Sarah Melati');
});

test('evaluatePasswordStrength returns expected strength levels', () => {
  assert.equal(evaluatePasswordStrength('').score, 0);
  assert.equal(evaluatePasswordStrength('abc').score, 1);
  assert.equal(evaluatePasswordStrength('abcdef1').score, 2);
  assert.equal(evaluatePasswordStrength('Inkaedu2025!').score, 3);
});

test('formatCountdown formats seconds to HH:MM:SS', () => {
  assert.equal(formatCountdown(86382), '23:59:42');
  assert.equal(formatCountdown(0), '00:00:00');
});

test('toggleUpvoteState increments and decrements accurately', () => {
  const up = toggleUpvoteState(48, false);
  assert.deepEqual(up, { votes: 49, isVoted: true });

  const down = toggleUpvoteState(49, true);
  assert.deepEqual(down, { votes: 48, isVoted: false });
});
