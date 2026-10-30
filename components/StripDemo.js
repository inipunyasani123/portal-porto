'use client';
import templates from '@/app/data/templates';

/** Strip demo yang bisa digeser (scroll-snap) di bawah tombol utama hero, hanya ponsel. Menaut ke #slug kartu. */
export default function StripDemo() {
  return (
    <ul aria-label="Demo portofolio, geser ke samping" className="-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:hidden">
      {templates.map((t) => (
        <li key={t.id} className="w-[104px] shrink-0 snap-start">
          <a
            href={`#${t.id}`}
            onClick={() => window.dispatchEvent(new CustomEvent('porto:lompat', { detail: t.id }))}
            className="block text-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.potret} alt="" width={390} height={844} loading="eager" className="aspect-[390/844] w-full rounded-xl border border-gray-200 bg-white object-cover object-top shadow-md dark:border-white/15" />
            <span className="mt-1.5 block text-xs font-semibold text-gray-800 dark:text-gray-100">{t.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
