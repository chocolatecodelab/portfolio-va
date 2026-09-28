# PRD — Portfolio Website: Tech-Savvy Virtual Assistant

| | |
|---|---|
| **Nama proyek** | Nazar Gunawan — Tech-Savvy Virtual Assistant Portfolio |
| **Versi dokumen** | 1.0 (27 September 2026) |
| **Pemilik produk** | Muhammad Nazar Gunawan |
| **Platform** | Website statis/SSG — Next.js (konsisten dengan stack yang sudah dikuasai & portfolio lama) |
| **Alat implementasi** | AI coding agent (mis. Antigravity / Claude Code) + Vercel |
| **Bahasa produk** | Bilingual — Inggris sebagai default (target klien global), Indonesia opsional di beberapa bagian (lihat §8) |
| **Relasi dengan aset lain** | Terpisah dari `nazargunawan.vercel.app` (portfolio Software Engineer). Menjadi *positioning* kedua: **Virtual Assistant — Research, Operations, Data & Automation** |

> **Cara memakai dokumen ini bersama AI agent:** simpan sebagai `PRD.md` di root repo baru. Bagian 15 berisi urutan kerja per fase. Jangan minta agent membangun semua halaman sekaligus — kerjakan per fase dan tinjau tiap fase sebelum lanjut.

---

## 1. Ringkasan Produk

Website portfolio baru yang memposisikan Nazar bukan sebagai "software engineer yang mencari kerja remote", melainkan sebagai **Tech-Savvy Virtual Assistant**: seorang remote professional yang membantu founder, solopreneur, dan tim kecil membereskan *research, operations, data,* dan *automation* — dengan keunggulan unik bahwa ia **bisa membangun sistemnya sendiri** (bukan sekadar menjalankan tool orang lain).

Positioning satu kalimat:

> *"A remote assistant who doesn't just manage your tasks — he builds the systems that make your work easier."*

Website ini **bukan** portfolio developer kedua. Proyek-proyek development (Next.js, Flutter, dsb.) tetap ditampilkan, tetapi dibingkai sebagai *bukti kapabilitas* untuk pilar Automation & Data — bukan sebagai tujuan utama.

**Dua studi kasus inti** yang lahir langsung dari kebutuhan pekerjaan VA — bukan proyek klien — adalah:
- **UMKM Business Toolkit** (Google Sheets + Apps Script — sistem kasir/stok/HPP untuk UMKM)
- **Student OS** (Google Sheets + Apps Script + Drive — sistem manajemen kehidupan mahasiswa)

Keduanya membuktikan kemampuan *system design, data modeling, automation,* dan *product thinking* — persis kombinasi yang dicari klien VA kelas menengah-atas (bukan VA administratif biasa).

---

## 2. Latar Belakang & Masalah

**Masalah yang ingin dipecahkan lewat website ini:**
- Portfolio developer yang ada saat ini (`nazargunawan.vercel.app`) menyasar rekruter teknis, bukan klien/founder yang butuh bantuan operasional.
- Klien VA umumnya mencari kata kunci seperti *"organized", "reliable", "can be trusted with my data"* — bukan *"stack expert"*. Bahasa dan tone situs developer biasa tidak cocok untuk audiens ini.
- Belum ada satu tempat yang menyatukan pengalaman lintas domain Nazar (dev + marketing/BUMN + automation) menjadi satu narasi VA yang koheren.
- Dua proyek Sheets (UMKM Toolkit, Student OS) sudah dibangun tapi belum "ditampilkan" sebagai bukti kerja VA — saat ini statusnya masih dokumen internal (PRD), bukan studi kasus publik.

**Peluang:**
- Kombinasi *developer background* + *pengalaman marketing/BUMN* + *dua produk otomasi Sheets* adalah diferensiasi kuat dibanding kebanyakan VA yang hanya bisa administrasi dasar.
- Arah desain editorial (lihat §8, sudah dieksplorasi sebelumnya) memberi kesan *research-minded, organized, human* — cocok untuk kategori VA "senior/technical", bukan VA murah per-jam di marketplace umum.

---

## 3. Tujuan, Non-Tujuan, Metrik

