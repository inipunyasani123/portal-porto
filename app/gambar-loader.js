// Loader next/image tanpa Vercel Image Optimization. Kuota optimasi gambar tim di Vercel habis (16 Okt 2026: varian
// baru membalas 402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED), jadi gambar disajikan sebagai berkas statis.
// Setiap pratinjau p1–p7 di public/templates punya varian <nama>-<lebar>.webp (dibuat dengan sharp, WebP q76). Lebar di atas
// varian terbesar memakai berkas aslinya. Gambar baru = buat juga varian 320, 480, 640, 800, 960, 1280, dan 1600. Tangkapan halaman penuh f1–f7 dipakai apa adanya.
const VARIAN = [320, 480, 640, 800, 960, 1280, 1600];

export default function gambarLoader({ src, width }) {
  if (/^https?:/.test(src) || !/\.(webp|png|jpe?g)$/i.test(src)) return src;
  const lebar = VARIAN.find((w) => w >= width);
  return lebar ? src.replace(/\.[^.]+$/, `-${lebar}.webp`) : src;
}
