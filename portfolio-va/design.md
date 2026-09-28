# design.md — Design System & Spesifikasi Implementasi (Next.js)

| | |
|---|---|
| **Proyek** | Nazar Gunawan — Tech-Savvy Virtual Assistant Portfolio |
| **Dokumen pendamping** | `PRD.md` (v1.0) — dokumen ini menerjemahkan §8–§11 PRD menjadi token desain & spesifikasi kode |
| **Stack** | Next.js (App Router) + TypeScript + Tailwind CSS + next/font |
| **Hosting** | Vercel |
| **Versi dokumen** | 1.0 (27 September 2026) |

> **Cara pakai:** `PRD.md` menjawab *apa* yang dibangun dan *kenapa*. `design.md` ini menjawab *seperti apa bentuknya secara teknis* — token warna/tipografi, struktur komponen, dan urutan build. AI agent membaca keduanya sebelum menulis kode; jangan menyimpang dari token di §1–§2 tanpa alasan yang dicatat.

---

## 0. Arah Desain (ringkas dari brief)

Editorial newspaper sebagai fondasi, dengan sentuhan neo-brutalism di titik interaksi dan detail terminal/90s yang sangat dibatasi. Rasa akhir: **"seorang profesional independen yang cerdas, rapi, dan bisa dipercaya memegang data Anda"** — bukan template freelancer, bukan dashboard SaaS generik.

Tiga hal yang harus dihindari secara sadar (karena mudah jadi default generik AI): (1) kartu rounded seragam dengan shadow abu-abu lembut yang sama di semua tempat, (2) label eyebrow ALL-CAPS di atas setiap heading, (3) motion fade-slide-up yang diulang di tiap section. Motion dipakai satu kali secara sengaja (lihat §5), dan struktur editorial (garis, grid, nomor) hanya dipakai di tempat yang memang berupa urutan (How I Work) — bukan didekorasi ke semua section.

---

## 1. Token Desain — Warna

| Token | Hex | Peran |
|---|---|---|
| `--color-paper` | `#F4F0E8` | Background utama |
| `--color-paper-raised` | `#EAE4D6` | Background section alternatif/kartu (sedikit lebih gelap dari paper, bukan putih) |
| `--color-ink` | `#171717` | Teks utama, border |
| `--color-ink-soft` | `#4A4640` | Teks sekunder/body panjang (kontras cukup, lebih lembut dari ink penuh) |
| `--color-accent` | `#D94F35` | Satu warna aksen: CTA, garis pemisah aktif, angka/label proses |
| `--color-accent-ink` | `#FFFFFF` | Teks di atas accent (tombol) |
| `--color-line` | `#171717` @ 100% untuk border tebal, `#171717` @ 15% untuk hairline rule |
| `--color-focus` | `#2F6FED` | Warna ring fokus keyboard (biru, sengaja berbeda dari accent agar jelas terlihat sebagai state fokus, bukan estetika) |

**Aturan:** hanya satu accent warna di seluruh situs (§5 prinsip PRD). Jangan menambah warna kedua "untuk variasi" — variasi datang dari tipografi & layout, bukan palet.

---

## 2. Token Desain — Tipografi

| Peran | Typeface | Alasan pemilihan |
|---|---|---|
| **Display / Headline** | **Fraunces** (variable, optical size besar, kontras tinggi) | Serif editorial yang hangat tapi punya karakter tajam di ukuran besar — cocok untuk headline hero yang oversized, beda dari serif "aman" seperti Georgia/Playfair yang terlalu sering dipakai di brief editorial generik |
| **Body & UI** | **IBM Plex Sans** | Sans yang netral tapi punya sedikit karakter teknis di detailnya — menautkan sisi "tech" ke tipografi tanpa harus pakai monospace di body |
| **Label kecil / status / detail 90s** | **IBM Plex Mono** | Dipakai sangat terbatas: label status ketersediaan, nomor proyek, meta info kecil — satu keluarga dengan body (Plex), jadi tetap terasa satu sistem, bukan tempelan |

**Import via `next/font/google`:**
```ts
// app/fonts.ts
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})
```

**Skala tipografi** (basis 16px, rasio ~1.25, disesuaikan manual di titik-titik kunci):

| Level | Ukuran (mobile → desktop) | Font | Line-height | Pemakaian |
|---|---|---|---|---|
| Display | 44px → 88px | Fraunces 500 | 1.02 | Headline hero |
| H1 | 32px → 48px | Fraunces 500 | 1.08 | Judul section |
| H2 | 22px → 28px | Fraunces 500 | 1.15 | Judul kartu studi kasus |
| Body-lg | 18px → 20px | IBM Plex Sans 400 | 1.55 | Sub-headline, intro paragraf |
| Body | 15px → 16px | IBM Plex Sans 400 | 1.6 | Paragraf umum |
| Label | 13px | IBM Plex Mono 500 | 1.4 | Status, meta, tag kapabilitas |

