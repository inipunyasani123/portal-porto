'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { GALERI_LAIN, PINTUWEB } from '@/app/data/pintuweb';

/** Bilah jejak: "PintuWeb / Portofolio Pribadi" + menu "Galeri lain" (popover: Esc menutup, klik luar menutup, fokus kembali ke tombol). */
export default function GaleriLain() {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const kotak = useRef(null);

  useEffect(() => {
    if (!buka) return undefined;
    const klikLuar = (e) => { if (!kotak.current?.contains(e.target)) setBuka(false); };
    const tekan = (e) => { if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); } };
    document.addEventListener('pointerdown', klikLuar);
    document.addEventListener('keydown', tekan);
    return () => { document.removeEventListener('pointerdown', klikLuar); document.removeEventListener('keydown', tekan); };
  }, [buka]);

  return (
    <nav id="top" aria-label="Jejak" className="bg-gray-900 text-xs text-gray-100">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1 sm:px-6 lg:px-8">
        <a href={PINTUWEB} className="inline-flex min-h-8 items-center font-semibold underline-offset-4 hover:underline">PintuWeb</a>
        <span aria-hidden="true" className="opacity-60">/</span>
        <span aria-current="page">Portofolio Pribadi</span>
        <div ref={kotak} className="relative ms-auto">
          <button
            ref={tombol}
            type="button"
            aria-expanded={buka}
            aria-controls="daftar-galeri"
            onClick={() => setBuka((b) => !b)}
            className="inline-flex min-h-8 items-center gap-1 rounded-full border border-white/25 px-3 font-semibold transition hover:bg-white/10"
          >
            Galeri lain <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${buka ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {buka && (
            <ul id="daftar-galeri" className="absolute end-0 top-full z-50 mt-1 w-60 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 text-sm text-gray-800 shadow-2xl dark:border-white/15 dark:bg-[#12121c] dark:text-gray-100">
              {GALERI_LAIN.map((g) => (
                <li key={g.path}>
                  <a href={`${PINTUWEB}/${g.path}`} className="flex min-h-11 items-center px-4 font-medium transition hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-white/10 dark:hover:text-white">{g.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
