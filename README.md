# PortalPorto — Galeri Portfolio Personal

PortalPorto: koleksi 7 template portfolio personal dengan karakter berbeda — untuk desainer, developer, dan kreator.

**Demo live:** https://www.pintuweb.id/website-portofolio

![Tangkapan layar PortalPorto](public/og.jpg)

> Katalog demo milik PintuWeb. Setiap kartu menautkan ke demo live yang bisa dicoba.

## Konsep

Katalog template portfolio. Hero bento, kartu berbingkai browser yang menggulir pratinjau halaman penuh saat disorot, modal detail, dan mode gelap.

- Isi katalog ada di `app/data/templates.js`. Setiap template punya 14 halaman (5 halaman utama, 6 studi kasus, 3 artikel); Carlos menambah Privasi & Ketentuan.
- Durasi dan harga (hero, statistik, FAQ) diambil dari `PAKET` di `app/data/pintuweb.js`, salinan paket Portofolio / Personal Branding di `PintuWeb/app/lib/packages.ts` (2–3 hari kerja, Rp150 ribu–Rp1,2 juta; harga per 22 Oktober 2026). Ubah di sana dulu bila berubah.
- Tanpa testimoni atau rating bintang: portal ini belum punya ulasan pelanggan sungguhan.
- Pratinjau `public/templates/p<n>.webp` (1280×880 @2x) dan `f<n>.webp` (halaman penuh, lebar 900) diambil dari demo live (22 Okt 2026); urutan n: noelle, carlos, sorelle, aria, rex, celeste, milo. Setelah mengganti `p<n>.webp`, buat ulang variannya dengan `node scripts/gambar-varian.mjs`.

## Tautan langsung per demo

Tiap kartu punya `id` = slug: `noelle`, `carlos`, `sorelle`, `aria`, `rex`, `celeste`, `milo`. Membuka `/website-portofolio#slug` menggulir ke kartunya, mereset pencarian dan filter ke "Semua", lalu menyorotnya ±2 detik. Gambar potret ponsel (390x844 @2x) ada di `public/templates/m<n>.webp` (dipakai strip hero dan kartu < 640 px); `p<n>`/`f<n>` diambil ulang 30 Okt 2026 dari demo live. Sumber gambar: `public/SUMBER.md`.

## Varian yang dipamerkan (7)

- [Aria](https://portfolio-aria.pintuweb.id)
- [Carlos Mendoza](https://portfolio-carlos.pintuweb.id)
- [Celeste](https://portfolio-celeste.pintuweb.id)
- [Milo](https://portfolio-milo.pintuweb.id)
- [Noelle](https://portfolio-noelle.pintuweb.id)
- [Rex](https://portfolio-rex.pintuweb.id)
- [Sorelle](https://portfolio-sorelle.pintuweb.id)

## Halaman

`/`

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v3
- JavaScript
- Headless UI, Heroicons, Framer Motion, next-themes (mode gelap)
- Font: Inter, Space Grotesk (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
