
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: "Layanan Digital Profesional HINAI Tech | PT Heroic Inovasi Nusantara",
  description:
    "HINAI Tech menyediakan jasa pembuatan website, aplikasi Android dan iOS, game, AR/VR, SEO, branding, UI/UX, serta AI solutions untuk bisnis modern di Indonesia.",
  keywords: [
    "Jasa Website",
    "Jasa Pembuatan Website Bandar Lampung",
    "Jasa Aplikasi Android",
    "Jasa Aplikasi iOS",
    "AR VR Development",
    "Game Development Indonesia",
    "Jasa Artikel SEO",
    "AI Automation",
    "Branding dan UI UX",
    "HINAI Tech",
    "PT Heroic Inovasi Nusantara",
  ],
  alternates: {
    canonical: "https://hinaitech.com/layanan",
  },
  openGraph: {
    title: "Layanan Digital Profesional HINAI Tech",
    description:
      "Temukan solusi teknologi digital untuk bisnis, pendidikan, dan kebutuhan profesional bersama HINAI Tech.",
    url: "https://hinaitech.com/layanan",
    siteName: "HINAI Tech",
    type: "website",
  },
}

const services: Array<{
  number: string
  category: string
  title: string
  description: string
  detail: string
  benefits: string[]
  image?: string
  imageAlt?: string
  imageSource?: string
  reverse: boolean
  technologies?: string
}> = [
  {
    number: "01",
    category: "Website Development",
    title: "Jasa Pembuatan Website",
    description:
      "Kami membangun website modern dengan teknologi seperti Next.js, React, Tailwind CSS, dan server-side rendering. Setiap website dirancang agar cepat, responsif, aman, dan SEO-friendly.",
    detail:
      "Website bukan sekadar tampilan digital, tetapi aset bisnis untuk memperkuat kredibilitas, menjangkau pelanggan, dan menghasilkan leads.",
    benefits: [
      "Company profile dan website perusahaan",
      "Website sekolah dan lembaga pendidikan",
      "Website UMKM dan bisnis",
      "Website katalog dan e-commerce",
      "Portal berita dan website komunitas",
      "Custom website sesuai kebutuhan",
    ],
    image: "/jasaweb_mufid-t.png",
    imageAlt: "Jasa pembuatan website profesional HINAI Tech",
    imageSource: "/jasaweb_mufid-t.png",
    reverse: false,
  },
  {
    number: "02",
    category: "Mobile Application",
    title: "Jasa Pembuatan Aplikasi Android & iOS",
    description:
      "Kami mengembangkan aplikasi mobile native maupun cross-platform untuk membantu bisnis, pendidikan, dan organisasi menjalankan aktivitas secara lebih praktis.",
    detail:
      "Aplikasi dirancang berdasarkan kebutuhan pengguna, alur kerja, keamanan, serta pengalaman penggunaan yang optimal.",
    benefits: [
      "Aplikasi Android dan iOS",
      "Aplikasi marketplace dan toko online",
      "Aplikasi pendidikan dan pembelajaran",
      "Aplikasi manajemen bisnis",
      "Aplikasi pemesanan dan layanan",
      "Sistem internal perusahaan",
    ],
    technologies: "Flutter, React Native, Kotlin, Swift",
    reverse: true,
  },
  {
    number: "03",
    category: "Game Development",
    title: "Game Development",
    description:
      "Kami mengembangkan game interaktif untuk kebutuhan edukasi, hiburan, simulasi, dan pemasaran digital.",
    detail:
      "Game dapat menjadi media pembelajaran yang menarik sekaligus sarana interaksi brand dengan audiens.",
    benefits: [
      "Game 2D dan 3D",
      "Game edukasi",
      "Game simulasi",
      "Game interaktif untuk promosi",
      "Gamification untuk aplikasi",
      "Prototipe dan konsep game",
    ],
    reverse: false,
  },
  {
    number: "04",
    category: "Immersive Technology",
    title: "Jasa Pembuatan Aplikasi AR / VR",
    description:
      "Kami memanfaatkan teknologi Augmented Reality dan Virtual Reality untuk menciptakan pengalaman digital yang interaktif dan imersif.",
    detail:
      "Solusi AR dan VR dapat diterapkan pada pendidikan, properti, pemasaran, pelatihan, serta industri kreatif.",
    benefits: [
      "Augmented Reality product preview",
      "Virtual tour",
      "Simulasi interaktif 3D",
      "Media pembelajaran AR/VR",
      "Visualisasi produk dan properti",
      "Pengalaman digital interaktif",
    ],
    reverse: true,
  },
  {
    number: "05",
    category: "Search Engine Optimization",
    title: "Jasa Penulisan Artikel SEO",
    description:
      "Kami menyediakan layanan pembuatan konten SEO berdasarkan riset keyword, search intent, struktur heading, dan strategi content marketing.",
    detail:
      "Konten dirancang untuk membantu website lebih mudah ditemukan melalui mesin pencari sekaligus memberikan informasi yang bermanfaat bagi pembaca.",
    benefits: [
      "Artikel SEO website dan blog",
      "Riset keyword",
      "Product description",
      "Landing page copywriting",
      "Content planning",
      "Optimasi konten website",
    ],
    image: "/artikel/seo-ebook.png",
    imageAlt: "Ilustrasi artikel SEO dan optimasi website",
    imageSource: "/artikel/seo-ebook.png",
    reverse: false,
  },
  {
    number: "06",
    category: "Artificial Intelligence",
    title: "AI Solutions & Automation",
    description:
      "Kami mengembangkan solusi berbasis Artificial Intelligence untuk membantu bisnis mengotomatisasi pekerjaan, mengolah data, dan meningkatkan produktivitas.",
    detail:
      "Implementasi AI disesuaikan dengan proses bisnis agar teknologi memberikan manfaat nyata dan bukan sekadar mengikuti tren.",
    benefits: [
      "AI chatbot dan virtual assistant",
      "Business process automation",
      "Workflow automation",
      "Data analysis",
      "Machine learning system",
      "Integrasi AI pada aplikasi",
    ],
    image: "/artikel/ai-services.png",
    imageAlt: "Ilustrasi layanan AI dan automation HINAI Tech",
    imageSource: "/artikel/ai-services.png",
    reverse: true,
  },
  {
    number: "07",
    category: "Creative & User Experience",
    title: "Branding, Graphic Design & UI/UX",
    description:
      "Kami membantu bisnis membangun identitas visual dan pengalaman digital yang konsisten, profesional, serta sesuai dengan karakter target pasar.",
    detail:
      "Desain yang baik bukan hanya menarik secara visual, tetapi juga memudahkan pengguna memahami produk dan mengambil tindakan.",
    benefits: [
      "Brand identity dan logo design",
      "UI/UX website dan aplikasi",
      "Company profile design",
      "Social media design",
      "Brosur dan materi promosi",
      "Desain presentasi profesional",
    ],
    reverse: false,
  },
]

