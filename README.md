# 🗺️ Peta Indonesia

[![GitHub Stars](https://img.shields.io/github/stars/Syaptiyan/peta-indonesia?style=social)](https://github.com/Syaptiyan/peta-indonesia/stargazers)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat-square&logo=github)](https://syaptiyan.github.io/peta-indonesia/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=flat-square)](https://github.com/Syaptiyan/peta-indonesia)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square)](https://github.com/Syaptiyan/peta-indonesia/pulls)

Peta Interaktif Indonesia dengan data per provinsi dan informasi gempa terkini dari BMKG.

## ✨ Fitur

### 🗺️ Peta Interaktif
- **38 Provinsi** — data lengkap setiap provinsi
- **Klik Provinsi** — lihat detail di peta SVG
- **Pencarian** — cari berdasarkan nama atau ibu kota

### 📊 Data Provinsi
- **Ibu Kota** — nama ibu kota setiap provinsi
- **Luas Wilayah** — dalam km²
- **Jumlah Penduduk** — data populasi
- **Pulau** — wilayah pulau

### 🌍 Info Gempa BMKG
- **Gempa Terkini** — data real-time dari BMKG
- **Magnitudo** — kekuatan gempa
- **Kedalaman** — kedalaman gempa
- **Wilayah** — lokasi gempa
- **Dirasakan** — skala MMI

### 🎨 UI/UX
- **Dark/Light Mode** — toggle tema gelap/terang
- **Responsive** — tampil optimal di semua device
- **Mobile Menu** — navigasi mudah di mobile
- **Skeleton Loading** — loading shimmer effect
- **Scroll Progress** — progress bar di atas
- **Scroll to Top** — tombol scroll ke atas

### 📱 PWA
- **Installable** — bisa diinstall sebagai app di HP
- **Offline Mode** — tetap jalan tanpa internet
- **Service Worker** — cache data untuk akses offline

## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [Alpine.js](https://alpinejs.dev/) — reactive framework
- [Font Awesome](https://fontawesome.com/) — icons
- [BMKG API](https://data.bmkg.go.id/) — data gempa
- Service Worker — offline caching
- PWA Manifest — installable app

## 📁 Struktur Project

```
peta-indo/
├── index.html     # Halaman utama (HTML + Alpine.js)
├── script.js      # Logic & API call
├── style.css      # Custom styling
├── sw.js          # Service Worker (offline)
├── manifest.json  # PWA manifest
├── icon.svg       # App icon
├── CHANGELOG.md   # Riwayat perubahan
└── README.md      # Dokumentasi
```

## 🚀 Live Demo

👉 [https://syaptiyan.github.io/peta-indo](https://syaptiyan.github.io/peta-indo)

## 📱 Install sebagai App

### Android (Chrome)
1. Buka https://syaptiyan.github.io/peta-indo
2. Klik popup "Install Peta Indonesia?"
3. Klik **Install**
4. App muncul di home screen

### iOS (Safari)
1. Buka link di Safari
2. Klik tombol **Share** (kotak dengan panah)
3. Pilih **Add to Home Screen**
4. Klik **Add**

## 🤝 Kontribusi

1. Fork repository ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📝 Lisensi

MIT License

## 👨‍💻 Dibuat oleh

**Syaptiyan Ade Putra**
- GitHub: [@Syaptiyan](https://github.com/Syaptiyan)
- Instagram: [@adee.razer](https://instagram.com/adee.razer)
- LinkedIn: [Syaptiyan Ade Putra](https://linkedin.com/in/syaptiyan-ade-putra-b4945120b)
