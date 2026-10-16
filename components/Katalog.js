'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import { MagnifyingGlassIcon, XMarkIcon, ArrowTopRightOnSquareIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import TemplateCard from '@/components/TemplateCard';
import templates, { categories, site, waTemplate } from '@/app/data/templates';

/** Ubah daftar dengan View Transition bila peramban mendukung dan pengguna tidak meminta gerak minimal. */
function halus(fn) {
  const diam = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || diam) return fn();
  document.startViewTransition(() => flushSync(fn));
}

export default function Katalog() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('Semua');
  const [sort, setSort] = useState('featured');
  const [aktif, setAktif] = useState(null);
  const dialog = useRef(null);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let r = templates.filter((t) => (cat === 'Semua' || t.category === cat) && (!q || [t.title, t.tagline, t.category, ...t.tags].join(' ').toLowerCase().includes(q)));
    if (sort === 'az') r = [...r].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'laris') r = [...r].sort((a, b) => b.terjual - a.terjual);
    return r;
  }, [query, cat, sort]);

  // <dialog> bawaan: fokus terkunci di dalam, Esc menutup, fokus kembali ke tombol pemicu
  useEffect(() => { if (aktif && !dialog.current.open) dialog.current.showModal(); }, [aktif]);

  return (
    <>
      <div className="relative mx-auto mt-8 max-w-md">
        <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari template atau gaya…"
          aria-label="Cari template"
          className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 text-base shadow-sm outline-none transition placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 sm:text-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-500/30"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 dark:border-white/10">
        {/* Ponsel: satu baris chip yang bisa digeser (tidak menggeser halaman) */}
        <div role="group" aria-label="Saring menurut kategori" className="-mx-4 flex w-[calc(100%+2rem)] gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => halus(() => setCat(c))}
              aria-pressed={cat === c}
              className={`min-h-9 shrink-0 rounded-full px-4 text-sm font-medium transition ${cat === c ? 'bg-indigo-600 text-white' : 'border border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-700 dark:border-white/15 dark:text-gray-300 dark:hover:text-white'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          Urutkan:
          <select value={sort} onChange={(e) => halus(() => setSort(e.target.value))} className="min-h-9 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-800 outline-none focus:border-indigo-500 dark:border-white/15 dark:bg-[#12121c] dark:text-gray-200">
            <option value="featured">Pilihan</option>
            <option value="laris">Terlaris</option>
            <option value="az">Nama A–Z</option>
          </select>
        </label>
      </div>
      <p className="sr-only" aria-live="polite">{list.length} template ditampilkan</p>

      <ul className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 sm:gap-8 sm:py-10 lg:grid-cols-3 lg:[&>li:first-child]:col-span-2">
        {list.map((t) => (
          <li key={t.id} style={{ viewTransitionName: `porto-${t.id}` }}>
            <TemplateCard template={t} onDetail={setAktif} />
          </li>
        ))}
        {/* Petak penutup: gaya yang belum ada di koleksi */}
        <li className="flex flex-col justify-between gap-5 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/60 p-6 dark:border-indigo-400/30 dark:bg-indigo-500/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">Template ke-{templates.length + 1}</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">Belum ada gaya yang pas?</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Ceritakan karyamu dan referensi yang kamu suka. Kami susun portofolio dengan gaya sendiri.</p>
          </div>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 self-start rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700">
            <ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" /> Diskusikan via WhatsApp
          </a>
        </li>
      </ul>
      {list.length === 0 && <p className="pb-10 text-center text-gray-600 dark:text-gray-400">Tidak ada template yang cocok. Coba kata kunci lain.</p>}

      <dialog
        ref={dialog}
        aria-labelledby="judul-detail"
        onClose={() => setAktif(null)}
        onClick={(e) => { if (e.target === dialog.current) dialog.current.close(); }}
        className="detail max-h-[90vh] w-[min(42rem,calc(100%-2rem))] overflow-y-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-gray-900/70 backdrop:backdrop-blur-sm dark:bg-[#12121c] dark:ring-1 dark:ring-white/10"
      >
        {aktif && (
          <div>
            <div className="relative aspect-[16/10] w-full bg-gray-100 dark:bg-white/5">
              <Image src={aktif.image} alt={`Beranda template ${aktif.title}`} fill sizes="(max-width: 700px) 92vw, 672px" className="object-cover object-top" />
              <button type="button" onClick={() => dialog.current.close()} aria-label="Tutup detail" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-gray-800 shadow hover:text-gray-950">
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{aktif.category}{aktif.terjual > 0 && ` · ${aktif.terjual} terjual`}</p>
              <h2 id="judul-detail" className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{aktif.title}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{aktif.desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Halaman</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {aktif.pages.map((pg) => <li key={pg} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">{pg}</li>)}
              </ul>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Dibangun dengan</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {aktif.stack.map((s) => <li key={s} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300">{s}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={aktif.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  Buka demo<span className="sr-only"> {aktif.title} (tab baru)</span> <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={waTemplate(aktif)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-gray-300 px-6 text-sm font-semibold text-gray-800 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-white/15 dark:text-gray-200 dark:hover:text-white">
                  Pesan template ini
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
