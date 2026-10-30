import Image from 'next/image';
import {
  MagnifyingGlassIcon, ChevronDownIcon, DevicePhoneMobileIcon, BoltIcon, SparklesIcon, PaintBrushIcon, ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import Katalog from '@/components/Katalog';
import StripDemo from '@/components/StripDemo';
import templates, { site, stats, features, process, faqs } from './data/templates';
import { PAKET } from './data/pintuweb';

const ICONS = { DevicePhoneMobileIcon, BoltIcon, SparklesIcon, MagnifyingGlassIcon, PaintBrushIcon, ChatBubbleLeftRightIcon };

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

// Tiga cuplikan hero: ponsel berjajar tiga, layar lebar jadi bento.
const CUPLIK = [
  { src: '/website-portofolio/templates/p5.webp', alt: 'Cuplikan template Rex', kotak: 'sm:row-span-2', rasio: 'aspect-[4/5] sm:aspect-auto sm:h-full sm:min-h-[260px]', jeda: '', posisi: 'object-left-top' },
  { src: '/website-portofolio/templates/p4.webp', alt: 'Cuplikan template Aria', kotak: '', rasio: 'aspect-[4/5] sm:aspect-[16/11]', jeda: '[animation-delay:0.6s]', posisi: 'object-left-top sm:object-top' },
  { src: '/website-portofolio/templates/p7.webp', alt: 'Cuplikan template Milo', kotak: '', rasio: 'aspect-[4/5] sm:aspect-[16/11]', jeda: '[animation-delay:1.2s]', posisi: 'object-left-top sm:object-top' },
];

export default function HomePage() {
  return (
    <main id="konten" tabIndex={-1}>
      {/* Hero — bento */}
      <section id="hero" className="mesh relative overflow-hidden px-4 pb-6 pt-6 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8">
        <div className="absolute left-1/2 top-[-120px] -z-10 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-600/20" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="min-w-0 text-center lg:text-left">
            <span className="naik hidden items-center gap-2 sm:inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-200">
              <span aria-hidden="true" className="text-indigo-500 dark:text-indigo-300">◆</span> {templates.length} template · {templates.length} gaya
            </span>
            <h1 className="text-[2rem] sm:mt-5 sm:text-[2.5rem] font-extrabold leading-[1.04] tracking-tight text-gray-900 md:text-6xl dark:text-white">
              Website portofolio, <span className="text-indigo-600 dark:text-indigo-400">siap diisi karyamu</span>.
            </h1>
            <p className="mx-auto mt-5 hidden max-w-xl text-base sm:block text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">{site.description}</p>
            <div className="naik naik-2 mt-4 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start">
              <a href="#templates" className="inline-flex min-h-12 items-center rounded-full bg-indigo-600 px-6 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-95 sm:px-7">Lihat Template</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-gray-300 bg-white px-6 font-semibold text-gray-800 transition hover:border-indigo-300 hover:text-indigo-700 active:scale-95 sm:px-7 dark:border-white/15 dark:bg-white/5 dark:text-gray-200 dark:hover:text-white">Konsultasi Gratis</a>
            </div>
            {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
            <p className="mt-3 text-sm text-gray-700 sm:mt-5 dark:text-gray-300">
              Paket Portofolio mulai <strong className="font-semibold text-indigo-700 dark:text-indigo-300">{PAKET.mulai}</strong> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1.5 text-indigo-400">◆</span>{PAKET.waktu}</span>
            </p>
            <StripDemo />
          </div>

          <div className="hidden grid-cols-3 gap-2.5 sm:grid sm:grid-cols-2 sm:gap-4">
            {CUPLIK.map((c) => (
              <div key={c.src} className={`animate-float overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl sm:rounded-2xl dark:border-white/10 dark:bg-white/5 ${c.kotak} ${c.jeda}`}>
                <div className={`relative w-full ${c.rasio}`}>
                  <Image src={c.src} alt={c.alt} fill sizes="(max-width: 639px) 31vw, (max-width: 1023px) 46vw, 300px" className={`object-cover ${c.posisi}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech marquee: dekorasi */}
      <div className="marquee overflow-hidden border-y border-gray-100 bg-white py-3.5 dark:border-white/10 dark:bg-[#0c0c16]" aria-hidden="true">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((r) => (
            <div key={r} className="flex shrink-0 items-center">
              {['Next.js', 'Tailwind CSS', 'Terang & gelap', 'Responsif', 'SEO dasar', 'Studi kasus', 'Multi-halaman'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-6 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">{t}</span>
                  <span className="text-indigo-300 dark:text-indigo-500/60">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Angka koleksi */}
      <section aria-label="Angka koleksi" className="px-4 pb-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-5 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm md:grid-cols-4 md:p-8 dark:border-white/10 dark:bg-white/5">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse text-center">
              <dt className="mt-1 text-sm text-gray-600 dark:text-gray-400">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-indigo-600 md:text-4xl dark:text-indigo-400">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Katalog */}
      <section id="templates" aria-labelledby="judul-koleksi" className="scroll-mt-[72px] px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 id="judul-koleksi" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Koleksi Template</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">Buka demo live, intip studi kasusnya, lalu pesan. Di desktop, arahkan kursor ke kartu untuk menggulir halaman penuhnya.</p>
          </div>
          <Katalog />
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" aria-labelledby="judul-keunggulan" className="scroll-mt-[72px] bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="sm:text-center">
            <h2 id="judul-keunggulan" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Kenapa pilih {site.name}?</h2>
            <p className="mt-3 max-w-xl text-gray-600 sm:mx-auto dark:text-gray-400">Yang sudah dikerjakan di setiap template sebelum sampai ke tanganmu.</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <li key={f.title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition sm:block sm:p-6 sm:hover:-translate-y-1 sm:hover:border-indigo-200 sm:hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:sm:hover:border-indigo-500/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 sm:h-12 sm:w-12 dark:bg-indigo-500/15 dark:text-indigo-300">{Icon && <Icon className="h-6 w-6" aria-hidden="true" />}</span>
                  <div className="sm:mt-4">
                    <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Cara Pesan */}
      <section id="cara-pesan" aria-labelledby="judul-cara" className="scroll-mt-[72px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:text-center">
            <h2 id="judul-cara" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Cara Pesan</h2>
            <p className="mt-3 max-w-xl text-gray-600 sm:mx-auto dark:text-gray-400">Empat langkah dari memilih template sampai situsmu online.</p>
          </div>
          <ol className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 md:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="relative flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:block sm:p-6 dark:border-white/10 dark:bg-white/5">
                <span className="w-11 shrink-0 font-display text-3xl font-extrabold text-indigo-600 sm:w-auto sm:text-4xl dark:text-indigo-400">{p.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 sm:mt-2 sm:text-lg dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ: <details> bawaan, satu terbuka sekaligus */}
      <section id="faq" aria-labelledby="judul-faq" className="scroll-mt-[72px] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="sm:text-center">
            <h2 id="judul-faq" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Pertanyaan Umum</h2>
            <p className="mt-3 max-w-xl text-gray-600 sm:mx-auto dark:text-gray-400">Hal-hal yang sering ditanyakan sebelum memesan.</p>
          </div>
          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((f, i) => (
              <details key={f.q} name="faq-porto" open={i === 0} className="tanya group overflow-hidden rounded-2xl border border-gray-200 bg-white open:border-indigo-200 dark:border-white/10 dark:bg-white/5 dark:open:border-indigo-500/40">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 sm:px-6 dark:text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-indigo-600 transition-transform group-open:rotate-180 dark:text-indigo-400" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 sm:px-6 dark:text-gray-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 p-8 text-center text-white shadow-xl sm:p-10">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">Karyamu sudah siap. Tinggal rumahnya.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Pilih template favoritmu, kirim proyek dan fotomu — kami ganti isi contohnya dengan milikmu dalam {PAKET.waktu}.
          </p>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 font-semibold text-indigo-700 shadow-md transition hover:bg-indigo-100">
            <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" /> Chat via WhatsApp
          </a>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </main>
  );
}