### 3.1 Tujuan V1
| # | Tujuan |
|---|---|
| G1 | Pengunjung memahami positioning "Tech-Savvy Virtual Assistant" dalam < 5 detik di hero. |
| G2 | Menyajikan minimal 2 studi kasus (UMKM Toolkit, Student OS) sebagai bukti kapabilitas otomasi & sistem, ditulis dari sudut pandang *hasil untuk pengguna*, bukan spesifikasi teknis. |
| G3 | Menyajikan latar belakang lintas-domain (dev + marketing/BUMN) sebagai kredibilitas, tanpa membuat situs terasa seperti portfolio developer. |
| G4 | Ada jalur konversi yang jelas: pengunjung → kontak/booking call, dalam ≤ 2 klik dari halaman mana pun. |
| G5 | Desain terasa premium dan personal (editorial), bukan template freelancer generik. |
| G6 | Situs cepat (skor Lighthouse Performance ≥ 90) dan mobile-first, karena banyak klien membuka via link di HP (DM, email). |

### 3.2 Non-Tujuan V1
- Bukan situs multi-bahasa penuh dengan i18n switcher (Inggris jadi bahasa utama; §8 menentukan campuran).
- Bukan platform booking/pembayaran terintegrasi (pakai link eksternal: Calendly/WhatsApp/email).
- Bukan blog penuh di V1 (masuk V1.1, lihat §12).
- Bukan CMS headless di V1 (konten di-hardcode/markdown lokal; CMS jadi opsi V1.1 jika konten sering berubah).
- Tidak menggantikan atau menghapus portfolio developer lama — keduanya hidup berdampingan, ditautkan secara sadar (lihat §7.7).

### 3.3 Metrik Sukses (target usulan)
| Metrik | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| Waktu load First Contentful Paint | < 1,5 detik |
| Klik ke CTA kontak / total pengunjung unik | ≥ 8% |
| Bounce rate halaman hero | < 55% |
| Pengunjung yang scroll sampai bagian "Selected Work" | ≥ 50% |
| Jumlah studi kasus lengkap saat peluncuran | ≥ 2 (UMKM Toolkit, Student OS) |

---

## 4. Target Audiens

**Audiens utama:** Founder solo, small business owner, atau tim kecil (2–15 orang) berbasis remote/global yang butuh bantuan *operations, research, data organization,* atau *light automation* — mampu membayar di atas rate VA administratif standar karena butuh orang yang juga paham sistem.

| Persona | Deskripsi | Yang dicari dari VA |
|---|---|---|
| **Founder SaaS/startup kecil** | 1–5 orang tim, sibuk, butuh orang yang bisa "pikir sendiri" | Automasi workflow, riset kompetitor, rapikan data/CRM |
| **Solopreneur/coach/creator** | Fokus di konten/klien, lemah di sisi operasional | Manajemen jadwal, riset, dokumentasi, file organization |
| **Small agency/consulting** | Butuh dukungan riset & data untuk proposal klien | Riset pasar, kompilasi data, rapikan laporan |

**Audiens sekunder:** Perekrut/HR yang mencari *virtual assistant* lewat platform (Upwork, LinkedIn, komunitas remote work) — situs ini menjadi *link-in-bio* pendukung profil tersebut.

---

## 5. Positioning & Prinsip Produk

1. **Trust dulu, personality kedua.** Setiap elemen visual harus lolos tes: *"Apakah ini membuat saya percaya memberi akses data/kalender saya ke orang ini?"*
2. **Tunjukkan sistem, bukan cuma daftar tugas.** Studi kasus harus menunjukkan cara berpikir (masalah → struktur data → hasil), bukan sekadar "saya bisa Excel".
3. **Silang-domain adalah fitur, bukan kebingungan.** Latar belakang dev + marketing + BUMN dinarasikan sebagai *"saya paham sisi teknis dan sisi bisnis"*, bukan disembunyikan.
4. **Satu CTA yang konsisten.** Semua bagian mengarah ke satu ajakan yang sama (kontak/booking), tidak bercabang ke banyak tombol berbeda.
5. **Editorial, bukan template freelancer.** Hindari pola visual generik "Fiverr VA card" — gunakan bahasa desain di §8.
6. **Ringkas di atas, dalam di bawah.** Hero dan ringkasan harus scannable dalam hitungan detik; detail lengkap tersedia bagi yang mau menggali (studi kasus).

---

## 6. Lingkup & Prioritas

| Prioritas | Halaman/Bagian |
|---|---|
| **P0 — wajib V1** | Hero, What I Can Take Off Your Plate (pilar layanan), Selected Work (2 studi kasus: UMKM Toolkit, Student OS), How I Work, Tools, About, CTA/Contact, Navigasi & Footer |
| **P1 — V1.1** | Halaman studi kasus detail terpisah (deep-dive per proyek), Testimonial/social proof, Blog/Notes ringan, Resume/CV downloadable versi VA |
| **P2 — backlog** | CMS headless untuk update konten tanpa deploy, halaman "Rate & Packages", integrasi booking (Calendly embed), versi multibahasa penuh |

