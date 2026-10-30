import { PAKET, JENIS, wa } from './pintuweb';

export const site = {
  name: 'PintuWeb',
  label: 'Website Portofolio',
  description:
    'Website portofolio adalah tempat memamerkan karya dan proyekmu secara online. Pilih contohnya, kami isi dengan karyamu.',
  whatsapp: wa('Halo PintuWeb, saya tertarik website portofolio. Boleh minta info?'),
};

/** Pesan WhatsApp yang langsung menyebut template pilihan. */
export const waTemplate = (t) => wa(`Halo PintuWeb, saya tertarik ${JENIS} seperti contoh ${t.title} (${t.url}). Boleh minta info?`);

// Halaman yang sama di setiap template: 5 halaman utama + 6 studi kasus + 3 artikel.
const HALAMAN = ['Beranda', 'Tentang', 'Karya', '6 contoh hasil', 'Blog', '3 artikel', 'Kontak'];
const JUMLAH_HALAMAN = 5 + 6 + 3; // 5 halaman utama + 6 studi kasus + 3 artikel

const templates = [
  {
    id: 'noelle',
    terjual: 0,
    title: 'Noelle',
    tagline: 'Untuk desainer UI/UX. Tampilan putih yang lapang dan rapi.',
    image: '/website-portofolio/templates/p1.webp',
    potret: '/website-portofolio/templates/m1.webp',
    url: 'https://portfolio-noelle.pintuweb.id',
    category: 'Personal',
    tags: ['Minimal', 'Terang', 'UI/UX'],
    desc: 'Tampilan putih yang lapang, dengan contoh hasil berupa aplikasi tugas dan sistem booking.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'carlos',
    terjual: 7,
    title: 'Carlos',
    tagline: 'Untuk desainer yang juga menulis kode. Tampilan gelap dan tegas.',
    image: '/website-portofolio/templates/p2.webp',
    potret: '/website-portofolio/templates/m2.webp',
    url: 'https://portfolio-carlos.pintuweb.id',
    category: 'Developer',
    tags: ['Gelap', 'Tegas', 'Developer'],
    desc: 'Latar abu gelap dengan aksen kuning, berisi contoh hasil marketplace properti dan sistem booking.',
    stack: ['Next.js', 'Tailwind', 'AOS', 'next-themes'],
    pages: [...HALAMAN, 'Privasi', 'Ketentuan'],
  },
  {
    id: 'sorelle',
    terjual: 3,
    title: 'Sorelle',
    tagline: 'Untuk desainer UI/UX. Tampilan ceria dan hangat.',
    image: '/website-portofolio/templates/p3.webp',
    potret: '/website-portofolio/templates/m3.webp',
    url: 'https://portfolio-sorelle.pintuweb.id',
    category: 'Kreatif',
    tags: ['Ceria', 'Pastel', 'Biru'],
    desc: 'Warna pastel dengan aksen biru. Pengunjung bisa menyaring karya berdasarkan jenis.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'aria',
    terjual: 2,
    title: 'Aria',
    tagline: 'Untuk pengembang web kreatif. Tampilan kaca buram yang modern.',
    image: '/website-portofolio/templates/p4.webp',
    potret: '/website-portofolio/templates/m4.webp',
    url: 'https://portfolio-aria.pintuweb.id',
    category: 'Developer',
    tags: ['Gelap', 'Kaca', 'Animasi'],
    desc: 'Kartu kaca buram di atas latar yang bergerak pelan, berisi contoh properti mewah, webinar, dan toko audio.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'rex',
    terjual: 0,
    title: 'Rex',
    tagline: 'Untuk desainer grafis. Tampilan tebal dan berani.',
    image: '/website-portofolio/templates/p5.webp',
    potret: '/website-portofolio/templates/m5.webp',
    url: 'https://portfolio-rex.pintuweb.id',
    category: 'Kreatif',
    tags: ['Brutalis', 'Tegas', 'Lime'],
    desc: 'Garis tebal dan blok warna lime, berisi contoh radio, toko kecil, dan halaman band.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'celeste',
    terjual: 4,
    title: 'Celeste',
    tagline: 'Untuk desainer merek. Tampilan elegan ala majalah.',
    image: '/website-portofolio/templates/p6.webp',
    potret: '/website-portofolio/templates/m6.webp',
    url: 'https://portfolio-celeste.pintuweb.id',
    category: 'Personal',
    tags: ['Editorial', 'Serif', 'Hangat'],
    desc: 'Kertas krem dan huruf berkait, berisi contoh kedai kopi, restoran, dan undangan.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: ['Beranda', 'Tentang', 'Karya', '6 contoh hasil', 'Journal', '3 esai', 'Kontak'],
  },
  {
    id: 'milo',
    terjual: 1,
    title: 'Milo',
    tagline: 'Untuk desainer dan ilustrator. Tampilan ceria dengan ubin pastel.',
    image: '/website-portofolio/templates/p7.webp',
    potret: '/website-portofolio/templates/m7.webp',
    url: 'https://portfolio-milo.pintuweb.id',
    category: 'Kreatif',
    tags: ['Ceria', 'Bento', 'Pastel'],
    desc: 'Ubin pastel membulat, berisi contoh halaman link in bio dan undangan bergaya buku cerita.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
];

export const categories = ['Semua', 'Personal', 'Developer', 'Kreatif'];

// Angka dari isi koleksi (dihitung dari data); durasi dari PAKET (paket Portofolio di pintuweb.id).
export const stats = [
  { value: String(templates.length), label: 'Contoh, gaya berbeda' },
  { value: String(JUMLAH_HALAMAN), label: 'Halaman per contoh' },
  { value: PAKET.waktuAngka, label: 'Hari kerja pengerjaan' },
  { value: '2', label: 'Mode terang & gelap' },
];

export const features = [
  { icon: 'DevicePhoneMobileIcon', title: 'Enak dibuka di HP', desc: 'Rapi di layar kecil sampai layar besar.' },
  { icon: 'SparklesIcon', title: 'Contoh hasil karya', desc: 'Tiap proyek punya halaman sendiri: tantangan, hasil, dan tautan.' },
  { icon: 'MagnifyingGlassIcon', title: 'Mudah ditemukan di Google', desc: 'Judul tiap halaman sudah diatur, jadi mudah dicari.' },
  { icon: 'PaintBrushIcon', title: 'Terang & gelap', desc: 'Dua tampilan yang sama-sama nyaman dibaca.' },
  { icon: 'BoltIcon', title: 'Isi yang jujur', desc: 'Tanpa testimoni atau angka karangan. Yang tampil karyamu sendiri.' },
  { icon: 'ChatBubbleLeftRightIcon', title: 'Dibantu sampai online', desc: 'Dari isi konten sampai domain aktif, lewat WhatsApp.' },
];

export const process = [
  { step: '01', title: 'Pilih Contoh', desc: 'Buka demo dan pilih gaya yang cocok.' },
  { step: '02', title: 'Chat WhatsApp', desc: 'Klik "Pesan" dan ceritakan karyamu.' },
  { step: '03', title: 'Isi & Sesuaikan', desc: 'Kirim proyek, foto, dan teks. Kami isikan.' },
  { step: '04', title: 'Website Online', desc: 'Situs tayang di domainmu, siap dibagikan.' },
];

export const faqs = [
  { q: 'Apa itu website portofolio?', a: 'Halaman online untuk memamerkan karya dan proyekmu, supaya calon klien mudah menemukan dan menghubungimu.' },
  { q: 'Apakah proyek di contoh itu nyata?', a: 'Bukan. Semuanya fiktif. Saat dipesan, kami ganti dengan karya, foto, dan kontakmu.' },
  { q: 'Berapa biaya dan lama pengerjaannya?', a: `${PAKET.mulai}–${PAKET.sampai}, dikerjakan ${PAKET.waktu} setelah materi lengkap.` },
  { q: 'Bisa disesuaikan?', a: 'Bisa. Warna, teks, foto, dan jumlah proyek bisa diubah.' },
  { q: 'Bagaimana cara memesan?', a: 'Pilih contoh, klik "Pesan contoh ini", lalu lanjut lewat WhatsApp.' },
];

export default templates;
