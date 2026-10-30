'use client';
import { useEffect, useState } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

/** Bilah aksi lengket khusus ponsel (< 768 px): muncul setelah hero lewat, hilang saat footer terlihat. */
export default function AksiBawah({ wa }) {
  const [heroLewat, setHeroLewat] = useState(false);
  const [footerTampak, setFooterTampak] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const footer = document.querySelector('footer');
    if (!hero || !footer) return undefined;
    const a = new IntersectionObserver(([e]) => setHeroLewat(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    const b = new IntersectionObserver(([e]) => setFooterTampak(e.isIntersecting), { threshold: 0 });
    a.observe(hero); b.observe(footer);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);

  const tampak = heroLewat && !footerTampak;
  return (
    <div
      inert={!tampak}
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gray-200 bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgba(15,15,40,0.25)] backdrop-blur transition-transform duration-300 md:hidden dark:border-white/10 dark:bg-[#0a0a12]/95 ${tampak ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a href="#templates" className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-800 dark:border-white/20 dark:bg-white/5 dark:text-gray-100">Lihat demo</a>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-indigo-600 text-sm font-semibold text-white">
        <ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" /> Pesan via WhatsApp
      </a>
    </div>
  );
}
