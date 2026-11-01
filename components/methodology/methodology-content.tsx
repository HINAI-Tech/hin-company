"use client"

import { useMemo, useState, type ReactNode } from "react"
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Bug,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  ClipboardList,
  Code2,
  Compass,
  Database,
  FileCheck2,
  FileCode2,
  FileSearch,
  FileText,
  Gauge,
  GitBranch,
  Globe2,
  Handshake,
  HeartHandshake,
  Layers3,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  Monitor,
  Network,
  PencilRuler,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  Timer,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react"

/* =========================================================
   HINAI TECH — METHODOLOGY CONTENT
   File:
   src/components/methodology/methodology-content.tsx

   Catatan:
   - Komponen ini mandiri.
   - Tidak mengubah navbar.
   - Tidak mengubah global CSS.
   - Tidak membutuhkan komponen tambahan.
   - Menggunakan Tailwind CSS dan lucide-react.
   - Seluruh konten dapat disesuaikan melalui data di bawah.
========================================================= */

type IconComponent = typeof Compass

type MethodologyItem = {
  number: string
  title: string
  description: string
  detail: string
  icon: IconComponent
  outputs: string[]
}

type ProcessItem = {
  number: string
  title: string
  subtitle: string
  description: string
  activities: string[]
  deliverables: string[]
  icon: IconComponent
}

type FAQItem = {
  question: string
  answer: string
}

type ProjectType = {
  title: string
  category: string
  method: string
  description: string
  reasons: string[]
  icon: IconComponent
  duration: string
  emphasis: string
}

