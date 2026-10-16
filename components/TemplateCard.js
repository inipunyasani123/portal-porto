import { getImageProps } from 'next/image';
import { ArrowTopRightOnSquareIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

/**
 * Kartu template berbingkai peramban. Pratinjau: di layar bersentuhan / ponsel memakai gambar 16:11 (varian kecil),
 * di desktop ber-hover memakai tangkapan halaman penuh yang bergulir pelan saat kursor di atas kartu.
 */
export default function TemplateCard({ template, onDetail }) {
  const { title, tagline, image, url, category, tags, terjual } = template;
  const full = image.replace(/p(\d)\.(png|webp)$/, 'f$1.webp');
  const { props: pratinjau } = getImageProps({ src: image, alt: '', width: 2560, height: 1760, sizes: '(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 400px' });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
      {/* Bingkai peramban */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5 dark:border-white/10 dark:bg-white/5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[11px] text-gray-500 ring-1 ring-gray-100 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10">
          {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      </div>

      {/* Pratinjau: tombol membuka detail; label & petunjuk di luar tombol supaya nama tombolnya bersih */}
      <div className="relative h-48 overflow-hidden bg-gray-100 sm:h-60 dark:bg-white/5">
        <button type="button" onClick={() => onDetail(template)} className="absolute inset-0 block w-full text-left" aria-label={`Lihat detail ${title}`}>
          <picture>
            <source media="(hover: hover) and (min-width: 640px)" srcSet={full} />
            <img {...pratinjau} alt="" className="absolute inset-x-0 top-0 h-auto w-full will-change-transform transition-transform duration-[4500ms] ease-linear motion-safe:group-hover:-translate-y-[calc(100%-15rem)]" />
          </picture>
        </button>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur dark:bg-black/60 dark:text-indigo-200" aria-hidden="true">{category}</span>
        <span className="sentuh-sembunyi pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-900/75 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100" aria-hidden="true">
          ↕ Kursor di sini = gulir halaman penuh
        </span>
      </div>

      {/* Isi */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {terjual > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">
              <ShoppingBagIcon className="h-3.5 w-3.5" aria-hidden="true" /> {terjual} terjual
            </span>
          )}
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">{t}</span>
          ))}
        </div>
        <div className="mt-auto flex gap-2 pt-4">
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
            Buka demo<span className="sr-only"> {title} (tab baru)</span> <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button type="button" onClick={() => onDetail(template)} className="min-h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-white/15 dark:text-gray-200 dark:hover:text-white">
            Detail<span className="sr-only"> {title}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