---

## 7. Arsitektur Informasi & Struktur Halaman

### 7.1 Struktur V1 (single-page dengan anchor + 1 halaman kontak)
```text
/                       → Landing utama (semua section P0 dalam satu halaman, anchor-linked)
/work/umkm-toolkit      → (P1) Deep-dive studi kasus, opsional di V1 sebagai modal/expand di landing
/work/student-os        → (P1) idem
/contact                → (opsional; V1 boleh cukup CTA + mailto/WhatsApp/Calendly link)
```
> **Keputusan V1:** mulai dengan single-page landing dulu (lebih cepat rilis, lebih mudah diuji pesan). Halaman studi kasus terpisah menyusul di V1.1 setelah tahu bagian mana yang paling menahan perhatian pengunjung.

### 7.2 Urutan section di landing page
```text
01 Nav (sticky, minimal)
02 Hero
03 Trust strip (logo/afiliasi ringan: Bangkit Academy/Google, BUMN, kampus — opsional, kecil)
04 What I Can Take Off Your Plate (4 pilar)
05 Selected Work (2 studi kasus utama + link ke proyek dev sebagai "technical capability")
06 How I Work (proses 4 langkah)
07 Tools
08 About
09 CTA penutup
10 Footer
```

### 7.3 Navigasi
- Sticky top bar minimal: nama/logotype kiri, 3–4 anchor link tengah/kanan (Work, How I Work, About, Contact), satu tombol CTA menonjol di ujung kanan.
- Tidak ada dropdown atau mega-menu — situs ini pendek dan personal.

---

## 8. Spesifikasi Konten per Section

### 8.1 Hero (P0)

**Tujuan:** komunikasikan positioning dalam 3–5 detik + satu CTA jelas.

**Konten:**
```text
REMOTE ASSISTANT
FOR PEOPLE WHO
HAVE TOO MUCH
TO DO.

Research · Operations · Data · Automation

Tech-savvy remote assistant helping founders and small
teams organize work, research information, manage data,
and automate repetitive tasks.

[ Work with me → ]
```
- Sub-elemen kecil di sisi hero: status ketersediaan (`● Available for remote work`), lokasi (`Indonesia · GMT+7`), semacam kartu editorial (lihat §9 untuk gaya visual).
- **Acceptance criteria:**
  - [ ] Headline dan sub-copy terbaca penuh tanpa scroll di layar 375×667 (mobile umum).
  - [ ] CTA "Work with me" langsung mengarah ke section Contact/CTA penutup atau link eksternal (WhatsApp/Calendly/mailto).

### 8.2 What I Can Take Off Your Plate (P0)

Empat pilar, ditulis sebagai kolom editorial (bukan ikon generik):

| Pilar | Contoh isi |
|---|---|
| **Research** | Web research, competitor research, lead research |
| **Operations** | Task management, documentation, scheduling |
| **Data** | Google Sheets systems, CRM cleanup, data organization |
| **Automation** | AI-assisted workflows, Apps Script tools, process automation |

- **Rules:** tiap pilar maksimal 3 baris contoh; hindari daftar panjang seperti resume tugas VA marketplace.
- **Acceptance criteria:**
  - [ ] Keempat pilar tampil sejajar (grid 2×2 di mobile, 4 kolom di desktop).
  - [ ] Pilar "Automation" dan "Data" secara visual/tekstual menautkan ke section Selected Work.

### 8.3 Selected Work (P0) — bagian paling penting

Judul section: **"Things I've Built & Organized"** (bukan "Portfolio").

**Studi kasus 1 — UMKM Business Toolkit**
- Framing: *"A point-of-sale, inventory, and pricing system built inside Google Sheets — designed so a small shop owner who's never touched a spreadsheet formula can run their daily business from it."*
- Poin yang ditonjolkan (bukan spesifikasi teknis dari PRD asli, tapi hasil untuk pengguna):
  - Masalah: UMKM sering tidak tahu untung sebenarnya, harga jual ditentukan "feeling".
  - Solusi: sistem kasir, kalkulator HPP→harga jual otomatis, dashboard untung/rugi real-time, seluruhnya di Google Sheets tanpa perlu app baru.
  - Hasil/kualitas kerja: sistem dirancang idempoten, terproteksi dari kesalahan input, siap untuk 10.000+ transaksi, dan dirancang agar bisa dimigrasi ke aplikasi penuh di masa depan.