export function HowWeWorkSection() {
  const services = [
    {
      number: "01",
      icon: "🌐",
      category: "WEBSITE DEVELOPMENT",
      title: "Website & Web Application Development",
      description:
        "Pengembangan website profesional, company profile, portal, sistem informasi, dashboard, CMS, e-commerce, dan aplikasi berbasis web yang disesuaikan dengan kebutuhan bisnis.",
      technologies:
        "Next.js, React, Vue.js, Nuxt.js, TypeScript, JavaScript, Node.js, Express.js, Python, Django, Flask, PHP, Laravel, WordPress, Shopify, MySQL, PostgreSQL, MongoDB, dan cloud database.",
      suitable: [
        "Company profile dan website bisnis",
        "Website sekolah dan institusi pendidikan",
        "Sistem informasi dan dashboard manajemen",
        "E-commerce dan online marketplace",
        "Portal pelanggan dan membership",
        "Booking, reservasi, dan sistem pemesanan",
        "SaaS dan aplikasi multi-tenant",
        "Website berita, blog, dan CMS",
      ],
      process: [
        {
          title: "Analisis Kebutuhan dan Tujuan Website",
          detail:
            "Kami mempelajari profil bisnis, target pengunjung, permasalahan operasional, kebutuhan halaman, fitur, jenis pengguna, dan tujuan website. Pada tahap ini klien dapat menjelaskan kebutuhan melalui brief, diskusi, dokumen, maupun referensi website.",
        },
        {
          title: "Perencanaan Struktur dan Arsitektur",
          detail:
            "Tim menyusun sitemap, struktur navigasi, user flow, kebutuhan database, hak akses, integrasi API, serta arsitektur frontend dan backend. Kami menentukan apakah proyek lebih sesuai menggunakan custom coding, CMS, no-code, atau kombinasi beberapa teknologi.",
        },
        {
          title: "UI/UX Design dan Prototyping",
          detail:
            "Kami merancang tampilan desktop, tablet, dan mobile. Klien dapat meninjau layout, navigasi, warna, tipografi, komponen, serta alur penggunaan sebelum pengembangan dilanjutkan.",
        },
        {
          title: "Frontend dan Backend Development",
          detail:
            "Tim membangun antarmuka, backend, autentikasi, database, API, dashboard, formulir, pengelolaan data, serta fitur sesuai spesifikasi yang disetujui. Setiap modul dikembangkan secara bertahap.",
        },
        {
          title: "Integrasi dan Pengujian",
          detail:
            "Kami menguji responsivitas, navigasi, validasi formulir, autentikasi, hak akses, keamanan, database, integrasi pihak ketiga, performa, dan kompatibilitas browser.",
        },
        {
          title: "Client Review dan Revisi",
          detail:
            "Klien mendapatkan akses ke versi staging atau preview. Klien dapat menguji fitur dan memberikan catatan perubahan. Revisi dilakukan sesuai ruang lingkup dan ketentuan proposal.",
        },
        {
          title: "Deployment dan Serah Terima",
          detail:
            "Website dipublikasikan ke hosting atau server yang disepakati, konfigurasi domain dan SSL dilakukan, kemudian akses admin, dokumentasi, serta panduan penggunaan diserahkan sesuai paket.",
        },
        {
          title: "Maintenance dan Pengembangan",
          detail:
            "Setelah peluncuran, kami menyediakan dukungan sesuai kontrak. Pengembangan fitur baru, pembaruan sistem, optimasi, dan pekerjaan di luar garansi dapat dibuat sebagai proyek lanjutan.",
        },
      ],
      deliverables: [
        "Website atau web application sesuai spesifikasi",
        "Frontend dan backend sesuai ruang lingkup",
        "Database dan integrasi yang disepakati",
        "Domain, hosting, dan SSL jika termasuk paket",
        "Akses administrator",
        "Dokumentasi dan panduan penggunaan",
        "Hasil pengujian dan serah terima",
      ],
      client:
        "Menyiapkan profil perusahaan, logo, identitas visual, konten, foto, informasi produk, kebutuhan pengguna, dan akses layanan pihak ketiga yang diperlukan.",
      note:
        "Custom development dan CMS memiliki karakteristik, biaya, waktu, serta batasan berbeda. Pilihan teknologi ditentukan berdasarkan kebutuhan, bukan hanya popularitas framework.",
    },
    {
      number: "02",
      icon: "🎯",
      category: "LANDING PAGE DEVELOPMENT",
      title: "Landing Page & Conversion-Focused Page",
      description:
        "Pembuatan halaman promosi yang dirancang untuk memperkenalkan produk, mengumpulkan leads, meningkatkan pendaftaran, dan mendorong tindakan calon pelanggan.",
      technologies:
        "Next.js, React, HTML, CSS, JavaScript, WordPress, Elementor, Shopify, Google Analytics, Google Tag Manager, Meta Pixel, dan integrasi WhatsApp.",
      suitable: [
        "Promosi produk dan jasa",
        "Launching produk baru",
        "Pendaftaran webinar dan event",
        "Campaign digital advertising",
        "Undangan digital",
        "Lead generation",
        "Penjualan produk dan layanan",
        "Pendaftaran siswa atau peserta",
      ],
      process: [
        {
          title: "Menentukan Tujuan Konversi",
          detail:
            "Kami menentukan satu tujuan utama halaman, seperti menghubungi WhatsApp, mengisi formulir, mendaftar, melakukan pembelian, atau meminta konsultasi. Tujuan ini menjadi dasar seluruh struktur halaman.",
        },
        {
          title: "Riset Audiens dan Penawaran",
          detail:
            "Kami mempelajari siapa target pelanggan, masalah yang dihadapi, keunggulan produk, penawaran, keberatan calon pelanggan, serta tindakan yang diharapkan.",
        },
        {
          title: "Penyusunan Copywriting dan Funnel",
          detail:
            "Konten disusun menggunakan pendekatan seperti AIDA atau PAS. Struktur dapat mencakup headline, value proposition, manfaat, fitur, bukti pendukung, FAQ, penawaran, dan CTA.",
        },
        {
          title: "Desain Visual dan Layout",
          detail:
            "Kami membuat tampilan yang sesuai dengan identitas brand. Penempatan headline, tombol WhatsApp, formulir, gambar, dan informasi penting dirancang agar mudah dipahami pada layar mobile.",
        },
        {
          title: "Development dan Integrasi",
          detail:
            "Landing page dibangun dan dihubungkan dengan domain, formulir, WhatsApp, email, analytics, tracking pixel, dan layanan pembayaran jika termasuk dalam spesifikasi.",
        },
        {
          title: "Testing dan Optimasi",
          detail:
            "Kami memeriksa tampilan mobile, kecepatan halaman, tautan, CTA, formulir, tracking, SSL, dan pengalaman pengunjung sebelum halaman diluncurkan.",
        },
        {
          title: "Publikasi dan Serah Terima",
          detail:
            "Halaman dipublikasikan dan klien memperoleh akses serta petunjuk penggunaan sesuai paket yang disepakati.",
        },
        {
          title: "Evaluasi Performa",
          detail:
            "Apabila tracking tersedia, performa dapat dievaluasi melalui jumlah pengunjung, klik CTA, leads, dan sumber trafik. Perbaikan lanjutan dilakukan berdasarkan data.",
        },
      ],
      deliverables: [
        "Landing page sesuai desain dan spesifikasi",
        "Copywriting sesuai brief",
        "CTA WhatsApp atau formulir",
        "Integrasi analytics jika disepakati",
        "Domain, hosting, dan SSL sesuai paket",
        "Pengujian tampilan mobile dan desktop",
        "Akses pengelolaan dan panduan",
      ],
      client:
        "Menyiapkan informasi produk, harga, penawaran, foto, testimoni yang dapat digunakan secara sah, kontak bisnis, serta tujuan campaign.",
      note:
        "Landing page dapat menjadi bagian dari campaign iklan, tetapi biaya iklan, pengelolaan campaign, dan jaminan jumlah leads tidak otomatis termasuk biaya pembuatan halaman.",
    },
    {
      number: "03",
      icon: "📱",
      category: "MOBILE APPLICATION DEVELOPMENT",
      title: "Android, iOS & Mobile Application",
      description:
        "Pembuatan aplikasi mobile untuk bisnis, pendidikan, organisasi, layanan publik, dan kebutuhan personal dengan fitur serta pengalaman pengguna yang disesuaikan.",
      technologies:
        "Flutter, Dart, React Native, Kotlin, Java, Swift, SwiftUI, Firebase, REST API, GraphQL, PostgreSQL, MySQL, dan cloud services.",
      suitable: [
        "Aplikasi Android dan iOS",
        "Aplikasi pemesanan dan layanan",
        "Aplikasi pendidikan",
        "Aplikasi absensi dan presensi",
        "Aplikasi membership",
        "Aplikasi kasir dan bisnis",
        "Aplikasi marketplace",
        "Aplikasi internal perusahaan",
      ],
      process: [
        {
          title: "Product Discovery",
          detail:
            "Kami mempelajari tujuan aplikasi, target pengguna, masalah yang ingin diselesaikan, kebutuhan operasional, platform target, serta batasan perangkat dan jaringan.",
        },
        {
          title: "Feature Mapping dan User Flow",
          detail:
            "Seluruh fitur dipetakan berdasarkan peran pengguna. Contohnya administrator, pelanggan, staf, dan manajer. Kami menentukan navigasi, alur login, proses transaksi, notifikasi, serta alur data.",
        },
        {
          title: "UI/UX dan Prototype",
          detail:
            "Tim merancang tampilan aplikasi, komponen, formulir, dashboard, navigasi, interaksi, serta berbagai kondisi layar. Klien melakukan review sebelum implementasi.",
        },
        {
          title: "Backend dan Database",
          detail:
            "Jika aplikasi membutuhkan server, kami membangun API, autentikasi, database, pengelolaan akun, penyimpanan data, dan sistem hak akses. Arsitektur disesuaikan dengan jumlah pengguna dan kebutuhan aplikasi.",
        },
        {
          title: "Mobile Application Development",
          detail:
            "Kami mengembangkan aplikasi menggunakan teknologi yang disepakati. Implementasi meliputi navigasi, fitur utama, koneksi API, validasi data, penyimpanan lokal, dan integrasi perangkat jika dibutuhkan.",
        },
        {
          title: "Device Testing",
          detail:
            "Pengujian dilakukan pada perangkat dan versi OS yang disepakati. Kami memeriksa performa, ukuran layar, konektivitas, izin perangkat, crash, dan perilaku aplikasi.",
        },
        {
          title: "Release Preparation",
          detail:
            "Kami menyiapkan konfigurasi build, application ID, ikon, splash screen, signing, versi aplikasi, privacy policy, dan aset publikasi sesuai kebutuhan distribusi.",
        },
        {
          title: "Publishing dan Handover",
          detail:
            "Aplikasi disiapkan untuk distribusi melalui Google Play, Apple App Store, atau distribusi internal. Proses publikasi mengikuti persyaratan dan persetujuan pemilik akun platform.",
        },
        {
          title: "Post-Release Support",
          detail:
            "Kami menangani dukungan sesuai kesepakatan, termasuk perbaikan bug, pembaruan kompatibilitas, dan pengembangan fitur berikutnya.",
        },
      ],
      deliverables: [
        "Source code sesuai kontrak",
        "File APK atau AAB untuk Android jika termasuk",
        "Build iOS jika termasuk",
        "Backend dan API jika diperlukan",
        "Database dan konfigurasi",
        "Dokumentasi teknis",
        "Panduan penggunaan",
        "Bantuan persiapan publikasi sesuai paket",
      ],
      client:
        "Menyiapkan deskripsi aplikasi, kebutuhan pengguna, logo, konten, akun developer jika diperlukan, informasi kebijakan privasi, dan akses integrasi pihak ketiga.",
      note:
        "Biaya akun developer, layanan cloud, API berbayar, SMS, notifikasi, dan biaya pihak ketiga merupakan komponen terpisah kecuali secara tertulis termasuk penawaran.",
    },
    {
      number: "04",
      icon: "💻",
      category: "DESKTOP APPLICATION DEVELOPMENT",
      title: "Desktop Application Development",
      description:
        "Pengembangan perangkat lunak untuk Windows, macOS, dan Linux sesuai kebutuhan operasional, pengolahan data, manajemen bisnis, maupun aplikasi produktivitas.",
      technologies:
        "Electron, TypeScript, JavaScript, React, Tauri, Python, C#, .NET, Java, SQLite, PostgreSQL, MySQL, dan teknologi integrasi perangkat.",
      suitable: [
        "Software kasir dan POS",
        "Aplikasi manajemen bisnis",
        "Aplikasi administrasi kantor",
        "Aplikasi pengolahan data",
        "Aplikasi pendidikan",
        "Software inventaris",
        "Aplikasi produksi dan operasional",
        "Aplikasi desktop offline atau online",
      ],
      process: [
        {
          title: "Analisis Proses Kerja",
          detail:
            "Kami mempelajari kegiatan operasional yang akan dibantu aplikasi. Kami mengidentifikasi siapa yang menggunakan aplikasi, data yang diproses, perangkat yang tersedia, serta pekerjaan yang harus diotomatisasi.",
        },
        {
          title: "Spesifikasi Modul dan Hak Akses",
          detail:
            "Kami menyusun modul, menu, role pengguna, alur transaksi, kebutuhan laporan, serta aturan bisnis. Sistem dapat dirancang untuk satu pengguna maupun banyak pengguna.",
        },
        {
          title: "Desain Interface Desktop",
          detail:
            "Tim merancang dashboard, tabel data, form input, navigasi, shortcut, dialog, dan pengalaman penggunaan yang sesuai dengan kebiasaan kerja pengguna komputer.",
        },
        {
          title: "Database dan Application Architecture",
          detail:
            "Kami menentukan penyimpanan lokal atau server, struktur database, mekanisme backup, sinkronisasi, keamanan data, dan strategi pemulihan apabila terjadi gangguan.",
        },
        {
          title: "Development Modul",
          detail:
            "Fitur dikembangkan secara bertahap. Contohnya login, dashboard, transaksi, inventaris, pengguna, laporan, pengaturan, ekspor data, dan integrasi printer atau perangkat tambahan.",
        },
        {
          title: "Hardware dan Integration Testing",
          detail:
            "Kami menguji aplikasi pada perangkat yang menjadi target, termasuk printer, scanner, koneksi jaringan, file import/export, dan perangkat pendukung jika tercantum dalam spesifikasi.",
        },
        {
          title: "Build dan Installer",
          detail:
            "Aplikasi dikemas menjadi installer atau paket distribusi sesuai sistem operasi. Pengujian instalasi, pembaruan, dan proses uninstall dilakukan sesuai kebutuhan.",
        },
        {
          title: "Deployment dan Training",
          detail:
            "Aplikasi dipasang atau diserahkan kepada klien. Kami dapat memberikan panduan administrator dan pelatihan penggunaan sesuai ruang lingkup proyek.",
        },
        {
          title: "Maintenance",
          detail:
            "Dukungan mencakup perbaikan bug dan pembaruan sesuai kontrak. Perubahan besar pada modul atau sistem operasi dapat memerlukan pekerjaan tambahan.",
        },
      ],
      deliverables: [
        "Aplikasi desktop sesuai platform",
        "Installer atau file distribusi",
        "Database sesuai arsitektur",
        "Dokumentasi dan panduan",
        "Source code jika termasuk kontrak",
        "Pengujian fitur dan instalasi",
        "Pelatihan jika termasuk paket",
      ],
      client:
        "Menyediakan komputer target, informasi sistem operasi, printer atau perangkat tambahan, contoh data, dan proses kerja yang ingin diterapkan.",
      note:
        "Aplikasi offline, online, dan hybrid memiliki arsitektur berbeda. Kebutuhan sinkronisasi, backup, dan lisensi harus ditentukan sejak tahap analisis.",
    },
    {
      number: "05",
      icon: "🎮",
      category: "GAME DEVELOPMENT",
      title: "Game Development",
      description:
        "Pengembangan game interaktif untuk kebutuhan hiburan, pendidikan, promosi, simulasi, maupun pengalaman digital berbasis tantangan dan interaksi.",
      technologies:
        "Unity, C#, Unreal Engine, Godot, Blender, 2D/3D assets, animation tools, game physics, dan platform SDK sesuai kebutuhan.",
      suitable: [
        "Game edukasi",
        "Game simulasi",
        "Game promosi brand",
        "Game Android dan iOS",
        "Game desktop",
        "Game 2D dan 3D",
        "Interactive storytelling",
        "Serious game dan gamification",
      ],
      process: [
        {
          title: "Game Concept dan Target Audience",
          detail:
            "Kami mendefinisikan genre, tema, tujuan, target pemain, platform, durasi permainan, serta nilai hiburan atau pembelajaran yang ingin diberikan.",
        },
        {
          title: "Game Design Document",
          detail:
            "Kami menyusun mekanisme permainan, aturan, level, karakter, sistem skor, tantangan, alur cerita, kontrol, dan kebutuhan aset. Dokumen ini menjadi acuan pengembangan.",
        },
        {
          title: "Prototype Gameplay",
          detail:
            "Kami membuat versi awal untuk menguji mekanisme utama, kontrol, interaksi, dan tingkat kesulitan. Klien dapat mencoba konsep sebelum seluruh aset dibuat.",
        },
        {
          title: "Asset dan Visual Production",
          detail:
            "Tim menyiapkan karakter, lingkungan, objek, animasi, audio, efek visual, UI, dan aset lainnya berdasarkan gaya visual yang disetujui.",
        },
        {
          title: "Game Development",
          detail:
            "Kami mengembangkan gameplay, sistem level, collision, scoring, AI karakter jika dibutuhkan, penyimpanan progres, dan integrasi layanan tambahan.",
        },
        {
          title: "Testing dan Balancing",
          detail:
            "Game diuji untuk memastikan kontrol nyaman, tidak terdapat bug kritis, tingkat kesulitan sesuai, performa stabil, dan pengalaman bermain konsisten.",
        },
        {
          title: "Build dan Release",
          detail:
            "Kami membuat build untuk platform yang disepakati, menyiapkan ikon, metadata, aset publikasi, dan panduan instalasi atau distribusi.",
        },
        {
          title: "Handover dan Support",
          detail:
            "Klien menerima hasil sesuai kontrak, dokumentasi, serta dukungan teknis yang telah disepakati.",
        },
      ],
      deliverables: [
        "Game build sesuai platform",
        "Gameplay dan fitur sesuai GDD",
        "Aset visual sesuai kesepakatan",
        "Dokumentasi dan panduan",
        "Source project jika termasuk kontrak",
        "Pengujian dan laporan hasil",
      ],
      client:
        "Menyiapkan konsep permainan, referensi visual, target pemain, tujuan edukasi atau promosi, materi cerita, dan kebutuhan distribusi.",
      note:
        "Multiplayer, server game, pembelian dalam aplikasi, iklan, dan backend memerlukan spesifikasi serta estimasi tersendiri.",
    },
    {
      number: "06",
      icon: "🥽",
      category: "AUGMENTED REALITY & 3D",
      title: "Augmented Reality, 3D & Interactive Experience",
      description:
        "Pengembangan pengalaman digital yang menggabungkan objek virtual dan dunia nyata, termasuk media pembelajaran, visualisasi produk, simulasi, dan pengalaman interaktif.",
      technologies:
        "Unity, C#, AR Foundation, ARCore, ARKit, Blender, 3D modeling, animation, image tracking, marker-based AR, dan platform pendukung.",
      suitable: [
        "Media pembelajaran AR",
        "Visualisasi produk 3D",
        "AR budaya dan edukasi",
        "Simulasi interaktif",
        "Katalog produk AR",
        "Pengenalan objek dan marker",
        "Interactive 3D presentation",
        "Pengalaman promosi berbasis AR",
      ],
      process: [
        {
          title: "Concept dan Use Case",
          detail:
            "Kami mempelajari objek yang ingin divisualisasikan, lokasi penggunaan, perangkat target, pengalaman pengguna, dan tujuan interaksi AR.",
        },
        {
          title: "AR Technical Assessment",
          detail:
            "Tim menentukan pendekatan marker-based, image tracking, plane detection, object placement, atau metode lain sesuai kebutuhan perangkat dan lingkungan penggunaan.",
        },
        {
          title: "3D Asset Preparation",
          detail:
            "Objek 3D disiapkan atau dibuat berdasarkan kebutuhan proyek. Kami mempertimbangkan jumlah polygon, tekstur, ukuran file, material, rigging, dan optimasi agar sesuai dengan perangkat target.",
        },
        {
          title: "Interaction Design",
          detail:
            "Kami merancang bagaimana pengguna memunculkan objek, menggerakkan model, memutar objek, melakukan zoom, melihat informasi, atau menjalankan animasi.",
        },
        {
          title: "AR Development",
          detail:
            "Aplikasi dibangun menggunakan teknologi AR yang disepakati, termasuk kamera, tracking, penempatan objek, UI, audio, dan mekanisme interaksi.",
        },
        {
          title: "Device Compatibility Testing",
          detail:
            "Kami menguji kemampuan tracking, pencahayaan, jarak kamera, orientasi perangkat, performa rendering, serta kompatibilitas perangkat target.",
        },
        {
          title: "Final Build dan Delivery",
          detail:
            "Aplikasi disiapkan untuk distribusi, dilengkapi aset dan panduan penggunaan marker jika dibutuhkan, serta dokumentasi sesuai ruang lingkup.",
        },
        {
          title: "Support dan Improvement",
          detail:
            "Kami membantu evaluasi teknis setelah penyerahan. Penambahan objek, marker, animasi, atau fitur interaksi dapat menjadi pekerjaan lanjutan.",
        },
      ],
      deliverables: [
        "Aplikasi AR sesuai platform",
        "Model dan aset 3D sesuai kontrak",
        "Marker atau media pendukung",
        "Interaksi dan animasi",
        "Dokumentasi penggunaan",
        "Build aplikasi",
        "Source project jika termasuk",
      ],
      client:
        "Menyiapkan konsep AR, objek referensi, materi edukasi atau promosi, daftar perangkat target, serta marker atau gambar referensi jika sudah tersedia.",
      note:
        "AR memiliki persyaratan perangkat dan lingkungan tertentu. Hasil tracking dapat dipengaruhi kamera, pencahayaan, kualitas marker, dan spesifikasi perangkat.",
    },
    {
      number: "07",
      icon: "🤖",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "AI, Machine Learning & Data Science",
      description:
        "Pengembangan solusi berbasis kecerdasan buatan, analisis data, prediksi, klasifikasi, computer vision, NLP, chatbot, dan otomasi proses bisnis.",
      technologies:
        "Python, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, OpenAI API, LLM, FastAPI, Node.js, PostgreSQL, vector database, dan cloud infrastructure.",
      suitable: [
        "AI chatbot dan virtual assistant",
        "AI customer service",
        "AI Sales Agent",
        "Machine learning prediction",
        "Data analysis dan visualization",
        "Computer vision",
        "Document processing",
        "Workflow automation",
      ],
      process: [
        {
          title: "AI Feasibility Assessment",
          detail:
            "Kami memeriksa apakah masalah klien benar-benar membutuhkan AI. Jika solusi berbasis aturan atau otomasi biasa lebih efisien, kami akan menjelaskan alternatif tersebut.",
        },
        {
          title: "Problem Definition dan Success Metrics",
          detail:
            "Kami menetapkan masalah yang ingin diselesaikan, jenis output, indikator keberhasilan, batasan akurasi, biaya operasional, dan risiko penggunaan.",
        },
        {
          title: "Data Audit dan Preparation",
          detail:
            "Kami memeriksa ketersediaan, kualitas, struktur, relevansi, dan izin penggunaan data. Data dipersiapkan melalui cleaning, labeling, preprocessing, atau transformasi sesuai kebutuhan.",
        },
        {
          title: "Model dan Solution Selection",
          detail:
            "Kami memilih pendekatan yang sesuai, misalnya rule-based automation, API AI, retrieval augmented generation, machine learning, atau model khusus.",
        },
        {
          title: "Prototype dan Evaluation",
          detail:
            "Tim membangun proof of concept dan mengevaluasi output menggunakan data uji. Kami memeriksa relevansi, akurasi, konsistensi, latency, serta kemungkinan kesalahan.",
        },
        {
          title: "Integration dan Development",
          detail:
            "Solusi diintegrasikan dengan website, aplikasi, database, CRM, WhatsApp melalui provider resmi, atau sistem operasional klien sesuai akses dan izin.",
        },
        {
          title: "Security dan Guardrails",
          detail:
            "Kami merancang autentikasi, pembatasan akses, perlindungan data, logging, validasi output, batas penggunaan, dan mekanisme eskalasi ke manusia.",
        },
        {
          title: "Deployment dan Monitoring",
          detail:
            "Solusi dipublikasikan pada infrastruktur yang disepakati. Tim dapat memantau error, penggunaan, biaya API, performa, dan kualitas output sesuai kontrak.",
        },
        {
          title: "Continuous Improvement",
          detail:
            "Perbaikan model, data, prompt, workflow, dan integrasi dilakukan berdasarkan hasil penggunaan dan evaluasi berkala.",
        },
      ],
      deliverables: [
        "AI solution atau model sesuai spesifikasi",
        "API atau integrasi jika diperlukan",
        "Dashboard atau interface jika termasuk",
        "Dokumentasi penggunaan",
        "Evaluasi hasil pengujian",
        "Konfigurasi deployment",
        "Panduan monitoring",
      ],
      client:
        "Menyediakan data yang sah digunakan, contoh kasus, aturan bisnis, tujuan otomatisasi, dan akses integrasi yang dibutuhkan.",
      note:
        "AI tidak menjamin jawaban selalu benar. Kualitas hasil bergantung pada data, model, konfigurasi, dan konteks. Biaya token, API, cloud, serta penggunaan pihak ketiga perlu dihitung terpisah.",
    },
    {
      number: "08",
      icon: "✍️",
      category: "SEO CONTENT & COPYWRITING",
      title: "Artikel SEO, Copywriting & Content Strategy",
      description:
        "Pembuatan konten profesional untuk meningkatkan visibilitas pencarian, memperkuat kredibilitas, memberikan informasi, dan mendukung pemasaran bisnis.",
      technologies:
        "Keyword research tools, Google Search Console, Google Analytics, SEO audit tools, editorial planning, plagiarism checking, dan content optimization tools.",
      suitable: [
        "Artikel blog SEO",
        "Artikel pilar dan cluster",
        "Deskripsi produk",
        "Copywriting landing page",
        "Caption media sosial",
        "Sales copy dan advertising copy",
        "Meta title dan description",
        "Content strategy",
        "Media placement dan press release",
        "Entry dan upload konten",
      ],
      process: [
        {
          title: "Content Brief dan Business Understanding",
          detail:
            "Kami mempelajari bisnis, target pembaca, tujuan konten, karakter brand, topik, bahasa, gaya penulisan, serta informasi yang wajib disampaikan.",
        },
        {
          title: "Keyword Research dan Search Intent",
          detail:
            "Tim meneliti keyword, intent pencarian, relevansi topik, tingkat persaingan, dan peluang konten. Keyword dipilih berdasarkan kebutuhan audiens, bukan sekadar volume pencarian.",
        },
        {
          title: "Competitor dan Content Analysis",
          detail:
            "Kami mempelajari konten kompetitor, struktur informasi, topik yang belum terjawab, serta kebutuhan pembaca untuk menghasilkan konten yang memiliki nilai tambah.",
        },
        {
          title: "Content Outline",
          detail:
            "Kami menyusun judul, heading H1-H4, poin pembahasan, referensi, internal link yang relevan, serta CTA jika diperlukan.",
        },
        {
          title: "Writing dan Content Production",
          detail:
            "Konten ditulis berdasarkan brief, data, sumber yang relevan, dan kebutuhan pembaca. Untuk topik teknis atau sensitif, informasi perlu diverifikasi dengan sumber tepercaya.",
        },
        {
          title: "SEO Optimization",
          detail:
            "Kami mengoptimasi struktur heading, keyword placement secara natural, meta description, readability, internal linking, dan elemen SEO lain sesuai jenis konten.",
        },
        {
          title: "Editorial Review dan Quality Check",
          detail:
            "Tim memeriksa tata bahasa, orisinalitas, konsistensi informasi, kesesuaian brief, keterbacaan, dan kualitas konten sebelum dikirim.",
        },
        {
          title: "Client Review dan Revision",
          detail:
            "Klien meninjau konten dan memberikan masukan sesuai ruang lingkup revisi. Setelah disetujui, konten dapat dikirim dalam format yang disepakati.",
        },
        {
          title: "Publishing dan Performance Review",
          detail:
            "Jika layanan upload termasuk, konten diformat dan dipublikasikan ke CMS. Performa dapat dievaluasi menggunakan data Search Console atau Analytics jika akses tersedia.",
        },
      ],
      deliverables: [
        "Artikel atau konten sesuai jumlah pesanan",
        "Keyword dan metadata sesuai paket",
        "Struktur heading SEO",
        "Copywriting sesuai kebutuhan",
        "File dokumen atau konten CMS",
        "Laporan pengerjaan jika disepakati",
      ],
      client:
        "Memberikan topik, target pembaca, informasi produk, referensi, data perusahaan, keyword khusus jika ada, dan panduan gaya komunikasi.",
      note:
        "SEO merupakan proses jangka menengah hingga panjang. HINAI Tech tidak menjanjikan posisi ranking tertentu karena hasil dipengaruhi algoritma, kompetisi, kualitas website, dan faktor eksternal.",
    },
    {
      number: "09",
      icon: "🎨",
      category: "BRANDING & CREATIVE DESIGN",
      title: "Branding, UI/UX & Graphic Design",
      description:
        "Pengembangan identitas visual, pengalaman pengguna, materi promosi, desain digital, dan komunikasi visual agar brand terlihat konsisten serta profesional.",
      technologies:
        "Figma, Adobe Illustrator, Photoshop, Canva, Adobe After Effects, Adobe Animate, Blender, dan design production tools.",
      suitable: [
        "Logo dan brand identity",
        "Brand guideline",
        "UI/UX website dan aplikasi",
        "Social media design",
        "Poster dan flyer",
        "Company profile dan proposal",
        "Presentasi dan dokumen",
        "Packaging dan marketing collateral",
        "Motion graphic dan desain animasi",
      ],
      process: [
        {
          title: "Brand Discovery",
          detail:
            "Kami mempelajari identitas bisnis, target audiens, karakter brand, nilai utama, kompetitor, media penggunaan, serta tujuan komunikasi visual.",
        },
        {
          title: "Creative Direction",
          detail:
            "Tim menentukan arah visual seperti warna, tipografi, komposisi, gaya ilustrasi, referensi desain, dan karakter komunikasi yang ingin dibangun.",
        },
        {
          title: "Concept Exploration",
          detail:
            "Kami mengembangkan konsep visual awal untuk dipilih atau dievaluasi. Klien dapat memberikan arahan berdasarkan kesesuaian identitas brand.",
        },
        {
          title: "Design Production",
          detail:
            "Desain dikembangkan menjadi hasil final sesuai spesifikasi, ukuran, media, platform, dan kebutuhan penggunaan.",
        },
        {
          title: "Design Review",
          detail:
            "Klien memeriksa desain dan memberikan catatan revisi. Perubahan besar pada konsep setelah persetujuan awal dapat dihitung sebagai pekerjaan tambahan.",
        },
        {
          title: "Finalization dan Export",
          detail:
            "Kami menyiapkan file dalam format yang disepakati, seperti PNG, JPG, PDF, SVG, atau file kerja editable jika termasuk kontrak.",
        },
        {
          title: "Handover dan Brand Consistency",
          detail:
            "File diserahkan bersama panduan penggunaan jika termasuk. Untuk proyek branding, kami membantu memastikan identitas visual konsisten pada media yang disepakati.",
        },
      ],
      deliverables: [
        "File desain final",
        "Variasi ukuran dan format sesuai brief",
        "Brand guideline jika termasuk",
        "UI/UX prototype jika dipesan",
        "Source file editable jika termasuk",
        "Dokumentasi penggunaan aset",
      ],
      client:
        "Menyiapkan nama brand, logo lama jika ada, referensi, tujuan desain, target audiens, ukuran media, teks, foto, dan aset yang memiliki hak penggunaan.",
      note:
        "Hak cipta, lisensi font, aset stok, ilustrasi pihak ketiga, serta penyerahan source file mengikuti perjanjian dan lisensi masing-masing aset.",
    },
    {
      number: "10",
      icon: "📢",
      category: "DIGITAL MARKETING & ADVERTISING",
      title: "Digital Marketing, Ads & Social Media",
      description:
        "Perencanaan dan pengelolaan aktivitas pemasaran digital untuk meningkatkan jangkauan, engagement, leads, serta efektivitas komunikasi brand.",
      technologies:
        "Meta Ads, Google Ads, TikTok Ads, Google Analytics, Google Tag Manager, Meta Pixel, Search Console, content planning, dan marketing analytics.",
      suitable: [
        "Meta Ads campaign",
        "Google Ads",
        "TikTok Ads",
        "Social media management",
        "Content planning",
        "Campaign strategy",
        "Lead generation",
        "Marketing performance reporting",
      ],
      process: [
        {
          title: "Marketing Audit",
          detail:
            "Kami mengevaluasi kondisi brand, akun media sosial, website, produk, audiens, kompetitor, materi iklan, dan aktivitas pemasaran sebelumnya.",
        },
        {
          title: "Campaign Objective",
          detail:
            "Kami menentukan tujuan campaign seperti awareness, traffic, engagement, leads, atau sales. Indikator keberhasilan disesuaikan dengan tujuan.",
        },
        {
          title: "Audience dan Funnel Strategy",
          detail:
            "Kami menyusun segmentasi audiens, pesan pemasaran, penawaran, funnel, dan strategi komunikasi berdasarkan tahap perjalanan calon pelanggan.",
        },
        {
          title: "Creative dan Content Production",
          detail:
            "Materi iklan dan konten disiapkan berdasarkan konsep yang disetujui. Materi dapat berupa visual, video, copywriting, carousel, atau format lain.",
        },
        {
          title: "Tracking dan Campaign Setup",
          detail:
            "Kami menyiapkan akun, pixel, conversion event, landing page, UTM, dan tracking lain sesuai akses yang diberikan serta ruang lingkup pekerjaan.",
        },
        {
          title: "Launch dan Monitoring",
          detail:
            "Campaign dijalankan setelah persetujuan klien. Tim memantau delivery, biaya, jangkauan, klik, leads, dan indikator yang relevan.",
        },
        {
          title: "Optimization",
          detail:
            "Evaluasi dilakukan terhadap materi kreatif, target audiens, penempatan, penawaran, dan struktur campaign berdasarkan data.",
        },
        {
          title: "Reporting dan Recommendation",
          detail:
            "Klien menerima laporan sesuai periode yang disepakati, termasuk aktivitas, hasil, kendala, dan rekomendasi perbaikan.",
        },
      ],
      deliverables: [
        "Strategi campaign",
        "Materi promosi sesuai paket",
        "Setup campaign dan tracking",
        "Pengelolaan iklan jika termasuk",
        "Laporan performa",
        "Rekomendasi optimasi",
      ],
      client:
        "Menyediakan akses akun iklan, informasi produk, target pasar, budget iklan, materi brand, penawaran, dan persetujuan campaign.",
      note:
        "Budget iklan merupakan dana milik klien yang dibayarkan ke platform, bukan otomatis termasuk biaya jasa pengelolaan. Hasil iklan tidak dapat dijamin secara absolut.",
    },
  ]

  const generalSteps = [
    {
      number: "01",
      title: "Consultation",
      subtitle: "Konsultasi dan pemahaman kebutuhan",
      detail:
        "Klien menghubungi HINAI Tech, menjelaskan kebutuhan, target, masalah, dan hasil yang diharapkan. Kami membantu menerjemahkan ide menjadi kebutuhan proyek yang lebih jelas.",
      icon: "💬",
    },
    {
      number: "02",
      title: "Discovery",
      subtitle: "Analisis dan perencanaan",
      detail:
        "Tim menganalisis kebutuhan, ruang lingkup, fitur, platform, risiko, aset, kebutuhan integrasi, dan solusi teknologi yang sesuai.",
      icon: "🔎",
    },
    {
      number: "03",
      title: "Proposal",
      subtitle: "Penawaran dan kesepakatan",
      detail:
        "Kami menyampaikan ruang lingkup pekerjaan, deliverables, estimasi waktu, biaya, termin pembayaran, revisi, serta ketentuan layanan.",
      icon: "📄",
    },
    {
      number: "04",
      title: "Production",
      subtitle: "Desain dan pengembangan",
      detail:
        "Setelah kesepakatan dan pembayaran awal sesuai kontrak, proyek masuk tahap produksi dengan komunikasi dan evaluasi berkala.",
      icon: "⚙️",
    },
    {
      number: "05",
      title: "Quality Assurance",
      subtitle: "Pengujian dan pemeriksaan",
      detail:
        "Kami melakukan pemeriksaan hasil berdasarkan spesifikasi, fungsi, tampilan, keamanan, kualitas, dan kriteria penerimaan proyek.",
      icon: "🛡️",
    },
    {
      number: "06",
      title: "Client Review",
      subtitle: "Pemeriksaan dan persetujuan",
      detail:
        "Klien diberikan kesempatan memeriksa hasil dan menyampaikan feedback yang terstruktur sesuai ruang lingkup serta batas revisi yang disepakati.",
      icon: "👁️",
    },
    {
      number: "07",
      title: "Delivery",
      subtitle: "Peluncuran dan serah terima",
      detail:
        "Setelah persyaratan pembayaran dan penerimaan dipenuhi, hasil proyek diserahkan melalui metode distribusi yang disepakati.",
      icon: "🚀",
    },
    {
      number: "08",
      title: "After-Sales",
      subtitle: "Dukungan dan pengembangan",
      detail:
        "HINAI Tech memberikan dukungan sesuai paket atau kontrak, termasuk masa garansi apabila berlaku, maintenance, dan pengembangan lanjutan.",
      icon: "🤝",
    },
  ]

  return (
    <section
      id="how-we-work"
      className="hin-how-work relative overflow-hidden py-20 md:py-28"
    >
      <div className="hin-how-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="hin-eyebrow mx-auto mb-5 inline-flex items-center gap-2">
            <span className="hin-eyebrow-dot" />
            HINAI TECH PROJECT METHODOLOGY
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            Bagaimana Kami
            <span className="hin-gradient-text"> Mengerjakan Proyek Anda?</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Setiap proyek memiliki karakteristik dan kebutuhan yang berbeda.
            Karena itu, HINAI Tech menerapkan proses kerja terstruktur agar
            klien memahami setiap tahapan, mengetahui apa yang dikerjakan,
            dan dapat memantau perkembangan proyek dengan lebih transparan.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#hin-general-process" className="hin-primary-btn">
              Lihat Alur Kerja
              <span>↓</span>
            </a>
            <a href="#hin-service-process" className="hin-secondary-btn">
              Pelajari Setiap Layanan
            </a>
          </div>
        </div>

        {/* GENERAL PROCESS */}
        <div id="hin-general-process" className="mb-24 scroll-mt-24">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="hin-small-label">THE PROJECT JOURNEY</span>
              <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
                Alur Kerja Umum HINAI Tech
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                Delapan tahapan utama yang menjadi kerangka kerja proyek.
                Tahapan teknis dan durasi dapat disesuaikan dengan jenis
                layanan, skala pekerjaan, serta kesepakatan bersama.
              </p>
            </div>
            <span className="hin-status-label">
              08 PROJECT STAGES
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {generalSteps.map((step, index) => (
              <div className="hin-step-card" key={step.number}>
                <div className="flex items-center justify-between">
                  <span className="hin-step-number">{step.number}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h4 className="mt-6 text-lg font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  {step.subtitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {step.detail}
                </p>
                {index !== generalSteps.length - 1 && (
                  <div className="hin-step-line" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IMPORTANT PROJECT PRINCIPLES */}
        <div className="hin-principles mb-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <span className="hin-small-label">OUR WORKING PRINCIPLES</span>
              <h3 className="mt-4 text-2xl font-bold leading-tight text-white md:text-3xl">
                Bukan Sekadar Menyelesaikan Proyek, Tetapi Memastikan Solusi
                Berfungsi
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Kami mengutamakan pemahaman kebutuhan, komunikasi terbuka,
                kualitas pengerjaan, dan kesepakatan yang jelas antara
                perusahaan dan klien.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["01", "Scope Transparency", "Ruang lingkup, fitur, dan hasil pekerjaan dijelaskan sejak awal."],
                ["02", "Client Collaboration", "Klien terlibat dalam pemberian informasi, review, dan persetujuan."],
                ["03", "Quality Assurance", "Setiap hasil diperiksa sebelum diserahkan."],
                ["04", "Clear Communication", "Perkembangan, kendala, dan perubahan dikomunikasikan."],
                ["05", "Data Protection", "Akses dan data klien dikelola sesuai kebutuhan dan ketentuan."],
                ["06", "Long-Term Support", "Dukungan setelah proyek mengikuti paket dan kontrak."],
              ].map((item) => (
                <div key={item[0]} className="hin-principle-item">
                  <span>{item[0]}</span>
                  <div>
                    <h4>{item[1]}</h4>
                    <p>{item[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICE PROCESS */}
        <div id="hin-service-process" className="scroll-mt-24">
          <div className="mb-12 text-center">
            <span className="hin-small-label">SERVICE-SPECIFIC WORKFLOW</span>
            <h3 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white md:text-4xl">
              Proses Pengerjaan Berdasarkan Jenis Layanan
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base">
              Pelajari bagaimana setiap layanan HINAI Tech dikerjakan,
              mulai dari analisis kebutuhan, proses produksi, pengujian,
              hingga hasil akhir yang diterima oleh klien.
            </p>
          </div>

          <div className="space-y-5">
            {services.map((service, serviceIndex) => (
              <details
                key={service.number}
                className="hin-service-card"
                open={serviceIndex === 0}
              >
                <summary className="hin-service-summary">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="hin-service-icon">{service.icon}</div>
                    <div className="min-w-0">
                      <span className="hin-service-category">
                        {service.number} / {service.category}
                      </span>
                      <h4 className="mt-1 text-base font-bold text-slate-950 dark:text-white md:text-xl">
                        {service.title}
                      </h4>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <span className="hin-expand-icon">+</span>
                </summary>

                <div className="hin-service-content">
                  <div className="hin-service-intro">
                    <div>
                      <span className="hin-small-label">OVERVIEW</span>
                      <p className="mt-3 text-sm leading-8 text-slate-700 dark:text-slate-300">
                        {service.description}
                      </p>
                    </div>
                    <div className="hin-tech-panel">
                      <span>TECHNOLOGY STACK</span>
                      <p>{service.technologies}</p>
                    </div>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
                    {/* PROCESS DETAIL */}
                    <div>
                      <h5 className="mb-5 text-lg font-bold text-slate-950 dark:text-white">
                        Tahapan Pengerjaan Proyek
                      </h5>
                      <div className="hin-timeline">
                        {service.process.map((process, processIndex) => (
                          <div
                            key={process.title}
                            className="hin-timeline-item"
                          >
                            <div className="hin-timeline-marker">
                              {String(processIndex + 1).padStart(2, "0")}
                            </div>
                            <div className="min-w-0 pb-7">
                              <h6 className="text-sm font-bold text-slate-950 dark:text-white md:text-base">
                                {process.title}
                              </h6>
                              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                {process.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-5">
                      <div className="hin-info-panel">
                        <h5>Hasil yang Diterima Klien</h5>
                        <ul>
                          {service.deliverables.map((item) => (
                            <li key={item}>
                              <span>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="hin-info-panel hin-client-panel">
                        <h5>Persiapan dari Klien</h5>
                        <p>{service.client}</p>
                      </div>

                      <div className="hin-note-panel">
                        <span>ⓘ INFORMASI PENTING</span>
                        <p>{service.note}</p>
                      </div>

                      <a
                        href={`https://wa.me/6282144137914?text=${encodeURIComponent(
                          `Halo HINAI Tech, saya ingin berkonsultasi mengenai layanan ${service.title}. Mohon informasi mengenai proses, kebutuhan, estimasi waktu, dan penawarannya.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hin-service-cta"
                      >
                        Konsultasikan Layanan Ini
                        <span>↗</span>
                      </a>
                    </div>
                  </div>

                  <div className="hin-suitable-panel">
                    <h5>Layanan Ini Cocok Untuk</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.suitable.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CLIENT RESPONSIBILITY */}
        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          <div className="hin-responsibility-card">
            <div className="hin-responsibility-icon">🏢</div>
            <h3>Tanggung Jawab HINAI Tech</h3>
            <ul>
              <li>Memahami dan menganalisis kebutuhan proyek.</li>
              <li>Memberikan proposal dan ruang lingkup yang jelas.</li>
              <li>Mengerjakan proyek sesuai kesepakatan.</li>
              <li>Menjaga komunikasi dan memberikan informasi perkembangan.</li>
              <li>Melakukan pengujian sebelum serah terima.</li>
              <li>Menjaga kerahasiaan data dan akses klien.</li>
              <li>Memberikan dukungan sesuai kontrak.</li>
              <li>Menjelaskan perubahan biaya dan waktu sebelum pekerjaan tambahan dilakukan.</li>
            </ul>
          </div>

          <div className="hin-responsibility-card">
            <div className="hin-responsibility-icon">🤝</div>
            <h3>Tanggung Jawab Klien</h3>
            <ul>
              <li>Memberikan brief dan informasi yang benar.</li>
              <li>Menyediakan materi, aset, dan akses yang dibutuhkan.</li>
              <li>Melakukan pembayaran sesuai termin.</li>
              <li>Memberikan feedback secara terstruktur.</li>
              <li>Memeriksa hasil pada waktu review yang disepakati.</li>
              <li>Memastikan materi yang diberikan memiliki izin penggunaan.</li>
              <li>Menjaga keamanan akun dan kredensial setelah serah terima.</li>
              <li>Menggunakan hasil proyek sesuai ketentuan hukum.</li>
            </ul>
          </div>
        </div>

        {/* PROJECT POLICY */}
        <div className="mt-8 hin-policy-card">
          <div className="mb-8">
            <span className="hin-small-label">PROJECT TERMS & TRANSPARENCY</span>
            <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
              Ketentuan Pelaksanaan Proyek
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              Agar kerja sama berjalan profesional, setiap proyek harus
              memiliki kesepakatan yang dipahami kedua belah pihak.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Scope of Work",
                text: "Fitur, halaman, modul, jumlah konten, platform, dan hasil pekerjaan mengikuti proposal atau kontrak.",
              },
              {
                title: "Project Timeline",
                text: "Estimasi waktu dihitung berdasarkan ruang lingkup, kompleksitas, kesiapan materi, dan proses persetujuan klien.",
              },
              {
                title: "Payment Terms",
                text: "Pembayaran mengikuti termin yang disepakati. Pekerjaan dimulai setelah persyaratan awal terpenuhi.",
              },
              {
                title: "Revision Policy",
                text: "Revisi mencakup penyesuaian hasil terhadap brief yang disepakati, bukan otomatis penambahan fitur atau perubahan konsep besar.",
              },
              {
                title: "Additional Requests",
                text: "Penambahan fitur atau perubahan scope dianalisis terlebih dahulu dan dapat memengaruhi biaya maupun deadline.",
              },
              {
                title: "Acceptance & Handover",
                text: "Hasil diperiksa menggunakan kriteria penerimaan. Akses, source code, dan aset diserahkan sesuai perjanjian.",
              },
              {
                title: "Warranty & Maintenance",
                text: "Garansi bug dan maintenance mengikuti durasi, batasan, serta ketentuan yang tertulis dalam penawaran.",
              },
              {
                title: "Third-Party Services",
                text: "Domain, hosting, API, lisensi, server, biaya iklan, dan layanan eksternal mengikuti kesepakatan biaya.",
              },
              {
                title: "Confidentiality",
                text: "Data dan informasi proyek diperlakukan sesuai kewajiban kerahasiaan, kebutuhan akses, dan ketentuan yang berlaku.",
              },
            ].map((item) => (
              <div key={item.title} className="hin-policy-item">
                <span>✓</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500 dark:border-white/10 dark:text-slate-400">
            Ketentuan operasional pada section ini merupakan penjelasan
            umum. Dokumen penawaran, kontrak, invoice, dan kesepakatan
            tertulis untuk setiap proyek tetap menjadi acuan utama apabila
            terdapat perbedaan detail.
          </p>
        </div>

        
      </div>

      <style jsx>{`
        .hin-how-work {
          isolation: isolate;
          background: #f8fafc;
          color: #0f172a;
        }

        :global(.dark) .hin-how-work {
          background: #080d18;
        }

        .hin-how-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 10% 8%, rgba(37, 99, 235, 0.09), transparent 28%),
            radial-gradient(circle at 90% 30%, rgba(245, 158, 11, 0.07), transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(37, 99, 235, 0.06), transparent 35%);
        }

        .hin-eyebrow {
          padding: 9px 16px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.06);
          color: #2563eb;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .hin-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d99b32;
          box-shadow: 0 0 12px rgba(217, 155, 50, 0.6);
        }

        .hin-gradient-text {
          display: block;
          background: linear-gradient(110deg, #2563eb, #a87928, #d5a94e);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .hin-primary-btn,
        .hin-secondary-btn {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 9px;
          padding: 0 21px;
          font-size: 13px;
          font-weight: 750;
          transition: 0.25s ease;
        }

        .hin-primary-btn {
          background: linear-gradient(110deg, #2563eb, #1745a4);
          color: white;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.2);
        }

        .hin-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.3);
        }

        .hin-secondary-btn {
          border: 1px solid #cbd5e1;
          background: white;
          color: #1e293b;
        }

        .hin-secondary-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
          transform: translateY(-2px);
        }

        :global(.dark) .hin-secondary-btn {
          border-color: rgba(255,255,255,0.17);
          background: #111827;
          color: white;
        }

        .hin-small-label {
          color: #b7862d;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.18em;
        }

        .hin-status-label {
          align-self: flex-start;
          border: 1px solid rgba(217, 155, 50, 0.3);
          border-radius: 7px;
          background: rgba(217, 155, 50, 0.08);
          padding: 9px 13px;
          color: #a87928;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .hin-step-card {
          position: relative;
          min-width: 0;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          background: rgba(255,255,255,0.88);
          padding: 23px;
          transition: 0.25s ease;
        }

        .hin-step-card:hover {
          transform: translateY(-4px);
          border-color: #93b4f5;
          box-shadow: 0 14px 35px rgba(15,23,42,0.07);
        }

        :global(.dark) .hin-step-card {
          border-color: rgba(255,255,255,0.09);
          background: #111827;
        }

        .hin-step-number {
          color: #b7862d;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .hin-step-line {
          position: absolute;
          right: -5px;
          top: 32px;
          width: 10px;
          height: 1px;
          background: #d4a64e;
        }

        .hin-principles {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          background:
            radial-gradient(circle at 100% 0%, rgba(37,99,235,0.3), transparent 40%),
            linear-gradient(120deg, #101a2d, #080e1a);
          padding: 30px;
          box-shadow: 0 25px 70px rgba(15,23,42,0.13);
        }

        @media(min-width:768px) {
          .hin-principles {
            padding: 48px;
          }
        }

        .hin-principle-item {
          display: flex;
          gap: 13px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 11px;
          background: rgba(255,255,255,0.045);
          padding: 16px;
        }

        .hin-principle-item > span {
          color: #e1b35b;
          font-size: 11px;
          font-weight: 900;
        }

        .hin-principle-item h4 {
          color: white;
          font-size: 13px;
          font-weight: 800;
        }

        .hin-principle-item p {
          margin-top: 6px;
          color: #aebbd0;
          font-size: 11px;
          line-height: 1.8;
        }

        .hin-service-card {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: white;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        :global(.dark) .hin-service-card {
          border-color: rgba(255,255,255,0.1);
          background: #101827;
        }

        .hin-service-card[open] {
          border-color: rgba(37,99,235,0.5);
          box-shadow: 0 15px 45px rgba(15,23,42,0.07);
        }

        .hin-service-summary {
          display: flex;
          min-height: 112px;
          cursor: pointer;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px;
          list-style: none;
        }

        .hin-service-summary::-webkit-details-marker {
          display: none;
        }

        @media(min-width:768px) {
          .hin-service-summary {
            padding: 25px 30px;
          }
        }

        .hin-service-icon {
          display: grid;
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(37,99,235,0.14);
          border-radius: 13px;
          background: #eff6ff;
          font-size: 26px;
        }

        :global(.dark) .hin-service-icon {
          background: #1e293b;
        }

        .hin-service-category {
          color: #a87928;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .hin-expand-icon {
          display: grid;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          color: #2563eb;
          font-size: 23px;
          transition: 0.25s ease;
        }

        .hin-service-card[open] .hin-expand-icon {
          transform: rotate(45deg);
          border-color: #2563eb;
          background: #eff6ff;
        }

        .hin-service-content {
          border-top: 1px solid #e2e8f0;
          padding: 24px 20px 28px;
          animation: hinReveal 0.3s ease;
        }

        :global(.dark) .hin-service-content {
          border-color: rgba(255,255,255,0.1);
        }

        @media(min-width:768px) {
          .hin-service-content {
            padding: 32px;
          }
        }

        .hin-service-intro {
          display: grid;
          gap: 20px;
          margin-bottom: 35px;
          grid-template-columns: 1fr;
        }

        @media(min-width:900px) {
          .hin-service-intro {
            grid-template-columns: 1fr 1fr;
          }
        }

        .hin-tech-panel {
          border: 1px solid rgba(217,155,50,0.23);
          border-radius: 12px;
          background: rgba(217,155,50,0.055);
          padding: 19px;
        }

        .hin-tech-panel span {
          color: #b7862d;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .hin-tech-panel p {
          margin-top: 11px;
          color: #475569;
          font-size: 12px;
          line-height: 1.9;
        }

        :global(.dark) .hin-tech-panel p {
          color: #cbd5e1;
        }

        .hin-timeline {
          position: relative;
          margin-top: 25px;
        }

        .hin-timeline-item {
          position: relative;
          display: flex;
          gap: 15px;
        }

        .hin-timeline-item:not(:last-child)::before {
          position: absolute;
          top: 35px;
          bottom: 0;
          left: 15px;
          width: 1px;
          background: linear-gradient(#d6a84e, #dbeafe);
          content: "";
        }

        .hin-timeline-marker {
          position: relative;
          z-index: 1;
          display: grid;
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #e8bd6c;
          border-radius: 50%;
          background: white;
          color: #9b7024;
          font-size: 9px;
          font-weight: 900;
        }

        :global(.dark) .hin-timeline-marker {
          background: #1e293b;
          color: #f4c873;
        }

        .hin-info-panel {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
          padding: 20px;
        }

        :global(.dark) .hin-info-panel {
          border-color: rgba(255,255,255,0.1);
          background: #162033;
        }

        .hin-info-panel h5,
        .hin-responsibility-card h3 {
          color: #0f172a;
          font-size: 15px;
          font-weight: 850;
        }

        :global(.dark) .hin-info-panel h5,
        :global(.dark) .hin-responsibility-card h3 {
          color: white;
        }

        .hin-info-panel ul {
          display: grid;
          gap: 11px;
          margin-top: 17px;
        }

        .hin-info-panel li {
          display: flex;
          gap: 9px;
          color: #475569;
          font-size: 12px;
          line-height: 1.7;
        }

        :global(.dark) .hin-info-panel li {
          color: #cbd5e1;
        }

        .hin-info-panel li span {
          flex-shrink: 0;
          color: #b7862d;
          font-weight: 900;
        }

        .hin-client-panel {
          border-color: rgba(37,99,235,0.2);
          background: rgba(37,99,235,0.045);
        }

        .hin-client-panel p,
        .hin-note-panel p {
          margin-top: 12px;
          color: #475569;
          font-size: 12px;
          line-height: 1.9;
        }

        :global(.dark) .hin-client-panel p,
        :global(.dark) .hin-note-panel p {
          color: #cbd5e1;
        }

        .hin-note-panel {
          border-left: 3px solid #d5a64c;
          border-radius: 0 9px 9px 0;
          background: rgba(217,155,50,0.07);
          padding: 17px;
        }

        .hin-note-panel > span {
          color: #a87928;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .hin-service-cta {
          display: flex;
          min-height: 49px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-radius: 9px;
          background: #123d86;
          padding: 0 17px;
          color: white;
          font-size: 12px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .hin-service-cta:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .hin-suitable-panel {
          margin-top: 28px;
          border-top: 1px solid #e2e8f0;
          padding-top: 24px;
        }

        :global(.dark) .hin-suitable-panel {
          border-color: rgba(255,255,255,0.1);
        }

        .hin-suitable-panel h5 {
          margin-bottom: 14px;
          color: #0f172a;
          font-size: 13px;
          font-weight: 850;
        }

        :global(.dark) .hin-suitable-panel h5 {
          color: white;
        }

        .hin-suitable-panel span {
          display: inline-flex;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: #f8fafc;
          padding: 7px 11px;
          color: #475569;
          font-size: 11px;
        }

        :global(.dark) .hin-suitable-panel span {
          border-color: rgba(255,255,255,0.1);
          background: #172033;
          color: #cbd5e1;
        }

        .hin-responsibility-card {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          background: white;
          padding: 26px;
        }

        :global(.dark) .hin-responsibility-card {
          border-color: rgba(255,255,255,0.1);
          background: #101827;
        }

        .hin-responsibility-icon {
          margin-bottom: 15px;
          font-size: 28px;
        }

        .hin-responsibility-card ul {
          display: grid;
          gap: 13px;
          margin-top: 22px;
        }

        .hin-responsibility-card li {
          position: relative;
          padding-left: 22px;
          color: #475569;
          font-size: 12px;
          line-height: 1.8;
        }

        :global(.dark) .hin-responsibility-card li {
          color: #cbd5e1;
        }

        .hin-responsibility-card li::before {
          position: absolute;
          left: 0;
          color: #b7862d;
          content: "✓";
          font-weight: 900;
        }

        .hin-policy-card {
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: white;
          padding: 25px;
        }

        :global(.dark) .hin-policy-card {
          border-color: rgba(255,255,255,0.1);
          background: #101827;
        }

        @media(min-width:768px) {
          .hin-policy-card {
            padding: 38px;
          }
        }

        .hin-policy-item {
          display: flex;
          gap: 12px;
        }

        .hin-policy-item > span {
          display: grid;
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 7px;
          background: rgba(217,155,50,0.12);
          color: #a87928;
          font-size: 12px;
          font-weight: 900;
        }

        .hin-policy-item h4 {
          color: #0f172a;
          font-size: 13px;
          font-weight: 850;
        }

        :global(.dark) .hin-policy-item h4 {
          color: white;
        }

        .hin-policy-item p {
          margin-top: 7px;
          color: #64748b;
          font-size: 11px;
          line-height: 1.9;
        }

        :global(.dark) .hin-policy-item p {
          color: #aebbd0;
        }

        .hin-final-cta {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(217,155,50,0.22);
          border-radius: 20px;
          background:
            radial-gradient(circle at 15% 10%, rgba(37,99,235,0.4), transparent 36%),
            radial-gradient(circle at 90% 90%, rgba(217,155,50,0.16), transparent 35%),
            linear-gradient(125deg, #101b30, #080e19);
          padding: 55px 24px;
          text-align: center;
        }

        @media(min-width:768px) {
          .hin-final-cta {
            padding: 85px 40px;
          }
        }

        @keyframes hinReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .hin-how-work *,
          .hin-how-work *::before,
          .hin-how-work *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}

const methodologyPrinciples = [
  {
    number: "01",
    title: "Berangkat dari kebutuhan nyata",
    description:
      "Setiap proyek dimulai dengan memahami masalah, pengguna, tujuan bisnis, proses kerja, dan hasil yang ingin dicapai. Teknologi dipilih setelah kebutuhan dipahami, bukan sebaliknya.",
    icon: Target,
  },
  {
    number: "02",
    title: "Validasi sebelum membangun terlalu jauh",
    description:
      "Ide, alur kerja, struktur fitur, dan rancangan antarmuka perlu divalidasi sedini mungkin. Prototipe membantu klien dan tim memiliki pemahaman yang sama sebelum investasi pengembangan semakin besar.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Pengerjaan bertahap dan terukur",
    description:
      "Pekerjaan dipecah menjadi bagian yang dapat direncanakan, dikerjakan, diuji, dan dievaluasi. Setiap tahap memiliki tujuan, keluaran, serta kriteria penerimaan yang jelas.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Kualitas menjadi bagian proses",
    description:
      "Testing, keamanan, dokumentasi, dan pemeriksaan kualitas tidak hanya dilakukan menjelang peluncuran. Semua aspek tersebut diperhatikan sejak perencanaan sampai pemeliharaan.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Kolaborasi dan transparansi",
    description:
      "Klien dilibatkan dalam keputusan penting, validasi prototipe, pemeriksaan hasil, dan penerimaan pekerjaan. Perubahan kebutuhan dibahas secara terbuka beserta dampaknya.",
    icon: HeartHandshake,
  },
  {
    number: "06",
    title: "Dapat dikembangkan setelah rilis",
    description:
      "Produk digital tidak berhenti pada saat pertama kali diluncurkan. Struktur sistem, dokumentasi, dan rencana pemeliharaan perlu mempertimbangkan kebutuhan pengembangan berikutnya.",
    icon: TrendingUp,
  },
]

const agileStages: ProcessItem[] = [
  {
    number: "01",
    title: "Discovery dan pemahaman kebutuhan",
    subtitle: "Understand the problem",
    description:
      "Tim memahami konteks bisnis, pengguna, proses kerja, hambatan yang sedang terjadi, dan hasil yang diharapkan. Pada tahap ini, kebutuhan dikumpulkan dan disusun agar masalah yang hendak diselesaikan tidak salah dipahami.",
    activities: [
      "Diskusi awal dengan pemilik proyek dan stakeholder terkait.",
      "Identifikasi pengguna utama dan kebutuhan setiap kelompok pengguna.",
      "Pemetaan proses kerja saat ini dan proses yang diharapkan.",
      "Identifikasi masalah, risiko, batasan, dan ketergantungan.",
      "Penyusunan tujuan proyek dan indikator keberhasilan.",
      "Pengelompokan kebutuhan wajib, penting, dan pengembangan lanjutan.",
    ],
    deliverables: [
      "Ringkasan kebutuhan proyek.",
      "Daftar stakeholder dan pengguna.",
      "Tujuan dan ruang lingkup awal.",
      "Daftar risiko dan asumsi.",
      "Daftar kebutuhan awal atau product backlog.",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Planning dan prioritas",
    subtitle: "Plan what matters first",
    description:
      "Kebutuhan yang telah dikumpulkan disusun menjadi pekerjaan yang lebih terukur. Tim menentukan prioritas, dependensi, estimasi, urutan implementasi, serta target setiap iterasi atau sprint.",
    activities: [
      "Memecah kebutuhan besar menjadi fitur dan task yang lebih kecil.",
      "Menentukan prioritas berdasarkan nilai bisnis, urgensi, dan risiko.",
      "Menyusun acceptance criteria untuk fitur yang dikerjakan.",
      "Mengidentifikasi dependensi teknis dan kebutuhan integrasi.",
      "Menyusun rencana sprint atau milestone.",
      "Membahas kapasitas tim dan ketersediaan stakeholder.",
    ],
    deliverables: [
      "Product backlog yang diprioritaskan.",
      "Rencana sprint atau milestone.",
      "Estimasi pekerjaan.",
      "Acceptance criteria.",
      "Rencana komunikasi dan evaluasi.",
    ],
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design dan perancangan",
    subtitle: "Design before implementation",
    description:
      "Tim menyusun struktur pengalaman pengguna, alur navigasi, rancangan antarmuka, arsitektur aplikasi, struktur data, dan pendekatan teknis. Desain harus mendukung kebutuhan pengguna serta batasan proyek.",
    activities: [
      "Menyusun user flow dan struktur navigasi.",
      "Membuat wireframe atau rancangan antarmuka.",
      "Menyusun design system sesuai kebutuhan produk.",
      "Menentukan arsitektur aplikasi dan pembagian modul.",
      "Merancang struktur database dan relasi data.",
      "Menentukan kebutuhan API, integrasi, dan hak akses.",
      "Melakukan review desain bersama stakeholder.",
    ],
    deliverables: [
      "User flow.",
      "Wireframe atau mockup.",
      "Rancangan UI/UX.",
      "Gambaran arsitektur teknis.",
      "Rancangan database dan integrasi.",
    ],
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Development dalam iterasi",
    subtitle: "Build incrementally",
    description:
      "Pengembangan dilakukan secara bertahap berdasarkan prioritas. Setiap iterasi berfokus pada bagian yang memiliki nilai dan dapat diperiksa. Tim menjaga konsistensi implementasi, struktur kode, dan integrasi antarmodul.",
    activities: [
      "Menyiapkan repository, environment, dan struktur proyek.",
      "Mengembangkan fitur berdasarkan backlog yang disepakati.",
      "Membuat komponen dan modul sesuai arsitektur.",
      "Mengintegrasikan frontend, backend, database, dan layanan eksternal.",
      "Melakukan code review sesuai kebutuhan proyek.",
      "Mencatat hambatan, perubahan, dan progres pengerjaan.",
      "Menjaga agar implementasi tetap sesuai acceptance criteria.",
    ],
    deliverables: [
      "Increment atau bagian produk yang dapat diperiksa.",
      "Source code sesuai kesepakatan.",
      "Catatan perubahan dan progres.",
      "Dokumentasi teknis yang relevan.",
      "Hasil pengembangan per iterasi.",
    ],
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing dan quality assurance",
    subtitle: "Verify before release",
    description:
      "Fitur yang telah dikembangkan diperiksa melalui pengujian yang sesuai dengan karakteristik aplikasi. Pengujian dilakukan untuk menemukan kesalahan, memastikan alur utama berjalan, dan memeriksa kesesuaian hasil dengan kebutuhan.",
    activities: [
      "Unit testing untuk bagian logika yang relevan.",
      "Integration testing untuk komunikasi antarmodul.",
      "Functional testing untuk alur penggunaan.",
      "Validasi input dan penanganan error.",
      "Pemeriksaan hak akses dan batasan peran pengguna.",
      "Regression testing setelah perubahan penting.",
      "User acceptance testing bersama perwakilan klien.",
    ],
    deliverables: [
      "Catatan hasil pengujian.",
      "Daftar bug dan status perbaikannya.",
      "Hasil verifikasi acceptance criteria.",
      "Daftar isu yang masih perlu ditangani.",
      "Rekomendasi kesiapan rilis.",
    ],
    icon: TestTube2,
  },
  {
    number: "06",
    title: "Deployment dan handover",
    subtitle: "Prepare for real use",
    description:
      "Produk disiapkan untuk digunakan pada lingkungan tujuan. Tahap ini mencakup konfigurasi, deployment, pemeriksaan setelah rilis, dokumentasi penggunaan, dan serah terima sesuai ruang lingkup kontrak.",
    activities: [
      "Menyiapkan environment production atau distribusi aplikasi.",
      "Mengatur konfigurasi dan environment variables.",
      "Menyiapkan database dan proses migrasi bila diperlukan.",
      "Mengatur domain, hosting, server, atau distribusi aplikasi.",
      "Melakukan smoke testing setelah deployment.",
      "Menyerahkan akses, dokumentasi, dan materi penggunaan.",
      "Melakukan penjelasan atau pelatihan sesuai kesepakatan.",
    ],
    deliverables: [
      "Produk yang telah dipasang atau didistribusikan.",
      "Dokumentasi penggunaan.",
      "Dokumentasi teknis sesuai kesepakatan.",
      "Informasi akses dan konfigurasi yang relevan.",
      "Berita acara atau konfirmasi serah terima bila diperlukan.",
    ],
    icon: Rocket,
  },
  {
    number: "07",
    title: "Review dan improvement",
    subtitle: "Learn and improve",
    description:
      "Setelah fitur atau produk digunakan, tim mengevaluasi hasil, masukan pengguna, masalah yang muncul, dan peluang pengembangan. Hasil evaluasi menjadi masukan bagi backlog berikutnya.",
    activities: [
      "Mengumpulkan masukan dari pengguna dan stakeholder.",
      "Mengevaluasi tujuan awal dan hasil yang dicapai.",
      "Meninjau bug atau kendala setelah rilis.",
      "Mengidentifikasi peningkatan pengalaman pengguna.",
      "Memperbarui prioritas backlog.",
      "Menyusun rekomendasi iterasi selanjutnya.",
    ],
    deliverables: [
      "Catatan evaluasi.",
      "Daftar improvement.",
      "Backlog pengembangan berikutnya.",
      "Rekomendasi pemeliharaan.",
      "Rencana tindak lanjut.",
    ],
    icon: TrendingUp,
  },
]

const radStages: ProcessItem[] = [
  {
    number: "01",
    title: "Requirements Planning",
    subtitle: "Menyepakati kebutuhan dan tujuan",
    description:
      "Klien dan tim HINAI Tech mendefinisikan tujuan proyek, kebutuhan utama, batasan, dan ruang lingkup awal. Fokusnya adalah membangun pemahaman bersama tentang apa yang perlu diselesaikan dan mengapa solusi tersebut dibutuhkan.",
    activities: [
      "Mengidentifikasi masalah utama yang ingin diselesaikan.",
      "Mendefinisikan tujuan dan hasil yang diharapkan.",
      "Mengenali pengguna dan stakeholder.",
      "Menyusun kebutuhan fungsional dan nonfungsional.",
      "Mendefinisikan batasan waktu, biaya, dan teknologi.",
      "Menyepakati prioritas kebutuhan awal.",
    ],
    deliverables: [
      "Dokumen kebutuhan awal.",
      "Tujuan dan ruang lingkup proyek.",
      "Daftar fitur utama.",
      "Kriteria keberhasilan awal.",
    ],
    icon: FileSearch,
  },
  {
    number: "02",
    title: "User Design dan Prototyping",
    subtitle: "Membangun gambaran solusi",
    description:
      "Tim menyusun prototipe agar calon pengguna dapat melihat dan mengevaluasi gambaran sistem. Prototipe dapat berupa wireframe, mockup, clickable prototype, atau demonstrasi alur. Bentuknya disesuaikan dengan tingkat kebutuhan validasi.",
    activities: [
      "Membuat wireframe halaman atau layar utama.",
      "Menyusun navigasi dan alur interaksi.",
      "Membuat mockup visual.",
      "Menyusun prototipe untuk fitur prioritas.",
      "Meminta masukan dari pengguna atau stakeholder.",
      "Mencatat revisi dan keputusan desain.",
      "Memvalidasi pemahaman terhadap solusi.",
    ],
    deliverables: [
      "Wireframe.",
      "Mockup atau prototype.",
      "Catatan hasil review pengguna.",
      "Daftar revisi desain.",
      "Persetujuan rancangan sesuai tahap.",
    ],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Construction",
    subtitle: "Membangun sistem berdasarkan hasil validasi",
    description:
      "Setelah rancangan memperoleh persetujuan yang diperlukan, tim mengembangkan fungsi sistem. Dalam pendekatan RAD, umpan balik tetap menjadi bagian penting. Perbaikan dilakukan melalui iterasi selama tidak mengabaikan ruang lingkup, kualitas, dan kontrol perubahan.",
    activities: [
      "Membangun struktur aplikasi dan database.",
      "Mengimplementasikan fitur berdasarkan prioritas.",
      "Mengintegrasikan modul dan layanan eksternal.",
      "Melakukan pengujian selama proses pembangunan.",
      "Mendemonstrasikan hasil kepada stakeholder.",
      "Mengumpulkan feedback dan memperbaiki bagian yang diperlukan.",
    ],
    deliverables: [
      "Modul aplikasi yang berfungsi.",
      "Hasil implementasi fitur.",
      "Catatan feedback.",
      "Perbaikan berdasarkan validasi.",
      "Versi sistem untuk pengujian.",
    ],
    icon: Wrench,
  },
  {
    number: "04",
    title: "Cutover",
    subtitle: "Persiapan penggunaan dan transisi",
    description:
      "Sistem dipersiapkan untuk digunakan. Tahap ini mencakup final testing, migrasi data bila diperlukan, konfigurasi lingkungan, pelatihan, dokumentasi, dan transisi dari proses lama ke sistem baru.",
    activities: [
      "Melakukan pengujian akhir.",
      "Menyiapkan data dan migrasi jika menjadi bagian proyek.",
      "Mengatur environment penggunaan.",
      "Melakukan deployment atau distribusi.",
      "Memberikan panduan penggunaan.",
      "Melakukan pelatihan sesuai kesepakatan.",
      "Memastikan proses transisi berjalan sesuai rencana.",
    ],
    deliverables: [
      "Sistem siap digunakan sesuai ruang lingkup.",
      "Dokumentasi penggunaan.",
      "Hasil pengujian akhir.",
      "Catatan migrasi atau konfigurasi.",
      "Serah terima proyek.",
    ],
    icon: Rocket,
  },
]

const projectTypes: ProjectType[] = [
  {
    title: "Website dan landing page",
    category: "Website",
    method: "RAD-Focused",
    description:
      "Website profil perusahaan, landing page promosi, halaman kampanye, dan website sederhana umumnya memiliki tujuan yang dapat didefinisikan sejak awal. Prototipe visual dapat membantu mempercepat validasi tampilan, struktur konten, dan alur konversi.",
    reasons: [
      "Tujuan halaman biasanya dapat dirumuskan secara spesifik.",
      "Struktur informasi dan desain dapat divalidasi melalui mockup.",
      "Klien dapat memberikan masukan sebelum implementasi final.",
      "Pengerjaan dapat difokuskan pada halaman dan fitur prioritas.",
    ],
    icon: Globe2,
    duration: "Mengikuti jumlah halaman, fitur, dan kesiapan materi",
    emphasis: "Kecepatan validasi desain dan struktur konten",
  },
  {
    title: "SaaS dan aplikasi kompleks",
    category: "Aplikasi",
    method: "Agile-Focused",
    description:
      "Produk SaaS atau aplikasi dengan banyak modul, jenis pengguna, integrasi, dan kebutuhan yang berkembang lebih sesuai dikelola melalui backlog dan iterasi. Pengembangan bertahap membantu tim memvalidasi fungsi tanpa harus menunggu seluruh sistem selesai.",
    reasons: [
      "Kebutuhan dapat berkembang seiring penggunaan.",
      "Fitur memiliki dependensi dan prioritas yang berbeda.",
      "Integrasi memerlukan pengujian berulang.",
      "Produk membutuhkan evaluasi dan peningkatan berkelanjutan.",
    ],
    icon: Layers3,
    duration: "Ditentukan berdasarkan modul, integrasi, dan prioritas rilis",
    emphasis: "Iterasi, pengujian, dan pengelolaan backlog",
  },
  {
    title: "Sistem informasi bisnis",
    category: "Business System",
    method: "Hybrid Agile–RAD",
    description:
      "Sistem inventori, penjualan, manajemen pelanggan, administrasi, dan proses bisnis khusus sering memerlukan pemahaman alur kerja yang mendalam. RAD membantu memvalidasi proses melalui prototipe, sedangkan Agile membantu mengembangkan modul secara bertahap.",
    reasons: [
      "Proses bisnis perlu dipahami sebelum dibuat menjadi sistem.",
      "Pengguna perlu melihat contoh alur untuk memberi masukan.",
      "Modul dapat dikembangkan berdasarkan prioritas.",
      "Perubahan operasional perlu dikelola dengan terukur.",
    ],
    icon: BriefcaseBusiness,
    duration: "Ditentukan berdasarkan kompleksitas proses dan jumlah modul",
    emphasis: "Validasi alur bisnis dan iterasi pengembangan",
  },
  {
    title: "Aplikasi mobile dan desktop",
    category: "Mobile & Desktop",
    method: "Hybrid Agile–RAD",
    description:
      "Aplikasi Android, iOS, dan desktop dapat membutuhkan prototipe interaksi sekaligus pengembangan bertahap. Pengalaman pengguna, integrasi perangkat, penyimpanan data, distribusi, dan pengujian pada perangkat nyata perlu menjadi pertimbangan.",
    reasons: [
      "Alur interaksi perlu diuji melalui prototipe.",
      "Perangkat dan sistem operasi dapat memiliki karakteristik berbeda.",
      "Fitur dapat dirilis bertahap berdasarkan kebutuhan.",
      "Pengujian perlu mencakup kondisi penggunaan yang relevan.",
    ],
    icon: Smartphone,
    duration: "Ditentukan berdasarkan platform, fitur, dan integrasi",
    emphasis: "Prototipe interaksi, kompatibilitas, dan pengujian perangkat",
  },
  {
    title: "Proyek dengan risiko tinggi",
    category: "Sensitive Project",
    method: "Structured / Risk-Based",
    description:
      "Proyek yang memiliki kebutuhan keamanan, privasi, kepatuhan, atau konsekuensi operasional tinggi memerlukan pengendalian risiko yang lebih ketat. Iterasi tetap dapat digunakan, tetapi setiap tahap harus memiliki pemeriksaan, dokumentasi, dan persetujuan yang sesuai.",
    reasons: [
      "Risiko harus dikenali sebelum implementasi.",
      "Akses dan perlindungan data harus direncanakan.",
      "Perubahan perlu melewati proses persetujuan.",
      "Pengujian dan dokumentasi perlu disesuaikan dengan tingkat risiko.",
    ],
    icon: ShieldCheck,
    duration: "Ditentukan setelah analisis risiko dan kebutuhan kepatuhan",
    emphasis: "Kontrol, keamanan, dokumentasi, dan persetujuan",
  },
]

const hybridBenefits = [
  {
    title: "RAD mempercepat pemahaman",
    description:
      "Prototipe membuat ide yang masih abstrak menjadi gambaran yang dapat diperiksa. Pengguna dapat memberikan masukan berdasarkan alur dan tampilan yang terlihat.",
    icon: Lightbulb,
  },
  {
    title: "Agile menjaga arah pengembangan",
    description:
      "Backlog, prioritas, dan sprint membantu pekerjaan setelah validasi tetap terorganisasi. Tim dapat mengembangkan fitur secara bertahap dan mengevaluasi hasilnya.",
    icon: GitBranch,
  },
  {
    title: "Validasi dan implementasi saling terhubung",
    description:
      "Feedback dari prototipe tidak berhenti menjadi catatan desain. Hasilnya diterjemahkan menjadi kebutuhan, acceptance criteria, dan backlog implementasi.",
    icon: Workflow,
  },
]

const backlogPriorities = [
  {
    code: "P0",
    title: "Must Have",
    description:
      "Fitur inti yang wajib tersedia agar solusi dapat menjalankan fungsi utama sesuai tujuan proyek. Tanpa fitur ini, produk belum memenuhi kebutuhan minimum yang disepakati.",
    examples: [
      "Login dan autentikasi jika sistem membutuhkan akun.",
      "Pengelolaan data utama.",
      "Alur transaksi atau proses inti.",
      "Validasi data yang kritis.",
      "Hak akses minimum yang diperlukan.",
    ],
    color: "border-red-500/30 bg-red-500/5",
    labelColor: "text-red-500",
  },
  {
    code: "P1",
    title: "Should Have",
    description:
      "Fitur penting yang meningkatkan efektivitas, kenyamanan, atau kelengkapan sistem. Fitur ini memiliki nilai tinggi, tetapi dapat dijadwalkan setelah fungsi inti jika kapasitas atau waktu terbatas.",
    examples: [
      "Filter dan pencarian lanjutan.",
      "Ekspor laporan.",
      "Notifikasi.",
      "Dashboard analitik.",
      "Integrasi tambahan yang tidak menghalangi fungsi inti.",
    ],
    color: "border-amber-500/30 bg-amber-500/5",
    labelColor: "text-amber-600",
  },
  {
    code: "P2",
    title: "Could Have",
    description:
      "Fitur tambahan yang memberikan nilai lebih, tetapi bukan kebutuhan utama untuk rilis awal. Fitur ini dapat dipertimbangkan setelah produk digunakan dan kebutuhan pengguna lebih terukur.",
    examples: [
      "Personalisasi tampilan.",
      "Otomatisasi tambahan.",
      "Laporan visual lanjutan.",
      "Integrasi opsional.",
      "Fitur kenyamanan yang tidak kritis.",
    ],
    color: "border-blue-500/30 bg-blue-500/5",
    labelColor: "text-blue-500",
  },
  {
    code: "P3",
    title: "Future / Not Now",
    description:
      "Ide yang belum masuk prioritas pengerjaan saat ini. Fitur tetap dapat dicatat sebagai bahan evaluasi, tetapi tidak dianggap sebagai bagian dari komitmen rilis sebelum disetujui secara resmi.",
    examples: [
      "Ekspansi modul yang belum dibutuhkan.",
      "Integrasi dengan sistem yang belum tersedia.",
      "Fitur eksperimental.",
      "Pengembangan untuk kebutuhan pasar yang belum tervalidasi.",
      "Permintaan di luar ruang lingkup saat ini.",
    ],
    color: "border-border bg-muted/30",
    labelColor: "text-muted-foreground",
  },
]

const teamResponsibilities = [
  {
    role: "Product Owner / Perwakilan Klien",
    icon: Target,
    responsibility:
      "Menentukan tujuan produk, menjelaskan kebutuhan bisnis, menetapkan prioritas, dan memberikan keputusan terhadap hasil yang diserahkan.",
    tasks: [
      "Menjelaskan masalah dan target pengguna.",
      "Memberikan informasi proses bisnis.",
      "Memprioritaskan kebutuhan.",
      "Memeriksa prototipe dan hasil iterasi.",
      "Memberikan persetujuan sesuai tahapan.",
    ],
  },
  {
    role: "Project Manager / Scrum Master",
    icon: CalendarDays,
    responsibility:
      "Mengatur koordinasi pekerjaan, komunikasi, jadwal, risiko, dan hambatan agar pelaksanaan proyek tetap terarah.",
    tasks: [
      "Mengatur rencana kerja dan milestone.",
      "Memantau progres dan hambatan.",
      "Mengatur komunikasi dengan stakeholder.",
      "Mencatat keputusan dan perubahan.",
      "Menjaga transparansi status proyek.",
    ],
  },
  {
    role: "UI/UX Designer",
    icon: PencilRuler,
    responsibility:
      "Merancang pengalaman pengguna, struktur halaman, alur interaksi, dan tampilan antarmuka berdasarkan kebutuhan yang telah dipahami.",
    tasks: [
      "Menyusun user flow.",
      "Membuat wireframe dan mockup.",
      "Menyusun komponen visual.",
      "Memeriksa konsistensi antarmuka.",
      "Mengakomodasi feedback desain yang disepakati.",
    ],
  },
  {
    role: "Software Engineer",
    icon: Code2,
    responsibility:
      "Membangun fungsi aplikasi, mengelola integrasi, menjaga struktur kode, dan menerapkan solusi teknis sesuai arsitektur yang disepakati.",
    tasks: [
      "Mengembangkan frontend dan backend.",
      "Membangun API dan integrasi.",
      "Mengelola database.",
      "Menangani error dan validasi.",
      "Menjaga kualitas dan keterpeliharaan kode.",
    ],
  },
  {
    role: "Quality Assurance",
    icon: TestTube2,
    responsibility:
      "Memeriksa kesesuaian sistem terhadap kebutuhan, menguji alur, mencatat bug, dan membantu memastikan kesiapan rilis.",
    tasks: [
      "Menyusun skenario pengujian.",
      "Melakukan functional testing.",
      "Melakukan regression testing.",
      "Mencatat dan memverifikasi bug.",
      "Membantu UAT dan pemeriksaan akhir.",
    ],
  },
  {
    role: "DevOps / Operations",
    icon: Settings2,
    responsibility:
      "Menyiapkan lingkungan aplikasi, deployment, konfigurasi server, pemantauan, backup, dan aspek operasional sesuai kebutuhan proyek.",
    tasks: [
      "Menyiapkan environment.",
      "Mengatur deployment.",
      "Mengelola konfigurasi server.",
      "Memeriksa log dan kondisi layanan.",
      "Membantu backup dan pemulihan.",
    ],
  },
]

const qualityStandards = [
  {
    title: "Kesesuaian kebutuhan",
    description:
      "Fitur harus memenuhi kebutuhan dan acceptance criteria yang telah disepakati. Keberhasilan tidak hanya diukur dari tampilan atau banyaknya fitur, tetapi dari kemampuan solusi menyelesaikan masalah yang menjadi tujuan proyek.",
    icon: ClipboardCheck,
  },
  {
    title: "Fungsionalitas",
    description:
      "Alur utama harus dapat digunakan sesuai skenario yang telah ditentukan. Formulir, tombol, navigasi, proses penyimpanan, pengolahan data, dan integrasi perlu diperiksa secara relevan.",
    icon: CheckCircle2,
  },
  {
    title: "Keamanan",
    description:
      "Penerapan keamanan disesuaikan dengan karakteristik produk. Hal yang perlu diperhatikan dapat mencakup autentikasi, otorisasi, validasi input, pengelolaan secret, perlindungan data, pembatasan akses, dan konfigurasi lingkungan.",
    icon: LockKeyhole,
  },
  {
    title: "Kinerja dan stabilitas",
    description:
      "Aplikasi perlu diperiksa pada skenario penggunaan yang relevan. Waktu respons, penggunaan sumber daya, penanganan beban, dan perilaku ketika terjadi kegagalan perlu dipertimbangkan sesuai kebutuhan proyek.",
    icon: Gauge,
  },
  {
    title: "Pengalaman pengguna",
    description:
      "Antarmuka harus memiliki struktur yang dapat dipahami, navigasi yang konsisten, pesan error yang jelas, dan respons yang sesuai pada perangkat yang menjadi target.",
    icon: Users,
  },
  {
    title: "Dokumentasi dan pemeliharaan",
    description:
      "Informasi teknis dan penggunaan yang diperlukan harus disiapkan sesuai ruang lingkup. Dokumentasi membantu proses serah terima, perbaikan, dan pengembangan berikutnya.",
    icon: BookOpen,
  },
]

const testingTypes = [
  {
    title: "Unit Testing",
    description:
      "Menguji bagian kecil dari sistem, seperti fungsi, perhitungan, atau modul tertentu. Tujuannya memeriksa apakah bagian tersebut bekerja sesuai perilaku yang diharapkan.",
    icon: Code2,
  },
  {
    title: "Integration Testing",
    description:
      "Menguji hubungan antarkomponen, misalnya frontend dengan API, API dengan database, atau aplikasi dengan layanan pihak ketiga.",
    icon: Network,
  },
  {
    title: "Functional Testing",
    description:
      "Memeriksa apakah fitur bekerja sesuai kebutuhan pengguna. Pengujian dilakukan berdasarkan input, proses, dan hasil yang diharapkan.",
    icon: ClipboardCheck,
  },
  {
    title: "Regression Testing",
    description:
      "Memeriksa kembali fungsi yang telah berjalan setelah perubahan kode atau penambahan fitur agar perbaikan baru tidak merusak fungsi sebelumnya.",
    icon: GitBranch,
  },
  {
    title: "Security Testing",
    description:
      "Memeriksa aspek keamanan yang relevan, termasuk autentikasi, otorisasi, validasi input, pengelolaan sesi, konfigurasi, dan risiko akses yang tidak semestinya.",
    icon: ShieldCheck,
  },
  {
    title: "User Acceptance Testing",
    description:
      "Melibatkan perwakilan pengguna atau klien untuk memastikan hasil sesuai kebutuhan dan dapat diterima berdasarkan kriteria yang telah disepakati.",
    icon: Handshake,
  },
]

const deliveryMilestones = [
  {
    week: "Tahap 1",
    title: "Discovery dan perencanaan",
    period: "Ilustrasi hari 1–2",
    description:
      "Tim memahami tujuan, pengguna, kebutuhan, batasan, risiko, dan ruang lingkup. Hasil tahap ini menjadi dasar penyusunan prioritas dan rencana pengerjaan.",
    outputs: ["Ringkasan kebutuhan", "Scope awal", "Daftar prioritas"],
  },
  {
    week: "Tahap 2",
    title: "Prototyping dan validasi",
    period: "Ilustrasi hari 3–5",
    description:
      "Tim membuat gambaran solusi dan memvalidasi alur utama bersama klien. Feedback dicatat, diprioritaskan, dan diterjemahkan menjadi revisi atau backlog.",
    outputs: ["Wireframe/mockup", "Prototipe", "Catatan persetujuan"],
  },
  {
    week: "Sprint 1",
    title: "Fondasi sistem",
    period: "Ilustrasi minggu 2",
    description:
      "Pekerjaan difokuskan pada fondasi yang dibutuhkan, seperti struktur aplikasi, autentikasi, hak akses, dan modul data awal sesuai ruang lingkup.",
    outputs: ["Fondasi aplikasi", "Autentikasi", "Modul dasar"],
  },
  {
    week: "Sprint 2",
    title: "Fungsi inti",
    period: "Ilustrasi minggu 3",
    description:
      "Tim mengembangkan proses utama berdasarkan prioritas, misalnya pengelolaan produk, stok, transaksi, atau alur bisnis yang menjadi inti sistem.",
    outputs: ["Modul inti", "Integrasi awal", "Hasil pengujian"],
  },
  {
    week: "Sprint 3",
    title: "Laporan dan integrasi",
    period: "Ilustrasi minggu 4",
    description:
      "Fitur pendukung, laporan, integrasi, dan peningkatan pengalaman pengguna dikerjakan sesuai prioritas dan kapasitas yang tersedia.",
    outputs: ["Laporan", "Integrasi", "Penyempurnaan UI"],
  },
  {
    week: "Tahap akhir",
    title: "UAT, deployment, dan handover",
    period: "Ilustrasi minggu 5",
    description:
      "Sistem diuji bersama klien, bug prioritas ditangani, lingkungan penggunaan disiapkan, dan dokumentasi diserahkan sesuai kesepakatan.",
    outputs: ["Hasil UAT", "Deployment", "Dokumentasi"],
  },
]

const projectGovernance = [
  {
    title: "Scope proyek",
    description:
      "Scope menjelaskan apa yang termasuk dan tidak termasuk dalam pekerjaan. Scope membantu tim dan klien memiliki batas pemahaman yang sama terhadap hasil yang akan diserahkan.",
    points: [
      "Daftar fitur dan modul yang disepakati.",
      "Platform dan lingkungan target.",
      "Integrasi yang termasuk dalam pekerjaan.",
      "Batasan jumlah revisi jika disepakati.",
      "Pekerjaan yang secara eksplisit berada di luar scope.",
    ],
    icon: Target,
  },
  {
    title: "Acceptance criteria",
    description:
      "Acceptance criteria menjelaskan kondisi yang harus terpenuhi agar suatu fitur dapat dinyatakan selesai dan diterima. Kriteria dibuat spesifik agar penilaian tidak hanya bergantung pada persepsi.",
    points: [
      "Kondisi awal atau prasyarat.",
      "Input atau tindakan pengguna.",
      "Proses yang diharapkan.",
      "Hasil yang harus terlihat.",
      "Kondisi error atau batasan yang perlu ditangani.",
    ],
    icon: FileCheck2,
  },
  {
    title: "Change request",
    description:
      "Permintaan perubahan dapat muncul selama proyek berjalan. Perubahan perlu dianalisis terlebih dahulu agar dampaknya terhadap biaya, jadwal, desain, arsitektur, dan pekerjaan yang telah selesai dapat dipahami.",
    points: [
      "Mencatat permintaan perubahan.",
      "Menjelaskan alasan dan manfaat perubahan.",
      "Menganalisis dampak teknis dan operasional.",
      "Menyampaikan dampak terhadap waktu dan biaya.",
      "Meminta persetujuan sebelum mengubah komitmen proyek.",
    ],
    icon: GitBranch,
  },
  {
    title: "Komunikasi dan keputusan",
    description:
      "Keputusan penting perlu terdokumentasi agar tidak menimbulkan perbedaan pemahaman. Komunikasi rutin membantu masalah diketahui lebih awal dan mengurangi pekerjaan ulang.",
    points: [
      "Menetapkan pihak yang berwenang memberi persetujuan.",
      "Menentukan kanal komunikasi resmi.",
      "Mencatat keputusan penting.",
      "Menyampaikan progres dan hambatan.",
      "Mengonfirmasi perubahan yang berdampak pada scope.",
    ],
    icon: MessageCircle,
  },
]

const maintenanceItems = [
  {
    title: "Corrective Maintenance",
    subtitle: "Perbaikan kesalahan",
    description:
      "Penanganan bug atau kesalahan yang ditemukan setelah produk digunakan. Prioritas perbaikan ditentukan berdasarkan dampak, tingkat urgensi, dan kesepakatan layanan.",
    icon: Bug,
  },
  {
    title: "Adaptive Maintenance",
    subtitle: "Penyesuaian lingkungan",
    description:
      "Penyesuaian aplikasi terhadap perubahan lingkungan, seperti versi sistem operasi, browser, layanan eksternal, infrastruktur, atau kebutuhan integrasi.",
    icon: Settings2,
  },
  {
    title: "Perfective Maintenance",
    subtitle: "Peningkatan kualitas",
    description:
      "Penyempurnaan fitur, tampilan, pengalaman pengguna, atau performa berdasarkan masukan dan kebutuhan baru yang telah dievaluasi.",
    icon: Sparkles,
  },
  {
    title: "Preventive Maintenance",
    subtitle: "Pencegahan masalah",
    description:
      "Pekerjaan pencegahan untuk mengurangi risiko, seperti pembaruan dependensi, pemeriksaan konfigurasi, backup, pemantauan, dan perapian struktur teknis.",
    icon: ShieldCheck,
  },
]

const metrics = [
  {
    title: "Sprint Predictability",
    description:
      "Membandingkan pekerjaan yang direncanakan dengan pekerjaan yang benar-benar selesai dalam suatu iterasi. Metrik ini membantu mengevaluasi perencanaan dan kapasitas, bukan menjadi alat untuk menyalahkan anggota tim.",
    icon: Gauge,
  },
  {
    title: "Cycle Time",
    description:
      "Mengukur waktu yang dibutuhkan sebuah pekerjaan sejak mulai dikerjakan hingga selesai. Pengamatan ini dapat membantu menemukan hambatan dalam alur kerja.",
    icon: Timer,
  },
  {
    title: "Defect Escape Rate",
    description:
      "Mengamati jumlah atau proporsi masalah yang baru ditemukan setelah suatu tahap pengujian atau setelah rilis. Hasilnya dapat digunakan untuk meningkatkan proses QA.",
    icon: Bug,
  },
  {
    title: "Acceptance Rate",
    description:
      "Mengamati sejauh mana hasil pekerjaan memenuhi acceptance criteria dan diterima oleh stakeholder. Penilaian perlu memperhatikan konteks dan kualitas kriteria yang digunakan.",
    icon: FileCheck2,
  },
  {
    title: "Deployment Frequency",
    description:
      "Mengamati frekuensi rilis atau deployment sesuai karakteristik proyek. Tidak semua produk harus dirilis sesering mungkin; frekuensi harus sesuai kebutuhan, risiko, dan proses persetujuan.",
    icon: Rocket,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Mengumpulkan masukan klien dan pengguna tentang hasil, komunikasi, pengalaman kerja sama, dan manfaat solusi. Hasilnya dapat menjadi dasar perbaikan layanan.",
    icon: HeartHandshake,
  },
  {
    title: "Change Request",
    description:
      "Mengamati jumlah, jenis, dan dampak permintaan perubahan. Metrik ini membantu memahami dinamika kebutuhan dan kualitas proses discovery.",
    icon: GitBranch,
  },
  {
    title: "Business Performance",
    description:
      "Untuk proyek yang memiliki tujuan bisnis, evaluasi dapat melihat indikator seperti efisiensi proses, waktu pengerjaan, tingkat penggunaan, atau indikator lain yang relevan dan dapat diukur.",
    icon: BarChart3,
  },
]

const faqItems: FAQItem[] = [
  {
    question: "Apakah HINAI Tech selalu menggunakan Agile?",
    answer:
      "Tidak selalu. Metode dipilih berdasarkan karakteristik proyek. Proyek yang sederhana dan kebutuhan tampilannya dapat divalidasi dengan cepat mungkin lebih cocok menggunakan pendekatan RAD-focused. Aplikasi kompleks dapat lebih sesuai menggunakan Agile-focused. Sistem bisnis khusus sering membutuhkan kombinasi keduanya. Pemilihan metode dibahas pada tahap awal proyek.",
  },
  {
    question: "Apa perbedaan Agile dan RAD?",
    answer:
      "Agile berfokus pada pengembangan secara iteratif, pengelolaan backlog, prioritas, sprint, review, dan peningkatan berkelanjutan. RAD berfokus pada percepatan pemahaman dan pengembangan melalui perencanaan kebutuhan, prototyping, validasi pengguna, construction, dan cutover. Keduanya dapat dikombinasikan jika karakteristik proyek mendukung.",
  },
  {
    question: "Mengapa perlu membuat prototipe?",
    answer:
      "Prototipe membantu memperlihatkan gambaran solusi sebelum seluruh fitur dibangun. Klien dan tim dapat memeriksa alur, struktur, dan tampilan lebih awal. Dengan demikian, perbedaan pemahaman dapat ditemukan sebelum menimbulkan perubahan yang lebih besar pada tahap pengembangan.",
  },
  {
    question: "Apakah prototipe merupakan aplikasi final?",
    answer:
      "Tidak selalu. Prototipe dapat berupa wireframe, mockup, clickable prototype, atau demonstrasi terbatas. Tujuan utamanya adalah validasi kebutuhan dan pengalaman pengguna. Prototipe tidak boleh dianggap sebagai produk final kecuali sejak awal memang disepakati sebagai hasil akhir proyek.",
  },
  {
    question: "Apakah klien bisa meminta perubahan saat proyek berjalan?",
    answer:
      "Klien dapat mengajukan perubahan. Setiap perubahan perlu dicatat dan dianalisis terlebih dahulu. Jika perubahan memengaruhi scope, biaya, jadwal, desain, integrasi, atau risiko, HINAI Tech akan membahas dampaknya dan meminta persetujuan sebelum mengubah komitmen pengerjaan.",
  },
  {
    question: "Bagaimana cara menentukan fitur yang dikerjakan lebih dahulu?",
    answer:
      "Fitur diprioritaskan berdasarkan kebutuhan inti, nilai bisnis, urgensi, risiko, dependensi teknis, dan kapasitas tim. Kebutuhan wajib ditempatkan pada prioritas tertinggi. Fitur tambahan dapat masuk ke iterasi berikutnya setelah fungsi inti tervalidasi.",
  },
  {
    question: "Apakah HINAI Tech memberikan laporan progres?",
    answer:
      "Bentuk dan frekuensi laporan disesuaikan dengan skala serta kesepakatan proyek. Secara umum, progres dapat disampaikan melalui daftar pekerjaan, status fitur, hasil demonstrasi, catatan hambatan, dan rencana pekerjaan berikutnya.",
  },
  {
    question: "Apakah semua proyek memiliki durasi yang sama?",
    answer:
      "Tidak. Durasi dipengaruhi oleh jumlah fitur, kompleksitas proses, jumlah platform, integrasi, ketersediaan materi, kecepatan persetujuan, risiko, dan kapasitas tim. Timeline ilustratif pada halaman ini bukan jaminan waktu pengerjaan untuk setiap proyek. Estimasi yang lebih akurat diberikan setelah discovery.",
  },
  {
    question: "Apakah HINAI Tech melakukan testing?",
    answer:
      "Testing menjadi bagian dari proses pengembangan. Jenis dan kedalaman pengujian disesuaikan dengan karakteristik aplikasi, ruang lingkup, risiko, dan kesepakatan proyek. Pengujian dapat mencakup functional testing, integration testing, regression testing, security checks, dan user acceptance testing.",
  },
  {
    question: "Apakah setelah aplikasi diluncurkan masih ada proses lain?",
    answer:
      "Setelah rilis, produk dapat membutuhkan pemantauan, perbaikan bug, pembaruan, backup, penyesuaian lingkungan, dan pengembangan fitur. Bentuk layanan setelah peluncuran mengikuti paket, kontrak, atau kesepakatan pemeliharaan yang berlaku.",
  },
  {
    question: "Apakah HINAI Tech dapat menggunakan teknologi yang diminta klien?",
    answer:
      "Teknologi dapat dibahas berdasarkan kebutuhan, ketersediaan sumber daya, integrasi, keamanan, biaya operasional, dan rencana pemeliharaan. HINAI Tech dapat mempertimbangkan berbagai pendekatan seperti framework web, aplikasi mobile, desktop, database relasional maupun nonrelasional, cloud, serta platform no-code sesuai kecocokannya.",
  },
  {
    question: "Apakah metode ini dapat digunakan untuk proyek kecil?",
    answer:
      "Bisa. Tidak semua proyek membutuhkan proses yang berat. Untuk proyek kecil, dokumentasi dan tahapan dapat dibuat lebih ringkas, tetapi prinsip dasarnya tetap dipertahankan: memahami kebutuhan, menyepakati scope, memvalidasi rancangan, membangun, menguji, dan menyerahkan hasil.",
  },
]

const serviceExamples = [
  {
    title: "Website dan Landing Page",
    description:
      "Pengembangan website profil perusahaan, website organisasi, halaman promosi, landing page produk, katalog digital, dan website dengan kebutuhan khusus.",
    icon: Globe2,
    examples: ["Company profile", "Landing page", "Website sekolah", "Website katalog"],
  },
  {
    title: "Aplikasi Android dan iOS",
    description:
      "Pengembangan aplikasi mobile untuk layanan pelanggan, operasional, pendidikan, transaksi, manajemen, dan kebutuhan khusus.",
    icon: Smartphone,
    examples: ["Aplikasi operasional", "Aplikasi pendidikan", "Aplikasi layanan", "Aplikasi internal"],
  },
  {
    title: "Aplikasi Desktop",
    description:
      "Aplikasi desktop untuk kebutuhan administrasi, kasir, inventori, operasional, pengolahan data, dan sistem internal.",
    icon: Monitor,
    examples: ["POS", "Inventori", "Administrasi", "Aplikasi internal"],
  },
  {
    title: "Sistem Informasi dan SaaS",
    description:
      "Sistem berbasis kebutuhan organisasi atau bisnis dengan pengelolaan pengguna, data, proses, laporan, dan modul yang saling terintegrasi.",
    icon: Database,
    examples: ["CRM", "ERP sesuai kebutuhan", "Sistem sekolah", "SaaS multi-tenant"],
  },
  {
    title: "UI/UX dan Product Design",
    description:
      "Perancangan pengalaman pengguna, arsitektur informasi, wireframe, mockup, design system, dan prototipe untuk membantu validasi produk.",
    icon: PencilRuler,
    examples: ["User flow", "Wireframe", "UI design", "Prototype"],
  },
  {
    title: "AI, Data, dan Otomasi",
    description:
      "Pengembangan solusi berbasis AI, pemrosesan data, otomasi proses, integrasi layanan, dan analitik sesuai kebutuhan serta kelayakan proyek.",
    icon: Sparkles,
    examples: ["AI assistant", "Data processing", "Automation", "Dashboard analitik"],
  },
  {
    title: "Game dan AR",
    description:
      "Pengembangan pengalaman interaktif, game, simulasi, dan aplikasi augmented reality untuk pendidikan, promosi, maupun kebutuhan khusus.",
    icon: Zap,
    examples: ["Game edukasi", "Simulasi", "AR edukasi", "Interactive experience"],
  },
  {
    title: "SEO dan Konten Digital",
    description:
      "Pembuatan artikel SEO, pengembangan konten, optimasi struktur informasi, dan kebutuhan pendukung visibilitas digital.",
    icon: FileText,
    examples: ["Artikel SEO", "Content planning", "SEO on-page", "Konten website"],
  },
]

/* =========================================================
   REUSABLE PRESENTATION COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div
      className={`mb-10 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  )
}

function IconBox({
  icon: Icon,
  className = "",
}: {
  icon: IconComponent
  className?: string
}) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-amber-600 shadow-sm ${className}`}
    >
      <Icon size={22} strokeWidth={1.8} />
    </div>
  )
}

function CheckLine({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
      <CheckCircle2
        size={17}
        className="mt-1 shrink-0 text-amber-600"
        strokeWidth={2}
      />
      <span>{children}</span>
    </li>
  )
}

function NumberLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-bold tracking-[0.15em] text-muted-foreground">
      {children}
    </span>
  )
}

function InfoCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: IconComponent
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <article className="h-full rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      <IconBox icon={Icon} />
      <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
      {children}
    </article>
  )
}

function BulletPanel({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <h4 className="text-sm font-bold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <CheckLine key={item}>{item}</CheckLine>
        ))}
      </ul>
    </div>
  )
}

function ProcessCard({
  item,
  index,
}: {
  item: ProcessItem
  index: number
}) {
  const Icon = item.icon

  return (
    <article className="relative grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <div className="flex items-center gap-3">
          <NumberLabel>{item.number}</NumberLabel>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {item.subtitle}
          </span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <IconBox icon={Icon} />
          <div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <BulletPanel title="Aktivitas utama" items={item.activities} />
        <BulletPanel title="Keluaran tahap" items={item.deliverables} />
      </div>

      {index !== 0 && (
        <span className="pointer-events-none absolute -left-3 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground lg:flex">
          {index + 1}
        </span>
      )}
    </article>
  )
}

function FAQAccordion({
  item,
  open,
  onToggle,
}: {
  item: FAQItem
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <span className="font-semibold leading-7 text-foreground">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
          <p className="text-sm leading-8 text-muted-foreground">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function MethodologyContent() {
  const [activeMethod, setActiveMethod] = useState<"hybrid" | "agile" | "rad">(
    "hybrid"
  )
  const [activeProject, setActiveProject] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0)
  const [showAllFAQ, setShowAllFAQ] = useState(false)

  const selectedProject = projectTypes[activeProject]

  const visibleFAQs = useMemo(
    () => (showAllFAQ ? faqItems : faqItems.slice(0, 6)),
    [showAllFAQ]
  )

  const methodDescription = {
    hybrid:
      "Pendekatan gabungan yang menggunakan RAD untuk mempercepat discovery, perancangan, dan validasi prototipe, kemudian menggunakan praktik Agile untuk mengembangkan, menguji, dan menyempurnakan produk secara bertahap.",
    agile:
      "Pendekatan iteratif yang mengelola kebutuhan melalui backlog, prioritas, sprint, review, testing, dan improvement. Cocok untuk produk yang memiliki banyak modul atau kebutuhan yang berkembang.",
    rad:
      "Pendekatan pengembangan cepat yang menekankan pemahaman kebutuhan, desain bersama pengguna, prototyping, feedback, construction, dan cutover. Cocok untuk proyek yang dapat memperoleh manfaat besar dari validasi visual dan alur sejak awal.",
  }[activeMethod]

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              <Sparkles size={14} className="text-amber-600" />
              HINAI Tech Development Methodology
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Membangun solusi digital dengan{" "}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                proses yang terarah.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Setiap produk digital membutuhkan proses yang tepat. HINAI Tech
              menggabungkan pemahaman kebutuhan, perancangan, validasi,
              pengembangan bertahap, pengujian, dan evaluasi agar solusi yang
              dibangun memiliki arah yang jelas serta relevan dengan kebutuhan
              pengguna dan bisnis.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Kami tidak memaksakan satu metode untuk semua proyek. Pendekatan
              dipilih berdasarkan kompleksitas, tujuan, risiko, kebutuhan
              pengguna, ketersediaan stakeholder, dan karakteristik teknologi
              yang akan dikembangkan.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#metode"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition hover:opacity-85"
              >
                Pelajari Metodologi
                <ArrowDown size={17} />
              </a>

              <a
                href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20metodologi%20pengembangan%20proyek."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-amber-500/50 hover:bg-muted"
              >
                Diskusikan Proyek
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-5 border-t border-border pt-7 sm:grid-cols-4">
              {[
                ["01", "Understand"],
                ["02", "Design"],
                ["03", "Build"],
                ["04", "Improve"],
              ].map(([number, label]) => (
                <div key={number}>
                  <p className="text-2xl font-bold text-amber-600">{number}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-amber-500/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Development Framework
                  </p>
                  <h2 className="mt-2 text-xl font-bold">HINAI Workflow</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                  <Workflow size={23} />
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  {
                    title: "Discovery",
                    text: "Memahami masalah dan kebutuhan",
                    icon: Search,
                  },
                  {
                    title: "Design & Prototype",
                    text: "Menyusun rancangan dan validasi",
                    icon: PencilRuler,
                  },
                  {
                    title: "Development",
                    text: "Membangun solusi secara bertahap",
                    icon: Code2,
                  },
                  {
                    title: "Quality Assurance",
                    text: "Memeriksa kualitas dan kesesuaian",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Deployment",
                    text: "Menyiapkan produk untuk digunakan",
                    icon: Rocket,
                  },
                  {
                    title: "Improvement",
                    text: "Mengevaluasi dan menyempurnakan",
                    icon: TrendingUp,
                  },
                ].map((step, index) => {
                  const Icon = step.icon

                  return (
                    <div
                      key={step.title}
                      className="relative flex items-center gap-4 rounded-2xl border border-border bg-background p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-foreground">{step.title}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {step.text}
                        </p>
                      </div>

                      <span className="text-xs font-bold text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="flex items-start gap-3">
                  <Lightbulb size={19} className="mt-0.5 shrink-0 text-amber-600" />
                  <p className="text-sm leading-7 text-muted-foreground">
                    Proses dapat berulang. Hasil evaluasi dapat mengubah
                    prioritas, memperbaiki desain, atau menghasilkan iterasi
                    berikutnya sesuai kebutuhan proyek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <SectionShell id="pendekatan">
        <SectionHeading
          eyebrow="Our Approach"
          title="Metodologi bukan sekadar tahapan teknis."
          description="Metodologi adalah cara HINAI Tech mengelola hubungan antara kebutuhan, manusia, proses bisnis, teknologi, kualitas, dan hasil akhir. Tujuannya bukan membuat proses menjadi rumit, tetapi memastikan keputusan penting dibuat berdasarkan pemahaman yang jelas."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methodologyPrinciples.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <IconBox icon={Icon} />
                  <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground/60">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-8 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </SectionShell>

      {/* =====================================================
          WHY METHODOLOGY
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Why It Matters"
              title="Mengurangi ketidakjelasan sejak awal."
              description="Banyak masalah proyek digital bukan semata-mata disebabkan oleh teknologi. Masalah juga dapat muncul karena kebutuhan belum jelas, ekspektasi berbeda, perubahan tidak tercatat, atau hasil tidak diuji dengan kriteria yang disepakati."
              align="left"
            />

            <a
              href="#tahapan"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 transition hover:gap-3"
            >
              Lihat tahapan pengerjaan
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Kebutuhan lebih jelas",
                description:
                  "Tim dan klien memiliki pemahaman yang sama tentang masalah, pengguna, tujuan, dan batasan.",
                icon: Target,
              },
              {
                title: "Risiko lebih terlihat",
                description:
                  "Risiko teknis, operasional, integrasi, dan perubahan dapat dibahas sebelum dampaknya membesar.",
                icon: ShieldCheck,
              },
              {
                title: "Pekerjaan lebih terukur",
                description:
                  "Pekerjaan dipecah menjadi bagian yang memiliki prioritas, estimasi, dan hasil yang dapat diperiksa.",
                icon: BarChart3,
              },
              {
                title: "Hasil lebih mudah dievaluasi",
                description:
                  "Progres diperiksa berdasarkan keluaran, acceptance criteria, pengujian, dan feedback.",
                icon: ClipboardCheck,
              },
            ].map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          METHODOLOGY SELECTION
      ====================================================== */}
      <SectionShell id="metode">
        <SectionHeading
          eyebrow="Method Selection"
          title="Agile, RAD, atau kombinasi keduanya?"
          description="Setiap pendekatan memiliki karakteristik dan fokus yang berbeda. HINAI Tech mempertimbangkan kebutuhan proyek sebelum menentukan pendekatan yang paling sesuai."
        />

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => setActiveMethod("agile")}
              className={`rounded-3xl border p-6 text-left transition ${
                activeMethod === "agile"
                  ? "border-amber-500 bg-amber-500/5 shadow-lg"
                  : "border-border bg-card hover:border-amber-500/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <IconBox icon={GitBranch} />
                {activeMethod === "agile" && (
                  <CheckCircle2 size={20} className="text-amber-600" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold">Agile</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Iterasi, backlog, sprint, review, dan improvement.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveMethod("rad")}
              className={`rounded-3xl border p-6 text-left transition ${
                activeMethod === "rad"
                  ? "border-amber-500 bg-amber-500/5 shadow-lg"
                  : "border-border bg-card hover:border-amber-500/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <IconBox icon={Zap} />
                {activeMethod === "rad" && (
                  <CheckCircle2 size={20} className="text-amber-600" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold">RAD</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Requirements, prototyping, feedback, dan cutover.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveMethod("hybrid")}
              className={`rounded-3xl border p-6 text-left transition ${
                activeMethod === "hybrid"
                  ? "border-amber-500 bg-amber-500/5 shadow-lg"
                  : "border-border bg-card hover:border-amber-500/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <IconBox icon={Workflow} />
                {activeMethod === "hybrid" && (
                  <CheckCircle2 size={20} className="text-amber-600" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold">Hybrid Agile–RAD</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Validasi cepat melalui RAD dan iterasi terstruktur melalui Agile.
              </p>
            </button>
          </div>

          <div className="mt-5 rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                {activeMethod === "agile" && <GitBranch size={27} />}
                {activeMethod === "rad" && <Zap size={27} />}
                {activeMethod === "hybrid" && <Workflow size={27} />}
              </div>

              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  Selected Approach
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">
                  {activeMethod === "agile" && "Agile-Focused"}
                  {activeMethod === "rad" && "RAD-Focused"}
                  {activeMethod === "hybrid" && "Hybrid Agile–RAD"}
                </h3>
                <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
                  {methodDescription}
                </p>
              </div>
            </div>

            {activeMethod === "hybrid" && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {hybridBenefits.map((benefit) => (
                  <InfoCard
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>
            )}

            {activeMethod === "agile" && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <InfoCard
                  icon={ClipboardList}
                  title="Prioritized Backlog"
                  description="Kebutuhan diurutkan berdasarkan nilai, urgensi, risiko, dan dependensi."
                />
                <InfoCard
                  icon={CalendarDays}
                  title="Sprint Planning"
                  description="Pekerjaan dipilih berdasarkan kapasitas dan target iterasi."
                />
                <InfoCard
                  icon={TrendingUp}
                  title="Continuous Review"
                  description="Hasil dievaluasi untuk menentukan peningkatan berikutnya."
                />
              </div>
            )}

            {activeMethod === "rad" && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <InfoCard
                  icon={FileSearch}
                  title="Requirements Planning"
                  description="Tujuan, kebutuhan, batasan, dan ruang lingkup dirumuskan bersama."
                />
                <InfoCard
                  icon={PencilRuler}
                  title="User Design"
                  description="Prototipe dibuat agar pengguna dapat memeriksa gambaran solusi."
                />
                <InfoCard
                  icon={Rocket}
                  title="Construction & Cutover"
                  description="Solusi dibangun, diuji, dan dipersiapkan untuk digunakan."
                />
              </div>
            )}
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          AGILE VS RAD COMPARISON
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Method Comparison"
          title="Memahami perbedaan Agile dan RAD."
          description="Keduanya dapat mendukung pengembangan perangkat lunak, tetapi memiliki penekanan yang berbeda. Memahami perbedaannya membantu menentukan cara kerja yang sesuai."
        />

        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border p-7 md:border-b-0 md:border-r sm:p-9">
              <div className="flex items-center gap-4">
                <IconBox icon={GitBranch} />
                <div>
                  <h3 className="text-2xl font-bold">Agile</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Iterative Development
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-muted-foreground">
                Agile merupakan pendekatan pengembangan yang menekankan
                kolaborasi, kemampuan beradaptasi, pengiriman hasil secara
                bertahap, dan evaluasi berulang. Pekerjaan diatur melalui
                backlog yang diprioritaskan. Tim mengerjakan bagian tertentu
                dalam iterasi, kemudian memeriksa hasil dan menyesuaikan rencana
                berdasarkan feedback serta kondisi terbaru.
              </p>

              <h4 className="mt-7 font-bold text-foreground">Fokus utama</h4>
              <ul className="mt-4 space-y-3">
                {[
                  "Kolaborasi dan komunikasi stakeholder.",
                  "Backlog dan prioritas pekerjaan.",
                  "Sprint atau iterasi.",
                  "Review dan retrospektif.",
                  "Pengiriman increment secara bertahap.",
                  "Adaptasi terhadap perubahan yang disepakati.",
                ].map((item) => (
                  <CheckLine key={item}>{item}</CheckLine>
                ))}
              </ul>
            </div>

            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <IconBox icon={Zap} />
                <div>
                  <h3 className="text-2xl font-bold">RAD</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Rapid Application Development
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-muted-foreground">
                RAD menekankan percepatan pengembangan melalui pemahaman
                kebutuhan, keterlibatan pengguna, prototyping, feedback, dan
                construction. Pengguna dilibatkan agar gambaran solusi dapat
                diperiksa lebih awal. Dengan validasi yang tepat, tim dapat
                mengurangi risiko membangun fitur berdasarkan asumsi yang
                belum disepakati.
              </p>

              <h4 className="mt-7 font-bold text-foreground">Fokus utama</h4>
              <ul className="mt-4 space-y-3">
                {[
                  "Requirements planning.",
                  "User design dan prototyping.",
                  "Keterlibatan pengguna.",
                  "Feedback dan revisi rancangan.",
                  "Construction.",
                  "Cutover dan transisi penggunaan.",
                ].map((item) => (
                  <CheckLine key={item}>{item}</CheckLine>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border bg-background p-7 sm:p-9">
            <h3 className="text-lg font-bold text-foreground">
              Bagaimana HINAI Tech menggabungkannya?
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-8 text-muted-foreground">
              Dalam pendekatan hybrid, HINAI Tech dapat menggunakan RAD pada
              fase awal untuk memahami kebutuhan, menyusun rancangan, dan
              memvalidasi prototipe. Setelah gambaran solusi lebih jelas,
              pengembangan dapat dikelola dengan praktik Agile melalui backlog,
              prioritas, sprint, testing, review, dan improvement. Kombinasi
              tersebut bukan aturan kaku. Kedalaman setiap proses disesuaikan
              dengan risiko, ukuran proyek, serta kebutuhan klien.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          PROJECT METHOD SELECTION
      ====================================================== */}
      <SectionShell id="pemilihan-metode">
        <SectionHeading
          eyebrow="Project Fit"
          title="Metode disesuaikan dengan jenis proyek."
          description="Pilih kategori proyek untuk melihat pendekatan yang dapat dipertimbangkan. Rekomendasi ini merupakan panduan awal dan tetap perlu dikonfirmasi melalui analisis kebutuhan."
        />

        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-3">
            {projectTypes.map((project, index) => {
              const Icon = project.icon

              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    activeProject === index
                      ? "border-amber-500 bg-amber-500/5"
                      : "border-border bg-card hover:border-amber-500/40"
                  }`}
                >
                  <IconBox icon={Icon} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-foreground">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </span>
                  <ChevronRight
                    size={18}
                    className={
                      activeProject === index
                        ? "text-amber-600"
                        : "text-muted-foreground"
                    }
                  />
                </button>
              )
            })}
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <NumberLabel>{selectedProject.category}</NumberLabel>
              <span className="rounded-full bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                {selectedProject.method}
              </span>
            </div>

            <div className="mt-7 flex items-start gap-4">
              <IconBox icon={selectedProject.icon} />
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-foreground">
                Mengapa pendekatan ini dapat sesuai?
              </h4>
              <ul className="mt-4 space-y-3">
                {selectedProject.reasons.map((reason) => (
                  <CheckLine key={reason}>{reason}</CheckLine>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Pertimbangan durasi
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground">
                  {selectedProject.duration}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Fokus pengerjaan
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground">
                  {selectedProject.emphasis}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          HYBRID FLOW
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Hybrid Workflow"
          title="Menghubungkan validasi RAD dengan iterasi Agile."
          description="Hybrid bukan sekadar menempelkan dua nama metode. Kedua pendekatan perlu memiliki hubungan kerja yang jelas agar hasil validasi benar-benar menjadi dasar pekerjaan berikutnya."
        />

        <div className="relative grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <IconBox icon={Zap} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Phase A
                </p>
                <h3 className="text-2xl font-bold">RAD Activities</h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-8 text-muted-foreground">
              Fase awal berfokus pada pemahaman kebutuhan dan validasi
              rancangan. Tujuannya mengurangi ketidakjelasan sebelum tim
              menginvestasikan waktu lebih banyak pada implementasi.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Requirements planning",
                "User design",
                "Wireframe dan mockup",
                "Prototype review",
                "Feedback dan validasi",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-xs font-bold text-amber-600">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <IconBox icon={GitBranch} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Phase B
                </p>
                <h3 className="text-2xl font-bold">Agile Activities</h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-8 text-muted-foreground">
              Setelah kebutuhan dan rancangan cukup jelas, pekerjaan
              implementasi dikelola melalui backlog dan iterasi. Tim tetap
              melakukan review dan penyesuaian berdasarkan hasil pengujian serta
              masukan yang relevan.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Prioritized product backlog",
                "Sprint planning",
                "Incremental development",
                "Testing dan review",
                "Retrospective dan improvement",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-xs font-bold text-amber-600">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-4 text-amber-600 shadow-lg lg:flex">
            <ArrowRight size={22} />
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <IconBox icon={Lightbulb} />
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Prinsip penghubung kedua pendekatan
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Setiap feedback dari prototipe perlu ditinjau, diputuskan, dan
                diterjemahkan menjadi perubahan desain, kebutuhan, atau backlog.
                Tim tidak langsung menganggap semua feedback sebagai pekerjaan
                yang otomatis harus dikerjakan. Masukan dianalisis berdasarkan
                manfaat, kesesuaian scope, risiko, biaya, dan prioritas.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          AGILE LIFECYCLE
      ====================================================== */}
      <SectionShell id="tahapan">
        <SectionHeading
          eyebrow="Agile Lifecycle"
          title="Siklus pengembangan Agile."
          description="Agile bukan proses satu arah yang hanya berjalan dari awal sampai akhir. Setelah satu iterasi selesai, hasilnya ditinjau dan digunakan untuk menentukan pekerjaan berikutnya."
        />

        <div className="space-y-5">
          {agileStages.map((item, index) => (
            <ProcessCard key={item.number} item={item} index={index} />
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          RAD LIFECYCLE
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="RAD Lifecycle"
          title="Empat fase utama RAD."
          description="RAD menekankan keterlibatan pengguna dan prototyping untuk mempercepat validasi. Setiap fase tetap membutuhkan keputusan yang jelas agar kecepatan tidak mengorbankan kesesuaian kebutuhan dan kualitas."
        />

        <div className="space-y-5">
          {radStages.map((item, index) => (
            <ProcessCard key={item.number} item={item} index={index} />
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          REQUIREMENTS
      ====================================================== */}
      <SectionShell id="requirements">
        <SectionHeading
          eyebrow="Requirements Engineering"
          title="Memahami kebutuhan sebelum membangun solusi."
          description="Kebutuhan proyek perlu disusun dengan bahasa yang dapat dipahami klien sekaligus cukup jelas untuk diterjemahkan menjadi pekerjaan teknis. Pengumpulan kebutuhan membantu mengurangi asumsi dan pekerjaan ulang."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={FileText}
            title="Functional Requirements"
            description="Menjelaskan fungsi atau perilaku yang harus disediakan oleh sistem. Kebutuhan fungsional menjawab pertanyaan: apa yang harus dapat dilakukan oleh pengguna atau sistem?"
          >
            <ul className="mt-5 space-y-2">
              {[
                "Pengguna dapat masuk ke aplikasi.",
                "Admin dapat mengelola data tertentu.",
                "Sistem dapat menyimpan transaksi.",
                "Pengguna dapat melihat laporan.",
                "Sistem dapat mengirim notifikasi jika termasuk scope.",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>
          </InfoCard>

          <InfoCard
            icon={ShieldCheck}
            title="Non-Functional Requirements"
            description="Menjelaskan karakteristik kualitas dan batasan sistem. Kebutuhan ini membantu menentukan bagaimana fungsi harus berjalan dan kondisi operasional yang perlu dipenuhi."
          >
            <ul className="mt-5 space-y-2">
              {[
                "Keamanan dan pengaturan akses.",
                "Kinerja pada skenario penggunaan.",
                "Kompatibilitas perangkat target.",
                "Ketersediaan dan pemulihan layanan.",
                "Kemudahan penggunaan dan pemeliharaan.",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>
          </InfoCard>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <h3 className="text-xl font-bold text-foreground">
            Informasi yang perlu digali saat discovery
          </h3>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Context",
                description:
                  "Latar belakang bisnis, tujuan, proses saat ini, masalah, dan hasil yang ingin dicapai.",
              },
              {
                title: "User Context",
                description:
                  "Siapa yang menggunakan sistem, peran mereka, kebutuhan, dan kemampuan menggunakan teknologi.",
              },
              {
                title: "Operational Context",
                description:
                  "Bagaimana sistem akan digunakan sehari-hari, perangkat, lokasi, dan alur operasional.",
              },
              {
                title: "Technical Context",
                description:
                  "Sistem yang telah digunakan, integrasi, database, infrastruktur, dan batasan teknis.",
              },
              {
                title: "Data Context",
                description:
                  "Jenis data, sumber data, pemilik data, kebutuhan migrasi, dan aturan akses.",
              },
              {
                title: "Project Context",
                description:
                  "Anggaran, target waktu, stakeholder, batasan, risiko, dan cara persetujuan.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-background p-5">
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          PROTOTYPING
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Prototyping"
          title="Memvalidasi gambaran solusi lebih awal."
          description="Prototyping membantu tim dan klien melihat bagaimana solusi dapat bekerja sebelum seluruh sistem dibangun. Tingkat detail prototipe ditentukan berdasarkan pertanyaan yang ingin dijawab."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard
            icon={FileText}
            title="Wireframe"
            description="Gambaran struktur halaman, posisi elemen, navigasi, dan hierarki informasi. Wireframe membantu membahas struktur tanpa terlalu dini berfokus pada detail visual."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cocok untuk
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground">
              Validasi struktur dan alur halaman.
            </p>
          </InfoCard>

          <InfoCard
            icon={PencilRuler}
            title="Mockup"
            description="Gambaran visual yang lebih detail, seperti warna, tipografi, komponen, dan susunan antarmuka. Mockup membantu menyamakan ekspektasi visual."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cocok untuk
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground">
              Validasi tampilan dan identitas visual.
            </p>
          </InfoCard>

          <InfoCard
            icon={Workflow}
            title="Clickable Prototype"
            description="Rancangan interaktif yang memungkinkan pengguna mencoba navigasi dan alur tertentu. Interaksi prototipe belum tentu terhubung dengan backend atau database produksi."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cocok untuk
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground">
              Validasi pengalaman dan alur penggunaan.
            </p>
          </InfoCard>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <h3 className="text-xl font-bold text-foreground">
            Siklus validasi prototipe
          </h3>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Rancang", "Membuat gambaran solusi berdasarkan kebutuhan."],
              ["02", "Demonstrasikan", "Menunjukkan prototipe kepada stakeholder."],
              ["03", "Kumpulkan feedback", "Mencatat masukan dan pertanyaan pengguna."],
              ["04", "Evaluasi", "Menilai manfaat, risiko, dan dampak revisi."],
              ["05", "Validasi", "Menyepakati rancangan sebagai dasar pekerjaan."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl bg-background p-5">
                <span className="text-sm font-bold text-amber-600">
                  {number}
                </span>
                <h4 className="mt-3 font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 border-t border-border pt-6 text-sm leading-8 text-muted-foreground">
            Persetujuan prototipe bukan berarti seluruh kebutuhan proyek
            otomatis terkunci selamanya. Perubahan masih dapat diajukan, tetapi
            perubahan yang berdampak pada scope atau komitmen perlu melalui
            proses evaluasi dan persetujuan.
          </p>
        </div>
      </SectionShell>

      {/* =====================================================
          PRODUCT BACKLOG
      ====================================================== */}
      <SectionShell id="backlog">
        <SectionHeading
          eyebrow="Product Backlog"
          title="Menyusun pekerjaan berdasarkan prioritas."
          description="Backlog adalah daftar kebutuhan, fitur, perbaikan, dan pekerjaan yang dapat menjadi dasar perencanaan. Backlog perlu ditinjau secara berkala agar tim mengerjakan hal yang paling relevan."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {backlogPriorities.map((priority) => (
            <article
              key={priority.code}
              className={`rounded-3xl border p-7 ${priority.color}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`text-3xl font-black ${priority.labelColor}`}>
                  {priority.code}
                </span>
                <span className="rounded-full border border-current/20 px-3 py-1 text-xs font-bold">
                  {priority.title}
                </span>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {priority.description}
              </p>

              <h4 className="mt-6 text-sm font-bold text-foreground">
                Contoh kebutuhan
              </h4>

              <ul className="mt-3 space-y-2">
                {priority.examples.map((example) => (
                  <CheckLine key={example}>{example}</CheckLine>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Bagaimana backlog dikelola?
              </h3>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                Backlog bukan daftar statis yang hanya dibuat pada awal proyek.
                Kebutuhan dapat diperjelas, dipecah, diprioritaskan ulang, atau
                ditunda ketika informasi baru ditemukan. Perubahan prioritas
                harus tetap mempertimbangkan dependensi, risiko, dan komitmen
                proyek.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Setiap item memiliki deskripsi yang dapat dipahami.",
                "Item penting memiliki acceptance criteria.",
                "Prioritas dapat dijelaskan alasannya.",
                "Dependensi teknis dicatat.",
                "Pekerjaan yang belum siap tidak dipaksakan masuk sprint.",
                "Perubahan backlog dikomunikasikan kepada stakeholder.",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          SPRINT
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Sprint Management"
          title="Sprint membuat pekerjaan lebih terukur."
          description="Sprint merupakan periode kerja dengan tujuan tertentu. Durasi sprint ditentukan berdasarkan kebutuhan, skala pekerjaan, dan pola koordinasi tim. Tidak semua proyek harus menggunakan durasi sprint yang sama."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Sprint Planning",
              description:
                "Menentukan tujuan sprint, memilih item backlog, memeriksa kapasitas, dan menyepakati pekerjaan yang akan dikerjakan.",
              icon: CalendarDays,
            },
            {
              title: "Daily Coordination",
              description:
                "Koordinasi singkat untuk memahami progres, rencana kerja, dan hambatan. Bentuk koordinasi dapat disesuaikan dengan ukuran tim.",
              icon: Users,
            },
            {
              title: "Sprint Review",
              description:
                "Memeriksa hasil pekerjaan bersama stakeholder dan mengumpulkan feedback berdasarkan increment yang telah dibuat.",
              icon: ClipboardCheck,
            },
            {
              title: "Retrospective",
              description:
                "Mengevaluasi cara kerja tim, mengidentifikasi hambatan, dan menentukan perbaikan proses untuk iterasi berikutnya.",
              icon: TrendingUp,
            },
          ].map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <h3 className="text-xl font-bold text-foreground">
            Contoh struktur satu sprint
          </h3>

          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            {[
              ["Planning", "Menentukan tujuan dan pekerjaan."],
              ["Execution", "Mengembangkan dan menguji fitur."],
              ["Review", "Memeriksa hasil bersama stakeholder."],
              ["Retrospective", "Mengevaluasi proses kerja tim."],
            ].map(([title, description], index) => (
              <div key={title} className="relative rounded-2xl bg-background p-5">
                <span className="text-xs font-bold text-amber-600">
                  STEP 0{index + 1}
                </span>
                <h4 className="mt-3 font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          TEAM RESPONSIBILITIES
      ====================================================== */}
      <SectionShell id="tim">
        <SectionHeading
          eyebrow="Team Responsibilities"
          title="Kolaborasi tim dengan tanggung jawab yang jelas."
          description="Setiap proyek membutuhkan fungsi kerja yang berbeda. Pada tim kecil, satu orang dapat menjalankan lebih dari satu fungsi. Pembagian peran disesuaikan dengan skala proyek, tetapi tanggung jawab penting tetap perlu ditetapkan."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {teamResponsibilities.map((person) => (
            <article
              key={person.role}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-4">
                <IconBox icon={person.icon} />
                <h3 className="text-lg font-bold text-foreground">
                  {person.role}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {person.responsibility}
              </p>

              <h4 className="mt-6 text-sm font-bold text-foreground">
                Tanggung jawab
              </h4>

              <ul className="mt-3 space-y-2">
                {person.tasks.map((task) => (
                  <CheckLine key={task}>{task}</CheckLine>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <IconBox icon={Users} />
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Struktur tim yang fleksibel
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Tidak semua proyek membutuhkan enam orang atau enam posisi
                terpisah. Dalam proyek berskala kecil, fungsi project
                management dapat dirangkap oleh project lead, sementara
                pengembangan dan QA dapat dilakukan oleh anggota yang sama
                dengan tetap menyediakan tahapan pemeriksaan yang memadai.
                Untuk pekerjaan yang lebih kompleks, fungsi spesialis dapat
                dipisahkan agar kebutuhan desain, engineering, testing, dan
                operasi mendapatkan perhatian yang sesuai.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          DEFINITION OF DONE
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Definition of Done"
          title="Kapan pekerjaan dapat dinyatakan selesai?"
          description="Sebuah fitur tidak cukup dinyatakan selesai hanya karena kode telah dibuat. Pekerjaan perlu memenuhi kriteria yang relevan agar hasil dapat diperiksa dan diterima."
        />

        <div className="rounded-3xl border border-border bg-card p-7 sm:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Acceptance criteria terpenuhi",
                description:
                  "Perilaku fitur telah sesuai dengan kondisi penerimaan yang disepakati.",
              },
              {
                title: "Validasi dan error handling",
                description:
                  "Input penting diperiksa dan kesalahan ditangani secara wajar.",
              },
              {
                title: "Pengujian relevan dilakukan",
                description:
                  "Pengujian sesuai karakteristik fitur dan tingkat risikonya.",
              },
              {
                title: "Tidak ada defect kritis terbuka",
                description:
                  "Masalah kritis yang menghalangi fungsi utama telah ditangani atau memiliki keputusan tertulis.",
              },
              {
                title: "Pemeriksaan integrasi",
                description:
                  "Hubungan dengan modul atau layanan terkait telah diperiksa.",
              },
              {
                title: "Review implementasi",
                description:
                  "Perubahan diperiksa sesuai proses review dan standar proyek.",
              },
              {
                title: "Dokumentasi relevan tersedia",
                description:
                  "Informasi penggunaan atau teknis diperbarui sesuai kebutuhan.",
              },
              {
                title: "Siap untuk tahap berikutnya",
                description:
                  "Fitur dapat didemonstrasikan, diuji, atau dirilis sesuai keputusan proyek.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl bg-background p-5"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                  <Check size={17} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 border-t border-border pt-6 text-sm leading-8 text-muted-foreground">
            Definition of Done dapat berbeda berdasarkan jenis proyek. Sebuah
            website promosi tidak selalu membutuhkan standar pengujian yang
            sama dengan sistem transaksi atau aplikasi yang mengelola data
            sensitif. Kriteria harus proporsional terhadap fungsi dan risiko.
          </p>
        </div>
      </SectionShell>

      {/* =====================================================
          QUALITY ASSURANCE
      ====================================================== */}
      <SectionShell id="quality">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Kualitas diperhatikan sejak proses dimulai."
          description="Quality assurance bukan hanya mencari bug di akhir proyek. Kualitas dibangun melalui kebutuhan yang jelas, desain yang dapat digunakan, implementasi yang terstruktur, pengujian, dokumentasi, dan evaluasi."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {qualityStandards.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          TESTING
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Testing Strategy"
          title="Pengujian disesuaikan dengan kebutuhan sistem."
          description="Setiap jenis pengujian memiliki tujuan berbeda. Kombinasi pengujian dipilih berdasarkan kompleksitas, risiko, arsitektur, dan fungsi aplikasi."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testingTypes.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <h3 className="text-xl font-bold text-foreground">
            Alur penanganan bug
          </h3>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Identify", "Menemukan dan mencatat masalah."],
              ["02", "Classify", "Menentukan dampak dan prioritas."],
              ["03", "Fix", "Menganalisis dan memperbaiki penyebab."],
              ["04", "Verify", "Menguji hasil perbaikan."],
              ["05", "Close", "Memperbarui status dan dokumentasi."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl bg-background p-5">
                <p className="text-xs font-bold text-amber-600">{number}</p>
                <h4 className="mt-3 font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          SECURITY
      ====================================================== */}
      <SectionShell id="security">
        <SectionHeading
          eyebrow="Security by Design"
          title="Keamanan bukan tambahan di akhir pengerjaan."
          description="Aspek keamanan perlu dipertimbangkan sejak perencanaan, terutama ketika aplikasi mengelola akun, transaksi, data pelanggan, informasi organisasi, atau proses operasional penting."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Authentication",
              description:
                "Memastikan identitas pengguna diperiksa melalui mekanisme autentikasi yang sesuai dengan kebutuhan aplikasi.",
              icon: LockKeyhole,
            },
            {
              title: "Authorization",
              description:
                "Memastikan pengguna hanya dapat mengakses fitur dan data sesuai peran serta kewenangannya.",
              icon: ShieldCheck,
            },
            {
              title: "Input Validation",
              description:
                "Memeriksa data yang diterima sistem untuk mengurangi kesalahan, penyalahgunaan, dan input yang tidak sesuai.",
              icon: ClipboardCheck,
            },
            {
              title: "Data Protection",
              description:
                "Mempertimbangkan perlindungan data, pengelolaan informasi sensitif, dan pembatasan akses.",
              icon: Database,
            },
            {
              title: "Secret Management",
              description:
                "Menghindari penyimpanan kredensial dan secret secara sembarangan di source code atau repository publik.",
              icon: LockKeyhole,
            },
            {
              title: "Backup and Recovery",
              description:
                "Merencanakan backup dan pemulihan data sesuai kebutuhan operasional serta risiko kehilangan data.",
              icon: FileCheck2,
            },
          ].map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <IconBox icon={ShieldCheck} />
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Pendekatan keamanan berbasis risiko
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Tidak semua aplikasi memiliki tingkat risiko yang sama.
                Sistem transaksi, aplikasi administrasi, aplikasi publik, dan
                sistem yang mengelola data sensitif memerlukan pertimbangan
                keamanan yang berbeda. HINAI Tech membahas kebutuhan keamanan
                berdasarkan jenis data, pengguna, lingkungan penggunaan,
                integrasi, serta konsekuensi apabila terjadi gangguan atau
                akses tidak sah. Ruang lingkup pemeriksaan keamanan harus
                dijelaskan secara spesifik dan tidak boleh dianggap sebagai
                jaminan bahwa seluruh risiko dapat dihilangkan.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          PROJECT GOVERNANCE
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Project Governance"
          title="Mengelola scope, keputusan, dan perubahan."
          description="Pengembangan yang adaptif tetap membutuhkan pengelolaan. Fleksibilitas tidak berarti semua perubahan dapat langsung dimasukkan tanpa menilai dampaknya."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projectGovernance.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-4">
                <IconBox icon={item.icon} />
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <CheckLine key={point}>{point}</CheckLine>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          CLIENT RESPONSIBILITIES
      ====================================================== */}
      <SectionShell id="kolaborasi">
        <SectionHeading
          eyebrow="Client Collaboration"
          title="Proyek yang baik membutuhkan kolaborasi dua arah."
          description="Tim pengembang bertanggung jawab terhadap proses teknis dan pelaksanaan pekerjaan. Klien juga memiliki peran penting dalam memberikan informasi, keputusan, validasi, dan akses yang dibutuhkan."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <IconBox icon={Code2} />
              <h3 className="text-xl font-bold text-foreground">
                Tanggung jawab HINAI Tech
              </h3>
            </div>

            <ul className="mt-7 space-y-4">
              {[
                "Memahami kebutuhan dan mendiskusikan solusi yang sesuai.",
                "Menyampaikan ruang lingkup dan asumsi pekerjaan.",
                "Menyusun rencana pengerjaan berdasarkan kesepakatan.",
                "Mengembangkan dan menguji fitur sesuai scope.",
                "Menyampaikan progres, kendala, dan perubahan penting.",
                "Menyiapkan hasil serah terima sesuai kesepakatan.",
                "Menjaga komunikasi dan dokumentasi pekerjaan.",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <IconBox icon={Handshake} />
              <h3 className="text-xl font-bold text-foreground">
                Tanggung jawab klien
              </h3>
            </div>

            <ul className="mt-7 space-y-4">
              {[
                "Menjelaskan kebutuhan dan proses bisnis secara akurat.",
                "Menentukan pihak yang berwenang mengambil keputusan.",
                "Menyediakan materi, data, dan akses yang diperlukan.",
                "Memberikan feedback dan persetujuan sesuai jadwal.",
                "Memeriksa hasil berdasarkan kriteria yang disepakati.",
                "Menyampaikan perubahan kebutuhan secara tertulis.",
                "Mengikuti proses UAT dan serah terima.",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-background p-7">
          <h3 className="font-bold text-foreground">
            Mengapa keterlibatan klien penting?
          </h3>
          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            Tim pengembang dapat memahami teknologi dan menyusun solusi, tetapi
            klien atau stakeholder biasanya memiliki pengetahuan paling dekat
            dengan proses bisnis dan kondisi operasional. Keterlibatan klien
            membantu memeriksa apakah solusi yang dibangun benar-benar sesuai
            dengan kebutuhan. Keterlambatan materi atau keputusan juga dapat
            memengaruhi jadwal, sehingga ketergantungan tersebut perlu
            disampaikan sejak awal.
          </p>
        </div>
      </SectionShell>

      {/* =====================================================
          COMMUNICATION
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Communication"
          title="Transparansi selama proses pengerjaan."
          description="Komunikasi yang baik membantu mengurangi asumsi dan memastikan keputusan tidak hanya tersimpan dalam percakapan informal."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard
            icon={MessageCircle}
            title="Regular Update"
            description="Pembaruan progres disampaikan sesuai pola komunikasi yang disepakati, termasuk pekerjaan selesai, pekerjaan berjalan, hambatan, dan rencana berikutnya."
          />
          <InfoCard
            icon={FileText}
            title="Decision Log"
            description="Keputusan penting seperti perubahan fitur, persetujuan desain, pilihan teknis, dan kesepakatan scope dicatat agar dapat ditelusuri."
          />
          <InfoCard
            icon={Users}
            title="Stakeholder Review"
            description="Pihak terkait dilibatkan pada waktu yang tepat untuk memeriksa prototipe, hasil iterasi, UAT, dan keputusan penting."
          />
        </div>
      </SectionShell>

      {/* =====================================================
          SAMPLE PROJECT CASE
      ====================================================== */}
      <SectionShell id="studi-kasus">
        <SectionHeading
          eyebrow="Practical Case"
          title="Contoh penerapan pada sistem inventori dan penjualan."
          description="Berikut ilustrasi bagaimana HINAI Tech dapat menerapkan pendekatan Hybrid Agile–RAD pada sistem yang mengelola produk, stok, transaksi, dan laporan. Contoh ini bukan janji durasi atau daftar fitur baku untuk setiap proyek."
        />

        <div className="rounded-3xl border border-border bg-card p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                <BriefcaseBusiness size={14} />
                Example Project
              </div>

              <h3 className="mt-6 text-3xl font-bold text-foreground">
                Sistem Inventori dan Penjualan
              </h3>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                Sebuah bisnis membutuhkan sistem untuk mengelola data produk,
                stok, transaksi penjualan, pengguna, dan laporan. Sebelumnya,
                sebagian proses mungkin dilakukan secara manual atau
                menggunakan beberapa alat yang terpisah.
              </p>

              <h4 className="mt-7 font-bold text-foreground">
                Tujuan pengembangan
              </h4>

              <ul className="mt-4 space-y-3">
                {[
                  "Membantu pengelolaan data produk.",
                  "Mencatat transaksi penjualan.",
                  "Membantu pemantauan stok.",
                  "Menyediakan informasi laporan.",
                  "Mengatur hak akses pengguna.",
                ].map((item) => (
                  <CheckLine key={item}>{item}</CheckLine>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Pendekatan
                </p>
                <p className="mt-2 text-lg font-bold text-foreground">
                  Hybrid Agile–RAD
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  RAD untuk validasi alur bisnis dan prototipe. Agile untuk
                  implementasi modul, testing, dan iterasi.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {deliveryMilestones.map((milestone, index) => (
                <div
                  key={milestone.week}
                  className="relative rounded-2xl border border-border bg-background p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      {milestone.week}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {milestone.period}
                    </span>
                  </div>

                  <h4 className="mt-3 text-lg font-bold text-foreground">
                    {milestone.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {milestone.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {milestone.outputs.map((output) => (
                      <span
                        key={output}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {output}
                      </span>
                    ))}
                  </div>

                  {index !== deliveryMilestones.length - 1 && (
                    <div className="absolute -bottom-4 left-8 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
                      <ArrowDown size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          EXAMPLE USER STORY
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="User Story"
          title="Menerjemahkan kebutuhan menjadi pekerjaan."
          description="User story membantu menjelaskan kebutuhan dari sudut pandang pengguna. Format ini dapat dilengkapi acceptance criteria agar tim memiliki dasar yang jelas saat mengembangkan dan menguji fitur."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <NumberLabel>Example User Story</NumberLabel>
            <blockquote className="mt-6 text-xl font-semibold leading-9 text-foreground sm:text-2xl">
              Sebagai pemilik toko, saya ingin melihat jumlah stok produk agar
              dapat mengetahui ketersediaan barang sebelum melakukan
              pemesanan ulang.
            </blockquote>

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              User story tersebut menjelaskan siapa penggunanya, apa kebutuhan
              yang diinginkan, dan manfaat yang diharapkan. Tim dapat
              mengembangkannya menjadi task teknis setelah aturan bisnis
              diperjelas bersama klien.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <NumberLabel>Acceptance Criteria</NumberLabel>
            <ul className="mt-6 space-y-4">
              {[
                "Pemilik toko dapat membuka daftar produk.",
                "Jumlah stok ditampilkan pada produk yang relevan.",
                "Perubahan stok tercermin sesuai aturan transaksi.",
                "Produk yang tidak ditemukan ditangani dengan jelas.",
                "Pengguna tanpa hak akses tidak dapat mengubah data stok.",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <h3 className="text-lg font-bold text-foreground">
            Contoh pemecahan menjadi task
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["UI", "Membuat tampilan daftar produk dan stok."],
              ["API", "Menyediakan endpoint data stok."],
              ["Database", "Memastikan struktur data mendukung kebutuhan."],
              ["QA", "Menguji tampilan, perubahan, dan hak akses."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-background p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          TECHNOLOGY SELECTION
      ====================================================== */}
      <SectionShell id="teknologi">
        <SectionHeading
          eyebrow="Technology Strategy"
          title="Teknologi mengikuti kebutuhan solusi."
          description="Pemilihan teknologi mempertimbangkan tujuan produk, karakteristik pengguna, kebutuhan integrasi, kemampuan tim, biaya operasional, keamanan, dan rencana pemeliharaan."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={Globe2}
            title="Web Development"
            description="Teknologi web dapat dipilih berdasarkan kebutuhan tampilan, interaktivitas, performa, SEO, skalabilitas, dan integrasi."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contoh teknologi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "Nuxt.js", "React", "Vue", "TypeScript", "Node.js"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </InfoCard>

          <InfoCard
            icon={Smartphone}
            title="Mobile Development"
            description="Pengembangan mobile mempertimbangkan target Android atau iOS, kebutuhan perangkat, integrasi native, pengalaman pengguna, dan distribusi aplikasi."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contoh teknologi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Flutter", "React Native", "Kotlin", "Swift"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </InfoCard>

          <InfoCard
            icon={Monitor}
            title="Desktop Development"
            description="Aplikasi desktop dapat dipertimbangkan untuk kebutuhan operasional, penggunaan perangkat lokal, integrasi printer, dan proses yang memerlukan aplikasi terpasang."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contoh teknologi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Electron", "TypeScript", "Python", "Kotlin"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </InfoCard>

          <InfoCard
            icon={Database}
            title="Backend dan Database"
            description="Backend dan database ditentukan berdasarkan struktur data, transaksi, relasi, kebutuhan konsistensi, skala penggunaan, dan kebutuhan integrasi."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contoh teknologi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "Python",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "SQLite",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </InfoCard>

          <InfoCard
            icon={Network}
            title="Cloud dan Infrastructure"
            description="Infrastruktur dipilih berdasarkan kebutuhan deployment, keamanan, ketersediaan layanan, kapasitas, backup, pemantauan, dan anggaran operasional."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Area teknologi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Cloud", "VPS", "AWS", "Linux", "Docker", "CI/CD", "Nginx"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </InfoCard>

          <InfoCard
            icon={Layers3}
            title="No-Code dan Low-Code"
            description="Platform no-code atau low-code dapat dipertimbangkan untuk kebutuhan tertentu ketika kecepatan, kemudahan pengelolaan, dan keterbatasan anggaran menjadi pertimbangan utama."
          >
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contoh platform
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["WordPress", "Shopify", "Webflow", "Platform no-code"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </InfoCard>
        </div>

        <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <IconBox icon={Lightbulb} />
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Tidak ada teknologi yang otomatis paling tepat untuk semua
                proyek.
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Framework populer tidak selalu menjadi pilihan terbaik untuk
                setiap kebutuhan. Teknologi perlu dinilai berdasarkan
                kesesuaian, kemudahan pemeliharaan, kemampuan integrasi,
                kebutuhan tim, serta biaya jangka panjang. HINAI Tech dapat
                membahas opsi teknologi bersama klien sebelum keputusan
                implementasi dibuat.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          DEPLOYMENT
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Deployment"
          title="Mempersiapkan produk untuk lingkungan penggunaan."
          description="Deployment bukan sekadar mengunggah file aplikasi. Produk perlu disiapkan berdasarkan target lingkungan, konfigurasi, data, keamanan, dan proses pemeriksaan setelah pemasangan."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Environment Preparation",
              description:
                "Menyiapkan konfigurasi development, staging, dan production sesuai kebutuhan proyek.",
              icon: Settings2,
            },
            {
              title: "Database Preparation",
              description:
                "Menyiapkan database, migrasi, koneksi, dan pemeriksaan data sesuai kebutuhan.",
              icon: Database,
            },
            {
              title: "Domain and Server",
              description:
                "Mengatur domain, hosting, VPS, jaringan, dan layanan pendukung sesuai kesepakatan.",
              icon: Globe2,
            },
            {
              title: "Application Release",
              description:
                "Menyiapkan build atau paket aplikasi untuk lingkungan dan perangkat target.",
              icon: Rocket,
            },
            {
              title: "Post-Deployment Check",
              description:
                "Memeriksa akses, alur utama, koneksi, log, dan fungsi setelah deployment.",
              icon: ClipboardCheck,
            },
            {
              title: "Handover",
              description:
                "Menyerahkan dokumentasi, informasi akses, dan panduan sesuai ruang lingkup.",
              icon: FileCheck2,
            },
          ].map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          MAINTENANCE
      ====================================================== */}
      <SectionShell id="maintenance">
        <SectionHeading
          eyebrow="Post-Launch"
          title="Pengembangan tidak berhenti setelah peluncuran."
          description="Setelah produk digunakan, kebutuhan dapat berubah dan masalah baru dapat ditemukan. Pemeliharaan membantu menjaga produk tetap relevan dan dapat digunakan sesuai tujuan."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {maintenanceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-4">
                <IconBox icon={item.icon} />
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-muted/20 p-7 sm:p-9">
          <h3 className="text-xl font-bold text-foreground">
            Ruang lingkup maintenance perlu disepakati.
          </h3>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            Pemeliharaan dapat memiliki cakupan berbeda, mulai dari perbaikan
            bug, pembaruan teknis, pemantauan server, backup, hingga
            pengembangan fitur baru. Setiap layanan memiliki kebutuhan sumber
            daya dan tanggung jawab yang berbeda. Karena itu, dukungan setelah
            peluncuran perlu dijelaskan melalui kesepakatan layanan atau
            kontrak yang berlaku, termasuk periode dukungan, waktu respons,
            batas pekerjaan, dan biaya apabila ada.
          </p>
        </div>
      </SectionShell>

      {/* =====================================================
          METRICS
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Evaluation Metrics"
          title="Mengukur proses untuk melakukan improvement."
          description="Metrik digunakan untuk memahami kondisi proyek dan menemukan peluang perbaikan. Metrik tidak boleh digunakan secara terpisah dari konteks atau menjadi satu-satunya ukuran keberhasilan."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <InfoCard
              key={metric.title}
              icon={metric.icon}
              title={metric.title}
              description={metric.description}
            />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <h3 className="text-xl font-bold text-foreground">
            Bagaimana metrik digunakan?
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-background p-5">
              <h4 className="font-bold text-foreground">Observe</h4>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Mengumpulkan data yang relevan dan memastikan cara
                pengukurannya konsisten.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-5">
              <h4 className="font-bold text-foreground">Understand</h4>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Membaca hasil dengan mempertimbangkan kompleksitas, perubahan,
                dan kondisi proyek.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-5">
              <h4 className="font-bold text-foreground">Improve</h4>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Menentukan tindakan perbaikan yang realistis dan mengevaluasi
                hasilnya pada periode berikutnya.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          RISK MANAGEMENT
      ====================================================== */}
      <SectionShell>
        <SectionHeading
          eyebrow="Risk Management"
          title="Mengidentifikasi risiko sebelum menjadi hambatan besar."
          description="Setiap proyek memiliki risiko yang berbeda. Risiko dapat berasal dari kebutuhan, teknologi, data, integrasi, jadwal, sumber daya, dan proses pengambilan keputusan."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Requirement Risk",
              description:
                "Kebutuhan belum jelas, stakeholder memiliki ekspektasi berbeda, atau informasi penting belum tersedia.",
              response:
                "Melakukan discovery, menyusun scope, membuat prototipe, dan mengonfirmasi keputusan.",
            },
            {
              title: "Technical Risk",
              description:
                "Teknologi atau integrasi memiliki keterbatasan, dependensi tidak kompatibel, atau kompleksitas lebih tinggi dari perkiraan.",
              response:
                "Melakukan analisis teknis, proof of concept bila perlu, dan evaluasi dependensi.",
            },
            {
              title: "Schedule Risk",
              description:
                "Persetujuan terlambat, materi belum tersedia, atau estimasi pekerjaan berubah.",
              response:
                "Menyusun milestone, memantau dependensi, dan menyampaikan dampak perubahan.",
            },
            {
              title: "Data and Security Risk",
              description:
                "Data tidak lengkap, akses tidak terkontrol, atau perlindungan data belum direncanakan.",
              response:
                "Menentukan aturan data, hak akses, validasi, backup, dan pemeriksaan keamanan.",
            },
            {
              title: "Operational Risk",
              description:
                "Pengguna belum siap, perangkat berbeda, atau proses bisnis belum disesuaikan.",
              response:
                "Melibatkan pengguna, melakukan UAT, menyiapkan panduan, dan merencanakan transisi.",
            },
            {
              title: "Scope Risk",
              description:
                "Permintaan fitur bertambah tanpa evaluasi dampak biaya, waktu, dan kapasitas.",
              response:
                "Menggunakan change request dan persetujuan perubahan secara tertulis.",
            },
          ].map((risk) => (
            <div
              key={risk.title}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-3">
                <IconBox icon={ShieldCheck} />
                <h3 className="text-lg font-bold text-foreground">
                  {risk.title}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {risk.description}
              </p>

              <div className="mt-5 rounded-2xl bg-background p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Mitigation
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {risk.response}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          DOCUMENTATION
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Documentation"
          title="Dokumentasi membantu menjaga kesinambungan proyek."
          description="Dokumentasi tidak harus selalu panjang. Bentuk dan kedalamannya disesuaikan dengan kompleksitas produk, kebutuhan tim, dan kesepakatan dengan klien."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Requirement Documentation",
              description:
                "Mencatat tujuan, kebutuhan, scope, asumsi, dan batasan yang telah disepakati.",
              icon: FileText,
            },
            {
              title: "Design Documentation",
              description:
                "Menyimpan user flow, rancangan antarmuka, keputusan desain, dan komponen penting.",
              icon: PencilRuler,
            },
            {
              title: "Technical Documentation",
              description:
                "Mencatat arsitektur, struktur modul, API, database, dan keputusan teknis yang relevan.",
              icon: FileCode2,
            },
            {
              title: "Testing Documentation",
              description:
                "Mencatat skenario, hasil pengujian, bug, status perbaikan, dan hasil UAT.",
              icon: TestTube2,
            },
            {
              title: "User Documentation",
              description:
                "Menyediakan panduan penggunaan, alur operasional, dan informasi bantuan pengguna.",
              icon: BookOpen,
            },
            {
              title: "Handover Documentation",
              description:
                "Mencatat informasi serah terima, konfigurasi yang relevan, dan tanggung jawab setelah rilis.",
              icon: FileCheck2,
            },
          ].map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          PROJECT DELIVERABLES
      ====================================================== */}
      <SectionShell>
        <SectionHeading
          eyebrow="Project Deliverables"
          title="Hasil pekerjaan disesuaikan dengan ruang lingkup."
          description="Setiap proyek memiliki hasil akhir yang berbeda. Daftar berikut merupakan contoh keluaran yang dapat diserahkan apabila termasuk dalam kebutuhan dan kesepakatan proyek."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Discovery Output",
              items: ["Requirement summary", "Project scope", "Initial backlog"],
              icon: Search,
            },
            {
              title: "Design Output",
              items: ["User flow", "Wireframe", "UI/UX prototype"],
              icon: PencilRuler,
            },
            {
              title: "Development Output",
              items: ["Application modules", "Source code", "Integration"],
              icon: Code2,
            },
            {
              title: "Release Output",
              items: ["Deployment", "Testing result", "Handover guide"],
              icon: Rocket,
            },
          ].map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <IconBox icon={group.icon} />
              <h3 className="mt-5 font-bold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <CheckLine key={item}>{item}</CheckLine>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          SERVICE COVERAGE
      ====================================================== */}
      <SectionShell className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="HINAI Tech Services"
          title="Metodologi yang dapat diterapkan pada berbagai solusi digital."
          description="Prinsip pemahaman kebutuhan, perancangan, validasi, pengembangan, testing, dan evaluasi dapat diterapkan pada berbagai jenis layanan HINAI Tech. Detail proses disesuaikan dengan karakteristik masing-masing solusi."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceExamples.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <IconBox icon={service.icon} />
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Contoh kebutuhan
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* =====================================================
          PROJECT FLOW SUMMARY
      ====================================================== */}
      <SectionShell>
        <SectionHeading
          eyebrow="End-to-End Process"
          title="Dari ide menjadi produk yang dapat digunakan."
          description="Alur berikut merangkum perjalanan umum sebuah proyek. Tidak semua proyek membutuhkan kedalaman tahapan yang sama, tetapi setiap keputusan penting tetap perlu diperhatikan."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Understand",
              description:
                "Memahami masalah, kebutuhan, pengguna, tujuan, dan batasan proyek.",
              icon: Search,
            },
            {
              number: "02",
              title: "Validate",
              description:
                "Menyusun rancangan, prototipe, dan mengonfirmasi pemahaman bersama klien.",
              icon: PencilRuler,
            },
            {
              number: "03",
              title: "Develop",
              description:
                "Membangun fitur berdasarkan prioritas, mengintegrasikan modul, dan menguji.",
              icon: Code2,
            },
            {
              number: "04",
              title: "Deliver",
              description:
                "Melakukan pemeriksaan akhir, deployment, dokumentasi, dan serah terima.",
              icon: Rocket,
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <IconBox icon={step.icon} />
                <span className="text-sm font-bold tracking-widest text-muted-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-7 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-xl font-bold text-foreground">
                Setelah delivery, siklus improvement dapat dimulai kembali.
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Masukan pengguna, perubahan kebutuhan, hasil pemantauan, dan
                evaluasi operasional dapat menjadi dasar backlog berikutnya.
                Dengan demikian, produk dapat dikembangkan secara terarah
                sesuai kebutuhan yang benar-benar muncul.
              </p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
              <TrendingUp size={30} />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <SectionShell id="faq" className="border-y border-border bg-muted/20">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Pertanyaan seputar metodologi HINAI Tech."
          description="Informasi berikut membantu menjelaskan bagaimana proses pengembangan dikelola. Detail pelaksanaan tetap mengikuti kebutuhan dan kesepakatan setiap proyek."
        />

        <div className="mx-auto max-w-4xl space-y-3">
          {visibleFAQs.map((item, index) => (
            <FAQAccordion
              key={item.question}
              item={item}
              open={activeFAQ === index}
              onToggle={() =>
                setActiveFAQ((current) => (current === index ? null : index))
              }
            />
          ))}

          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setShowAllFAQ((current) => !current)
                setActiveFAQ(null)
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-amber-500/50"
            >
              {showAllFAQ ? "Tampilkan lebih sedikit" : "Lihat semua pertanyaan"}
              <ChevronDown
                size={16}
                className={`transition-transform ${showAllFAQ ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </SectionShell>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-amber-500/20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-amber-500/20" />

            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles size={14} className="text-amber-600" />
                Let's Build Something Meaningful
              </div>

              <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-6xl">
                Punya ide atau kebutuhan digital yang ingin diwujudkan?
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Diskusikan kebutuhan proyek bersama HINAI Tech. Kami dapat
                membantu memahami masalah, menentukan pendekatan, menyusun
                prioritas, dan merancang langkah pengembangan yang sesuai
                dengan tujuan Anda.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20digital%20saya."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background transition hover:opacity-85"
                >
                  <MessageCircle size={18} />
                  Konsultasikan Proyek
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://hinaitech.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-sm font-bold text-foreground transition hover:border-amber-500/50"
                >
                  Kunjungi HINAI Tech
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-600" />
                  Requirement-oriented
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-600" />
                  Iterative development
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-600" />
                  Quality-focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM NOTE
      ====================================================== */}
      <section className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-10">
          <p className="text-xs leading-6 text-muted-foreground">
            HINAI Tech — Digital Solutions, Product Development, and Technology
            Services.
          </p>
          <p className="text-xs leading-6 text-muted-foreground">
            Metodologi dan ruang lingkup pelaksanaan disesuaikan dengan
            karakteristik serta kesepakatan setiap proyek.
          </p>
        </div>
      </section>
    </main>
  )
}

export default MethodologyContent