function ServiceSection({
  service,
}: {
  service: (typeof services)[number]
}) {
  return (
    <section
      id={`layanan-${service.number}`}
      className="grid items-center gap-8 border-b border-gray-200 pb-14 last:border-0 md:grid-cols-2 md:gap-12"
    >
      <div className={service.reverse ? "md:order-2" : ""}>
        {service.image ? (
          <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <Image
              src={service.image}
              alt={service.imageAlt ?? service.title}
              width={1200}
              height={750}
              className="h-auto max-h-[380px] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 px-4 py-3 text-xs text-gray-500">
              <span>{service.imageAlt}</span>
              <Link
                href={service.imageSource ?? service.image}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
              >
                Lihat gambar
              </Link>
            </figcaption>
          </figure>
        ) : (
          <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-center text-white">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                HINAI Tech
              </span>
              <p className="mt-4 text-3xl font-bold">{service.category}</p>
              <p className="mt-3 text-sm text-gray-300">
                Technology • Innovation • Digital Solutions
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={service.reverse ? "md:order-1" : ""}>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-amber-600">
            {service.number}
          </span>
          <span className="h-px w-10 bg-amber-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            {service.category}
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-tight text-gray-950 md:text-3xl">
          {service.title}
        </h2>

        <p className="mt-5 leading-relaxed text-gray-600">
          {service.description}
        </p>

        <p className="mt-3 leading-relaxed text-gray-600">
          {service.detail}
        </p>

        {service.technologies && (
          <p className="mt-4 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-900">
            <strong>Teknologi:</strong> {service.technologies}
          </p>
        )}

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-bold text-gray-900">
            Cakupan layanan:
          </h3>

          <ul className="grid gap-2 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-0.5 font-bold text-amber-600">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`https://wa.me/6282144137914?text=${encodeURIComponent(
            `Halo HINAI Tech, saya ingin konsultasi mengenai ${service.title}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
        >
          Konsultasikan Layanan
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        <main className="pt-28 pb-20 md:pt-32 md:pb-28">
          <article className="mx-auto max-w-6xl px-5 md:px-8">
            {/* HEADER */}
            <header className="mx-auto mb-16 max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold tracking-wide text-amber-800">
                HINAI Tech • PT Heroic Inovasi Nusantara
              </span>

              <h1 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-gray-950 md:text-5xl">
                Layanan Digital Profesional untuk Transformasi Bisnis Modern
              </h1>

              <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                HINAI Tech adalah perusahaan teknologi di bawah PT Heroic
                Inovasi Nusantara yang berfokus pada pengembangan solusi digital
                end-to-end. Kami membantu bisnis, institusi pendidikan, dan
                organisasi mengembangkan potensi melalui website, aplikasi
                mobile, AI, AR/VR, game, SEO, serta desain digital profesional.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="#daftar-layanan"
                  className="rounded-lg bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                >
                  Jelajahi Layanan
                </Link>

                <Link
                  href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20konsultasi%20layanan%20digital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-amber-500 hover:text-amber-700"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </header>

            {/* INTRO */}
            <section className="mb-16 rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-7 text-white md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Digital Solutions
              </span>

              <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
                Satu Partner Teknologi untuk Berbagai Kebutuhan Digital Anda
              </h2>

              <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">
                Dari membangun identitas digital hingga mengembangkan sistem
                bisnis yang kompleks, HINAI Tech menghadirkan solusi yang
                dirancang berdasarkan kebutuhan dan tujuan setiap klien.
              </p>
            </section>

            {/* SERVICES */}
            <div id="daftar-layanan" className="space-y-14 scroll-mt-28">
              {services.map((service) => (
                <ServiceSection key={service.number} service={service} />
              ))}
            </div>

            {/* WHY CHOOSE US */}
            <section className="mt-20">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                  Why HINAI Tech
                </span>

                <h2 className="mt-3 text-3xl font-bold text-gray-950">
                  Mengapa Memilih HINAI Tech?
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                  Kami mengutamakan solusi yang relevan dengan kebutuhan,
                  tujuan, dan perkembangan bisnis klien.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Solusi Sesuai Kebutuhan",
                    description:
                      "Pengembangan produk dan layanan disesuaikan dengan kebutuhan setiap bisnis.",
                  },
                  {
                    title: "Teknologi Modern",
                    description:
                      "Memanfaatkan teknologi web, mobile, cloud, dan AI sesuai kebutuhan proyek.",
                  },
                  {
                    title: "Berorientasi pada Hasil",
                    description:
                      "Fokus pada manfaat, efisiensi, pengalaman pengguna, dan tujuan bisnis.",
                  },
                  {
                    title: "Desain Profesional",
                    description:
                      "Memperhatikan kualitas visual, kemudahan penggunaan, dan konsistensi brand.",
                  },
                  {
                    title: "Optimasi Digital",
                    description:
                      "Mempertimbangkan performa, keamanan, aksesibilitas, dan SEO.",
                  },
                  {
                    title: "Dukungan Berkelanjutan",
                    description:
                      "Tersedia konsultasi, pengembangan lanjutan, dan maintenance sesuai kesepakatan.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                  >
                    <span className="text-sm font-bold text-amber-600">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* BUSINESS VALUE */}
            <section className="mt-20 border-t border-gray-200 pt-14">
              <h2 className="text-2xl font-bold text-gray-950 md:text-3xl">
                Membangun Nilai Digital untuk Pertumbuhan Bisnis
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                HINAI Tech tidak hanya berfokus pada pembuatan produk digital,
                tetapi juga membantu klien membangun fondasi teknologi untuk
                pertumbuhan jangka panjang. Setiap solusi dikembangkan dengan
                mempertimbangkan kebutuhan pengguna, proses operasional,
                efisiensi, dan peluang pengembangan di masa depan.
              </p>
            </section>

            {/* CONCLUSION */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold text-gray-950 md:text-3xl">
                Partner Teknologi untuk Masa Depan Digital
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                HINAI Tech (PT Heroic Inovasi Nusantara) hadir sebagai partner
                teknologi bagi bisnis, UMKM, sekolah, startup, dan organisasi
                yang ingin berkembang di era digital. Dengan layanan mulai
                dari website, aplikasi, AI, hingga branding, kami siap
                membantu mewujudkan kebutuhan digital Anda.
              </p>
            </section>

            {/* CTA */}
            <section className="mt-20 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-12 text-center text-white md:px-12 md:py-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Let's Build Something Great
              </span>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                Siap Membangun Solusi Digital untuk Bisnis Anda?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-300">
                Ceritakan kebutuhan dan ide Anda. Tim HINAI Tech siap membantu
                mendiskusikan solusi teknologi yang tepat.
              </p>

              <Link
                href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20konsultasi%20layanan%20digital."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-lg bg-amber-400 px-8 py-4 font-bold text-gray-950 transition hover:bg-amber-300"
              >
                Konsultasi Gratis Sekarang →
              </Link>
            </section>
          </article>
        </main>
      </div>
    </LanguageProvider>
  )
}
