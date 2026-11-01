
"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Monitor,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  Workflow,
  Cloud,
  Settings2,
  Server,
  BrainCircuit,
  Terminal,
  AppWindow,
  Apple,
  ShoppingCart,
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  Store,
  ChartNoAxesCombined,
  Headphones,
  Clock3,
  Send,
  Menu,
  X,
  Laptop,
  Tablet,
  CodeXml,
  Bot,
  Gauge,
  RefreshCw,
  Search,
  Play,
  Star,
  Boxes,
  PackageCheck,
  FileCode2,
  PenTool,
  Wrench,
  ChevronUp,
 
} from "lucide-react"

const WHATSAPP = "6282144137914"

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

const technologies = [
  { name: "Flutter", type: "Cross-platform", color: "#42B8E8" },
  { name: "React Native", type: "Mobile", color: "#61DAFB" },
  { name: "Kotlin", type: "Android Native", color: "#A97BFF" },
  { name: "Swift", type: "iOS Native", color: "#FF895A" },
  { name: "Electron", type: "Desktop", color: "#8B9BAF" },
  { name: "React.js", type: "Frontend", color: "#61DAFB" },
  { name: "Next.js", type: "Web Technology", color: "#222222" },
  { name: "Vue.js", type: "Frontend", color: "#42B883" },
  { name: "TypeScript", type: "Programming", color: "#3178C6" },
  { name: "Node.js", type: "Backend", color: "#80BD42" },
  { name: "Python", type: "Backend & AI", color: "#E8C34A" },
  { name: "Express.js", type: "Backend", color: "#777777" },
  { name: "Laravel", type: "Backend", color: "#FF6257" },
  { name: "PHP", type: "Backend", color: "#777BB4" },
  { name: "MySQL", type: "Database", color: "#E28A39" },
  { name: "PostgreSQL", type: "Database", color: "#4285B4" },
  { name: "MongoDB", type: "Database", color: "#48A56A" },
  { name: "Firebase", type: "Cloud Database", color: "#F4A62A" },
  { name: "AWS", type: "Cloud Infrastructure", color: "#F4A62A" },
  { name: "Docker", type: "Infrastructure", color: "#2496ED" },
  { name: "WordPress", type: "No-Code / CMS", color: "#3986A8" },
  { name: "Shopify", type: "E-Commerce", color: "#8CBF43" },
  { name: "Figma", type: "UI/UX Design", color: "#A259FF" },
  { name: "OpenAI API", type: "Artificial Intelligence", color: "#10A37F" },
]

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Android Application",
    description:
      "Aplikasi Android custom untuk smartphone, tablet, dan perangkat Android lainnya dengan pengalaman pengguna yang optimal.",
    features: [
      "Native Android & Cross-platform",
      "Integrasi API dan database",
      "Push notification",
      "Payment gateway & QRIS",
      "Google Play Store preparation",
    ],
    tags: ["Kotlin", "Flutter", "React Native"],
  },
  {
    number: "02",
    icon: Apple,
    title: "iOS Application",
    description:
      "Aplikasi iPhone dan iPad yang dirancang untuk memberikan pengalaman premium dalam ekosistem Apple.",
    features: [
      "iPhone & iPad application",
      "Native & cross-platform",
      "Apple ecosystem integration",
      "Authentication & security",
      "App Store preparation",
    ],
    tags: ["Swift", "Flutter", "React Native"],
  },
  {
    number: "03",
    icon: Monitor,
    title: "Desktop Application",
    description:
      "Software desktop untuk operasional perusahaan, sistem kasir, manajemen data, dan produktivitas.",
    features: [
      "Windows application",
      "macOS application",
      "Offline-first architecture",
      "Local database & synchronization",
      "Printer & peripheral integration",
    ],
    tags: ["Electron", "TypeScript", "Python"],
  },
  {
    number: "04",
    icon: Globe2,
    title: "Web Application & PWA",
    description:
      "Aplikasi berbasis browser yang dapat diakses dari berbagai perangkat dengan sistem backend terintegrasi.",
    features: [
      "Dashboard & admin panel",
      "Progressive Web Application",
      "Multi-user & role management",
      "API & cloud integration",
      "Responsive interface",
    ],
    tags: ["Next.js", "React", "Vue.js"],
  },
]

const developmentOptions = [
  {
    name: "Native Development",
    subtitle: "Dibangun khusus untuk setiap platform",
    icon: Smartphone,
    android: "Kotlin",
    ios: "Swift",
    performance: "Sangat tinggi",
    cost: "Relatif tinggi",
    timeline: "Bergantung kompleksitas",
    access: "Akses penuh fitur perangkat",
    suitable: "Aplikasi dengan kebutuhan performa dan hardware khusus.",
  },
  {
    name: "Cross-Platform",
    subtitle: "Satu codebase untuk beberapa platform",
    icon: Layers3,
    android: "Flutter",
    ios: "Flutter",
    performance: "Tinggi",
    cost: "Lebih efisien",
    timeline: "Bergantung kompleksitas",
    access: "Melalui native bridge dan plugin",
    suitable: "Startup, UMKM, aplikasi bisnis, dan produk digital.",
    recommended: true,
  },
  {
    name: "Hybrid / Web-Based",
    subtitle: "Teknologi web dalam aplikasi",
    icon: Globe2,
    android: "Web technology",
    ios: "Web technology",
    performance: "Bergantung kebutuhan",
    cost: "Fleksibel",
    timeline: "Bergantung kompleksitas",
    access: "Melalui plugin dan API",
    suitable: "Aplikasi internal, dashboard, dan kebutuhan sederhana.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Memahami ide, kebutuhan bisnis, target pengguna, fitur, dan ruang lingkup aplikasi.",
    icon: Search,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Membuat wireframe, user flow, desain visual, dan prototype sebelum pengembangan.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Architecture & Backend",
    description:
      "Menentukan struktur sistem, database, API, autentikasi, dan infrastruktur.",
    icon: Database,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Mengembangkan frontend dan backend secara terstruktur sesuai spesifikasi.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Integration",
    description:
      "Menghubungkan payment gateway, AI, cloud, API eksternal, dan perangkat pendukung.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Quality Assurance",
    description:
      "Melakukan pengujian fungsi, keamanan, kompatibilitas, dan performa aplikasi.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Deployment",
    description:
      "Menyiapkan build, konfigurasi server, dan publikasi aplikasi sesuai platform.",
    icon: Rocket,
  },
  {
    number: "08",
    title: "Maintenance",
    description:
      "Dukungan perbaikan, pembaruan, monitoring, dan pengembangan lanjutan.",
    icon: RefreshCw,
  },
]

const industries = [
  {
    icon: Store,
    title: "UMKM & Retail",
    description: "POS, inventory, penjualan, kasir, dan manajemen toko.",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Learning management, CBT, absensi, dan sistem akademik.",
  },
  {
    icon: Building2,
    title: "Perusahaan",
    description: "ERP, CRM, HRIS, workflow, dan sistem operasional.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Marketplace, katalog produk, transaksi, dan pembayaran.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Startup",
    description: "MVP, SaaS, platform digital, dan produk teknologi.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "AI assistant, chatbot, prediksi data, dan otomatisasi.",
  },
]

const projectExamples = [
  {
    category: "Retail & Business",
    name: "Point of Sale System",
    type: "Desktop Application",
    description:
      "Sistem kasir dan manajemen bisnis dengan pengelolaan produk, transaksi, stok, dan laporan.",
    icon: ShoppingCart,
    color: "#D7B36A",
    tags: ["Electron", "SQLite", "TypeScript"],
  },
  {
    category: "Education Technology",
    name: "Education Management App",
    type: "Android & Web",
    description:
      "Platform digital pendidikan dengan fitur manajemen pembelajaran, pengguna, dan aktivitas.",
    icon: GraduationCap,
    color: "#55A7D8",
    tags: ["Flutter", "Next.js", "PostgreSQL"],
  },
  {
    category: "AI & Productivity",
    name: "AI Business Assistant",
    type: "Web & Mobile",
    description:
      "Asisten digital untuk membantu proses bisnis, interaksi pelanggan, dan otomatisasi.",
    icon: BrainCircuit,
    color: "#9A82E8",
    tags: ["Python", "AI API", "Node.js"],
  },
]

const pricing = [
  {
    title: "Starter / MVP",
    subtitle: "Untuk memulai ide digital",
    price: "Custom",
    description: "Cocok untuk validasi ide dan aplikasi dengan fitur inti.",
    features: [
      "Analisis kebutuhan",
      "UI/UX dasar",
      "Fitur utama aplikasi",
      "Database dan backend sesuai scope",
      "Testing dasar",
      "Dokumentasi penggunaan",
    ],
  },
  {
    title: "Business Application",
    subtitle: "Untuk operasional bisnis",
    price: "Custom",
    description: "Untuk bisnis yang membutuhkan sistem lebih terintegrasi.",
    recommended: true,
    features: [
      "Semua fitur Starter",
      "Dashboard dan admin panel",
      "Multi-user & role management",
      "API integration",
      "Laporan dan analitik",
      "Testing lebih menyeluruh",
      "Deployment assistance",
    ],
  },
  {
    title: "Enterprise / Custom",
    subtitle: "Untuk kebutuhan kompleks",
    price: "By Project",
    description: "Untuk sistem berskala besar dengan kebutuhan khusus.",
    features: [
      "Analisis sistem mendalam",
      "Custom architecture",
      "Multi-platform development",
      "Integrasi sistem eksternal",
      "Security & performance testing",
      "Cloud infrastructure",
      "Maintenance arrangement",
    ],
  },
]

const faqs = [
  {
    q: "Berapa biaya pembuatan aplikasi Android, iOS, dan desktop?",
    a: "Biaya bergantung pada fitur, kompleksitas, platform, desain, backend, integrasi, dan infrastruktur. HINAI Tech menggunakan sistem penawaran berdasarkan kebutuhan proyek. Setelah konsultasi dan analisis kebutuhan, kami memberikan estimasi biaya serta ruang lingkup pekerjaan yang lebih jelas.",
  },
  {
    q: "Apakah HINAI Tech bisa membuat aplikasi dari nol?",
    a: "Ya. Kami dapat membantu dari tahap ide, analisis kebutuhan, perancangan UI/UX, arsitektur sistem, pengembangan frontend dan backend, pengujian, hingga deployment.",
  },
  {
    q: "Apakah satu aplikasi bisa berjalan di Android, iOS, dan desktop?",
    a: "Bisa, tergantung kebutuhan dan arsitektur yang dipilih. Flutter dapat digunakan untuk Android, iOS, dan desktop pada use case yang sesuai. Electron dapat digunakan untuk desktop. Namun, beberapa kebutuhan hardware atau fitur khusus mungkin memerlukan pengembangan native.",
  },
  {
    q: "Apakah aplikasi dapat dibuat menggunakan Flutter?",
    a: "Ya. Flutter menjadi salah satu pilihan untuk pengembangan cross-platform. Satu codebase dapat digunakan untuk Android, iOS, Windows, macOS, dan platform lain yang didukung, dengan penyesuaian pada setiap platform.",
  },
  {
    q: "Apakah HINAI Tech menggunakan Kotlin dan Swift?",
    a: "Ya. Kotlin dapat digunakan untuk pengembangan Android native, sedangkan Swift digunakan untuk pengembangan iOS native. Pemilihan teknologi disesuaikan dengan spesifikasi dan kebutuhan proyek.",
  },
  {
    q: "Apakah bisa menggunakan React Native, Electron, atau Python?",
    a: "Bisa. Kami dapat menggunakan React Native untuk mobile, Electron untuk desktop, serta Python untuk backend, automasi, pemrosesan data, dan kebutuhan AI sesuai arsitektur yang tepat.",
  },
  {
    q: "Apakah HINAI Tech bisa menggunakan WordPress atau no-code?",
    a: "Bisa. Kami juga mempertimbangkan WordPress, Shopify, dan platform no-code/low-code untuk kebutuhan yang lebih efisien. Tidak semua proyek harus dibangun dari nol menggunakan custom coding.",
  },
  {
    q: "Apakah backend dan database sudah termasuk?",
    a: "Backend dan database dapat menjadi bagian dari proyek sesuai kebutuhan. Pilihannya meliputi MySQL, PostgreSQL, MongoDB, SQLite, Firebase, dan cloud database lainnya.",
  },
  {
    q: "Apakah bisa integrasi payment gateway dan QRIS?",
    a: "Bisa. Integrasi dapat dilakukan dengan payment gateway atau penyedia layanan pembayaran yang sesuai, termasuk QRIS apabila tersedia akses API dan persyaratan dari penyedia layanan.",
  },
  {
    q: "Apakah aplikasi bisa diunggah ke Play Store dan App Store?",
    a: "Kami dapat membantu menyiapkan build, konfigurasi, aset publikasi, dan proses submission. Akun developer, biaya registrasi, kebijakan platform, dan proses review mengikuti ketentuan masing-masing penyedia.",
  },
  {
    q: "Berapa lama proses pembuatan aplikasi?",
    a: "Durasi proyek ditentukan oleh jumlah fitur, kompleksitas, platform, integrasi, dan kecepatan persetujuan materi. Estimasi timeline diberikan setelah requirement gathering.",
  },
  {
    q: "Apakah aplikasi dapat berjalan secara offline?",
    a: "Bisa. Aplikasi desktop maupun mobile dapat dirancang dengan penyimpanan lokal dan mekanisme sinkronisasi ketika internet tersedia. Namun, fitur yang membutuhkan server tetap memerlukan koneksi.",
  },
  {
    q: "Apakah HINAI Tech melayani revisi dan maintenance?",
    a: "Ya. Ruang lingkup revisi, garansi bug, maintenance, dan pengembangan fitur lanjutan disepakati dalam penawaran dan perjanjian proyek.",
  },
  {
    q: "Apakah saya bisa konsultasi terlebih dahulu?",
    a: "Tentu. Anda dapat berkonsultasi melalui WhatsApp untuk menjelaskan ide, kebutuhan, target pengguna, dan perkiraan anggaran. Konsultasi awal tidak mengharuskan Anda langsung memesan proyek.",
  },
]

