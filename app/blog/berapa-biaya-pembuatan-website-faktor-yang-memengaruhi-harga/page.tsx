
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { LanguageProvider } from "@/components/language-provider";

const SITE_URL = "https://hinaitech.com";

const ARTICLE_SLUG =
  "berapa-biaya-pembuatan-website-faktor-yang-memengaruhi-harga";

const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;

const ARTICLE_IMAGE = "/artikel/why-choose-us.png";

const IMAGE_SOURCE =
  "https://unsplash.com/";

const TITLE =
  "Berapa Biaya Pembuatan Website? Faktor yang Memengaruhi Harga";

const DESCRIPTION =
  "Berapa biaya pembuatan website untuk bisnis? Kenali faktor penentu harga, perbedaan jenis website, fitur, teknologi, proses pengerjaan, serta daftar paket website HINAI Tech mulai Rp750.000.";

const WHATSAPP_URL =
  "https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20konsultasi%20biaya%20pembuatan%20website.";

export const metadata: Metadata = {
  title: `${TITLE} | HINAI Tech`,
  description: DESCRIPTION,
  alternates: {
    canonical: ARTICLE_URL,
  },
  keywords: [
    "biaya pembuatan website",
    "harga pembuatan website",
    "jasa pembuatan website",
    "harga website company profile",
    "harga website toko online",
    "paket website murah",
    "website profesional",
    "biaya website UMKM",
    "jasa website HINAI Tech",
    "pembuatan website bisnis",
    "harga website 2026",
  ],
  openGraph: {
    type: "article",
    locale: "id_ID",
    url: ARTICLE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "HINAI Tech",
    images: [
      {
        url: `${SITE_URL}${ARTICLE_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Ilustrasi biaya dan proses pembuatan website profesional",
      },
    ],
    publishedTime: "2026-11-15T08:00:00+07:00",
    modifiedTime: "2026-11-15T08:00:00+07:00",
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${ARTICLE_IMAGE}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const packages = [
  {
    name: "Ekonomis",
    price: "Rp750.000",
    pages: "3 halaman",
    duration: "1 tahun",
    domain: ".com gratis",
    hosting: "Gratis",
    copywriting: "Gratis",
    articles: "Tidak termasuk",
    email: "Tidak termasuk",
    revisions: "3 kali",
    timeline: "2 hari",
    maintenance: "Tidak termasuk",
    recommended: false,
  },
  {
    name: "Premium",
    price: "Rp1.500.000",
    pages: "5 halaman",
    duration: "1 tahun",
    domain: ".com gratis",
    hosting: "Gratis",
    copywriting: "Gratis",
    articles: "3 artikel",
    email: "Tidak termasuk",
    revisions: "5 kali",
    timeline: "3 hari",
    maintenance: "Termasuk",
    recommended: true,
  },
  {
    name: "Business",
    price: "Rp2.250.000",
    pages: "10 halaman",
    duration: "1 tahun",
    domain: "Custom",
    hosting: "Gratis",
    copywriting: "Gratis",
    articles: "6 artikel",
    email: "Termasuk",
    revisions: "7 kali",
    timeline: "7 hari",
    maintenance: "Termasuk",
    recommended: false,
  },
  {
    name: "Profesional",
    price: "Rp3.100.000",
    pages: "20 halaman",
    duration: "1 tahun",
    domain: "Custom",
    hosting: "Gratis",
    copywriting: "Gratis",
    articles: "10 artikel",
    email: "Termasuk",
    revisions: "8 kali",
    timeline: "13 hari",
    maintenance: "Termasuk",
    recommended: false,
  },
];

const sections: ArticleSection[] = [
  {
    id: "pengantar",
    title: "Mengapa Biaya Pembuatan Website Bisa Berbeda-beda?",
    paragraphs: [
      "Salah satu pertanyaan yang sering muncul sebelum sebuah bisnis mulai membangun kehadiran digital adalah berapa biaya pembuatan website. Sebagian orang menemukan penawaran website dengan harga ratusan ribu rupiah, sementara penawaran lainnya mencapai jutaan hingga puluhan juta rupiah. Perbedaan tersebut sering membuat pemilik bisnis bingung menentukan pilihan.",
      "Pada dasarnya, harga website tidak ditentukan hanya oleh tampilan visual. Ada banyak komponen yang memengaruhi biaya, seperti jumlah halaman, tingkat kesulitan desain, fitur, teknologi, kebutuhan database, domain, hosting, keamanan, optimasi SEO, serta layanan pemeliharaan setelah website diluncurkan.",
      "Website sederhana untuk memperkenalkan profil usaha tentu memiliki kebutuhan berbeda dibandingkan toko online yang mempunyai katalog produk, keranjang belanja, laporan penjualan, dan pengelolaan stok. Begitu juga aplikasi web khusus yang membutuhkan sistem login, dashboard, integrasi API, atau proses bisnis tertentu.",
      "Karena itu, calon pelanggan sebaiknya tidak hanya membandingkan angka harga. Perhatikan apa saja yang diperoleh, batasan layanan, lama pengerjaan, hak akses, dukungan teknis, dan kebutuhan bisnis yang ingin diselesaikan. Harga yang tepat adalah harga yang sebanding dengan ruang lingkup pekerjaan dan manfaat yang diterima.",
    ],
  },
  {
    id: "kisaran-harga",
    title: "Berapa Kisaran Biaya Pembuatan Website?",
    paragraphs: [
      "Secara umum, biaya pembuatan website dapat dibagi berdasarkan tingkat kebutuhan. Website profil sederhana biasanya membutuhkan struktur halaman dan fitur yang lebih terbatas. Website bisnis yang lebih lengkap dapat membutuhkan halaman tambahan, konten SEO, email perusahaan, dan pengelolaan yang lebih terstruktur. Sementara itu, toko online atau aplikasi web khusus memerlukan pengembangan fitur yang lebih kompleks.",
      "Sebagai gambaran, paket website yang ditampilkan HINAI Tech tersedia mulai Rp750.000 untuk paket Ekonomis, Rp1.500.000 untuk Premium, Rp2.250.000 untuk Business, dan Rp3.100.000 untuk Profesional. Untuk kebutuhan toko online tersedia paket Rp2.700.000, sedangkan UMKM yang menginginkan solusi digital terpadu dapat mempertimbangkan Bundling UMKM seharga Rp5.500.000.",
      "Angka tersebut merupakan harga paket yang tercantum pada halaman layanan website HINAI Tech. Kebutuhan khusus di luar ruang lingkup paket sebaiknya dibicarakan terlebih dahulu agar fitur, biaya tambahan jika ada, dan estimasi pengerjaan dapat disepakati secara jelas.",
      "Penting untuk dipahami bahwa harga murah tidak selalu berarti paling hemat. Jika sebuah paket tidak mencakup fitur yang dibutuhkan, bisnis mungkin harus mengeluarkan biaya tambahan untuk pengembangan, integrasi, atau pemeliharaan. Sebaliknya, memilih paket terlalu besar juga tidak efisien apabila sebagian fiturnya belum diperlukan.",
    ],
  },
  {
    id: "jenis-website",
    title: "Jenis Website dan Pengaruhnya terhadap Harga",
    paragraphs: [
      "Jenis website menjadi salah satu faktor awal yang menentukan biaya. Setiap jenis memiliki tujuan, struktur, dan kebutuhan teknis yang berbeda. Sebelum meminta penawaran, tentukan terlebih dahulu apakah website hanya akan digunakan sebagai profil perusahaan, sarana promosi, katalog, toko online, atau sistem operasional.",
      "Website company profile biasanya berisi halaman beranda, tentang perusahaan, layanan, portofolio, artikel, dan kontak. Jenis ini cocok bagi bisnis yang ingin membangun identitas profesional serta memberikan informasi resmi kepada calon pelanggan.",
      "Landing page memiliki fokus yang lebih spesifik, misalnya mempromosikan satu produk, mengumpulkan pendaftaran, atau mengarahkan pengunjung untuk menghubungi tim penjualan. Struktur halaman dapat dibuat lebih terarah karena tujuan utamanya adalah mendorong tindakan tertentu.",
      "Website toko online memiliki kebutuhan tambahan seperti katalog, kategori produk, variasi, keranjang belanja, metode pembayaran, ongkos kirim, dan pengelolaan pesanan. Jika membutuhkan laporan stok, laporan penjualan, atau integrasi sistem lain, kompleksitas pengerjaan dapat meningkat.",
      "Web application atau aplikasi web khusus memiliki ruang lingkup yang lebih luas. Sistem seperti CRM, sistem reservasi, dashboard perusahaan, manajemen inventaris, dan portal pendidikan dapat memerlukan database, autentikasi pengguna, hak akses, API, serta pengujian yang lebih mendalam.",
    ],
    bullets: [
      "Company profile: memperkenalkan bisnis dan layanan.",
      "Landing page: mendukung kampanye atau promosi tertentu.",
      "Website katalog: menampilkan produk dan kategori.",
      "Toko online: mendukung aktivitas pemesanan dan transaksi.",
      "Web application: menjalankan sistem atau proses bisnis khusus.",
      "Portal pendidikan: mengelola informasi dan aktivitas pembelajaran.",
    ],
  },
  {
    id: "jumlah-halaman",
    title: "Jumlah Halaman dan Struktur Konten",
    paragraphs: [
      "Jumlah halaman memengaruhi waktu yang dibutuhkan untuk merancang, membuat, mengisi, dan menguji website. Website dengan tiga halaman tentu memiliki ruang lingkup berbeda dibandingkan website yang memiliki sepuluh atau dua puluh halaman.",
      "Namun, jumlah halaman bukan satu-satunya ukuran kompleksitas. Halaman yang hanya berisi informasi teks dan gambar biasanya lebih sederhana dibandingkan halaman yang mempunyai filter, formulir dinamis, kalkulator, pencarian data, atau komponen interaktif.",
      "Konten juga perlu diperhitungkan. Setiap halaman membutuhkan judul, deskripsi, gambar, susunan informasi, dan ajakan bertindak yang sesuai. Apabila penyedia jasa menyediakan copywriting, hal tersebut dapat membantu pemilik bisnis yang belum mempunyai materi tertulis.",
      "Sebelum proyek dimulai, buat daftar halaman yang benar-benar dibutuhkan. Contohnya, perusahaan jasa dapat memprioritaskan Beranda, Tentang Kami, Layanan, Portofolio, Artikel, dan Kontak. Penambahan halaman dapat dilakukan kemudian ketika bisnis berkembang.",
    ],
  },
  {
    id: "desain-ui-ux",
    title: "Desain UI/UX dan Tingkat Kustomisasi",
    paragraphs: [
      "Desain UI atau User Interface berkaitan dengan tampilan visual website, seperti warna, tipografi, ikon, tombol, gambar, dan susunan komponen. UX atau User Experience berhubungan dengan kemudahan pengunjung menggunakan website, menemukan informasi, dan menyelesaikan tujuan mereka.",
      "Website yang menggunakan pola desain standar dapat mempunyai proses pengerjaan lebih sederhana. Sebaliknya, desain khusus yang dibuat berdasarkan identitas merek, kebutuhan pengguna, animasi, interaksi, dan komponen unik memerlukan proses perancangan serta implementasi yang lebih panjang.",
      "Kustomisasi tidak selalu berarti harus membuat semua elemen dari awal. Tim pengembang dapat menggunakan komponen yang sudah teruji dan menyesuaikannya dengan karakter bisnis. Pendekatan ini dapat membantu menjaga keseimbangan antara kualitas, waktu pengerjaan, dan anggaran.",
      "Hal terpenting adalah memastikan desain tidak hanya menarik, tetapi juga mudah digunakan. Tombol harus terlihat jelas, teks mudah dibaca, navigasi tidak membingungkan, dan pengunjung dapat menemukan informasi penting tanpa harus melakukan terlalu banyak langkah.",
    ],
  },
  {
    id: "fitur",
    title: "Fitur dan Kompleksitas Fungsionalitas",
    paragraphs: [
      "Fitur merupakan salah satu faktor yang paling berpengaruh terhadap biaya pembuatan website. Semakin banyak fungsi yang harus dibangun, semakin banyak pula pekerjaan analisis, desain, pengembangan, dan pengujian yang diperlukan.",
      "Website profil sederhana mungkin hanya memerlukan navigasi, halaman informasi, galeri, formulir kontak, dan tombol WhatsApp. Toko online dapat membutuhkan katalog produk, variasi produk, keranjang belanja, diskon, ongkos kirim, pembayaran, serta laporan penjualan.",
      "Fitur login dan dashboard juga memerlukan perhatian khusus. Sistem harus mampu mengelola akun, memvalidasi input, membatasi akses sesuai peran pengguna, serta menyimpan data dengan benar. Jika website terhubung dengan layanan eksternal, proses integrasi dan pengujian tambahan mungkin diperlukan.",
      "Sebaiknya kelompokkan fitur menjadi kebutuhan utama dan fitur tambahan. Prioritaskan fungsi yang benar-benar membantu pelanggan atau operasional. Dengan begitu, anggaran dapat digunakan untuk hal yang paling berdampak terlebih dahulu.",
    ],
    bullets: [
      "Formulir kontak dan permintaan penawaran.",
      "Tombol WhatsApp dan integrasi komunikasi.",
      "Pencarian dan kategori produk.",
      "Keranjang belanja dan pengelolaan pesanan.",
      "Login, dashboard, dan pengaturan hak akses.",
      "Payment gateway atau integrasi pembayaran.",
      "Laporan, analitik, dan integrasi API.",
    ],
  },
  {
    id: "domain-hosting",
    title: "Domain, Hosting, dan Infrastruktur Website",
    paragraphs: [
      "Domain adalah alamat yang digunakan pengunjung untuk membuka website, sedangkan hosting atau server merupakan tempat aplikasi dan data website dijalankan. Keduanya merupakan bagian penting dari operasional website.",
      "Biaya domain dapat berbeda berdasarkan ekstensi dan penyedia layanan. Domain populer seperti .com memiliki biaya registrasi dan perpanjangan yang mengikuti ketentuan registrar. Domain khusus atau ekstensi tertentu dapat mempunyai harga berbeda.",
      "Hosting juga memiliki variasi berdasarkan kapasitas penyimpanan, sumber daya server, bandwidth, dukungan teknis, dan kebutuhan aplikasi. Website informasi sederhana memiliki kebutuhan infrastruktur berbeda dibandingkan toko online dengan banyak produk atau aplikasi dengan aktivitas pengguna tinggi.",
      "Pada paket website HINAI Tech, hosting gratis tercantum untuk paket Ekonomis, Premium, Business, dan Profesional. Domain .com gratis tercantum pada dua paket awal, sedangkan Business dan Profesional mencantumkan domain custom. Detail jenis domain dan ketentuan perpanjangan sebaiknya dikonfirmasi ketika konsultasi.",
      "Pastikan pula memahami masa aktif layanan. Paket website HINAI Tech mencantumkan durasi satu tahun. Tanyakan komponen apa saja yang termasuk dalam masa aktif tersebut dan bagaimana biaya perpanjangan setelah periode berakhir.",
    ],
  },
  {
    id: "seo",
    title: "Optimasi SEO dan Kebutuhan Konten",
    paragraphs: [
      "SEO atau Search Engine Optimization merupakan proses mengoptimalkan website agar lebih mudah ditemukan melalui mesin pencari. Pekerjaan SEO dapat meliputi struktur halaman, judul, deskripsi, heading, internal link, kecepatan, optimasi gambar, serta kualitas konten.",
      "Website yang mempunyai struktur ramah mesin pencari memberikan fondasi yang lebih baik untuk strategi pemasaran organik. Namun, SEO bukan jaminan website langsung berada di posisi pertama Google. Persaingan kata kunci, kualitas konten, reputasi domain, dan pengalaman pengguna turut memengaruhi hasil.",
      "Produksi artikel juga membutuhkan waktu. Artikel yang baik perlu melalui riset topik, penentuan kata kunci, penyusunan struktur, penulisan, penyuntingan, dan optimasi. Karena itu, paket yang menyediakan artikel dapat memberikan nilai tambahan bagi bisnis yang ingin mulai membangun konten.",
      "Paket Premium HINAI Tech mencantumkan tiga artikel gratis, Business enam artikel, dan Profesional sepuluh artikel. Paket Ekonomis tidak mencantumkan artikel gratis. Jumlah artikel tersebut merupakan bagian dari spesifikasi paket yang ditampilkan pada halaman layanan.",
    ],
  },
  {
    id: "keamanan",
    title: "Keamanan, SSL, dan Keandalan Website",
    paragraphs: [
      "Website bisnis perlu memperhatikan keamanan sejak awal. Hal ini penting terutama jika website mengumpulkan data pelanggan, menyediakan formulir, memiliki akun pengguna, atau menangani transaksi.",
      "SSL membantu mengaktifkan HTTPS sehingga komunikasi antara browser dan website dienkripsi. Selain itu, pengelola perlu memperhatikan pembaruan sistem, pengamanan akses administrator, validasi input, pencadangan data, serta pengelolaan hak akses.",
      "Website yang lebih kompleks dapat membutuhkan pengujian keamanan dan pengelolaan infrastruktur yang lebih mendalam. Biaya juga dapat dipengaruhi kebutuhan pemantauan, backup berkala, dan dukungan teknis.",
      "Jangan hanya menanyakan apakah website sudah menggunakan SSL. Tanyakan pula bagaimana proses pemeliharaan, siapa yang mengelola akses admin, bagaimana backup dilakukan, dan apa prosedur yang tersedia jika website mengalami gangguan.",
    ],
  },
  {
    id: "teknologi",
    title: "Teknologi yang Digunakan untuk Membangun Website",
    paragraphs: [
      "Teknologi berpengaruh terhadap cara website dirancang, dikembangkan, diintegrasikan, dan dipelihara. Pemilihan teknologi sebaiknya mempertimbangkan kebutuhan fitur, kemampuan pengembangan, performa, keamanan, dan rencana jangka panjang.",
      "HINAI Tech mencantumkan beberapa teknologi pada halaman layanan web development, antara lain React, Vue, Next.js, Nuxt.js, TypeScript, Tailwind CSS, Node.js, WordPress, dan Python. Masing-masing mempunyai kegunaan yang dapat disesuaikan dengan kebutuhan proyek.",
      "WordPress dapat menjadi pilihan untuk website yang membutuhkan pengelolaan konten dengan cepat. React dan Vue digunakan untuk membangun antarmuka interaktif. Next.js dan Nuxt.js menyediakan pendekatan pengembangan aplikasi web yang lebih lengkap. Node.js dan Python dapat digunakan dalam pengembangan sisi server sesuai kebutuhan.",
      "Tidak ada satu teknologi yang selalu paling tepat untuk semua proyek. Website company profile sederhana tidak harus menggunakan arsitektur yang rumit. Sebaliknya, aplikasi dengan proses bisnis khusus perlu mempertimbangkan struktur sistem dan kemampuan pengembangan jangka panjang.",
    ],
  },
  {
    id: "responsif-performa",
    title: "Responsivitas dan Performa Website",
    paragraphs: [
      "Website perlu memberikan pengalaman yang baik di berbagai perangkat. Pengunjung dapat membuka halaman melalui ponsel, tablet, laptop, maupun komputer desktop. Karena itu, tata letak harus menyesuaikan ukuran layar dan tetap mudah digunakan.",
      "Performa juga penting. Gambar berukuran terlalu besar, kode yang tidak efisien, terlalu banyak skrip, atau konfigurasi server yang kurang tepat dapat membuat halaman lambat. Pengunjung yang harus menunggu terlalu lama berpotensi meninggalkan website.",
      "Optimasi dapat meliputi kompresi gambar, penggunaan format gambar modern, pengaturan cache, pemuatan aset yang efisien, serta pengurangan kode yang tidak diperlukan. Pengujian perlu dilakukan pada kondisi perangkat dan jaringan yang berbeda.",
      "HINAI Tech mencantumkan responsive design, loading fast, secure and reliable, SEO optimized, user friendly, dan mobile friendly sebagai fokus layanan web development. Hal tersebut menjadi aspek yang perlu diperhatikan ketika memilih penyedia jasa website.",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance dan Dukungan Setelah Website Online",
    paragraphs: [
      "Pekerjaan website tidak selalu berakhir ketika halaman berhasil dipublikasikan. Website tetap perlu dikelola agar konten akurat, fitur berfungsi, dan sistem mendapatkan pembaruan yang diperlukan.",
      "Maintenance dapat mencakup pemeriksaan fungsi, pembaruan komponen, backup, perbaikan bug, pemantauan performa, serta bantuan teknis. Cakupan layanan berbeda-beda antara satu penyedia jasa dan lainnya.",
      "Pada paket HINAI Tech, maintenance tidak dicantumkan untuk Ekonomis, sedangkan Premium, Business, dan Profesional mencantumkan maintenance. Untuk paket Toko Online Premium, halaman layanan secara khusus mencantumkan free maintenance selama empat jam per bulan.",
      "Sebelum menyetujui penawaran, tanyakan apa yang dimaksud dengan maintenance. Apakah termasuk pembaruan konten, perbaikan error, bantuan teknis, backup, atau perubahan fitur? Kejelasan ini membantu menghindari perbedaan ekspektasi setelah website selesai.",
    ],
  },
  {
    id: "copywriting",
    title: "Copywriting, Artikel, dan Materi Website",
    paragraphs: [
      "Website membutuhkan materi yang menjelaskan bisnis dengan jelas. Materi tersebut dapat berupa profil perusahaan, deskripsi layanan, keunggulan, informasi produk, FAQ, hingga ajakan untuk menghubungi tim.",
      "Copywriting membantu menyampaikan informasi dengan bahasa yang sesuai target pelanggan. Konten yang baik tidak hanya terdengar menarik, tetapi juga menjawab pertanyaan, menjelaskan manfaat, dan mengarahkan pembaca menuju tindakan yang relevan.",
      "Pada paket website HINAI Tech, copywriting gratis tercantum untuk Ekonomis, Premium, Business, dan Profesional. Selain itu, paket Premium, Business, dan Profesional mencantumkan jumlah artikel gratis yang berbeda.",
      "Walaupun layanan penulisan disediakan, pemilik bisnis tetap perlu memberikan informasi yang akurat mengenai produk, layanan, alamat, kontak, keunggulan, dan proses kerja. Kolaborasi ini penting agar konten website tidak berisi klaim yang tidak sesuai kenyataan.",
    ],
  },
  {
    id: "revisi",
    title: "Jumlah Revisi dan Waktu Pengerjaan",
    paragraphs: [
      "Waktu pengerjaan dipengaruhi oleh jumlah halaman, kesiapan materi, kompleksitas fitur, proses desain, dan kecepatan persetujuan dari klien. Proyek yang sederhana dapat diselesaikan lebih cepat dibandingkan website dengan banyak halaman dan kebutuhan khusus.",
      "Revisi juga perlu diperhitungkan. Revisi membantu menyesuaikan hasil dengan kebutuhan, tetapi jumlah dan cakupannya sebaiknya ditentukan sejak awal. Perubahan besar setelah desain atau sistem disetujui dapat memengaruhi jadwal.",
      "Paket HINAI Tech mencantumkan tiga kali revisi untuk Ekonomis, lima kali untuk Premium, tujuh kali untuk Business, dan delapan kali untuk Profesional. Estimasi pengerjaan yang tercantum masing-masing adalah dua, tiga, tujuh, dan tiga belas hari.",
      "Durasi tersebut merupakan estimasi yang ditampilkan pada paket. Kesiapan konten, komunikasi, persetujuan desain, serta perubahan ruang lingkup dapat memengaruhi waktu aktual. Pastikan jadwal mulai dan target serah terima disepakati bersama.",
    ],
  },
  {
    id: "toko-online",
    title: "Berapa Biaya Membuat Website Toko Online?",
    paragraphs: [
      "Toko online membutuhkan lebih banyak fungsi dibandingkan website profil biasa. Selain halaman informasi, sistem perlu menampilkan produk, kategori, variasi, harga, dan informasi pemesanan. Beberapa toko juga membutuhkan keranjang belanja, metode pembayaran, ongkos kirim, serta laporan.",
      "HINAI Tech menampilkan paket Toko Online Premium dengan harga Rp2.700.000. Paket tersebut mencakup enam halaman website, hosting dan domain gratis, tiga kali revisi, pengerjaan tujuh sampai empat belas hari kerja, masa aktif satu tahun, free maintenance empat jam per bulan, SSL gratis, email perusahaan, dan akses admin website.",
      "Fitur yang tercantum meliputi keranjang belanja, pembayaran bank transfer, ongkos kirim, chat WhatsApp, tombol order via WhatsApp, harga coret atau diskon, kategori produk, variasi produk, laporan stok, laporan penjualan, serta upsell dan cross-sell.",
      "Halaman layanan juga mencantumkan harga renewal sebesar Rp1.700.000 per tahun. Karena biaya perpanjangan merupakan komponen penting, calon pelanggan sebaiknya memahami periode, cakupan, dan ketentuan renewal sebelum memesan.",
      "Jika toko membutuhkan payment gateway tertentu, integrasi kurir khusus, sinkronisasi inventaris, atau sistem eksternal lainnya, diskusikan terlebih dahulu apakah kebutuhan tersebut sudah termasuk dalam paket atau memerlukan pekerjaan tambahan.",
    ],
  },
  {
    id: "bundling-umkm",
    title: "Paket Bundling UMKM Rp5.500.000: Solusi Digital Terpadu",
    paragraphs: [
      "Sebagian UMKM tidak hanya membutuhkan website. Mereka juga perlu membangun identitas merek, menyediakan konten, mengelola media sosial, dan menyiapkan fondasi agar bisnis lebih mudah ditemukan secara online.",
      "Untuk kebutuhan tersebut, HINAI Tech menampilkan Paket Terpadu UMKM atau Bundling UMKM seharga Rp5.500.000. Paket ini dirancang sebagai solusi digital terpadu, bukan sekadar pembuatan website.",
      "Komponen yang tercantum meliputi website company profile profesional dan modern, bonus desain logo jika bisnis belum memiliki identitas brand, artikel SEO, serta layanan manajemen media sosial untuk memperkuat branding online.",
      "Paket tersebut juga mencantumkan bantuan setup dan optimasi Google Search Console, Google Analytics, serta Google Business Profile. Ketiga layanan tersebut mempunyai fungsi berbeda: pemantauan performa pencarian, analisis pengunjung, dan pengelolaan informasi bisnis lokal.",
      "Bagi UMKM yang ingin memulai transformasi digital dengan beberapa kebutuhan sekaligus, bundling dapat menjadi pilihan untuk dipertimbangkan. Namun, tetap pastikan rincian jumlah konten, cakupan manajemen media sosial, periode layanan, dan ruang lingkup pekerjaan dikonfirmasi sebelum proyek dimulai.",
    ],
    bullets: [
      "Website company profile profesional dan modern.",
      "Bonus desain logo jika belum memiliki identitas brand.",
      "Artikel SEO.",
      "Layanan manajemen media sosial.",
      "Setup Google Search Console.",
      "Setup Google Analytics.",
      "Setup Google Business Profile.",
    ],
  },
  {
    id: "tahapan-pengerjaan",
    title: "Tahapan Pengerjaan Website di HINAI Tech",
    paragraphs: [
      "Harga website juga berkaitan dengan proses kerja di baliknya. Pengembangan yang terstruktur membantu memastikan kebutuhan dipahami sebelum desain dan implementasi dimulai. HINAI Tech menampilkan tujuh tahapan web development pada halaman layanan.",
      "Tahap pertama adalah Idea Exploration and Goal Planning, yaitu menggali ide, memahami kebutuhan, dan menetapkan tujuan proyek. Tahap kedua adalah System Analysis and Planning untuk menganalisis kebutuhan sistem, alur kerja, dan perencanaan teknis.",
      "Tahap ketiga adalah System Design and Architecture. Pada tahap ini struktur sistem, arsitektur, dan desain antarmuka dirancang. Selanjutnya, Development and Execution menerjemahkan rancangan menjadi website atau sistem yang dapat digunakan.",
      "Tahap kelima adalah Testing and Quality Control untuk memeriksa fungsi dan kualitas. Setelah itu dilakukan Deployment and Launch agar website dapat diakses melalui server produksi. Tahap terakhir adalah Maintenance and Evaluation untuk menjaga kualitas dan mengevaluasi performa setelah peluncuran.",
    ],
    bullets: [
      "01 — Idea Exploration & Goal Planning.",
      "02 — System Analysis & Planning.",
      "03 — System Design & Architecture.",
      "04 — Development & Execution.",
      "05 — Testing & Quality Control (QC).",
      "06 — Deployment & Launch.",
      "07 — Maintenance & Evaluation.",
    ],
  },
  {
    id: "cara-memilih-paket",
    title: "Cara Memilih Paket Website Sesuai Kebutuhan Bisnis",
    paragraphs: [
      "Memilih paket website sebaiknya dimulai dengan menentukan tujuan. Jika bisnis hanya membutuhkan kehadiran online dasar dengan beberapa halaman, paket Ekonomis dapat menjadi titik awal. Jika membutuhkan lebih banyak halaman dan artikel, pertimbangkan paket Premium.",
      "Bisnis yang mempunyai banyak layanan, membutuhkan halaman lebih lengkap, email perusahaan, dan artikel lebih banyak dapat mempertimbangkan Business. Sementara itu, perusahaan yang membutuhkan struktur hingga dua puluh halaman dapat melihat paket Profesional.",
      "Untuk usaha yang berfokus pada penjualan produk secara online, paket Toko Online Premium menawarkan fitur transaksi dan pengelolaan produk. UMKM yang juga membutuhkan logo, artikel SEO, manajemen media sosial, dan setup layanan Google dapat mempertimbangkan Bundling UMKM.",
      "Jangan memilih hanya berdasarkan nama paket. Cocokkan jumlah halaman, domain, artikel, revisi, waktu pengerjaan, maintenance, dan fitur dengan kebutuhan aktual. Jika masih ragu, konsultasi dapat membantu memperjelas prioritas sebelum menentukan paket.",
    ],
  },
  {
    id: "kesalahan-memilih",
    title: "Kesalahan yang Perlu Dihindari Saat Membandingkan Harga",
    paragraphs: [
      "Kesalahan pertama adalah hanya melihat harga awal tanpa memeriksa masa aktif dan renewal. Website membutuhkan domain, hosting, dan pemeliharaan. Memahami biaya setelah tahun pertama membantu bisnis membuat perencanaan anggaran yang lebih realistis.",
      "Kesalahan kedua adalah tidak membaca spesifikasi. Dua penawaran dengan harga berbeda mungkin memiliki jumlah halaman, fitur, artikel, revisi, atau layanan maintenance yang tidak sama.",
      "Kesalahan ketiga adalah menganggap semua fitur toko online sudah termasuk. Pastikan detail metode pembayaran, pengiriman, pengelolaan produk, laporan, dan integrasi sudah dijelaskan secara tertulis.",
      "Kesalahan keempat adalah tidak memastikan akses dan kepemilikan. Tanyakan bagaimana akses admin diberikan, siapa yang mengelola domain, bagaimana proses serah terima, dan bagaimana data dapat dikelola setelah proyek selesai.",
      "Kesalahan kelima adalah tidak menyiapkan materi. Konten, foto, logo, deskripsi layanan, dan informasi kontak yang terlambat dapat memengaruhi jadwal. Persiapan dari pihak klien membantu proses pengembangan berjalan lebih lancar.",
    ],
  },
  {
    id: "tips-hemat",
    title: "Tips Menghemat Biaya Pembuatan Website Tanpa Mengorbankan Kualitas",
    paragraphs: [
      "Menghemat biaya bukan berarti harus memilih penawaran paling murah. Cara yang lebih efektif adalah menyusun prioritas dan menghindari fitur yang belum diperlukan. Mulailah dengan fungsi utama yang benar-benar mendukung tujuan bisnis.",
      "Siapkan materi sebelum proyek dimulai. Logo, foto, profil, deskripsi layanan, alamat, kontak, dan daftar produk dapat mempercepat proses pengisian konten. Semakin jelas materi yang tersedia, semakin kecil risiko perubahan berulang.",
      "Pilih struktur halaman yang efisien. Gabungkan informasi yang sejenis dan hindari membuat banyak halaman yang memiliki isi hampir sama. Struktur yang baik membantu pengunjung memahami informasi sekaligus mempermudah pengelolaan.",
      "Gunakan fitur yang sesuai kebutuhan saat ini, tetapi tetap pikirkan kemungkinan pengembangan. Website dapat dimulai dari versi yang fokus, kemudian ditingkatkan ketika bisnis memiliki kebutuhan dan anggaran tambahan.",
      "Terakhir, bandingkan ruang lingkup paket secara menyeluruh. Hosting, domain, copywriting, artikel, revisi, dan maintenance memiliki nilai. Periksa apa yang sudah termasuk agar tidak membayar dua kali untuk kebutuhan yang sama.",
    ],
  },
  {
    id: "portofolio",
    title: "Mengapa Portofolio dan Pengalaman Pengembang Penting?",
    paragraphs: [
      "Portofolio membantu calon pelanggan memahami jenis proyek yang pernah dikerjakan oleh penyedia jasa. Dari portofolio, bisnis dapat melihat pendekatan desain, variasi industri, teknologi, dan tingkat kompleksitas proyek.",
      "Pada halaman layanan web HINAI Tech, beberapa contoh portofolio yang ditampilkan antara lain Cyber Security App, SlideShow Creator Tools, Blog Platform, Travel Agency Website, Ultimate Cyber Protection Suite, Cyber Protection Tools, Seina's Boutique, Book Store Website, E-commerce Platform, AISEO Tools App, dan Premium Corporate Fashion Solutions.",
      "Contoh tersebut menunjukkan variasi pekerjaan, mulai dari website bisnis dan toko online hingga aplikasi serta solusi digital. Setiap proyek memiliki kebutuhan yang berbeda sehingga teknologi dan pendekatan pengembangannya juga dapat berbeda.",
      "Saat mengevaluasi portofolio, jangan hanya melihat gambar. Jika memungkinkan, periksa website atau produk yang dapat diakses, kemudahan penggunaan, tampilan mobile, serta kesesuaian solusi dengan kebutuhan bisnis.",
    ],
  },
  {
    id: "kesimpulan",
    title: "Kesimpulan: Harga Website Harus Sesuai dengan Kebutuhan",
    paragraphs: [
      "Biaya pembuatan website dipengaruhi oleh banyak faktor, mulai dari jenis website, jumlah halaman, desain, fitur, teknologi, domain, hosting, keamanan, SEO, konten, hingga maintenance. Karena itu, tidak ada satu harga yang cocok untuk seluruh jenis bisnis.",
      "HINAI Tech menampilkan paket website mulai Rp750.000 untuk Ekonomis, Rp1.500.000 untuk Premium, Rp2.250.000 untuk Business, dan Rp3.100.000 untuk Profesional. Untuk toko online tersedia paket Rp2.700.000, sedangkan Bundling UMKM ditampilkan dengan harga Rp5.500.000.",
      "Setiap paket memiliki spesifikasi berbeda. Memilih paket yang tepat berarti memahami kebutuhan bisnis, membandingkan fitur yang tersedia, dan memastikan ruang lingkup layanan sesuai dengan tujuan pengembangan.",
      "Jika belum yakin, langkah terbaik adalah berkonsultasi sebelum memesan. Sampaikan jenis bisnis, tujuan website, halaman yang dibutuhkan, fitur utama, dan anggaran. Dengan informasi tersebut, penyedia jasa dapat membantu mengarahkan pilihan yang lebih sesuai.",
    ],
  },
];

const faqs = [
  {
    question: "Berapa harga pembuatan website di HINAI Tech?",
    answer:
      "Pada halaman layanan HINAI Tech, paket website tercantum mulai Rp750.000 untuk Ekonomis, Rp1.500.000 untuk Premium, Rp2.250.000 untuk Business, dan Rp3.100.000 untuk Profesional. Paket Toko Online Premium tercantum Rp2.700.000 dan Bundling UMKM Rp5.500.000.",
  },
  {
    question: "Apakah harga paket website sudah termasuk domain dan hosting?",
    answer:
      "Paket Ekonomis, Premium, Business, dan Profesional mencantumkan hosting gratis. Paket Ekonomis dan Premium mencantumkan domain .com gratis, sedangkan Business dan Profesional mencantumkan domain custom. Detail domain dan ketentuan perpanjangan sebaiknya dikonfirmasi saat konsultasi.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Estimasi pada paket HINAI Tech adalah dua hari untuk Ekonomis, tiga hari untuk Premium, tujuh hari untuk Business, dan tiga belas hari untuk Profesional. Paket Toko Online Premium mencantumkan tujuh sampai empat belas hari kerja. Kesiapan materi dan persetujuan klien dapat memengaruhi waktu aktual.",
  },
  {
    question: "Apakah website sudah termasuk artikel SEO?",
    answer:
      "Paket Premium mencantumkan tiga artikel, Business enam artikel, dan Profesional sepuluh artikel. Paket Ekonomis tidak mencantumkan artikel gratis. Bundling UMKM juga mencantumkan artikel SEO sebagai bagian dari layanan terpadu.",
  },
  {
    question: "Apa perbedaan paket website Business dan Profesional?",
    answer:
      "Business mencantumkan sepuluh halaman, enam artikel, email bisnis, tujuh kali revisi, dan estimasi tujuh hari. Profesional mencantumkan dua puluh halaman, sepuluh artikel, email bisnis, delapan kali revisi, dan estimasi tiga belas hari.",
  },
  {
    question: "Berapa biaya pembuatan website toko online?",
    answer:
      "HINAI Tech menampilkan paket Toko Online Premium seharga Rp2.700.000 dengan enam halaman, fitur katalog dan keranjang, pembayaran bank transfer, ongkos kirim, laporan stok dan penjualan, serta fitur lainnya. Harga renewal yang tercantum adalah Rp1.700.000 per tahun.",
  },
  {
    question: "Apa itu Bundling UMKM dari HINAI Tech?",
    answer:
      "Bundling UMKM adalah paket terpadu seharga Rp5.500.000 yang mencantumkan website company profile, bonus desain logo jika belum memiliki identitas brand, artikel SEO, manajemen media sosial, serta setup Google Search Console, Google Analytics, dan Google Business Profile.",
  },
  {
    question: "Apakah saya bisa meminta fitur khusus di luar paket?",
    answer:
      "Kebutuhan khusus dapat didiskusikan terlebih dahulu. Sampaikan fitur, alur kerja, dan tujuan yang ingin dicapai agar ruang lingkup, estimasi, serta kemungkinan biaya tambahan dapat dijelaskan sebelum proyek dimulai.",
  },
  {
    question: "Apakah website bisa dibuka melalui smartphone?",
    answer:
      "Layanan web HINAI Tech mencantumkan responsive design dan mobile friendly. Website dirancang agar dapat digunakan pada berbagai ukuran layar, meskipun hasil akhir tetap perlu diuji pada perangkat yang relevan.",
  },
  {
    question: "Bagaimana cara memesan jasa pembuatan website?",
    answer:
      "Calon pelanggan dapat menghubungi HINAI Tech melalui WhatsApp, menjelaskan kebutuhan bisnis, menentukan jenis website, dan mendiskusikan paket yang sesuai. Setelah ruang lingkup disepakati, proses pengembangan dapat direncanakan.",
  },
];

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-3xl">
        {children}
      </h2>
      <div className="mt-4 h-1 w-14 rounded-full bg-amber-500" />
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
    <div className="my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6">
      <p className="mb-2 font-bold text-slate-900">{title}</p>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-slate-200 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:hidden">
        <span>{question}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 pr-8 text-sm leading-7 text-slate-600">{answer}</p>
    </details>
  );
}

function RelatedArticle({
  category,
  title,
  description,
  href,
}: {
  category: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-600">
        {category}
      </p>
      <h3 className="mb-2 font-bold leading-snug text-slate-900 transition group-hover:text-amber-700">
        {title}
      </h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-900">
        Baca artikel <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

function PackageTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-950 text-white">
              <th className="px-4 py-4 font-bold">Spesifikasi</th>
              {packages.map((item) => (
                <th key={item.name} className="px-4 py-4 font-bold">
                  <span>{item.name}</span>
                  {item.recommended && (
                    <span className="mt-1 block text-xs font-semibold text-amber-300">
                      Pilihan paket
                    </span>
                  )}
                  <span className="mt-2 block text-base font-extrabold text-amber-300">
                    {item.price}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Masa aktif", ...packages.map((p) => p.duration)],
              ["Jumlah halaman", ...packages.map((p) => p.pages)],
              ["Hosting", ...packages.map((p) => p.hosting)],
              ["Domain", ...packages.map((p) => p.domain)],
              ["Copywriting", ...packages.map((p) => p.copywriting)],
              ["Artikel gratis", ...packages.map((p) => p.articles)],
              ["Email bisnis", ...packages.map((p) => p.email)],
              ["Revisi", ...packages.map((p) => p.revisions)],
              ["Waktu pengerjaan", ...packages.map((p) => p.timeline)],
              ["Maintenance", ...packages.map((p) => p.maintenance)],
            ].map((row, index) => (
              <tr
                key={row[0]}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${row[0]}-${cellIndex}`}
                    className={`px-4 py-4 leading-6 ${
                      cellIndex === 0
                        ? "font-bold text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function WebsiteCostArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [`${SITE_URL}${ARTICLE_IMAGE}`],
    datePublished: "2026-11-15T08:00:00+07:00",
    dateModified: "2026-11-15T08:00:00+07:00",
    inLanguage: "id-ID",
    author: {
      "@type": "Organization",
      name: "HINAI Tech",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "HINAI Tech",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ARTICLE_URL,
    },
    keywords:
      "biaya pembuatan website, harga website, jasa pembuatan website, paket website, website UMKM",
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: TITLE,
        item: ARTICLE_URL,
      },
    ],
  };

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <Navigation />

        {/* HERO */}
        <header className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.2),transparent_38%)]" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                <span>HINAI Tech Blog</span>
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                <span>Website Development</span>
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {TITLE}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Panduan lengkap memahami harga website, faktor yang
                memengaruhi biaya, perbedaan paket, dan cara menentukan
                solusi yang tepat untuk bisnis Anda.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
                <span>15 November 2026</span>
                <span>•</span>
                <span>HINAI Tech Editorial</span>
                <span>•</span>
                <span>± 15 menit membaca</span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <article className="min-w-0">
            {/* FEATURE IMAGE */}
            <figure className="mb-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
                <Image
                  src={ARTICLE_IMAGE}
                  alt="Ilustrasi biaya pembuatan website dan pengembangan website profesional"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-right text-xs leading-5 text-slate-500">
                Ilustrasi pengembangan website. Sumber gambar:{" "}
                <a
                  href={IMAGE_SOURCE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Unsplash
                </a>
                .
              </figcaption>
            </figure>

            {/* INTRO */}
            <div className="mb-10 rounded-2xl border-l-4 border-amber-500 bg-slate-50 p-6 md:p-8">
              <p className="text-base leading-8 text-slate-700">
                Berapa biaya pembuatan website? Pertanyaan ini sering
                ditanyakan oleh pemilik UMKM, perusahaan, lembaga pendidikan,
                hingga individu yang ingin membangun kehadiran digital.
                Jawabannya bergantung pada jenis website, fitur, jumlah
                halaman, desain, teknologi, dan layanan yang dibutuhkan.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Melalui artikel ini, Anda akan memahami komponen yang
                memengaruhi harga website sekaligus melihat daftar paket
                pembuatan website HINAI Tech, mulai dari website bisnis
                sederhana hingga toko online dan solusi digital terpadu.
              </p>
            </div>

            {/* TOC */}
            <nav
              aria-label="Daftar isi artikel"
              className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-extrabold text-slate-900">
                Daftar Isi
              </h2>
              <ol className="grid gap-3 sm:grid-cols-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-3 text-sm leading-6 text-slate-600 transition hover:text-amber-700"
                    >
                      <span className="font-bold tabular-nums text-amber-600">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#daftar-paket"
                    className="flex gap-3 text-sm leading-6 text-slate-600 transition hover:text-amber-700"
                  >
                    <span className="font-bold text-amber-600">19.</span>
                    <span>Daftar Harga Paket Website HINAI Tech</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="flex gap-3 text-sm leading-6 text-slate-600 transition hover:text-amber-700"
                  >
                    <span className="font-bold text-amber-600">20.</span>
                    <span>Pertanyaan yang Sering Diajukan</span>
                  </a>
                </li>
              </ol>
            </nav>

            {/* ARTICLE SECTIONS */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <SectionTitle
                    eyebrow={`Pembahasan ${String(index + 1).padStart(2, "0")}`}
                  >
                    {section.title}
                  </SectionTitle>

                  <div className="space-y-5 text-[15px] leading-8 text-slate-700 md:text-base">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${section.id}-${paragraphIndex}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-5 md:p-6">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {index === 1 && (
                    <InfoBox title="Catatan mengenai harga">
                      Harga yang dibahas pada artikel ini mengikuti daftar
                      paket yang ditampilkan di halaman layanan HINAI Tech.
                      Konfirmasikan kembali ketersediaan dan rincian paket
                      sebelum melakukan pemesanan.
                    </InfoBox>
                  )}

                  {index === 6 && (
                    <InfoBox title="Jangan lupakan biaya perpanjangan">
                      Selain biaya awal, perhatikan masa aktif domain,
                      hosting, dan layanan pemeliharaan. Tanyakan komponen
                      renewal agar anggaran operasional website lebih
                      terencana.
                    </InfoBox>
                  )}

                  {index === 15 && (
                    <InfoBox title="Penting sebelum memilih paket">
                      Pastikan fitur yang dibutuhkan sudah tercantum dalam
                      ruang lingkup pekerjaan. Jika membutuhkan integrasi
                      atau fungsi khusus, mintalah penjelasan sebelum proyek
                      dimulai.
                    </InfoBox>
                  )}
                </section>
              ))}
            </div>

            {/* PRICING TABLE */}
            <section id="daftar-paket" className="mt-16 scroll-mt-28">
              <SectionTitle eyebrow="Harga Website HINAI Tech">
                Daftar Paket dan Harga Pembuatan Website
              </SectionTitle>

              <p className="mb-6 text-base leading-8 text-slate-700">
                Berikut perbandingan paket website yang ditampilkan pada
                halaman resmi HINAI Tech. Tabel ini membantu Anda melihat
                perbedaan jumlah halaman, domain, artikel, revisi, dan
                estimasi pengerjaan sebelum menentukan pilihan.
              </p>

              <PackageTable />

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Sumber:{" "}
                <a
                  href="https://hinaitech.com/services/web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline"
                >
                  Halaman Jasa Pembuatan Website HINAI Tech
                </a>
                . Harga dan spesifikasi dapat berubah. Konfirmasikan kembali
                sebelum melakukan pemesanan.
              </p>
            </section>

            {/* BUNDLING */}
            <section className="mt-14">
              <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <div className="border-b border-amber-200 p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                    Solusi Terpadu untuk UMKM
                  </p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
                    Paket Bundling UMKM
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Satu paket untuk membantu UMKM membangun fondasi digital
                    yang lebih menyeluruh.
                  </p>
                  <p className="mt-5 text-4xl font-black tracking-tight text-slate-950">
                    Rp5.500.000
                  </p>
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
                  {[
                    "Website company profile profesional dan modern",
                    "Bonus desain logo jika belum memiliki identitas brand",
                    "Artikel SEO",
                    "Manajemen media sosial",
                    "Setup Google Search Console",
                    "Setup Google Analytics",
                    "Setup Google Business Profile",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-black text-amber-900">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-slate-800"
                  >
                    Konsultasikan Bundling UMKM →
                  </a>
                </div>
              </div>
            </section>

            {/* ECOMMERCE */}
            <section className="mt-14">
              <SectionTitle eyebrow="Solusi Toko Online">
                Paket Toko Online Premium — Rp2.700.000
              </SectionTitle>

              <p className="mb-6 text-base leading-8 text-slate-700">
                Untuk bisnis yang ingin menjual produk secara online, HINAI
                Tech juga menampilkan paket Toko Online Premium. Paket ini
                dirancang dengan fitur katalog, keranjang belanja, pemesanan,
                dan pengelolaan produk.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Jumlah halaman", "6 halaman website"],
                  ["Masa aktif", "1 tahun"],
                  ["Domain dan hosting", "Gratis"],
                  ["Revisi", "3 kali"],
                  ["Waktu pengerjaan", "7–14 hari kerja"],
                  ["Maintenance", "4 jam per bulan"],
                  ["SSL", "Gratis"],
                  ["Email perusahaan", "Termasuk"],
                  ["Akses admin", "Termasuk"],
                  ["Harga renewal", "Rp1.700.000/tahun"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 font-bold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  Fitur yang tersedia
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Keranjang belanja",
                    "Pembayaran bank transfer",
                    "Pengaturan ongkos kirim",
                    "Chat WhatsApp",
                    "Tombol order via WhatsApp",
                    "Harga coret dan diskon",
                    "Kategori produk",
                    "Variasi produk",
                    "Laporan stok",
                    "Laporan penjualan",
                    "Upsell dan cross-sell",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-slate-700">
                      <span className="font-bold text-amber-600">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROCESS */}
            <section className="mt-14">
              <SectionTitle eyebrow="Proses Pengembangan">
                Alur Pengerjaan Website HINAI Tech
              </SectionTitle>

              <div className="space-y-4">
                {[
                  [
                    "01",
                    "Idea Exploration & Goal Planning",
                    "Menggali ide, memahami kebutuhan, dan menetapkan tujuan proyek.",
                  ],
                  [
                    "02",
                    "System Analysis & Planning",
                    "Menganalisis kebutuhan sistem, alur kerja, dan perencanaan teknis.",
                  ],
                  [
                    "03",
                    "System Design & Architecture",
                    "Merancang struktur sistem, arsitektur, dan antarmuka pengguna.",
                  ],
                  [
                    "04",
                    "Development & Execution",
                    "Membangun website menggunakan teknologi yang sesuai kebutuhan.",
                  ],
                  [
                    "05",
                    "Testing & Quality Control",
                    "Menguji fungsi, stabilitas, responsivitas, dan kualitas website.",
                  ],
                  [
                    "06",
                    "Deployment & Launch",
                    "Menghubungkan website dengan server produksi dan meluncurkannya.",
                  ],
                  [
                    "07",
                    "Maintenance & Evaluation",
                    "Melakukan pemeliharaan, evaluasi performa, dan peningkatan sistem.",
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-amber-400">
                      {number}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="mt-14">
              <SectionTitle eyebrow="Teknologi">
                Teknologi yang Digunakan
              </SectionTitle>

              <p className="mb-5 text-base leading-8 text-slate-700">
                Pemilihan teknologi disesuaikan dengan jenis website dan
                kebutuhan proyek. Teknologi yang ditampilkan pada halaman
                layanan HINAI Tech meliputi:
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "React",
                  "Vue",
                  "Next.js",
                  "Nuxt.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "WordPress",
                  "Python",
                ].map((technology) => (
                  <div
                    key={technology}
                    className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </section>

            {/* PORTFOLIO */}
            <section className="mt-14">
              <SectionTitle eyebrow="Pengalaman Proyek">
                Contoh Portofolio Web dan Aplikasi
              </SectionTitle>

              <p className="mb-5 text-base leading-8 text-slate-700">
                HINAI Tech menampilkan berbagai contoh proyek pada halaman
                layanan, antara lain:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Cyber Security App",
                  "SlideShow Creator Tools",
                  "Blog Platform",
                  "Travel Agency Website",
                  "Ultimate Cyber Protection Suite",
                  "Cyber Protection Tools",
                  "Seina's Boutique",
                  "Book Store Website",
                  "E-commerce Platform",
                  "AISEO Tools App",
                  "Premium Corporate Fashion Solutions",
                ].map((project) => (
                  <div
                    key={project}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {project}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://hinaitech.com/services/web"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-blue-700 hover:underline"
              >
                Lihat halaman layanan dan portofolio HINAI Tech →
              </a>
            </section>

            {/* CHECKLIST */}
            <section className="mt-14">
              <SectionTitle eyebrow="Panduan Praktis">
                Checklist Sebelum Memesan Website
              </SectionTitle>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Tentukan tujuan website.",
                  "Kenali target pelanggan.",
                  "Pilih jenis website yang dibutuhkan.",
                  "Susun daftar halaman.",
                  "Tentukan fitur utama.",
                  "Siapkan logo dan identitas bisnis.",
                  "Siapkan foto dan materi konten.",
                  "Tentukan anggaran pengembangan.",
                  "Periksa domain dan hosting.",
                  "Tanyakan biaya perpanjangan.",
                  "Pastikan jumlah revisi.",
                  "Perjelas cakupan maintenance.",
                  "Pastikan akses admin dan serah terima.",
                  "Tentukan jadwal pengerjaan.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-700">
                      ✓
                    </span>
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="relative mt-16 overflow-hidden rounded-3xl bg-slate-950 p-7 md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
              <div className="relative">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  Website Development HINAI Tech
                </p>
                <h2 className="max-w-2xl text-2xl font-black leading-tight text-white md:text-3xl">
                  Ingin Membuat Website Profesional untuk Bisnis Anda?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  Mulai dari website company profile, landing page, website
                  bisnis, hingga toko online. Konsultasikan kebutuhan Anda
                  bersama HINAI Tech untuk menemukan solusi yang sesuai.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
                  >
                    Konsultasi via WhatsApp →
                  </a>
                  <a
                    href="https://hinaitech.com/services/web"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Lihat Paket Website
                  </a>
                </div>
              </div>
            </section>

            {/* REFERENCES */}
            <section className="mt-12 border-t border-slate-200 pt-8">
              <h2 className="mb-4 text-lg font-extrabold text-slate-900">
                Referensi dan Sumber Informasi
              </h2>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li>
                  <a
                    href="https://hinaitech.com/services/web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    HINAI Tech — Jasa Pembuatan Website
                  </a>{" "}
                  — referensi paket harga, spesifikasi, fitur, proses
                  pengembangan, teknologi, dan portofolio.
                </li>
                <li>
                  <a
                    href="https://developers.google.com/search/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Google Search Central
                  </a>{" "}
                  — dokumentasi SEO dan praktik Google Search.
                </li>
                <li>
                  <a
                    href="https://web.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    web.dev
                  </a>{" "}
                  — panduan performa dan pengalaman pengguna website.
                </li>
                <li>
                  <a
                    href="https://www.w3.org/WAI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    W3C Web Accessibility Initiative
                  </a>{" "}
                  — panduan aksesibilitas website.
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-14 scroll-mt-28">
              <SectionTitle eyebrow="FAQ">
                Pertanyaan yang Sering Diajukan
              </SectionTitle>
              <div className="divide-y divide-slate-200">
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </section>

            {/* RELATED ARTICLES */}
            <section className="mt-16">
              <SectionTitle eyebrow="Artikel Pilihan">
                Baca Juga Artikel Lainnya
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-2">
                <RelatedArticle
                  category="Dasar Website"
                  title="Apa Itu Website? Pengertian, Fungsi, Jenis, dan Manfaatnya untuk Bisnis"
                  description="Kenali dasar website dan bagaimana penggunaannya untuk mendukung kebutuhan bisnis."
                  href="/blog/apa-itu-website"
                />
                <RelatedArticle
                  category="Strategi Bisnis"
                  title="Mengapa Bisnis Membutuhkan Website Profesional di Era Digital?"
                  description="Pelajari manfaat website untuk membangun kepercayaan dan memperluas jangkauan bisnis."
                  href="/blog/mengapa-bisnis-membutuhkan-website-profesional-di-era-digital"
                />
              </div>
            </section>

            {/* AUTHOR */}
            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-amber-400">
                H
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Artikel oleh
                </p>
                <h3 className="mt-1 font-extrabold text-slate-900">
                  HINAI Tech Editorial
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Berbagi wawasan seputar website, teknologi, aplikasi, dan
                  transformasi digital untuk bisnis dan pendidikan.
                </p>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                Ringkasan Artikel
              </p>
              <h2 className="mt-3 text-xl font-extrabold leading-snug text-slate-900">
                Berapa Biaya Pembuatan Website?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Harga dipengaruhi jenis website, jumlah halaman, desain,
                fitur, teknologi, domain, hosting, SEO, dan maintenance.
              </p>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Harga Paket HINAI Tech
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    ["Ekonomis", "Rp750.000"],
                    ["Premium", "Rp1.500.000"],
                    ["Business", "Rp2.250.000"],
                    ["Profesional", "Rp3.100.000"],
                    ["Toko Online", "Rp2.700.000"],
                    ["Bundling UMKM", "Rp5.500.000"],
                  ].map(([name, price]) => (
                    <div
                      key={name}
                      className="flex justify-between gap-3 text-sm"
                    >
                      <span className="text-slate-600">{name}</span>
                      <span className="font-bold text-slate-900">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://hinaitech.com/services/web"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-blue-700 hover:underline"
              >
                Lihat detail paket →
              </a>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                Konsultasi Website
              </p>
              <h2 className="mt-3 text-xl font-extrabold leading-snug">
                Temukan Paket yang Tepat untuk Bisnis Anda
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Ceritakan kebutuhan bisnis dan fitur yang ingin Anda miliki.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
              >
                Hubungi HINAI Tech →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="font-extrabold text-slate-900">
                Informasi Artikel
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Kategori</dt>
                  <dd className="font-semibold text-slate-800">
                    Website Development
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Tanggal</dt>
                  <dd className="font-semibold text-slate-800">
                    15 Nov 2026
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Waktu baca</dt>
                  <dd className="font-semibold text-slate-800">
                    ± 15 menit
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Penerbit</dt>
                  <dd className="font-semibold text-slate-800">
                    HINAI Tech
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
           
            <Link
              href="/blog"
              className="font-semibold text-amber-400 transition hover:text-amber-300"
            >
              Kembali ke Blog →
            </Link>
          </div>
        </footer>
      </main>
    </LanguageProvider>
  );
}