- Tag kapabilitas: `Data Modeling` `Google Apps Script` `Business Logic` `UX for Non-Technical Users`

**Studi kasus 2 — Student OS**
- Framing: *"A personal operating system for university life — academic tracking, task management, goals, and a full Google Drive filing system — built into one Google Sheet."*
- Poin yang ditonjolkan:
  - Masalah: informasi mahasiswa (jadwal, tugas, nilai, sertifikat) tersebar di banyak tempat.
  - Solusi: dashboard terpusat, kalkulator & simulator GPA, integrasi folder Drive otomatis per mata kuliah, file library terindeks.
  - Hasil/kualitas kerja: struktur folder otomatis & idempoten, sistem lampiran file yang tertaut ke setiap record, dirancang untuk 4 tahun data akademik.
- Tag kapabilitas: `System Design` `Google Drive Automation` `Information Architecture` `Product Thinking`

**Bagian tambahan (opsional, di bawah 2 studi kasus): "Technical Capability"**
- Baris ringkas yang merujuk ke proyek dev (Senara, Greenhouse Control, Clinic & Pharmacy System, dst.) sebagai bukti bahwa kemampuan automation punya fondasi engineering nyata, dengan tautan ke portfolio developer (`nazargunawan.vercel.app`) untuk yang ingin mendalami sisi teknis.

- **Acceptance criteria:**
  - [ ] Setiap studi kasus punya: judul, satu kalimat framing, 2–3 bullet hasil, tag kapabilitas.
  - [ ] Tidak ada istilah teknis Apps Script/PRD internal yang bocor ke copy (mis. jangan tampilkan nama sheet `_DB_STOK` dsb. — itu detail implementasi, bukan pesan untuk klien).
  - [ ] Ada tautan yang jelas ke portfolio developer lama untuk audiens yang ingin verifikasi kemampuan teknis lebih dalam.

### 8.4 How I Work (P0)

Proses 4 langkah, gaya newspaper timeline:
```text
01 UNDERSTAND → 02 ORGANIZE → 03 EXECUTE → 04 IMPROVE
```
Tagline pendukung: *"I don't just complete tasks. I look for ways to make recurring work easier."*

### 8.5 Tools (P0)

Dikelompokkan per kategori (bukan wall logo), diambil dari kombinasi skill CV + proyek Sheets:

| Kategori | Tools |
|---|---|
| **Workspace** | Google Workspace, Notion, Slack |
| **Data & Systems** | Google Sheets, Apps Script, Airtable, Excel |
| **Automation** | AI tools, Apps Script, REST API |
| **Content & Design** | Figma, Canva, WordPress |
| **Development (supporting capability)** | Next.js, Supabase, Firebase |

### 8.6 About (P0)

Framing singkat, bukan autobiografi penuh:
> *"I'm a computer science graduate and software developer who enjoys organizing messy information, solving operational problems, and making digital work simpler. I've led development teams, analyzed markets for a state-owned enterprise, and built systems that small businesses and students actually use."*

> *"Based in Indonesia. Available for remote work worldwide."*

Elemen pendukung (opsional, kecil): Cum Laude GPA 3.79, Bangkit Academy (Google, GoTo, Traveloka), sertifikasi BNSP — ditampilkan sebagai kredibilitas ringan, bukan CV penuh.

### 8.7 CTA Penutup & Footer (P0)

```text
GOT SOMETHING OFF YOUR PLATE?

Tell me what you need help with.

[ Start a conversation → ]
```
Footer: email, LinkedIn, GitHub, link ke portfolio developer, lokasi & timezone, tahun.

**Bahasa campuran:** seluruh copy utama berbahasa Inggris (audiens klien global/remote). Elemen kecil boleh Indonesia jika relevan secara personal (mis. label lokasi), tapi tidak wajib.

---

## 9. Spesifikasi Desain Visual

Arah desain mengikuti hasil eksplorasi sebelumnya: **Editorial Newspaper × Soft Neo-Brutalism × 90s Details**, dengan proporsi **60% Editorial / 25% Neo-brutalism / 15% detail 90s**.

