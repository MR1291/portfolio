const menu = document.getElementById("menu"), nav = document.getElementById("navLinks");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formStatus").textContent = "Form berhasil disiapkan. Hubungkan ke email service/backend untuk menerima pesan secara nyata.";
});

document.getElementById("certificateHint").addEventListener("click", () => alert("Struktur sertifikat sudah tersedia. Ganti card ini dengan data dan gambar sertifikatmu."));

/* ========================================================
   HERO 3D MOUSE PARALLAX MICRO-ANIMATION
======================================================== */
const hero = document.getElementById("home");
const terminal = document.querySelector(".terminal");

if (hero && terminal && window.innerWidth > 850) {
    hero.addEventListener("mousemove", e => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        terminal.style.transform = `perspective(1000px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translateY(-4px)`;
    });

    hero.addEventListener("mouseleave", () => {
        terminal.style.transform = "";
    });
}

/* ========================================================
   PROJECT DETAILS DATA & POPUP MODAL
======================================================== */
const projectsData = {
    "trawas-tourism": {
        title: "Website Pariwisata Trawas",
        tag: "WEB / DIGITAL TOURISM",
        icon: "⌁",
        tech: ["Web Development", "UI/UX Design", "Information Architecture", "Content Organization", "Digital Tourism", "Problem Solving"],
        body: `
            <div class="modal-section">
                <h4>Gambaran Project</h4>
                <p>Website Pariwisata Trawas merupakan konsep platform informasi pariwisata berbasis web yang dirancang untuk memperkenalkan dan mengorganisasi berbagai potensi wisata yang terdapat di wilayah Trawas dalam satu pusat informasi digital terstruktur, sehingga wisatawan tidak perlu mencari informasi dari berbagai sumber terpisah.</p>
                <p>Website ini dirancang dengan pendekatan <strong>hierarki wilayah</strong>, di mana pengunjung dapat menjelajahi Trawas berdasarkan desa terlebih dahulu, kemudian menemukan berbagai destinasi di dalam desa tersebut.</p>
            </div>
            <div class="modal-section">
                <h4>Konsep Navigasi Hierarkis</h4>
                <div class="modal-diagram">Trawas
├── Desa A ──── [ Wisata Alam ] • [ Café ] • [ Kuliner ]
├── Desa B ──── [ Wisata Alam ] • [ Café ] • [ Kuliner ]
└── Desa C ──── [ Wisata Alam ] • [ Café ] • [ Kuliner ]</div>
            </div>
            <div class="modal-section">
                <h4>Fitur yang Direncanakan</h4>
                <ul>
                    <li><strong>Daftar Desa:</strong> Menampilkan direktori desa di Trawas dalam visual interaktif.</li>
                    <li><strong>Informasi Desa:</strong> Profil detail desa beserta daya tarik unggulannya.</li>
                    <li><strong>Katalog Destinasi:</strong> Pengelompokan (Wisata Alam, Rekreasi, Café, Kuliner, Tempat Menarik).</li>
                    <li><strong>Detail Destinasi:</strong> Foto, deskripsi, fasilitas, panduan tiket, dan jam operasional.</li>
                    <li><strong>Integrasi Peta Lokasi:</strong> Visualisasi rute dan posisi geografis destinasi.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Nilai & Manfaat Project</h4>
                <div class="modal-callout">
                    Mengakselerasi digitalisasi potensi daerah, mempermudah wisatawan mengeksplorasi destinasi tersembunyi, serta membantu promosi UMKM dan usaha lokal desa secara berkelanjutan.
                </div>
            </div>
        `
    },
    "sdg-web": {
        title: "Website Berbasis Sustainable Development Goals (SDGs)",
        tag: "SOCIAL INNOVATION / WEB",
        icon: "◎",
        tech: ["Design Thinking", "Problem Identification", "SDG 8 / 9 / 12", "User-Centered Design", "UI/UX Design", "Web Development"],
        body: `
            <div class="modal-section">
                <h4>Gambaran Project</h4>
                <p>Project ini berfokus pada eksplorasi solusi digital yang dikaitkan langsung dengan Sustainable Development Goals (SDGs) PBB, mengedepankan proses problem solving dan riset berpusat pada manusia (User-Centered Design).</p>
            </div>
            <div class="modal-section">
                <h4>Pilar SDGs yang Dieksplorasi</h4>
                <ul>
                    <li><strong>SDG 8 — Decent Work and Economic Growth:</strong> Berhubungan dengan perluasan akses pekerjaan layak, pemberdayaan talenta, dan pertumbuhan ekonomi digital.</li>
                    <li><strong>SDG 9 — Industry, Innovation and Infrastructure:</strong> Menitikberatkan pada inovasi teknologi, efisiensi sistem, dan pembangunan infrastruktur digital inklusif.</li>
                    <li><strong>SDG 12 — Responsible Consumption and Production:</strong> Mengedukasi pola konsumsi dan produksi yang bertanggung jawab serta berkelanjutan.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Alur Pendekatan Design Thinking</h4>
                <div class="modal-diagram">Identifikasi Masalah ➔ Research ➔ Menentukan Kebutuhan Pengguna ➔ Ide Solusi ➔ Perancangan UI/UX ➔ Prototype ➔ Implementasi</div>
            </div>
            <div class="modal-section">
                <h4>Nilai & Dampak</h4>
                <div class="modal-callout">
                    Kekuatan utama proyek ini terletak pada kemampuan menghubungkan teknologi dengan permasalahan nyata di masyarakat, menghasilkan solusi yang bermakna dan aplikatif.
                </div>
            </div>
        `
    },
    "iot-warehouse": {
        title: "IoT Warehouse Monitoring System",
        tag: "IOT / EMBEDDED SYSTEM",
        icon: "◉",
        tech: ["ESP32", "DHT11 Sensor", "LCD Display", "C++ / Arduino IDE", "Sensor Integration", "Data Acquisition"],
        body: `
            <div class="modal-section">
                <h4>Gambaran & Permasalahan</h4>
                <p>IoT Warehouse Monitoring System merupakan sistem pemantauan kondisi lingkungan gudang penyimpanan secara real-time. Kondisi fluktuasi suhu dan kelembapan dapat merusak barang/komoditas tertentu, sehingga dibutuhkan mekanisme monitoring otomatis yang cepat dan akurat.</p>
            </div>
            <div class="modal-section">
                <h4>Arsitektur & Alur Perangkat</h4>
                <div class="modal-diagram">Kondisi Lingkungan Gudang
        ↓
Sensor DHT11 (Membaca Suhu & Kelembapan)
        ↓
Mikrokontroler ESP32 (Akuisisi & Pemrosesan Data)
        ↓
Display LCD (Menampilkan Informasi Metrik Real-time)</div>
            </div>
            <div class="modal-section">
                <h4>Tugas Komponen Utama</h4>
                <ul>
                    <li><strong>DHT11:</strong> Sensor presisi untuk membaca temperatur dan kelembapan udara secara kontinu.</li>
                    <li><strong>ESP32:</strong> Mikrokontroler pusat pengolah data sensor dan pengendali alur informasi.</li>
                    <li><strong>LCD:</strong> Antarmuka visual output langsung di lokasi pergudangan.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Nilai Teknis</h4>
                <div class="modal-callout">
                    Mendemonstrasikan siklus integrasi hardware-software lengkap: Permasalahan ➔ Sensor ➔ Mikrokontroler ➔ Data ➔ Informasi.
                </div>
            </div>
        `
    },
    "smart-home": {
        title: "Smart Home System (Instalasi Kelistrikan Pintar)",
        tag: "SMART HOME / ELECTRICAL",
        icon: "⚡",
        tech: ["Single Line Diagram", "Electrical System", "Circuit Design", "Switching S1 & S2", "LIn/LOut/NIn/NOut", "Troubleshooting"],
        body: `
            <div class="modal-section">
                <h4>Gambaran Project</h4>
                <p>Project Smart Home System berfokus pada perancangan dan pemahaman sistem instalasi kelistrikan yang mendukung konsep otomasi rumah pintar. Tidak hanya konfigurasi modul cerdas, tetapi juga dasar rancang bangun kelistrikan dan visualisasi diagram teknik standar.</p>
            </div>
            <div class="modal-section">
                <h4>Materi & Konsep Teknis</h4>
                <ul>
                    <li><strong>Single Line Diagram:</strong> Notasi representasi sistem kelistrikan bangunan secara ringkas, aman, dan terstruktur.</li>
                    <li><strong>Jalur Fasa & Netral:</strong> Pemahaman komprehensif jalur arus dan proteksi rangkaian kelistrikan.</li>
                    <li><strong>Input & Output (LIn, LOut, NIn, NOut):</strong> Pengkabelan modul kontrol pintar untuk switching aktuator beban listrik.</li>
                    <li><strong>Switching S1 & S2:</strong> Konfigurasi sakelar ganda dan kendali beban modular.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Alur Konsep Kelistrikan</h4>
                <div class="modal-diagram">Sumber Listrik ➔ Input (LIn/NIn) ➔ Switching (S1/S2) ➔ Output (LOut/NOut) ➔ Perangkat Beban</div>
            </div>
            <div class="modal-section">
                <h4>Nilai Kompetensi</h4>
                <div class="modal-callout">
                    Menunjukkan penguasaan lintas disiplin antara software otomasi, pemahaman instalasi kelistrikan fisik, dan infrastruktur sistem teknologi.
                </div>
            </div>
        `
    },
    "flask-cashier": {
        title: "Flask Cashier Application",
        tag: "WEB / BACKEND PYTHON",
        icon: "⌘",
        tech: ["Python", "Flask Framework", "Backend Development", "Routing & Sessions", "Form Processing", "HTML5 & CSS3", "JavaScript"],
        body: `
            <div class="modal-section">
                <h4>Gambaran Project</h4>
                <p>Flask Cashier Application merupakan aplikasi kasir (Point of Sale) berbasis web yang dikembangkan menggunakan framework Flask dan bahasa pemrograman Python, dirancang untuk menangani transaksi penjualan produk secara dinamis dan terstruktur.</p>
            </div>
            <div class="modal-section">
                <h4>Arsitektur Sistem & Alur Transaksi</h4>
                <div class="modal-diagram">User (Browser)
    ↓
Web Interface (HTML/CSS/JS)
    ↓
Flask Server (Routing & Form Processing)
    ↓
Business Logic (Python Transaction Calculation)
    ↓
Transaction Result & Billing Receipt</div>
            </div>
            <div class="modal-section">
                <h4>Proses Transaksi</h4>
                <ul>
                    <li>Pemilihan produk dari menu katalog.</li>
                    <li>Input kuantitas barang yang dibeli.</li>
                    <li>Kalkulasi otomatis subtotal dan pajak/diskon.</li>
                    <li>Perhitungan total pembayaran serta cetak ringkasan transaksi.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Nilai Teknis</h4>
                <div class="modal-callout">
                    Membuktikan pemahaman arsitektur web dinamis end-to-end: sinkronisasi frontend dengan backend logic menggunakan Python.
                </div>
            </div>
        `
    },
    "ftth-design": {
        title: "FTTH & Fiber Optic Network Design",
        tag: "TELECOMMUNICATION / FTTH",
        icon: "✦",
        tech: ["FTTH / PON", "OLT / ODC / ODP / ONT", "Fiber Optic Characteristics", "Link Power Budget", "Attenuation Analysis", "OTDR Measurement"],
        body: `
            <div class="modal-section">
                <h4>Gambaran Project</h4>
                <p>Project FTTH (Fiber to the Home) berfokus pada perancangan arsitektur jaringan serat optik untuk menyalurkan layanan pita lebar berkecepatan tinggi dari sisi provider telekomunikasi hingga ke perangkat pelanggan rumahan.</p>
            </div>
            <div class="modal-section">
                <h4>Arsitektur Jaringan PON</h4>
                <div class="modal-diagram">Internet Backbone ➔ OLT (Provider) ➔ ODC (Distribution) ➔ ODP (Drop) ➔ ONT (Customer)</div>
            </div>
            <div class="modal-section">
                <h4>Analisis Redaman (Loss Budget) & OTDR</h4>
                <ul>
                    <li><strong>Perhitungan Redaman:</strong> Daya Sumber ➔ Fiber ➔ Connector ➔ Splitter ➔ Fiber ➔ Daya Diterima (memastikan nilai receive power dalam batas aman -8 s/d -27 dBm).</li>
                    <li><strong>Pengukuran OTDR:</strong> Menganalisis kurva serat optik, mengidentifikasi event splice, bending loss, dan lokasi presisi gangguan kabel.</li>
                    <li><strong>Karakteristik Kabel:</strong> Analisis dispersi, atenuasi per kilometer, serta pemilihan tipe kabel indoor/outdoor.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Nilai Kompetensi</h4>
                <div class="modal-callout">
                    Fondasi inti kompetensi Teknik Jaringan Akses Telekomunikasi (TJAT) berstandar industri dengan penguasaan perangkat pasif dan aktif optik.
                </div>
            </div>
        `
    },
    "network-sysadmin": {
        title: "Network & System Administration",
        tag: "SERVER & SYSADMIN",
        icon: "▣",
        tech: ["Debian Linux", "Server Management", "Apache & Nginx", "MariaDB & MySQL", "SSH Authentication", "ulimit", "VLAN & Subnetting"],
        body: `
            <div class="modal-section">
                <h4>Gambaran Project</h4>
                <p>Kumpulan praktik implementasi mendalam administrasi server Linux dan pengelolaan jaringan komputer: instalasi, konfigurasi layanan, hardening keamanan, alokasi sumber daya, hingga pemecahan masalah (troubleshooting).</p>
            </div>
            <div class="modal-section">
                <h4>Cakupan Modul Implementasi</h4>
                <ul>
                    <li><strong>Linux / Debian Server:</strong> Package management, custom repository, user & group permission, SSH hardening, dan resource limit (<code>ulimit</code>).</li>
                    <li><strong>Web Server:</strong> Konfigurasi Apache & Nginx reverse proxy, Virtual Host multi-domain, deployment web, dan SSL/TLS setup.</li>
                    <li><strong>Database Server:</strong> Instalasi MariaDB/MySQL, phpMyAdmin, serta penyelesaian masalah repository signing key dan package dependencies.</li>
                    <li><strong>Networking:</strong> IP Addressing, kalkulasi subnetting, konfigurasi Router, VLAN segmentation, Access Point, dan SSID manajemen.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Alur Kontrol Server</h4>
                <div class="modal-diagram">Debian Server ➔ User & Group ➔ Permission Chmod/Chown ➔ Service Deployed ➔ Network Hardening</div>
            </div>
            <div class="modal-section">
                <h4>Nilai Kompetensi</h4>
                <div class="modal-callout">
                    Menunjukkan kesiapan dalam mengelola server lingkungan produksi serta kemampuan investigasi troubleshooting yang tangguh.
                </div>
            </div>
        `
    },
    "integrated-network-ftth": {
        title: "Desain Infrastruktur Jaringan Terintegrasi & Standardisasi Fiber Optik",
        tag: "ENTERPRISE NETWORK / OPTICAL",
        icon: "❖",
        tech: ["Cisco Packet Tracer", "Cisco IOS", "VLSM Subnetting", "Routing Protocols", "OPM & OLS", "FTTH Standards", "SOP Teknis"],
        body: `
            <div class="modal-section">
                <h4>Ringkasan Proyek</h4>
                <p>Proyek komprehensif yang mengintegrasikan perancangan arsitektur jaringan logis (logical network architecture) dengan analisis infrastruktur transmisi fisik. Fokus utama adalah membangun ekosistem jaringan telekomunikasi yang scalable, efisien, dan memenuhi standar industri modern.</p>
            </div>
            <div class="modal-section">
                <h4>Peran & Tanggung Jawab Teknis</h4>
                <ul>
                    <li><strong>Arsitektur Jaringan Cisco Packet Tracer:</strong> Merancang dan menganalisis topologi enterprise, mengimplementasikan protokol routing dinamis/statis, serta diagnostik <em>zero-packet-loss</em> (resolusi kasus Destination Host Unreachable).</li>
                    <li><strong>Rekayasa Pengalamatan (VLSM Optimization):</strong> Menghitung skema arsitektur IP Address secara presisi menggunakan Variable Length Subnet Mask guna mencegah pemborosan alokasi IP (<em>IP exhaustion</em>) dan isolasi broadcast domain.</li>
                    <li><strong>Validasi Transmisi Fisik Optik:</strong> Menyusun Dokumen SOP teknis pengujian redaman kabel fiber optik dengan instrumen presisi Optical Power Meter (OPM) dan Optical Light Source (OLS).</li>
                    <li><strong>Standarisasi Link Power Budget:</strong> Mendokumentasikan batas toleransi redaman transmisi optik end-to-end pada implementasi FTTH.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Hasil & Dampak (Key Outcomes)</h4>
                <ul>
                    <li>Topologi jaringan simulasi stabil, bebas routing loop, dan siap ekspansi (*future-proof*).</li>
                    <li>Efisiensi ruang IP Address maksimal dengan sisa wastage IP seminimal mungkin.</li>
                    <li>Dokumen SOP pengujian optik komprehensif sebagai panduan operasional lapangan guna meminimalisir *human error*.</li>
                </ul>
            </div>
        `
    }
};

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalTag = document.getElementById("modalTag");
const modalIcon = document.getElementById("modalIcon");
const modalTech = document.getElementById("modalTech");
const modalBody = document.getElementById("modalBody");

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalTag.textContent = data.tag;
    modalIcon.textContent = data.icon;
    
    modalTech.innerHTML = "";
    data.tech.forEach(t => {
        const span = document.createElement("span");
        span.textContent = t;
        modalTech.appendChild(span);
    });

    modalBody.innerHTML = data.body;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach(card => {
    const projectId = card.getAttribute("data-project");
    if (!projectId) return;

    card.addEventListener("click", () => openProjectModal(projectId));
    card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProjectModal(projectId);
        }
    });
});

if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
}

if (modal) {
    modal.addEventListener("click", e => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
        closeProjectModal();
    }
});