**Aturan panjang baris:** maksimal ~70 karakter untuk body (serif boleh sedikit lebih panjang, ~75). Jangan biarkan paragraf melebar penuh di layar desktop — batasi lebar kolom teks (`max-width: 65ch`).

**Yang dihindari secara eksplisit:** ALL-CAPS untuk label section, menge-bold/italic satu kata saja di tengah headline untuk "aksen", eyebrow label di atas tiap heading tanpa fungsi informasi.

---

## 3. Layout & Grid

**Sistem grid:** 12 kolom di desktop (≥1025px), 6 kolom di tablet, 4 kolom di mobile. Gutter 24px desktop / 16px mobile. Konten utama dibatasi `max-width: 1120px`, dengan garis vertikal tipis (`--color-line` 15%) di margin kiri-kanan pada layar besar — motif newspaper column tanpa membuat grid terasa kaku penuh.

**Alignment:** left-aligned secara default (bukan center) — konsisten dengan nuansa editorial/koran. Hero adalah pengecualian yang boleh sedikit lebih dramatis secara tipografis tapi tetap left-aligned, bukan center.

### Wireframe — Hero (mobile vs desktop)

```text
MOBILE (≤480px)                    DESKTOP (≥1025px)
┌─────────────────────┐            ┌──────────────────────────────────────────┐
│ ● Available · GMT+7  │            │ REMOTE ASSISTANT           ┌────────────┐│
│                       │            │ FOR PEOPLE WHO             │ ● AVAILABLE││
│ REMOTE                │            │ HAVE TOO MUCH              │ Indonesia  ││
│ ASSISTANT             │            │ TO DO.                     │ GMT+7      ││
│ FOR PEOPLE            │            │                            └────────────┘│
│ WHO HAVE              │            │ Research · Operations ·                   │
│ TOO MUCH              │            │ Data · Automation                         │
│ TO DO.                │            │                                            │
│                       │            │ Tech-savvy remote assistant helping...    │
│ Research · Operations │            │                                            │
│ · Data · Automation   │            │ [ Work with me → ]                        │
│                       │            └──────────────────────────────────────────┘
│ Tech-savvy remote...  │
│                       │
│ [ Work with me → ]    │
└─────────────────────┘
```
Kartu status ketersediaan di desktop diposisikan sebagai elemen editorial kecil di kanan atas (bukan badge mengambang generik) — border hitam tipis, tanpa shadow.

### Wireframe — Selected Work (kartu studi kasus)

```text
┌───────────────────────────────────────────┐
│  UMKM BUSINESS TOOLKIT                     │
│  ─────────────────────────                 │
│  A point-of-sale, inventory, and pricing   │
│  system built inside Google Sheets...      │
│                                             │
│  → Small shops don't know their real       │
│    profit margins                          │
│  → Automated cost-to-price calculator      │
│  → Real-time profit/loss dashboard         │
│                                             │
│  Data Modeling · Apps Script · Business    │
│  Logic · UX for Non-Technical Users        │
└───────────────────────────────────────────┘
```
Border hitam solid 1–1.5px, sudut tidak membulat (`border-radius: 2px` maksimal — bukan 0 kaku total, sedikit softening agar tidak terasa terlalu brutal). Hover state di desktop: border berubah jadi accent, tanpa shadow tambahan (perubahan warna border sudah cukup sebagai feedback).

---

## 4. Komponen & Struktur Proyek (Next.js App Router)

```text
/app
  layout.tsx              # font vars, <html>, metadata dasar
  page.tsx                # landing page — merangkai semua section P0
  globals.css             # token CSS custom properties, reset, base typography
  /work
    /[slug]
      page.tsx            # (P1) halaman studi kasus detail
/components
  /layout
    SiteNav.tsx            # sticky nav, anchor links, CTA kanan
    SiteFooter.tsx
  /sections
    Hero.tsx
    Pillars.tsx             # "What I Can Take Off Your Plate"
    SelectedWork.tsx
    WorkCard.tsx            # 1 kartu studi kasus, reusable
    HowIWork.tsx            # timeline 4 langkah
    Tools.tsx
    About.tsx
    ClosingCta.tsx
  /ui
    Button.tsx              # varian: primary (hard-shadow), ghost
    StatusBadge.tsx          # kartu "● Available" gaya terminal kecil
    TagList.tsx              # tag kapabilitas (Plex Mono)
    SectionHeading.tsx
/content
  hero.json
  pillars.json
  how-i-work.json
  tools.json
  about.json
  contact.json
  /work
    umkm-toolkit.json
    student-os.json
/lib
  content.ts               # helper load & type content JSON
  types.ts                 # tipe TS untuk tiap struktur content
/public
  /og
    og-image.png            # Open Graph image kustom (bukan screenshot polos)
  /fonts (jika self-host fallback diperlukan)
tailwind.config.ts
```

