
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { LanguageProvider } from "@/components/language-provider";

const articleUrl = "https://hinaitech.com/blog/website-vs-landing-page";

const articleTitle =
  "Website vs Landing Page: Perbedaan, Fungsi, dan Kegunaannya";

const articleDescription =
  "Pelajari perbedaan website dan landing page dari fungsi, struktur, kelebihan, kekurangan, SEO, biaya, hingga cara memilih solusi digital yang tepat untuk bisnis.";

const articleImage = "/Jasa%20Landing%20Page/1.png";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "website vs landing page",
    "perbedaan website dan landing page",
    "fungsi website",
    "fungsi landing page",
    "manfaat website untuk bisnis",
    "manfaat landing page untuk bisnis",
    "jasa pembuatan website",
    "jasa landing page",
    "website bisnis",
    "landing page bisnis",
    "pembuatan website Bandar Lampung",
    "jasa website HINAI Tech",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "HINAI Tech",
    locale: "id_ID",
    type: "article",
    publishedTime: "2026-11-15T08:00:00+07:00",
    images: [
      {
        url: articleImage,
        width: 1200,
        height: 630,
        alt: "Ilustrasi website dan landing page untuk bisnis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: [articleImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  { id: "pengertian-website", number: "01", title: "Apa Itu Website?" },
  { id: "pengertian-landing-page", number: "02", title: "Apa Itu Landing Page?" },
  { id: "perbedaan", number: "03", title: "Perbedaan Website dan Landing Page" },
  { id: "kelebihan-website", number: "04", title: "Kelebihan dan Kekurangan Website" },
  { id: "kelebihan-landing", number: "05", title: "Kelebihan dan Kekurangan Landing Page" },
  { id: "contoh-penggunaan", number: "06", title: "Contoh Penggunaan" },
  { id: "seo", number: "07", title: "Website vs Landing Page untuk SEO" },
  { id: "memilih", number: "08", title: "Mana yang Harus Dipilih?" },
  { id: "biaya", number: "09", title: "Faktor Biaya Pembuatan" },
  { id: "proses", number: "10", title: "Tahapan Pembuatan" },
  { id: "mobile-friendly", number: "11", title: "Pentingnya Mobile-Friendly" },
  { id: "kesalahan", number: "12", title: "Kesalahan yang Sering Terjadi" },
  { id: "hinai-tech", number: "13", title: "Solusi dari HINAI Tech" },
  { id: "faq", number: "14", title: "Pertanyaan Umum (FAQ)" },
  { id: "kesimpulan", number: "15", title: "Kesimpulan" },
];

const comparisonRows = [
  {
    aspect: "Tujuan utama",
    website: "Membangun identitas digital dan menyediakan informasi bisnis secara menyeluruh.",
    landing: "Mengarahkan pengunjung untuk melakukan satu tindakan tertentu.",
  },
  {
    aspect: "Struktur",
    website: "Terdiri dari beberapa halaman yang saling terhubung.",
    landing: "Biasanya satu halaman panjang dengan beberapa bagian konten.",
  },
  {
    aspect: "Navigasi",
    website: "Memiliki menu dan navigasi ke berbagai halaman.",
    landing: "Navigasi dibuat minimal agar pengunjung fokus pada penawaran.",
  },
  {
    aspect: "Konten",
    website: "Profil, layanan, produk, portofolio, artikel, dan kontak.",
    landing: "Informasi yang mendukung satu produk, layanan, atau kampanye.",
  },
  {
    aspect: "Call to Action",
    website: "Dapat memiliki beberapa CTA sesuai kebutuhan pengunjung.",
    landing: "Memiliki satu CTA utama yang lebih ditonjolkan.",
  },
  {
    aspect: "Sumber pengunjung",
    website: "Google, media sosial, kunjungan langsung, dan referral.",
    landing: "Iklan, kampanye, email, dan tautan promosi.",
  },
  {
    aspect: "SEO",
    website: "Dapat menargetkan beragam kata kunci melalui banyak halaman.",
    landing: "Dapat dioptimalkan untuk kata kunci dan kebutuhan spesifik.",
  },
  {
    aspect: "Penggunaan",
    website: "Informasi bisnis dan pengembangan digital jangka panjang.",
    landing: "Promosi, penawaran, dan pengumpulan prospek.",
  },
  {
    aspect: "Pengukuran",
    website: "Trafik, interaksi, halaman populer, dan permintaan layanan.",
    landing: "Klik CTA, pengisian formulir, pendaftaran, dan pembelian.",
  },
  {
    aspect: "Pengembangan",
    website: "Dapat diperluas menjadi portal atau aplikasi web.",
    landing: "Dapat dibuat untuk penawaran atau kampanye yang berbeda.",
  },
];

const faqs = [
  {
    question: "Apa perbedaan utama website dan landing page?",
    answer:
      "Website umumnya memiliki beberapa halaman yang saling terhubung dan digunakan untuk menyampaikan informasi bisnis secara menyeluruh. Landing page biasanya berupa satu halaman yang dirancang dengan fokus pada satu penawaran dan satu tindakan utama, seperti menghubungi bisnis, mendaftar, atau melakukan pembelian.",
  },
  {
    question: "Apakah landing page termasuk website?",
    answer:
      "Ya. Landing page merupakan halaman web. Landing page dapat berdiri sendiri menggunakan domain tertentu atau menjadi bagian dari website utama sebuah bisnis. Perbedaannya terletak pada tujuan, struktur, dan fokus komunikasinya.",
  },
  {
    question: "Mana yang lebih bagus untuk bisnis kecil?",
    answer:
      "Keduanya dapat digunakan. Landing page cocok jika bisnis memiliki satu produk atau penawaran utama dan ingin mendapatkan prospek. Website lebih sesuai jika bisnis membutuhkan profil perusahaan, katalog layanan, informasi lengkap, artikel, dan kehadiran digital jangka panjang.",
  },
  {
    question: "Apakah landing page bisa muncul di Google?",
    answer:
      "Bisa. Landing page dapat diindeks mesin pencari apabila dapat diakses, tidak diblokir oleh pengaturan robots, memiliki konten bermanfaat, dan memenuhi persyaratan teknis pengindeksan. Namun, cakupan topiknya biasanya lebih terbatas dibandingkan website dengan banyak halaman informatif.",
  },
  {
    question: "Apakah website bisa memiliki landing page?",
    answer:
      "Bisa. Sebuah website dapat memiliki beberapa landing page untuk layanan, produk, promosi, acara, atau kampanye yang berbeda. Strategi ini memungkinkan bisnis membangun identitas digital jangka panjang sekaligus menjalankan pemasaran yang lebih terarah.",
  },
  {
    question: "Apakah website selalu lebih mahal daripada landing page?",
    answer:
      "Tidak selalu. Website dengan banyak halaman dan fitur umumnya membutuhkan ruang lingkup pengerjaan lebih besar. Biaya dipengaruhi desain, jumlah halaman, fitur, integrasi, konten, keamanan, dan pemeliharaan.",
  },
  {
    question: "Bisakah saya membuat website dan landing page sekaligus?",
    answer:
      "Bisa. Banyak bisnis menggunakan website sebagai pusat informasi dan identitas digital, kemudian membuat landing page khusus untuk iklan, promosi, peluncuran produk, atau pengumpulan prospek.",
  },
  {
    question: "Apa yang perlu disiapkan sebelum membuat website?",
    answer:
      "Siapkan informasi bisnis, target audiens, tujuan pembuatan, daftar produk atau layanan, keunggulan, materi foto atau ilustrasi, kontak, referensi desain, serta perkiraan anggaran. Untuk landing page, tentukan juga satu tindakan utama yang diharapkan dari pengunjung.",
  },
];

function SectionTitle({
  number,
  children,
  id,
}: {
  number: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28 pt-12">
      <div className="mb-5 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-sm font-bold text-white shadow-lg shadow-blue-900/15">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-2 h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-200" />
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-amber-50 p-5 shadow-sm md:p-7">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-lg text-white">
          i
        </span>
        <div>
          <h3 className="mb-2 text-base font-extrabold text-slate-900">
            {title}
          </h3>
          <div className="text-sm leading-7 text-slate-700">{children}</div>
        </div>
      </div>
    </aside>
  );
}

function ArticleCard({
  title,
  children,
  accent = "blue",
}: {
  title: string;
  children: ReactNode;
  accent?: "blue" | "gold";
}) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg md:p-6">
      <div
        className={`mb-4 h-1.5 w-12 rounded-full ${
          accent === "gold"
            ? "bg-gradient-to-r from-amber-400 to-yellow-200"
            : "bg-gradient-to-r from-blue-700 to-cyan-400"
        }`}
      />
      <h3 className="mb-3 text-lg font-extrabold text-slate-900">{title}</h3>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 px-5 py-4 text-white">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            Quick Comparison
          </p>
          <h3 className="mt-1 text-lg font-extrabold">
            Website vs Landing Page
          </h3>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">
          10 aspek perbandingan
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="w-[19%] bg-slate-100 p-4 font-bold text-slate-700">
                Aspek
              </th>
              <th className="w-[40%] bg-blue-700 p-4 font-bold text-white">
                Website
              </th>
              <th className="w-[41%] bg-amber-500 p-4 font-bold text-slate-950">
                Landing Page
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, index) => (
              <tr
                key={row.aspect}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="border-t border-slate-200 p-4 align-top font-bold text-slate-800">
                  {row.aspect}
                </td>
                <td className="border-t border-blue-100 bg-blue-50/40 p-4 align-top leading-7 text-slate-700">
                  {row.website}
                </td>
                <td className="border-t border-amber-100 bg-amber-50/50 p-4 align-top leading-7 text-slate-700">
                  {row.landing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs leading-6 text-slate-500">
        Geser tabel ke samping untuk membaca seluruh kolom pada perangkat
        dengan layar kecil.
      </p>
    </div>
  );
}

export default function WebsiteVsLandingPageArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleTitle,
    description: articleDescription,
    image: [`https://hinaitech.com${articleImage}`],
    datePublished: "2026-11-15T08:00:00+07:00",
    dateModified: "2026-11-15T08:00:00+07:00",
    author: {
      "@type": "Organization",
      name: "HINAI Tech",
      url: "https://hinaitech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "HINAI Tech",
      url: "https://hinaitech.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: "id-ID",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#f7f9fc] text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Navigation />

        <article className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* BREADCRUMB */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
            >
              <Link href="/" className="transition hover:text-blue-700">
                Beranda
              </Link>
              <span>/</span>
              <Link href="/blog" className="transition hover:text-blue-700">
                Blog
              </Link>
              <span>/</span>
              <span className="font-semibold text-slate-800">
                Website vs Landing Page
              </span>
            </nav>

            {/* ARTICLE HEADER */}
            <header className="relative mb-9 overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:px-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-amber-100/60 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <span className="rounded-full bg-blue-100 px-3 py-2 text-blue-800">
                    Website & Digital Business
                  </span>
                  <span className="rounded-full bg-amber-100 px-3 py-2 text-amber-800">
                    Panduan Bisnis
                  </span>
                </div>

                <h1 className="mb-6 max-w-4xl text-3xl font-black leading-[1.16] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                  Website vs Landing Page:{" "}
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Perbedaan, Fungsi, dan Kegunaannya
                  </span>
                </h1>

                <p className="mb-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  Website atau landing page, mana yang sebenarnya dibutuhkan
                  bisnis Anda? Kenali perbedaan fungsi, struktur, kelebihan,
                  dan strategi penggunaannya sebelum menentukan solusi digital
                  yang tepat.
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-5 text-xs font-medium text-slate-500 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    HINAI Tech
                  </span>
                  <span>15 November 2026</span>
                  <span>± 12 menit membaca</span>
                </div>
              </div>
            </header>

            {/* HERO IMAGE */}
            <figure className="mb-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-[16/8] w-full bg-slate-100">
                <Image
                  src={articleImage}
                  alt="Ilustrasi layanan landing page dan website untuk kebutuhan bisnis"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-xs text-slate-500">
                <span>
                  Ilustrasi website dan landing page untuk pemasaran digital.
                </span>
                <span className="font-semibold text-blue-700">
                  HINAI Tech
                </span>
              </figcaption>
            </figure>

            {/* SUMMARY */}
            <section className="mb-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-950 to-blue-800 p-6 text-white shadow-lg shadow-blue-950/10 md:p-7">
                <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
                  Inti Pembahasan
                </span>
                <h2 className="mb-3 text-xl font-extrabold">
                  Dua solusi digital, dua tujuan berbeda.
                </h2>
                <p className="text-sm leading-7 text-blue-100">
                  Website berfungsi sebagai pusat informasi dan identitas
                  digital bisnis. Landing page berfokus pada satu penawaran
                  atau tindakan yang ingin dilakukan pengunjung. Keduanya
                  dapat digunakan secara bersamaan.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                <h2 className="mb-4 text-lg font-extrabold text-slate-900">
                  Dalam artikel ini
                </h2>
                <ul className="space-y-2.5 text-sm leading-6 text-slate-600">
                  <li>✓ Pengertian website dan landing page</li>
                  <li>✓ Tabel perbedaan dan fungsi</li>
                  <li>✓ Kelebihan serta kekurangan</li>
                  <li>✓ Strategi SEO dan pemasaran</li>
                  <li>✓ Biaya dan proses pengembangan</li>
                  <li>✓ Rekomendasi untuk bisnis</li>
                </ul>
              </div>
            </section>

            {/* TABLE OF CONTENTS */}
            <nav
              aria-label="Daftar isi artikel"
              className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    Explore Article
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-slate-950">
                    Daftar Isi
                  </h2>
                </div>
                <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                  15 Bagian
                </span>
              </div>
              <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 rounded-lg px-2 py-2 text-sm transition hover:bg-blue-50"
                  >
                    <span className="font-bold text-blue-600">
                      {section.number}
                    </span>
                    <span className="font-medium text-slate-600 group-hover:text-blue-800">
                      {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            {/* ARTICLE BODY */}
            <div className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-7 shadow-sm sm:px-8 md:px-12 md:py-10">
              <div className="mx-auto max-w-3xl">
                <div
                className="
                    break-words text-[15px] leading-[1.95] text-slate-600
                    [&>p]:mb-5
                    [&>h3]:mb-3
                    [&>h3]:mt-9
                    [&>h3]:text-lg
                    [&>h3]:font-extrabold
                    [&>h3]:tracking-tight
                    [&>h3]:text-slate-900
                    [&>ul]:my-5
                    [&>ul]:list-disc
                    [&>ul]:space-y-3
                    [&>ul]:pl-6
                    [&>ul>li]:pl-1
                    [&>ul>li::marker]:text-blue-600
                    [&_strong]:font-bold
                    [&_strong]:text-blue-950
                    [&_a]:font-semibold
                    [&_a]:text-blue-700
                    [&_a]:underline
                    [&_a]:decoration-blue-300
                    [&_a]:underline-offset-4
                    [&_a:hover]:text-blue-900
                    [&>p:first-child]:text-base
                    [&>p:first-child]:font-medium
                    [&>p:first-child]:text-slate-700
                    sm:text-base
                    max-sm:text-sm
                "
                >
                  <p className="text-lg font-medium leading-8 text-slate-700">
                    Ketika mulai membangun bisnis di era digital, salah satu
                    pertanyaan yang sering muncul adalah apakah harus membuat
                    website atau cukup menggunakan landing page. Keduanya
                    sering dianggap sama karena sama-sama dapat dibuka melalui
                    browser dan menampilkan informasi, gambar, tombol, serta
                    formulir.
                  </p>

                  <p>
                    Padahal, website dan landing page memiliki pendekatan
                    berbeda. Website umumnya dirancang sebagai pusat informasi
                    digital yang dapat menampung berbagai kebutuhan bisnis.
                    Sementara itu, landing page dibuat dengan fokus lebih
                    spesifik, misalnya memperkenalkan satu layanan, menawarkan
                    produk, mengumpulkan data calon pelanggan, atau mengarahkan
                    pengunjung untuk menghubungi tim penjualan.
                  </p>

                  <p>
                    Bagi UMKM, perusahaan, lembaga pendidikan, startup, maupun
                    penyedia jasa, keputusan ini perlu disesuaikan dengan
                    tujuan bisnis. Memilih halaman yang tepat bukan hanya soal
                    tampilan atau harga pembuatan, tetapi juga tentang
                    bagaimana calon pelanggan menemukan informasi dan
                    mengambil keputusan.
                  </p>

                  <p>
                    Melalui artikel ini, HINAI Tech membahas perbedaan website
                    dan landing page secara praktis agar Anda dapat menentukan
                    solusi digital yang sesuai dengan kebutuhan bisnis.
                  </p>

                  <SectionTitle number="01" id="pengertian-website">
                    Apa Itu Website?
                  </SectionTitle>

                  <p>
                    Website adalah kumpulan halaman digital yang saling
                    terhubung dan dapat diakses melalui internet menggunakan
                    alamat domain. Setiap halaman dapat berisi teks, gambar,
                    video, dokumen, formulir, katalog produk, maupun fitur
                    interaktif. Pengunjung dapat berpindah dari satu halaman
                    ke halaman lain melalui menu, tombol, atau tautan yang
                    tersedia.
                  </p>

                  <p>
                    Dalam konteks bisnis, website berfungsi sebagai pusat
                    informasi dan representasi digital perusahaan. Pengunjung
                    dapat mengenal profil bisnis, memahami layanan, melihat
                    portofolio, membaca artikel, mempelajari keunggulan produk,
                    hingga menemukan informasi kontak tanpa harus mencari
                    informasi tersebut dari banyak platform berbeda.
                  </p>

                  <p>
                    Contohnya, perusahaan jasa teknologi dapat memiliki
                    halaman beranda, profil perusahaan, daftar layanan,
                    portofolio proyek, blog, halaman karier, dan kontak.
                    Seluruh halaman tersebut menjadi satu kesatuan di bawah
                    domain yang sama.
                  </p>

                  <p>
                    Website juga dapat dikembangkan sesuai pertumbuhan bisnis.
                    Pada tahap awal, perusahaan mungkin hanya membutuhkan
                    beberapa halaman informasi. Ketika bisnis berkembang,
                    website dapat ditambahkan fitur katalog, formulir
                    permintaan penawaran, sistem pemesanan, portal pelanggan,
                    hingga aplikasi berbasis web.
                  </p>

                  <h3>Fungsi website untuk bisnis</h3>

                  <ul>
                    <li>
                      <strong>Membangun identitas digital.</strong> Website
                      menjadi tempat resmi untuk memperkenalkan nama, profil,
                      nilai, dan karakter bisnis.
                    </li>
                    <li>
                      <strong>Menampilkan produk dan layanan.</strong>{" "}
                      Informasi dapat disusun berdasarkan kategori sehingga
                      calon pelanggan lebih mudah memahami penawaran.
                    </li>
                    <li>
                      <strong>Meningkatkan kepercayaan.</strong> Profil,
                      alamat, kontak, portofolio, dokumentasi pekerjaan, dan
                      informasi perusahaan membantu pengunjung melakukan
                      penilaian.
                    </li>
                    <li>
                      <strong>Mendukung pemasaran melalui mesin pencari.</strong>{" "}
                      Halaman layanan dan artikel dapat dioptimalkan untuk
                      menjawab kebutuhan pencarian calon pelanggan.
                    </li>
                    <li>
                      <strong>Menjadi pusat informasi.</strong> Informasi
                      penting tidak hanya tersebar di media sosial atau
                      aplikasi pesan, tetapi tersusun dalam satu platform.
                    </li>
                    <li>
                      <strong>Mendukung proses penjualan.</strong> Website
                      dapat mengarahkan pengunjung menuju formulir, WhatsApp,
                      katalog, atau sistem pemesanan.
                    </li>
                  </ul>

                  <p>
                    Dengan demikian, website tidak hanya berfungsi sebagai
                    kartu nama digital. Jika direncanakan dengan baik, website
                    dapat menjadi bagian dari sistem pemasaran, komunikasi,
                    dan operasional bisnis.
                  </p>

                  <InfoBox title="Contoh website dalam dunia bisnis">
                    Perusahaan teknologi dapat menggunakan website untuk
                    memperkenalkan layanan pembuatan website, aplikasi,
                    desain UI/UX, hingga solusi digital lainnya. Pengunjung
                    kemudian memilih layanan yang paling sesuai sebelum
                    menghubungi perusahaan.
                  </InfoBox>

                  <SectionTitle number="02" id="pengertian-landing-page">
                    Apa Itu Landing Page?
                  </SectionTitle>

                  <p>
                    Landing page adalah halaman web yang dirancang untuk
                    mencapai tujuan tertentu. Pengunjung biasanya diarahkan
                    ke halaman ini setelah mengeklik iklan, tautan promosi,
                    email pemasaran, unggahan media sosial, atau sumber lalu
                    lintas lainnya.
                  </p>

                  <p>
                    Berbeda dengan website yang dapat memiliki banyak tujuan,
                    landing page berfokus pada satu penawaran atau tindakan
                    utama. Tindakan tersebut dapat berupa menghubungi penjual
                    melalui WhatsApp, mengisi formulir, mendaftar kelas,
                    membeli produk, mengunduh materi, atau meminta konsultasi.
                  </p>

                  <p>
                    Sebagai contoh, sebuah lembaga pelatihan ingin membuka
                    pendaftaran kelas desain grafis. Alih-alih mengarahkan
                    calon peserta ke website yang berisi banyak informasi,
                    lembaga tersebut dapat membuat landing page khusus yang
                    menjelaskan nama kelas, materi, jadwal, manfaat, biaya,
                    testimoni, dan tombol pendaftaran.
                  </p>

                  <p>
                    Seluruh informasi tersebut disusun dalam satu alur agar
                    pengunjung memahami penawaran dan mengetahui tindakan
                    yang perlu dilakukan berikutnya. Navigasi tambahan
                    biasanya dibatasi agar perhatian pengunjung tidak terpecah.
                  </p>

                  <h3>Fungsi landing page</h3>

                  <ul>
                    <li>
                      <strong>Menghasilkan prospek atau leads.</strong>{" "}
                      Landing page dapat mengumpulkan nama, nomor WhatsApp,
                      email, atau informasi calon pelanggan melalui formulir.
                    </li>
                    <li>
                      <strong>Mendukung promosi produk.</strong> Satu produk
                      atau layanan dapat dijelaskan dengan pesan yang lebih
                      terarah.
                    </li>
                    <li>
                      <strong>Mengarahkan pengunjung ke tindakan tertentu.</strong>{" "}
                      Tombol CTA dibuat jelas agar pengunjung mengetahui cara
                      membeli, mendaftar, atau menghubungi bisnis.
                    </li>
                    <li>
                      <strong>Mendukung iklan digital.</strong> Pengunjung
                      dari iklan dapat diarahkan ke halaman yang sesuai dengan
                      pesan promosi yang mereka lihat.
                    </li>
                    <li>
                      <strong>Menguji penawaran pemasaran.</strong> Bisnis
                      dapat membandingkan judul, susunan konten, atau
                      penawaran untuk memahami pendekatan yang lebih efektif.
                    </li>
                  </ul>

                  <p>
                    Landing page yang baik tidak harus panjang atau penuh efek
                    visual. Hal yang lebih penting adalah kejelasan penawaran,
                    relevansi informasi, kemudahan penggunaan, kecepatan
                    akses, dan CTA yang mudah ditemukan.
                  </p>

                  <SectionTitle number="03" id="perbedaan">
                    Perbedaan Website dan Landing Page
                  </SectionTitle>

                  <p>
                    Perbedaan paling mendasar antara website dan landing page
                    terletak pada tujuan pembuatannya. Website membantu
                    pengunjung mengenal bisnis dan menjelajahi berbagai
                    informasi. Landing page mengarahkan pengunjung pada satu
                    tujuan yang sudah ditentukan.
                  </p>

                  <p>
                    Untuk memahami perbedaannya secara lebih jelas, perhatikan
                    tabel perbandingan berikut.
                  </p>

                  <ComparisonTable />

                  <h3>1. Tujuan dan orientasi penggunaan</h3>

                  <p>
                    Website dirancang untuk melayani beberapa kebutuhan
                    sekaligus. Seseorang yang mengunjungi website perusahaan
                    mungkin ingin mengetahui profil bisnis, mencari layanan,
                    melihat hasil pekerjaan, membaca artikel, atau menemukan
                    kontak. Website perlu menyediakan jalur informasi untuk
                    kebutuhan yang berbeda tersebut.
                  </p>

                  <p>
                    Landing page memiliki orientasi yang lebih sempit.
                    Misalnya, jika sebuah bisnis menawarkan jasa pembuatan
                    website dengan promo tertentu, landing page dapat
                    menjelaskan penawaran tersebut dan mengarahkan pengunjung
                    untuk meminta konsultasi. Informasi yang tidak mendukung
                    tujuan utama dapat dikurangi.
                  </p>

                  <h3>2. Struktur halaman dan navigasi</h3>

                  <p>
                    Website biasanya memiliki struktur yang terdiri dari
                    beberapa halaman. Menu navigasi membantu pengunjung
                    berpindah ke halaman layanan, tentang perusahaan,
                    portofolio, blog, atau kontak. Struktur ini penting agar
                    informasi yang banyak tetap mudah ditemukan.
                  </p>

                  <p>
                    Landing page biasanya menggunakan satu halaman dengan
                    beberapa bagian yang disusun secara berurutan. Bagian
                    tersebut dapat mencakup headline, masalah pelanggan,
                    solusi, manfaat, fitur, testimoni, harga, pertanyaan umum,
                    dan tombol tindakan. Navigasi dibuat lebih sederhana
                    supaya pengunjung tetap mengikuti alur penawaran.
                  </p>

                  <h3>3. Isi dan kedalaman konten</h3>

                  <p>
                    Website dapat memuat konten yang luas dan beragam. Sebuah
                    perusahaan dapat menerbitkan artikel edukasi, studi kasus,
                    dokumentasi proyek, informasi layanan, dan berita
                    perusahaan. Setiap konten dapat memiliki halaman sendiri.
                  </p>

                  <p>
                    Landing page hanya memuat informasi yang relevan dengan
                    penawaran tertentu. Konten harus cukup lengkap untuk
                    menjawab keraguan pengunjung, tetapi tidak perlu membahas
                    seluruh sejarah dan aktivitas perusahaan.
                  </p>

                  <h3>4. Strategi SEO dan sumber trafik</h3>

                  <p>
                    Website dengan struktur yang baik memberikan ruang untuk
                    mengembangkan strategi SEO melalui halaman layanan,
                    kategori, artikel, dan konten informatif. Setiap halaman
                    dapat menargetkan kebutuhan pencarian yang berbeda selama
                    kontennya benar-benar bermanfaat dan tidak dibuat sekadar
                    mengulang kata kunci.
                  </p>

                  <p>
                    Landing page juga dapat dioptimalkan untuk mesin pencari.
                    Namun, karena fokusnya lebih spesifik, cakupan topik dan
                    kata kunci yang dapat dibahas biasanya lebih terbatas.
                    Landing page sering digunakan bersama iklan digital atau
                    kampanye pemasaran yang memiliki target audiens tertentu.
                  </p>

                  <h3>5. Pengukuran keberhasilan</h3>

                  <p>
                    Keberhasilan website dapat dilihat dari berbagai
                    indikator, seperti jumlah pengunjung, halaman yang dibaca,
                    sumber trafik, permintaan informasi, interaksi, dan
                    kontribusinya terhadap tujuan bisnis.
                  </p>

                  <p>
                    Pada landing page, pengukuran biasanya lebih terarah.
                    Contohnya jumlah pengunjung yang mengeklik tombol WhatsApp,
                    mengisi formulir, mendaftar, atau menyelesaikan pembelian.
                    Metrik yang digunakan harus mengikuti tujuan kampanye.
                  </p>

                  <SectionTitle number="04" id="kelebihan-website">
                    Kelebihan dan Kekurangan Website
                  </SectionTitle>

                  <p>
                    Website memberikan ruang yang luas untuk mengembangkan
                    kehadiran digital bisnis. Namun, ruang lingkup yang lebih
                    luas juga berarti perencanaan dan pengelolaan yang lebih
                    menyeluruh.
                  </p>

                  <div className="not-prose my-7 grid gap-5 md:grid-cols-2">
                    <ArticleCard title="Kelebihan Website">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Dapat menampilkan informasi bisnis secara lengkap.
                        </li>
                        <li>
                          Mendukung pengembangan konten dan SEO jangka panjang.
                        </li>
                        <li>Memiliki ruang untuk banyak produk dan layanan.</li>
                        <li>
                          Dapat dikembangkan dengan fitur sesuai kebutuhan.
                        </li>
                        <li>
                          Mendukung identitas dan kredibilitas perusahaan.
                        </li>
                        <li>
                          Dapat menjadi pusat berbagai kanal pemasaran.
                        </li>
                      </ul>
                    </ArticleCard>

                    <ArticleCard title="Hal yang Perlu Diperhatikan" accent="gold">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Membutuhkan perencanaan struktur yang matang.
                        </li>
                        <li>
                          Konten dan halaman perlu diperbarui secara berkala.
                        </li>
                        <li>
                          Fitur kompleks membutuhkan waktu pengembangan.
                        </li>
                        <li>
                          Perlu pengelolaan keamanan dan pemeliharaan.
                        </li>
                        <li>
                          Pengunjung membutuhkan navigasi yang jelas.
                        </li>
                      </ul>
                    </ArticleCard>
                  </div>

                  <p>
                    Karena itu, website sebaiknya dibangun berdasarkan
                    prioritas. Tidak semua bisnis harus langsung memiliki
                    puluhan halaman. Mulailah dari halaman yang paling
                    dibutuhkan pelanggan, lalu kembangkan struktur seiring
                    bertambahnya layanan, produk, dan kebutuhan operasional.
                  </p>

                  <SectionTitle number="05" id="kelebihan-landing">
                    Kelebihan dan Kekurangan Landing Page
                  </SectionTitle>

                  <p>
                    Landing page dapat menjadi pilihan praktis ketika bisnis
                    memiliki tujuan pemasaran yang jelas. Fokus pada satu
                    penawaran membantu menyampaikan pesan secara langsung.
                    Meskipun demikian, pendekatan ini memiliki batasan ketika
                    bisnis membutuhkan banyak informasi yang saling berkaitan.
                  </p>

                  <div className="not-prose my-7 grid gap-5 md:grid-cols-2">
                    <ArticleCard title="Kelebihan Landing Page">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Fokus pada satu penawaran atau tindakan utama.
                        </li>
                        <li>
                          Pesan pemasaran lebih mudah disesuaikan dengan
                          audiens.
                        </li>
                        <li>Cocok untuk kampanye iklan dan promosi tertentu.</li>
                        <li>Alur pengunjung dapat dibuat lebih sederhana.</li>
                        <li>
                          Hasil kampanye mudah diukur berdasarkan konversi.
                        </li>
                        <li>
                          Dapat dibuat sebagai halaman khusus di website utama.
                        </li>
                      </ul>
                    </ArticleCard>

                    <ArticleCard title="Hal yang Perlu Diperhatikan" accent="gold">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Cakupan informasi biasanya lebih terbatas.
                        </li>
                        <li>
                          Tidak ideal untuk menampung banyak topik berbeda.
                        </li>
                        <li>
                          Pesan harus relevan dengan target audiens.
                        </li>
                        <li>
                          Hasilnya tetap bergantung pada kualitas trafik.
                        </li>
                        <li>
                          Perlu pengujian agar CTA dan penawaran efektif.
                        </li>
                      </ul>
                    </ArticleCard>
                  </div>

                  <p>
                    Landing page bukan jalan pintas yang otomatis menghasilkan
                    penjualan. Jika produk tidak sesuai kebutuhan pasar,
                    informasi kurang meyakinkan, atau pengunjung yang datang
                    tidak relevan, halaman yang bagus sekalipun belum tentu
                    menghasilkan konversi. Desain perlu didukung penawaran
                    yang tepat dan strategi pemasaran yang terukur.
                  </p>

                  <SectionTitle number="06" id="contoh-penggunaan">
                    Contoh Penggunaan Website dan Landing Page
                  </SectionTitle>

                  <p>
                    Agar lebih mudah dipahami, berikut beberapa contoh
                    penerapan website dan landing page dalam aktivitas bisnis
                    dan organisasi.
                  </p>

                  <h3>1. UMKM dan toko lokal</h3>

                  <p>
                    Pemilik toko pakaian dapat menggunakan website untuk
                    menampilkan profil toko, katalog produk, informasi ukuran,
                    lokasi, kebijakan pengiriman, dan kontak. Website tersebut
                    dapat membantu pelanggan mencari informasi sebelum
                    melakukan pembelian.
                  </p>

                  <p>
                    Ketika toko mengadakan promo koleksi baru, pemilik dapat
                    membuat landing page khusus yang menampilkan produk
                    pilihan, harga promosi, batas waktu penawaran, dan tombol
                    pemesanan. Pengunjung dari iklan diarahkan langsung ke
                    penawaran tersebut.
                  </p>

                  <h3>2. Perusahaan jasa dan konsultan</h3>

                  <p>
                    Perusahaan jasa membutuhkan website untuk memperkenalkan
                    perusahaan, layanan, pengalaman, portofolio, tim, dan
                    informasi kontak. Calon pelanggan dapat mempelajari
                    perusahaan sebelum meminta penawaran.
                  </p>

                  <p>
                    Untuk mempromosikan satu layanan, misalnya konsultasi
                    transformasi digital, perusahaan dapat membuat landing
                    page yang menjelaskan masalah yang dapat dibantu, tahapan
                    konsultasi, manfaat, dan formulir permintaan jadwal.
                  </p>

                  <h3>3. Sekolah, kursus, dan lembaga pelatihan</h3>

                  <p>
                    Sekolah atau lembaga pendidikan dapat menggunakan website
                    sebagai pusat informasi profil, program pendidikan,
                    fasilitas, pengumuman, berita, jadwal, dan kontak.
                    Informasi yang terstruktur membantu siswa, orang tua, dan
                    masyarakat menemukan informasi yang dibutuhkan.
                  </p>

                  <p>
                    Sementara itu, landing page dapat digunakan untuk
                    pendaftaran peserta didik baru, promosi kelas singkat,
                    webinar, atau pelatihan tertentu. Halaman dapat memuat
                    jadwal, persyaratan, biaya, materi, dan tombol pendaftaran.
                  </p>

                  <h3>4. Startup dan bisnis digital</h3>

                  <p>
                    Startup dapat memanfaatkan website untuk menjelaskan
                    produk, model bisnis, fitur, dokumentasi, tim, dan
                    informasi perusahaan. Ketika meluncurkan fitur atau produk
                    baru, tim pemasaran dapat menyiapkan landing page untuk
                    mengumpulkan pendaftar awal atau menawarkan akses uji coba.
                  </p>

                  <h3>5. Freelancer dan profesional</h3>

                  <p>
                    Freelancer dapat menggunakan website portofolio untuk
                    menampilkan profil, keahlian, proyek, pengalaman, dan
                    informasi kontak. Landing page dapat dibuat khusus untuk
                    menawarkan satu layanan, seperti desain logo, pembuatan
                    website, fotografi, atau konsultasi.
                  </p>

                  <InfoBox title="Contoh sederhana">
                    Website adalah tempat calon pelanggan mengenal seluruh
                    bisnis Anda. Landing page adalah halaman khusus yang
                    membantu calon pelanggan mengambil tindakan terhadap satu
                    penawaran. Keduanya dapat saling terhubung dan digunakan
                    dalam satu strategi pemasaran.
                  </InfoBox>

                  <SectionTitle number="07" id="seo">
                    Mana yang Lebih Baik untuk SEO?
                  </SectionTitle>

                  <p>
                    Pertanyaan ini sering muncul ketika bisnis ingin
                    mendapatkan pengunjung dari Google. Jawabannya tidak
                    sesederhana bahwa website selalu menang atau landing page
                    tidak bisa SEO. Keduanya dapat dioptimalkan, tetapi
                    memiliki ruang dan karakteristik konten yang berbeda.
                  </p>

                  <p>
                    Website dengan banyak halaman memberikan kesempatan untuk
                    membahas beberapa topik yang relevan dengan bisnis.
                    Misalnya, perusahaan teknologi dapat memiliki halaman jasa
                    pembuatan website, jasa landing page, layanan aplikasi,
                    portofolio, serta artikel edukasi. Setiap halaman dapat
                    menjawab maksud pencarian yang berbeda.
                  </p>

                  <p>
                    Landing page dapat menargetkan pencarian yang lebih
                    spesifik, terutama ketika isi halaman benar-benar sesuai
                    dengan kebutuhan pengunjung. Namun, landing page yang
                    terlalu singkat, berisi informasi berulang, atau hanya
                    menampilkan promosi tanpa penjelasan yang berguna akan
                    sulit memberikan pengalaman yang memuaskan.
                  </p>

                  <h3>Hal yang perlu diperhatikan untuk SEO</h3>

                  <ul>
                    <li>
                      <strong>Search intent:</strong> pahami tujuan orang
                      ketika mengetik kata kunci tertentu.
                    </li>
                    <li>
                      <strong>Judul dan heading:</strong> gunakan judul yang
                      menggambarkan isi halaman dengan jelas.
                    </li>
                    <li>
                      <strong>Konten bermanfaat:</strong> berikan penjelasan
                      yang menjawab pertanyaan dan kebutuhan pembaca.
                    </li>
                    <li>
                      <strong>Struktur internal link:</strong> hubungkan
                      halaman yang relevan agar pengunjung dapat menemukan
                      informasi lanjutan.
                    </li>
                    <li>
                      <strong>Kecepatan dan pengalaman pengguna:</strong>{" "}
                      pastikan halaman mudah dibuka dan digunakan di perangkat
                      mobile.
                    </li>
                    <li>
                      <strong>Metadata dan indeksasi:</strong> siapkan title,
                      description, canonical, sitemap, serta pengaturan robots
                      yang sesuai.
                    </li>
                  </ul>

                  <p>
                    Website yang memiliki banyak halaman tidak otomatis
                    memiliki peringkat tinggi. Kualitas informasi, relevansi,
                    pengalaman pengguna, dan kondisi teknis tetap perlu
                    diperhatikan. Begitu pula landing page: fokus pada satu
                    tujuan tidak berarti mengabaikan kualitas konten dan
                    aksesibilitas.
                  </p>

                  <p>
                    Untuk memahami lebih lanjut, Anda dapat membaca panduan
                    dari{" "}
                    <a
                      href="https://www.shopify.com/id/blog/landing-page-vs-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shopify tentang perbedaan landing page dan website
                    </a>
                    .
                  </p>

                  <SectionTitle number="08" id="memilih">
                    Apakah Bisnis Membutuhkan Website, Landing Page, atau Keduanya?
                  </SectionTitle>

                  <p>
                    Pilihan terbaik bergantung pada tahap perkembangan bisnis,
                    jumlah produk atau layanan, karakteristik pelanggan,
                    sumber trafik, dan tujuan pemasaran. Tidak ada satu format
                    yang wajib digunakan oleh seluruh jenis bisnis.
                  </p>

                  <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                      <span className="mb-3 inline-flex rounded-lg bg-blue-700 px-3 py-1 text-xs font-bold text-white">
                        PILIH WEBSITE
                      </span>
                      <h3 className="mb-3 text-lg font-extrabold text-slate-900">
                        Untuk jangka panjang
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        <li>Membangun identitas perusahaan.</li>
                        <li>Memiliki banyak produk atau layanan.</li>
                        <li>Membutuhkan profil dan portofolio.</li>
                        <li>Mengembangkan artikel dan SEO.</li>
                        <li>Menyediakan informasi lengkap.</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <span className="mb-3 inline-flex rounded-lg bg-amber-500 px-3 py-1 text-xs font-bold text-slate-950">
                        PILIH LANDING PAGE
                      </span>
                      <h3 className="mb-3 text-lg font-extrabold text-slate-900">
                        Untuk konversi
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        <li>Promosi satu produk utama.</li>
                        <li>Menjalankan kampanye iklan.</li>
                        <li>Mengumpulkan prospek.</li>
                        <li>Membuka pendaftaran program.</li>
                        <li>Menguji penawaran pasar.</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <span className="mb-3 inline-flex rounded-lg bg-emerald-700 px-3 py-1 text-xs font-bold text-white">
                        GUNAKAN KEDUANYA
                      </span>
                      <h3 className="mb-3 text-lg font-extrabold text-slate-900">
                        Untuk strategi terpadu
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        <li>Memiliki website utama.</li>
                        <li>Menjalankan promosi berkala.</li>
                        <li>Memiliki beberapa target audiens.</li>
                        <li>Menghubungkan SEO dan iklan.</li>
                        <li>Mengembangkan proses penjualan.</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Sebagai contoh, sebuah perusahaan dapat memiliki website
                    utama sebagai pusat informasi. Di dalamnya terdapat
                    halaman layanan, artikel, portofolio, dan kontak. Ketika
                    perusahaan menjalankan iklan untuk jasa pembuatan website,
                    perusahaan dapat mengarahkan iklan tersebut ke landing
                    page khusus.
                  </p>

                  <p>
                    Dengan pendekatan ini, website membangun kehadiran digital
                    jangka panjang, sedangkan landing page mendukung kebutuhan
                    kampanye yang lebih spesifik.
                  </p>

                  <SectionTitle number="09" id="biaya">
                    Faktor yang Memengaruhi Biaya Pembuatan
                  </SectionTitle>

                  <p>
                    Website dan landing page tidak memiliki harga yang selalu
                    sama. Biaya pengembangan ditentukan oleh kebutuhan teknis,
                    ruang lingkup desain, konten, fitur, dan tingkat
                    kompleksitas proyek. Karena itu, membandingkan harga hanya
                    berdasarkan jumlah halaman dapat menghasilkan keputusan
                    yang kurang tepat.
                  </p>

                  <h3>Faktor biaya pembuatan website</h3>

                  <ul>
                    <li>Jumlah halaman dan struktur navigasi.</li>
                    <li>Desain UI/UX dan tingkat kustomisasi.</li>
                    <li>
                      Fitur seperti katalog, formulir, akun pengguna, atau
                      pembayaran.
                    </li>
                    <li>
                      Integrasi dengan API, database, atau layanan pihak
                      ketiga.
                    </li>
                    <li>Penulisan konten, optimasi SEO, dan pengolahan media.</li>
                    <li>Domain, hosting, keamanan, serta pemeliharaan.</li>
                  </ul>

                  <h3>Faktor biaya pembuatan landing page</h3>

                  <ul>
                    <li>Kompleksitas desain dan panjang halaman.</li>
                    <li>Kebutuhan copywriting dan materi promosi.</li>
                    <li>
                      Formulir, tombol WhatsApp, atau integrasi pemasaran.
                    </li>
                    <li>Pelacakan konversi dan pemasangan analytics.</li>
                    <li>Optimasi tampilan mobile dan kecepatan akses.</li>
                    <li>Pengujian dan revisi berdasarkan kebutuhan kampanye.</li>
                  </ul>

                  <p>
                    Landing page sederhana dapat memiliki ruang lingkup lebih
                    kecil daripada website dengan banyak fitur. Namun, landing
                    page yang memerlukan copywriting mendalam, integrasi
                    sistem, animasi khusus, dan pengukuran kampanye juga dapat
                    membutuhkan proses pengembangan yang serius.
                  </p>

                  <p>
                    Sebelum memesan layanan, pastikan Anda memahami apa saja
                    yang termasuk dalam penawaran: desain, jumlah revisi,
                    domain, hosting, konten, integrasi, optimasi, dan dukungan
                    setelah website dipublikasikan.
                  </p>

                  <SectionTitle number="10" id="proses">
                    Tahapan Membuat Website atau Landing Page
                  </SectionTitle>

                  <p>
                    Proses pembuatan yang terencana membantu mengurangi revisi
                    berulang dan memastikan hasil akhir sesuai tujuan. Di
                    HINAI Tech, pengembangan solusi digital perlu diawali
                    dengan pemahaman kebutuhan, bukan langsung memilih desain
                    atau teknologi.
                  </p>

                  <div className="not-prose my-8 space-y-4">
                    {[
                      {
                        n: "01",
                        title: "Analisis kebutuhan",
                        desc: "Memahami masalah, tujuan bisnis, target pengguna, dan ruang lingkup proyek.",
                      },
                      {
                        n: "02",
                        title: "Perencanaan struktur",
                        desc: "Menyusun sitemap website atau alur informasi landing page.",
                      },
                      {
                        n: "03",
                        title: "Desain UI/UX",
                        desc: "Membuat tampilan visual, hierarki informasi, dan pengalaman pengguna.",
                      },
                      {
                        n: "04",
                        title: "Development",
                        desc: "Mengimplementasikan desain menjadi website atau halaman yang berfungsi.",
                      },
                      {
                        n: "05",
                        title: "Testing dan optimasi",
                        desc: "Memeriksa tampilan responsif, tautan, formulir, kecepatan, dan fungsi.",
                      },
                      {
                        n: "06",
                        title: "Deployment",
                        desc: "Menghubungkan domain, hosting, SSL, dan mempublikasikan halaman.",
                      },
                      {
                        n: "07",
                        title: "Evaluasi",
                        desc: "Memantau performa dan melakukan perbaikan berdasarkan kebutuhan.",
                      },
                    ].map((step, index) => (
                      <div
                        key={step.n}
                        className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-extrabold text-white">
                          {step.n}
                        </span>
                        <div>
                          <h3 className="mb-1 font-extrabold text-slate-900">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-6 text-slate-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p>
                    Untuk website, tahap perencanaan biasanya lebih
                    memperhatikan hubungan ant halaman dan struktur informasi.
                    Untuk landing page, perhatian lebih banyak diberikan pada
                    alur penawaran, copywriting, CTA, dan tujuan konversi.
                    Keduanya tetap membutuhkan pengujian sebelum dipublikasikan.
                  </p>

                  <SectionTitle number="11" id="mobile-friendly">
                    Mengapa Website dan Landing Page Harus Mobile-Friendly?
                  </SectionTitle>

                  <p>
                    Pengunjung dapat menemukan bisnis melalui ponsel, tablet,
                    maupun komputer. Karena itu, website dan landing page harus
                    mampu menyesuaikan tampilan dengan ukuran layar yang
                    berbeda. Pengalaman mobile bukan sekadar membuat halaman
                    mengecil, tetapi memastikan informasi dan fitur tetap
                    mudah digunakan.
                  </p>

                  <p>
                    Pada website, menu navigasi, gambar, tabel, formulir, dan
                    konten harus tetap nyaman diakses. Pada landing page,
                    headline, penjelasan penawaran, testimoni, dan tombol CTA
                    harus mudah ditemukan tanpa membuat pengunjung kesulitan
                    menggulir atau menekan elemen.
                  </p>

                  <p>
                    Perhatikan pula ukuran gambar, penggunaan font, kontras
                    warna, dan ruang antar elemen. Hindari animasi berlebihan
                    yang memperlambat halaman atau mengganggu pembacaan.
                    Tampilan yang menarik harus tetap mendukung fungsi utama
                    halaman.
                  </p>

                  <SectionTitle number="12" id="kesalahan">
                    Kesalahan yang Sering Terjadi Saat Memilih
                  </SectionTitle>

                  <p>
                    Beberapa bisnis memilih website atau landing page hanya
                    berdasarkan tren, harga termurah, atau rekomendasi tanpa
                    memahami kebutuhan sendiri. Akibatnya, halaman yang
                    dibuat tidak sepenuhnya mendukung proses pemasaran.
                  </p>

                  <ul>
                    <li>
                      <strong>Membuat website tanpa tujuan.</strong> Banyak
                      halaman dibuat, tetapi tidak jelas informasi apa yang
                      dibutuhkan pelanggan dan tindakan apa yang diharapkan.
                    </li>
                    <li>
                      <strong>Menggunakan landing page untuk semua kebutuhan.</strong>{" "}
                      Satu halaman dipaksa menampung terlalu banyak layanan
                      dan informasi sehingga pesan utamanya menjadi tidak
                      fokus.
                    </li>
                    <li>
                      <strong>Tidak memiliki CTA yang jelas.</strong>{" "}
                      Pengunjung sudah membaca informasi, tetapi tidak tahu
                      cara memesan, mendaftar, atau menghubungi bisnis.
                    </li>
                    <li>
                      <strong>Hanya memperhatikan tampilan.</strong> Desain
                      menarik tidak cukup apabila halaman lambat, konten tidak
                      jelas, atau formulir tidak berfungsi.
                    </li>
                    <li>
                      <strong>Mengabaikan optimasi mobile.</strong> Pengunjung
                      kesulitan membaca teks, menekan tombol, atau mengisi
                      formulir dari ponsel.
                    </li>
                    <li>
                      <strong>Tidak melakukan evaluasi.</strong> Halaman
                      dibiarkan tanpa memeriksa performa, kesalahan, dan
                      kebutuhan pengembangan.
                    </li>
                  </ul>

                  <p>
                    Solusinya adalah memulai dari tujuan bisnis dan kebutuhan
                    pengguna. Tentukan informasi yang harus tersedia, tindakan
                    yang diharapkan, serta bagaimana keberhasilan proyek akan
                    diukur.
                  </p>

                  <SectionTitle number="13" id="hinai-tech">
                    Solusi Website dan Landing Page dari HINAI Tech
                  </SectionTitle>

                  <p>
                    HINAI Tech – PT Heroic Inovasi Nusantara merupakan penyedia
                    solusi digital yang membantu bisnis, lembaga pendidikan,
                    organisasi, dan berbagai kebutuhan profesional dalam
                    mengembangkan kehadiran digital. Pengembangan website dan
                    landing page menjadi bagian dari layanan untuk mendukung
                    komunikasi, pemasaran, serta transformasi digital.
                  </p>

                  <p>
                    Kebutuhan setiap bisnis berbeda. Ada yang membutuhkan
                    website company profile untuk membangun kredibilitas, ada
                    yang memerlukan landing page untuk promosi, dan ada pula
                    yang membutuhkan website dengan fitur khusus sesuai alur
                    operasional.
                  </p>

                  <p>
                    Karena itu, pendekatan pengembangan perlu disesuaikan
                    dengan tujuan dan ruang lingkup proyek. Beberapa solusi
                    yang dapat dikembangkan bersama HINAI Tech meliputi:
                  </p>

                  <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
                    <ArticleCard title="Website Company Profile">
                      Website untuk memperkenalkan identitas perusahaan,
                      profil, layanan, portofolio, informasi kontak, dan
                      keunggulan bisnis.
                    </ArticleCard>
                    <ArticleCard title="Landing Page Bisnis" accent="gold">
                      Halaman promosi yang terarah untuk layanan, produk,
                      pendaftaran, kampanye, dan pengumpulan calon pelanggan.
                    </ArticleCard>
                    <ArticleCard title="Website Katalog dan Layanan">
                      Platform untuk menampilkan daftar produk, kategori
                      layanan, detail informasi, dan jalur permintaan
                      penawaran.
                    </ArticleCard>
                    <ArticleCard title="Custom Website dan Web App" accent="gold">
                      Pengembangan fitur khusus seperti dashboard, formulir
                      dinamis, sistem data, autentikasi, dan integrasi API.
                    </ArticleCard>
                  </div>

                  <p>
                    Proses pengerjaan dapat mencakup analisis kebutuhan,
                    perencanaan struktur, desain UI/UX, pengembangan,
                    pengujian, publikasi, dan evaluasi. Teknologi yang
                    digunakan disesuaikan dengan karakteristik proyek,
                    kebutuhan performa, dan rencana pengembangan ke depan.
                  </p>

                  <p>
                    HINAI Tech juga memperhatikan aspek responsivitas,
                    struktur halaman, pengalaman pengguna, dan kebutuhan
                    optimasi mesin pencari. Dengan demikian, website atau
                    landing page tidak hanya dibuat agar terlihat menarik,
                    tetapi juga memiliki fungsi yang jelas bagi bisnis.
                  </p>

                  <p>
                    Jika Anda belum yakin harus memilih website atau landing
                    page, konsultasikan terlebih dahulu kebutuhan bisnis Anda.
                    Penentuan solusi sebaiknya dilakukan setelah memahami
                    tujuan, target audiens, layanan yang ditawarkan, dan
                    rencana pemasaran.
                  </p>

                  <SectionTitle number="14" id="faq">
                    FAQ: Pertanyaan Seputar Website dan Landing Page
                  </SectionTitle>

                  <div className="not-prose my-7 space-y-3">
                    {faqs.map((faq, index) => (
                      <details
                        key={faq.question}
                        className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition open:border-blue-200 open:bg-blue-50/30"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold leading-6 text-slate-900 marker:hidden">
                          <span className="flex items-start gap-3">
                            <span className="text-xs font-extrabold text-blue-600">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {faq.question}
                          </span>
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-700 transition group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                          <p className="text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>

                  <SectionTitle number="15" id="kesimpulan">
                    Kesimpulan: Pilih Berdasarkan Tujuan Bisnis
                  </SectionTitle>

                  <p>
                    Website dan landing page bukan dua produk yang harus
                    saling menggantikan. Keduanya memiliki fungsi yang berbeda
                    dan dapat digunakan secara bersamaan. Website cocok untuk
                    membangun identitas digital, menyediakan informasi
                    lengkap, menampilkan berbagai layanan, serta
                    mengembangkan konten dan SEO.
                  </p>

                  <p>
                    Landing page lebih sesuai untuk menyampaikan satu
                    penawaran secara terarah dan mendorong tindakan tertentu,
                    seperti menghubungi bisnis, mengisi formulir, membeli
                    produk, atau mendaftar program. Efektivitasnya bergantung
                    pada relevansi penawaran, kualitas informasi, target
                    pengunjung, dan pengalaman pengguna.
                  </p>

                  <p>
                    Jika bisnis Anda masih memiliki satu layanan utama dan
                    ingin menjalankan promosi, landing page dapat menjadi
                    langkah awal yang praktis. Namun, jika Anda membutuhkan
                    pusat informasi yang lebih lengkap dan ingin membangun
                    kehadiran digital jangka panjang, website dapat menjadi
                    fondasi yang lebih sesuai. Ketika bisnis berkembang,
                    keduanya dapat saling melengkapi.
                  </p>

                  <p>
                    Hal terpenting adalah tidak memilih hanya karena sebuah
                    format sedang populer. Mulailah dari kebutuhan pelanggan,
                    tujuan bisnis, dan rencana pengembangan. Dengan perencanaan
                    yang tepat, investasi digital dapat memberikan manfaat
                    yang lebih terukur.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <section className="relative my-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-7 text-white shadow-xl shadow-blue-950/15 md:p-11">
              <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />
              <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative max-w-3xl">
                <span className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
                  HINAI Tech · Digital Solution
                </span>
                <h2 className="mb-4 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                  Bingung Memilih Website atau Landing Page untuk Bisnis Anda?
                </h2>
                <p className="mb-8 max-w-2xl text-sm leading-8 text-blue-100 sm:text-base">
                  Konsultasikan kebutuhan digital bisnis Anda bersama HINAI
                  Tech. Temukan solusi yang sesuai untuk membangun identitas
                  online, mempromosikan layanan, dan menjangkau calon pelanggan.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20website%20atau%20landing%20page."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Konsultasi via WhatsApp →
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
                  >
                    Hubungi HINAI Tech
                  </Link>
                </div>
              </div>
            </section>

            {/* RELATED ARTICLES */}
            <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    Continue Reading
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-slate-950">
                    Artikel Terkait
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="text-sm font-bold text-blue-700 transition hover:text-blue-900"
                >
                  Semua artikel →
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/blog/apa-itu-website"
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-800">
                    Website
                  </span>
                  <h3 className="text-base font-extrabold leading-7 text-slate-900 group-hover:text-blue-800">
                    Apa Itu Website? Pengertian, Fungsi, Jenis, dan Manfaatnya
                    untuk Bisnis
                  </h3>
                  <span className="mt-4 inline-block text-sm font-bold text-blue-700">
                    Baca artikel →
                  </span>
                </Link>

                <Link
                  href="/services/landing-page"
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <span className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Layanan HINAI Tech
                  </span>
                  <h3 className="text-base font-extrabold leading-7 text-slate-900 group-hover:text-amber-800">
                    Layanan Pembuatan Landing Page untuk Bisnis
                  </h3>
                  <span className="mt-4 inline-block text-sm font-bold text-amber-700">
                    Lihat layanan →
                  </span>
                </Link>
              </div>
            </section>

            {/* REFERENCES */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-2 text-lg font-extrabold text-slate-900">
                Referensi Bacaan
              </h2>
              <p className="mb-5 text-sm leading-7 text-slate-500">
                Referensi eksternal untuk memperdalam pemahaman tentang website
                dan landing page.
              </p>
              <ul className="space-y-3 text-sm leading-6">
                <li>
                  <a
                    href="https://www.shopify.com/id/blog/landing-page-vs-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
                  >
                    Shopify – Landing Page vs. Website: What’s the Difference?
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.hubspot.com/website/landing-page-vs-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
                  >
                    HubSpot – Landing Page vs. Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40ed_emp/%40emp_ent/%40ifp_seed/documents/publication/wcms_914727.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
                  >
                    International Labour Organization – Digitalization and
                    Business Development
                  </a>
                </li>
              </ul>
            </section>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <Link
                href="/blog"
                className="text-sm font-bold text-blue-700 transition hover:text-blue-900"
              >
                ← Kembali ke semua artikel
              </Link>
              <span className="text-xs text-slate-400">
                © {new Date().getFullYear()} HINAI Tech
              </span>
            </div>
          </div>
        </article>

        
      </main>
    </LanguageProvider>
  );
}