| Elemen | Aturan |
|---|---|
| **Background** | Off-white / paper — `#F4F0E8` |
| **Ink (teks utama)** | `#171717` |
| **Accent** | Satu warna kuat — merah bata/orange `#D94F35`, dipakai konsisten (CTA, garis aksen, angka section) |
| **Tipografi** | Serif untuk headline (editorial), sans-serif untuk body; ukuran headline besar/oversized di hero |
| **Grid** | Newspaper grid (kolom, garis pembatas tipis hitam) |
| **Border** | Garis hitam tipis, bukan shadow lembut generik |
| **Cards** | Minimal, sudut tidak terlalu membulat |
| **Button/CTA** | Hard shadow ala neo-brutalism, bukan gradient/glassmorphism |
| **Detail 90s (sedikit)** | Label monospace kecil (`STATUS: ● AVAILABLE`), motif "browser window" tipis untuk kartu ketersediaan — dipakai sangat terbatas, jangan sampai mendominasi |
| **Animasi** | Subtle (fade/slide ringan saat scroll), tidak ramai |
| **Ikon** | Simple, line-based, bukan ilustrasi 3D/gradient |
| **Yang dihindari** | Gradient ungu-biru generik startup, glassmorphism, template freelancer bergaya "modern SaaS" generik |

**Prinsip penerapan:** editorial menjadi fondasi (grid, tipografi, warna), neo-brutalism dipakai di titik interaksi (tombol, kartu ketersediaan), 90s hanya sebagai bumbu kecil di 1–2 tempat (mis. status bar kecil), agar situs tetap terasa profesional untuk klien korporat, bukan sekadar "website menarik".

---

## 10. Kebutuhan Non-Fungsional

| Area | Persyaratan |
|---|---|
| **Performa** | Lighthouse Performance mobile ≥ 90; gambar dioptimasi (next/image atau setara); font di-subset |
| **Responsif** | Mobile-first; breakpoint utama: ≤ 480px, 481–1024px, ≥ 1025px |
| **Aksesibilitas** | Kontras warna memenuhi WCAG AA meski memakai palet gelap-di-atas-terang; status tidak hanya ditandai warna |
| **SEO dasar** | Meta title/description per halaman, Open Graph image khusus (bukan screenshot polos), sitemap.xml |
| **Analitik** | Analitik ringan (privacy-friendly, mis. Plausible/Vercel Analytics) untuk memantau §3.3 |
| **Maintainability** | Konten studi kasus & copy disimpan terpisah dari komponen UI (mis. file markdown/JSON) agar mudah diperbarui tanpa mengubah kode komponen |
| **Hosting** | Vercel (konsisten dengan portfolio lama), domain terpisah atau subdomain (lihat Pertanyaan Terbuka §14) |

---

## 11. Model Konten (Ringkas)

Agar mudah diperbarui tanpa menyentuh komponen UI:

```text
/content
  hero.json          → headline, subheadline, status, location
  pillars.json        → 4 pilar (title, examples[])
  work/
    umkm-toolkit.json → title, framing, problem, solution, results[], tags[]
    student-os.json   → idem
  how-i-work.json     → 4 langkah proses
  tools.json           → kategori → daftar tools
  about.json           → paragraf about, credentials[]
  contact.json         → CTA text, link kontak (mailto/WhatsApp/Calendly)
```

---

## 12. Roadmap Setelah V1

```text
V1    Landing page single-page (semua section P0) + link kontak eksternal
V1.1  Halaman studi kasus detail terpisah, testimonial, blog/notes ringan, CV versi VA
V1.2  Halaman "Rate & Packages", CMS headless untuk update konten
V2    Integrasi booking langsung (Calendly embed), versi multibahasa penuh
```

**Keputusan lanjut:** studi kasus baru (jika mengambil klien VA nyata) ditambahkan ke `/content/work/` mengikuti struktur yang sama seperti UMKM Toolkit dan Student OS.

---

## 13. Rencana Implementasi (untuk AI Agent)

### 13.1 Guardrail
- Ikuti `PRD.md`; jangan menambah halaman/section di luar prioritas yang sedang dikerjakan.
- Konten (copy) dan komponen UI dipisah sejak awal (lihat §11) — jangan hardcode teks panjang di dalam komponen.
- Jangan memakai gradient/glassmorphism generik; ikuti token warna & tipografi di §9.
- Setiap section harus lolos uji responsif di 375px sebelum lanjut ke section berikutnya.
- Jangan bocorkan detail implementasi internal proyek Sheets (nama sheet, nama fungsi Apps Script) ke dalam copy studi kasus — itu bahasa untuk developer, bukan untuk klien.