**Prinsip komponen:** setiap section adalah komponen presentational yang menerima data dari `/content/*.json` lewat `lib/content.ts` — komponen tidak boleh hardcode teks panjang (selaras dengan §11 PRD). `WorkCard.tsx` dipakai ulang baik di landing (ringkas) maupun di halaman detail P1 (lengkap), dibedakan lewat prop `variant="summary" | "full"`.

**Tailwind config — mapping token:**
```ts
// tailwind.config.ts (ringkas)
theme: {
  extend: {
    colors: {
      paper: '#F4F0E8',
      'paper-raised': '#EAE4D6',
      ink: '#171717',
      'ink-soft': '#4A4640',
      accent: '#D94F35',
      focus: '#2F6FED',
    },
    fontFamily: {
      display: ['var(--font-display)', 'serif'],
      body: ['var(--font-body)', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace'],
    },
    borderRadius: {
      DEFAULT: '2px',
    },
    maxWidth: {
      content: '1120px',
      prose: '65ch',
    },
  },
}
```

---

## 5. Motion Spec

**Satu momen terorkestrasi:** saat halaman pertama kali dimuat, elemen hero muncul berurutan singkat (status badge → headline → sub-copy → CTA), total durasi ≤ 600ms, easing `ease-out`. Ini satu-satunya "reveal sequence" di situs.

**Bukan dipakai:** fade-slide-up berulang di setiap section saat di-scroll. Section lain muncul langsung (tanpa animasi masuk) — kesederhanaan ini justru menonjolkan momen hero.

**Motion yang tetap ada (respons ke aksi pengguna):**
- Hover kartu studi kasus: transisi warna border (150ms) ke `--color-accent`.
- Hover tombol CTA: shadow bergeser sedikit (efek "ditekan") saat `:active`, bukan sekadar warna berubah.
- Nav sticky: transisi background saat scroll melewati hero (dari transparan ke `--color-paper` dengan hairline bottom border).

**Reduced motion:** semua transisi/reveal dibungkus `@media (prefers-reduced-motion: reduce)` → durasi diset ke 0/near-instant, tanpa transform.

---

## 6. Aksesibilitas & Kualitas Dasar

- [ ] Kontras teks ink (`#171717`) di atas paper (`#F4F0E8`) dan sebaliknya untuk teks accent di atas ink — verifikasi rasio ≥ 4.5:1 untuk body, ≥ 3:1 untuk teks besar (display).
- [ ] Fokus keyboard terlihat jelas pada semua elemen interaktif (`--color-focus`), termasuk pada nav anchor link dan tombol.
- [ ] Semua ikon dekoratif diberi `aria-hidden`; ikon fungsional diberi label.
- [ ] Status "● Available" tidak hanya ditandai warna — sertakan teks eksplisit, bukan sekadar dot hijau.
- [ ] Struktur heading semantik berurutan (`h1` di hero, `h2` per section, `h3` untuk item di dalamnya) — bukan diloncat demi ukuran visual.
- [ ] Semua gambar (termasuk OG image, ikon) punya `alt` yang deskriptif atau kosong (`alt=""`) jika murni dekoratif.

---

## 7. Performa & SEO (mendukung NFR di PRD §10)

| Area | Implementasi |
|---|---|
| Font | `next/font/google` dengan subset `latin` saja, `display: swap` implisit dari next/font |
| Gambar | `next/image` untuk OG image & aset visual apa pun; format WebP/AVIF otomatis |
| Metadata | `generateMetadata` di `app/page.tsx` — title, description, OG image kustom per §10 PRD |
| Sitemap | `app/sitemap.ts` otomatis dari daftar halaman (landing + halaman work jika P1 aktif) |
| Analitik | Vercel Analytics atau Plausible — dipasang via `<Script>`/package resmi, bukan tag manual yang memblokir render |
| Lighthouse target | Performance ≥ 90 (mobile) — verifikasi setelah Fase 6 di PRD §13.2 sebelum lanjut ke QA |

---

## 8. Checklist Kesesuaian dengan Brief (self-review sebelum build)

Sebelum menulis kode, tinjau ulang: apakah desain ini bisa jadi hasil generik untuk brief serupa manapun, atau memang lahir dari brief spesifik "Tech-Savvy Virtual Assistant" milik Nazar?

- [ ] Palet & tipografi sudah ditentukan dari eksplorasi desain sebelumnya (bukan default cream+terracotta generik yang dipilih ulang tanpa alasan).
- [ ] Detail 90s/terminal (Plex Mono, status badge) benar-benar dipakai terbatas — cek ulang tidak "menyebar" ke elemen lain di luar §0.
- [ ] Nomor urut (01/02/03/04) hanya dipakai di How I Work karena memang proses berurutan — tidak dipakai di Pillars atau Tools yang bukan urutan.
- [ ] Copy studi kasus ditulis dari sudut pandang hasil untuk klien (§8.3 PRD), bukan spesifikasi teknis PRD asli yang bocor ke UI.
- [ ] Satu momen motion di hero sudah cukup "memorable" tanpa perlu animasi tambahan di section lain.