export default function ApplicationsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activePlatform, setActivePlatform] = useState("all")
  const [scrolled, setScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState<string[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((previous) =>
              previous.includes(entry.target.id)
                ? previous
                : [...previous, entry.target.id]
            )
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.includes(id)

  const platforms = [
    { id: "all", label: "Semua Platform" },
    { id: "mobile", label: "Mobile" },
    { id: "desktop", label: "Desktop" },
    { id: "web", label: "Web & PWA" },
  ]

  const closeMenu = () => setMobileMenu(false)

  return (
    <main className="app-page" id="top">

      {/* ================= HERO ================= */}

      <section className="hero-section">
        <div className="hero-grid-bg" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="app-container hero-layout">

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="live-dot" />
              SOFTWARE DEVELOPMENT · MOBILE · DESKTOP
            </div>

            <h1>
              Jasa Pembuatan
              <span className="hero-title-gradient">Aplikasi Custom</span>
              untuk Masa Depan
              <span className="hero-title-white">Bisnis Anda.</span>
            </h1>

            <p className="hero-description">
              Wujudkan ide digital Anda menjadi aplikasi Android, iOS,
              dan Desktop yang fungsional, modern, scalable, dan
              dirancang sesuai kebutuhan bisnis bersama HINAI Tech.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappLink("Halo HINAI Tech, saya ingin konsultasi gratis untuk pembuatan aplikasi custom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Konsultasi Gratis <ArrowRight size={18} />
              </a>

              <a href="#services" className="btn-outline">
                Jelajahi Layanan <ChevronRight size={17} />
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon"><Code2 size={17} /></span>
                <div><strong>Custom Development</strong><small>Sesuai kebutuhan</small></div>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon"><Layers3 size={17} /></span>
                <div><strong>Multi Platform</strong><small>Android · iOS · Desktop</small></div>
              </div>
            </div>

          </div>

          {/* 3D DEVICE SHOWCASE */}

          <div className="hero-visual">

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-label visual-label-top">
              <span className="visual-label-dot" />
              DIGITAL PRODUCT EXPERIENCE
            </div>

            <div className="device-stage">

              {/* DESKTOP */}

              <div className="device-desktop">
                <div className="desktop-frame">
                  <div className="desktop-topbar">
                    <div className="window-dots"><i /><i /><i /></div>
                    <span>HINAI Dashboard</span>
                    <span className="desktop-status">● Live</span>
                  </div>
                  <div className="desktop-content">
                    <div className="desktop-sidebar">
                      <div className="mini-logo">H.</div>
                      <i /><i /><i /><i /><i />
                    </div>
                    <div className="desktop-main">
                      <div className="desktop-welcome">
                        <div><small>WELCOME BACK</small><strong>Business Overview</strong></div>
                        <div className="desktop-avatar">H</div>
                      </div>
                      <div className="desktop-stats">
                        <div><small>Total Revenue</small><strong>Rp 24.8M</strong><i>↗ 12.8%</i></div>
                        <div><small>Active Users</small><strong>1,284</strong><i>↗ 8.2%</i></div>
                      </div>
                      <div className="desktop-chart">
                        <div className="chart-heading"><strong>Performance</strong><small>Last 7 days</small></div>
                        <div className="chart-bars">
                          {[35, 58, 45, 78, 55, 90, 68, 100, 73, 85, 58, 95].map((height, i) => (
                            <i key={i} style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desktop-stand" />
              </div>

              {/* SMARTPHONE */}

              <div className="device-phone phone-back">
                <div className="phone-frame">
                  <div className="phone-camera" />
                  <div className="phone-screen phone-screen-light">
                    <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>
                    <div className="phone-header"><strong>Discover</strong><span>◉</span></div>
                    <div className="phone-greeting">Hello, User 👋</div>
                    <div className="phone-feature">
                      <small>YOUR BUSINESS</small>
                      <strong>Grow Smarter.</strong>
                      <span>Explore your performance</span>
                      <div className="phone-feature-circle">↗</div>
                    </div>
                    <div className="phone-section-title">Quick Services</div>
                    <div className="phone-app-grid">
                      <i>◈</i><i>▣</i><i>◉</i><i>◇</i>
                    </div>
                    <div className="phone-section-title">Recent Activity</div>
                    <div className="phone-list"><i /><span /><b /></div>
                    <div className="phone-list"><i /><span /><b /></div>
                    <div className="phone-bottom"><i /><i /><i /><i /></div>
                  </div>
                </div>
              </div>

              {/* MAIN PHONE */}

              <div className="device-phone phone-front">
                <div className="phone-frame">
                  <div className="phone-camera" />
                  <div className="phone-screen phone-screen-dark">
                    <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>
                    <div className="mobile-app-brand">
                      <div className="mobile-app-logo">H.</div>
                      <div><strong>HINAI APP</strong><small>YOUR DIGITAL WORLD</small></div>
                    </div>
                    <div className="mobile-app-title">Everything<br />in one place.</div>
                    <div className="mobile-app-description">Smart technology for your business.</div>
                    <div className="mobile-app-card">
                      <div className="mobile-app-card-top"><span>OVERVIEW</span><span>•••</span></div>
                      <div className="mobile-app-card-value">Rp 8.450.000</div>
                      <div className="mobile-app-card-growth">↗ 18.4% this month</div>
                      <div className="mobile-app-mini-chart">
                        {[30, 55, 40, 75, 45, 85, 65, 100].map((h, i) => (
                          <i key={i} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="mobile-app-actions">
                      <span>◈</span><span>▣</span><span>◎</span>
                    </div>
                    <div className="mobile-app-footer">POWERED BY HINAI TECH</div>
                  </div>
                </div>
              </div>

            </div>

            {/* FLOATING ELEMENTS */}

            <div className="floating-card floating-ai">
              <span className="floating-icon"><BrainCircuit size={19} /></span>
              <div><strong>AI Integration</strong><small>Smart Technology</small></div>
              <span className="floating-check"><Check size={12} /></span>
            </div>

            <div className="floating-card floating-code">
              <span className="floating-icon"><Code2 size={18} /></span>
              <div><strong>Custom Coding</strong><small>Built for your needs</small></div>
            </div>

            <div className="floating-orb orb-gold" />
            <div className="floating-orb orb-blue" />

            <div className="visual-caption">
              <span>DESIGNED TO SCALE</span>
              <span>BUILT TO PERFORM.</span>
            </div>

          </div>
        </div>

        <div className="hero-bottom">
          <div className="app-container hero-bottom-inner">
            <span>ONE DIGITAL PARTNER</span>
            <div className="hero-platforms">
              <span><Smartphone size={16} /> ANDROID</span>
              <span><Apple size={16} /> iOS</span>
              <span><Monitor size={16} /> DESKTOP</span>
              <span><Globe2 size={16} /> WEB APP</span>
            </div>
          </div>
        </div>
      </section>

      
{/* ================= INTRO ================= */}

<section className="intro-section section-padding" id="about">
  <div
    className={`app-container intro-grid ${
      isVisible("intro-reveal") ? "revealed" : ""
    }`}
    data-reveal
    id="intro-reveal"
  >
    <div className="section-heading intro-heading">
      <span className="section-kicker">ABOUT OUR DEVELOPMENT</span>

      <h2>
        Lebih dari Sekadar
        <span> Membuat Aplikasi.</span>
      </h2>
    </div>

    <div className="intro-copy">
      <p>
        Setiap bisnis memiliki tantangan dan kebutuhan teknologi
        yang berbeda. Karena itu, HINAI Tech menghadirkan layanan
        pengembangan aplikasi custom yang berorientasi pada
        kebutuhan nyata, bukan sekadar mengikuti tren teknologi.
      </p>

      <p>
        Mulai dari aplikasi sederhana untuk UMKM, sistem operasional
        perusahaan, hingga produk digital berbasis AI. Kami membantu
        merancang solusi yang dapat dikembangkan seiring pertumbuhan
        bisnis Anda.
      </p>

      <a href="#process" className="text-link">
        Kenali proses pengembangan kami
        <ArrowUpRight size={17} />
      </a>
    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}

      <section className="services-section section-padding" id="services">
        <div className="app-container">

          <div className="section-top">
            <div>
              <span className="section-kicker">WHAT WE BUILD</span>
              <h2 className="section-title">
                Solusi Aplikasi untuk
                <span> Setiap Kebutuhan.</span>
              </h2>
              <p className="section-subtitle">
                Pilih platform yang sesuai. Kami bantu merancang,
                mengembangkan, dan mengintegrasikan solusi digital Anda.
              </p>
            </div>
            <a
              href={whatsappLink("Halo HINAI Tech, saya ingin mendiskusikan layanan pengembangan aplikasi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              Diskusikan kebutuhan <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  className="service-card"
                  key={service.number}
                  data-reveal
                  id={`service-${index}`}
                >
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <div className="service-icon"><Icon size={26} /></div>
                    <ArrowUpRight className="service-arrow" size={21} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}><CheckCircle2 size={15} /> {feature}</li>
                    ))}
                  </ul>

                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>

                  <a
                    href={whatsappLink(`Halo HINAI Tech, saya tertarik dengan layanan ${service.title}. Mohon informasi lebih lanjut.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-bottom-link"
                  >
                    Pelajari layanan <ArrowRight size={16} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY HINAI ================= */}

      <section className="why-section section-padding">
        <div className="app-container why-layout">

          <div className="why-left">
            <span className="section-kicker light-kicker">WHY HINAI TECH</span>
            <h2>
              Teknologi yang
              <span> Bekerja untuk</span>
              Bisnis Anda.
            </h2>
            <p>
              Kami mengutamakan solusi yang relevan, arsitektur yang
              tepat, serta pengalaman pengguna yang baik agar aplikasi
              benar-benar memberikan manfaat.
            </p>

            <a
              href={whatsappLink("Halo HINAI Tech, saya ingin berdiskusi mengenai solusi aplikasi untuk bisnis saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Diskusikan Proyek <ArrowRight size={17} />
            </a>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <span><Settings2 size={23} /></span>
              <h3>Custom by Design</h3>
              <p>Dibangun berdasarkan alur kerja, kebutuhan, dan tujuan bisnis Anda.</p>
              <b>01 / CUSTOM</b>
            </div>

            <div className="why-card">
              <span><Layers3 size={23} /></span>
              <h3>Multi-Platform</h3>
              <p>Pengembangan Android, iOS, desktop, dan web sesuai kebutuhan.</p>
              <b>02 / FLEXIBLE</b>
            </div>

            <div className="why-card">
              <span><ShieldCheck size={23} /></span>
              <h3>Security Minded</h3>
              <p>Memperhatikan autentikasi, hak akses, validasi, dan perlindungan data.</p>
              <b>03 / SECURITY</b>
            </div>

            <div className="why-card">
              <span><BrainCircuit size={23} /></span>
              <h3>AI Ready</h3>
              <p>Siap dikembangkan dengan AI, automasi, dan analitik apabila diperlukan.</p>
              <b>04 / INNOVATION</b>
            </div>

            <div className="why-card">
              <span><Database size={23} /></span>
              <h3>Integrated System</h3>
              <p>Integrasi database, API, cloud, dan sistem pihak ketiga.</p>
              <b>05 / INTEGRATION</b>
            </div>

            <div className="why-card">
              <span><Headphones size={23} /></span>
              <h3>Project Support</h3>
              <p>Komunikasi progres, dokumentasi, dan dukungan sesuai kesepakatan proyek.</p>
              <b>06 / SUPPORT</b>
            </div>

          </div>
        </div>
      </section>

      {/* ================= APPLICATION TYPES ================= */}

      <section className="platform-section section-padding" id="platforms">
        <div className="app-container">

          <div className="center-heading">
            <span className="section-kicker">PLATFORM & POSSIBILITIES</span>
            <h2 className="section-title">
              Satu Ide, Berbagai
              <span> Kemungkinan.</span>
            </h2>
            <p className="section-subtitle">
              Aplikasi dapat dirancang untuk berbagai perangkat dan
              kebutuhan operasional dengan pendekatan teknologi yang tepat.
            </p>
          </div>

          <div className="platform-filter">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                className={activePlatform === platform.id ? "filter-active" : ""}
                onClick={() => setActivePlatform(platform.id)}
              >
                {platform.label}
              </button>
            ))}
          </div>

          <div className="platform-grid">

            {(activePlatform === "all" || activePlatform === "mobile") && (
              <>
                <div className="platform-card">
                  <div className="platform-illustration mobile-illustration">
                    <div className="mini-phone mini-phone-one">
                      <div className="mini-phone-screen">
                        <div className="mini-phone-bar" />
                        <div className="mini-phone-hero" />
                        <div className="mini-phone-row" />
                        <div className="mini-phone-row" />
                        <div className="mini-phone-row short" />
                      </div>
                    </div>
                    <div className="mini-phone mini-phone-two">
                      <div className="mini-phone-screen dark-mini">
                        <div className="mini-phone-bar" />
                        <div className="mini-phone-hero" />
                        <div className="mini-phone-row" />
                        <div className="mini-phone-row" />
                      </div>
                    </div>
                    <div className="platform-floating platform-floating-one"><Smartphone size={19} /></div>
                  </div>
                  <div className="platform-content">
                    <span>MOBILE DEVELOPMENT</span>
                    <h3>Android & iOS</h3>
                    <p>
                      Aplikasi smartphone untuk pelanggan, karyawan,
                      komunitas, maupun kebutuhan operasional bisnis.
                    </p>
                    <div className="platform-tags"><i>Android</i><i>iPhone</i><i>Tablet</i></div>
                  </div>
                </div>

                <div className="platform-card">
                  <div className="platform-illustration tablet-illustration">
                    <div className="tablet-frame">
                      <div className="tablet-screen">
                        <div className="tablet-top">HINAI WORKSPACE</div>
                        <div className="tablet-boxes"><i /><i /><i /></div>
                        <div className="tablet-content-lines"><i /><i /><i /></div>
                      </div>
                    </div>
                    <div className="platform-floating platform-floating-two"><Tablet size={20} /></div>
                  </div>
                  <div className="platform-content">
                    <span>TABLET APPLICATION</span>
                    <h3>Tablet Experience</h3>
                    <p>
                      Antarmuka yang disesuaikan untuk kasir, administrasi,
                      pembelajaran, monitoring, dan kebutuhan lapangan.
                    </p>
                    <div className="platform-tags"><i>Android Tablet</i><i>iPad</i><i>Touch UI</i></div>
                  </div>
                </div>
              </>
            )}

            {(activePlatform === "all" || activePlatform === "desktop") && (
              <div className="platform-card">
                <div className="platform-illustration desktop-illustration">
                  <div className="mini-monitor">
                    <div className="mini-monitor-top"><i /><i /><i /></div>
                    <div className="mini-monitor-screen">
                      <div className="mini-monitor-side" />
                      <div className="mini-monitor-body">
                        <i /><i /><i />
                        <div className="mini-monitor-chart" />
                      </div>
                    </div>
                  </div>
                  <div className="platform-floating platform-floating-three"><Monitor size={20} /></div>
                </div>
                <div className="platform-content">
                  <span>DESKTOP DEVELOPMENT</span>
                  <h3>Windows & macOS</h3>
                  <p>
                    Aplikasi desktop untuk POS, ERP, manajemen data,
                    produktivitas, dan sistem internal perusahaan.
                  </p>
                  <div className="platform-tags"><i>Windows</i><i>macOS</i><i>Offline First</i></div>
                </div>
              </div>
            )}

            {(activePlatform === "all" || activePlatform === "web") && (
              <div className="platform-card">
                <div className="platform-illustration web-illustration">
                  <div className="web-window">
                    <div className="web-window-top"><i /><i /><i /></div>
                    <div className="web-window-body">
                      <div className="web-window-heading" />
                      <div className="web-window-grid"><i /><i /><i /></div>
                      <div className="web-window-footer" />
                    </div>
                  </div>
                  <div className="platform-floating platform-floating-four"><Globe2 size={20} /></div>
                </div>
                <div className="platform-content">
                  <span>WEB APPLICATION</span>
                  <h3>Web App & PWA</h3>
                  <p>
                    Sistem berbasis browser yang responsif, mudah diakses,
                    dan dapat diintegrasikan dengan backend.
                  </p>
                  <div className="platform-tags"><i>Web App</i><i>PWA</i><i>Dashboard</i></div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}

      <section className="technology-section section-padding" id="technology">
        <div className="app-container">

          <div className="technology-layout">

            <div className="technology-intro">
              <span className="section-kicker">OUR TECHNOLOGY STACK</span>
              <h2 className="section-title">
                Teknologi yang Tepat,
                <span> Bukan Sekadar Populer.</span>
              </h2>
              <p>
                Tidak semua aplikasi harus dibuat menggunakan teknologi
                yang sama. Kami mempertimbangkan performa, kebutuhan
                fitur, anggaran, keamanan, kemudahan maintenance, dan
                rencana pengembangan jangka panjang.
              </p>

              <div className="tech-note">
                <Sparkles size={19} />
                <span>Technology should serve the product, not the other way around.</span>
              </div>
            </div>

            <div className="technology-showcase">
              <div className="tech-showcase-header">
                <div><span className="live-dot" /> TECHNOLOGY ECOSYSTEM</div>
                <span>HINAI TECH / 2026</span>
              </div>

              <div className="tech-categories">
                <div className="tech-category">
                  <span className="tech-category-icon"><Smartphone size={17} /></span>
                  <div><strong>Mobile & Desktop</strong><small>Frontend Applications</small></div>
                  <span className="tech-count">06</span>
                </div>
                <div className="tech-category">
                  <span className="tech-category-icon"><CodeXml size={17} /></span>
                  <div><strong>Web & Backend</strong><small>Application Engineering</small></div>
                  <span className="tech-count">07</span>
                </div>
                <div className="tech-category">
                  <span className="tech-category-icon"><Database size={17} /></span>
                  <div><strong>Database & Cloud</strong><small>Data Infrastructure</small></div>
                  <span className="tech-count">06</span>
                </div>
                <div className="tech-category">
                  <span className="tech-category-icon"><BrainCircuit size={17} /></span>
                  <div><strong>AI & Automation</strong><small>Intelligence Integration</small></div>
                  <span className="tech-count">04+</span>
                </div>
              </div>

              <div className="tech-showcase-footer">
                <span>ENGINEERED FOR YOUR NEEDS</span>
                <ArrowUpRight size={19} />
              </div>
            </div>

          </div>

          <div className="tech-stack-grid">
            {technologies.map((tech, index) => (
              <div className="tech-stack-item" key={tech.name}>
                <span className="tech-dot" style={{ backgroundColor: tech.color }} />
                <div><strong>{tech.name}</strong><small>{tech.type}</small></div>
                <span className="tech-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>

          <div className="tech-bottom-note">
            <CheckCircle2 size={17} />
            <p>
              Kami juga dapat menggunakan teknologi lain yang relevan,
              termasuk platform no-code dan low-code seperti WordPress,
              Shopify, serta solusi cloud pihak ketiga.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DEVELOPMENT METHOD ================= */}

      <section className="comparison-section section-padding" id="development-method">
        <div className="app-container">

          <div className="center-heading">
            <span className="section-kicker">DEVELOPMENT APPROACH</span>
            <h2 className="section-title">
              Memilih Pendekatan
              <span> yang Tepat.</span>
            </h2>
            <p className="section-subtitle">
              Kami membantu menentukan metode pengembangan sesuai
              kebutuhan teknis, target pengguna, dan anggaran.
            </p>
          </div>

          <div className="approach-grid">
            {developmentOptions.map((option) => {
              const Icon = option.icon
              return (
                <article
                  className={`approach-card ${option.recommended ? "approach-featured" : ""}`}
                  key={option.name}
                >
                  {option.recommended && <div className="approach-badge">FLEXIBLE CHOICE</div>}
                  <div className="approach-icon"><Icon size={25} /></div>
                  <h3>{option.name}</h3>
                  <p className="approach-subtitle">{option.subtitle}</p>

                  <div className="approach-details">
                    <div><span>Android</span><strong>{option.android}</strong></div>
                    <div><span>iOS</span><strong>{option.ios}</strong></div>
                    <div><span>Performance</span><strong>{option.performance}</strong></div>
                    <div><span>Biaya relatif</span><strong>{option.cost}</strong></div>
                    <div><span>Device access</span><strong>{option.access}</strong></div>
                  </div>

                  <div className="approach-suitable">
                    <small>RECOMMENDED FOR</small>
                    <p>{option.suitable}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="comparison-disclaimer">
            <InfoIcon />
            <p>
              Performa, biaya, dan timeline sangat bergantung pada
              implementasi, kompleksitas fitur, kualitas tim, dan
              kebutuhan perangkat. Perbandingan ini merupakan panduan
              umum, bukan jaminan hasil atau estimasi waktu.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SCOPE ================= */}

      <section className="scope-section section-padding">
        <div className="app-container">

          <div className="scope-heading">
            <span className="section-kicker">COMPLETE DEVELOPMENT SERVICE</span>
            <h2 className="section-title">
              Bukan Hanya Coding.
              <span> Solusi Menyeluruh.</span>
            </h2>
            <p className="section-subtitle">
              Pengembangan aplikasi melibatkan berbagai komponen.
              Kami membantu mengintegrasikan kebutuhan teknis
              dalam satu proses proyek yang terstruktur.
            </p>
          </div>

          <div className="scope-grid">

            <div className="scope-item">
              <div className="scope-icon"><Search /></div>
              <div><h3>Discovery & Requirement</h3><p>Analisis kebutuhan, spesifikasi fitur, user flow, dan ruang lingkup proyek.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><Palette /></div>
              <div><h3>UI/UX Development</h3><p>Wireframe, prototype, design system, dan tampilan responsif.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><Code2 /></div>
              <div><h3>Frontend Development</h3><p>Implementasi antarmuka mobile, desktop, dan web.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><Server /></div>
              <div><h3>Backend & API</h3><p>Server-side logic, API, autentikasi, dan integrasi sistem.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><Database /></div>
              <div><h3>Database Engineering</h3><p>Perancangan database relasional, NoSQL, dan cloud database.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><BrainCircuit /></div>
              <div><h3>AI & Automation</h3><p>Integrasi chatbot, AI assistant, analitik, dan otomatisasi.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><LockKeyhole /></div>
              <div><h3>Security & Authentication</h3><p>Role management, validasi, autentikasi, dan kontrol akses.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><Cloud /></div>
              <div><h3>Cloud & Infrastructure</h3><p>Server, hosting, deployment, konfigurasi, dan monitoring.</p></div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><PackageCheck /></div>
              <div><h3>Testing & Deployment</h3><p>QA, build aplikasi, persiapan publikasi, dan dokumentasi.</p></div>
            </div>

          </div>

          <div className="scope-footnote">
            <span><Check size={16} /> Modular Development</span>
            <span><Check size={16} /> Clear Project Scope</span>
            <span><Check size={16} /> Documented Deliverables</span>
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}

      <section className="industry-section section-padding">
        <div className="app-container">

          <div className="section-top">
            <div>
              <span className="section-kicker">WHO WE SERVE</span>
              <h2 className="section-title">
                Solusi untuk Berbagai
                <span> Industri.</span>
              </h2>
              <p className="section-subtitle">
                Teknologi yang tepat untuk kebutuhan bisnis dan organisasi
                dengan karakteristik yang berbeda.
              </p>
            </div>
          </div>

          <div className="industry-grid">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div className="industry-card" key={industry.title}>
                  <span className="industry-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="industry-icon"><Icon size={24} /></div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <ArrowUpRight className="industry-arrow" size={18} />
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="process-section section-padding" id="process">
        <div className="app-container">

          <div className="process-intro">
            <span className="section-kicker light-kicker">OUR WORKFLOW</span>
            <h2>
              Dari Ide Menjadi
              <span> Produk Digital.</span>
            </h2>
            <p>
              Proses pengembangan dilakukan secara bertahap agar
              kebutuhan, ruang lingkup, dan hasil pekerjaan lebih terarah.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div className="process-item" key={step.number}>
                  <div className="process-number">{step.number}</div>
                  <div className="process-icon"><Icon size={23} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index !== processSteps.length - 1 && <div className="process-connector" />}
                </div>
              )
            })}
          </div>

          <div className="process-footer">
            <div><span className="live-dot" /> STRUCTURED DEVELOPMENT</div>
            <span>PLAN → DESIGN → BUILD → TEST → DEPLOY → MAINTAIN</span>
          </div>

        </div>
      </section>

      {/* ================= PRICING ================= */}

      <section className="pricing-section section-padding" id="pricing">
        <div className="app-container">

          <div className="center-heading">
            <span className="section-kicker">PROJECT INVESTMENT</span>
            <h2 className="section-title">
              Investasi Teknologi
              <span> Sesuai Kebutuhan.</span>
            </h2>
            <p className="section-subtitle">
              Setiap aplikasi memiliki ruang lingkup yang berbeda.
              Karena itu, penawaran disusun berdasarkan kebutuhan
              dan spesifikasi proyek Anda.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article
                className={`pricing-card ${plan.recommended ? "pricing-featured" : ""}`}
                key={plan.title}
              >
                {plan.recommended && <div className="pricing-badge">BUSINESS CHOICE</div>}
                <span className="pricing-subtitle">{plan.subtitle}</span>
                <h3>{plan.title}</h3>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-description">{plan.description}</p>
                <div className="pricing-divider" />
                <span className="pricing-feature-title">PROJECT SCOPE</span>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><CheckCircle2 size={16} /> {feature}</li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Halo HINAI Tech, saya ingin konsultasi paket ${plan.title} untuk pembuatan aplikasi.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.recommended ? "pricing-button pricing-button-gold" : "pricing-button"}
                >
                  Diskusikan Paket <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>

          <div className="pricing-note">
            <LockKeyhole size={17} />
            <p>
              Harga final ditentukan melalui analisis fitur, platform,
              desain, backend, infrastruktur, integrasi, dan kebutuhan
              maintenance. Biaya layanan pihak ketiga seperti hosting,
              domain, akun developer, dan API berbayar dapat dihitung
              terpisah apabila diperlukan.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}

      <section className="portfolio-section section-padding" id="portfolio">
        <div className="app-container">

          <div className="section-top">
            <div>
              <span className="section-kicker">SELECTED DIGITAL SOLUTIONS</span>
              <h2 className="section-title">
                Ide yang Diterjemahkan
                <span> Menjadi Teknologi.</span>
              </h2>
              <p className="section-subtitle">
                Contoh jenis solusi digital yang dapat dikembangkan
                melalui layanan HINAI Tech.
              </p>
            </div>
            <a href="/portfolio" className="section-link">
              Lihat portofolio <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="portfolio-grid">
            {projectExamples.map((project, index) => {
              const Icon = project.icon
              return (
                <article className="portfolio-card" key={project.name}>
                  <div className={`portfolio-visual portfolio-visual-${index + 1}`}>
                    <div className="portfolio-window">
                      <div className="portfolio-window-header">
                        <span>HINAI TECH / DIGITAL PRODUCT</span>
                        <span>0{index + 1}</span>
                      </div>
                      <div className="portfolio-artwork" style={{ color: project.color }}>
                        <div className="portfolio-art-orbit" />
                        <div className="portfolio-art-circle"><Icon size={56} /></div>
                        <div className="portfolio-art-small"><Sparkles size={19} /></div>
                      </div>
                      <div className="portfolio-visual-footer">
                        <span>{project.category.toUpperCase()}</span>
                        <span>CASE / STUDY</span>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-card-content">
                    <span>{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag) => <i key={tag}>{tag}</i>)}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="portfolio-disclaimer">
            <Sparkles size={16} />
            <span>
              Kartu di atas merupakan ilustrasi kategori solusi dan
              bukan klaim bahwa seluruhnya merupakan proyek klien yang
              telah selesai dikerjakan.
            </span>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section section-padding" id="faq">
        <div className="app-container faq-layout">

          <div className="faq-intro">
            <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">
              Pertanyaan yang
              <span> Sering Diajukan.</span>
            </h2>
            <p>
              Temukan informasi mengenai layanan, teknologi, biaya,
              proses, dan pengembangan aplikasi bersama HINAI Tech.
            </p>

            <div className="faq-help-card">
              <div className="faq-help-icon"><MessageCircle size={23} /></div>
              <div>
                <strong>Masih punya pertanyaan?</strong>
                <p>Tim kami siap membantu mendiskusikan kebutuhan Anda.</p>
                <a
                  href={whatsappLink("Halo HINAI Tech, saya memiliki beberapa pertanyaan mengenai layanan pembuatan aplikasi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi kami <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeFaq === index ? "faq-active" : ""}`}
                key={faq.q}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span><i>{String(index + 1).padStart(2, "0")}</i>{faq.q}</span>
                  <span className="faq-toggle">
                    {activeFaq === index ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="final-cta-section">
        <div className="cta-orb cta-orb-one" />
        <div className="cta-orb cta-orb-two" />

        <div className="app-container final-cta-content">
          <div className="cta-eyebrow"><span /> YOUR IDEA. OUR TECHNOLOGY.</div>
          <h2>
            Saatnya Mewujudkan
            <span> Ide Digital Anda.</span>
          </h2>
          <p>
            Ceritakan ide dan kebutuhan Anda. Mari diskusikan bagaimana
            aplikasi custom dapat membantu mengembangkan bisnis,
            meningkatkan produktivitas, dan menghadirkan peluang baru.
          </p>

          <div className="final-cta-actions">
            <a
              href={whatsappLink("Halo HINAI Tech! Saya ingin memulai konsultasi pembuatan aplikasi Android, iOS, atau Desktop. Saya ingin mendiskusikan ide dan kebutuhan proyek saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold cta-main-button"
            >
              <MessageCircle size={19} /> Konsultasi via WhatsApp <ArrowUpRight size={17} />
            </a>
            <a href="#services" className="cta-secondary">Jelajahi Layanan</a>
          </div>

          <div className="cta-bottom">
            <span><CheckCircle2 size={15} /> Konsultasi awal</span>
            <span><CheckCircle2 size={15} /> Analisis kebutuhan</span>
            <span><CheckCircle2 size={15} /> Penawaran sesuai scope</span>
          </div>
        </div>
      </section>

      {/* ================= LOCAL PAGE STYLES ================= */}

      <style jsx global>{`
        /* ======================================
           HINAI APPLICATION LANDING PAGE
           ALL STYLES LOCAL TO THIS PAGE
        ====================================== */

        .app-page {
          --hinai-navy: #0b1427;
          --hinai-deep: #080e1b;
          --hinai-blue: #142644;
          --hinai-gold: #d7b36a;
          --hinai-gold-light: #f0d69c;
          --hinai-text: #172033;
          --hinai-muted: #687386;
          --hinai-border: #e8ebf0;
          --hinai-white: #ffffff;
          --hinai-green: #169b76;
          background: #ffffff;
          color: var(--hinai-text);
          font-family: var(--font-geist-sans), Arial, sans-serif;
          overflow: clip;
          width: 100%;
          position: relative;
          isolation: isolate;
        }

        .app-page *,
        .app-page *::before,
        .app-page *::after {
          box-sizing: border-box;
        }

        .app-page a {
          text-decoration: none;
        }

        .app-container {
          width: min(1200px, calc(100% - 64px));
          margin-inline: auto;
        }

        .section-padding {
          padding: 108px 0;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #a17d3c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: clamp(32px, 4.3vw, 53px);
          font-weight: 750;
          line-height: 1.13;
          letter-spacing: -2.2px;
          color: var(--hinai-navy);
          margin: 0;
        }

        .section-title span,
        .section-heading h2 span {
          color: #b18b4b;
        }

        .section-subtitle {
          color: #737e90;
          font-size: 14px;
          line-height: 1.9;
          max-width: 630px;
          margin-top: 17px;
        }

        .light-kicker {
          color: var(--hinai-gold-light);
        }

        /* NAVIGATION */

        .app-header {
          position: absolute;
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          height: 82px;
          background: rgba(9, 17, 32, .35);
          border-bottom: 1px solid rgba(255,255,255,.08);
          transition: .3s ease;
        }

        .app-header.header-scrolled {
          position: fixed;
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #e9edf2;
          box-shadow: 0 8px 30px rgba(20,35,55,.07);
        }

        .nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
        }

        .brand-symbol {
          width: 39px;
          height: 39px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          position: relative;
          background: linear-gradient(145deg,#e8c982,#aa8140);
          box-shadow: 0 5px 16px rgba(215,179,106,.22);
        }

        .brand-symbol span {
          color: #101a2c;
          font-size: 23px;
          font-weight: 900;
          font-style: italic;
        }

        .brand-symbol i {
          position: absolute;
          width: 8px;
          height: 8px;
          border: 2px solid #101a2c;
          border-radius: 50%;
          top: 6px;
          right: 5px;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .brand-text strong {
          color: #fff;
          font-size: 17px;
          font-weight: 850;
          letter-spacing: .8px;
        }

        .brand-text strong span {
          color: var(--hinai-gold);
        }

        .brand-text small {
          color: rgba(255,255,255,.57);
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .header-scrolled .brand-text strong {
          color: #101b30;
        }

        .header-scrolled .brand-text small {
          color: #8993a3;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .desktop-nav a {
          color: rgba(255,255,255,.77);
          font-size: 12px;
          font-weight: 550;
          transition: color .2s;
        }

        .desktop-nav a:hover {
          color: var(--hinai-gold-light);
        }

        .header-scrolled .desktop-nav a {
          color: #596579;
        }

        .header-scrolled .desktop-nav a:hover {
          color: #a17d3c;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-cta {
          background: var(--hinai-gold);
          color: #121c2d;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 17px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          transition: .25s;
        }

        .nav-cta:hover {
          background: #f0d69c;
          transform: translateY(-2px);
        }

        .mobile-menu-btn {
          display: none;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
        }

        .header-scrolled .mobile-menu-btn {
          color: var(--hinai-navy);
        }

        /* HERO */

        .hero-section {
          background:
            radial-gradient(ellipse at 75% 45%,rgba(37,74,126,.33),transparent 37%),
            linear-gradient(115deg,#080f1e 0%,#0d1a31 55%,#101e37 100%);
          color: white;
          position: relative;
          padding-top: 82px;
          overflow: hidden;
          min-height: 730px;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to bottom,black,transparent 90%);
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: .13;
          pointer-events: none;
        }

        .hero-glow-one {
          background: #d7b36a;
          top: 130px;
          left: -200px;
        }

        .hero-glow-two {
          background: #247bc7;
          right: -150px;
          bottom: 0;
        }

        .hero-layout {
          min-height: 625px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 30px;
          position: relative;
          z-index: 2;
          padding-top: 60px;
          padding-bottom: 45px;
        }

        .hero-content {
          padding: 25px 0 35px;
          animation: hero-enter .8s ease both;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #d7bc83;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          padding: 9px 13px;
          background: rgba(215,179,106,.08);
          border: 1px solid rgba(215,179,106,.25);
          border-radius: 3px;
          margin-bottom: 25px;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #54d6a6;
          box-shadow: 0 0 12px #54d6a6;
          display: inline-block;
          animation: live-pulse 2s infinite;
        }

        .hero-content h1 {
          color: white;
          font-size: clamp(43px,5.2vw,68px);
          line-height: 1.09;
          letter-spacing: -3.4px;
          font-weight: 800;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .hero-title-gradient {
          background: linear-gradient(100deg,#f1dca9,#c79a4e 60%,#f2d69c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-title-white {
          color: white;
        }

        .hero-description {
          max-width: 520px;
          font-size: 14px;
          line-height: 1.95;
          color: #aebbd0;
          margin: 25px 0 28px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .btn-gold {
          background: linear-gradient(120deg,#f0d69c,#d3aa60);
          color: #172033;
          padding: 15px 21px;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 12px;
          font-weight: 800;
          box-shadow: 0 8px 25px rgba(215,179,106,.15);
          transition: transform .25s, box-shadow .25s;
        }

        .btn-gold:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(215,179,106,.3);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,255,255,.2);
          color: #e3e9f2;
          padding: 14px 19px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 650;
          transition: .25s;
        }

        .btn-outline:hover {
          border-color: var(--hinai-gold);
          color: var(--hinai-gold-light);
          background: rgba(215,179,106,.06);
        }


/* =========================================
   HINAI TECH - INTRO SECTION FORCE FIX
========================================= */

.intro-section {
  display: block !important;
  position: relative !important;
  background: #ffffff !important;
  color: #172033 !important;
  opacity: 1 !important;
  visibility: visible !important;
  overflow: hidden;
  isolation: isolate;
}

/* Pastikan wrapper tidak tersembunyi */
.intro-section #intro-reveal {
  display: grid !important;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: clamp(35px, 7vw, 100px);

  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

/* Semua elemen heading */
.intro-section .intro-heading,
.intro-section .intro-heading * {
  visibility: visible !important;
}

/* Label */
.intro-section .section-kicker {
  display: inline-block !important;
  color: #a47725 !important;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
  margin-bottom: 20px;
}

/* Judul */
.intro-section .intro-heading h2 {
  color: #111827 !important;
  font-size: clamp(34px, 4.2vw, 54px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1.8px;
  margin: 0;
  opacity: 1 !important;
  visibility: visible !important;
}

/* Judul highlight */
.intro-section .intro-heading h2 span {
  display: block;
  color: #b18435 !important;
  margin-top: 5px;
}

/* Konten deskripsi */
.intro-section .intro-copy {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

/* Paragraf */
.intro-section .intro-copy p {
  color: #566174 !important;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.95;
  margin: 0 0 18px;
  opacity: 1 !important;
  visibility: visible !important;
}

/* Link */
.intro-section .intro-copy .text-link {
  display: inline-flex !important;
  align-items: center;
  gap: 9px;
  color: #9a7028 !important;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  opacity: 1 !important;
  visibility: visible !important;
}

.intro-section .intro-copy .text-link:hover {
  color: #684916 !important;
}

/* Pastikan elemen anak tidak ikut tersembunyi */
.intro-section #intro-reveal.revealed,
.intro-section #intro-reveal.revealed * {
  visibility: visible !important;
}

/* Responsive */
@media (max-width: 768px) {
  .intro-section #intro-reveal {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .intro-section .intro-heading h2 {
    font-size: clamp(32px, 8vw, 43px);
    letter-spacing: -1.2px;
  }

  .intro-section .intro-copy p {
    font-size: 14px;
  }
}

        .hero-trust {
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .trust-icon {
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(215,179,106,.3);
          color: var(--hinai-gold);
          border-radius: 8px;
        }

        .trust-item div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .trust-item strong {
          font-size: 10px;
          color: #e8edf6;
        }

        .trust-item small {
          font-size: 9px;
          color: #8c9ab0;
        }

        .trust-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,.15);
        }

        /* 3D HERO VISUAL */

        .hero-visual {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          animation: hero-enter .9s .15s ease both;
        }

        .visual-orbit {
          position: absolute;
          border: 1px solid rgba(215,179,106,.15);
          border-radius: 50%;
          transform: rotateX(67deg) rotateZ(-20deg);
          pointer-events: none;
        }

        .orbit-one {
          width: 490px;
          height: 490px;
          animation: orbit-rotate 30s linear infinite;
        }

        .orbit-two {
          width: 380px;
          height: 380px;
          border-style: dashed;
          border-color: rgba(107,163,219,.2);
          animation: orbit-rotate 40s linear infinite reverse;
        }

        .visual-label {
          position: absolute;
          color: rgba(255,255,255,.5);
          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 800;
          z-index: 5;
        }

        .visual-label-top {
          top: 12px;
          right: 15px;
          display: flex;
          gap: 9px;
          align-items: center;
        }

        .visual-label-dot {
          width: 6px;
          height: 6px;
          background: var(--hinai-gold);
          border-radius: 50%;
        }

        .device-stage {
          position: relative;
          width: 100%;
          height: 430px;
          transform-style: preserve-3d;
          transform: rotateY(-9deg);
        }

        .device-desktop {
          position: absolute;
          width: 365px;
          left: 50%;
          top: 50%;
          transform: translate(-47%,-50%) translateZ(-40px) rotateY(-8deg);
          animation: desktop-float 6s ease-in-out infinite;
        }

        .desktop-frame {
          height: 255px;
          padding: 7px;
          background: linear-gradient(140deg,#7d8a9e,#29354a 25%,#101a2c 80%);
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 11px;
          box-shadow: 0 30px 70px rgba(0,0,0,.5), inset 0 1px 1px rgba(255,255,255,.3);
        }

        .desktop-topbar {
          height: 24px;
          background: #131f34;
          border-radius: 6px 6px 0 0;
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 12px;
          font-size: 7px;
          color: #a9b7cc;
        }

        .window-dots {
          display: flex;
          gap: 4px;
        }

        .window-dots i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d9a46c;
        }

        .window-dots i:nth-child(2) { background: #e8c76b; }
        .window-dots i:nth-child(3) { background: #67c99c; }

        .desktop-status {
          margin-left: auto;
          color: #69d5a2;
        }

        .desktop-content {
          height: 215px;
          display: flex;
          background: #f5f7fb;
          border-radius: 0 0 5px 5px;
          overflow: hidden;
        }

        .desktop-sidebar {
          width: 38px;
          background: #14243d;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 17px;
          padding: 10px 0;
        }

        .mini-logo {
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          border-radius: 5px;
          background: #d7b36a;
          color: #111c30;
          font-size: 11px;
          font-weight: 900;
        }

        .desktop-sidebar > i {
          width: 11px;
          height: 11px;
          border: 1px solid #8496ad;
          border-radius: 3px;
        }

        .desktop-main {
          flex: 1;
          padding: 13px;
        }

        .desktop-welcome {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .desktop-welcome div:first-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .desktop-welcome small {
          color: #8b96a7;
          font-size: 6px;
        }

        .desktop-welcome strong {
          color: #17253b;
          font-size: 12px;
        }

        .desktop-avatar {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          background: #d8bd88;
          display: grid;
          place-items: center;
          font-size: 10px;
          font-weight: 900;
        }

        .desktop-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
          margin-top: 13px;
        }

        .desktop-stats > div {
          padding: 9px;
          background: white;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,.03);
        }

        .desktop-stats small {
          font-size: 6px;
          color: #8b96a7;
        }

        .desktop-stats strong {
          font-size: 11px;
          color: #192b42;
        }

        .desktop-stats i {
          color: #169b76;
          font-size: 6px;
          font-style: normal;
        }

        .desktop-chart {
          margin-top: 8px;
          background: white;
          padding: 9px;
          border-radius: 5px;
          height: 77px;
        }

        .chart-heading {
          display: flex;
          justify-content: space-between;
        }

        .chart-heading strong { font-size: 7px; color: #1a2940; }
        .chart-heading small { font-size: 6px; color: #8b96a7; }

        .chart-bars {
          height: 42px;
          display: flex;
          align-items: flex-end;
          gap: 7px;
          margin-top: 6px;
        }

        .chart-bars i {
          flex: 1;
          background: linear-gradient(to top,#c5a05f,#e9d7ae);
          border-radius: 3px 3px 0 0;
        }

        .desktop-stand {
          width: 85px;
          height: 27px;
          background: linear-gradient(90deg,#24344b,#78859a,#24344b);
          margin: auto;
          clip-path: polygon(24% 0,76% 0,90% 85%,100% 100%,0 100%,10% 85%);
        }

        .device-phone {
          position: absolute;
          width: 158px;
          height: 325px;
          border-radius: 27px;
          padding: 5px;
          background: linear-gradient(135deg,#8793a5,#172438 35%,#070d19 85%);
          border: 1px solid rgba(255,255,255,.35);
          box-shadow: 0 35px 70px rgba(0,0,0,.55), inset 0 1px 1px rgba(255,255,255,.35);
          transform-style: preserve-3d;
        }

        .phone-back {
          right: 0;
          top: 52px;
          transform: rotateY(-14deg) rotateZ(9deg) translateZ(35px);
          animation: phone-back-float 6s ease-in-out infinite;
        }

        .phone-front {
          left: 15px;
          bottom: 25px;
          transform: rotateY(12deg) rotateZ(-9deg) translateZ(80px);
          animation: phone-front-float 5s ease-in-out infinite;
        }

        .phone-frame {
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: #f5f7fb;
        }

        .phone-camera {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 45px;
          height: 11px;
          border-radius: 12px;
          background: #090e19;
          z-index: 3;
        }

        .phone-screen {
          height: 100%;
          padding: 24px 11px 10px;
          position: relative;
          overflow: hidden;
        }

        .phone-screen-light {
          background: #f7f8fc;
          color: #1b2a40;
        }

        .phone-status {
          display: flex;
          justify-content: space-between;
          font-size: 7px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .phone-header {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }

        .phone-greeting {
          font-size: 7px;
          color: #8590a2;
          margin-top: 10px;
        }

        .phone-feature {
          height: 91px;
          background: linear-gradient(130deg,#172b48,#25466a);
          color: white;
          border-radius: 10px;
          padding: 10px;
          margin-top: 10px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow: hidden;
        }

        .phone-feature small { font-size: 5px; color: #d7b36a; }
        .phone-feature strong { font-size: 12px; }
        .phone-feature > span { font-size: 6px; color: #c2ccdc; }

        .phone-feature-circle {
          position: absolute;
          width: 66px;
          height: 66px;
          right: -10px;
          bottom: -20px;
          border: 1px solid rgba(215,179,106,.5);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #e4c98e;
          font-size: 22px;
        }

        .phone-section-title {
          font-size: 7px;
          font-weight: 800;
          margin-top: 13px;
        }

        .phone-app-grid {
          display: flex;
          justify-content: space-between;
          margin-top: 9px;
        }

        .phone-app-grid i {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          background: white;
          border: 1px solid #e6eaf1;
          border-radius: 7px;
          color: #a9894d;
          font-size: 12px;
          font-style: normal;
        }

        .phone-list {
          height: 24px;
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 6px;
        }

        .phone-list i {
          width: 17px;
          height: 17px;
          border-radius: 5px;
          background: #d9e1ed;
        }

        .phone-list span {
          width: 50px;
          height: 5px;
          border-radius: 5px;
          background: #dfe4ed;
        }

        .phone-list b {
          margin-left: auto;
          width: 20px;
          height: 5px;
          background: #b9d9cb;
          border-radius: 5px;
        }

        .phone-bottom {
          display: flex;
          justify-content: space-around;
          padding-top: 8px;
          margin-top: 6px;
          border-top: 1px solid #e5e9f0;
        }

        .phone-bottom i {
          width: 10px;
          height: 10px;
          border-radius: 3px;
          background: #d7b36a;
        }

        .phone-screen-dark {
          background: linear-gradient(150deg,#132540,#0a1427);
          color: white;
        }

        .mobile-app-brand {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 5px 0 22px;
        }

        .mobile-app-logo {
          width: 24px;
          height: 24px;
          border-radius: 7px;
          background: #d7b36a;
          color: #10203a;
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: 900;
        }

        .mobile-app-brand div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .mobile-app-brand strong { font-size: 8px; letter-spacing: 1px; }
        .mobile-app-brand small { font-size: 5px; color: #9daec5; letter-spacing: .8px; }

        .mobile-app-title {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -.8px;
        }

        .mobile-app-description {
          color: #aab9ce;
          font-size: 6px;
          margin-top: 7px;
        }

        .mobile-app-card {
          background: linear-gradient(130deg,#263e60,#1a2d48);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 9px;
          margin-top: 17px;
          padding: 11px;
        }

        .mobile-app-card-top {
          display: flex;
          justify-content: space-between;
          font-size: 5px;
          color: #b8c7d9;
        }

        .mobile-app-card-value {
          font-size: 15px;
          font-weight: 800;
          margin-top: 10px;
        }

        .mobile-app-card-growth {
          font-size: 6px;
          color: #79dbad;
          margin-top: 3px;
        }

        .mobile-app-mini-chart {
          height: 30px;
          display: flex;
          align-items: flex-end;
          gap: 7px;
          margin-top: 9px;
        }

        .mobile-app-mini-chart i {
          flex: 1;
          background: linear-gradient(to top,#b68e49,#ead39e);
          border-radius: 3px 3px 0 0;
        }

        .mobile-app-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
        }

        .mobile-app-actions span {
          width: 33px;
          height: 33px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.05);
          border-radius: 8px;
          display: grid;
          place-items: center;
          color: #dfc184;
          font-size: 13px;
        }

        .mobile-app-footer {
          font-size: 5px;
          color: #8295b0;
          text-align: center;
          margin-top: 17px;
          letter-spacing: 1px;
        }

        .floating-card {
          position: absolute;
          z-index: 6;
          background: rgba(255,255,255,.95);
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 15px 40px rgba(0,0,0,.2);
          border-radius: 10px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #1b2a40;
          backdrop-filter: blur(12px);
        }

        .floating-ai {
          top: 90px;
          left: -5px;
          animation: float-card 5s ease-in-out infinite;
        }

        .floating-code {
          bottom: 40px;
          right: -10px;
          animation: float-card 6s ease-in-out infinite reverse;
        }

        .floating-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #f2e8d4;
          color: #9a763d;
          display: grid;
          place-items: center;
        }

        .floating-card div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .floating-card strong { font-size: 9px; }
        .floating-card small { font-size: 7px; color: #8490a0; }

        .floating-check {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #ddf5e9;
          color: #169b76;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
        }

        .orb-gold {
          width: 15px;
          height: 15px;
          background: radial-gradient(circle at 30% 30%,#fff2c7,#bb914e);
          top: 40%;
          right: 4%;
          box-shadow: 0 0 25px rgba(215,179,106,.5);
          animation: orb-float 4s infinite;
        }

        .orb-blue {
          width: 9px;
          height: 9px;
          background: #64b8e8;
          bottom: 17%;
          left: 5%;
          box-shadow: 0 0 20px #64b8e8;
          animation: orb-float 5s infinite reverse;
        }

        .visual-caption {
          position: absolute;
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          color: rgba(255,255,255,.35);
          font-size: 7px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .hero-bottom {
          border-top: 1px solid rgba(255,255,255,.09);
          position: relative;
          z-index: 3;
        }

        .hero-bottom-inner {
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .hero-bottom-inner > span {
          font-size: 9px;
          font-weight: 800;
          color: #8291a7;
          letter-spacing: 2px;
        }

        .hero-platforms {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .hero-platforms span {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #c0cad8;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .7px;
        }

        .hero-platforms svg { color: var(--hinai-gold); }

        /* INTRO */

        .intro-section {
          background: #fff;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .section-heading h2 {
          font-size: clamp(34px,4vw,48px);
          letter-spacing: -2px;
          line-height: 1.17;
          margin: 0;
          color: var(--hinai-navy);
        }

        .intro-copy p {
          color: #667287;
          font-size: 14px;
          line-height: 2;
          margin: 0 0 15px;
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #99763f;
          font-size: 12px;
          font-weight: 750;
          margin-top: 8px;
        }

        /* SERVICES */

        .services-section {
          background: #f7f8fa;
        }

        .section-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 48px;
        }

        .section-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #9a783f;
          font-size: 11px;
          font-weight: 800;
          padding-bottom: 8px;
          border-bottom: 1px solid #d7b36a;
          white-space: nowrap;
          transition: .2s;
        }

        .section-link:hover { gap: 15px; }

        
/* =========================================
   SERVICES GRID — HINAI TECH
   FIX: TEXT VISIBILITY + COLOR + REVEAL
========================================= */

.service-grid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  width: 100%;
  position: relative;
  opacity: 1 !important;
  visibility: visible !important;
}

/* SERVICE CARD */
.service-card {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;

  min-width: 0;
  padding: 31px;

  background: #ffffff !important;
  color: #263449 !important;

  border: 1px solid #ebedf1;
  border-radius: 10px;

  overflow: hidden;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0);

  transition:
    transform .3s ease,
    border-color .3s ease,
    box-shadow .3s ease;
}

/* GARIS AKSEN BAWAH */
.service-card::after {
  content: "";
  position: absolute;
  height: 3px;
  width: 0;
  left: 0;
  bottom: 0;
  background: var(--hinai-gold, #d7b36a);
  transition: width .4s ease;
  pointer-events: none;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: #dfc58f;
  box-shadow: 0 20px 45px rgba(21,36,59,.07);
}

.service-card:hover::after {
  width: 100%;
}

/* TOP CARD */
.service-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.service-number {
  color: #a18146 !important;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

/* SERVICE ICON */
.service-icon {
  width: 49px;
  height: 49px;
  display: grid;
  place-items: center;
  border-radius: 11px;

  background: #f6f0e5 !important;
  color: #a18146 !important;

  margin-right: auto;
  margin-left: 16px;

  transition: .3s ease;
}

.service-icon svg {
  color: inherit !important;
  stroke: currentColor;
}

.service-card:hover .service-icon {
  transform: rotateY(180deg);
  background: #172943 !important;
  color: #f0d69c !important;
}

/* ARROW */
.service-arrow {
  color: #8b96a7 !important;
  transition: .3s ease;
}

.service-arrow svg {
  color: inherit !important;
}

.service-card:hover .service-arrow {
  color: #ad8645 !important;
  transform: translate(3px, -3px);
}

/* CARD TITLE */
.service-card h3 {
  display: block;
  color: #14223a !important;

  font-size: 21px;
  line-height: 1.35;
  letter-spacing: -.5px;
  font-weight: 800;

  margin: 0 0 11px;
  opacity: 1 !important;
  visibility: visible !important;
}

/* CARD DESCRIPTION */
.service-card > p {
  display: block;
  color: #59667a !important;

  font-size: 12px;
  line-height: 1.85;
  font-weight: 400;

  min-height: 45px;
  margin: 0 0 20px;

  opacity: 1 !important;
  visibility: visible !important;
}

/* FEATURES */
.service-card ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 11px;

  padding: 0;
  margin: 0;

  list-style: none;
  opacity: 1 !important;
  visibility: visible !important;
}

.service-card li {
  display: flex;
  align-items: flex-start;
  gap: 7px;

  color: #46546a !important;
  font-size: 10px;
  line-height: 1.6;
  font-weight: 500;

  opacity: 1 !important;
  visibility: visible !important;
}

.service-card li svg {
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  margin-top: 1px;
  color: #a17d40 !important;
  stroke: currentColor;
}

/* TECHNOLOGY TAGS */
.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 23px;
}

.service-tags span {
  display: inline-flex;
  align-items: center;

  font-style: normal;
  font-size: 9px;
  font-weight: 600;

  color: #45536a !important;
  background: #f0f2f5 !important;

  padding: 7px 10px;
  border: 1px solid #e8ebef;
  border-radius: 4px;

  opacity: 1 !important;
  visibility: visible !important;
}

/* BOTTOM LINK */
.service-bottom-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  color: #98743c !important;
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;

  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #edf0f3;

  opacity: 1 !important;
  visibility: visible !important;
}

.service-bottom-link svg {
  color: #98743c !important;
  flex-shrink: 0;
}

.service-bottom-link:hover {
  color: #684916 !important;
}

/* =========================================
   SERVICE REVEAL CONFLICT FIX
   Hanya berlaku pada service-grid
========================================= */

/* Jika service-grid memakai data-reveal */
.service-grid[data-reveal],
.service-grid[data-reveal].revealed {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

/* Jika masing-masing kartu memakai data-reveal */
.service-grid .service-card[data-reveal],
.service-grid .service-card[data-reveal].revealed {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

/* Pastikan isi kartu tidak ikut tersembunyi */
.service-grid .service-card *,
.service-grid .service-card *::before,
.service-grid .service-card *::after {
  visibility: visible;
}

/* TABLET */
@media (max-width: 850px) {
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .service-card {
    padding: 25px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .service-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 15px;
  }

  .service-card {
    padding: 23px;
  }

  .service-card h3 {
    font-size: 19px;
  }

  .service-card > p {
    font-size: 12px;
    min-height: auto;
  }

  .service-card ul {
    gap: 12px 8px;
  }

  .service-card li {
    font-size: 10px;
  }

  .service-tags {
    margin-top: 18px;
  }
}


        /* WHY HINAI */

        .why-section {
          background:
            radial-gradient(circle at 85% 15%,rgba(57,94,139,.2),transparent 30%),
            linear-gradient(120deg,#091324,#10213a);
          color: white;
        }

        .why-layout {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 70px;
          align-items: center;
        }

        .why-left h2,
        .process-intro h2 {
          color: white;
          font-size: clamp(35px,4vw,51px);
          line-height: 1.15;
          letter-spacing: -2px;
          margin: 0;
        }

        .why-left h2 span,
        .process-intro h2 span {
          color: var(--hinai-gold);
          display: block;
        }

        .why-left > p,
        .process-intro > p {
          color: #a8b6ca;
          font-size: 13px;
          line-height: 2;
          margin: 22px 0 28px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
        }

        .why-card {
          padding: 23px;
          min-height: 185px;
          border: 1px solid rgba(255,255,255,.11);
          background: rgba(255,255,255,.035);
          border-radius: 8px;
          transition: .3s;
        }

        .why-card:hover {
          background: rgba(255,255,255,.075);
          border-color: rgba(215,179,106,.4);
          transform: translateY(-4px);
        }

        .why-card > span {
          display: grid;
          place-items: center;
          width: 39px;
          height: 39px;
          border-radius: 8px;
          background: rgba(215,179,106,.13);
          color: var(--hinai-gold);
        }

        .why-card h3 {
          font-size: 14px;
          color: #f1f4f9;
          margin: 17px 0 8px;
        }

        .why-card p {
          color: #9aa9be;
          font-size: 10px;
          line-height: 1.8;
          margin: 0;
        }

        .why-card b {
          display: block;
          color: #bca16f;
          font-size: 7px;
          letter-spacing: 1.5px;
          margin-top: 17px;
        }

        /* PLATFORM */

        .platform-section {
          background: #fff;
        }

        .center-heading {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 45px;
        }

        .center-heading .section-subtitle {
          margin-inline: auto;
        }

        .platform-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 34px;
        }

        .platform-filter button {
          padding: 10px 17px;
          border: 1px solid #e5e9ef;
          background: white;
          color: #667287;
          border-radius: 4px;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: .2s;
        }

        .platform-filter button:hover,
        .platform-filter button.filter-active {
          color: #15243b;
          background: #f3ead9;
          border-color: #d8b978;
        }

        .platform-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 18px;
        }

        .platform-card {
          background: #f8f9fb;
          border: 1px solid #edf0f4;
          border-radius: 9px;
          overflow: hidden;
          transition: .3s;
        }

        .platform-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(20,35,55,.07);
        }

        .platform-illustration {
          height: 230px;
          background:
            radial-gradient(circle at 50% 50%,rgba(215,179,106,.16),transparent 55%),
            #111f35;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          perspective: 900px;
        }

        .platform-illustration::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .15;
          background-image: linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);
          background-size: 25px 25px;
        }

        .mini-phone {
          position: absolute;
          width: 95px;
          height: 175px;
          border-radius: 15px;
          padding: 5px;
          background: linear-gradient(130deg,#9ca8b8,#202f43);
          box-shadow: 0 15px 35px rgba(0,0,0,.4);
        }

        .mini-phone-one {
          transform: rotateY(-20deg) rotateZ(-9deg) translateX(-35px) translateZ(30px);
          animation: platform-float 5s infinite;
        }

        .mini-phone-two {
          transform: rotateY(15deg) rotateZ(9deg) translateX(35px) translateZ(-20px);
          animation: platform-float 6s infinite reverse;
        }

        .mini-phone-screen {
          background: white;
          height: 100%;
          border-radius: 11px;
          padding: 15px 7px;
        }

        .dark-mini { background: #152741; }

        .mini-phone-bar {
          width: 30px;
          height: 4px;
          background: #d7b36a;
          border-radius: 5px;
          margin-bottom: 15px;
        }

        .mini-phone-hero {
          height: 37px;
          background: linear-gradient(120deg,#d7b36a,#e9d9b5);
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .mini-phone-row {
          height: 8px;
          border-radius: 3px;
          background: #e8ebf0;
          margin-top: 7px;
        }

        .mini-phone-row.short { width: 65%; }

        .platform-floating {
          position: absolute;
          width: 41px;
          height: 41px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #f0d69c;
          color: #15243a;
          box-shadow: 0 10px 20px rgba(0,0,0,.3);
          z-index: 4;
          animation: float-card 4s infinite;
        }

        .platform-floating-one { right: 20%; top: 25%; }
        .platform-floating-two { right: 16%; bottom: 22%; }
        .platform-floating-three { right: 17%; top: 20%; }
        .platform-floating-four { right: 18%; bottom: 18%; }

        .tablet-frame {
          width: 250px;
          height: 165px;
          padding: 7px;
          border-radius: 13px;
          background: linear-gradient(135deg,#a1acbb,#18263a);
          box-shadow: 0 25px 45px rgba(0,0,0,.45);
          transform: rotateY(-15deg) rotateX(8deg);
          animation: platform-float 5s infinite;
        }

        .tablet-screen {
          height: 100%;
          background: #f8f9fc;
          border-radius: 8px;
          padding: 12px;
        }

        .tablet-top { font-size: 7px; font-weight: 800; color: #20314b; }
        .tablet-boxes { display: flex; gap: 7px; margin-top: 12px; }
        .tablet-boxes i { flex: 1; height: 38px; background: #e9d8b6; border-radius: 4px; }
        .tablet-content-lines i { display: block; height: 5px; width: 90%; background: #e0e5ed; border-radius: 4px; margin-top: 7px; }

        .mini-monitor {
          width: 260px;
          height: 170px;
          padding: 6px;
          background: linear-gradient(135deg,#9ca9b8,#233148);
          border-radius: 10px;
          transform: rotateY(-12deg) rotateX(5deg);
          box-shadow: 0 25px 45px rgba(0,0,0,.4);
          animation: platform-float 5s infinite;
        }

        .mini-monitor-top {
          height: 15px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding-left: 6px;
        }

        .mini-monitor-top i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #e1b86e;
        }

        .mini-monitor-screen {
          height: 139px;
          display: flex;
          background: #f5f7fb;
        }

        .mini-monitor-side { width: 30px; background: #172943; }
        .mini-monitor-body { flex: 1; padding: 12px; }
        .mini-monitor-body > i { display: inline-block; width: 27%; height: 30px; background: #e9d8b6; margin-right: 4%; border-radius: 3px; }
        .mini-monitor-chart { margin-top: 9px; height: 43px; background: linear-gradient(120deg,#d8e4e9,#e8d5ad); border-radius: 4px; }

        .web-window {
          width: 265px;
          height: 165px;
          border-radius: 9px;
          background: white;
          box-shadow: 0 25px 50px rgba(0,0,0,.45);
          overflow: hidden;
          transform: rotateY(10deg) rotateX(5deg);
          animation: platform-float 5s infinite;
        }

        .web-window-top {
          height: 19px;
          background: #e8ecf2;
          display: flex;
          gap: 5px;
          align-items: center;
          padding-left: 9px;
        }

        .web-window-top i { width: 5px; height: 5px; border-radius: 50%; background: #bd9b60; }
        .web-window-body { padding: 15px; }
        .web-window-heading { width: 65%; height: 12px; background: #1d314d; border-radius: 4px; }
        .web-window-grid { display: flex; gap: 8px; margin-top: 15px; }
        .web-window-grid i { flex: 1; height: 45px; border-radius: 5px; background: #ead8b4; }
        .web-window-footer { height: 13px; background: #e8edf2; border-radius: 4px; margin-top: 10px; }

        .platform-content {
          padding: 25px;
        }

        .platform-content > span {
          color: #a18146;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .platform-content h3 {
          font-size: 21px;
          color: #14233a;
          margin: 9px 0;
        }

        .platform-content p {
          color: #768194;
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
          max-width: 450px;
        }

        .platform-tags {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-top: 17px;
        }

        /* TECHNOLOGY */

        .technology-section {
          background: #f5f6f8;
        }

        .technology-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: center;
          margin-bottom: 60px;
        }

        .technology-intro > p {
          color: #6f7b8f;
          font-size: 13px;
          line-height: 2;
          margin-top: 20px;
        }

        .tech-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          background: #f0e8d8;
          color: #82683e;
          border-left: 3px solid #c9a35e;
          border-radius: 3px;
          font-size: 10px;
          line-height: 1.7;
          margin-top: 25px;
        }

        .tech-note svg { flex-shrink: 0; }

        .technology-showcase {
          padding: 25px;
          background: linear-gradient(140deg,#0b1628,#162943);
          border-radius: 10px;
          box-shadow: 0 25px 60px rgba(10,25,47,.13);
          transform: perspective(1000px) rotateY(-3deg);
          transition: .4s;
        }

        .technology-showcase:hover {
          transform: perspective(1000px) rotateY(0deg) translateY(-4px);
        }

        .tech-showcase-header,
        .tech-showcase-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #9eabc0;
          font-size: 8px;
          letter-spacing: 1.3px;
          font-weight: 800;
        }

        .tech-showcase-header > div {
          display: flex;
          gap: 9px;
          align-items: center;
        }

        .tech-categories {
          margin: 25px 0;
          display: grid;
          gap: 9px;
        }

        .tech-category {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.035);
          border-radius: 6px;
          transition: .25s;
        }

        .tech-category:hover {
          background: rgba(255,255,255,.08);
          border-color: rgba(215,179,106,.4);
        }

        .tech-category-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          background: rgba(215,179,106,.13);
          color: #dfc38b;
          border-radius: 7px;
        }

        .tech-category > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tech-category strong { color: #f0f3f8; font-size: 11px; }
        .tech-category small { color: #8999af; font-size: 8px; }
        .tech-count { margin-left: auto; color: #d7b36a; font-size: 10px; font-weight: 800; }

        .tech-showcase-footer {
          border-top: 1px solid rgba(255,255,255,.1);
          padding-top: 17px;
          color: #d7b36a;
        }

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }

        .tech-stack-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px;
          border: 1px solid #e7eaf0;
          background: white;
          border-radius: 6px;
          transition: .25s;
        }

        .tech-stack-item:hover {
          border-color: #d7b36a;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(20,35,55,.04);
        }

        .tech-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .tech-stack-item > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .tech-stack-item strong {
          font-size: 10px;
          color: #29374c;
        }

        .tech-stack-item small {
          font-size: 8px;
          color: #8c96a6;
        }

        .tech-index {
          margin-left: auto;
          font-size: 7px;
          color: #b0b8c4;
        }

        .tech-bottom-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 25px;
          color: #748093;
          font-size: 11px;
          line-height: 1.8;
        }

        .tech-bottom-note svg { color: #a17e45; flex-shrink: 0; }
        .tech-bottom-note p { margin: 0; }

        /* APPROACH */

        .comparison-section { background: #fff; }

        .approach-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 17px;
        }

        .approach-card {
          position: relative;
          border: 1px solid #e9ecf1;
          padding: 29px;
          border-radius: 8px;
          transition: .3s;
        }

        .approach-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(20,35,55,.06);
        }

        .approach-featured {
          border: 1px solid #d9b66f;
          background: linear-gradient(160deg,#fffdf8,#faf6ed);
          box-shadow: 0 12px 30px rgba(215,179,106,.08);
        }

        .approach-badge {
          position: absolute;
          top: 0;
          right: 0;
          padding: 7px 11px;
          border-radius: 0 7px 0 6px;
          background: #d7b36a;
          color: #17243a;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .approach-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          background: #f2ebdd;
          color: #9a783f;
          border-radius: 9px;
        }

        .approach-card h3 {
          font-size: 19px;
          color: #17253d;
          margin: 21px 0 5px;
        }

        .approach-subtitle {
          font-size: 10px;
          color: #8a94a4;
          margin: 0;
        }

        .approach-details {
          border-top: 1px solid #e8eaf0;
          border-bottom: 1px solid #e8eaf0;
          padding: 15px 0;
          margin: 22px 0;
          display: grid;
          gap: 12px;
        }

        .approach-details div {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
        }

        .approach-details span { font-size: 9px; color: #8792a2; }
        .approach-details strong { text-align: right; font-size: 9px; color: #344157; }

        .approach-suitable small {
          color: #a18146;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .approach-suitable p {
          font-size: 11px;
          line-height: 1.8;
          color: #6c788a;
          margin: 8px 0 0;
        }

        .comparison-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #f5f6f8;
          padding: 16px;
          border-radius: 5px;
          margin-top: 22px;
        }

        .comparison-disclaimer svg { color: #a17e45; flex-shrink: 0; }
        .comparison-disclaimer p { color: #7b8798; font-size: 10px; line-height: 1.8; margin: 0; }

        /* SCOPE */

        .scope-section {
          background: #f7f8fa;
        }

        .scope-heading {
          max-width: 680px;
          margin-bottom: 45px;
        }

        .scope-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1px;
          background: #e6eaf0;
          border: 1px solid #e6eaf0;
          border-radius: 8px;
          overflow: hidden;
        }

        .scope-item {
          display: flex;
          gap: 15px;
          padding: 24px;
          background: #fff;
          transition: .25s;
        }

        .scope-item:hover { background: #fffaf0; }

        .scope-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #f4eddf;
          color: #9c7b43;
        }

        .scope-icon svg { width: 19px; }

        .scope-item h3 {
          color: #1b2a41;
          font-size: 12px;
          margin: 1px 0 8px;
        }

        .scope-item p {
          color: #7a8595;
          font-size: 10px;
          line-height: 1.8;
          margin: 0;
        }

        .scope-footnote {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 25px;
        }

        .scope-footnote span {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          font-weight: 700;
          color: #69768a;
        }

        .scope-footnote svg { color: #a17e45; }

        /* INDUSTRY */

        .industry-section { background: #fff; }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .industry-card {
          padding: 26px;
          min-height: 195px;
          border: 1px solid #e9edf2;
          border-radius: 7px;
          position: relative;
          overflow: hidden;
          transition: .3s;
        }

        .industry-card:hover {
          border-color: #d8b775;
          background: #fdfbf7;
          transform: translateY(-4px);
        }

        .industry-index {
          position: absolute;
          right: 18px;
          top: 16px;
          color: #e8eaf0;
          font-size: 26px;
          font-weight: 800;
        }

        .industry-icon {
          width: 43px;
          height: 43px;
          background: #f5eddf;
          color: #a17d43;
          border-radius: 9px;
          display: grid;
          place-items: center;
        }

        .industry-card h3 {
          font-size: 15px;
          color: #1b2a41;
          margin: 20px 0 8px;
        }

        .industry-card p {
          font-size: 10px;
          line-height: 1.8;
          color: #7c8798;
          margin: 0;
          max-width: 250px;
        }

        .industry-arrow {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: #b99b65;
          opacity: 0;
          transform: translate(-5px,5px);
          transition: .3s;
        }

        .industry-card:hover .industry-arrow {
          opacity: 1;
          transform: translate(0,0);
        }

        /* PROCESS */

        .process-section {
          background:
            radial-gradient(circle at 15% 80%,rgba(50,88,135,.16),transparent 30%),
            linear-gradient(130deg,#0b1426,#142743);
          color: white;
        }

        .process-intro {
          max-width: 650px;
          margin-bottom: 55px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 35px 25px;
        }

        .process-item {
          position: relative;
          padding-top: 12px;
        }

        .process-number {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #d7b36a;
        }

        .process-icon {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          color: #e3c88f;
          border: 1px solid rgba(215,179,106,.3);
          background: rgba(215,179,106,.09);
          border-radius: 10px;
          margin-top: 16px;
          transition: .3s;
        }

        .process-item:hover .process-icon {
          background: #d7b36a;
          color: #12213a;
          transform: rotateY(180deg);
        }

        .process-item h3 {
          color: #f2f5fa;
          font-size: 14px;
          margin: 18px 0 9px;
        }

        .process-item p {
          color: #9baac0;
          font-size: 10px;
          line-height: 1.9;
          margin: 0;
          max-width: 235px;
        }

        .process-connector {
          position: absolute;
          width: 35px;
          height: 1px;
          background: linear-gradient(90deg,#d7b36a,transparent);
          top: 35px;
          right: -30px;
        }

        .process-footer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,.13);
          margin-top: 50px;
          padding-top: 20px;
          color: #a5b4c9;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .process-footer div {
          display: flex;
          gap: 9px;
          align-items: center;
        }

        /* PRICING */

        .pricing-section { background: #fff; }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
        }

        .pricing-card {
          position: relative;
          padding: 29px;
          border: 1px solid #e8ebf0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          background: #fff;
          transition: .3s;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(20,35,55,.07);
        }

        .pricing-featured {
          border-color: #d7b36a;
          background: linear-gradient(155deg,#fffdf8,#fbf7ee);
        }

        .pricing-badge {
          position: absolute;
          top: 0;
          right: 0;
          padding: 8px 13px;
          background: #d7b36a;
          color: #17243a;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
          border-radius: 0 7px 0 7px;
        }

        .pricing-subtitle {
          color: #a17e45;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .6px;
        }

        .pricing-card h3 {
          color: #1b2a41;
          font-size: 20px;
          margin: 12px 0;
        }

        .pricing-price {
          color: #ad8748;
          font-size: 27px;
          font-weight: 850;
          letter-spacing: -1px;
        }

        .pricing-description {
          color: #7c8798;
          font-size: 10px;
          line-height: 1.8;
          min-height: 38px;
          margin: 10px 0 20px;
        }

        .pricing-divider {
          height: 1px;
          background: #e9ecf0;
          margin-bottom: 20px;
        }

        .pricing-feature-title {
          color: #a17e45;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .pricing-card ul {
          padding: 0;
          margin: 17px 0 25px;
          list-style: none;
          display: grid;
          gap: 13px;
          flex: 1;
        }

        .pricing-card li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #59677a;
          font-size: 10px;
        }

        .pricing-card li svg {
          flex-shrink: 0;
          color: #b08c50;
        }

        .pricing-button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 13px;
          border: 1px solid #dfe3e9;
          border-radius: 5px;
          color: #28374d;
          font-size: 10px;
          font-weight: 800;
          transition: .25s;
        }

        .pricing-button:hover {
          border-color: #c5a15f;
          background: #f7f1e5;
        }

        .pricing-button-gold {
          background: #d7b36a;
          border-color: #d7b36a;
          color: #18243a;
        }

        .pricing-button-gold:hover { background: #ebd19a; }

        .pricing-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #f5f6f8;
          border-radius: 5px;
          padding: 16px;
          margin-top: 23px;
        }

        .pricing-note svg { color: #a17e45; flex-shrink: 0; }
        .pricing-note p { color: #7b8797; font-size: 10px; line-height: 1.8; margin: 0; }

        /* PORTFOLIO */

        .portfolio-section { background: #f7f8fa; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 17px;
        }

        .portfolio-card {
          background: white;
          border: 1px solid #e8ebf0;
          border-radius: 8px;
          overflow: hidden;
          transition: .3s;
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(20,35,55,.08);
        }

        .portfolio-visual {
          padding: 18px;
          background: #12213a;
          min-height: 230px;
          perspective: 1000px;
        }

        .portfolio-visual-1 { background: linear-gradient(135deg,#10213a,#1c3858); }
        .portfolio-visual-2 { background: linear-gradient(135deg,#18313e,#1c4b53); }
        .portfolio-visual-3 { background: linear-gradient(135deg,#201c43,#373064); }

        .portfolio-window {
          height: 195px;
          padding: 12px;
          border-radius: 7px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.17);
          transform: rotateX(5deg);
          transition: .4s;
        }

        .portfolio-card:hover .portfolio-window {
          transform: rotateX(0) translateY(-4px);
        }

        .portfolio-window-header,
        .portfolio-visual-footer {
          display: flex;
          justify-content: space-between;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #bdc8d8;
        }

        .portfolio-artwork {
          position: relative;
          height: 135px;
          display: grid;
          place-items: center;
        }

        .portfolio-art-orbit {
          width: 120px;
          height: 120px;
          position: absolute;
          border: 1px solid currentColor;
          border-radius: 50%;
          opacity: .4;
          transform: rotateX(65deg) rotateZ(-20deg);
          animation: orbit-rotate 16s linear infinite;
        }

        .portfolio-art-circle {
          width: 78px;
          height: 78px;
          border-radius: 24px;
          background: rgba(255,255,255,.08);
          border: 1px solid currentColor;
          display: grid;
          place-items: center;
          box-shadow: 0 15px 40px rgba(0,0,0,.2);
          animation: orb-float 4s infinite;
        }

        .portfolio-art-small {
          position: absolute;
          right: 30%;
          top: 20%;
          color: #f2d69c;
        }

        .portfolio-visual-footer {
          color: #d7b36a;
        }

        .portfolio-card-content { padding: 23px; }

        .portfolio-card-content > span {
          color: #a17e45;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .portfolio-card-content h3 {
          color: #1b2a41;
          font-size: 17px;
          margin: 10px 0;
        }

        .portfolio-card-content p {
          color: #7b8697;
          font-size: 10px;
          line-height: 1.9;
          margin: 0;
          min-height: 57px;
        }

        .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 17px;
        }

        .portfolio-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 22px;
          color: #7b8798;
          font-size: 10px;
          line-height: 1.8;
        }

        .portfolio-disclaimer svg { flex-shrink: 0; color: #a17e45; }

        /* FAQ */

        .faq-section { background: #fff; }

        .faq-layout {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 75px;
          align-items: start;
        }

        .faq-intro > p {
          color: #758195;
          font-size: 12px;
          line-height: 1.9;
          margin-top: 18px;
        }

        .faq-help-card {
          display: flex;
          gap: 14px;
          padding: 18px;
          border: 1px solid #eceef2;
          background: #fafbfc;
          border-radius: 7px;
          margin-top: 32px;
        }

        .faq-help-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: #96743e;
          background: #f2e9d9;
          flex-shrink: 0;
        }

        .faq-help-card strong { font-size: 11px; color: #25344a; }
        .faq-help-card p { font-size: 9px; line-height: 1.8; color: #7b8797; margin: 6px 0 10px; }

        .faq-help-card a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #a17e45;
          font-size: 10px;
          font-weight: 800;
        }

        .faq-list { border-top: 1px solid #e8ebf0; }

        .faq-item {
          border-bottom: 1px solid #e8ebf0;
        }

        .faq-question {
          width: 100%;
          min-height: 67px;
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 17px 0;
          cursor: pointer;
          text-align: left;
          color: #25344a;
          font-family: inherit;
        }

        .faq-question > span:first-child {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.6;
        }

        .faq-question i {
          color: #b59a68;
          font-size: 9px;
          font-weight: 800;
          font-style: normal;
          padding-top: 2px;
        }

        .faq-toggle {
          width: 29px;
          height: 29px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid #e6e9ee;
          border-radius: 50%;
          color: #8b7954;
          transition: .2s;
        }

        .faq-active .faq-toggle {
          background: #f3ead9;
          border-color: #e5d2a9;
          transform: rotate(180deg);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .3s ease;
        }

        .faq-active .faq-answer {
          grid-template-rows: 1fr;
        }

        .faq-answer p {
          overflow: hidden;
          color: #738094;
          font-size: 11px;
          line-height: 2;
          margin: 0;
          padding-left: 30px;
          padding-right: 40px;
        }

        .faq-active .faq-answer p {
          padding-bottom: 20px;
        }

        /* CTA */

        .final-cta-section {
          position: relative;
          background:
            radial-gradient(circle at 50% 100%,rgba(48,82,128,.36),transparent 50%),
            linear-gradient(125deg,#091426,#142844);
          overflow: hidden;
          padding: 100px 0;
          text-align: center;
          color: white;
        }

        .cta-orb {
          position: absolute;
          border: 1px solid rgba(215,179,106,.16);
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-orb-one {
          width: 450px;
          height: 450px;
          left: -250px;
          top: -260px;
        }

        .cta-orb-two {
          width: 550px;
          height: 550px;
          right: -300px;
          bottom: -400px;
        }

        .final-cta-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #d8c08d;
          margin-bottom: 22px;
        }

        .cta-eyebrow span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5dd5a8;
          box-shadow: 0 0 10px #5dd5a8;
        }

        .final-cta-content h2 {
          color: white;
          font-size: clamp(35px,5vw,58px);
          line-height: 1.15;
          letter-spacing: -2px;
          margin: 0;
        }

        .final-cta-content h2 span {
          color: #e0bf7e;
          display: block;
        }

        .final-cta-content > p {
          color: #aab8cd;
          font-size: 13px;
          line-height: 2;
          max-width: 610px;
          margin: 22px auto 29px;
        }

        .final-cta-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 17px;
          flex-wrap: wrap;
        }

        .cta-main-button { padding: 16px 23px; }

        .cta-secondary {
          color: #e3eaf4;
          font-size: 11px;
          font-weight: 700;
          padding: 14px 17px;
          border-bottom: 1px solid rgba(255,255,255,.3);
        }

        .cta-bottom {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 38px;
        }

        .cta-bottom span {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #9aabc0;
          font-size: 9px;
        }

        .cta-bottom svg { color: #d7b36a; }

        /* FOOTER */

        .app-footer {
          background: #080f1d;
          color: white;
          padding: 65px 0 20px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.1fr 1fr;
          gap: 55px;
          padding-bottom: 48px;
        }

        .footer-brand p {
          max-width: 280px;
          font-size: 10px;
          color: #8998ad;
          line-height: 2;
          margin: 20px 0;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #dfc184;
          font-size: 11px;
          font-weight: 700;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .footer-column h4 {
          color: #f0d69c;
          font-size: 11px;
          margin: 4px 0 8px;
        }

        .footer-column a {
          color: #98a5b8;
          font-size: 10px;
          transition: .2s;
        }

        .footer-column a:hover { color: #e0c083; }

        .footer-bottom {
          min-height: 55px;
          border-top: 1px solid rgba(255,255,255,.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: #7f8ca0;
          font-size: 9px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .footer-socials a {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.15);
          display: grid;
          place-items: center;
          color: #aab7c9;
          transition: .2s;
        }

        .footer-socials a:hover {
          color: #e4c788;
          border-color: #d7b36a;
        }

        /* FLOATING WHATSAPP */

        .floating-whatsapp {
          position: fixed;
          z-index: 150;
          right: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 9px;
          background: #159c69;
          color: white;
          padding: 13px 17px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 0 8px 25px rgba(21,156,105,.3);
          transition: .3s;
          animation: whatsapp-pulse 3s infinite;
        }

        .floating-whatsapp:hover {
          transform: translateY(-5px);
          background: #0d865a;
          box-shadow: 0 12px 30px rgba(21,156,105,.4);
        }

        /* REVEAL */

        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .7s ease, transform .7s ease;
        }

        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-grid.revealed,
        .intro-grid .revealed {
          opacity: 1;
        }

        /* ANIMATIONS */

        @keyframes hero-enter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes live-pulse {
          0%,100% { opacity: 1; box-shadow: 0 0 5px #54d6a6; }
          50% { opacity: .5; box-shadow: 0 0 15px #54d6a6; }
        }

        @keyframes desktop-float {
          0%,100% { margin-top: 0; }
          50% { margin-top: -12px; }
        }

        @keyframes phone-front-float {
          0%,100% { translate: 0 0; }
          50% { translate: 0 -12px; }
        }

        @keyframes phone-back-float {
          0%,100% { translate: 0 0; }
          50% { translate: 0 10px; }
        }

        @keyframes float-card {
          0%,100% { translate: 0 0; }
          50% { translate: 0 -10px; }
        }

        @keyframes orb-float {
          0%,100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-9px) rotate(8deg); }
        }

        @keyframes orbit-rotate {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @keyframes platform-float {
          0%,100% { translate: 0 0; }
          50% { translate: 0 -9px; }
        }

        @keyframes whatsapp-pulse {
          0%,100% { box-shadow: 0 8px 25px rgba(21,156,105,.3); }
          50% { box-shadow: 0 8px 30px rgba(21,156,105,.55), 0 0 0 7px rgba(21,156,105,.08); }
        }

        /* TABLET */

        @media (max-width: 1050px) {
          .desktop-nav { gap: 14px; }
          .desktop-nav a { font-size: 10px; }
          .nav-cta { padding: 11px 13px; font-size: 10px; }
          .hero-layout { grid-template-columns: 1fr 1fr; }
          .hero-content h1 { font-size: clamp(43px,5vw,58px); }
          .hero-visual { transform: scale(.92); }
          .why-layout { gap: 35px; }
          .technology-layout { gap: 35px; }
          .footer-top { gap: 30px; }
        }

        @media (max-width: 850px) {
          .app-container { width: min(100% - 42px,720px); }
          .section-padding { padding: 78px 0; }

          .app-header { height: 72px; }

          .desktop-nav {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: #0d192d;
            border-bottom: 1px solid rgba(255,255,255,.1);
            padding: 15px 22px 22px;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }

          .desktop-nav.nav-open { display: flex; }

          .desktop-nav a {
            padding: 13px 0;
            font-size: 12px;
            border-bottom: 1px solid rgba(255,255,255,.08);
          }

          .header-scrolled .desktop-nav {
            background: white;
          }

          .header-scrolled .desktop-nav a {
            color: #354258;
            border-color: #eef0f4;
          }

          .mobile-menu-btn { display: grid; place-items: center; }
          .hero-layout { grid-template-columns: 1fr; padding-top: 80px; }
          .hero-content { max-width: 680px; }
          .hero-content h1 { max-width: 680px; }
          .hero-visual { min-height: 470px; width: 100%; transform: none; }
          .device-stage { max-width: 560px; margin: auto; }
          .hero-section { padding-top: 72px; }
          .hero-bottom-inner { flex-direction: column; justify-content: center; padding: 17px 0; }
          .intro-grid { grid-template-columns: 1fr; gap: 25px; }
          .why-layout { grid-template-columns: 1fr; }
          .why-left { max-width: 600px; }
          .technology-layout { grid-template-columns: 1fr; }
          .tech-stack-grid { grid-template-columns: repeat(3,1fr); }
          .scope-grid { grid-template-columns: repeat(2,1fr); }
          .process-grid { grid-template-columns: repeat(2,1fr); }
          .process-connector { display: none; }
          .faq-layout { grid-template-columns: 1fr; gap: 30px; }
          .footer-top { grid-template-columns: repeat(2,1fr); }
          .footer-brand { grid-column: 1/-1; }
          .footer-brand p { max-width: 450px; }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .app-container { width: calc(100% - 36px); }
          .section-padding { padding: 65px 0; }

          .section-title {
            font-size: 33px;
            letter-spacing: -1.5px;
          }

          .section-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 30px;
          }

          .brand-symbol { width: 35px; height: 35px; }
          .brand-text strong { font-size: 15px; }
          .brand-text small { font-size: 6px; }

          .nav-cta {
            font-size: 9px;
            padding: 10px 11px;
          }

          .nav-cta svg { width: 13px; }

          .hero-section { min-height: auto; }

          .hero-layout {
            padding-top: 65px;
            padding-bottom: 15px;
            gap: 0;
          }

          .hero-content { padding: 20px 0; }

          .hero-eyebrow {
            font-size: 7px;
            letter-spacing: 1.2px;
            margin-bottom: 20px;
          }

          .hero-content h1 {
            font-size: clamp(38px,10vw,50px);
            letter-spacing: -2.4px;
          }

          .hero-description {
            font-size: 12px;
            line-height: 1.9;
            margin: 19px 0 23px;
          }

          .hero-actions { gap: 9px; }

          .btn-gold,
          .btn-outline {
            padding: 13px 14px;
            font-size: 10px;
          }

          .hero-trust {
            margin-top: 30px;
            gap: 10px;
          }

          .trust-item { gap: 7px; }
          .trust-icon { width: 30px; height: 30px; }
          .trust-item strong { font-size: 8px; }
          .trust-item small { font-size: 7px; }
          .trust-divider { height: 26px; }

          .hero-visual {
            min-height: 360px;
            transform: scale(.91);
            transform-origin: center center;
            margin: -8px 0;
          }

          .device-stage { height: 350px; }

          .device-desktop {
            width: 280px;
            transform: translate(-47%,-50%) translateZ(-40px) rotateY(-8deg);
          }

          .desktop-frame { height: 203px; }
          .desktop-content { height: 163px; }
          .desktop-chart { height: 55px; }
          .chart-bars { height: 26px; }
          .desktop-stand { height: 20px; }
          .device-phone { width: 130px; height: 270px; }
          .phone-screen { padding: 21px 9px 7px; }
          .phone-feature { height: 75px; }
          .phone-feature strong { font-size: 10px; }
          .mobile-app-title { font-size: 18px; }
          .mobile-app-card-value { font-size: 12px; }
          .phone-front { left: 0; bottom: 15px; }
          .phone-back { right: -5px; top: 42px; }
          .floating-card { padding: 8px; gap: 7px; }
          .floating-icon { width: 28px; height: 28px; }
          .floating-card strong { font-size: 7px; }
          .floating-card small { font-size: 6px; }
          .floating-ai { left: -7px; top: 65px; }
          .floating-code { right: -5px; bottom: 25px; }
          .visual-label { font-size: 6px; }
          .visual-label-top { top: 0; }
          .orbit-one { width: 360px; height: 360px; }
          .orbit-two { width: 280px; height: 280px; }
          .visual-caption { bottom: -4px; }

          .hero-bottom-inner > span { font-size: 8px; }
          .hero-platforms { gap: 13px; flex-wrap: wrap; justify-content: center; }
          .hero-platforms span { font-size: 8px; }

          .intro-grid { gap: 22px; }

          .service-grid,
          .platform-grid,
          .pricing-grid,
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .service-card { padding: 23px; }
          .service-card h3 { font-size: 19px; }
          .service-card li { font-size: 9px; }
          .service-card ul { gap: 12px 7px; }

          .why-grid { gap: 9px; }
          .why-card { padding: 16px; min-height: 175px; }
          .why-card h3 { font-size: 12px; }
          .why-card p { font-size: 9px; }

          .platform-illustration { height: 205px; }

          .tech-stack-grid { grid-template-columns: repeat(2,1fr); }
          .tech-stack-item { padding: 11px 9px; }
          .tech-stack-item strong { font-size: 9px; }
          .tech-stack-item small { font-size: 7px; }
          .technology-showcase { padding: 18px; transform: none; }
          .tech-showcase-header { font-size: 7px; }

          .approach-grid { grid-template-columns: 1fr; }
          .approach-card { padding: 24px; }
          .approach-details { gap: 13px; }

          .scope-grid { grid-template-columns: 1fr; }
          .scope-item { padding: 19px; }
          .scope-footnote { gap: 12px 20px; }
          .scope-footnote span { font-size: 8px; }

          .industry-grid { grid-template-columns: repeat(2,1fr); gap: 9px; }
          .industry-card { min-height: 190px; padding: 17px; }
          .industry-card h3 { font-size: 12px; }
          .industry-card p { font-size: 9px; }

          .process-grid { grid-template-columns: repeat(2,1fr); gap: 28px 18px; }
          .process-item h3 { font-size: 12px; }
          .process-item p { font-size: 9px; }
          .process-footer { flex-direction: column; gap: 12px; font-size: 7px; }

          .pricing-card { padding: 24px; }
          .pricing-price { font-size: 25px; }

          .portfolio-visual { min-height: 215px; }
          .portfolio-card-content { padding: 19px; }

          .faq-layout { gap: 25px; }
          .faq-question { min-height: 65px; }
          .faq-question > span:first-child { font-size: 10px; gap: 10px; }
          .faq-answer p { padding-left: 25px; padding-right: 20px; font-size: 10px; }

          .final-cta-section { padding: 75px 0; }
          .final-cta-content h2 { font-size: 37px; letter-spacing: -1.5px; }
          .final-cta-content > p { font-size: 11px; }
          .final-cta-actions { flex-direction: column; }
          .cta-main-button { width: 100%; }
          .cta-bottom { gap: 12px; }
          .cta-bottom span { font-size: 8px; }

          .footer-top {
            grid-template-columns: repeat(2,1fr);
            gap: 30px 18px;
          }

          .footer-brand { grid-column: 1/-1; }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 0;
            gap: 12px;
          }

          .floating-whatsapp {
            right: 13px;
            bottom: 13px;
            padding: 12px 14px;
            font-size: 10px;
          }
        }

        @media (max-width: 360px) {
          .app-container { width: calc(100% - 28px); }
          .hero-content h1 { font-size: 35px; }
          .hero-actions { align-items: stretch; flex-direction: column; }
          .hero-actions > a { justify-content: center; }
          .hero-visual { transform: scale(.82); margin: -25px -20px; }
          .industry-grid { grid-template-columns: 1fr 1fr; }
          .tech-stack-grid { grid-template-columns: 1fr 1fr; }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .app-page *,
          .app-page *::before,
          .app-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

          [data-reveal] {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

    </main>
  )
}

function InfoIcon() {
  return <Sparkles size={17} />
}
