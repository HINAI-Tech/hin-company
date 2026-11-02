
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ClipboardList,
  Code2,
  Compass,
  FileCheck2,
  Layers3,
  MessageSquare,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
  Clock3,
  BookOpen,
  MonitorCheck,
  Handshake,
  BarChart3,
  Lightbulb,
  Settings,
  PackageCheck,
  Headphones,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: "How We Work & Project Methodology | HINAI Tech",
  description:
    "Pelajari bagaimana HINAI Tech menjalankan proyek digital menggunakan Agile dan Scrum, mulai dari konsultasi, perencanaan, desain, pengembangan, pengujian, peluncuran, hingga maintenance.",
  alternates: {
    canonical: "https://hinaitech.com/methodology",
  },
}

type Service = {
  name: string
  method: "Agile" | "Scrum"
  focus: string
  activities: string[]
  deliverables: string[]
}

type ServiceCategory = {
  number: string
  title: string
  description: string
  services: Service[]
}

const serviceCategories: ServiceCategory[] = [
  {
    number: "01",
    title: "Website & Web Application Development",
    description:
      "Pengembangan website bisnis, platform digital, sistem berbasis web, dan aplikasi yang mendukung proses operasional organisasi.",
    services: [
      {
        name: "Company Profile Website",
        method: "Agile",
        focus: "Membangun website perusahaan yang menjelaskan profil, layanan, keunggulan, portofolio, dan informasi kontak.",
        activities: [
          "Mengumpulkan profil perusahaan, informasi layanan, identitas merek, dan referensi website.",
          "Menyusun sitemap, struktur halaman, dan urutan informasi.",
          "Membuat wireframe dan rancangan visual halaman utama serta halaman pendukung.",
          "Mengembangkan halaman, navigasi, formulir kontak, dan integrasi WhatsApp.",
          "Mengoptimalkan tampilan desktop dan mobile, kecepatan, serta SEO dasar.",
          "Melakukan review bersama klien dan menyelesaikan revisi sesuai ruang lingkup.",
        ],
        deliverables: [
          "Website company profile yang dapat diakses publik.",
          "Halaman profil, layanan, portofolio, dan kontak sesuai kesepakatan.",
          "Dokumentasi akses dan panduan pengelolaan dasar.",
        ],
      },
      {
        name: "Personal Website & Portfolio",
        method: "Agile",
        focus: "Membangun identitas digital profesional untuk individu, tenaga ahli, kreator, dan profesional.",
        activities: [
          "Mengumpulkan biodata, keahlian, pengalaman, pencapaian, dan karya.",
          "Menentukan struktur halaman profil, pengalaman, portofolio, dan kontak.",
          "Menyusun desain yang mencerminkan karakter profesional pemilik.",
          "Mengimplementasikan website responsif dan mengisi konten.",
          "Memeriksa tautan, tampilan perangkat, performa, dan metadata.",
          "Melakukan persetujuan akhir bersama klien.",
        ],
        deliverables: [
          "Website personal atau portfolio.",
          "Halaman profil dan karya.",
          "Panduan pembaruan konten dasar.",
        ],
      },
      {
        name: "Business Website",
        method: "Agile",
        focus: "Menyediakan website bisnis untuk memperkuat kehadiran digital dan komunikasi dengan pelanggan.",
        activities: [
          "Menganalisis model bisnis, target pelanggan, dan tujuan website.",
          "Menyusun struktur produk, layanan, informasi bisnis, dan kontak.",
          "Membuat desain halaman berdasarkan identitas bisnis.",
          "Mengembangkan halaman dan fitur yang disepakati.",
          "Mengoptimalkan responsivitas, formulir, SEO dasar, dan performa.",
          "Melakukan pengujian dan persetujuan klien.",
        ],
        deliverables: [
          "Website bisnis siap digunakan.",
          "Halaman informasi dan layanan.",
          "Integrasi kontak sesuai ruang lingkup.",
        ],
      },
      {
        name: "E-Commerce / Online Store",
        method: "Scrum",
        focus: "Membangun toko online dengan katalog, keranjang, transaksi, dan pengelolaan pesanan.",
        activities: [
          "Menganalisis alur belanja, jenis produk, variasi, stok, dan kebutuhan transaksi.",
          "Menyusun Product Backlog untuk katalog, akun, keranjang, checkout, pembayaran, dan pesanan.",
          "Membuat desain pengalaman belanja dan dashboard pengelola.",
          "Mengembangkan modul secara bertahap melalui sprint.",
          "Mengintegrasikan pembayaran, pengiriman, notifikasi, atau layanan eksternal sesuai kesepakatan.",
          "Menguji alur pembelian dari pemilihan produk hingga penyelesaian pesanan.",
        ],
        deliverables: [
          "Platform e-commerce sesuai ruang lingkup.",
          "Dashboard pengelolaan produk dan pesanan.",
          "Dokumentasi penggunaan dan pengelolaan.",
        ],
      },
      {
        name: "Web Application Development",
        method: "Scrum",
        focus: "Mengembangkan aplikasi berbasis web dengan fitur, pengguna, hak akses, dan proses bisnis tertentu.",
        activities: [
          "Mengidentifikasi pengguna, proses bisnis, kebutuhan fungsional, dan kebutuhan nonfungsional.",
          "Menyusun spesifikasi kebutuhan, arsitektur, database, dan Product Backlog.",
          "Membuat wireframe, UI, dan rancangan alur pengguna.",
          "Mengembangkan modul backend, frontend, database, dan API melalui sprint.",
          "Melakukan integrasi dan pengujian setiap modul.",
          "Melaksanakan Sprint Review, UAT, perbaikan, dan deployment.",
        ],
        deliverables: [
          "Aplikasi web sesuai spesifikasi.",
          "Database dan modul aplikasi.",
          "Dokumentasi teknis dan panduan pengguna.",
        ],
      },
      {
        name: "SaaS Development",
        method: "Scrum",
        focus: "Membangun perangkat lunak berbasis layanan dengan pengelolaan akun, tenant, paket, dan langganan.",
        activities: [
          "Menganalisis model SaaS, tipe pelanggan, tenant, paket, dan hak akses.",
          "Menyusun backlog untuk autentikasi, tenant, subscription, billing, dan fitur utama.",
          "Merancang arsitektur multi-tenant, isolasi data, dan keamanan.",
          "Mengembangkan fondasi produk dan fitur melalui sprint.",
          "Menguji skenario registrasi, penggunaan paket, pembatasan fitur, dan masa aktif.",
          "Melakukan UAT, deployment, dan persiapan operasional produk.",
        ],
        deliverables: [
          "Produk SaaS sesuai ruang lingkup.",
          "Modul pengelolaan pengguna dan langganan.",
          "Dokumentasi administrasi dan teknis.",
        ],
      },
      {
        name: "CMS Development",
        method: "Agile",
        focus: "Menyediakan sistem pengelolaan konten untuk memperbarui halaman, artikel, media, dan informasi.",
        activities: [
          "Mengidentifikasi tipe konten, kategori, pengguna, dan hak akses.",
          "Menyusun struktur halaman, field konten, dan alur publikasi.",
          "Membuat desain dashboard dan formulir pengelolaan.",
          "Mengembangkan modul tambah, ubah, hapus, dan publikasi konten.",
          "Menguji hak akses, validasi, media, dan tampilan hasil publikasi.",
          "Melakukan review dan serah terima.",
        ],
        deliverables: [
          "CMS sesuai kebutuhan.",
          "Dashboard pengelolaan konten.",
          "Panduan penggunaan CMS.",
        ],
      },
      {
        name: "No-Code / Low-Code Development",
        method: "Agile",
        focus: "Membangun solusi digital menggunakan platform no-code atau low-code sesuai kebutuhan dan batasan platform.",
        activities: [
          "Menganalisis kebutuhan dan menentukan kelayakan platform.",
          "Memilih platform, template, integrasi, dan struktur data.",
          "Menyusun alur halaman dan proses otomatisasi.",
          "Mengonfigurasi halaman, formulir, database, dan integrasi.",
          "Menguji alur pengguna, keterbatasan platform, dan responsivitas.",
          "Memberikan akses, dokumentasi, dan pelatihan dasar.",
        ],
        deliverables: [
          "Solusi digital berbasis no-code/low-code.",
          "Konfigurasi dan integrasi sesuai kesepakatan.",
          "Panduan pengelolaan.",
        ],
      },
      {
        name: "Custom System, ERP & CRM",
        method: "Scrum",
        focus: "Mengembangkan sistem operasional yang menghubungkan data, pengguna, proses bisnis, dan pelaporan.",
        activities: [
          "Memetakan proses bisnis berjalan dan masalah operasional.",
          "Mengidentifikasi modul, aktor, hak akses, dan alur persetujuan.",
          "Menyusun SRS, arsitektur, rancangan database, dan backlog.",
          "Mengembangkan modul secara bertahap berdasarkan prioritas.",
          "Mengintegrasikan modul dan melakukan pengujian lintas proses.",
          "Melaksanakan UAT, pelatihan, deployment, dan dokumentasi.",
        ],
        deliverables: [
          "Sistem ERP, CRM, atau sistem khusus sesuai ruang lingkup.",
          "Modul dan laporan yang disepakati.",
          "Dokumentasi teknis dan panduan operasional.",
        ],
      },
      {
        name: "Website Redesign & Migration",
        method: "Agile",
        focus: "Memperbarui desain, struktur, teknologi, atau infrastruktur website tanpa mengabaikan data penting.",
        activities: [
          "Mengaudit website lama, halaman, aset, URL, dan konfigurasi.",
          "Menentukan bagian yang dipertahankan, diperbaiki, atau dipindahkan.",
          "Menyusun desain dan rencana migrasi.",
          "Mengimplementasikan desain baru dan memindahkan konten.",
          "Menguji tautan, formulir, redirect, SEO teknis, dan kompatibilitas.",
          "Melakukan backup, cutover, dan verifikasi setelah migrasi.",
        ],
        deliverables: [
          "Website dengan desain atau infrastruktur baru.",
          "Konten dan data yang termasuk ruang lingkup migrasi.",
          "Catatan migrasi dan hasil pengujian.",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Landing Page Development",
    description:
      "Pembuatan halaman pemasaran yang berfokus pada tujuan tertentu seperti mendapatkan prospek, pendaftaran, penjualan, atau permintaan konsultasi.",
    services: [
      {
        name: "Business Landing Page",
        method: "Agile",
        focus: "Mendorong calon pelanggan mengenal bisnis dan menghubungi penyedia layanan.",
        activities: [
          "Menentukan tujuan konversi dan target audiens.",
          "Mengumpulkan keunggulan, penawaran, testimoni, dan informasi bisnis.",
          "Menyusun headline, urutan section, CTA, dan wireframe.",
          "Membangun halaman responsif dengan formulir atau WhatsApp.",
          "Menguji CTA, tampilan mobile, kecepatan, dan formulir.",
          "Melakukan revisi dan menyerahkan halaman.",
        ],
        deliverables: ["Landing page bisnis siap dipublikasikan.", "CTA dan formulir sesuai kebutuhan."],
      },
      {
        name: "Product Landing Page",
        method: "Agile",
        focus: "Menjelaskan manfaat, fitur, bukti, dan penawaran suatu produk.",
        activities: [
          "Mengidentifikasi produk, target pembeli, dan masalah pelanggan.",
          "Mengumpulkan spesifikasi, foto, harga, manfaat, dan bukti produk.",
          "Menyusun struktur penawaran dan copywriting.",
          "Membuat desain dan mengimplementasikan halaman.",
          "Menguji CTA, tautan pembelian, dan tampilan perangkat.",
          "Melakukan final review.",
        ],
        deliverables: ["Landing page produk.", "Materi produk dan CTA sesuai brief."],
      },
      {
        name: "Event / Webinar Landing Page",
        method: "Agile",
        focus: "Mendukung pendaftaran dan penyampaian informasi kegiatan.",
        activities: [
          "Mengumpulkan tema, jadwal, pembicara, biaya, dan target peserta.",
          "Menyusun informasi acara, agenda, FAQ, dan formulir pendaftaran.",
          "Membuat desain halaman dan komponen pendaftaran.",
          "Mengintegrasikan formulir, notifikasi, atau tautan pembayaran jika disepakati.",
          "Menguji pendaftaran dan konfirmasi peserta.",
          "Melakukan persetujuan dan publikasi.",
        ],
        deliverables: ["Landing page acara.", "Formulir pendaftaran dan informasi kegiatan."],
      },
      {
        name: "Property Landing Page",
        method: "Agile",
        focus: "Menampilkan properti, fasilitas, lokasi, dan jalur konsultasi atau pemesanan.",
        activities: [
          "Mengumpulkan data properti, tipe unit, fasilitas, lokasi, dan foto.",
          "Menentukan segmentasi calon pembeli atau penyewa.",
          "Menyusun struktur informasi dan CTA konsultasi.",
          "Membangun galeri, informasi unit, peta, dan formulir.",
          "Menguji informasi, tautan, dan tampilan mobile.",
          "Melakukan review akhir.",
        ],
        deliverables: ["Landing page properti.", "Galeri dan formulir prospek."],
      },
      {
        name: "Campaign / Advertising Landing Page",
        method: "Agile",
        focus: "Mendukung kampanye iklan dengan pesan dan CTA yang konsisten.",
        activities: [
          "Mempelajari tujuan kampanye, audiens, dan kanal iklan.",
          "Menentukan pesan utama, penawaran, dan konversi.",
          "Menyusun copywriting dan struktur halaman.",
          "Mengimplementasikan halaman dan tracking yang disepakati.",
          "Menguji event, CTA, dan parameter kampanye.",
          "Mengevaluasi hasil awal dan menyiapkan perbaikan.",
        ],
        deliverables: ["Landing page kampanye.", "Tracking dasar jika termasuk ruang lingkup."],
      },
      {
        name: "A/B Testing & Conversion Rate Optimization",
        method: "Agile",
        focus: "Meningkatkan performa halaman melalui eksperimen terukur.",
        activities: [
          "Mengumpulkan data performa dan menentukan baseline.",
          "Mengidentifikasi hambatan konversi.",
          "Menyusun hipotesis dan variasi elemen.",
          "Mengimplementasikan eksperimen.",
          "Memantau hasil berdasarkan metrik yang disepakati.",
          "Mendokumentasikan temuan dan rekomendasi lanjutan.",
        ],
        deliverables: ["Dokumen eksperimen.", "Variasi halaman dan laporan hasil sesuai data tersedia."],
      },
    ],
  },
  {
    number: "03",
    title: "Mobile, Desktop & Application Development",
    description:
      "Pengembangan aplikasi untuk Android, iOS, desktop, dan kebutuhan operasional khusus.",
    services: [
      {
        name: "Android Application Development",
        method: "Scrum",
        focus: "Membangun aplikasi Android berdasarkan kebutuhan pengguna dan perangkat target.",
        activities: [
          "Menganalisis fitur, target perangkat, pengguna, dan kebutuhan distribusi.",
          "Menyusun backlog, spesifikasi, dan rancangan aplikasi.",
          "Membuat UI/UX dan struktur data.",
          "Mengembangkan fitur melalui sprint.",
          "Menguji perangkat, izin aplikasi, performa, dan integrasi.",
          "Menyiapkan build, UAT, dokumentasi, dan distribusi sesuai kesepakatan.",
        ],
        deliverables: ["Aplikasi Android.", "APK/AAB sesuai kebutuhan distribusi.", "Dokumentasi penggunaan."],
      },
      {
        name: "iOS Application Development",
        method: "Scrum",
        focus: "Membangun aplikasi untuk ekosistem Apple dengan memperhatikan kompatibilitas dan standar platform.",
        activities: [
          "Menganalisis fitur dan target versi iOS.",
          "Menyusun backlog dan desain aplikasi.",
          "Menentukan arsitektur dan integrasi layanan.",
          "Mengembangkan modul melalui sprint.",
          "Menguji perangkat, navigasi, keamanan, dan performa.",
          "Menyiapkan build dan proses distribusi sesuai akses akun klien.",
        ],
        deliverables: ["Aplikasi iOS.", "Build distribusi dan dokumentasi sesuai ruang lingkup."],
      },
      {
        name: "Cross-Platform Mobile Application",
        method: "Scrum",
        focus: "Mengembangkan aplikasi lintas platform dengan basis kode dan pengalaman yang direncanakan.",
        activities: [
          "Menentukan platform, fitur, dan batasan perangkat.",
          "Menyusun backlog bersama kebutuhan Android dan iOS.",
          "Merancang UI/UX dan arsitektur lintas platform.",
          "Mengembangkan fitur secara bertahap.",
          "Menguji perilaku di Android dan iOS.",
          "Melaksanakan UAT dan menyiapkan build.",
        ],
        deliverables: ["Aplikasi lintas platform.", "Build dan dokumentasi sesuai kesepakatan."],
      },
      {
        name: "Desktop Application Development",
        method: "Scrum",
        focus: "Membangun aplikasi desktop untuk Windows, macOS, atau platform yang disepakati.",
        activities: [
          "Mengidentifikasi sistem operasi, perangkat, dan kebutuhan instalasi.",
          "Menyusun backlog fitur, database lokal/server, dan hak akses.",
          "Merancang antarmuka dan arsitektur aplikasi.",
          "Mengembangkan modul melalui sprint.",
          "Menguji instalasi, penyimpanan, pencetakan, pembaruan, dan kompatibilitas.",
          "Menyiapkan installer, dokumentasi, dan pelatihan.",
        ],
        deliverables: ["Aplikasi desktop.", "Installer atau paket distribusi.", "Panduan penggunaan."],
      },
      {
        name: "Progressive Web Application",
        method: "Agile",
        focus: "Membangun aplikasi web yang dapat memberikan pengalaman seperti aplikasi pada perangkat yang mendukung.",
        activities: [
          "Menganalisis kebutuhan akses dan dukungan browser.",
          "Menentukan struktur halaman dan fitur inti.",
          "Mengimplementasikan tampilan responsif dan fungsi aplikasi.",
          "Menambahkan manifest, service worker, atau kemampuan offline bila diperlukan.",
          "Menguji browser, instalasi, cache, dan responsivitas.",
          "Melakukan review dan publikasi.",
        ],
        deliverables: ["PWA sesuai kebutuhan.", "Dokumentasi instalasi dan penggunaan."],
      },
      {
        name: "Custom Business Application",
        method: "Scrum",
        focus: "Membangun aplikasi khusus berdasarkan proses operasional suatu bisnis.",
        activities: [
          "Memetakan proses bisnis dan kebutuhan pengguna.",
          "Menyusun modul, role, alur data, dan backlog.",
          "Merancang antarmuka dan database.",
          "Mengembangkan modul inti dan integrasi secara sprint.",
          "Menguji proses bisnis dan hak akses.",
          "Melakukan UAT, deployment, dan pelatihan.",
        ],
        deliverables: ["Aplikasi bisnis khusus.", "Dokumentasi teknis dan operasional."],
      },
      {
        name: "Educational Application",
        method: "Scrum",
        focus: "Mengembangkan aplikasi pendidikan untuk siswa, guru, lembaga, atau pengelola pembelajaran.",
        activities: [
          "Mengidentifikasi pengguna, tujuan pembelajaran, dan proses pendidikan.",
          "Menyusun fitur, role, materi, penilaian, dan backlog.",
          "Merancang UI/UX yang mudah digunakan.",
          "Mengembangkan modul pembelajaran dan administrasi.",
          "Menguji alur guru, siswa, pengelola, dan data pembelajaran.",
          "Melaksanakan UAT dan menyiapkan panduan.",
        ],
        deliverables: ["Aplikasi pendidikan.", "Modul pembelajaran atau administrasi sesuai ruang lingkup."],
      },
    ],
  },
  {
    number: "04",
    title: "AR, 3D & Game Development",
    description:
      "Produksi pengalaman interaktif, aset tiga dimensi, media pembelajaran, simulasi, dan game.",
    services: [
      {
        name: "Augmented Reality Application",
        method: "Scrum",
        focus: "Mengembangkan aplikasi AR dengan interaksi objek virtual dan lingkungan nyata.",
        activities: [
          "Menentukan tujuan AR, perangkat target, dan metode tracking.",
          "Menyusun backlog interaksi, marker, objek, dan alur pengguna.",
          "Menyiapkan aset 3D dan rancangan interaksi.",
          "Mengembangkan aplikasi dan integrasi AR melalui sprint.",
          "Menguji tracking, pencahayaan, stabilitas, dan kompatibilitas perangkat.",
          "Melakukan UAT dan menyiapkan build.",
        ],
        deliverables: ["Aplikasi AR.", "Aset dan panduan penggunaan sesuai ruang lingkup."],
      },
      {
        name: "AR Learning Media",
        method: "Scrum",
        focus: "Membuat media pembelajaran interaktif berbasis augmented reality.",
        activities: [
          "Mengumpulkan materi, capaian pembelajaran, dan target pengguna.",
          "Menentukan objek, marker, dan urutan pembelajaran.",
          "Membuat aset 3D dan storyboard interaksi.",
          "Mengembangkan pengalaman AR dan informasi edukatif.",
          "Menguji akurasi materi, interaksi, dan perangkat.",
          "Melakukan validasi bersama klien atau pengajar.",
        ],
        deliverables: ["Media pembelajaran AR.", "Aset dan materi digital yang disepakati."],
      },
      {
        name: "3D Modeling & Asset Creation",
        method: "Agile",
        focus: "Membuat objek 3D untuk kebutuhan visual, produk, game, animasi, atau aplikasi.",
        activities: [
          "Mengumpulkan referensi, ukuran, gaya, dan kebutuhan penggunaan.",
          "Menyusun daftar objek dan tingkat detail.",
          "Membuat modeling, material, tekstur, dan pencahayaan dasar.",
          "Melakukan review bentuk dan detail bersama klien.",
          "Mengoptimalkan polygon, ukuran file, dan format ekspor.",
          "Menyerahkan aset sesuai format yang disepakati.",
        ],
        deliverables: ["File aset 3D.", "Render preview dan format ekspor sesuai brief."],
      },
      {
        name: "3D Animation Production",
        method: "Agile",
        focus: "Memproduksi animasi tiga dimensi untuk edukasi, promosi, presentasi, atau kebutuhan visual.",
        activities: [
          "Mengumpulkan brief, referensi, durasi, rasio, dan target penonton.",
          "Menyusun konsep, naskah, storyboard, dan daftar aset.",
          "Membuat atau menyiapkan model, material, dan environment.",
          "Melakukan rigging, animasi, kamera, dan pencahayaan.",
          "Melakukan preview, review, revisi, dan rendering.",
          "Melakukan compositing, audio, dan ekspor final.",
        ],
        deliverables: ["Video animasi 3D.", "Aset atau project source jika termasuk kontrak."],
      },
      {
        name: "2D Game Development",
        method: "Scrum",
        focus: "Membangun game dua dimensi dengan mekanik, level, UI, dan sistem permainan.",
        activities: [
          "Menentukan genre, target platform, gameplay, dan target pemain.",
          "Menyusun game design document dan backlog.",
          "Membuat prototipe mekanik inti.",
          "Mengembangkan level, UI, audio, skor, dan sistem permainan melalui sprint.",
          "Menguji gameplay, bug, keseimbangan, dan performa.",
          "Melakukan playtest, revisi, dan build final.",
        ],
        deliverables: ["Game 2D.", "Build dan dokumentasi sesuai kebutuhan."],
      },
      {
        name: "3D Game Development",
        method: "Scrum",
        focus: "Membangun game tiga dimensi dengan lingkungan, karakter, mekanik, dan sistem permainan.",
        activities: [
          "Menentukan konsep, platform, gameplay, dan kebutuhan teknis.",
          "Menyusun design document dan backlog fitur.",
          "Membuat prototipe kontrol, kamera, dan mekanik utama.",
          "Mengembangkan environment, karakter, animasi, UI, dan sistem game.",
          "Menguji performa, collision, gameplay, dan kompatibilitas.",
          "Melakukan playtest, optimasi, dan build.",
        ],
        deliverables: ["Game 3D.", "Build dan aset sesuai kesepakatan."],
      },
      {
        name: "Interactive Simulation",
        method: "Scrum",
        focus: "Membangun simulasi interaktif untuk pelatihan, edukasi, demonstrasi, atau visualisasi proses.",
        activities: [
          "Mengidentifikasi proses yang akan disimulasikan dan tujuan pengguna.",
          "Menyusun skenario, variabel, interaksi, dan backlog.",
          "Merancang lingkungan dan alur simulasi.",
          "Mengembangkan logika, objek, dan interaksi.",
          "Menguji skenario, respons sistem, dan akurasi proses.",
          "Melakukan validasi dan menyerahkan aplikasi.",
        ],
        deliverables: ["Aplikasi simulasi interaktif.", "Dokumentasi skenario dan penggunaan."],
      },
    ],
  },
  {
    number: "05",
    title: "AI, Machine Learning & Data Science",
    description:
      "Solusi kecerdasan buatan, otomatisasi, analisis data, prediksi, dan integrasi model AI.",
    services: [
      {
        name: "AI Consulting",
        method: "Agile",
        focus: "Membantu organisasi menentukan peluang penerapan AI yang realistis dan bernilai.",
        activities: [
          "Mengidentifikasi masalah dan proses yang ingin ditingkatkan.",
          "Memeriksa ketersediaan, kualitas, dan sensitivitas data.",
          "Menilai kelayakan teknis, biaya, risiko, dan manfaat.",
          "Menyusun rekomendasi solusi dan prioritas implementasi.",
          "Membuat proof of concept jika termasuk ruang lingkup.",
          "Menyampaikan hasil analisis dan roadmap.",
        ],
        deliverables: ["Dokumen rekomendasi AI.", "Roadmap dan proof of concept bila disepakati."],
      },
      {
        name: "AI Chatbot Development",
        method: "Scrum",
        focus: "Membangun chatbot untuk menjawab pertanyaan dan membantu interaksi pelanggan atau pengguna.",
        activities: [
          "Mengumpulkan FAQ, sumber pengetahuan, kanal, dan skenario percakapan.",
          "Menyusun backlog percakapan, integrasi, dan pengelolaan pengetahuan.",
          "Merancang alur dialog, fallback, dan eskalasi ke manusia.",
          "Mengembangkan chatbot dan integrasi kanal melalui sprint.",
          "Menguji relevansi jawaban, keamanan, dan skenario gagal.",
          "Melakukan UAT dan evaluasi kualitas jawaban.",
        ],
        deliverables: ["Chatbot AI.", "Basis pengetahuan dan panduan pengelolaan sesuai kontrak."],
      },
      {
        name: "AI Agent Development",
        method: "Scrum",
        focus: "Membangun agen AI yang dapat menjalankan alur kerja dengan tools dan batas kewenangan tertentu.",
        activities: [
          "Mengidentifikasi tugas, tujuan, tools, dan batas tindakan agen.",
          "Menyusun backlog kemampuan, workflow, guardrails, dan integrasi.",
          "Merancang arsitektur agen, memori, dan mekanisme persetujuan.",
          "Mengembangkan agent workflow dan integrasi secara sprint.",
          "Menguji ketepatan tindakan, batas akses, dan skenario kesalahan.",
          "Melakukan UAT, monitoring, dan dokumentasi.",
        ],
        deliverables: ["AI Agent sesuai ruang lingkup.", "Dokumentasi tools, batas akses, dan penggunaan."],
      },
      {
        name: "Machine Learning Development",
        method: "Scrum",
        focus: "Mengembangkan model machine learning berdasarkan tujuan dan karakteristik data.",
        activities: [
          "Menentukan target prediksi atau klasifikasi.",
          "Mengumpulkan dan memeriksa dataset.",
          "Melakukan preprocessing, eksplorasi, dan pemilihan pendekatan model.",
          "Melatih dan mengevaluasi model melalui iterasi.",
          "Menguji generalisasi, bias, dan metrik yang disepakati.",
          "Menyiapkan integrasi atau deployment bila termasuk ruang lingkup.",
        ],
        deliverables: ["Model ML.", "Hasil evaluasi dan dokumentasi eksperimen."],
      },
      {
        name: "Data Science & Analytics",
        method: "Agile",
        focus: "Mengolah data menjadi insight untuk mendukung keputusan bisnis atau organisasi.",
        activities: [
          "Menentukan pertanyaan bisnis dan indikator yang ingin dianalisis.",
          "Mengidentifikasi sumber data dan kualitas data.",
          "Membersihkan, menggabungkan, dan mengolah dataset.",
          "Melakukan analisis, visualisasi, dan interpretasi.",
          "Memvalidasi temuan bersama pemilik data.",
          "Menyusun laporan dan rekomendasi.",
        ],
        deliverables: ["Laporan analisis.", "Dashboard atau visualisasi jika termasuk ruang lingkup."],
      },
      {
        name: "Business Process Automation",
        method: "Agile",
        focus: "Mengurangi pekerjaan manual melalui otomatisasi alur kerja.",
        activities: [
          "Memetakan proses manual dan titik hambatan.",
          "Menentukan trigger, kondisi, tindakan, dan pengecualian.",
          "Memilih tools, API, atau platform otomatisasi.",
          "Membangun workflow dan integrasi.",
          "Menguji alur normal, duplikasi, kegagalan, dan notifikasi.",
          "Mendokumentasikan workflow dan prosedur pemeliharaan.",
        ],
        deliverables: ["Workflow otomatisasi.", "Dokumentasi konfigurasi dan penggunaan."],
      },
      {
        name: "AI Integration",
        method: "Agile",
        focus: "Menghubungkan kemampuan AI ke website, aplikasi, atau sistem yang telah tersedia.",
        activities: [
          "Memeriksa sistem, kebutuhan AI, dan API yang tersedia.",
          "Menentukan provider, model, biaya, serta batas penggunaan.",
          "Merancang alur request, response, dan penanganan error.",
          "Mengimplementasikan integrasi dan konfigurasi.",
          "Menguji keamanan API key, output, latency, dan biaya.",
          "Menyerahkan dokumentasi konfigurasi.",
        ],
        deliverables: ["Integrasi AI.", "Dokumentasi konfigurasi dan batas penggunaan."],
      },
      {
        name: "Predictive Analytics",
        method: "Scrum",
        focus: "Membangun solusi analitik untuk memperkirakan tren atau kejadian berdasarkan data.",
        activities: [
          "Menentukan target prediksi, horizon waktu, dan indikator keberhasilan.",
          "Mengumpulkan dan mengevaluasi data historis.",
          "Menyusun backlog pengolahan data, model, dan visualisasi.",
          "Mengembangkan pipeline dan model prediksi melalui sprint.",
          "Menguji akurasi, error, dan kestabilan model.",
          "Menyusun hasil, batasan, dan rekomendasi penggunaan.",
        ],
        deliverables: ["Model atau sistem prediksi.", "Laporan evaluasi dan visualisasi."],
      },
    ],
  },
  {
    number: "06",
    title: "SEO & Digital Marketing",
    description:
      "Layanan optimasi mesin pencari, konten, strategi pemasaran, dan pengelolaan kampanye digital.",
    services: [
      {
        name: "Artikel SEO",
        method: "Agile",
        focus: "Memproduksi artikel yang informatif, relevan, dan terstruktur untuk kebutuhan pencarian.",
        activities: [
          "Menerima topik, tujuan, audiens, dan informasi produk atau layanan.",
          "Melakukan riset keyword dan search intent.",
          "Menyusun outline, heading, dan struktur artikel.",
          "Menulis artikel dengan informasi yang relevan dan mudah dipahami.",
          "Melakukan pemeriksaan fakta, keterbacaan, dan optimasi SEO.",
          "Mengirimkan artikel untuk review dan revisi.",
        ],
        deliverables: ["Artikel sesuai jumlah dan spesifikasi pesanan.", "Keyword dan metadata sesuai kesepakatan."],
      },
      {
        name: "SEO Content Writing",
        method: "Agile",
        focus: "Menyusun konten website yang mendukung kebutuhan audiens dan strategi SEO.",
        activities: [
          "Menentukan halaman, audiens, keyword, dan tujuan konten.",
          "Menganalisis search intent dan referensi.",
          "Menyusun content brief.",
          "Menulis dan mengoptimalkan konten.",
          "Melakukan editorial review dan pemeriksaan kualitas.",
          "Menyerahkan konten sesuai format.",
        ],
        deliverables: ["Konten SEO sesuai brief.", "Dokumen keyword dan metadata bila disepakati."],
      },
      {
        name: "Product Description & Copywriting",
        method: "Agile",
        focus: "Menulis deskripsi dan pesan pemasaran yang menjelaskan manfaat produk.",
        activities: [
          "Mengumpulkan informasi produk dan target pelanggan.",
          "Mengidentifikasi fitur, manfaat, pembeda, dan keberatan pembeli.",
          "Menentukan gaya bahasa dan struktur copy.",
          "Menulis deskripsi, headline, CTA, atau variasi copy.",
          "Memeriksa konsistensi informasi dan klaim.",
          "Melakukan revisi sesuai brief.",
        ],
        deliverables: ["Deskripsi produk atau materi copywriting."],
      },
      {
        name: "SEO Website Optimization",
        method: "Agile",
        focus: "Meningkatkan kesiapan teknis dan konten website untuk mesin pencari.",
        activities: [
          "Melakukan audit halaman, struktur, metadata, dan indeksasi.",
          "Memeriksa kecepatan, responsivitas, dan masalah teknis.",
          "Menyusun daftar prioritas perbaikan.",
          "Mengimplementasikan optimasi on-page dan teknis sesuai akses.",
          "Memeriksa hasil implementasi.",
          "Menyusun laporan perubahan dan rekomendasi.",
        ],
        deliverables: ["Perbaikan SEO sesuai ruang lingkup.", "Laporan audit dan optimasi."],
      },
      {
        name: "Keyword Research",
        method: "Agile",
        focus: "Menentukan kata kunci berdasarkan relevansi, intent, dan peluang pencarian.",
        activities: [
          "Memahami produk, layanan, lokasi, dan target audiens.",
          "Mengumpulkan keyword awal dan variasi pencarian.",
          "Menganalisis intent, relevansi, dan kompetisi.",
          "Mengelompokkan keyword berdasarkan topik.",
          "Memetakan keyword ke halaman atau konten.",
          "Menyerahkan hasil dan prioritas keyword.",
        ],
        deliverables: ["Daftar keyword.", "Pemetaan topik dan rekomendasi konten."],
      },
      {
        name: "Local SEO",
        method: "Agile",
        focus: "Meningkatkan visibilitas bisnis pada pencarian lokal.",
        activities: [
          "Mengumpulkan informasi bisnis, lokasi, kategori, dan area layanan.",
          "Memeriksa profil bisnis dan konsistensi informasi.",
          "Menyusun optimasi profil, halaman lokasi, dan konten lokal.",
          "Mengimplementasikan perubahan sesuai akses.",
          "Memeriksa konsistensi NAP dan informasi kontak.",
          "Menyusun laporan dan rekomendasi.",
        ],
        deliverables: ["Optimasi local SEO sesuai ruang lingkup.", "Laporan perubahan."],
      },
      {
        name: "Social Media Management",
        method: "Agile",
        focus: "Mengelola perencanaan, produksi, dan evaluasi konten media sosial.",
        activities: [
          "Mengidentifikasi tujuan, platform, audiens, dan karakter merek.",
          "Menyusun content pillar dan kalender konten.",
          "Membuat caption, desain, dan materi publikasi.",
          "Melakukan review dan persetujuan konten.",
          "Menjadwalkan atau mempublikasikan konten sesuai akses.",
          "Mengevaluasi performa dan menyusun laporan.",
        ],
        deliverables: ["Kalender konten.", "Materi publikasi dan laporan sesuai paket."],
      },
      {
        name: "Digital Advertising / Meta Ads",
        method: "Agile",
        focus: "Menyiapkan dan mengoptimalkan kampanye iklan pada ekosistem Meta.",
        activities: [
          "Menentukan tujuan, audiens, anggaran, dan indikator kampanye.",
          "Memeriksa aset, akun iklan, pixel, dan landing page.",
          "Menyusun materi iklan dan struktur kampanye.",
          "Menyiapkan kampanye setelah persetujuan klien.",
          "Memantau performa dan melakukan optimasi.",
          "Menyusun laporan biaya dan hasil.",
        ],
        deliverables: ["Kampanye iklan sesuai kesepakatan.", "Laporan performa."],
      },
      {
        name: "Google Ads",
        method: "Agile",
        focus: "Menjalankan kampanye pencarian atau jenis iklan Google sesuai tujuan bisnis.",
        activities: [
          "Menentukan tujuan, keyword, audiens, dan anggaran.",
          "Memeriksa akun, konversi, dan landing page.",
          "Menyusun struktur campaign dan materi iklan.",
          "Menyiapkan kampanye setelah persetujuan.",
          "Memantau keyword, biaya, dan konversi.",
          "Mengevaluasi hasil dan memberikan rekomendasi.",
        ],
        deliverables: ["Kampanye Google Ads sesuai ruang lingkup.", "Laporan performa."],
      },
      {
        name: "Content Strategy",
        method: "Agile",
        focus: "Menyusun arah dan perencanaan konten berdasarkan tujuan komunikasi dan pemasaran.",
        activities: [
          "Menganalisis bisnis, audiens, kompetitor, dan kanal.",
          "Menentukan tujuan komunikasi dan content pillar.",
          "Menyusun tema, format, dan kalender konten.",
          "Membuat pedoman gaya bahasa dan pesan.",
          "Memvalidasi strategi bersama klien.",
          "Menyusun rekomendasi evaluasi berkala.",
        ],
        deliverables: ["Dokumen strategi konten.", "Content pillar dan kalender."],
      },
    ],
  },
  {
    number: "07",
    title: "Branding, UI/UX & Creative Design",
    description:
      "Layanan identitas merek, desain antarmuka, materi promosi, dokumen, presentasi, dan kebutuhan visual.",
    services: [
      {
        name: "Logo Design",
        method: "Agile",
        focus: "Menciptakan identitas logo yang sesuai karakter dan kebutuhan merek.",
        activities: [
          "Mengumpulkan nama merek, visi, audiens, dan referensi.",
          "Menyusun arah visual dan konsep.",
          "Membuat alternatif desain logo.",
          "Melakukan presentasi konsep dan review.",
          "Menyempurnakan desain berdasarkan revisi yang disepakati.",
          "Menyiapkan file final dan variasi penggunaan.",
        ],
        deliverables: ["Logo final.", "File ekspor sesuai format yang disepakati."],
      },
      {
        name: "Brand Identity Development",
        method: "Agile",
        focus: "Membangun sistem identitas visual yang konsisten untuk merek.",
        activities: [
          "Menganalisis karakter, nilai, audiens, dan positioning merek.",
          "Menentukan warna, tipografi, elemen visual, dan gaya komunikasi.",
          "Membuat sistem identitas dan contoh penerapan.",
          "Melakukan review dan penyempurnaan.",
          "Menyusun panduan penggunaan identitas.",
          "Menyerahkan aset final.",
        ],
        deliverables: ["Brand identity.", "Brand guideline sesuai ruang lingkup."],
      },
      {
        name: "UI/UX Design",
        method: "Agile",
        focus: "Merancang pengalaman dan antarmuka digital berdasarkan kebutuhan pengguna.",
        activities: [
          "Mengidentifikasi pengguna, tujuan, dan permasalahan.",
          "Menyusun user flow, sitemap, dan struktur informasi.",
          "Membuat wireframe dan prototype.",
          "Mengembangkan visual UI dan design system dasar.",
          "Melakukan review atau usability feedback.",
          "Menyerahkan file desain dan spesifikasi handoff.",
        ],
        deliverables: ["Wireframe dan prototype.", "Desain UI dan spesifikasi handoff."],
      },
      {
        name: "Website UI Design",
        method: "Agile",
        focus: "Merancang tampilan website yang konsisten, responsif, dan mudah dipahami.",
        activities: [
          "Mengumpulkan kebutuhan halaman dan referensi.",
          "Menyusun sitemap dan wireframe.",
          "Menentukan warna, tipografi, komponen, dan layout.",
          "Mendesain halaman utama dan halaman pendukung.",
          "Melakukan review tampilan desktop dan mobile.",
          "Menyiapkan file desain untuk development.",
        ],
        deliverables: ["Desain UI website.", "Komponen dan panduan tampilan."],
      },
      {
        name: "Mobile App UI/UX Design",
        method: "Agile",
        focus: "Merancang alur dan tampilan aplikasi mobile.",
        activities: [
          "Mengidentifikasi pengguna dan kebutuhan fitur.",
          "Menyusun user journey dan user flow.",
          "Membuat wireframe layar utama.",
          "Mengembangkan UI dan prototype interaktif.",
          "Melakukan review navigasi dan keterbacaan.",
          "Menyiapkan desain untuk developer.",
        ],
        deliverables: ["Wireframe dan prototype.", "Desain layar aplikasi."],
      },
      {
        name: "Graphic Design",
        method: "Agile",
        focus: "Membuat kebutuhan visual untuk komunikasi, informasi, dan promosi.",
        activities: [
          "Mengumpulkan brief, ukuran, media, dan tujuan desain.",
          "Menentukan konsep visual dan referensi.",
          "Membuat komposisi, tipografi, dan elemen grafis.",
          "Melakukan review dan revisi.",
          "Memeriksa ukuran dan keterbacaan.",
          "Mengekspor file final.",
        ],
        deliverables: ["Desain grafis sesuai format dan ukuran."],
      },
      {
        name: "Document Design",
        method: "Agile",
        focus: "Menyusun tampilan dokumen agar rapi, konsisten, dan mudah dibaca.",
        activities: [
          "Mengumpulkan naskah, struktur, format, dan ketentuan dokumen.",
          "Menentukan hierarki heading, margin, font, dan layout.",
          "Menerapkan format pada seluruh halaman.",
          "Memeriksa tabel, gambar, nomor halaman, dan konsistensi.",
          "Melakukan review dan koreksi.",
          "Mengekspor dokumen final.",
        ],
        deliverables: ["Dokumen terformat.", "File editable dan PDF bila disepakati."],
      },
      {
        name: "Presentation Design",
        method: "Agile",
        focus: "Mengubah materi menjadi presentasi visual yang terstruktur dan komunikatif.",
        activities: [
          "Mengumpulkan materi, tujuan presentasi, dan audiens.",
          "Menyusun alur cerita dan struktur slide.",
          "Menentukan konsep visual dan template.",
          "Mendesain slide dan visualisasi data.",
          "Memeriksa konsistensi, keterbacaan, dan alur.",
          "Menyerahkan file presentasi.",
        ],
        deliverables: ["File presentasi editable.", "PDF jika disepakati."],
      },
      {
        name: "Social Media Design",
        method: "Agile",
        focus: "Membuat desain konten untuk kebutuhan media sosial.",
        activities: [
          "Menentukan platform, format, ukuran, dan tujuan konten.",
          "Mengumpulkan materi dan pesan utama.",
          "Membuat layout dan elemen visual.",
          "Melakukan review desain.",
          "Menyesuaikan format dan ukuran platform.",
          "Mengekspor file final.",
        ],
        deliverables: ["Desain media sosial sesuai jumlah dan format pesanan."],
      },
      {
        name: "Marketing & Promotion Design",
        method: "Agile",
        focus: "Membuat materi visual untuk promosi produk, layanan, atau kegiatan.",
        activities: [
          "Mengidentifikasi tujuan promosi dan target audiens.",
          "Mengumpulkan informasi produk, penawaran, dan CTA.",
          "Menyusun pesan dan konsep visual.",
          "Mendesain materi promosi.",
          "Melakukan review informasi dan desain.",
          "Menyiapkan file untuk media digital atau cetak.",
        ],
        deliverables: ["Materi promosi sesuai format dan ukuran."],
      },
      {
        name: "2D/3D Animation & Video Editing",
        method: "Agile",
        focus: "Memproduksi animasi dan mengolah video pembelajaran, promosi, atau presentasi.",
        activities: [
          "Mengumpulkan naskah, footage, aset, durasi, dan format.",
          "Menyusun storyboard atau urutan editing.",
          "Membuat atau mengolah aset visual dan animasi.",
          "Melakukan editing, transisi, audio, subtitle, dan rendering.",
          "Mengirim preview untuk review dan revisi.",
          "Mengekspor video final sesuai spesifikasi.",
        ],
        deliverables: ["Video final.", "Project source atau aset editable jika termasuk kontrak."],
      },
    ],
  },
  {
    number: "08",
    title: "Maintenance & Technical Support",
    description:
      "Layanan pemeliharaan, dukungan teknis, infrastruktur, dan keberlangsungan sistem digital.",
    services: [
      {
        name: "Website & Application Maintenance",
        method: "Agile",
        focus: "Menjaga website atau aplikasi tetap berfungsi, aman, dan sesuai kebutuhan pemeliharaan.",
        activities: [
          "Menerima laporan kendala dan memeriksa kondisi sistem.",
          "Mengelompokkan masalah berdasarkan dampak dan prioritas.",
          "Memeriksa log, error, database, dan konfigurasi.",
          "Melakukan perbaikan atau pembaruan yang termasuk kontrak.",
          "Menguji hasil perbaikan dan memantau sistem.",
          "Menyampaikan laporan pekerjaan.",
        ],
        deliverables: ["Perbaikan sesuai kontrak.", "Laporan maintenance."],
      },
      {
        name: "Technical Support",
        method: "Agile",
        focus: "Memberikan bantuan teknis untuk penggunaan dan kendala sistem.",
        activities: [
          "Menerima tiket atau laporan dari klien.",
          "Mengidentifikasi perangkat, akun, aplikasi, dan gejala masalah.",
          "Menentukan tingkat prioritas dan langkah penanganan.",
          "Memberikan solusi atau eskalasi teknis.",
          "Memastikan kendala terselesaikan atau memiliki rencana tindak lanjut.",
          "Mencatat penyelesaian dan rekomendasi.",
        ],
        deliverables: ["Penanganan tiket.", "Catatan solusi dan tindak lanjut."],
      },
      {
        name: "Cloud & Server Infrastructure",
        method: "Agile",
        focus: "Menyiapkan dan memelihara infrastruktur server, cloud, deployment, dan konfigurasi layanan.",
        activities: [
          "Mengidentifikasi kebutuhan kapasitas, trafik, keamanan, dan anggaran.",
          "Menentukan arsitektur server, domain, database, dan layanan.",
          "Menyiapkan environment, konfigurasi, dan deployment.",
          "Mengatur SSL, backup, monitoring, dan akses.",
          "Menguji konektivitas, performa, dan pemulihan dasar.",
          "Mendokumentasikan konfigurasi dan prosedur operasional.",
        ],
        deliverables: ["Infrastruktur sesuai spesifikasi.", "Dokumentasi deployment dan konfigurasi."],
      },
    ],
  },
]

const agileStages = [
  {
    title: "01. Client Brief & Discovery",
    description: "Memahami kebutuhan klien sebelum pekerjaan dimulai.",
    tasks: [
      "Menerima permintaan dan mengidentifikasi jenis layanan.",
      "Mengadakan konsultasi untuk memahami tujuan dan masalah.",
      "Mengumpulkan materi, referensi, aset, dan informasi pendukung.",
      "Mengidentifikasi target pengguna dan hasil yang diharapkan.",
      "Mencatat kebutuhan utama, batasan, dan prioritas.",
    ],
    output: "Client Brief dan catatan kebutuhan.",
  },
  {
    title: "02. Analysis & Scope",
    description: "Memastikan apa yang akan dikerjakan dan apa yang tidak termasuk.",
    tasks: [
      "Menganalisis kebutuhan dan kelayakan pekerjaan.",
      "Menentukan fitur, halaman, jumlah konten, atau jumlah aset.",
      "Mengidentifikasi dependensi dan risiko.",
      "Menentukan batas revisi dan kriteria penerimaan.",
      "Menyusun ruang lingkup pekerjaan secara tertulis.",
    ],
    output: "Project Scope dan spesifikasi pekerjaan.",
  },
  {
    title: "03. Planning & Prioritization",
    description: "Menyusun urutan pekerjaan, PIC, waktu, dan target hasil.",
    tasks: [
      "Memecah pekerjaan menjadi task yang dapat dikerjakan.",
      "Menentukan prioritas dan dependensi.",
      "Menetapkan PIC untuk setiap task.",
      "Menentukan deadline dan jadwal review.",
      "Mengonfirmasi rencana kerja kepada klien.",
    ],
    output: "Project Plan, task list, timeline, dan PIC.",
  },
  {
    title: "04. Design & Production",
    description: "Mengerjakan desain, konten, konfigurasi, atau implementasi.",
    tasks: [
      "Membuat rancangan atau konsep awal.",
      "Meminta persetujuan konsep jika diperlukan.",
      "Melaksanakan pekerjaan berdasarkan brief.",
      "Memperbarui status dan dokumentasi pekerjaan.",
      "Mengidentifikasi hambatan sedini mungkin.",
    ],
    output: "Hasil kerja atau draft sesuai tahap.",
  },
  {
    title: "05. Internal Review & Quality Control",
    description: "Memastikan hasil memenuhi standar internal sebelum dikirim ke klien.",
    tasks: [
      "Memeriksa kesesuaian hasil dengan brief.",
      "Memeriksa ejaan, konten, visual, fungsi, atau spesifikasi.",
      "Memeriksa kelengkapan file dan format.",
      "Memperbaiki temuan internal.",
      "Mencatat hasil pemeriksaan.",
    ],
    output: "Hasil yang lolos pemeriksaan internal.",
  },
  {
    title: "06. Client Review & Revision",
    description: "Memberikan kesempatan kepada klien untuk menilai hasil sesuai ruang lingkup.",
    tasks: [
      "Mengirim hasil melalui media yang disepakati.",
      "Menjelaskan bagian yang perlu diperiksa klien.",
      "Mengumpulkan feedback secara terstruktur.",
      "Mengelompokkan feedback sebagai koreksi atau permintaan tambahan.",
      "Mengerjakan revisi sesuai kesepakatan.",
    ],
    output: "Hasil yang telah direview dan disetujui.",
  },
  {
    title: "07. Finalization & Delivery",
    description: "Menyelesaikan output dan menyerahkannya secara resmi.",
    tasks: [
      "Melakukan pemeriksaan final.",
      "Menyiapkan file, akses, tautan, dan dokumentasi.",
      "Memastikan kewajiban pembayaran sesuai perjanjian.",
      "Mengirim hasil dan berita acara serah terima bila diperlukan.",
      "Mengarsipkan dokumen proyek.",
    ],
    output: "Final deliverables dan dokumen serah terima.",
  },
  {
    title: "08. Follow-up & Maintenance",
    description: "Menjaga hubungan kerja dan menangani kebutuhan setelah proyek selesai.",
    tasks: [
      "Mengonfirmasi hasil telah diterima.",
      "Memberikan dukungan sesuai masa garansi atau kontrak.",
      "Mencatat permintaan maintenance.",
      "Menawarkan layanan lanjutan jika relevan.",
      "Mengevaluasi kepuasan dan hasil proyek.",
    ],
    output: "Catatan follow-up, maintenance, dan evaluasi.",
  },
]

const scrumStages = [
  {
    title: "01. Product Discovery",
    description: "Menggali masalah, visi produk, pengguna, dan hasil bisnis yang ingin dicapai.",
    tasks: [
      "Mengadakan discovery meeting dengan stakeholder.",
      "Mengidentifikasi user persona dan alur bisnis.",
      "Mendefinisikan tujuan produk dan indikator keberhasilan.",
      "Mengidentifikasi integrasi, risiko, dan batasan teknis.",
      "Menyusun gambaran awal solusi.",
    ],
    output: "Product Vision, discovery notes, dan ruang lingkup awal.",
  },
  {
    title: "02. Requirement & Product Backlog",
    description: "Mengubah kebutuhan menjadi daftar pekerjaan yang dapat diprioritaskan.",
    tasks: [
      "Menulis kebutuhan sebagai fitur atau user story.",
      "Membuat acceptance criteria untuk setiap item penting.",
      "Mengelompokkan backlog berdasarkan modul.",
      "Mengidentifikasi dependensi dan risiko.",
      "Memprioritaskan item berdasarkan nilai bisnis dan urgensi.",
    ],
    output: "Product Backlog yang dapat ditinjau dan diperbarui.",
  },
  {
    title: "03. Architecture & UX Design",
    description: "Menyiapkan fondasi teknis dan rancangan pengalaman pengguna.",
    tasks: [
      "Menyusun arsitektur aplikasi dan teknologi.",
      "Merancang database, API, autentikasi, dan hak akses.",
      "Membuat sitemap, user flow, wireframe, dan prototype.",
      "Menentukan standar coding, branching, dan deployment.",
      "Memeriksa risiko keamanan dan integrasi.",
    ],
    output: "Technical Specification, desain, dan fondasi proyek.",
  },
  {
    title: "04. Sprint Planning",
    description: "Menentukan pekerjaan yang realistis untuk satu sprint.",
    tasks: [
      "Meninjau prioritas Product Backlog.",
      "Memilih item yang siap dikerjakan.",
      "Memperkirakan kompleksitas dan kapasitas tim.",
      "Menyusun Sprint Backlog.",
      "Menetapkan Sprint Goal dan definisi selesai.",
    ],
    output: "Sprint Goal dan Sprint Backlog.",
  },
  {
    title: "05. Sprint Execution",
    description: "Mengembangkan fitur secara bertahap dalam sprint 1–2 minggu sebagai standar awal HINAI Tech.",
    tasks: [
      "Membagi item sprint menjadi task teknis.",
      "Mengerjakan development sesuai standar tim.",
      "Melakukan update harian terhadap progres dan hambatan.",
      "Melakukan code review atau peer review.",
      "Mengintegrasikan hasil pekerjaan secara berkala.",
      "Memperbarui status backlog.",
    ],
    output: "Increment atau bagian produk yang berfungsi.",
  },
  {
    title: "06. Testing & Continuous Quality",
    description: "Menguji setiap bagian produk selama pengembangan, bukan hanya di akhir.",
    tasks: [
      "Menjalankan unit test dan integration test sesuai kebutuhan.",
      "Memeriksa validasi, hak akses, dan alur data.",
      "Melakukan functional dan regression testing.",
      "Menguji responsivitas, performa, dan keamanan dasar.",
      "Mencatat bug dan memasukkannya ke backlog.",
    ],
    output: "Test report dan daftar bug terprioritaskan.",
  },
  {
    title: "07. Sprint Review",
    description: "Menampilkan hasil sprint kepada klien atau stakeholder.",
    tasks: [
      "Menyiapkan demo fitur yang telah selesai.",
      "Menjelaskan fitur yang selesai dan yang belum selesai.",
      "Mengumpulkan feedback stakeholder.",
      "Memeriksa acceptance criteria.",
      "Memperbarui Product Backlog berdasarkan feedback.",
    ],
    output: "Sprint Review Report dan backlog terbaru.",
  },
  {
    title: "08. Sprint Retrospective",
    description: "Mengevaluasi cara kerja tim agar sprint berikutnya lebih efektif.",
    tasks: [
      "Mengidentifikasi hal yang berjalan baik.",
      "Membahas hambatan dan penyebab keterlambatan.",
      "Mengevaluasi kualitas komunikasi dan proses.",
      "Menentukan tindakan perbaikan yang terukur.",
      "Menetapkan PIC untuk tindak lanjut.",
    ],
    output: "Retrospective Notes dan action items.",
  },
  {
    title: "09. UAT, Release & Handover",
    description: "Memastikan produk diterima klien dan siap digunakan.",
    tasks: [
      "Melakukan end-to-end testing.",
      "Menyiapkan environment UAT.",
      "Mendampingi klien menjalankan skenario penerimaan.",
      "Menyelesaikan temuan sesuai ruang lingkup.",
      "Melakukan deployment dan verifikasi release.",
      "Menyerahkan dokumentasi, akses, dan panduan.",
    ],
    output: "UAT Form, release report, dan handover document.",
  },
  {
    title: "10. Maintenance & Product Improvement",
    description: "Menangani dukungan pascapeluncuran dan pengembangan berikutnya.",
    tasks: [
      "Memantau stabilitas produk sesuai kontrak.",
      "Menerima laporan bug dan permintaan perubahan.",
      "Mengelompokkan bug, maintenance, dan fitur baru.",
      "Memprioritaskan pekerjaan lanjutan.",
      "Merencanakan sprint atau kontrak maintenance berikutnya.",
    ],
    output: "Maintenance report dan backlog pengembangan lanjutan.",
  },
]

const projectDocuments = [
  ["Client Brief", "Catatan kebutuhan, tujuan, referensi, dan informasi dari klien."],
  ["Project Proposal", "Penawaran solusi, ruang lingkup, estimasi biaya, dan ketentuan."],
  ["Project Scope", "Daftar pekerjaan, batasan, output, dan hal yang tidak termasuk."],
  ["Project Timeline", "Jadwal pekerjaan, milestone, deadline, dan review."],
  ["SRS / Technical Specification", "Spesifikasi kebutuhan dan rancangan teknis untuk proyek sistem."],
  ["Sitemap / Wireframe", "Struktur halaman dan rancangan awal antarmuka."],
  ["Design Approval", "Persetujuan desain atau konsep sebelum implementasi lanjutan."],
  ["Product Backlog", "Daftar kebutuhan dan fitur untuk proyek Scrum."],
  ["Sprint Backlog", "Daftar pekerjaan yang dipilih untuk satu sprint."],
  ["Sprint Review Report", "Catatan hasil sprint dan feedback stakeholder."],
  ["Testing Report", "Hasil pengujian dan daftar temuan."],
  ["UAT Form", "Dokumen penerimaan hasil oleh klien."],
  ["Deployment Report", "Catatan proses rilis dan konfigurasi deployment."],
  ["Handover Document", "Dokumen penyerahan hasil, akses, dan panduan."],
  ["Maintenance Report", "Catatan pemeliharaan dan tindak lanjut."],
]



const commercialStages = [
  {
    number: "01", title: "Lead Intake & Response", owner: "Sales / Founder",
    purpose: "Mengubah pertanyaan awal menjadi prospek yang tercatat dan dapat ditindaklanjuti.",
    actions: [
      "Terima prospek dari WhatsApp, website, media sosial, referral, marketplace, atau jaringan langsung.",
      "Catat nama, organisasi, kontak, sumber prospek, layanan yang diminati, kebutuhan singkat, dan waktu masuk ke CRM.",
      "Balas dengan bahasa yang sopan dan relevan; jangan langsung mengirim daftar harga tanpa memahami konteks.",
      "Kirim pertanyaan awal: masalah yang ingin diselesaikan, target hasil, pengguna, platform, dan perkiraan waktu mulai.",
      "Tentukan jadwal konsultasi dan PIC komunikasi. Jika prospek belum siap, masukkan ke daftar follow-up dengan tanggal yang jelas.",
    ],
    output: "Lead record, kebutuhan awal, sumber prospek, PIC, dan jadwal konsultasi.",
    gate: "Prospek memiliki kebutuhan yang dapat dijelaskan dan bersedia melanjutkan discovery."
  },
  {
    number: "02", title: "Consultation & Discovery", owner: "Sales + Business Analyst / Service Lead",
    purpose: "Memahami masalah bisnis atau kebutuhan pengguna sebelum menawarkan teknologi.",
    actions: [
      "Mulai konsultasi dengan tujuan klien, kondisi saat ini, masalah utama, dan dampak masalah tersebut.",
      "Gali siapa pengguna, berapa jumlah pengguna, proses yang berjalan, perangkat, lokasi, dan kondisi internet bila relevan.",
      "Tanyakan fitur wajib, fitur tambahan, integrasi, data yang tersedia, konten/aset, referensi, serta batasan teknis.",
      "Tanyakan target waktu, anggaran indikatif, pengambil keputusan, sumber materi, dan siapa yang akan memberi persetujuan.",
      "Bedakan kebutuhan wajib (must-have), penting (should-have), dan dapat ditunda (could-have). Catat asumsi dan hal yang belum diketahui.",
      "Jangan menjanjikan fitur, harga, deadline, ranking SEO, hasil iklan, atau akurasi AI sebelum analisis kelayakan.",
    ],
    output: "Client Brief, notulen konsultasi, daftar kebutuhan, risiko awal, dan daftar pertanyaan terbuka.",
    gate: "HINAI Tech dan klien memiliki pemahaman awal yang sama tentang masalah serta hasil yang dicari."
  },
  {
    number: "03", title: "Qualification & Feasibility", owner: "Founder / Project Lead / Technical Lead",
    purpose: "Menentukan apakah kebutuhan cocok, layak, dan dapat dikerjakan dengan kapasitas serta kompetensi HINAI Tech.",
    actions: [
      "Nilai kesesuaian layanan, kompleksitas, risiko, dependensi pihak ketiga, ketersediaan data, dan akses yang diperlukan.",
      "Periksa apakah kebutuhan dapat diselesaikan dengan Agile, Scrum, platform no-code, custom development, atau perlu dibagi beberapa fase.",
      "Identifikasi kebutuhan pihak ketiga seperti domain, hosting, API, lisensi, akun developer, payment gateway, atau biaya iklan.",
      "Tentukan apakah proyek perlu discovery berbayar, proof of concept, audit, atau estimasi awal sebelum proposal final.",
      "Tolak atau rekomendasikan alternatif bila permintaan tidak realistis, melanggar hukum, tidak aman, atau tidak sesuai kapasitas.",
    ],
    output: "Feasibility note, risiko, opsi solusi, kebutuhan resource, dan keputusan lanjut / revisi / tidak diambil.",
    gate: "Ada solusi yang layak dengan asumsi, batasan, dan risiko yang sudah dijelaskan."
  },
  {
    number: "04", title: "Solution Design & Estimation", owner: "Service Lead + Project Manager",
    purpose: "Mengubah kebutuhan menjadi pekerjaan terukur dan estimasi yang dapat dipertanggungjawabkan.",
    actions: [
      "Rancang solusi dan alur pengguna; untuk sistem, uraikan modul, role, data, integrasi, keamanan, dan kebutuhan nonfungsional.",
      "Pecah pekerjaan menjadi deliverable, milestone, task, atau backlog. Hitung kompleksitas, jam kerja, risiko, dan ketergantungan.",
      "Estimasi biaya tenaga kerja, tools, lisensi, hosting, domain, API, perjalanan, pajak, dan biaya pihak ketiga yang relevan.",
      "Susun timeline realistis dengan waktu review klien, pengumpulan materi, approval, pengujian, dan buffer risiko.",
      "Tentukan kriteria penerimaan, batas revisi, dukungan pasca-delivery, serta item yang tidak termasuk.",
    ],
    output: "Solution outline, estimasi biaya dan durasi, milestone, draft scope, serta asumsi pekerjaan.",
    gate: "Tim internal menyetujui kapasitas, margin, risiko, dan kelayakan jadwal sebelum penawaran dikirim."
  },
  {
    number: "05", title: "Proposal & Commercial Offer", owner: "Sales / Founder",
    purpose: "Memberikan penawaran tertulis yang transparan sehingga klien dapat mengambil keputusan.",
    actions: [
      "Kirim proposal berisi ringkasan masalah, solusi, ruang lingkup, deliverable, metode, timeline, harga, termin pembayaran, dan masa berlaku penawaran.",
      "Pisahkan biaya jasa HINAI Tech dari biaya eksternal seperti domain, hosting, lisensi, API, iklan, atau akun platform.",
      "Tuliskan jumlah konsep/halaman/fitur/output, format file, platform target, jumlah putaran revisi, dan bentuk source file bila termasuk.",
      "Jelaskan tanggung jawab klien: materi, akses, feedback, approval, PIC, dan ketepatan pembayaran.",
      "Sertakan ketentuan pembatalan, keterlambatan materi, perubahan scope, garansi, maintenance, dan hak penggunaan hasil.",
    ],
    output: "Proposal, quotation, scope of work, timeline, dan draft kontrak / SPK.",
    gate: "Klien menerima penawaran atau memberikan pertanyaan/perubahan yang dapat dinegosiasikan."
  },
  {
    number: "06", title: "Follow-up, Negotiation & Closing", owner: "Sales / Founder",
    purpose: "Mengubah proposal menjadi kesepakatan kerja yang jelas, bukan sekadar persetujuan lisan.",
    actions: [
      "Lakukan follow-up terjadwal dan personal; tanyakan bagian proposal yang perlu dijelaskan, bukan sekadar menanyakan jadi atau tidak.",
      "Jika anggaran terbatas, kurangi prioritas atau pecah proyek menjadi fase MVP; jangan memangkas QA atau menjanjikan scope sama dengan harga tidak layak.",
      "Negosiasikan scope, milestone, jadwal, termin, dan opsi paket dengan mencatat setiap perubahan.",
      "Minta persetujuan tertulis atas proposal final, SOW/kontrak/SPK, PIC klien, dan jadwal mulai.",
      "Closing dinyatakan sah setelah dokumen disetujui dan pembayaran awal/DP atau PO diterima sesuai perjanjian.",
    ],
    output: "Deal Won, kontrak/SPK/PO, scope final, jadwal, PIC, dan bukti pembayaran awal.",
    gate: "Tidak ada pekerjaan produksi yang dimulai sebelum otorisasi komersial terpenuhi, kecuali discovery berbayar yang terpisah."
  },
  {
    number: "07", title: "Project Onboarding & Kick-off", owner: "Project Manager / Account PIC",
    purpose: "Memindahkan tanggung jawab dari sales ke tim delivery tanpa kehilangan informasi.",
    actions: [
      "Buat project ID, folder proyek, kanal komunikasi, daftar stakeholder, PIC internal, dan PIC klien.",
      "Serahkan seluruh catatan konsultasi, proposal, kontrak, scope, estimasi, risiko, dan janji yang sudah disepakati.",
      "Minta aset, konten, data, kredensial melalui cara aman, akses domain/hosting, dan keputusan desain yang dibutuhkan.",
      "Adakan kick-off untuk menyamakan tujuan, metode, jadwal rapat/review, jalur eskalasi, dan format laporan.",
      "Buat baseline timeline, milestone, backlog/task, dan definisi selesai (Definition of Done).",
    ],
    output: "Project charter, kickoff notes, akses terkontrol, baseline timeline, task/backlog, dan risk log.",
    gate: "Tim memiliki scope final, akses yang diperlukan, PIC, dan bahan minimum untuk memulai."
  },
  {
    number: "08", title: "Production, Review & Change Control", owner: "Project Manager + Delivery Team",
    purpose: "Mengerjakan deliverable sesuai metode, menjaga komunikasi, dan mengendalikan perubahan.",
    actions: [
      "Agile: kerjakan task berdasarkan prioritas, tampilkan hasil bertahap, review, dan lakukan iterasi.",
      "Scrum: kelola Product Backlog, Sprint Planning, Sprint Backlog, Daily Scrum, Sprint Review, dan Retrospective.",
      "Catat progres, keputusan, blocker, feedback, dan bukti kerja di satu sumber informasi proyek.",
      "Minta approval pada milestone yang menjadi prasyarat tahap berikutnya, misalnya sitemap, desain, storyboard, atau prototype.",
      "Untuk permintaan di luar scope, buat Change Request berisi deskripsi, biaya, dampak jadwal, risiko, dan persetujuan sebelum dikerjakan.",
    ],
    output: "Increment/deliverable, laporan progres, approval milestone, issue log, dan change request bila ada.",
    gate: "Setiap output memenuhi acceptance criteria internal dan milestone yang disepakati."
  },
  {
    number: "09", title: "QA, UAT & Final Acceptance", owner: "QA / Service Lead + Client PIC",
    purpose: "Memastikan hasil sesuai scope dan dapat diterima sebelum peluncuran atau pengiriman final.",
    actions: [
      "Lakukan pemeriksaan internal berdasarkan jenis jasa: fungsi, konten, desain, format, kompatibilitas, keamanan, dan performa yang relevan.",
      "Catat bug/temuan dengan langkah reproduksi, tingkat prioritas, bukti, PIC, dan status perbaikan.",
      "Kirim preview, staging, sample, atau build untuk UAT; berikan skenario uji yang mudah diikuti klien.",
      "Kelompokkan feedback menjadi bug dalam scope, revisi sesuai brief, preferensi baru, atau fitur tambahan.",
      "Minta persetujuan tertulis atas hasil akhir atau daftar catatan yang disepakati beserta rencana penyelesaiannya.",
    ],
    output: "QA checklist, test report, UAT record, daftar bug, dan approval penerimaan.",
    gate: "Tidak ada blocker kritis yang belum diselesaikan dan penerimaan hasil terdokumentasi."
  },
  {
    number: "10", title: "Final Payment, Delivery & Handover", owner: "Project Manager + Finance / Admin",
    purpose: "Menyerahkan hasil secara aman, lengkap, dan sesuai ketentuan komersial.",
    actions: [
      "Verifikasi pelunasan atau termin akhir sesuai kontrak sebelum penyerahan aset/akses final, kecuali skema pembayaran berbeda telah disepakati.",
      "Siapkan file final, source code/source project bila termasuk kontrak, installer/build, aset, akun, backup, dan dokumentasi.",
      "Untuk deployment, lakukan backup, rencana rollback, konfigurasi production, smoke test, dan verifikasi domain/SSL/monitoring sesuai scope.",
      "Serahkan akses menggunakan kanal aman, minta klien mengganti password awal, dan jangan mengirim secret/API key melalui dokumen publik.",
      "Lakukan pelatihan atau walkthrough, tanda tangan berita acara serah terima, dan catat tanggal mulai garansi/maintenance.",
    ],
    output: "Final deliverables, handover document, deployment report, invoice/receipt, dan berita acara serah terima.",
    gate: "Klien menerima hasil dan mengetahui cara mengakses, menggunakan, serta meminta dukungan."
  },
  {
    number: "11", title: "After-sales, Evaluation & Retention", owner: "Account PIC / Support",
    purpose: "Menjaga hubungan klien dan memastikan tindak lanjut memiliki batas layanan yang jelas.",
    actions: [
      "Hubungi klien setelah delivery untuk memastikan file/akses diterima dan penggunaan awal berjalan.",
      "Tangani defect yang memenuhi garansi sesuai periode dan pengecualian kontrak.",
      "Tawarkan maintenance, hosting, SEO bulanan, konten berkala, optimasi, atau pengembangan fase berikutnya sebagai kontrak terpisah.",
      "Lakukan evaluasi internal: margin, estimasi vs aktual, keterlambatan, defect, kepuasan klien, dan pelajaran proyek.",
      "Minta testimoni atau izin studi kasus hanya setelah persetujuan klien; jangan mempublikasikan data rahasia.",
    ],
    output: "Maintenance ticket/report, project retrospective, client feedback, dan peluang repeat order/referral.",
    gate: "Proyek ditutup secara administratif; dukungan lanjutan memiliki kontrak atau batas garansi yang jelas."
  },
]

const serviceExecutionPlaybook = [
  {
    title: "Website & Web Application",
    consultation: "Tanyakan tujuan website/sistem, audiens, halaman atau modul, role pengguna, konten, domain, hosting, integrasi, kebutuhan SEO, dan siapa pengelola setelah live.",
    closing: "Kunci jumlah halaman/modul, fitur, bahasa, integrasi, migrasi data, konten yang disediakan klien, milestone desain, termin, biaya pihak ketiga, dan batas revisi.",
    implementation: "Audit kebutuhan → sitemap/user flow → wireframe/UI → approval desain → frontend/backend/CMS/API → input/migrasi konten → QA responsif/fungsi/keamanan/performa → UAT → deployment.",
    delivery: "Serahkan URL production, akun admin, panduan update konten, backup awal, dokumentasi domain/hosting, source code jika dikontrak, dan berita acara. Untuk sistem kompleks, serahkan role matrix, ERD/API docs, serta panduan admin.",
    acceptance: "Halaman/modul sesuai scope, navigasi dan formulir bekerja, data tersimpan benar, tampilan target lolos uji, akses aman, dan klien menyetujui UAT."
  },
  {
    title: "Landing Page & Conversion",
    consultation: "Tanyakan produk/layanan, audiens, sumber traffic, tujuan konversi, penawaran, CTA, bukti/testimoni, materi visual, kanal iklan, dan alat tracking.",
    closing: "Tetapkan satu tujuan utama, jumlah variasi halaman, copywriting termasuk/tidak, integrasi form/WhatsApp/payment, pixel/analytics, domain, dan apakah optimasi pasca-live termasuk.",
    implementation: "Riset audiens dan penawaran → susun copy dan struktur section → wireframe → desain → approval → implementasi mobile-first → pasang form/CTA/tracking → uji event, kecepatan, dan alur prospek → publish.",
    delivery: "Serahkan URL, file desain/source sesuai scope, akses CMS/hosting yang diperlukan, event tracking yang diuji, panduan mengubah konten, serta baseline metrik jika data tersedia.",
    acceptance: "Pesan dan CTA sesuai brief, form masuk ke tujuan yang benar, link berfungsi, tracking terpicu, tampilan mobile rapi, dan tidak ada kesalahan informasi."
  },
  {
    title: "Android, iOS, Cross-platform & Desktop Apps",
    consultation: "Petakan persona, use case, platform/versi OS, perangkat minimum, offline/online, role, data, notifikasi, printer/peripheral, integrasi, distribusi, dan akun developer klien.",
    closing: "Kunci platform dan perangkat uji, modul MVP, backend/API, database lokal/cloud, migrasi, keamanan, store submission, installer, update mechanism, source code, serta biaya akun/API.",
    implementation: "Discovery dan SRS → arsitektur dan backlog → prototype UI/UX → approval → sprint modul inti → integrasi → automated/manual testing → device matrix → UAT → build release dan deployment/distribusi.",
    delivery: "Serahkan APK/AAB/TestFlight/store release atau installer sesuai target, catatan versi, akun dan signing arrangement sesuai kontrak, panduan instalasi, backup, dokumentasi API, serta pelatihan pengguna/admin.",
    acceptance: "Build dapat dipasang di perangkat target, alur utama berfungsi, data tersimpan/sinkron sesuai rancangan, permission benar, crash blocker ditangani, dan UAT ditandatangani."
  },
  {
    title: "AR, 3D, Game & Interactive Simulation",
    consultation: "Tanyakan tujuan pengalaman, target perangkat, platform engine, target FPS/resolusi, durasi, level/scene, marker/tracking, interaksi, aset yang tersedia, audio, bahasa, dan format source.",
    closing: "Tetapkan jumlah scene/level/objek/karakter, kompleksitas model, rigging, animasi, mekanik, platform build, format aset, hak penggunaan aset pihak ketiga, revisi storyboard, dan kriteria performa.",
    implementation: "Concept brief → storyboard/game design document → prototype interaksi → asset pipeline/modeling/rigging/animation → implementasi scene dan logic → integrasi audio/UI → optimasi perangkat → playtest/UAT → build final.",
    delivery: "Serahkan build, source project bila termasuk, daftar aset dan lisensi, panduan build, kontrol, spesifikasi perangkat, video preview bila disepakati, serta instruksi instalasi.",
    acceptance: "Scene, marker, animasi, kontrol, dan interaksi sesuai skenario; build berjalan pada perangkat target; tidak ada blocker; performa dan resolusi memenuhi batas yang disepakati."
  },
  {
    title: "AI, ML, Data Science & Automation",
    consultation: "Tanyakan keputusan/proses yang ingin dibantu, pengguna, sumber dan hak data, volume, kualitas data, contoh input-output, risiko salah jawab, integrasi, kebutuhan privasi, dan biaya operasional.",
    closing: "Tetapkan dataset dan tanggung jawab penyediaan, use case yang termasuk, batas akurasi/metric yang realistis, human approval, guardrails, model/provider, batas biaya API, logging, retensi data, dan larangan penggunaan data.",
    implementation: "Problem framing → data audit/consent → baseline → prototype/POC → evaluasi metrik dan error → iterasi model/prompt/workflow → integrasi dan guardrails → security test → UAT dengan kasus nyata → monitoring dan dokumentasi.",
    delivery: "Serahkan endpoint/aplikasi/workflow, model/configuration sesuai kontrak, laporan evaluasi, batasan model, prompt/knowledge base yang disetujui, panduan operator, dan mekanisme eskalasi manusia.",
    acceptance: "Use case utama lulus test set dan UAT, sumber data sah, akses terkontrol, output dan failure mode terdokumentasi, biaya penggunaan dapat dipantau, dan tidak ada klaim akurasi di luar hasil uji."
  },
  {
    title: "SEO, Content & Digital Marketing",
    consultation: "Tanyakan target bisnis, produk, audiens, lokasi, keyword, kondisi website/akun, kompetitor, brand voice, volume konten, akses analytics, anggaran iklan, dan indikator keberhasilan.",
    closing: "Kunci jumlah artikel/posting, panjang dan format, kalender, platform, jumlah campaign, budget media (terpisah dari fee), akses akun, approval SLA, report cadence, dan batas revisi.",
    implementation: "Audit baseline → riset keyword/audiens → strategi dan kalender → brief → produksi konten/copy/creative → editorial/fact check → approval → publish/campaign setup → monitoring → optimasi dan laporan.",
    delivery: "Serahkan dokumen artikel, metadata, kalender, aset kreatif, campaign structure, laporan spend/performa, rekomendasi, dan daftar pekerjaan periode berikutnya sesuai paket.",
    acceptance: "Jumlah dan format output terpenuhi, informasi tervalidasi, konten sesuai brief dan brand voice, link/CTA benar, publikasi sesuai jadwal, dan laporan berbasis data yang tersedia. Ranking atau penjualan tidak dijamin.",
  },
  {
    title: "Branding, UI/UX, Graphic & Document Design",
    consultation: "Tanyakan audiens, tujuan komunikasi, karakter brand, pesan utama, ukuran/media, referensi, konten final, format editable, kanal cetak/digital, dan hak penggunaan aset.",
    closing: "Tetapkan jumlah konsep, jumlah halaman/slide/post, variasi ukuran, format ekspor dan source file, lisensi font/foto, jumlah revisi, deadline materi, serta pihak pemberi approval.",
    implementation: "Creative brief → moodboard/arah visual → draft konsep/wireframe → review terarah → revisi sesuai brief → final artwork/prototype → pemeriksaan ejaan, ukuran, kontras, dan konsistensi → export.",
    delivery: "Serahkan PNG/JPG/PDF/MP4 atau format editable yang tercantum, aset terhubung bila termasuk, spesifikasi cetak/digital, guideline penggunaan, dan daftar font/asset berlisensi.",
    acceptance: "Konten benar, ukuran/format sesuai, desain terbaca pada media target, seluruh output yang dipesan tersedia, dan file dapat dibuka sesuai format yang dijanjikan."
  },
  {
    title: "Maintenance, Technical Support & Infrastructure",
    consultation: "Tanyakan sistem yang dikelola, hosting/provider, arsitektur, akses, trafik, backup, monitoring, SLA, jam dukungan, riwayat insiden, dan tanggung jawab vendor sebelumnya.",
    closing: "Tetapkan daftar aset yang dikelola, jam layanan, response target, prioritas insiden, jumlah request, patch/update, backup retention, biaya cloud pihak ketiga, pengecualian, dan mekanisme eskalasi.",
    implementation: "Onboarding akses aman → baseline audit → inventaris aset → backup dan recovery check → monitoring → tiket/prioritas → maintenance window → perbaikan → regression check → laporan periodik.",
    delivery: "Serahkan baseline kondisi, daftar aset, prosedur eskalasi, jadwal maintenance, status backup, laporan insiden, dan rekomendasi kapasitas/keamanan. Jangan menyerahkan password plaintext.",
    acceptance: "Aset sesuai daftar, akses teruji, backup dan monitoring diverifikasi, tiket memiliki status/hasil, serta batas SLA dan pengecualian dipahami kedua pihak."
  },
]



// SERVICE-LEVEL METHODOLOGY MATRIX: 62 layanan dipetakan satu per satu tanpa mengganti katalog yang sudah ada.
const serviceMethodologyMatrix = [
  {
    name: 'Company Profile Website', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'halaman profil, layanan, portofolio, kontak, CMS opsional, SEO teknis dasar', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Personal Website & Portfolio', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'profil personal, karya, bio, kontak, responsivitas, dan kemudahan update', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Business Website', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'struktur layanan/produk, kredibilitas, formulir prospek, lokasi, dan analitik', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'E-Commerce / Online Store', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'katalog, cart, checkout, pembayaran, stok, pesanan, dan keamanan transaksi', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Web Application Development', category: "Website & Web Application Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'alur pengguna, role, proses bisnis, database, API, dan kebutuhan operasional', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'SaaS Development', category: "Website & Web Application Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'tenant isolation, subscription, onboarding, billing, observability, dan skalabilitas', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'CMS Development', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'content model, role editor, workflow publikasi, media, dan backup', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'No-Code / Low-Code Development', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'validasi kebutuhan, batas platform, workflow, integrasi, dan portabilitas data', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Custom System, ERP & CRM', category: "Website & Web Application Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'proses lintas divisi, role/approval, master data, laporan, dan integrasi', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Website Redesign & Migration', category: "Website & Web Application Development", complexity: 'Menengah', duration: "2–7 hari untuk scope standar; 8–20 hari jika ada CMS, integrasi, migrasi, atau banyak halaman.",
    recommended: "Agile Rapid untuk website sederhana; Agile Iterative untuk website dengan beberapa halaman dan integrasi. Scrum hanya bila berkembang menjadi produk web multi-modul dengan dependensi tim.", focus: 'audit URL/aset, desain ulang, redirect, SEO preservation, dan validasi data', deliveryFlow: "Sitemap dan konten → desain responsif → implementasi → integrasi → QA → UAT → deployment.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Business Landing Page', category: "Landing Page Development", complexity: 'Rendah–menengah', duration: "1–5 hari untuk satu landing page; 6–10 hari bila mencakup copywriting, tracking, variasi, atau integrasi.",
    recommended: "Agile Rapid untuk satu halaman dengan brief dan materi siap; Agile Iterative untuk campaign multi-varian dan optimasi berbasis data. Scrum tidak diperlukan kecuali menjadi platform campaign kompleks.", focus: 'penawaran bisnis, manfaat, bukti, CTA, formulir, dan lead routing', deliveryFlow: "Tujuan konversi → penawaran dan copy → wireframe → build mobile-first → tracking → uji CTA/form → publish.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Product Landing Page', category: "Landing Page Development", complexity: 'Rendah–menengah', duration: "1–5 hari untuk satu landing page; 6–10 hari bila mencakup copywriting, tracking, variasi, atau integrasi.",
    recommended: "Agile Rapid untuk satu halaman dengan brief dan materi siap; Agile Iterative untuk campaign multi-varian dan optimasi berbasis data. Scrum tidak diperlukan kecuali menjadi platform campaign kompleks.", focus: 'value proposition, fitur, manfaat, bukti, FAQ, CTA, dan event tracking', deliveryFlow: "Tujuan konversi → penawaran dan copy → wireframe → build mobile-first → tracking → uji CTA/form → publish.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Event / Webinar Landing Page', category: "Landing Page Development", complexity: 'Rendah–menengah', duration: "1–5 hari untuk satu landing page; 6–10 hari bila mencakup copywriting, tracking, variasi, atau integrasi.",
    recommended: "Agile Rapid untuk satu halaman dengan brief dan materi siap; Agile Iterative untuk campaign multi-varian dan optimasi berbasis data. Scrum tidak diperlukan kecuali menjadi platform campaign kompleks.", focus: 'agenda, pembicara, registrasi, reminder, kapasitas, dan konfirmasi', deliveryFlow: "Tujuan konversi → penawaran dan copy → wireframe → build mobile-first → tracking → uji CTA/form → publish.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Property Landing Page', category: "Landing Page Development", complexity: 'Rendah–menengah', duration: "1–5 hari untuk satu landing page; 6–10 hari bila mencakup copywriting, tracking, variasi, atau integrasi.",
    recommended: "Agile Rapid untuk satu halaman dengan brief dan materi siap; Agile Iterative untuk campaign multi-varian dan optimasi berbasis data. Scrum tidak diperlukan kecuali menjadi platform campaign kompleks.", focus: 'detail properti, galeri, lokasi, spesifikasi, lead form, dan kontak agen', deliveryFlow: "Tujuan konversi → penawaran dan copy → wireframe → build mobile-first → tracking → uji CTA/form → publish.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Campaign / Advertising Landing Page', category: "Landing Page Development", complexity: 'Rendah–menengah', duration: "1–5 hari untuk satu landing page; 6–10 hari bila mencakup copywriting, tracking, variasi, atau integrasi.",
    recommended: "Agile Rapid untuk satu halaman dengan brief dan materi siap; Agile Iterative untuk campaign multi-varian dan optimasi berbasis data. Scrum tidak diperlukan kecuali menjadi platform campaign kompleks.", focus: 'konsistensi iklan, pesan, CTA, pixel, UTM, dan pengalaman mobile', deliveryFlow: "Tujuan konversi → penawaran dan copy → wireframe → build mobile-first → tracking → uji CTA/form → publish.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'A/B Testing & Conversion Rate Optimization', category: "Landing Page Development", complexity: 'Rendah–menengah', duration: "1–5 hari untuk satu landing page; 6–10 hari bila mencakup copywriting, tracking, variasi, atau integrasi.",
    recommended: "Agile Rapid untuk satu halaman dengan brief dan materi siap; Agile Iterative untuk campaign multi-varian dan optimasi berbasis data. Scrum tidak diperlukan kecuali menjadi platform campaign kompleks.", focus: 'hipotesis, baseline, varian, event, sampel, analisis, dan keputusan eksperimen', deliveryFlow: "Tujuan konversi → penawaran dan copy → wireframe → build mobile-first → tracking → uji CTA/form → publish.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Android Application Development', category: "Mobile, Desktop & Application Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'use case, versi Android, permission, offline, notifikasi, backend, dan distribusi', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'iOS Application Development', category: "Mobile, Desktop & Application Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'use case, dukungan iOS, permission, provisioning, TestFlight, dan App Store', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Cross-Platform Mobile Application', category: "Mobile, Desktop & Application Development", complexity: 'Menengah–tinggi', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'shared code, native capability, device matrix, API, dan release dua platform', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Desktop Application Development', category: "Mobile, Desktop & Application Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'OS target, installer, update, penyimpanan lokal, peripheral, dan backup', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Progressive Web Application', category: "Mobile, Desktop & Application Development", complexity: 'Menengah–tinggi', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'installability, caching, offline boundary, push support, dan responsive behavior', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Custom Business Application', category: "Mobile, Desktop & Application Development", complexity: 'Menengah–tinggi', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'alur kerja, role, validasi, laporan, integrasi, dan audit trail', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Educational Application', category: "Mobile, Desktop & Application Development", complexity: 'Menengah–tinggi', duration: "7–30 hari untuk aplikasi sederhana; 30–90+ hari untuk multi-platform, backend, offline, role, atau integrasi kompleks.",
    recommended: "Agile Iterative untuk MVP kecil; Scrum untuk aplikasi multi-modul, multi-platform, integrasi, dan pengembangan produk berkelanjutan.", focus: 'peran siswa/guru/admin, materi, aktivitas, penilaian, dan privasi pengguna', deliveryFlow: "Discovery/SRS → prototype → backlog → modul MVP → integrasi → uji perangkat → UAT → release.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Augmented Reality Application', category: "AR, 3D & Game Development", complexity: 'Menengah–tinggi', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'tracking, marker/surface, scene, interaksi, perangkat, dan performa', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'AR Learning Media', category: "AR, 3D & Game Development", complexity: 'Menengah–tinggi', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'tujuan belajar, marker, objek 3D, narasi, aktivitas, dan evaluasi pemahaman', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: '3D Modeling & Asset Creation', category: "AR, 3D & Game Development", complexity: 'Menengah–tinggi', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'referensi, topology, UV, material, polygon budget, rig readiness, dan format ekspor', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: '3D Animation Production', category: "AR, 3D & Game Development", complexity: 'Menengah–tinggi', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'storyboard, durasi, shot list, model, rig, animasi, audio, render, dan revisi', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: '2D Game Development', category: "AR, 3D & Game Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'core loop, level, input, UI, scoring, audio, dan balancing', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: '3D Game Development', category: "AR, 3D & Game Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'gameplay loop, camera, physics, level, asset, performance, dan build target', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Interactive Simulation', category: "AR, 3D & Game Development", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "3–14 hari untuk aset/animasi sederhana; 14–45 hari untuk AR/game/simulasi dengan beberapa scene; 45–120+ hari untuk produk interaktif kompleks.",
    recommended: "Agile Iterative untuk produksi aset dan pengalaman terbatas; Scrum untuk game/AR kompleks dengan gameplay, scene, backend, dan iterasi lintas fungsi.", focus: 'skenario, state, interaksi, feedback, akurasi konsep, dan perangkat target', deliveryFlow: "Concept → storyboard/GDD → prototype → asset production → implementasi → playtest → optimasi → build.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'AI Consulting', category: "AI, Machine Learning & Data Science", complexity: 'Menengah–tinggi', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'tujuan bisnis, use case, kelayakan, risiko, biaya, data, dan roadmap implementasi', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'AI Chatbot Development', category: "AI, Machine Learning & Data Science", complexity: 'Menengah–tinggi', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'intent, knowledge base, retrieval, fallback, eskalasi manusia, dan evaluasi jawaban', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'AI Agent Development', category: "AI, Machine Learning & Data Science", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'tools, izin tindakan, orkestrasi, memory, guardrails, logging, dan human approval', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Machine Learning Development', category: "AI, Machine Learning & Data Science", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'dataset, label, baseline, feature, metric, validation, deployment, dan drift', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Data Science & Analytics', category: "AI, Machine Learning & Data Science", complexity: 'Menengah–tinggi', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'pertanyaan analitik, kualitas data, transformasi, visualisasi, insight, dan rekomendasi', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Business Process Automation', category: "AI, Machine Learning & Data Science", complexity: 'Menengah–tinggi', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'trigger, workflow, kondisi, integrasi, exception, retry, dan audit log', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'AI Integration', category: "AI, Machine Learning & Data Science", complexity: 'Menengah–tinggi', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'API/provider, prompt/data contract, latency, cost control, fallback, dan security', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Predictive Analytics', category: "AI, Machine Learning & Data Science", complexity: 'Tinggi; lakukan feasibility dan breakdown modul', duration: "3–10 hari untuk konsultasi, chatbot/otomasi sederhana; 14–60+ hari untuk integrasi, data, model, evaluasi, dan AI Agent kompleks.",
    recommended: "Agile Iterative untuk POC, chatbot berbasis knowledge base, dan otomasi terbatas; Scrum untuk platform AI multi-modul, pipeline data, agent orchestration, dan integrasi kompleks.", focus: 'target prediksi, time window, data leakage, baseline, metric, interpretasi, dan monitoring', deliveryFlow: "Problem framing → audit data → baseline/POC → evaluasi → iterasi → guardrails → integrasi → UAT → monitoring.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Artikel SEO', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'search intent, outline, sumber, draft, optimasi on-page, metadata, dan editorial review', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'SEO Content Writing', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'intent, keyword cluster, struktur, kualitas informasi, internal link, dan metadata', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Product Description & Copywriting', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'target pembeli, fitur faktual, manfaat, diferensiasi, CTA, dan konsistensi tone', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'SEO Website Optimization', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'technical audit, indexability, Core Web Vitals, metadata, internal link, dan monitoring', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Keyword Research', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'seed keyword, intent, volume/trend tool, difficulty, cluster, dan prioritas', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Local SEO', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'profil bisnis, NAP consistency, kategori, layanan, review process, dan landing area', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Social Media Management', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'pilar konten, kalender, desain/copy, approval, publishing, engagement, dan report', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Digital Advertising / Meta Ads', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'objective, audience, creative, pixel/event, budget, policy, dan optimasi', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Google Ads', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'keyword, intent, campaign structure, conversion tracking, negative keyword, dan spend report', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Content Strategy', category: "SEO & Digital Marketing", complexity: 'Rendah–menengah', duration: "1–3 hari per artikel/aset; 5–14 hari untuk audit atau setup; layanan SEO/marketing berjalan dalam siklus bulanan.",
    recommended: "Agile Rapid untuk output tunggal; Agile Iterative/Kanban untuk kalender konten, SEO, social media, dan ads yang perlu optimasi berkala. Scrum biasanya tidak diperlukan.", focus: 'persona, funnel, pillar, channel, kalender, KPI, dan editorial governance', deliveryFlow: "Audit/baseline → riset → brief → produksi → editorial/approval → publish → monitoring → laporan/optimasi.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Logo Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'brief, positioning, konsep, bentuk, tipografi, warna, variasi, dan file final', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Brand Identity Development', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'brand strategy, logo system, palette, typography, imagery, guideline, dan applications', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'UI/UX Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'persona, journey, information architecture, wireframe, prototype, usability, dan handoff', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Website UI Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'layout, hierarchy, responsive states, component, accessibility, dan design handoff', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Mobile App UI/UX Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'mobile flow, navigation, touch target, empty/error states, prototype, dan handoff', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Graphic Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'tujuan pesan, format, hierarchy, visual asset, readability, dan export', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Document Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'struktur informasi, template, typography, pagination, consistency, dan PDF/editable output', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Presentation Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'audience, narrative, slide outline, hierarchy, visual support, dan presenter readiness', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Social Media Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'platform ratio, brand consistency, headline, visual hook, carousel/story variants, dan export', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Marketing & Promotion Design', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'campaign objective, audience, offer, channel, CTA, format variants, dan final asset', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: '2D/3D Animation & Video Editing', category: "Branding, UI/UX & Creative Design", complexity: 'Rendah–menengah', duration: "1–3 hari untuk desain tunggal; 3–10 hari untuk identitas/serangkaian aset; 7–20 hari untuk UI/UX multi-alur atau dokumen besar.",
    recommended: "Agile Rapid untuk satu aset; Agile Iterative untuk branding, UI/UX, presentasi, dan paket desain dengan beberapa review. Scrum hanya bila desain menjadi bagian tim produk kompleks.", focus: 'script, storyboard, asset, animatic, motion, audio, subtitle, render, dan export', deliveryFlow: "Creative brief → arah visual → draft → review → revisi sesuai scope → final artwork/prototype → preflight/export.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Website & Application Maintenance', category: "Maintenance & Technical Support", complexity: 'Menengah', duration: "1–3 hari per tiket sederhana; 3–10 hari untuk audit/perbaikan; maintenance berulang dikelola per bulan dan tiket.",
    recommended: "Kanban untuk tiket dan support; Agile Iterative untuk improvement terjadwal; Scrum hanya untuk proyek upgrade/migrasi infrastruktur besar.", focus: 'inventory, backup, dependency, patch, uptime, regression, dan maintenance log', deliveryFlow: "Intake tiket → prioritas/severity → diagnosis → backup bila relevan → perbaikan → regression check → laporan/close.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Technical Support', category: "Maintenance & Technical Support", complexity: 'Rendah–menengah; bergantung jumlah output', duration: "1–3 hari per tiket sederhana; 3–10 hari untuk audit/perbaikan; maintenance berulang dikelola per bulan dan tiket.",
    recommended: "Kanban untuk tiket dan support; Agile Iterative untuk improvement terjadwal; Scrum hanya untuk proyek upgrade/migrasi infrastruktur besar.", focus: 'ticket, severity, reproduction steps, diagnosis, fix/workaround, verification, dan closure', deliveryFlow: "Intake tiket → prioritas/severity → diagnosis → backup bila relevan → perbaikan → regression check → laporan/close.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  },
  {
    name: 'Cloud & Server Infrastructure', category: "Maintenance & Technical Support", complexity: 'Menengah', duration: "1–3 hari per tiket sederhana; 3–10 hari untuk audit/perbaikan; maintenance berulang dikelola per bulan dan tiket.",
    recommended: "Kanban untuk tiket dan support; Agile Iterative untuk improvement terjadwal; Scrum hanya untuk proyek upgrade/migrasi infrastruktur besar.", focus: 'architecture, access, network, deployment, backup, monitoring, security, dan recovery', deliveryFlow: "Intake tiket → prioritas/severity → diagnosis → backup bila relevan → perbaikan → regression check → laporan/close.",
    agile: "Pecah pekerjaan menjadi task kecil yang dapat diselesaikan dan diperiksa setiap hari. Tetapkan acceptance criteria sebelum mulai. Untuk durasi 1–2 hari, gunakan brief singkat, satu prioritas utama, review internal, lalu validasi klien. Untuk 3–5 hari, tambahkan checkpoint setelah draft/prototype dan sebelum finalisasi. Untuk 6–10 hari, buat milestone analisis, produksi, review, QA, dan delivery. Feedback dicatat sebagai perubahan terkontrol; jangan mengubah scope diam-diam.",
    scrum: "Gunakan Scrum hanya jika pekerjaan ini menjadi bagian produk kompleks: banyak modul, beberapa peran, integrasi, risiko teknis, dan backlog yang terus berkembang. Buat Product Backlog, definisikan Product Goal, pilih item yang siap ke Sprint Backlog, dan pecah menjadi task. Sprint 1–2 minggu dapat dipakai untuk proyek yang memang cukup panjang; pekerjaan singkat tidak perlu dipaksa menjadi Sprint. Setiap Sprint menghasilkan increment yang dapat didemonstrasikan, diuji, dan dibandingkan dengan Definition of Done.",
    checkpoints: "Brief disetujui; scope dan materi tersedia; draft/prototype direview; hasil lolos pemeriksaan internal; klien melakukan acceptance; file/akses/dokumentasi diserahkan.",
    scrumFit: "Rendah untuk pesanan tunggal yang selesai cepat; meningkat menjadi tinggi bila layanan ini masuk dalam pengembangan platform atau produk multi-modul.",
  }
]

const durationOperatingRules = [
  { range: "1 hari", mode: "Agile Rapid / Kanban", plan: "Brief dan scope harus sudah jelas sebelum jam kerja dimulai. Pagi: validasi materi dan acceptance criteria. Tengah hari: produksi/perbaikan dan pemeriksaan mandiri. Sore: QA, review klien, finalisasi, dan serah terima. Jika dependency atau materi belum tersedia, deadline dihitung ulang secara tertulis.", ceremonies: "Tidak ada Sprint formal. Gunakan kickoff singkat, update status, peer review bila perlu, dan acceptance akhir." },
  { range: "2 hari", mode: "Agile Rapid", plan: "Hari pertama untuk discovery ringkas, struktur/konsep, dan produksi utama. Hari kedua untuk penyelesaian, QA, feedback yang termasuk scope, dan delivery. Untuk desain, minta approval arah visual lebih awal; untuk development, uji fungsi sejak modul pertama selesai.", ceremonies: "Kickoff, satu checkpoint, QA, client review, dan handover." },
  { range: "3–5 hari", mode: "Agile Rapid dengan checkpoint", plan: "Hari awal untuk brief, analisis, dan rencana; hari tengah untuk produksi bertahap; satu checkpoint wajib sebelum finalisasi; hari akhir untuk QA, revisi sesuai batas, acceptance, dan handover. Jangan menunggu hari terakhir untuk menunjukkan hasil pertama.", ceremonies: "Daily update singkat, internal review, satu atau dua client checkpoint, final acceptance." },
  { range: "6–10 hari", mode: "Agile Iterative", plan: "Bagi pekerjaan menjadi fase discovery/design, build/production, integrasi, QA, dan delivery. Setiap fase memiliki output yang bisa diperiksa. Gunakan backlog ringan dan prioritas must-have lebih dahulu.", ceremonies: "Planning awal, check-in harian/asinkron, review milestone, retrospective singkat internal, UAT." },
  { range: "11–20 hari", mode: "Agile Iterative atau Scrum ringan", plan: "Jika scope cukup stabil, gunakan iterasi 3–5 hari. Jika ada beberapa modul yang saling bergantung, pertimbangkan satu Sprint 1–2 minggu dengan backlog dan increment yang jelas.", ceremonies: "Planning, daily coordination, review iterasi, refinement, retrospective; pilih seremoni sesuai ukuran tim." },
  { range: "21–40 hari", mode: "Agile Iterative / Scrum", plan: "Buat milestone dan backlog berprioritas. Proyek dengan modul independen dapat diselesaikan dalam beberapa iterasi. Proyek kompleks memakai Sprint 1–2 minggu dan demo pada akhir Sprint.", ceremonies: "Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective, dan Product Backlog Refinement." },
  { range: "41–90 hari", mode: "Scrum untuk kompleksitas tinggi", plan: "Susun Product Goal, roadmap, release plan, Product Backlog, definisi selesai, risiko, dan dependency. Sprint 1–2 minggu menghasilkan increment yang dapat diuji; UAT tidak ditumpuk seluruhnya pada hari terakhir.", ceremonies: "Seluruh event Scrum dengan timebox yang proporsional; stakeholder hadir pada review dan keputusan prioritas." },
  { range: "Di atas 90 hari", mode: "Scrum / kombinasi beberapa workstream", plan: "Bagi produk menjadi release dan workstream. Kelola dependency lintas tim, arsitektur, keamanan, migrasi, adopsi pengguna, dan biaya operasi. Release dilakukan bertahap berdasarkan risiko dan kesiapan.", ceremonies: "Scrum pada tim pengembang; koordinasi lintas tim dan governance pada level program; evaluasi roadmap per release." },
]

const methodSelectionPrinciples = [
  { title: "Durasi bukan satu-satunya penentu", body: "Proyek 5 hari dapat sangat kompleks jika menyentuh sistem produksi, pembayaran, data sensitif, atau infrastruktur kritis. Sebaliknya, pekerjaan 20 hari dapat tetap memakai Agile Iterative jika hasilnya berupa rangkaian output independen dengan scope stabil." },
  { title: "Scope dan ketidakpastian", body: "Jika hasil, materi, dan kriteria penerimaan sudah jelas, Rapid Delivery lebih efisien. Jika kebutuhan perlu divalidasi melalui prototipe dan feedback, gunakan iterasi. Jika prioritas dan solusi berkembang bersama banyak stakeholder, gunakan Scrum." },
  { title: "Dependency dan jumlah modul", body: "Semakin banyak integrasi, role, platform, data migration, dan dependency pihak ketiga, semakin penting backlog, risk register, architecture decision, dan koordinasi terstruktur. Kompleksitas ini dapat menjadi alasan memilih Scrum meskipun estimasi durasinya belum panjang." },
  { title: "Risiko dan konsekuensi kegagalan", body: "Sistem pembayaran, data pelanggan, keamanan, dan infrastruktur memerlukan QA, backup, rollback, serta approval lebih ketat. Jangan memangkas pengujian hanya karena tenggat singkat; sesuaikan scope atau jadwal." },
  { title: "Ketersediaan klien", body: "Kecepatan proyek juga bergantung pada kecepatan klien menyediakan konten, akses, keputusan, dan feedback. Proposal harus mencatat waktu respons klien dan dampak keterlambatan approval terhadap jadwal." },
  { title: "Kapasitas tim", body: "Estimasi harus mempertimbangkan kapasitas nyata PIC, pekerjaan paralel, keahlian, dan waktu QA. Jangan menjanjikan tanggal hanya dengan membagi total task ke jumlah hari kalender." },
]

const projectStatuses = [
  "New",
  "Analysis",
  "Planning",
  "Ready",
  "In Progress",
  "Internal Review",
  "Client Review",
  "Revision",
  "Testing",
  "UAT",
  "Blocked",
  "Done",
  "Delivered",
  "Closed",
]

const projectChecklist = [
  {
    title: "A. Project Intake",
    items: [
      "Permintaan klien diterima dan dicatat.",
      "Jenis layanan dan kebutuhan awal diidentifikasi.",
      "Konsultasi atau discovery dilakukan.",
      "Client Brief dibuat.",
      "Materi dan akses awal dikumpulkan.",
    ],
  },
  {
    title: "B. Planning",
    items: [
      "Metode Agile atau Scrum ditentukan.",
      "Ruang lingkup dan deliverables disepakati.",
      "Estimasi biaya dan timeline disampaikan.",
      "PIC dan tanggung jawab ditentukan.",
      "Dokumen proyek dibuat.",
    ],
  },
  {
    title: "C. Execution",
    items: [
      "Task atau backlog disusun.",
      "Pekerjaan dilakukan berdasarkan prioritas.",
      "Status dan progres diperbarui.",
      "Hambatan dicatat dan dieskalasikan.",
      "Perubahan kebutuhan didokumentasikan.",
    ],
  },
  {
    title: "D. Quality Assurance",
    items: [
      "Pemeriksaan internal dilakukan.",
      "Fungsi dan output dibandingkan dengan brief.",
      "Bug atau kesalahan dicatat.",
      "Perbaikan dilakukan dan diuji ulang.",
      "Hasil siap direview klien.",
    ],
  },
  {
    title: "E. Delivery",
    items: [
      "Persetujuan hasil diperoleh.",
      "Pembayaran sesuai perjanjian diverifikasi.",
      "File, akses, dan dokumentasi disiapkan.",
      "Serah terima dilakukan.",
      "Proyek diarsipkan.",
    ],
  },
  {
    title: "F. Post-Delivery",
    items: [
      "Klien menerima hasil.",
      "Masa garansi atau maintenance dijelaskan.",
      "Tiket dukungan dicatat jika ada.",
      "Evaluasi internal dilakukan.",
      "Peluang layanan lanjutan dicatat.",
    ],
  },
]

const operatingPrinciples = [
  {
    title: "Satu sumber informasi proyek",
    description:
      "Semua brief, task, feedback, perubahan, keputusan, dan status harus dicatat pada sistem atau dokumen proyek. Hindari keputusan penting hanya melalui percakapan lisan.",
  },
  {
    title: "Setiap pekerjaan harus memiliki PIC",
    description:
      "Setiap task memiliki satu penanggung jawab utama, deadline, output yang jelas, dan kriteria selesai. Anggota lain dapat membantu, tetapi tanggung jawab tetap jelas.",
  },
  {
    title: "Persetujuan sebelum tahap penting",
    description:
      "Konsep, desain, ruang lingkup, hasil akhir, dan perubahan besar perlu mendapatkan persetujuan klien secara tertulis melalui kanal yang disepakati.",
  },
  {
    title: "Revisi harus sesuai kontrak",
    description:
      "Revisi adalah penyempurnaan output yang masih berada dalam brief dan ruang lingkup. Fitur baru, halaman tambahan, perubahan arah konsep, atau pekerjaan tambahan harus melalui Change Request.",
  },
  {
    title: "QA bukan pekerjaan opsional",
    description:
      "Semua hasil harus melewati pemeriksaan internal. Untuk aplikasi dan sistem, pengujian fungsi, hak akses, alur data, dan skenario penggunaan wajib diperhatikan.",
  },
  {
    title: "Tidak menjanjikan fitur di luar kemampuan dan scope",
    description:
      "Tim harus memeriksa kelayakan teknis, akses, lisensi, API pihak ketiga, dan dependensi sebelum menyetujui kebutuhan klien.",
  },
  {
    title: "Dokumentasi adalah bagian dari hasil kerja",
    description:
      "Dokumentasi, akses, panduan, dan catatan teknis yang termasuk dalam kontrak harus disiapkan sebelum proyek ditutup.",
  },
  {
    title: "Keamanan dan kerahasiaan data",
    description:
      "Akses klien harus digunakan sesuai kewenangan. Kredensial tidak boleh dibagikan sembarangan, data harus ditangani secara bertanggung jawab, dan backup perlu dipertimbangkan sesuai risiko.",
  },
]

const faqs = [
  {
    q: "Apakah semua proyek menggunakan Scrum?",
    a: "Tidak. HINAI Tech menggunakan Agile untuk pekerjaan yang relatif jelas, terukur, dan dapat diselesaikan melalui siklus pengerjaan serta review. Scrum digunakan untuk pengembangan produk atau sistem yang memiliki banyak fitur, modul, integrasi, dan kebutuhan iterasi.",
  },
  {
    q: "Mengapa HINAI Tech hanya menetapkan Agile dan Scrum?",
    a: "Keduanya menjadi kerangka kerja utama yang cukup fleksibel untuk menangani layanan kreatif sekaligus pengembangan sistem. Pemilihan metode ditentukan oleh karakter pekerjaan, bukan sekadar mengikuti istilah metodologi.",
  },
  {
    q: "Apakah klien harus memahami Agile atau Scrum?",
    a: "Tidak harus. HINAI Tech menjelaskan proses, target, jadwal, persetujuan, dan hasil pekerjaan dengan bahasa yang mudah dipahami. Klien cukup terlibat pada konsultasi, review, pemberian feedback, dan UAT jika diperlukan.",
  },
  {
    q: "Apakah estimasi waktu selalu sama dengan jumlah tahap?",
    a: "Tidak. Tahap kerja adalah urutan aktivitas, bukan janji durasi. Waktu proyek ditentukan oleh kompleksitas, jumlah output, kesiapan materi, integrasi, kapasitas tim, dan kecepatan persetujuan klien.",
  },
  {
    q: "Bagaimana jika klien meminta fitur tambahan di tengah proyek?",
    a: "Permintaan dicatat sebagai Change Request. Tim menganalisis dampak terhadap biaya, waktu, risiko, dan ruang lingkup. Pekerjaan tambahan dimulai setelah perubahan disetujui.",
  },
  {
    q: "Apa yang terjadi setelah proyek selesai?",
    a: "HINAI Tech melakukan serah terima dan memberikan dukungan sesuai kontrak. Maintenance, hosting, pengembangan fitur baru, atau dukungan berkala dapat diatur sebagai layanan terpisah.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}

function MethodBadge({ method }: { method: "Agile" | "Scrum" }) {
  const isScrum = method === "Scrum"

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${
        isScrum
          ? "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300"
          : "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300"
      }`}
    >
      {method}
    </span>
  )
}

function StageCard({
  index,
  title,
  description,
  tasks,
  output,
}: {
  index: number
  title: string
  description: string
  tasks: string[]
  output: string
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-slate-900">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-amber-400 dark:bg-amber-400 dark:text-slate-950">
          {String(index).padStart(2, "0")}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
            <span>{task}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/80">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Output tahap
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">{output}</p>
      </div>
    </div>
  )
}

export default function MethodologyPage() {
  const totalServices = serviceCategories.reduce(
    (total, category) => total + category.services.length,
    0,
  )

  const agileCount = serviceCategories.reduce(
    (total, category) =>
      total + category.services.filter((service) => service.method === "Agile").length,
    0,
  )

  const scrumCount = totalServices - agileCount

  return (
    <LanguageProvider>
      <Navigation />

      <main className="overflow-hidden bg-white text-slate-900 dark:bg-[#070b14] dark:text-white">
        {/* HERO */}
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#090f1d]">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-300">
                <Workflow className="h-4 w-4" />
                HINAI Tech Project Framework
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                How We Work
                <span className="block text-amber-500">& Project Methodology.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Setiap proyek digital membutuhkan proses yang jelas. HINAI Tech
                menggabungkan pendekatan Agile dan Scrum untuk mengelola pekerjaan
                secara terstruktur, transparan, terukur, dan berorientasi pada hasil.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                Dari konsultasi pertama hingga produk digunakan, setiap tahap
                memiliki tujuan, aktivitas, penanggung jawab, pemeriksaan kualitas,
                dan hasil yang dapat ditinjau.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Konsultasikan Proyek <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#how-we-work"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-600 dark:border-white/20 dark:text-white"
                >
                  Pelajari Proses <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Our Working System
                    </p>
                    <h2 className="mt-2 text-xl font-bold">Project Lifecycle</h2>
                  </div>
                  <div className="rounded-xl bg-amber-400/15 p-3 text-amber-500">
                    <Workflow className="h-6 w-6" />
                  </div>
                </div>

                {[
                  ["01", "Discover", "Memahami kebutuhan dan tujuan."],
                  ["02", "Plan", "Menentukan scope, metode, dan prioritas."],
                  ["03", "Create", "Desain dan pengembangan solusi."],
                  ["04", "Validate", "QA, review, testing, dan UAT."],
                  ["05", "Deliver", "Deployment dan serah terima."],
                  ["06", "Improve", "Maintenance dan pengembangan lanjutan."],
                ].map(([number, title, description], index) => (
                  <div key={number} className="relative flex gap-4 pb-5 last:pb-0">
                    {index !== 5 && (
                      <div className="absolute left-[17px] top-10 h-[calc(100%-28px)] w-px bg-slate-200 dark:bg-white/10" />
                    )}
                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-amber-400 dark:bg-amber-400 dark:text-slate-950">
                      {number}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-amber-400/10 p-4">
                    <p className="text-2xl font-black text-amber-500">Agile</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Flexible delivery</p>
                  </div>
                  <div className="rounded-xl bg-blue-500/10 p-4">
                    <p className="text-2xl font-black text-blue-500">Scrum</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Sprint-based delivery</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">
                A clear process. Measurable progress. Accountable delivery.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="how-we-work" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="01 — Our Process"
              title="How We Work"
              description="Kami tidak langsung mengerjakan proyek tanpa memahami kebutuhan. Setiap pekerjaan dimulai dari komunikasi yang jelas, perencanaan, pelaksanaan, pemeriksaan, dan penyerahan hasil."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: MessageSquare,
                  title: "Understand",
                  text: "Kami mendengarkan kebutuhan, memahami masalah, dan menentukan tujuan proyek bersama klien.",
                },
                {
                  icon: ClipboardList,
                  title: "Plan",
                  text: "Kami menyusun ruang lingkup, solusi, prioritas, timeline, estimasi, dan tanggung jawab.",
                },
                {
                  icon: Code2,
                  title: "Build",
                  text: "Tim mengerjakan solusi melalui proses yang sesuai dengan karakteristik proyek.",
                },
                {
                  icon: ShieldCheck,
                  title: "Deliver",
                  text: "Kami melakukan pemeriksaan kualitas, review, pengujian, dan serah terima.",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-slate-900/60 md:grid-cols-3 md:p-9">
              <div>
                <Target className="mb-4 h-7 w-7 text-amber-500" />
                <h3 className="font-bold">Clear Objectives</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Tujuan, kebutuhan, dan hasil proyek dijelaskan sejak awal.
                </p>
              </div>
              <div>
                <Users className="mb-4 h-7 w-7 text-amber-500" />
                <h3 className="font-bold">Collaborative Process</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Klien dan tim bekerja sama melalui komunikasi dan review berkala.
                </p>
              </div>
              <div>
                <BarChart3 className="mb-4 h-7 w-7 text-amber-500" />
                <h3 className="font-bold">Measurable Progress</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Progres, hambatan, dan hasil pekerjaan dapat dipantau.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* SALES TO CLOSING */}
        <section id="sales-to-closing" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="02 — From First Contact to Closing"
              title="Alur Klien: Konsultasi, Penawaran, Negosiasi hingga Deal"
              description="Proyek yang sehat dimulai dari proses penjualan yang tertib. HINAI Tech tidak langsung menjual fitur atau harga; kami memahami masalah, memvalidasi kelayakan, menyepakati ruang lingkup, lalu memulai pekerjaan setelah persetujuan komersial."
            />
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Lead", "Prospek masuk, dicatat, dan diberi PIC."],
                ["Qualified", "Kebutuhan dan kelayakan sudah diperiksa."],
                ["Proposal", "Scope, harga, timeline, dan ketentuan dikirim."],
                ["Deal Won", "Persetujuan tertulis dan pembayaran awal/PO diterima."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-500">Pipeline</p>
                  <h3 className="mt-2 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {commercialStages.map((stage) => (
                <article key={stage.number} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-amber-400 dark:bg-amber-400 dark:text-slate-950">{stage.number}</span>
                      <div>
                        <h3 className="font-bold">{stage.title}</h3>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">PIC: {stage.owner}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{stage.purpose}</p>
                  <ul className="mt-4 space-y-2">
                    {stage.actions.map((action) => (
                      <li key={action} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" />{action}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/80">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Output</p>
                    <p className="mt-1 text-sm leading-6">{stage.output}</p>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Gate / syarat lanjut</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.gate}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-6">
              <h3 className="font-bold">Aturan closing yang wajib dijalankan</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Status prospek baru menjadi <strong>Deal Won</strong> jika scope final, harga, timeline, termin, PIC, dan ketentuan sudah disetujui tertulis serta DP/PO sesuai perjanjian telah diterima. Jika klien belum siap, status tetap Follow-up atau Negotiation. Jangan memulai pekerjaan penuh hanya berdasarkan janji lisan atau screenshot transfer yang belum diverifikasi.</p>
            </div>
          </div>
        </section>

        {/* DELIVERY LIFECYCLE */}
        <section id="delivery-lifecycle" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="03 — Project Delivery Lifecycle"
              title="Dari Kick-off sampai Pengiriman dan Serah Terima"
              description="Setelah closing, proyek berpindah dari fungsi sales ke fungsi delivery. Tahap ini memastikan tidak ada informasi yang hilang dan klien menerima hasil yang sesuai kontrak."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["01. Handover internal", "Sales menyerahkan brief, proposal, kontrak, catatan negosiasi, janji, risiko, termin, dan kontak pengambil keputusan kepada Project Manager."],
                ["02. Kick-off", "Tim dan klien menyepakati tujuan, PIC, kanal komunikasi, jadwal update, mekanisme feedback, jalur eskalasi, dan tanggal milestone."],
                ["03. Persiapan bahan", "Klien menyerahkan konten, data, logo, foto, akses, referensi, akun, dan keputusan yang diperlukan. Akses diberikan dengan prinsip least privilege."],
                ["04. Baseline & task", "PM menetapkan scope final, timeline, milestone, task/backlog, PIC, deadline, dependensi, acceptance criteria, dan Definition of Done."],
                ["05. Produksi bertahap", "Tim mengerjakan output sesuai Agile atau sprint Scrum. Hasil diperlihatkan pada titik review yang disepakati, bukan menunggu seluruh proyek selesai."],
                ["06. Review & approval", "Klien memberi feedback terpusat. Approval desain, sitemap, storyboard, prototype, atau modul dicatat sebelum pekerjaan yang bergantung dilanjutkan."],
                ["07. QA internal", "Tim menguji hasil berdasarkan jenis layanan, memeriksa scope, kualitas, file, akses, kompatibilitas, dan risiko sebelum preview/UAT."],
                ["08. UAT & acceptance", "Klien mencoba skenario nyata, mengirim temuan, dan menandai diterima / diterima dengan catatan / perlu perbaikan. Semua blocker diselesaikan sesuai scope."],
                ["09. Final invoice & release", "Finance memverifikasi termin. PM menyiapkan file, akses, dokumentasi, backup, build, deployment report, serta berita acara serah terima."],
                ["10. Delivery & training", "Tim mengirim hasil melalui kanal yang disepakati, melakukan walkthrough/pelatihan bila termasuk, dan memastikan klien memahami penggunaan."],
                ["11. Warranty & support", "Tanggal mulai, durasi, cakupan garansi, jam support, kanal tiket, pengecualian, dan opsi maintenance dijelaskan secara tertulis."],
                ["12. Close & learn", "Proyek diarsipkan; tim mengevaluasi biaya aktual, margin, estimasi, keterlambatan, bug, kepuasan, dan peluang fase lanjutan."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* METHOD SELECTION */}
        <section id="method-selection" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="02 — Method Selection"
              title="Agile atau Scrum?"
              description="HINAI Tech menggunakan dua pendekatan kerja utama. Metode dipilih berdasarkan kompleksitas, karakter output, jumlah fitur, kebutuhan kolaborasi, dan tingkat perubahan selama proyek."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-amber-500/30 bg-white p-7 shadow-sm dark:bg-slate-900 sm:p-9">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-500">
                    <Zap className="h-7 w-7" />
                  </div>
                  <MethodBadge method="Agile" />
                </div>
                <h3 className="text-2xl font-black">Agile Approach</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Pendekatan iteratif dan adaptif untuk pekerjaan yang dapat
                  direncanakan dengan jelas, dikerjakan dalam tahapan fleksibel,
                  lalu diperiksa dan disempurnakan berdasarkan feedback.
                </p>

                <div className="mt-7">
                  <h4 className="mb-3 text-sm font-bold">Cocok untuk:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {[
                      "Website company profile dan landing page.",
                      "Artikel SEO, copywriting, dan content strategy.",
                      "Branding, desain grafis, dan presentasi.",
                      "Animasi, video editing, dan aset kreatif.",
                      "SEO, digital marketing, dan maintenance.",
                      "Konsultasi dan pekerjaan dengan output terdefinisi.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 rounded-xl bg-amber-50 p-4 dark:bg-amber-400/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    Pola kerja
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
                    Brief → Analysis → Planning → Production → Review → Revision → Delivery
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/30 bg-white p-7 shadow-sm dark:bg-slate-900 sm:p-9">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <RefreshCw className="h-7 w-7" />
                  </div>
                  <MethodBadge method="Scrum" />
                </div>
                <h3 className="text-2xl font-black">Scrum Framework</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Kerangka kerja untuk pengembangan produk kompleks yang dibagi
                  menjadi sprint. Tim menghasilkan increment secara bertahap,
                  menerima feedback, dan menyesuaikan prioritas.
                </p>

                <div className="mt-7">
                  <h4 className="mb-3 text-sm font-bold">Cocok untuk:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {[
                      "Web application, SaaS, ERP, CRM, dan e-commerce.",
                      "Aplikasi Android, iOS, dan desktop.",
                      "Aplikasi pendidikan dan sistem bisnis.",
                      "AI chatbot, AI agent, dan machine learning.",
                      "AR application, game, dan simulasi interaktif.",
                      "Produk dengan banyak modul dan integrasi.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 rounded-xl bg-blue-50 p-4 dark:bg-blue-500/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    Pola kerja
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
                    Product Backlog → Sprint Planning → Development → Testing → Review → Retrospective
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-bold">Bagaimana jika proyek memiliki karakter campuran?</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                HINAI Tech dapat menggunakan alur Agile untuk pengelolaan komunikasi,
                persetujuan, dan deliverables, sementara pengembangan teknisnya
                dikelola menggunakan Scrum. Namun, metode utama dan cara pelaporannya
                tetap disepakati sejak awal agar tidak membingungkan klien maupun tim.
              </p>
            </div>
          </div>
        </section>

        {/* AGILE WORKFLOW */}
        <section id="agile-workflow" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="03 — Agile Workflow"
              title="Bagaimana Agile Diterapkan?"
              description="Berikut aktivitas nyata yang dilakukan tim HINAI Tech ketika mengerjakan proyek dengan pendekatan Agile."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {agileStages.map((stage, index) => (
                <StageCard key={stage.title} index={index + 1} {...stage} />
              ))}
            </div>
          </div>
        </section>

        {/* SCRUM WORKFLOW */}
        <section id="scrum-workflow" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="04 — Scrum Workflow"
              title="Bagaimana Scrum Diterapkan?"
              description="Untuk proyek sistem dan produk digital, pekerjaan dipecah menjadi backlog dan sprint agar perkembangan fitur dapat ditinjau secara berkala."
            />

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                <Clock3 className="mb-3 h-6 w-6 text-blue-500" />
                <p className="text-sm font-bold">Sprint Duration</p>
                <p className="mt-1 text-2xl font-black">1–2 Minggu</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Standar awal yang dapat disesuaikan dengan kompleksitas proyek.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                <Target className="mb-3 h-6 w-6 text-blue-500" />
                <p className="text-sm font-bold">Sprint Goal</p>
                <p className="mt-1 text-2xl font-black">Satu Target</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Setiap sprint harus memiliki tujuan yang dapat diperiksa.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                <PackageCheck className="mb-3 h-6 w-6 text-blue-500" />
                <p className="text-sm font-bold">Sprint Output</p>
                <p className="mt-1 text-2xl font-black">Increment</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Hasil pengembangan yang dapat ditinjau atau diuji.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {scrumStages.map((stage, index) => (
                <StageCard key={stage.title} index={index + 1} {...stage} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <h3 className="font-bold">Aktivitas koordinasi harian (Daily Scrum)</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Tim melakukan koordinasi singkat untuk menyampaikan pekerjaan yang
                sudah selesai, rencana pekerjaan berikutnya, dan hambatan yang
                membutuhkan bantuan. Tujuannya bukan membuat rapat panjang, melainkan
                menjaga transparansi dan mempercepat penyelesaian hambatan.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE CATALOG */}
        <section id="service-workflows" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="05 — Service Implementation"
              title={`Penerapan Metode pada ${totalServices} Layanan HINAI Tech`}
              description="Setiap layanan memiliki karakter pekerjaan yang berbeda. Berikut pemetaan metode dan aktivitas utama yang akan dilakukan oleh tim HINAI Tech untuk masing-masing layanan."
            />

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-white/10">
                <p className="text-3xl font-black">{totalServices}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Total layanan terpetakan</p>
              </div>
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-3xl font-black text-amber-500">{agileCount}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Layanan menggunakan Agile</p>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
                <p className="text-3xl font-black text-blue-500">{scrumCount}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Layanan menggunakan Scrum</p>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-2 font-bold text-amber-600 dark:text-amber-300">
                Agile — Iterative & Flexible
              </span>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 font-bold text-blue-600 dark:text-blue-300">
                Scrum — Sprint-Based Development
              </span>
            </div>

            <div className="space-y-6">
              {serviceCategories.map((category) => (
                <details
                  key={category.number}
                  open={false}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 transition hover:bg-slate-50 dark:hover:bg-white/[0.03] sm:p-7">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-amber-400 dark:bg-amber-400 dark:text-slate-950">
                        {category.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                          {category.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                          {category.description}
                        </p>
                        <p className="mt-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                          {category.services.length} layanan
                        </p>
                      </div>
                    </div>
                    <ArrowDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                  </summary>

                  <div className="border-t border-slate-200 p-5 dark:border-white/10 sm:p-7">
                    <div className="grid gap-4 lg:grid-cols-2">
                      {category.services.map((service, serviceIndex) => (
                        <article
                          key={service.name}
                          className="rounded-xl border border-slate-200 p-5 dark:border-white/10"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="flex min-w-0 items-start gap-3">
                              <span className="text-xs font-bold text-slate-400">
                                {category.number}.{String(serviceIndex + 1).padStart(2, "0")}
                              </span>
                              <h4 className="font-bold text-slate-900 dark:text-white">
                                {service.name}
                              </h4>
                            </div>
                            <MethodBadge method={service.method} />
                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            {service.focus}
                          </p>

                          <div className="mt-5">
                            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                              Aktivitas pengerjaan
                            </p>
                            <ol className="space-y-2">
                              {service.activities.map((activity, activityIndex) => (
                                <li
                                  key={activity}
                                  className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                    {activityIndex + 1}
                                  </span>
                                  {activity}
                                </li>
                              ))}
                            </ol>
                          </div>

                          <div className="mt-5 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/70">
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                              Deliverables
                            </p>
                            <ul className="space-y-1.5">
                              {service.deliverables.map((deliverable) => (
                                <li
                                  key={deliverable}
                                  className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
                                >
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>



        {/* DURATION-BASED AGILE AND SCRUM APPLICATION BY EVERY SERVICE */}
        <section id="agile-scrum-by-service" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="08 — Duration-Based Methodology by Service"
              title="Penerapan Agile dan Scrum untuk Setiap Jasa HINAI Tech"
              description="Matriks ini melengkapi katalog layanan yang sudah ada. Setiap jasa memiliki estimasi indikatif, fokus pekerjaan, alur delivery, pola Agile untuk proyek singkat/menengah, serta kondisi kapan Scrum layak digunakan. Estimasi final ditetapkan setelah discovery dan persetujuan scope."
            />
            <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {methodSelectionPrinciples.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/15 text-sm font-black text-amber-600 dark:text-amber-400">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="border-b border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-lg font-bold">Pola kerja berdasarkan durasi kalender</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Durasi adalah rentang perencanaan, bukan standar minimum atau jaminan. Hari kerja, hari kalender, ketersediaan klien, dan dependency harus dinyatakan di proposal.</p>
              </div>
              <div className="divide-y divide-slate-200 dark:divide-white/10">
                {durationOperatingRules.map((item) => (
                  <div key={item.range} className="grid gap-3 p-5 lg:grid-cols-[130px_190px_1fr]">
                    <div className="font-bold text-amber-600 dark:text-amber-400">{item.range}</div>
                    <div className="text-sm font-semibold">{item.mode}</div>
                    <div><p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.plan}</p><p className="mt-2 text-xs leading-6 text-slate-500"><strong>Checkpoint:</strong> {item.ceremonies}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div><h3 className="text-2xl font-black">Matriks penerapan per layanan</h3><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{serviceMethodologyMatrix.length} layanan individual. Buka setiap layanan untuk melihat pilihan metode dan penerapannya.</p></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Service-level guide</span>
            </div>
            <div className="space-y-3">
              {serviceCategories.map((category) => {
                const items = serviceMethodologyMatrix.filter((item) => item.category === category.title)
                return (
                  <div key={category.title} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-5 py-4 dark:bg-slate-900">
                      <div><p className="text-xs font-bold tracking-widest text-amber-600">KELOMPOK {category.number}</p><h4 className="mt-1 font-bold">{category.title}</h4></div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{items.length} layanan</span>
                    </div>
                    <div className="divide-y divide-slate-200 dark:divide-white/10">
                      {items.map((item) => (
                        <details key={item.name} className="group bg-white dark:bg-slate-950">
                          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-3 px-5 py-4">
                            <div className="min-w-0"><h5 className="font-semibold">{item.name}</h5><p className="mt-1 text-xs text-slate-500">Estimasi: {item.duration}</p></div>
                            <div className="flex items-center gap-2"><span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300">{item.recommended}</span><ArrowDown className="h-4 w-4 text-slate-400 transition group-open:rotate-180" /></div>
                          </summary>
                          <div className="grid gap-4 border-t border-slate-100 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-slate-900/50 md:grid-cols-2">
                            <div className="rounded-xl bg-white p-4 dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-wider text-amber-600">Fokus dan kompleksitas</p><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.focus}. Tingkat kompleksitas indikatif: {item.complexity}.</p><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300"><strong>Alur utama:</strong> {item.deliveryFlow}</p></div>
                            <div className="rounded-xl bg-white p-4 dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Jika menggunakan Agile</p><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.agile}</p></div>
                            <div className="rounded-xl bg-white p-4 dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">Jika menggunakan Scrum</p><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.scrum}</p><p className="mt-2 text-sm leading-7 text-slate-500"><strong>Kesesuaian Scrum:</strong> {item.scrumFit}</p></div>
                            <div className="rounded-xl bg-white p-4 dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Checkpoint dan acceptance</p><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.checkpoints}</p></div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SERVICE-SPECIFIC DELIVERY PLAYBOOK */}
        <section id="service-delivery-playbook" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="07 — Service-by-Service Implementation"
              title="Bagaimana Setiap Kelompok Jasa Dikerjakan?"
              description="Pemetaan berikut menjadi panduan konsultasi, penawaran, produksi, pengujian, dan pengiriman. Detail final tetap disesuaikan dengan scope kontrak dan daftar layanan yang dipilih klien."
            />
            <div className="space-y-5">
              {serviceExecutionPlaybook.map((item, index) => (
                <details key={item.title} className="group rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-amber-400 dark:bg-amber-400 dark:text-slate-950">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                    <ArrowDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-4 border-t border-slate-200 p-6 dark:border-white/10 md:grid-cols-2">
                    {[
                      ["Konsultasi & discovery", item.consultation],
                      ["Penawaran & closing", item.closing],
                      ["Implementasi teknis / produksi", item.implementation],
                      ["Pengiriman & handover", item.delivery],
                      ["Kriteria penerimaan", item.acceptance],
                    ].map(([title, description]) => (
                      <div key={title} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/80">
                        <h4 className="text-sm font-bold text-amber-600 dark:text-amber-400">{title}</h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-bold">Cara membaca playbook per layanan</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">Bagian Service Catalog di bawah memuat daftar layanan individual, metode Agile/Scrum, aktivitas teknis, dan deliverable. Playbook ini melengkapi daftar tersebut dengan langkah komersial dari konsultasi hingga closing, lalu menghubungkan proses teknis dengan QA, UAT, pengiriman, serta serah terima. Dengan demikian, setiap jasa mengikuti satu pipeline perusahaan yang sama tetapi memiliki pertanyaan discovery, risiko, metode implementasi, dan kriteria penerimaan yang berbeda.</p>
            </div>
          </div>
        </section>


        {/* TASK MANAGEMENT */}
        <section id="task-management" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="06 — Task Management"
              title="Bagaimana Setiap Pekerjaan Dikelola?"
              description="Semua pekerjaan harus dapat dilacak. Tidak cukup hanya mengatakan pekerjaan sedang dikerjakan; setiap task harus memiliki penanggung jawab dan hasil yang dapat diperiksa."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
                  <ClipboardList className="h-5 w-5 text-amber-500" />
                  Standar informasi setiap task
                </h3>
                <div className="space-y-3">
                  {[
                    ["Task Name", "Nama pekerjaan yang spesifik dan mudah dipahami."],
                    ["PIC", "Satu orang penanggung jawab utama."],
                    ["Deadline", "Batas waktu penyelesaian."],
                    ["Deliverable", "Hasil nyata yang harus dihasilkan."],
                    ["Acceptance Criteria", "Syarat agar pekerjaan dinyatakan selesai."],
                    ["Priority", "Tingkat kepentingan pekerjaan."],
                    ["Status", "Posisi task dalam alur kerja."],
                    ["Attachment", "File, bukti, referensi, atau hasil kerja."],
                  ].map(([name, description]) => (
                    <div key={name} className="flex gap-3 border-b border-slate-100 pb-3 last:border-0 dark:border-white/5">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                      <div>
                        <p className="text-sm font-bold">{name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
                  <Workflow className="h-5 w-5 text-amber-500" />
                  Status pekerjaan HINAI Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectStatuses.map((status) => (
                    <span
                      key={status}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {status}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-sm font-bold">Aturan perpindahan status</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    Task tidak boleh ditandai Done hanya karena sudah dikerjakan.
                    Task harus memenuhi acceptance criteria dan melewati pemeriksaan
                    yang relevan. Status Delivered menandakan hasil telah diserahkan,
                    sedangkan Closed menandakan administrasi dan tindak lanjut proyek
                    telah diselesaikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section id="documentation" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="07 — Project Documentation"
              title="Dokumen yang Mengendalikan Proyek"
              description="Dokumentasi membuat komunikasi lebih jelas, mengurangi kesalahpahaman, dan menjadi acuan ketika terjadi perubahan atau evaluasi."
            />

            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="hidden grid-cols-[0.8fr_2fr] gap-5 bg-slate-950 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white dark:bg-slate-800 sm:grid">
                <span>Dokumen</span>
                <span>Fungsi</span>
              </div>
              {projectDocuments.map(([name, description], index) => (
                <div
                  key={name}
                  className={`grid gap-2 px-6 py-5 sm:grid-cols-[0.8fr_2fr] sm:gap-5 ${
                    index % 2 === 0
                      ? "bg-white dark:bg-slate-900"
                      : "bg-slate-50 dark:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileCheck2 className="h-4 w-4 shrink-0 text-amber-500" />
                    <span className="text-sm font-bold">{name}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
              Tidak semua dokumen diperlukan untuk setiap layanan. Dokumen dipilih
              berdasarkan kompleksitas proyek, jenis layanan, kebutuhan klien, dan
              ketentuan kontrak.
            </p>
          </div>
        </section>

        {/* QA */}
        <section id="quality-assurance" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="08 — Quality Assurance"
              title="Quality Control Sebelum Hasil Diserahkan"
              description="Setiap output harus diperiksa sebelum dikirimkan kepada klien. Pemeriksaan disesuaikan dengan jenis layanan, bukan menggunakan satu checklist yang sama untuk semua pekerjaan."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: MonitorCheck,
                  title: "Functional Testing",
                  text: "Memastikan tombol, navigasi, formulir, fitur, dan alur sistem berjalan sesuai kebutuhan.",
                },
                {
                  icon: ShieldCheck,
                  title: "Security Review",
                  text: "Memeriksa hak akses, validasi input, pengelolaan kredensial, dan risiko keamanan yang relevan.",
                },
                {
                  icon: Layers3,
                  title: "Compatibility",
                  text: "Memeriksa tampilan dan fungsi pada perangkat, browser, atau sistem operasi target.",
                },
                {
                  icon: Target,
                  title: "Requirement Validation",
                  text: "Membandingkan hasil dengan brief, spesifikasi, acceptance criteria, dan ruang lingkup.",
                },
                {
                  icon: BookOpen,
                  title: "Content & Visual Review",
                  text: "Memeriksa ejaan, informasi, konsistensi desain, keterbacaan, dan kelengkapan aset.",
                },
                {
                  icon: RefreshCw,
                  title: "Regression Testing",
                  text: "Memastikan perbaikan atau fitur baru tidak merusak fungsi yang sebelumnya berjalan.",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                    <Icon className="mb-4 h-7 w-7 text-amber-500" />
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <h3 className="text-lg font-bold">User Acceptance Testing (UAT)</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Untuk proyek aplikasi dan sistem, klien atau perwakilannya melakukan
                pengujian berdasarkan skenario penggunaan yang disepakati. Hasil UAT
                dicatat sebagai diterima, diterima dengan catatan, atau perlu
                perbaikan. Temuan yang berada dalam ruang lingkup ditangani sebelum
                penutupan proyek sesuai kesepakatan.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT CHECKLIST */}
        <section id="project-checklist" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="09 — Operational Checklist"
              title="Checklist Pelaksanaan Proyek"
              description="Checklist ini menjadi standar kontrol internal agar tidak ada tahapan penting yang terlewat."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projectChecklist.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                  <h3 className="mb-4 font-bold">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT COLLABORATION */}
        <section id="client-collaboration" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="10 — Client Collaboration"
              title="Peran HINAI Tech dan Klien"
              description="Proyek yang baik membutuhkan kerja sama dua arah. HINAI Tech bertanggung jawab pada pelaksanaan profesional, sementara klien berperan memberikan informasi, keputusan, dan persetujuan yang diperlukan."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-500">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Tanggung Jawab HINAI Tech</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Memahami dan menganalisis kebutuhan proyek.",
                    "Memberikan solusi dan rekomendasi yang relevan.",
                    "Menyusun ruang lingkup, timeline, dan estimasi.",
                    "Menugaskan PIC dan mengelola pekerjaan.",
                    "Memberikan update progres secara proporsional.",
                    "Melakukan QA dan menangani temuan sesuai kontrak.",
                    "Menjaga kerahasiaan informasi dan akses klien.",
                    "Menyerahkan hasil dan dokumentasi yang disepakati.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <Handshake className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Tanggung Jawab Klien</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Menyampaikan kebutuhan dan tujuan secara jelas.",
                    "Memberikan materi, data, dan aset yang diperlukan.",
                    "Memastikan legalitas materi dan hak penggunaan aset.",
                    "Memberikan feedback dan persetujuan tepat waktu.",
                    "Menunjuk pihak yang berwenang mengambil keputusan.",
                    "Menyediakan akses akun atau sistem jika diperlukan.",
                    "Melakukan pembayaran sesuai kesepakatan.",
                    "Memeriksa dan menerima hasil sesuai kriteria yang disetujui.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SCOPE & CHANGE REQUEST */}
        <section id="scope-policy" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="11 — Project Policies"
              title="Scope, Revisi & Change Request"
              description="Kejelasan ruang lingkup melindungi kepentingan klien dan tim. Semua perubahan harus memiliki catatan dan persetujuan."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Scope of Work",
                  text: "Menjelaskan apa yang dikerjakan, jumlah output, fitur, halaman, format, integrasi, dan batas pekerjaan.",
                },
                {
                  title: "Revision Policy",
                  text: "Revisi digunakan untuk menyempurnakan hasil sesuai brief. Jumlah dan mekanisme revisi mengikuti proposal atau kontrak.",
                },
                {
                  title: "Change Request",
                  text: "Permintaan di luar scope dianalisis dampaknya terhadap biaya, timeline, resource, dan risiko sebelum disetujui.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6 dark:border-white/10">
                  <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <h3 className="font-bold">Contoh penerapan Change Request</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Contoh 1</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Klien memesan website lima halaman, lalu meminta tambahan dashboard admin dan sistem login.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Tindakan tim</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Tim menganalisis kebutuhan, membuat estimasi tambahan, dan menjelaskan dampaknya.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Hasil</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Fitur tambahan dikerjakan setelah perubahan disetujui dan dicatat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY & MAINTENANCE */}
        <section id="delivery-maintenance" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="12 — Delivery & Support"
              title="Delivery, Handover & Maintenance"
              description="Pekerjaan tidak dianggap selesai hanya karena file telah dibuat. Hasil harus diperiksa, diserahkan, dan dijelaskan sesuai ketentuan proyek."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900">
                <Rocket className="mb-5 h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-bold">Project Delivery & Handover</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Memastikan seluruh deliverables telah diperiksa.",
                    "Menyiapkan file final, source code, atau installer sesuai kontrak.",
                    "Menyiapkan akun, akses, dan informasi deployment.",
                    "Menyertakan panduan penggunaan atau dokumentasi teknis.",
                    "Menjelaskan batas garansi dan dukungan.",
                    "Meminta konfirmasi penerimaan hasil.",
                    "Mengarsipkan dokumen dan menutup proyek.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900">
                <Headphones className="mb-5 h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Maintenance & After-Sales</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Menerima laporan kendala melalui kanal dukungan.",
                    "Mengidentifikasi apakah masalah termasuk garansi atau pekerjaan baru.",
                    "Menentukan prioritas berdasarkan dampak masalah.",
                    "Melakukan diagnosis dan perbaikan sesuai kontrak.",
                    "Menguji hasil perbaikan.",
                    "Mencatat aktivitas dan memberikan laporan.",
                    "Menawarkan maintenance berkala jika dibutuhkan.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-bold">Garansi, maintenance, dan pengembangan adalah hal yang berbeda</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div>
                  <p className="font-bold text-amber-500">Garansi</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Penanganan masalah yang memenuhi ketentuan garansi dan berasal
                    dari hasil pekerjaan yang diserahkan.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-amber-500">Maintenance</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Pemeliharaan sistem berdasarkan jadwal, cakupan, dan periode
                    layanan yang disepakati.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-amber-500">New Development</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Pengembangan fitur atau perubahan baru yang dapat membutuhkan
                    estimasi dan kesepakatan biaya tersendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL MANAGEMENT */}
        <section id="internal-management" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="13 — Internal Operations"
              title="Bagaimana HINAI Tech Mengelola Proyek Secara Internal?"
              description="Metodologi bukan hanya untuk ditampilkan kepada klien. Metodologi harus diterapkan dalam operasional tim agar setiap proyek dapat dikelola dan dievaluasi."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-7 dark:border-white/10">
                <Settings className="mb-5 h-7 w-7 text-amber-500" />
                <h3 className="text-lg font-bold">Struktur Project Management System</h3>
                <div className="mt-5 space-y-3">
                  {[
                    ["Service Catalog", "Daftar layanan HINAI Tech beserta template workflow dan metode."],
                    ["Project Management", "Data proyek, klien, nilai kontrak, timeline, dan status."],
                    ["Task Management", "Task, PIC, deadline, prioritas, output, dan status."],
                    ["Sprint Management", "Product Backlog, Sprint Backlog, Sprint Goal, dan review."],
                    ["Client Portal", "Akses klien untuk melihat progres dan memberikan feedback."],
                    ["Quality Assurance", "Checklist QA, bug, hasil testing, dan UAT."],
                    ["Document Management", "Brief, proposal, scope, laporan, dan dokumen serah terima."],
                    ["Financial Tracking", "Pemasukan, biaya, resource, dan profitabilitas proyek."],
                  ].map(([name, description]) => (
                    <div key={name} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                      <p className="text-sm font-bold">{name}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-7 dark:border-white/10">
                <Lightbulb className="mb-5 h-7 w-7 text-amber-500" />
                <h3 className="text-lg font-bold">Alur otomatisasi operasional</h3>
                <div className="mt-5 space-y-3">
                  {[
                    ["1", "Pilih layanan", "Sistem mengambil template layanan dan metode yang sesuai."],
                    ["2", "Buat proyek", "Data klien, scope, biaya, dan timeline dicatat."],
                    ["3", "Generate workflow", "Task atau backlog dibuat berdasarkan template."],
                    ["4", "Assign PIC", "Penanggung jawab dan deadline ditentukan."],
                    ["5", "Track progress", "Tim memperbarui status dan hasil pekerjaan."],
                    ["6", "Client review", "Klien memberikan feedback dan persetujuan."],
                    ["7", "QA & UAT", "Tim memeriksa hasil dan mendokumentasikan pengujian."],
                    ["8", "Handover", "File, akses, dan dokumen diserahkan."],
                    ["9", "Close project", "Administrasi dan evaluasi proyek diselesaikan."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-xs font-bold text-amber-400 dark:bg-amber-400 dark:text-slate-950">
                        {number}
                      </span>
                      <div className="pt-0.5">
                        <p className="text-sm font-bold">{title}</p>
                        <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATING PRINCIPLES */}
        <section id="operating-principles" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="14 — Working Principles"
              title="Standar Kerja yang Diterapkan"
              description="Prinsip berikut menjadi pedoman bersama bagi tim HINAI Tech dalam menangani proyek dan berkomunikasi dengan klien."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {operatingPrinciples.map((principle, index) => (
                <div key={principle.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/15 text-sm font-black text-amber-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT EVALUATION */}
        <section id="project-evaluation" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="15 — Project Evaluation"
              title="Mengukur Keberhasilan Proyek"
              description="Keberhasilan proyek tidak hanya dilihat dari apakah pekerjaan selesai, tetapi juga dari kualitas hasil, kepuasan klien, efisiensi pengerjaan, dan keberlanjutan bisnis."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Scope Completion", "Apakah seluruh deliverables yang disepakati telah diselesaikan?"],
                ["Quality", "Apakah hasil memenuhi acceptance criteria dan standar QA?"],
                ["Time & Cost", "Apakah proyek berjalan sesuai estimasi dan anggaran?"],
                ["Client Satisfaction", "Apakah klien menerima hasil dan memahami penggunaannya?"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-6 dark:border-white/10">
                  <BarChart3 className="mb-4 h-6 w-6 text-amber-500" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-slate-900">
              <h3 className="text-lg font-bold">Evaluasi profitabilitas proyek</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                HINAI Tech juga mengevaluasi biaya tenaga kerja, tools, lisensi,
                hosting, API, infrastruktur, operasional, dan biaya pihak ketiga.
                Perhitungan ini membantu perusahaan mengetahui apakah proyek
                memberikan margin yang sehat dan menjadi dasar perbaikan estimasi
                pada proyek berikutnya.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-white/10 dark:bg-[#0b1220] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="16 — Frequently Asked Questions"
              title="Pertanyaan Seputar Cara Kerja Kami"
              description="Beberapa hal yang perlu diketahui sebelum memulai proyek bersama HINAI Tech."
              centered
            />

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                    {faq.q}
                    <ArrowDown className="h-5 w-5 shrink-0 text-amber-500 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-slate-950" />
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
              <Compass className="h-7 w-7" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
              Let's Build Something Meaningful
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
              Punya Ide atau Kebutuhan Digital?
              <span className="block text-amber-400">Mari Wujudkan Bersama.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Ceritakan kebutuhan bisnis, organisasi, pendidikan, atau produk digital
              Anda. Tim HINAI Tech akan membantu menganalisis kebutuhan dan menentukan
              pendekatan pengerjaan yang sesuai.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Mulai Konsultasi <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/6282144137914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                Hubungi HINAI Tech
              </a>
            </div>

            <p className="mt-8 text-xs text-slate-500">
              HINAI Tech — PT Heroic Inovasi Nusantara
            </p>
          </div>
        </section>
      </main>
    </LanguageProvider>
  )
}
