/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/website-portofolio: PintuWeb meneruskan path /website-portofolio
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-portofolio',
  // Gambar statis + varian siap pakai (lihat app/gambar-loader.js): tidak memakai kuota Image Optimization Vercel.
  images: { loader: 'custom', loaderFile: './app/gambar-loader.js', deviceSizes: [320, 480, 640, 800, 960, 1280, 1600, 2560], imageSizes: [160, 240] },
  async redirects() {
    // Alamat lama portal-porto.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/website-portofolio', basePath: false, permanent: true },
      { source: '/:lama((?!website-portofolio(?:/|$)).+)', destination: 'https://www.pintuweb.id/website-portofolio', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
