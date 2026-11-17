
export type BlogPost = {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: number
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    title:
      "Manfaat Video Animasi 2D dan 3D untuk Promosi, Pendidikan, dan Bisnis",
    excerpt:
      "Pelajari manfaat video animasi 2D dan 3D untuk promosi, pendidikan, dan bisnis. Kenali perbedaan, proses produksi, contoh penerapan, serta solusi animasi dari HINAI Tech.",
    image: "/artikel/manfaat-video-animasi-2d-3d.jpg",
    category: "Animation, AR/VR & IoT",
    date: "2026-11-03",
    readTime: 15,
    slug: "manfaat-video-animasi-2d-3d-promosi-pendidikan-bisnis",
  },

  {
    title:
      "Mengenal Artificial Intelligence, Machine Learning, dan Deep Learning serta Penerapannya dalam Dunia Bisnis",
    excerpt:
      "Pelajari pengertian Artificial Intelligence, Machine Learning, dan Deep Learning, perbedaan, cara kerja, contoh penerapan, manfaat, serta implementasinya untuk bisnis modern.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&fm=jpg&q=85&w=1200",
    category: "Artificial Intelligence",
    date: "2026-11-02",
    readTime: 15,
    slug:
      "mengenal-artificial-intelligence-machine-learning-deep-learning",
  },

  {
    title:
      "Aplikasi Web, Mobile, dan Desktop: Apa Perbedaan dan Keunggulannya?",
    excerpt:
      "Kenali perbedaan aplikasi web, mobile, dan desktop dari cara kerja, kelebihan, kekurangan, teknologi, biaya pengembangan, hingga cara memilih solusi yang tepat untuk bisnis.",
    image: "/artikel/aplikasi-web-mobile-desktop.jpg",
    category: "Teknologi",
    date: "2026-11-01",
    readTime: 18,
    slug:
      "aplikasi-web-mobile-dan-desktop-perbedaan-keunggulan",
  },

  {
    title: "Berapa Biaya Pembuatan Website? Faktor yang Memengaruhi Harga",
    excerpt:
      "Biaya pembuatan website bervariasi tergantung jenis, fitur, desain, dan kompleksitasnya. Temukan faktor-faktor yang memengaruhi harga website.",
    image: "/artikel/why-choose-us.png",
    category: "Website Development",
    date: "2026-10-31",
    readTime: 9,
    slug: "berapa-biaya-pembuatan-website-faktor-yang-memengaruhi-harga",     
  },
  {
    title: "Mengapa Bisnis Membutuhkan Website Profesional di Era Digital?",
    excerpt:
      "Website profesional adalah fondasi penting untuk membangun kehadiran digital bisnis, meningkatkan kredibilitas, dan memperluas jangkauan pasar.",
    image: "/artikel/butuh-website.jpg",
    category: "Website Development",
    date: "2026-10-30",
    readTime: 8,
    slug: "mengapa-bisnis-butuh-website-profesional",
  },
  {
    title: "Website vs Landing Page: Perbedaan, Fungsi, dan Kegunaannya",
    excerpt:
      "Masih bingung memilih website atau landing page untuk bisnis? Kenali perbedaan, fungsi, kelebihan, kekurangan, biaya, serta kapan bisnis membutuhkan keduanya.",
    image: "/artikel/landing-web.jpg",
    category: "Website & Landing Page",
    date: "2026-10-29",
    readTime: 12,
    slug: "website-vs-landing-page",
  },

  {
    title: "Jasa Pembuatan Website Bandar Lampung",
    excerpt:
      "Solusi jasa pembuatan website profesional untuk bisnis, UMKM, perusahaan, dan institusi pendidikan di Bandar Lampung.",
    image: "/jasaweb_mufid-t.png",
    category: "Website Development",
    date: "2026-06-15",
    readTime: 7,
    slug: "jasa-pembuatan-website-bandar-lampung",
  },
  {
    title: "Apa Itu Website? Pengertian, Fungsi, Jenis, dan Manfaatnya untuk Bisnis",
    excerpt:
      "Pelajari pengertian website, fungsi, jenis, dan manfaatnya sebagai sarana informasi, branding, dan pengembangan bisnis digital.",
    image: "/artikel/apa-itu-website.jpg",
    category: "Website Development",
    date: "2026-10-28",
    readTime: 7,
    slug: "apa-itu-website",
  },
  {
    title: "Apa Itu Landing Page dan Mengapa Bisnis Anda Membutuhkannya?",
    excerpt:
      "Landing page adalah halaman fokus untuk meningkatkan konversi iklan digital seperti Meta Ads dan Google Ads secara maksimal.",
    image: "/Jasa Landing Page/1.png",
    category: "Marketing",
    date: "2026-06-15",
    readTime: 5,
    slug: "apa-itu-landing-page-dan-mengapa-bisnis-anda-membutuhkannya",
  },
  {
    title: "Cara Website Muncul di Halaman Pertama Google",
    excerpt:
      "Panduan SEO modern untuk meningkatkan ranking website secara organik dan stabil di Google dengan strategi white-hat SEO terbaru 2026.",
    image: "/artikel/seo-ebook.png",
    category: "SEO",
    date: "2026-01-10",
    readTime: 6,
    slug: "cara-website-muncul-di-halaman-pertama-google",
  },
  {
    title: "AI Automation untuk Bisnis Kecil",
    excerpt:
      "Pemanfaatan AI untuk UMKM dalam meningkatkan efisiensi operasional, menghemat biaya, dan meningkatkan konversi penjualan secara otomatis.",
    image: "/artikel/ai-services.png",
    category: "AI",
    date: "2026-01-08",
    readTime: 7,
    slug: "ai-automation-untuk-bisnis-kecil",
  },
  {
    title: "Cara Melindungi Website dari Hacker",
    excerpt:
      "Panduan lengkap keamanan website modern untuk melindungi bisnis dari serangan siber, malware, dan kebocoran data sensitif perusahaan.",
    image: "/artikel/hacker.png",
    category: "Security",
    date: "2026-01-05",
    readTime: 5,
    slug: "cara-melindungi-website-dari-hacker",
  },
]

// Urutkan artikel dari tanggal terbaru
export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
)
