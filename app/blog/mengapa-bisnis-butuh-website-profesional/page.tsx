
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { LanguageProvider } from "@/components/language-provider";

const SITE_URL = "https://hinaitech.com";
const ARTICLE_SLUG =
  "mengapa-bisnis-membutuhkan-website-profesional-di-era-digital";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;

const ARTICLE_IMAGE = "/artikel/butuh-website.jpg";
const IMAGE_SOURCE =
  "https://unsplash.com/photos/graphical-user-interface-website-WZ8jLZDB_9s";

const TITLE =
  "Mengapa Bisnis Membutuhkan Website Profesional di Era Digital?";
const DESCRIPTION =
  "Pelajari alasan bisnis membutuhkan website profesional, mulai dari membangun kepercayaan, menjangkau pelanggan, meningkatkan penjualan, hingga memperkuat identitas merek di era digital.";

export const metadata: Metadata = {
  title: `${TITLE} | HINAI Tech`,
  description: DESCRIPTION,
  alternates: {
    canonical: ARTICLE_URL,
  },
  keywords: [
    "website profesional",
    "manfaat website untuk bisnis",
    "pentingnya website bisnis",
    "jasa pembuatan website",
    "website perusahaan",
    "website UMKM",
    "digital marketing",
    "SEO website",
    "HINAI Tech",
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
        alt: "Website profesional untuk kebutuhan bisnis",
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

const articleSections: ArticleSection[] = [
  {
    id: "perubahan-perilaku-konsumen",
    title: "Perubahan Perilaku Konsumen di Era Digital",
    paragraphs: [
      "Perkembangan teknologi internet telah mengubah cara masyarakat mencari informasi, membandingkan produk, dan menentukan keputusan pembelian. Sebelum menghubungi penjual, calon pelanggan biasanya melakukan pencarian melalui Google, media sosial, marketplace, atau rekomendasi dari orang lain. Mereka ingin mengetahui produk yang ditawarkan, harga, lokasi, kualitas layanan, dan reputasi bisnis terlebih dahulu.",
      "Kondisi tersebut membuat kehadiran digital menjadi bagian penting dari perjalanan pelanggan. Bisnis yang mudah ditemukan dan memiliki informasi yang jelas berpeluang lebih besar untuk mendapatkan perhatian. Sebaliknya, bisnis yang sulit ditemukan di internet dapat kehilangan kesempatan, meskipun sebenarnya memiliki produk dan layanan yang berkualitas.",
      "Website profesional membantu bisnis menyediakan informasi yang dapat diakses kapan saja. Calon pelanggan tidak harus menunggu jam operasional untuk mengenal perusahaan. Mereka dapat membaca profil, melihat katalog, mempelajari layanan, dan menemukan informasi kontak secara mandiri.",
    ],
  },
  {
    id: "membangun-kredibilitas",
    title: "Membangun Kredibilitas dan Kepercayaan Pelanggan",
    paragraphs: [
      "Kepercayaan merupakan salah satu faktor yang memengaruhi keputusan pembelian. Ketika calon pelanggan menemukan sebuah bisnis di internet, mereka ingin memastikan bahwa bisnis tersebut benar-benar memiliki identitas, layanan, dan informasi yang dapat dipertanggungjawabkan.",
      "Website perusahaan dapat menjadi pusat informasi resmi yang menampilkan profil bisnis, alamat, kontak, portofolio, pengalaman, testimoni, serta informasi legalitas apabila tersedia. Informasi yang disusun secara konsisten membantu calon pelanggan memahami siapa penyedia layanan dan bagaimana bisnis tersebut beroperasi.",
      "Tampilan website juga memengaruhi kesan pertama. Desain yang rapi, navigasi yang jelas, tulisan yang mudah dibaca, serta halaman yang dapat dibuka dengan baik di ponsel menunjukkan bahwa bisnis memperhatikan pengalaman pengunjung. Namun, desain menarik harus didukung informasi yang benar dan layanan yang nyata.",
    ],
    bullets: [
      "Profil perusahaan dan informasi kontak yang jelas.",
      "Portofolio atau dokumentasi pekerjaan yang relevan.",
      "Testimoni pelanggan yang asli dan dapat dipertanggungjawabkan.",
      "Informasi produk, layanan, dan kebijakan yang transparan.",
    ],
  },
  {
    id: "jangkauan-pasar",
    title: "Memperluas Jangkauan Pasar",
    paragraphs: [
      "Bisnis dengan lokasi fisik biasanya memiliki jangkauan pelanggan yang dipengaruhi oleh jarak, waktu, dan biaya operasional. Website membuka peluang untuk memperkenalkan produk dan layanan kepada calon pelanggan di wilayah yang lebih luas.",
      "Sebagai contoh, usaha lokal di Bandar Lampung dapat membuat halaman layanan yang menjelaskan area pelayanan, produk, dan cara pemesanan. Informasi tersebut dapat ditemukan oleh orang yang mencari kebutuhan serupa melalui mesin pencari. Dengan strategi konten dan SEO yang tepat, peluang mendapatkan pengunjung dari luar lingkungan sekitar menjadi lebih besar.",
      "Jangkauan yang lebih luas tidak berarti semua pengunjung otomatis menjadi pelanggan. Bisnis tetap perlu menentukan target pasar, menyesuaikan pesan pemasaran, menyediakan proses komunikasi yang mudah, dan memastikan kapasitas layanan mampu memenuhi permintaan.",
    ],
  },
  {
    id: "pusat-informasi",
    title: "Menjadi Pusat Informasi Resmi Bisnis",
    paragraphs: [
      "Informasi bisnis sering tersebar di berbagai platform, seperti Instagram, TikTok, Facebook, marketplace, dan WhatsApp. Jika tidak dikelola dengan baik, informasi tersebut dapat berbeda-beda atau sulit ditemukan oleh calon pelanggan.",
      "Website dapat menjadi pusat informasi utama yang menghubungkan berbagai kanal digital. Media sosial digunakan untuk menarik perhatian dan membangun interaksi, sedangkan website menyediakan penjelasan yang lebih lengkap mengenai perusahaan, produk, layanan, artikel, dan kebijakan bisnis.",
      "Dengan pusat informasi yang terorganisasi, pelanggan tidak perlu mencari informasi dari banyak sumber. Bisnis juga lebih mudah memperbarui informasi ketika terjadi perubahan harga, layanan, alamat, jam operasional, atau prosedur pemesanan.",
    ],
  },
  {
    id: "promosi-24-jam",
    title: "Mendukung Promosi dan Informasi Selama 24 Jam",
    paragraphs: [
      "Website dapat diakses sepanjang waktu selama server dan koneksi internet berfungsi. Artinya, calon pelanggan tetap dapat mengenal bisnis ketika kantor atau toko sedang tutup. Mereka bisa membaca informasi layanan, melihat katalog, mengisi formulir, atau mengirim permintaan penawaran.",
      "Fungsi ini sangat bermanfaat bagi bisnis yang melayani pelanggan dengan jadwal berbeda. Website dapat menampilkan informasi dasar secara otomatis sehingga pemilik bisnis tidak harus menjawab pertanyaan yang sama berulang kali.",
      "Meskipun website dapat diakses selama 24 jam, bukan berarti semua pesan pelanggan harus langsung dijawab. Bisnis dapat menggunakan formulir, chatbot, atau integrasi WhatsApp untuk mengumpulkan kebutuhan pelanggan dan menindaklanjutinya sesuai jam operasional.",
    ],
  },
  {
    id: "seo-google",
    title: "Meningkatkan Peluang Ditemukan Melalui Google",
    paragraphs: [
      "Search Engine Optimization atau SEO merupakan proses mengoptimalkan website agar lebih mudah dipahami mesin pencari dan berpeluang muncul pada hasil pencarian yang relevan. SEO membantu bisnis menjangkau orang yang memang sedang mencari informasi, produk, atau layanan tertentu.",
      "Website memberikan ruang untuk mengembangkan halaman layanan, artikel edukasi, panduan, studi kasus, dan halaman berdasarkan lokasi. Setiap halaman dapat disusun untuk menjawab kebutuhan pencarian yang berbeda. Misalnya, penyedia jasa website dapat membuat konten tentang website untuk UMKM, website sekolah, atau biaya pembuatan website.",
      "SEO bukan proses instan dan tidak menjamin posisi pertama di Google. Hasilnya dipengaruhi kualitas konten, relevansi dengan kebutuhan pengguna, pengalaman halaman, reputasi website, persaingan kata kunci, serta faktor teknis lainnya.",
    ],
    bullets: [
      "Gunakan judul halaman yang jelas dan relevan.",
      "Buat konten yang menjawab kebutuhan pembaca.",
      "Susun struktur heading secara teratur.",
      "Optimalkan gambar, kecepatan, dan tampilan mobile.",
      "Gunakan internal link yang membantu navigasi.",
      "Pantau performa melalui Google Search Console.",
    ],
  },
  {
    id: "content-marketing",
    title: "Mendukung Strategi Content Marketing",
    paragraphs: [
      "Content marketing adalah pendekatan pemasaran melalui konten yang bermanfaat bagi audiens. Bentuknya dapat berupa artikel, panduan, video, infografis, studi kasus, dan materi edukasi lainnya. Website menjadi tempat yang tepat untuk mengumpulkan konten tersebut dalam struktur yang mudah dijelajahi.",
      "Artikel yang menjawab pertanyaan calon pelanggan dapat membantu membangun pemahaman sebelum mereka membeli. Sebagai contoh, bisnis teknologi dapat menerbitkan panduan memilih website, penjelasan aplikasi kasir, atau tips menjaga keamanan data usaha.",
      "Konten yang baik tidak hanya berisi promosi. Pembaca perlu memperoleh manfaat nyata, seperti pengetahuan, solusi, atau pertimbangan sebelum mengambil keputusan. Pada bagian yang relevan, bisnis dapat menambahkan ajakan untuk menghubungi tim atau melihat layanan terkait.",
    ],
  },
  {
    id: "integrasi-media-sosial",
    title: "Menghubungkan Website dengan Media Sosial dan WhatsApp",
    paragraphs: [
      "Website dan media sosial sebaiknya tidak diperlakukan sebagai dua kanal yang saling menggantikan. Keduanya memiliki fungsi berbeda dan dapat bekerja bersama. Media sosial membantu bisnis membangun jangkauan, interaksi, serta komunikasi yang lebih cepat, sementara website menyediakan informasi yang lebih terstruktur.",
      "Tautan dari media sosial dapat diarahkan ke halaman produk, artikel, formulir, atau landing page tertentu. Sebaliknya, website dapat menampilkan tautan menuju akun resmi media sosial agar pengunjung dapat mengenal aktivitas bisnis lebih jauh.",
      "Integrasi WhatsApp juga mempermudah calon pelanggan menghubungi bisnis. Tombol WhatsApp dapat ditempatkan pada halaman layanan, halaman kontak, atau bagian penawaran. Pastikan pesan awal dan informasi yang ditampilkan sesuai dengan kebutuhan pelanggan.",
    ],
  },
  {
    id: "efisiensi-operasional",
    title: "Meningkatkan Efisiensi Operasional",
    paragraphs: [
      "Website tidak hanya berfungsi sebagai media promosi. Dengan fitur yang sesuai, website dapat membantu menyederhanakan pekerjaan operasional. Bisnis dapat menyediakan formulir pendaftaran, permintaan penawaran, pemesanan, pengumpulan data pelanggan, hingga sistem reservasi.",
      "Perusahaan yang menerima banyak pertanyaan berulang dapat membuat halaman FAQ atau pusat bantuan. Informasi mengenai cara pemesanan, persyaratan layanan, metode pembayaran, dan kebijakan dapat dibaca pelanggan tanpa harus selalu menghubungi staf.",
      "Untuk kebutuhan yang lebih kompleks, website dapat dikembangkan menjadi aplikasi khusus yang terhubung dengan database, sistem inventaris, CRM, dashboard laporan, atau aplikasi internal. Fitur harus ditentukan berdasarkan proses bisnis, bukan sekadar mengikuti tren teknologi.",
    ],
  },
  {
    id: "identitas-merek",
    title: "Memperkuat Identitas dan Branding Bisnis",
    paragraphs: [
      "Branding bukan hanya logo dan warna. Identitas merek juga mencakup cara bisnis menyampaikan pesan, nilai yang ditawarkan, gaya komunikasi, dan pengalaman pelanggan. Website menjadi salah satu media untuk menampilkan seluruh elemen tersebut secara konsisten.",
      "Melalui website, perusahaan dapat menentukan struktur informasi, gaya visual, pilihan kata, ilustrasi, dan pengalaman pengguna yang sesuai dengan karakter merek. Hal ini membantu bisnis tampil lebih mudah dikenali di antara kompetitor.",
      "Konsistensi antara website, media sosial, materi promosi, dan komunikasi layanan akan memperkuat persepsi merek. Karena itu, proses pembuatan website sebaiknya melibatkan pemahaman tentang identitas bisnis dan target audiens.",
    ],
  },
  {
    id: "pengalaman-pengguna",
    title: "Memberikan Pengalaman Pengguna yang Lebih Baik",
    paragraphs: [
      "Website yang baik harus membantu pengunjung menemukan informasi dan menyelesaikan tujuan mereka. Pengunjung seharusnya tidak kesulitan mencari menu layanan, membaca informasi harga, menemukan alamat, atau menghubungi bisnis.",
      "Pengalaman pengguna atau User Experience (UX) mencakup kemudahan navigasi, keterbacaan, konsistensi tampilan, kejelasan tombol, dan alur interaksi. Sementara itu, User Interface (UI) berkaitan dengan elemen visual seperti warna, tipografi, ikon, jarak, dan komponen antarmuka.",
      "Desain yang menarik tidak akan efektif jika pengunjung kesulitan menggunakannya. Oleh karena itu, struktur halaman harus dirancang berdasarkan kebutuhan pengguna dan diuji pada berbagai perangkat sebelum website dipublikasikan.",
    ],
  },
  {
    id: "website-mobile-friendly",
    title: "Menjangkau Pengguna Smartphone dengan Desain Responsif",
    paragraphs: [
      "Banyak pengguna mengakses informasi melalui smartphone. Website yang hanya nyaman dibuka di komputer berisiko memberikan pengalaman buruk bagi pengunjung mobile. Teks terlalu kecil, tombol sulit ditekan, gambar terpotong, dan menu yang tidak berfungsi dapat membuat pengunjung meninggalkan halaman.",
      "Desain responsif memungkinkan tata letak menyesuaikan ukuran layar perangkat. Elemen halaman, gambar, navigasi, dan kolom konten disusun agar tetap mudah digunakan pada ponsel, tablet, maupun desktop.",
      "Pengujian responsif sebaiknya dilakukan pada ukuran layar yang berbeda. Perhatikan juga ukuran file gambar, waktu pemuatan, jarak antartombol, dan kemudahan membaca agar website nyaman digunakan dalam berbagai kondisi.",
    ],
  },
  {
    id: "keamanan-website",
    title: "Menjaga Keamanan dan Pengelolaan Data",
    paragraphs: [
      "Keamanan merupakan aspek penting, terutama jika website menyimpan data pelanggan, menerima formulir, memiliki akun pengguna, atau terhubung dengan sistem pembayaran. Website perlu dirancang dengan praktik keamanan yang sesuai dengan jenis data dan tingkat risikonya.",
      "Langkah dasar dapat mencakup penggunaan HTTPS, pembaruan sistem dan dependensi, pengelolaan hak akses, kata sandi yang kuat, pencadangan data, serta perlindungan terhadap spam. Website yang memiliki fitur transaksi atau data sensitif membutuhkan evaluasi keamanan yang lebih menyeluruh.",
      "Pemilik bisnis juga perlu menentukan siapa yang bertanggung jawab atas pemeliharaan website. Pembaruan rutin dan pemantauan membantu mengurangi risiko gangguan, kehilangan data, atau kerentanan yang tidak terdeteksi.",
    ],
  },
  {
    id: "persaingan-bisnis",
    title: "Meningkatkan Daya Saing di Tengah Persaingan Bisnis",
    paragraphs: [
      "Persaingan bisnis semakin terbuka karena pelanggan dapat membandingkan banyak penyedia produk dan layanan melalui internet. Mereka dapat melihat harga, kualitas informasi, ulasan, portofolio, dan kemudahan komunikasi sebelum memilih.",
      "Website membantu bisnis menjelaskan keunggulan secara lebih terarah. Perusahaan dapat menampilkan spesialisasi, proses kerja, hasil proyek, layanan unggulan, serta alasan mengapa pelanggan perlu mempertimbangkan penawaran tersebut.",
      "Website bukan jaminan untuk mengalahkan kompetitor. Keunggulan tetap harus didukung kualitas produk, pelayanan, harga yang sesuai, dan pengalaman pelanggan. Website berperan sebagai sarana untuk mengomunikasikan nilai tersebut secara lebih efektif.",
    ],
  },
  {
    id: "investasi-jangka-panjang",
    title: "Website sebagai Investasi Digital Jangka Panjang",
    paragraphs: [
      "Membangun website membutuhkan biaya pengembangan, domain, hosting atau server, pemeliharaan, dan pengelolaan konten. Karena itu, bisnis perlu melihat website sebagai investasi yang harus memiliki tujuan dan ukuran keberhasilan.",
      "Berbeda dengan kanal promosi yang sepenuhnya bergantung pada platform pihak ketiga, website memberikan kendali lebih besar atas struktur konten, identitas, dan pengalaman pengunjung. Meski demikian, website tetap membutuhkan layanan infrastruktur dan pengelolaan teknis agar dapat berfungsi dengan baik.",
      "Nilai investasi dapat dievaluasi melalui jumlah pengunjung berkualitas, permintaan penawaran, formulir yang masuk, percakapan WhatsApp, transaksi, serta kontribusi website terhadap proses penjualan. Ukuran yang dipilih harus sesuai dengan tujuan bisnis.",
    ],
  },
  {
    id: "jenis-website",
    title: "Jenis Website yang Dapat Digunakan oleh Bisnis",
    paragraphs: [
      "Tidak semua bisnis membutuhkan jenis website yang sama. Pemilihan jenis website harus disesuaikan dengan model bisnis, target pelanggan, proses operasional, dan tujuan pengembangan.",
      "Website company profile cocok untuk memperkenalkan perusahaan, profil, layanan, portofolio, dan kontak. Landing page lebih fokus pada satu produk, kampanye, atau tujuan konversi. Website katalog membantu menampilkan berbagai produk, sedangkan e-commerce menyediakan fitur transaksi secara online.",
      "Bisnis yang memiliki proses operasional khusus dapat membutuhkan web application, seperti sistem manajemen pelanggan, pemesanan, inventaris, keuangan, atau dashboard internal. Untuk menentukan pilihan, petakan terlebih dahulu masalah yang ingin diselesaikan.",
    ],
    bullets: [
      "Company Profile: profil dan identitas perusahaan.",
      "Landing Page: promosi produk atau kampanye tertentu.",
      "Website Katalog: menampilkan produk dan layanan.",
      "E-commerce: katalog, keranjang, dan transaksi online.",
      "Web Application: sistem dengan fitur dan alur kerja khusus.",
      "Portal atau Website Pendidikan: informasi dan layanan pembelajaran.",
    ],
  },
  {
    id: "tahapan-pembuatan",
    title: "Tahapan Membuat Website Profesional",
    paragraphs: [
      "Pembuatan website profesional sebaiknya dimulai dengan memahami kebutuhan bisnis. Tim pengembang perlu mengetahui tujuan website, target pengguna, fitur yang dibutuhkan, jenis konten, referensi desain, dan batasan anggaran.",
      "Setelah kebutuhan dipetakan, proses dapat dilanjutkan ke perancangan struktur halaman dan UI/UX. Tahap pengembangan kemudian menerjemahkan rancangan menjadi website yang berfungsi. Setelah itu, dilakukan pengujian untuk memastikan halaman, formulir, navigasi, dan tampilan berjalan dengan baik.",
      "Sebelum peluncuran, domain, hosting atau server, SSL, konfigurasi teknis, dan kebutuhan analitik perlu disiapkan. Setelah website online, pekerjaan belum selesai. Pemilik bisnis perlu memperbarui informasi, memantau performa, dan melakukan perbaikan berdasarkan data penggunaan.",
    ],
    bullets: [
      "Requirement: memahami tujuan, kebutuhan, dan fitur.",
      "Design: menyusun struktur halaman serta UI/UX.",
      "Development: membangun website sesuai rancangan.",
      "Testing: menguji fungsi, responsivitas, dan performa.",
      "Deployment: menghubungkan domain dan mempublikasikan website.",
      "Review: mengevaluasi dan mengembangkan website secara berkala.",
    ],
  },
  {
    id: "mengukur-performa",
    title: "Cara Mengukur Keberhasilan Website",
    paragraphs: [
      "Website yang sudah dipublikasikan perlu dievaluasi secara berkala. Tanpa pengukuran, pemilik bisnis akan kesulitan mengetahui apakah website benar-benar membantu pemasaran atau operasional.",
      "Metrik yang digunakan harus sesuai dengan tujuan. Website company profile dapat mengukur kunjungan ke halaman layanan dan jumlah permintaan konsultasi. E-commerce dapat mengukur transaksi dan tingkat konversi. Website edukasi dapat memantau pendaftaran, unduhan materi, atau aktivitas pengguna.",
      "Google Analytics dan Google Search Console dapat membantu memahami sebagian performa website. Data tersebut perlu dibaca bersama informasi penjualan dan interaksi pelanggan agar keputusan pengembangan tidak hanya didasarkan pada jumlah pengunjung.",
    ],
    bullets: [
      "Jumlah pengunjung dan sumber trafik.",
      "Halaman yang paling sering dikunjungi.",
      "Klik tombol WhatsApp atau kontak.",
      "Jumlah formulir dan permintaan penawaran.",
      "Kata kunci yang menghasilkan kunjungan.",
      "Kecepatan halaman dan pengalaman mobile.",
    ],
  },
  {
    id: "kesalahan-umum",
    title: "Kesalahan Umum dalam Membuat Website Bisnis",
    paragraphs: [
      "Salah satu kesalahan yang sering terjadi adalah membuat website hanya karena ingin terlihat modern, tanpa menentukan tujuan yang jelas. Akibatnya, website memiliki banyak halaman tetapi tidak membantu pengunjung mengambil tindakan.",
      "Kesalahan lainnya adalah menggunakan informasi yang tidak lengkap, desain yang sulit dibaca, gambar berukuran terlalu besar, navigasi membingungkan, serta tidak menguji tampilan pada smartphone. Ada juga website yang diluncurkan tetapi tidak pernah diperbarui.",
      "Untuk menghindarinya, bisnis perlu menyusun prioritas fitur, menyiapkan konten yang akurat, melakukan pengujian, dan menetapkan proses pemeliharaan. Website yang sederhana tetapi fokus dan terawat sering kali lebih bermanfaat daripada website kompleks yang tidak dikelola.",
    ],
  },
  {
    id: "memilih-vendor",
    title: "Tips Memilih Jasa Pembuatan Website",
    paragraphs: [
      "Memilih penyedia jasa pembuatan website tidak sebaiknya hanya berdasarkan harga. Bisnis perlu memahami ruang lingkup pekerjaan, teknologi yang digunakan, proses komunikasi, jadwal pengerjaan, dan dukungan setelah website selesai.",
      "Periksa portofolio dan pastikan contoh pekerjaan dapat diakses. Tanyakan bagaimana proses pengumpulan kebutuhan, revisi desain, pengujian, peluncuran, serta pengelolaan domain dan hosting. Pastikan pula siapa yang memiliki akses dan aset website setelah proyek diserahkan.",
      "Penawaran yang baik menjelaskan apa saja yang termasuk dan tidak termasuk dalam biaya. Dengan ruang lingkup yang jelas, kedua pihak dapat mengurangi kesalahpahaman selama proses pengembangan.",
    ],
    bullets: [
      "Periksa portofolio dan pengalaman proyek.",
      "Pastikan kebutuhan dan fitur tertulis dalam penawaran.",
      "Tanyakan teknologi serta standar keamanan.",
      "Perjelas biaya domain, hosting, dan pemeliharaan.",
      "Pastikan ada proses pengujian dan serah terima.",
      "Pahami ketentuan revisi dan dukungan teknis.",
    ],
  },
  {
    id: "contoh-berbagai-bisnis",
    title: "Contoh Pemanfaatan Website untuk Berbagai Jenis Bisnis",
    paragraphs: [
      "UMKM dapat menggunakan website katalog untuk memperkenalkan produk, menampilkan variasi, menjelaskan cara pemesanan, dan mengarahkan pelanggan ke WhatsApp. Bisnis yang sudah memiliki banyak produk dapat mempertimbangkan fitur pencarian dan kategori agar pengunjung lebih mudah menemukan barang.",
      "Perusahaan jasa dapat menggunakan company profile untuk menjelaskan layanan, proses kerja, portofolio, dan formulir konsultasi. Informasi yang lengkap membantu calon klien memahami ruang lingkup pekerjaan sebelum menghubungi tim penjualan.",
      "Sekolah dan lembaga pelatihan dapat menggunakan website untuk menyampaikan profil, program pendidikan, jadwal, berita, pendaftaran, serta informasi kegiatan. Sementara itu, startup dapat mengembangkan landing page untuk menguji minat pasar atau web application untuk menjalankan layanan digital.",
    ],
  },
  {
    id: "layanan-hinai-tech",
    title: "Solusi Website dan Pengembangan Digital dari HINAI Tech",
    paragraphs: [
      "HINAI Tech – PT Heroic Inovasi Nusantara menyediakan layanan pengembangan solusi digital untuk kebutuhan bisnis, pendidikan, dan organisasi. Pengembangan dimulai dari pemahaman kebutuhan, perancangan pengalaman pengguna, implementasi teknologi, hingga pengujian dan peluncuran.",
      "Kebutuhan setiap bisnis berbeda. Ada yang cukup menggunakan website company profile, ada yang membutuhkan landing page untuk promosi, dan ada pula yang memerlukan aplikasi khusus untuk mendukung operasional. Karena itu, solusi sebaiknya ditentukan berdasarkan tujuan dan proses kerja yang ingin diperbaiki.",
      "Selain website, HINAI Tech juga mengembangkan solusi aplikasi, desain UI/UX, branding, serta kebutuhan digital lainnya. Calon klien dapat mendiskusikan kebutuhan terlebih dahulu agar ruang lingkup dan estimasi pengerjaan lebih jelas.",
    ],
  },
  {
    id: "kesimpulan",
    title: "Kesimpulan: Website Profesional Merupakan Aset Penting Bisnis",
    paragraphs: [
      "Website profesional membantu bisnis membangun kredibilitas, memperluas jangkauan pasar, menyediakan informasi resmi, mendukung pemasaran, dan meningkatkan efisiensi operasional. Website juga dapat menjadi pusat konten yang terhubung dengan media sosial, WhatsApp, dan berbagai kanal digital lainnya.",
      "Namun, keberhasilan website tidak hanya ditentukan oleh desain. Tujuan yang jelas, konten berkualitas, pengalaman pengguna, keamanan, performa, dan pemeliharaan memiliki peran yang sama pentingnya. Bisnis perlu memilih fitur berdasarkan kebutuhan nyata dan mengevaluasi hasilnya secara berkala.",
      "Di era digital, website bukan sekadar pelengkap identitas perusahaan. Jika dirancang dan dikelola dengan tepat, website dapat menjadi salah satu aset digital yang mendukung pertumbuhan bisnis dalam jangka panjang.",
    ],
  },
];

const comparisonRows = [
  {
    aspect: "Identitas bisnis",
    without: "Informasi tersebar di berbagai platform.",
    with: "Profil dan informasi resmi terpusat.",
  },
  {
    aspect: "Jangkauan",
    without: "Lebih bergantung pada jaringan dan platform tertentu.",
    with: "Berpeluang ditemukan melalui mesin pencari.",
  },
  {
    aspect: "Informasi produk",
    without: "Pelanggan perlu bertanya secara langsung.",
    with: "Informasi dapat dibaca secara mandiri.",
  },
  {
    aspect: "Promosi",
    without: "Bergantung pada aktivitas kanal promosi.",
    with: "Konten dapat diakses kapan saja.",
  },
  {
    aspect: "Pengembangan",
    without: "Sulit mengintegrasikan sistem khusus.",
    with: "Dapat dikembangkan sesuai kebutuhan bisnis.",
  },
];

const faqs = [
  {
    question: "Apakah bisnis kecil atau UMKM perlu memiliki website?",
    answer:
      "Ya. UMKM dapat memulai dengan website sederhana seperti company profile atau katalog produk. Tujuannya adalah menyediakan informasi resmi, memperkenalkan produk, dan memudahkan pelanggan menghubungi bisnis. Fitur dapat dikembangkan seiring pertumbuhan usaha.",
  },
  {
    question: "Apakah website dapat membantu meningkatkan penjualan?",
    answer:
      "Website dapat mendukung proses penjualan dengan menyediakan informasi produk, membangun kepercayaan, mendatangkan pengunjung dari mesin pencari, dan mengarahkan calon pelanggan ke proses pemesanan. Namun, penjualan tetap dipengaruhi kualitas produk, harga, pelayanan, dan strategi pemasaran.",
  },
  {
    question: "Apakah website harus selalu menggunakan fitur yang kompleks?",
    answer:
      "Tidak. Website sebaiknya dibuat sesuai kebutuhan. Bisnis yang hanya membutuhkan profil dan informasi layanan dapat memulai dengan company profile. Fitur tambahan seperti transaksi, akun pelanggan, atau dashboard dapat ditambahkan ketika memang diperlukan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    answer:
      "Waktu pengerjaan bergantung pada jumlah halaman, kompleksitas desain, fitur, kesiapan konten, dan proses persetujuan. Website sederhana biasanya lebih cepat dikerjakan dibandingkan aplikasi web dengan banyak integrasi dan alur bisnis khusus. Estimasi sebaiknya ditentukan setelah kebutuhan dianalisis.",
  },
  {
    question: "Apakah website bisa muncul di halaman pertama Google?",
    answer:
      "Website dapat dioptimalkan agar berpeluang tampil pada hasil pencarian yang relevan. Namun, tidak ada jaminan posisi pertama karena peringkat dipengaruhi banyak faktor, termasuk persaingan, kualitas konten, relevansi, dan kondisi teknis website.",
  },
  {
    question: "Apa perbedaan website company profile dan landing page?",
    answer:
      "Company profile biasanya memiliki beberapa halaman untuk menjelaskan identitas, layanan, portofolio, dan kontak perusahaan. Landing page lebih fokus pada satu tujuan, misalnya promosi produk, pendaftaran, atau permintaan konsultasi.",
  },
  {
    question: "Apakah website dapat dihubungkan dengan WhatsApp?",
    answer:
      "Bisa. Website dapat memiliki tombol WhatsApp yang mengarahkan pengunjung ke percakapan dengan bisnis. Pesan awal juga dapat diatur agar pelanggan lebih mudah menyampaikan kebutuhan.",
  },
  {
    question: "Apakah website perlu dirawat setelah diluncurkan?",
    answer:
      "Ya. Website perlu diperbarui sesuai kebutuhan, dipantau performanya, dicadangkan datanya, dan dijaga keamanannya. Pemeliharaan juga membantu memastikan informasi tetap akurat dan fitur berjalan dengan baik.",
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

export default function WebsiteProfessionalBusinessArticle() {
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
      "website profesional, website bisnis, manfaat website, website UMKM, digital marketing, SEO",
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

        <Navigation />

        {/* HERO */}
        <header className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.19),transparent_38%)]" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                <span>HINAI Tech Blog</span>
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                <span>Digital Business</span>
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {TITLE}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {DESCRIPTION}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
                <span>15 November 2026</span>
                <span>•</span>
                <span>HINAI Tech Editorial</span>
                <span>•</span>
                <span>± 12 menit membaca</span>
              </div>
            </div>
          </div>
        </header>

        {/* ARTICLE LAYOUT */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <article className="min-w-0">
            {/* FEATURE IMAGE */}
            <figure className="mb-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
                <Image
                  src={ARTICLE_IMAGE}
                  alt="Ilustrasi tampilan website profesional untuk kebutuhan bisnis"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-right text-xs leading-5 text-slate-500">
                Ilustrasi website dan antarmuka digital. Sumber gambar:{" "}
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
                Di tengah perkembangan teknologi dan perubahan perilaku
                konsumen, kehadiran bisnis di internet menjadi semakin penting.
                Pelanggan ingin mendapatkan informasi dengan cepat sebelum
                menentukan pilihan. Salah satu cara untuk membangun kehadiran
                digital yang lebih terstruktur adalah memiliki website
                profesional.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Lalu, mengapa website penting bagi bisnis? Apa manfaatnya,
                jenis website apa yang tepat, dan bagaimana cara
                mengembangkannya? Artikel ini membahas berbagai hal tersebut
                secara lengkap.
              </p>
            </div>

            {/* TABLE OF CONTENTS */}
            <nav
              aria-label="Daftar isi artikel"
              className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-extrabold text-slate-900">
                Daftar Isi
              </h2>
              <ol className="grid gap-3 sm:grid-cols-2">
                {articleSections.map((section, index) => (
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
                    href="#perbandingan"
                    className="flex gap-3 text-sm leading-6 text-slate-600 transition hover:text-amber-700"
                  >
                    <span className="font-bold text-amber-600">22.</span>
                    <span>Perbandingan Bisnis dengan dan Tanpa Website</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="flex gap-3 text-sm leading-6 text-slate-600 transition hover:text-amber-700"
                  >
                    <span className="font-bold text-amber-600">23.</span>
                    <span>Pertanyaan yang Sering Diajukan</span>
                  </a>
                </li>
              </ol>
            </nav>

            {/* ARTICLE CONTENT */}
            <div className="space-y-12">
              {articleSections.map((section, index) => (
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

                  {index === 2 && (
                    <InfoBox title="Catatan untuk pemilik bisnis">
                      Mulailah dari kebutuhan pelanggan. Website yang
                      informatif dan mudah digunakan lebih bermanfaat daripada
                      website yang memiliki banyak fitur tetapi tidak memiliki
                      tujuan yang jelas.
                    </InfoBox>
                  )}

                  {index === 8 && (
                    <InfoBox title="Penting untuk diperhatikan">
                      Integrasi sistem sebaiknya direncanakan berdasarkan
                      proses kerja yang benar-benar dibutuhkan. Penambahan
                      fitur yang tidak relevan dapat meningkatkan biaya
                      pengembangan dan pemeliharaan.
                    </InfoBox>
                  )}

                  {index === 15 && (
                    <InfoBox title="Saran sebelum memulai proyek">
                      Buat daftar kebutuhan utama, fitur tambahan, target
                      pengguna, serta anggaran. Daftar tersebut akan membantu
                      proses diskusi dengan penyedia jasa website.
                    </InfoBox>
                  )}
                </section>
              ))}
            </div>

            {/* COMPARISON TABLE */}
            <section
              id="perbandingan"
              className="mt-14 scroll-mt-28"
            >
              <SectionTitle eyebrow="Analisis Bisnis">
                Perbandingan Bisnis dengan dan Tanpa Website
              </SectionTitle>

              <p className="mb-6 text-base leading-8 text-slate-700">
                Website bukan satu-satunya faktor keberhasilan bisnis.
                Namun, keberadaannya dapat membantu perusahaan mengelola
                informasi dan memperluas saluran pemasaran. Berikut gambaran
                perbedaan dari beberapa aspek.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-slate-950 text-white">
                        <th className="px-5 py-4 font-bold">Aspek</th>
                        <th className="px-5 py-4 font-bold">
                          Tanpa Website
                        </th>
                        <th className="px-5 py-4 font-bold text-amber-300">
                          Dengan Website
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, index) => (
                        <tr
                          key={row.aspect}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          }
                        >
                          <td className="px-5 py-4 font-bold text-slate-900">
                            {row.aspect}
                          </td>
                          <td className="px-5 py-4 leading-6 text-slate-600">
                            {row.without}
                          </td>
                          <td className="px-5 py-4 leading-6 text-slate-700">
                            {row.with}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-500">
                Catatan: Perbandingan di atas merupakan gambaran umum. Hasil
                penerapan website bergantung pada strategi dan pengelolaannya.
              </p>
            </section>

            {/* CHECKLIST */}
            <section className="mt-14">
              <SectionTitle eyebrow="Praktik Langsung">
                Checklist Sebelum Bisnis Membuat Website
              </SectionTitle>

              <p className="mb-6 text-base leading-8 text-slate-700">
                Sebelum memulai pengembangan, pastikan beberapa hal berikut
                sudah dipertimbangkan agar website sesuai dengan kebutuhan
                bisnis.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Tujuan utama website sudah ditentukan.",
                  "Target pelanggan sudah dipahami.",
                  "Jenis website sudah dipilih.",
                  "Daftar halaman dan fitur sudah disusun.",
                  "Konten profil dan layanan sudah disiapkan.",
                  "Identitas visual bisnis sudah tersedia.",
                  "Domain dan hosting sudah direncanakan.",
                  "Anggaran pengembangan sudah disiapkan.",
                  "Website akan diuji di perangkat mobile.",
                  "Pemeliharaan setelah peluncuran sudah direncanakan.",
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
                  Wujudkan Solusi Digital Anda
                </p>
                <h2 className="max-w-2xl text-2xl font-black leading-tight text-white md:text-3xl">
                  Siap Mengembangkan Website Profesional untuk Bisnis Anda?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  Diskusikan kebutuhan website, landing page, atau aplikasi
                  bisnis bersama HINAI Tech. Mulailah dengan menjelaskan
                  kebutuhan dan tujuan digital bisnis Anda.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20berdiskusi%20mengenai%20pembuatan%20website%20untuk%20bisnis%20saya."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
                  >
                    Konsultasi via WhatsApp
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Lihat Layanan
                  </Link>
                </div>
              </div>
            </section>

            {/* REFERENCES */}
            <section className="mt-12 border-t border-slate-200 pt-8">
              <h2 className="mb-4 text-lg font-extrabold text-slate-900">
                Referensi dan Sumber Bacaan
              </h2>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li>
                  <a
                    href="https://developers.google.com/search/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Google Search Central
                  </a>{" "}
                  — dokumentasi resmi tentang SEO dan Google Search.
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
                  — panduan performa, pengalaman pengguna, dan pengembangan
                  web.
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
                <li>
                  <a
                    href="https://unsplash.com/license"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Unsplash License
                  </a>{" "}
                  — informasi ketentuan penggunaan gambar Unsplash.
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
                  description="Kenali dasar-dasar website dan bagaimana penggunaannya untuk mendukung kebutuhan bisnis."
                  href="/blog/apa-itu-website"
                />
                <RelatedArticle
                  category="Perbandingan"
                  title="Website vs Landing Page: Perbedaan, Fungsi, dan Kegunaannya"
                  description="Pahami perbedaan website dan landing page sebelum menentukan solusi digital."
                  href="/blog/website-vs-landing-page"
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
                  Berbagi wawasan seputar teknologi, website, aplikasi, dan
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
                Mengapa Website Penting untuk Bisnis?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Website membantu bisnis membangun kepercayaan, memperluas
                jangkauan, menyediakan informasi, dan mendukung pemasaran
                digital.
              </p>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Topik Pembahasan
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Website Bisnis",
                    "Digital Marketing",
                    "SEO",
                    "Branding",
                    "UMKM",
                    "Teknologi",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                Butuh Website?
              </p>
              <h2 className="mt-3 text-xl font-extrabold leading-snug">
                Kembangkan Bisnis Anda Secara Digital
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Konsultasikan kebutuhan website dan aplikasi bisnis bersama
                HINAI Tech.
              </p>
              <a
                href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech%2C%20saya%20ingin%20konsultasi%20website."
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
                    Teknologi Bisnis
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
                    ± 12 menit
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