### 13.2 Fase & Definition of Done

| Fase | Output | Definition of Done |
|---|---|---|
| **0. Desain konten** | Wireframe teks tiap section, isi `/content/*.json`, palet & tipografi final | Disetujui pemilik produk; tidak ada placeholder "lorem ipsum" tersisa |
| **1. Fondasi** | Setup Next.js, sistem desain dasar (token warna/tipografi §9), layout grid editorial | Halaman kosong dengan nav + footer tampil sesuai gaya visual |
| **2. Hero & Pilar** | Section 8.1–8.2 | Lolos acceptance criteria §8.1–8.2 di mobile & desktop |
| **3. Selected Work** | Section 8.3 dengan 2 studi kasus | Lolos acceptance criteria §8.3; copy sudah direview (tidak bocor detail teknis) |
| **4. How I Work, Tools, About** | Section 8.4–8.6 | Semua section tampil konsisten dengan grid & tipografi |
| **5. CTA, Footer, Navigasi** | Section 8.7, sticky nav | CTA konsisten mengarah ke satu tujuan (§5 prinsip 4) |
| **6. Polish & Performance** | Optimasi gambar/font, animasi subtle, SEO meta | Lighthouse mobile ≥ 90; OG image tampil benar saat dibagikan |
| **7. QA lintas perangkat** | Review sebagai calon klien awam (bukan developer) | Pesan positioning jelas dalam < 5 detik untuk 3 penguji eksternal |

### 13.3 Contoh prompt per fase

*Fase 0*
> Baca `PRD.md`. Susun isi file `/content/*.json` sesuai §11 berdasarkan copy di §8. Jangan tulis kode komponen dulu. Tandai bagian yang masih perlu keputusan pemilik produk.

*Fase 1*
> Setup proyek Next.js dengan sistem desain sesuai §9 (token warna, tipografi serif+sans, grid editorial, komponen tombol hard-shadow). Buat layout dasar (nav sticky + footer) tanpa konten section.

*Fase 3*
> Implementasikan section "Selected Work" (§8.3) menggunakan data dari `/content/work/umkm-toolkit.json` dan `student-os.json`. Setiap studi kasus tampil sebagai kartu editorial dengan judul, framing, hasil, dan tag. Pastikan tidak ada detail teknis internal (nama sheet/fungsi) yang muncul di copy.

---

## 14. Pertanyaan Terbuka

1. **Domain/subdomain:** apakah situs VA ini di domain baru, atau subdomain dari `nazargunawan.vercel.app` (mis. `va.nazargunawan.vercel.app`)? Perlu dipertimbangkan efek terhadap SEO dan kejelasan positioning dua portfolio sekaligus.
2. **Jalur kontak utama:** email, WhatsApp, atau Calendly link untuk CTA "Work with me"?
3. **Apakah dua studi kasus Sheets cukup di V1**, atau perlu ditambah 1 studi kasus non-teknis (mis. dari pengalaman marketing di PT Surveyor Indonesia) untuk menunjukkan sisi "Operations" secara lebih langsung?
4. **Nama/branding:** apakah tetap pakai nama pribadi "Nazar Gunawan", atau ada nama layanan terpisah (mis. "Nazar — Systems & Support")?
5. **Testimonial:** karena belum ada klien VA formal, apakah V1 tampil tanpa testimonial dulu (jujur, sesuai kondisi), atau memakai bentuk lain dari validasi (mis. kutipan dari rekan kerja/atasan di CV)?

---

## Lampiran A — Ringkasan Sumber Konten

- **CV:** Muhammad Nazar Gunawan — Computer Science, Lambung Mangkurat University (GPA 3.79), pengalaman Lead Programmer, Marketing Officer/Analyst (PT Surveyor Indonesia), Mobile Developer (PT Kalimantan Prima Persada), Bangkit Academy (Google, GoTo, Traveloka).
- **Studi kasus 1:** PRD UMKM Business Toolkit (Google Sheets + Apps Script).
- **Studi kasus 2:** PRD Student OS (Google Sheets + Apps Script + Drive Integration).
- **Arah desain:** eksplorasi editorial newspaper × neo-brutalism × 90s untuk positioning Tech-Savvy Virtual Assistant.
- **Portfolio existing:** `nazargunawan.vercel.app` (fokus Software Engineer) — tetap aktif, ditautkan sebagai bukti kapabilitas teknis.
