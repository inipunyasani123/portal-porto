import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import templates, { site } from './data/templates';
import { LANJUT, BACA_JUGA, GALERI_LAIN, PINTUWEB, WA_DISPLAY } from './data/pintuweb';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import GaleriLain from '@/components/GaleriLain';
import AksiBawah from '@/components/AksiBawah';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700'], display: 'swap' });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah template dihitung dari data, bukan ditulis tangan.
const URL_PORTAL = 'https://www.pintuweb.id/website-portofolio';
const TITLE = `Contoh Website Portofolio: ${templates.length} Demo Siap Coba | PintuWeb`;
const DESCRIPTION = `${templates.length} contoh website portofolio untuk desainer, developer, dan kreator. Buka demo-nya, lalu pesan di PintuWeb.`;

// CollectionPage + daftar templatenya (ItemList) + jejak. Data dari templates.js, jadi ikut bertambah sendiri.
const __jsonld = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: URL_PORTAL,
  inLanguage: "id-ID",
  isPartOf: { "@type": "WebSite", name: "PintuWeb", url: "https://www.pintuweb.id" },
  publisher: { "@type": "Organization", name: "PintuWeb", url: "https://www.pintuweb.id" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: templates.length,
    itemListElement: templates.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: `${t.title} — ${t.tagline}`, url: t.url })),
  },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "PintuWeb", item: "https://www.pintuweb.id" }, { "@type": "ListItem", position: 2, name: "Website Portofolio", item: URL_PORTAL }] },
};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: "PintuWeb",
  keywords: ["template portfolio", "portfolio personal", "koleksi portfolio", "website portfolio"],
  authors: [{ name: "PintuWeb", url: "https://www.pintuweb.id" }],
  creator: "PintuWeb",
  publisher: "PintuWeb",
  alternates: { canonical: URL_PORTAL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: URL_PORTAL,
    siteName: "PintuWeb",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const navLinks = [
  { label: 'Contoh', href: '#templates' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'FAQ', href: '#faq' },
];

function Logo() {
  return (
    <>
      {/* Logo pintu asli PintuWeb (367x512), diberi alas putih di mode gelap */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/website-portofolio/logo-pintuweb.png" alt="" width={367} height={512} className="h-[30px] w-auto shrink-0 rounded-md dark:bg-white dark:px-1 dark:py-0.5" />
      <span className="flex flex-col leading-none">
        {site.name}{' '}
        <span className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.1em] sm:text-[10px] sm:tracking-[0.18em] text-indigo-700 dark:text-indigo-300">{site.label}</span>
      </span>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] bg-gray-50 font-sans text-gray-900 antialiased transition-colors dark:bg-[#0a0a12] dark:text-gray-100 md:pb-0">
        <ThemeProvider>
          <a href="#konten" className="lewati">Lewati ke konten</a>
          {/* Jejak + menu Galeri lain */}
          <GaleriLain />
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a12]/85">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
              <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
                <Logo />
              </a>
              <nav aria-label="Navigasi halaman" className="hidden items-center gap-7 md:flex">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 transition hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-300">{l.label}</a>
                ))}
              </nav>
              <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
                <ThemeToggle />
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1 rounded-full bg-indigo-600 px-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:px-5">
                  Pesan <span className="sm:hidden">portofolio</span><span className="hidden sm:inline">website portofolio</span>
                </a>
              </div>
            </div>
          </header>

          {children}

          <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-[#0a0a12]">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
                <div className="col-span-2 md:col-span-1">
                  <p className="flex items-center gap-2 font-display text-lg font-bold"><Logo /></p>
                  <p className="mt-3 max-w-xs text-sm text-gray-600 dark:text-gray-400">{templates.length} contoh website portofolio, siap diisi karyamu.</p>
                </div>
                <nav aria-labelledby="kaki-navigasi">
                  <p id="kaki-navigasi" className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Navigasi</p>
                  <ul className="mt-3 space-y-1">
                    {navLinks.map((l) => (
                      <li key={l.href}><a href={l.href} className="inline-block py-1 text-sm text-gray-700 transition hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-300">{l.label}</a></li>
                    ))}
                  </ul>
                </nav>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Kontak</p>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-10 items-center rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    Chat via WhatsApp
                  </a>
                  <p className="mt-2 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{WA_DISPLAY}</p>
                </div>
              </div>
              {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
              <nav aria-labelledby="lanjut-pintuweb" className="mt-10 border-t border-gray-100 pt-8 dark:border-white/10">
                <p id="lanjut-pintuweb" className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Lanjut di PintuWeb</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {LANJUT.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200 dark:hover:bg-indigo-500 dark:hover:text-white">
                        {l.label} <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Baca juga</p>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                  {BACA_JUGA.map((l) => (
                    <li key={l.href}><a href={l.href} className="inline-block py-1 text-sm font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 dark:text-indigo-300">{l.label}</a></li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Galeri lain</p>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                  {GALERI_LAIN.map((g) => (
                    <li key={g.path}>
                      <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 transition hover:text-indigo-700 dark:text-gray-300 dark:decoration-white/20 dark:hover:text-indigo-300">{g.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="mt-8 border-t border-gray-100 pt-6 text-sm text-gray-600 sm:text-center dark:border-white/10 dark:text-gray-400">
                © {new Date().getFullYear()} <a href={PINTUWEB} className="underline-offset-4 hover:underline">PintuWeb</a> · Galeri {site.label}.
              </p>
            </div>
          </footer>
        <AksiBawah wa={site.whatsapp} />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
      </body>
    </html>
  );
}
