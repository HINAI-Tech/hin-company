
import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

const articleUrl =
  "https://hinaitech.com/blog/manfaat-video-animasi-2d-3d-promosi-pendidikan-bisnis"

const articleImage =
  "/artikel/manfaat-video-animasi-2d-3d.jpg"

const articleTitle =
  "Manfaat Video Animasi 2D dan 3D untuk Promosi, Pendidikan, dan Bisnis"

const articleDescription =
  "Pelajari manfaat video animasi 2D dan 3D untuk promosi, pendidikan, dan bisnis. Kenali perbedaan, proses produksi, contoh penerapan, serta solusi animasi dari HINAI Tech."

export const metadata: Metadata = {
  title:
    "Manfaat Video Animasi 2D dan 3D untuk Promosi, Pendidikan, dan Bisnis | HINAI Tech",
  description: articleDescription,
  keywords: [
    "video animasi 2D",
    "video animasi 3D",
    "jasa animasi 2D dan 3D",
    "manfaat video animasi",
    "animasi untuk promosi",
    "animasi untuk pendidikan",
    "video animasi bisnis",
    "motion graphics",
    "jasa video animasi",
    "pembuatan video animasi",
    "HINAI Tech",
    "PT Heroic Inovasi Nusantara",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: "article",
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "HINAI Tech",
    images: [
      {
        url: articleImage,
        width: 1200,
        height: 630,
        alt: articleTitle,
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
}

const faqItems = [
  {
    question: "Apa perbedaan animasi 2D dan 3D?",
    answer:
      "Animasi 2D menggunakan elemen visual dua dimensi yang memiliki panjang dan lebar, sedangkan animasi 3D memiliki panjang, lebar, dan kedalaman sehingga objek dapat ditampilkan dengan volume dan perspektif ruang.",
  },
  {
    question: "Apa manfaat video animasi untuk promosi bisnis?",
    answer:
      "Video animasi membantu menjelaskan produk, memperkenalkan layanan, membangun identitas visual, menyampaikan keunggulan produk, dan membuat materi promosi lebih menarik serta mudah dipahami.",
  },
  {
    question: "Apakah video animasi cocok untuk UMKM?",
    answer:
      "Ya. UMKM dapat menggunakan animasi untuk memperkenalkan produk, membuat iklan media sosial, menjelaskan cara penggunaan produk, dan membangun citra merek secara lebih konsisten.",
  },
  {
    question: "Apakah animasi 2D cocok untuk media pembelajaran?",
    answer:
      "Animasi 2D cocok untuk menjelaskan konsep, proses, ilustrasi, karakter edukatif, dan materi pembelajaran yang membutuhkan visual sederhana serta mudah diikuti.",
  },
  {
    question: "Kapan sebaiknya menggunakan animasi 3D?",
    answer:
      "Animasi 3D cocok ketika objek membutuhkan visualisasi bentuk, volume, perspektif, simulasi, detail produk, atau representasi ruang yang lebih mendalam.",
  },
  {
    question: "Apa saja tahapan pembuatan video animasi?",
    answer:
      "Tahapan umumnya meliputi konsultasi, penentuan konsep, penulisan naskah, storyboard, pembuatan aset, animasi, voice-over, sound design, rendering, editing, dan pemeriksaan kualitas.",
  },
  {
    question: "Apakah video animasi bisa digunakan untuk media sosial?",
    answer:
      "Bisa. Video animasi dapat disesuaikan untuk berbagai platform digital, seperti Instagram, TikTok, YouTube, Facebook, website, presentasi, dan media promosi lainnya.",
  },
  {
    question: "Apakah HINAI Tech menyediakan layanan animasi?",
    answer:
      "HINAI Tech memiliki cakupan layanan kreatif berupa animasi 2D dan 3D, motion graphics, desain karakter, pengolahan audio, serta proses produksi video sesuai kebutuhan proyek.",
  },
]

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleTitle,
  description: articleDescription,
  image: `https://hinaitech.com${articleImage}`,
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  author: {
    "@type": "Organization",
    name: "HINAI Tech",
    url: "https://hinaitech.com",
  },
  publisher: {
    "@type": "Organization",
    name: "HINAI Tech - PT Heroic Inovasi Nusantara",
    url: "https://hinaitech.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://hinaitech.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://hinaitech.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: articleTitle,
      item: articleUrl,
    },
  ],
}

export default function Page() {
  const jsonLd = (data: object) =>
    JSON.stringify(data).replace(/</g, "\\u003c")

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
        />

        <main className="pt-32 pb-24">
          <article className="max-w-4xl mx-auto px-6">

            {/* HERO */}
            <header className="space-y-6 mb-12">
              <span className="inline-flex px-4 py-2 rounded-full bg-black text-white text-sm">
                HINAI Tech • PT Heroic Inovasi Nusantara
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Manfaat Video Animasi 2D dan 3D untuk Promosi, Pendidikan,
                dan Bisnis
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Video animasi 2D dan 3D menjadi salah satu media komunikasi
                visual yang semakin banyak digunakan dalam dunia digital.
                Melalui perpaduan ilustrasi, gerakan, suara, dan cerita,
                animasi mampu menyampaikan informasi yang kompleks menjadi
                lebih menarik, interaktif, dan mudah dipahami. Teknologi ini
                dapat dimanfaatkan oleh pelaku UMKM, perusahaan, lembaga
                pendidikan, hingga organisasi untuk kebutuhan promosi,
                pembelajaran, presentasi, dan pengembangan identitas merek.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <span>17 November 2026</span>
                <span>•</span>
                <span>HINAI Tech</span>
                <span>•</span>
                <span>Animation & Creative Technology</span>
              </div>
            </header>

            {/* IMAGE */}
            <img
              src={articleImage}
              alt="Manfaat video animasi 2D dan 3D untuk promosi, pendidikan, dan bisnis oleh HINAI Tech"
              className="w-full rounded-2xl shadow-md mb-12"
            />

            {/* TABLE OF CONTENTS */}
            <nav className="border rounded-2xl p-6 mb-14 bg-gray-50">
              <h2 className="font-bold text-xl mb-4">
                Daftar Isi
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-blue-700">
                <li><a href="#pengertian" className="hover:underline">Pengertian Video Animasi 2D dan 3D</a></li>
                <li><a href="#perbedaan" className="hover:underline">Perbedaan Animasi 2D dan 3D</a></li>
                <li><a href="#manfaat" className="hover:underline">Manfaat Video Animasi</a></li>
                <li><a href="#promosi" className="hover:underline">Animasi untuk Promosi dan Marketing</a></li>
                <li><a href="#pendidikan" className="hover:underline">Animasi untuk Pendidikan</a></li>
                <li><a href="#bisnis" className="hover:underline">Animasi untuk Kebutuhan Bisnis</a></li>
                <li><a href="#jenis" className="hover:underline">Jenis-Jenis Video Animasi</a></li>
                <li><a href="#proses" className="hover:underline">Proses Pembuatan Video Animasi</a></li>
                <li><a href="#tools" className="hover:underline">Software dan Tools Animasi</a></li>
                <li><a href="#strategi" className="hover:underline">Strategi Menggunakan Animasi</a></li>
                <li><a href="#hinai" className="hover:underline">Layanan Animasi HINAI Tech</a></li>
                <li><a href="#faq" className="hover:underline">Pertanyaan Umum</a></li>
              </ol>
            </nav>

            {/* CONTENT */}
            <div className="space-y-10 text-gray-700 leading-relaxed text-justify">

              <section id="pengertian">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Apa Itu Video Animasi 2D dan 3D?
                </h2>

                <p className="mb-4">
                  Video animasi adalah media visual yang menampilkan rangkaian
                  gambar, objek, atau elemen grafis yang disusun sedemikian
                  rupa sehingga menghasilkan ilusi gerakan. Setiap elemen
                  dapat dirancang untuk bergerak, berubah bentuk, berinteraksi,
                  atau mengikuti alur cerita tertentu. Ketika dilengkapi
                  narasi, musik, efek suara, dan teks, animasi dapat menjadi
                  media komunikasi yang kuat untuk menyampaikan pesan.
                </p>

                <p className="mb-4">
                  Animasi tidak hanya digunakan untuk hiburan. Dalam
                  perkembangannya, teknologi ini juga dimanfaatkan dalam
                  pemasaran produk, pengenalan perusahaan, pembelajaran,
                  simulasi, presentasi, dokumentasi, hingga visualisasi
                  konsep yang sulit dijelaskan melalui tulisan saja.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  Pengertian Animasi 2D
                </h3>

                <p className="mb-4">
                  Animasi 2D atau two-dimensional animation merupakan teknik
                  animasi yang menggunakan dua dimensi, yaitu panjang dan
                  lebar. Objek ditampilkan pada bidang datar dengan gerakan
                  yang dapat dibuat melalui perubahan posisi, ukuran,
                  ekspresi, bentuk, dan urutan gambar.
                </p>

                <p className="mb-4">
                  Contoh animasi 2D dapat ditemukan pada video explainer,
                  karakter kartun, infografis bergerak, video edukasi,
                  ilustrasi proses kerja, iklan produk, dan konten media
                  sosial. Gaya visualnya dapat dibuat sederhana, minimalis,
                  ilustratif, maupun menyerupai gambar kartun yang lebih
                  kompleks.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  Pengertian Animasi 3D
                </h3>

                <p className="mb-4">
                  Animasi 3D atau three-dimensional animation adalah teknik
                  animasi yang menggunakan tiga dimensi, yaitu panjang,
                  lebar, dan kedalaman. Objek dibuat dalam bentuk model
                  digital yang memiliki volume sehingga dapat ditampilkan
                  dari berbagai sudut pandang.
                </p>

                <p>
                  Animasi 3D banyak digunakan untuk visualisasi produk,
                  arsitektur, karakter, simulasi, demonstrasi mekanisme,
                  presentasi teknologi, dan konten kreatif. Penggunaan
                  pencahayaan, tekstur, kamera, material, serta gerakan
                  membantu menghasilkan tampilan yang lebih berdimensi.
                </p>
              </section>

              <section id="perbedaan">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Perbedaan Animasi 2D dan 3D
                </h2>

                <p className="mb-4">
                  Animasi 2D dan 3D memiliki karakteristik masing-masing.
                  Pemilihan teknik sebaiknya didasarkan pada tujuan
                  komunikasi, karakter produk, target audiens, konsep visual,
                  serta kebutuhan produksi. Tidak semua proyek membutuhkan
                  animasi 3D, dan tidak semua kebutuhan dapat diselesaikan
                  dengan animasi 2D.
                </p>

                <div className="overflow-x-auto border rounded-xl">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-100 text-gray-900">
                      <tr>
                        <th className="p-4">Aspek</th>
                        <th className="p-4">Animasi 2D</th>
                        <th className="p-4">Animasi 3D</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Dimensi</td>
                        <td className="p-4">Panjang dan lebar</td>
                        <td className="p-4">Panjang, lebar, dan kedalaman</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Visual</td>
                        <td className="p-4">Ilustrasi dan bidang datar</td>
                        <td className="p-4">Objek dengan volume dan perspektif</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Karakter</td>
                        <td className="p-4">Ilustratif dan grafis</td>
                        <td className="p-4">Model digital tiga dimensi</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Kebutuhan</td>
                        <td className="p-4">Explainer, infografis, edukasi</td>
                        <td className="p-4">Visualisasi produk, objek, simulasi</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Proses</td>
                        <td className="p-4">Ilustrasi, rigging, dan animasi</td>
                        <td className="p-4">Modeling, texturing, rigging, dan rendering</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Sudut pandang</td>
                        <td className="p-4">Umumnya berbasis bidang 2D</td>
                        <td className="p-4">Kamera dapat mengelilingi objek 3D</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  Sebagai contoh, perusahaan yang ingin menjelaskan cara
                  menggunakan aplikasi dapat memilih animasi 2D berbentuk
                  motion graphics. Sementara itu, produsen yang ingin
                  memperlihatkan bentuk produk dari berbagai sisi dapat
                  mempertimbangkan animasi 3D. Keduanya dapat digunakan
                  bersama apabila proyek membutuhkan pendekatan visual yang
                  lebih beragam.
                </p>
              </section>

              <section id="manfaat">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Manfaat Video Animasi 2D dan 3D dalam Komunikasi Digital
                </h2>

                <p className="mb-4">
                  Keunggulan utama animasi terletak pada kemampuannya
                  menggabungkan informasi dengan visual bergerak. Audiens
                  tidak hanya membaca pesan, tetapi juga melihat bagaimana
                  sebuah ide, produk, atau proses bekerja. Hal ini membantu
                  penyampaian informasi menjadi lebih terstruktur dan
                  menarik.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1. Menyederhanakan Informasi yang Kompleks
                </h3>
                <p className="mb-4">
                  Beberapa konsep sulit dijelaskan melalui teks atau foto
                  statis. Misalnya, cara kerja mesin, alur aplikasi, proses
                  produksi, sistem jaringan, dan mekanisme sebuah perangkat.
                  Animasi dapat memperlihatkan tahapan tersebut melalui
                  ilustrasi gerakan dan penjelasan visual.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Membantu Menarik Perhatian Audiens
                </h3>
                <p className="mb-4">
                  Gerakan, transisi, karakter, warna, dan suara dapat
                  membantu sebuah konten tampil lebih menonjol. Dalam
                  lingkungan digital yang dipenuhi informasi, animasi
                  memberikan alternatif penyampaian pesan yang lebih
                  dinamis dibandingkan materi visual statis.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3. Meningkatkan Daya Ingat terhadap Pesan
                </h3>
                <p className="mb-4">
                  Informasi yang disusun melalui cerita dan visual dapat
                  membantu audiens menghubungkan konsep dengan contoh yang
                  mudah dikenali. Karakter, simbol, warna, dan alur cerita
                  juga dapat menjadi elemen pengingat terhadap pesan yang
                  ingin disampaikan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  4. Membangun Identitas Visual
                </h3>
                <p className="mb-4">
                  Animasi dapat menggunakan warna, logo, karakter, tipografi,
                  dan gaya visual yang konsisten dengan identitas sebuah
                  merek. Dengan demikian, video tidak hanya menyampaikan
                  informasi, tetapi juga membantu membangun karakter visual
                  perusahaan atau organisasi.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5. Fleksibel untuk Berbagai Platform
                </h3>
                <p>
                  Video animasi dapat disesuaikan dengan kebutuhan website,
                  media sosial, presentasi, layar informasi, marketplace,
                  hingga media pembelajaran. Format, rasio layar, durasi,
                  dan komposisi dapat direncanakan sesuai tempat publikasi.
                </p>
              </section>

              <section id="promosi">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Manfaat Video Animasi untuk Promosi dan Digital Marketing
                </h2>

                <p className="mb-4">
                  Dalam kegiatan pemasaran, perusahaan perlu menjelaskan
                  produk dan layanan secara cepat tanpa menghilangkan
                  informasi penting. Video animasi dapat menjadi media
                  promosi yang membantu memperkenalkan manfaat produk,
                  menjelaskan keunggulan layanan, dan membangun kesan
                  profesional.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Promosi Produk dan Jasa
                </h3>
                <p className="mb-4">
                  Animasi dapat memperlihatkan fitur, manfaat, cara
                  penggunaan, serta keunikan produk. Untuk layanan yang
                  tidak memiliki bentuk fisik, seperti software, konsultasi,
                  platform digital, dan sistem informasi, animasi dapat
                  membantu memberikan gambaran tentang cara kerja layanan
                  tersebut.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Video Explainer untuk Memperkenalkan Bisnis
                </h3>
                <p className="mb-4">
                  Video explainer merupakan video singkat yang menjelaskan
                  suatu produk, layanan, atau konsep. Format ini dapat
                  digunakan pada halaman utama website, landing page,
                  presentasi perusahaan, dan media sosial.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Konten Media Sosial
                </h3>
                <p className="mb-4">
                  Animasi dapat dikembangkan menjadi konten pendek untuk
                  Instagram Reels, TikTok, YouTube Shorts, dan Facebook.
                  Konten dapat berupa pengenalan produk, tips, demonstrasi
                  singkat, pengumuman, maupun cerita tentang merek.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Iklan Digital dan Campaign
                </h3>
                <p className="mb-4">
                  Dalam kampanye pemasaran, animasi dapat digunakan untuk
                  menyampaikan pesan utama, menampilkan penawaran, dan
                  mengarahkan audiens pada tindakan tertentu. Pesan iklan
                  perlu dibuat jelas, relevan dengan target pasar, dan
                  memiliki ajakan bertindak yang sesuai.
                </p>

                <div className="overflow-x-auto border rounded-xl mt-6">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Kebutuhan Promosi</th>
                        <th className="p-4">Konsep Animasi</th>
                        <th className="p-4">Tujuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">Pengenalan produk</td>
                        <td className="p-4">Product explainer</td>
                        <td className="p-4">Menjelaskan fungsi dan manfaat produk</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Brand awareness</td>
                        <td className="p-4">Logo animation</td>
                        <td className="p-4">Memperkuat identitas merek</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Promosi media sosial</td>
                        <td className="p-4">Motion graphics</td>
                        <td className="p-4">Menyampaikan pesan secara dinamis</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Pengenalan layanan</td>
                        <td className="p-4">Animated explainer</td>
                        <td className="p-4">Membantu audiens memahami layanan</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Peluncuran produk</td>
                        <td className="p-4">Product animation</td>
                        <td className="p-4">Memperlihatkan detail dan konsep produk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="pendidikan">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Manfaat Video Animasi untuk Pendidikan dan Pembelajaran
                </h2>

                <p className="mb-4">
                  Dunia pendidikan membutuhkan media yang dapat membantu
                  peserta didik memahami materi secara bertahap. Tidak
                  semua konsep dapat dipahami dengan mudah melalui
                  penjelasan lisan dan buku teks. Animasi dapat menjadi
                  pendukung pembelajaran karena memungkinkan pendidik
                  memperlihatkan proses, objek, dan ilustrasi secara visual.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Menjelaskan Materi yang Abstrak
                </h3>
                <p className="mb-4">
                  Materi seperti sistem tata surya, struktur sel, proses
                  fotosintesis, jaringan komputer, aliran listrik, dan
                  mekanisme mesin dapat divisualisasikan menggunakan
                  animasi. Peserta didik dapat melihat urutan proses yang
                  sebelumnya hanya dijelaskan melalui teori.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mendukung Pembelajaran Interaktif
                </h3>
                <p className="mb-4">
                  Video animasi dapat dikombinasikan dengan pertanyaan,
                  simulasi, ilustrasi, dan latihan. Pendidik dapat
                  menghentikan video pada bagian tertentu untuk menjelaskan
                  konsep atau mengajak peserta didik mendiskusikan proses
                  yang sedang ditampilkan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Media Pembelajaran untuk Sekolah dan Lembaga Pelatihan
                </h3>
                <p className="mb-4">
                  Sekolah, SMK, perguruan tinggi, lembaga kursus, dan
                  lembaga pelatihan dapat memanfaatkan animasi untuk
                  menjelaskan materi teori maupun praktik. Misalnya,
                  pengenalan perangkat komputer, keselamatan kerja,
                  prosedur penggunaan alat, dasar pemrograman, dan
                  pengenalan teknologi.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mendukung Materi Digital dan E-Learning
                </h3>
                <p className="mb-4">
                  Materi animasi dapat dimasukkan ke dalam LMS, website
                  pembelajaran, presentasi, modul digital, dan kelas daring.
                  Dengan perencanaan yang tepat, video dapat digunakan
                  kembali sebagai bahan belajar mandiri maupun materi
                  pendukung kegiatan tatap muka.
                </p>

                <div className="overflow-x-auto border rounded-xl">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Bidang Pendidikan</th>
                        <th className="p-4">Contoh Video Animasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">IPA dan Biologi</td>
                        <td className="p-4">Sistem organ, sel, dan proses fotosintesis</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Teknologi Informasi</td>
                        <td className="p-4">Jaringan komputer dan cara kerja perangkat</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Teknik Otomotif</td>
                        <td className="p-4">Komponen mesin dan mekanisme kendaraan</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Keselamatan Kerja</td>
                        <td className="p-4">Prosedur keselamatan dan penggunaan alat</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Pendidikan Anak</td>
                        <td className="p-4">Cerita edukatif dan pengenalan konsep dasar</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Pelatihan Profesional</td>
                        <td className="p-4">Simulasi prosedur dan panduan kerja</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="bisnis">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Manfaat Video Animasi untuk Bisnis dan Perusahaan
                </h2>

                <p className="mb-4">
                  Bagi perusahaan, animasi bukan hanya materi promosi.
                  Media ini dapat digunakan untuk komunikasi internal,
                  pengenalan sistem, pelatihan karyawan, dokumentasi
                  prosedur, dan presentasi kepada calon mitra. Penggunaan
                  animasi dapat membantu perusahaan menyampaikan informasi
                  secara lebih konsisten.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1. Memperkenalkan Profil Perusahaan
                </h3>
                <p className="mb-4">
                  Company profile berbentuk animasi dapat memperkenalkan
                  sejarah, visi, misi, layanan, proses kerja, dan keunggulan
                  perusahaan. Materi tersebut dapat digunakan ketika
                  presentasi, pameran, pertemuan bisnis, atau ditampilkan
                  pada website perusahaan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Menjelaskan Produk yang Kompleks
                </h3>
                <p className="mb-4">
                  Perusahaan yang menawarkan produk teknologi, perangkat
                  industri, software, atau sistem digital dapat menggunakan
                  animasi untuk memperlihatkan cara kerja dan fungsi produk.
                  Visualisasi ini membantu calon pelanggan memperoleh
                  gambaran sebelum melakukan pembelian atau menggunakan
                  layanan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3. Mendukung Pelatihan Karyawan
                </h3>
                <p className="mb-4">
                  Animasi dapat digunakan untuk menjelaskan SOP, prosedur
                  operasional, penggunaan peralatan, dan aturan keselamatan.
                  Materi visual dapat membantu proses orientasi karyawan
                  maupun pelatihan internal.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  4. Membantu Presentasi dan Komunikasi Bisnis
                </h3>
                <p className="mb-4">
                  Dalam presentasi, animasi dapat digunakan untuk
                  memperlihatkan alur sistem, proses produksi, rancangan
                  produk, atau gambaran suatu solusi. Penyampaian informasi
                  menjadi lebih terarah karena audiens dapat mengikuti
                  tahapan yang ditampilkan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5. Membangun Citra Profesional
                </h3>
                <p>
                  Video yang dirancang dengan konsep visual konsisten,
                  narasi yang jelas, dan kualitas produksi yang sesuai
                  dapat mendukung citra profesional perusahaan. Identitas
                  merek dapat diterapkan melalui warna, logo, karakter,
                  gaya ilustrasi, dan elemen grafis.
                </p>
              </section>

              <section id="jenis">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Jenis-Jenis Video Animasi yang Dapat Digunakan
                </h2>

                <p className="mb-4">
                  Istilah animasi mencakup berbagai pendekatan visual.
                  Setiap jenis memiliki fungsi dan karakteristik yang
                  berbeda. Berikut beberapa jenis video animasi yang
                  dapat dipertimbangkan untuk kebutuhan promosi,
                  pendidikan, dan bisnis.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1. 2D Character Animation
                </h3>
                <p className="mb-4">
                  Animasi karakter 2D menggunakan tokoh atau karakter
                  ilustratif yang bergerak mengikuti alur cerita. Jenis ini
                  cocok untuk video edukasi, cerita promosi, kampanye
                  sosial, dan konten yang membutuhkan pendekatan
                  komunikatif.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Motion Graphics
                </h3>
                <p className="mb-4">
                  Motion graphics merupakan animasi yang berfokus pada
                  elemen grafis seperti teks, ikon, bentuk, angka, garis,
                  dan ilustrasi. Jenis ini sering digunakan untuk video
                  informasi, presentasi, infografis bergerak, dan iklan
                  digital.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3. Explainer Video
                </h3>
                <p className="mb-4">
                  Explainer video dirancang untuk menjelaskan suatu
                  konsep, produk, atau layanan secara ringkas dan
                  terstruktur. Video biasanya menggabungkan narasi,
                  ilustrasi, teks, dan animasi untuk membantu audiens
                  memahami informasi utama.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  4. 3D Product Animation
                </h3>
                <p className="mb-4">
                  Animasi produk 3D menampilkan model digital sebuah
                  produk dari berbagai sudut. Jenis ini dapat digunakan
                  untuk memperlihatkan bentuk, komponen, fitur, dan
                  detail produk yang sulit ditampilkan melalui foto biasa.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5. 3D Modeling and Animation
                </h3>
                <p className="mb-4">
                  Jenis ini melibatkan pembuatan objek tiga dimensi
                  kemudian menggerakkannya sesuai kebutuhan. Penerapannya
                  dapat mencakup visualisasi objek, demonstrasi mekanisme,
                  karakter 3D, dan simulasi sederhana.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  6. Logo Animation
                </h3>
                <p>
                  Logo animation memberikan gerakan pada identitas logo
                  perusahaan atau organisasi. Animasi ini dapat digunakan
                  sebagai pembuka atau penutup video, bumper konten,
                  presentasi, dan materi branding digital.
                </p>
              </section>

              <section id="proses">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Tahapan Proses Pembuatan Video Animasi 2D dan 3D
                </h2>

                <p className="mb-4">
                  Video animasi yang baik membutuhkan perencanaan.
                  Proses produksi tidak hanya berfokus pada gerakan
                  objek, tetapi juga memastikan pesan, visual, suara,
                  dan alur cerita saling mendukung. Berikut tahapan
                  umum produksi video animasi.
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Konsultasi dan identifikasi kebutuhan.</strong>
                    <p>
                      Tahap awal dilakukan untuk memahami tujuan video,
                      target audiens, pesan utama, platform publikasi,
                      durasi, serta referensi visual yang diinginkan.
                    </p>
                  </li>
                  <li>
                    <strong>Penentuan konsep dan penulisan naskah.</strong>
                    <p>
                      Konsep dikembangkan menjadi alur komunikasi yang
                      jelas. Naskah berisi narasi, dialog, informasi
                      utama, dan ajakan bertindak apabila diperlukan.
                    </p>
                  </li>
                  <li>
                    <strong>Pembuatan storyboard.</strong>
                    <p>
                      Storyboard menggambarkan urutan adegan, komposisi
                      visual, posisi karakter, teks, gerakan kamera,
                      dan perpindahan antaradegan. Tahap ini membantu
                      menyamakan pemahaman sebelum animasi diproduksi.
                    </p>
                  </li>
                  <li>
                    <strong>Pembuatan aset visual.</strong>
                    <p>
                      Aset dapat berupa karakter, latar belakang,
                      ilustrasi, ikon, objek, model 3D, tekstur,
                      dan elemen grafis lain sesuai konsep proyek.
                    </p>
                  </li>
                  <li>
                    <strong>Proses animasi.</strong>
                    <p>
                      Aset kemudian dianimasikan melalui pengaturan
                      gerakan, posisi, rotasi, ekspresi, transisi,
                      kamera, dan elemen visual lainnya.
                    </p>
                  </li>
                  <li>
                    <strong>Voice-over dan sound design.</strong>
                    <p>
                      Narasi, musik, dan efek suara ditambahkan
                      untuk memperkuat suasana serta membantu
                      penyampaian pesan.
                    </p>
                  </li>
                  <li>
                    <strong>Rendering dan editing.</strong>
                    <p>
                      Adegan yang telah dibuat dirender menjadi
                      video, kemudian disusun dan disempurnakan
                      melalui proses editing.
                    </p>
                  </li>
                  <li>
                    <strong>Quality control dan penyerahan hasil.</strong>
                    <p>
                      Video diperiksa dari sisi visual, audio,
                      teks, transisi, durasi, dan kesesuaian
                      dengan kebutuhan proyek sebelum diserahkan.
                    </p>
                  </li>
                </ol>
              </section>

              <section id="tools">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Software dan Tools untuk Membuat Animasi 2D dan 3D
                </h2>

                <p className="mb-4">
                  Produksi animasi dapat menggunakan berbagai software
                  sesuai jenis proyek, kompleksitas visual, dan
                  keterampilan tim produksi. Setiap aplikasi memiliki
                  fungsi yang berbeda dan dapat digunakan secara
                  terintegrasi.
                </p>

                <div className="overflow-x-auto border rounded-xl">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Software</th>
                        <th className="p-4">Fungsi</th>
                        <th className="p-4">Penerapan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Adobe Animate</td>
                        <td className="p-4">Produksi animasi 2D</td>
                        <td className="p-4">Karakter dan ilustrasi bergerak</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Blender</td>
                        <td className="p-4">3D modeling dan animation</td>
                        <td className="p-4">Objek, karakter, dan visualisasi 3D</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">After Effects</td>
                        <td className="p-4">Motion graphics dan visual effects</td>
                        <td className="p-4">Grafis bergerak dan efek visual</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Illustrator</td>
                        <td className="p-4">Desain grafis vektor</td>
                        <td className="p-4">Karakter dan aset ilustrasi</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Photoshop</td>
                        <td className="p-4">Pengolahan gambar</td>
                        <td className="p-4">Aset visual dan tekstur</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Audacity</td>
                        <td className="p-4">Pengolahan audio</td>
                        <td className="p-4">Voice-over dan sound editing</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Premiere Pro</td>
                        <td className="p-4">Video editing</td>
                        <td className="p-4">Penyusunan dan penyempurnaan video</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">DaVinci Resolve</td>
                        <td className="p-4">Editing dan color grading</td>
                        <td className="p-4">Penyempurnaan tampilan video</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Canva dan Figma</td>
                        <td className="p-4">Perencanaan visual dan desain</td>
                        <td className="p-4">Storyboard, layout, dan konsep</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  Penggunaan software tidak harus selalu sama pada setiap
                  proyek. Tim produksi dapat memilih kombinasi aplikasi
                  berdasarkan kebutuhan visual dan hasil akhir yang
                  ditargetkan.
                </p>
              </section>

              <section id="strategi">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Strategi Menggunakan Video Animasi agar Lebih Efektif
                </h2>

                <p className="mb-4">
                  Memiliki video animasi saja belum tentu cukup untuk
                  mencapai tujuan promosi atau pembelajaran. Konten
                  perlu dirancang dengan strategi yang sesuai agar
                  pesan dapat diterima oleh audiens yang tepat.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kenali Target Audiens
                </h3>
                <p className="mb-4">
                  Tentukan siapa yang akan menonton video. Gaya animasi
                  untuk anak-anak tentu berbeda dengan video untuk
                  profesional, pelanggan perusahaan, atau peserta
                  pelatihan. Bahasa, warna, karakter, dan tingkat
                  kompleksitas informasi perlu disesuaikan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tentukan Tujuan Utama Video
                </h3>
                <p className="mb-4">
                  Apakah video dibuat untuk mengenalkan produk,
                  meningkatkan pemahaman, menjelaskan layanan,
                  atau memperkenalkan perusahaan? Tujuan yang jelas
                  membantu menentukan alur cerita dan pesan yang
                  harus ditonjolkan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Buat Naskah yang Terstruktur
                </h3>
                <p className="mb-4">
                  Hindari memasukkan terlalu banyak informasi dalam
                  satu video. Susun materi berdasarkan urutan yang
                  mudah diikuti, gunakan kalimat yang jelas, dan
                  fokus pada informasi paling penting.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sesuaikan Durasi dan Format
                </h3>
                <p className="mb-4">
                  Durasi video perlu disesuaikan dengan kompleksitas
                  materi dan platform publikasi. Konten media sosial
                  biasanya membutuhkan penyampaian yang ringkas,
                  sedangkan video pelatihan dapat memiliki durasi
                  lebih panjang apabila materinya membutuhkan
                  penjelasan mendalam.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Perhatikan Kualitas Audio dan Visual
                </h3>
                <p className="mb-4">
                  Narasi yang sulit didengar atau teks yang terlalu
                  kecil dapat mengurangi efektivitas video. Pastikan
                  suara jelas, tulisan mudah dibaca, gerakan tidak
                  membingungkan, dan visual mendukung pesan utama.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Gunakan Ajakan Bertindak
                </h3>
                <p>
                  Untuk kebutuhan pemasaran, tambahkan ajakan
                  bertindak yang relevan seperti mengunjungi website,
                  menghubungi tim penjualan, melihat katalog, atau
                  mempelajari informasi produk lebih lanjut.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Contoh Penerapan Animasi Berdasarkan Jenis Organisasi
                </h2>

                <p className="mb-4">
                  Kebutuhan animasi dapat berbeda pada setiap sektor.
                  Berikut gambaran penerapan yang dapat dikembangkan
                  sesuai karakter organisasi.
                </p>

                <div className="overflow-x-auto border rounded-xl">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Pengguna</th>
                        <th className="p-4">Kebutuhan</th>
                        <th className="p-4">Contoh Hasil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">UMKM</td>
                        <td className="p-4">Promosi produk</td>
                        <td className="p-4">Video iklan dan product explainer</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Sekolah</td>
                        <td className="p-4">Media pembelajaran</td>
                        <td className="p-4">Video edukasi dan ilustrasi materi</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Perguruan Tinggi</td>
                        <td className="p-4">Presentasi akademik</td>
                        <td className="p-4">Visualisasi konsep dan penelitian</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Perusahaan</td>
                        <td className="p-4">Branding dan komunikasi</td>
                        <td className="p-4">Company profile dan logo animation</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Startup</td>
                        <td className="p-4">Pengenalan produk digital</td>
                        <td className="p-4">App explainer dan product demo</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Lembaga Pelatihan</td>
                        <td className="p-4">Panduan dan prosedur</td>
                        <td className="p-4">Video tutorial dan simulasi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Kesalahan yang Perlu Dihindari dalam Pembuatan Video Animasi
                </h2>

                <p className="mb-4">
                  Agar hasil produksi sesuai kebutuhan, ada beberapa
                  kesalahan yang perlu diperhatikan sejak tahap
                  perencanaan.
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Tidak memiliki tujuan yang jelas.</strong>
                    Video dibuat tanpa menentukan pesan utama dan
                    target audiens sehingga hasilnya kurang terarah.
                  </li>
                  <li>
                    <strong>Terlalu banyak informasi.</strong>
                    Semua informasi dimasukkan sekaligus sehingga
                    audiens kesulitan memahami pesan utama.
                  </li>
                  <li>
                    <strong>Visual tidak konsisten.</strong>
                    Warna, karakter, tipografi, dan gaya desain
                    berubah-ubah tanpa konsep yang jelas.
                  </li>
                  <li>
                    <strong>Gerakan berlebihan.</strong>
                    Efek dan transisi digunakan terlalu banyak
                    sehingga mengganggu fokus audiens.
                  </li>
                  <li>
                    <strong>Mengabaikan kualitas audio.</strong>
                    Suara narasi, musik, dan efek tidak seimbang
                    atau sulit didengar.
                  </li>
                  <li>
                    <strong>Tidak memperhatikan platform publikasi.</strong>
                    Format video tidak disesuaikan dengan kebutuhan
                    website, media sosial, atau layar presentasi.
                  </li>
                  <li>
                    <strong>Tidak melakukan pemeriksaan akhir.</strong>
                    Kesalahan teks, logo, audio, dan visual dapat
                    terlewat apabila video tidak diperiksa sebelum
                    dipublikasikan.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Bagaimana Mengukur Keberhasilan Video Animasi?
                </h2>

                <p className="mb-4">
                  Keberhasilan video animasi perlu dinilai berdasarkan
                  tujuan pembuatannya. Video promosi memiliki indikator
                  yang berbeda dengan video pembelajaran. Karena itu,
                  evaluasi sebaiknya menggunakan ukuran yang relevan
                  dengan kebutuhan proyek.
                </p>

                <div className="overflow-x-auto border rounded-xl">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Tujuan</th>
                        <th className="p-4">Indikator Evaluasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">Promosi</td>
                        <td className="p-4">Jangkauan, tayangan, interaksi, dan klik</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Penjualan</td>
                        <td className="p-4">Pertanyaan pelanggan dan konversi</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Pendidikan</td>
                        <td className="p-4">Pemahaman materi dan hasil evaluasi</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Branding</td>
                        <td className="p-4">Pengenalan merek dan respons audiens</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Pelatihan</td>
                        <td className="p-4">Pemahaman prosedur dan penerapan materi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  Evaluasi tidak cukup hanya melihat jumlah penayangan.
                  Perhatikan apakah audiens memahami pesan, melakukan
                  tindakan yang diharapkan, atau mampu menerapkan
                  informasi yang disampaikan.
                </p>
              </section>

              <section id="hinai">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Layanan Video Animasi 2D dan 3D dari HINAI Tech
                </h2>

                <p className="mb-4">
                  HINAI Tech merupakan bagian dari PT Heroic Inovasi
                  Nusantara yang berfokus pada solusi digital, teknologi,
                  dan kreativitas. Dalam bidang creative technology,
                  animasi 2D dan 3D dapat dimanfaatkan untuk membantu
                  bisnis, lembaga pendidikan, organisasi, dan individu
                  menyampaikan informasi melalui media visual.
                </p>

                <p className="mb-4">
                  Produksi animasi perlu diawali dengan pemahaman
                  kebutuhan. Setiap proyek memiliki tujuan yang berbeda,
                  mulai dari video promosi produk, media pembelajaran,
                  visualisasi konsep, hingga konten kreatif untuk
                  kebutuhan digital.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cakupan Pekerjaan Animasi
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Storyboard dan Konsep
                    </h4>
                    <p>
                      Perencanaan alur cerita, urutan adegan, komposisi
                      visual, dan konsep menggunakan tools seperti
                      Canva atau Figma.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Animasi 2D
                    </h4>
                    <p>
                      Pembuatan ilustrasi bergerak, karakter, adegan,
                      dan elemen visual menggunakan Adobe Animate.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      3D Modeling dan Animation
                    </h4>
                    <p>
                      Pembuatan objek digital tiga dimensi, pengaturan
                      material, pencahayaan, kamera, dan animasi
                      menggunakan Blender.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Motion Graphics
                    </h4>
                    <p>
                      Pengembangan teks bergerak, elemen grafis,
                      transisi, dan efek visual menggunakan
                      After Effects.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Character Design
                    </h4>
                    <p>
                      Pembuatan karakter dan aset visual menggunakan
                      aplikasi desain seperti Illustrator dan Photoshop.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Voice-over dan Audio
                    </h4>
                    <p>
                      Pengolahan narasi, musik, dan efek suara
                      menggunakan tools audio seperti Audacity.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Rendering dan Editing
                    </h4>
                    <p>
                      Penyusunan adegan, rendering, penyempurnaan
                      video, dan pemeriksaan kualitas akhir.
                    </p>
                  </div>

                  <div className="border rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Penyerahan Hasil
                    </h4>
                    <p>
                      Penyerahan hasil produksi sesuai kesepakatan
                      proyek, termasuk file video dan aset atau
                      file kerja apabila termasuk dalam ruang lingkup.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                  Siapa yang Dapat Memanfaatkan Layanan Ini?
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>UMKM dan pemilik usaha yang membutuhkan video promosi.</li>
                  <li>Perusahaan yang ingin memperkenalkan produk dan layanan.</li>
                  <li>Sekolah dan lembaga pendidikan yang membutuhkan media pembelajaran.</li>
                  <li>Mahasiswa dan pendidik yang membutuhkan visualisasi materi.</li>
                  <li>Startup yang ingin menjelaskan produk atau aplikasi digital.</li>
                  <li>Organisasi yang membutuhkan konten kampanye dan informasi.</li>
                  <li>Individu dan kreator yang membutuhkan konten animasi.</li>
                </ul>

                <p className="mt-5">
                  Untuk mengetahui informasi lebih lanjut mengenai
                  layanan dan solusi digital, kunjungi website resmi
                  <Link
                    href="https://hinaitech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    {" "}HINAI Tech
                  </Link>.
                  Anda juga dapat menghubungi tim HINAI Tech untuk
                  mendiskusikan kebutuhan proyek, konsep video,
                  ruang lingkup pekerjaan, dan hasil yang diharapkan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Checklist Sebelum Memesan Video Animasi
                </h2>

                <p className="mb-4">
                  Sebelum memulai produksi, siapkan informasi berikut
                  agar kebutuhan proyek lebih mudah dipahami dan
                  proses pengerjaan lebih terarah.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Tentukan tujuan pembuatan video",
                    "Kenali target audiens",
                    "Siapkan informasi produk atau materi",
                    "Tentukan pilihan animasi 2D atau 3D",
                    "Siapkan logo dan identitas visual",
                    "Tentukan perkiraan durasi video",
                    "Siapkan referensi gaya visual",
                    "Tentukan platform publikasi",
                    "Diskusikan kebutuhan narasi dan audio",
                    "Sepakati ruang lingkup revisi",
                    "Tentukan format file akhir",
                    "Periksa hasil sebelum publikasi",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border rounded-xl p-4 flex gap-3 items-start"
                    >
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Pertanyaan Umum tentang Video Animasi 2D dan 3D
                </h2>

                <div className="space-y-6">
                  {faqItems.map((item) => (
                    <div key={item.question} className="border-b pb-5">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Kesimpulan
                </h2>

                <p className="mb-4">
                  Video animasi 2D dan 3D merupakan media komunikasi
                  visual yang memiliki banyak manfaat untuk promosi,
                  pendidikan, dan bisnis. Animasi 2D dapat digunakan
                  untuk ilustrasi, karakter, infografis, dan penjelasan
                  konsep, sedangkan animasi 3D membantu menampilkan
                  objek dengan volume, perspektif, dan detail visual
                  yang lebih mendalam.
                </p>

                <p className="mb-4">
                  Dalam promosi, animasi membantu memperkenalkan produk,
                  menjelaskan layanan, dan membangun identitas merek.
                  Dalam pendidikan, animasi dapat mendukung pemahaman
                  materi melalui visualisasi konsep. Sementara itu,
                  dalam bisnis, animasi dapat digunakan untuk company
                  profile, presentasi, pelatihan, dan komunikasi
                  internal.
                </p>

                <p>
                  Agar hasilnya efektif, proses pembuatan animasi harus
                  dimulai dengan tujuan yang jelas, konsep yang sesuai,
                  naskah terstruktur, storyboard, produksi visual,
                  pengolahan audio, dan pemeriksaan kualitas. Dengan
                  perencanaan yang tepat, video animasi dapat menjadi
                  bagian penting dari strategi komunikasi dan
                  transformasi digital organisasi.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-10 border rounded-2xl bg-gray-50 text-center">
              <span className="text-sm font-semibold text-blue-700">
                HINAI Tech • Animation & Creative Technology
              </span>

              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Wujudkan Ide Anda Menjadi Video Animasi yang Menarik
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Butuh video animasi 2D, animasi 3D, motion graphics,
                video promosi, atau media pembelajaran? Diskusikan
                kebutuhan proyek Anda bersama HINAI Tech.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">
                <Link
                  href="https://wa.me/6282144137914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
                >
                  Konsultasi melalui WhatsApp
                </Link>

                <Link
                  href="https://hinaitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-gray-300 rounded-xl font-semibold hover:bg-white transition"
                >
                  Kunjungi HINAI Tech
                </Link>
              </div>
            </div>

            {/* ARTICLE FOOTER */}
            <footer className="mt-12 pt-8 border-t text-sm text-gray-500">
              <p>
                Artikel ini diterbitkan oleh HINAI Tech – PT Heroic
                Inovasi Nusantara sebagai bagian dari edukasi teknologi,
                animasi, kreativitas digital, dan transformasi bisnis.
              </p>
              <p className="mt-2">
                Website:{" "}
                <Link
                  href="https://hinaitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  hinaitech.com
                </Link>
              </p>
            </footer>

          </article>
        </main>
      </div>
    </LanguageProvider>
  )
}
