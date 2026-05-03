export type ModelColor = {
  name: string;
  hex: string;
  image: string;
};

export type ModelSpec = {
  label: string;
  value: string;
};

export type ModelFeature = {
  title: string;
  description: string;
  image: string;
};

export type ModelDetail = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  category: string;
  fuel: string;
  heroImage: string;
  heroStats: { label: string; value: string; unit: string }[];
  colors: ModelColor[];
  specGroups: { group: string; specs: ModelSpec[] }[];
  features: ModelFeature[];
  relatedSlugs: string[];
};

export const allModels: ModelDetail[] = [
  {
    slug: "surya-j6-hybrid-ev",
    name: "Surya J6 Hybrid EV",
    tagline: "Premium family mover with electrified efficiency.",
    price: "Rp 303.000.000",
    priceNote: "Harga OTR Jakarta. Hubungi dealer untuk info terkini.",
    category: "MPV",
    fuel: "Electrified",
    heroImage: "/images/models/bev/surya-j6.png",
    heroStats: [
      { label: "Tenaga", value: "197", unit: "hp" },
      { label: "Torsi", value: "320", unit: "Nm" },
      { label: "0-100 km/h", value: "7.8", unit: "detik" },
      { label: "Konsumsi BBM", value: "18.5", unit: "km/l" },
    ],
    colors: [
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/models/bev/surya-j6.png" },
      { name: "Pearl White", hex: "#f5f3ee", image: "/images/models/bev/surya-j6.png" },
      { name: "Steel Blue", hex: "#3a5f82", image: "/images/models/bev/surya-j6.png" },
      { name: "Titanium Silver", hex: "#a8a4a0", image: "/images/models/bev/surya-j6.png" },
    ],
    specGroups: [
      {
        group: "Dimensi & Bobot",
        specs: [
          { label: "Panjang", value: "4.785 mm" },
          { label: "Lebar", value: "1.930 mm" },
          { label: "Tinggi", value: "1.720 mm" },
          { label: "Jarak sumbu roda", value: "2.830 mm" },
          { label: "Berat kosong", value: "1.895 kg" },
        ],
      },
      {
        group: "Mesin & Performa",
        specs: [
          { label: "Tipe mesin", value: "2.0L Turbo + Motor Elektrik" },
          { label: "Daya maksimum", value: "197 hp / 5.500 rpm" },
          { label: "Torsi maksimum", value: "320 Nm / 2.000–4.000 rpm" },
          { label: "Transmisi", value: "7-Speed DCT" },
          { label: "Penggerak", value: "Front-wheel drive" },
        ],
      },
      {
        group: "Kapasitas",
        specs: [
          { label: "Jumlah kursi", value: "7 kursi" },
          { label: "Volume bagasi", value: "680 L" },
          { label: "Kapasitas tangki", value: "60 L" },
        ],
      },
    ],
    features: [
      {
        title: "Super Hybrid Drive",
        description: "Sistem hybrid generasi terbaru yang memadukan mesin turbo 2.0L dengan motor elektrik untuk akselerasi instan dan efisiensi bahan bakar yang optimal di setiap kondisi jalan.",
        image: "/images/models/bev/surya-j6.png",
      },
      {
        title: "Panoramic Sunroof",
        description: "Atap panoramik selebar 1.2 meter menghadirkan kabin yang lapang dan terang. Kontrol UV otomatis menjaga kabin tetap nyaman saat terpapar sinar matahari langsung.",
        image: "/images/models/bev/surya-j6.png",
      },
      {
        title: "Smart Safety Suite",
        description: "Dilengkapi 12 sensor ultrasonik, 6 kamera 360°, dan sistem AEB (Autonomous Emergency Braking) untuk perlindungan maksimal di setiap perjalanan.",
        image: "/images/models/bev/surya-j6.png",
      },
    ],
    relatedSlugs: ["surya-csh-7-hybrid-ev", "surya-cross-5-xe"],
  },
  {
    slug: "surya-csh-7-hybrid-ev",
    name: "Surya CSH 7 Hybrid EV",
    tagline: "Hybrid comfort tuned for refined long-distance travel.",
    price: "Rp 1.388.000.000",
    priceNote: "Harga OTR Jakarta. Hubungi dealer untuk info terkini.",
    category: "MPV",
    fuel: "Electrified",
    heroImage: "/images/models/csh/surya-csh-7.png",
    heroStats: [
      { label: "Tenaga", value: "248", unit: "hp" },
      { label: "Torsi", value: "400", unit: "Nm" },
      { label: "0-100 km/h", value: "6.5", unit: "detik" },
      { label: "Konsumsi BBM", value: "22.0", unit: "km/l" },
    ],
    colors: [
      { name: "Obsidian Black", hex: "#141414", image: "/images/models/csh/surya-csh-7.png" },
      { name: "Glacier White", hex: "#f0eeea", image: "/images/models/csh/surya-csh-7.png" },
      { name: "Ocean Blue", hex: "#1e4d7a", image: "/images/models/csh/surya-csh-7.png" },
    ],
    specGroups: [
      {
        group: "Dimensi & Bobot",
        specs: [
          { label: "Panjang", value: "5.005 mm" },
          { label: "Lebar", value: "1.975 mm" },
          { label: "Tinggi", value: "1.800 mm" },
          { label: "Jarak sumbu roda", value: "2.950 mm" },
          { label: "Berat kosong", value: "2.150 kg" },
        ],
      },
      {
        group: "Mesin & Performa",
        specs: [
          { label: "Tipe mesin", value: "2.0L TGDI + Dual Motor EV" },
          { label: "Daya maksimum", value: "248 hp / 6.000 rpm" },
          { label: "Torsi maksimum", value: "400 Nm / 1.500–4.500 rpm" },
          { label: "Transmisi", value: "8-Speed AT" },
          { label: "Penggerak", value: "All-wheel drive" },
        ],
      },
      {
        group: "Kapasitas",
        specs: [
          { label: "Jumlah kursi", value: "7 kursi" },
          { label: "Volume bagasi", value: "830 L" },
          { label: "Kapasitas tangki", value: "70 L" },
        ],
      },
    ],
    features: [
      {
        title: "Dual-Motor All-Wheel Drive",
        description: "Sistem AWD dengan dua motor elektrik independen menghasilkan traksi sempurna di segala medan — dari jalan kota hingga off-road ringan.",
        image: "/images/models/csh/surya-csh-7.png",
      },
      {
        title: "Executive Lounge Interior",
        description: "Kursi captain seat baris kedua dengan fungsi recline 135° dan pijat 10 titik. Kabin premium berlapis kulit Nappa dengan ambient lighting 256 warna.",
        image: "/images/models/csh/surya-csh-7.png",
      },
      {
        title: "Cockpit Display 12.8\"",
        description: "Layar sentuh rotasi 12.8 inci yang terintegrasi dengan AI Assistant, navigasi real-time, dan koneksi 5G untuk pengalaman digital terdepan.",
        image: "/images/models/csh/surya-csh-7.png",
      },
    ],
    relatedSlugs: ["surya-j6-hybrid-ev", "surya-cross-5-xe"],
  },
  {
    slug: "surya-cross-5-xe",
    name: "Surya Cross 5 XE",
    tagline: "Bold SUV character for executive and daily use.",
    price: "Rp 1.288.000.000",
    priceNote: "Harga OTR Jakarta. Hubungi dealer untuk info terkini.",
    category: "SUV",
    fuel: "Gasoline",
    heroImage: "/images/models/ice/surya-cross-5.png",
    heroStats: [
      { label: "Tenaga", value: "268", unit: "hp" },
      { label: "Torsi", value: "380", unit: "Nm" },
      { label: "0-100 km/h", value: "6.1", unit: "detik" },
      { label: "Konsumsi BBM", value: "12.5", unit: "km/l" },
    ],
    colors: [
      { name: "Carbon Black", hex: "#1c1c1c", image: "/images/models/ice/surya-cross-5.png" },
      { name: "Arctic White", hex: "#f2f0ec", image: "/images/models/ice/surya-cross-5.png" },
      { name: "Burgundy Red", hex: "#7a1f2e", image: "/images/models/ice/surya-cross-5.png" },
      { name: "Desert Gold", hex: "#b8914a", image: "/images/models/ice/surya-cross-5.png" },
    ],
    specGroups: [
      {
        group: "Dimensi & Bobot",
        specs: [
          { label: "Panjang", value: "4.920 mm" },
          { label: "Lebar", value: "1.960 mm" },
          { label: "Tinggi", value: "1.745 mm" },
          { label: "Jarak sumbu roda", value: "2.900 mm" },
          { label: "Berat kosong", value: "2.050 kg" },
        ],
      },
      {
        group: "Mesin & Performa",
        specs: [
          { label: "Tipe mesin", value: "3.0L V6 Turbo" },
          { label: "Daya maksimum", value: "268 hp / 5.800 rpm" },
          { label: "Torsi maksimum", value: "380 Nm / 2.500–5.000 rpm" },
          { label: "Transmisi", value: "9-Speed AT" },
          { label: "Penggerak", value: "All-wheel drive" },
        ],
      },
      {
        group: "Kapasitas",
        specs: [
          { label: "Jumlah kursi", value: "5 kursi" },
          { label: "Volume bagasi", value: "560 L" },
          { label: "Kapasitas tangki", value: "65 L" },
        ],
      },
    ],
    features: [
      {
        title: "3.0L V6 Turbo Engine",
        description: "Mesin V6 turbocharged dengan teknologi direct injection menghasilkan 268 hp torsi yang mulus dan responsif. Akselerasi 0-100 km/h hanya dalam 6.1 detik.",
        image: "/images/models/ice/surya-cross-5.png",
      },
      {
        title: "Signature LED Matrix",
        description: "Lampu depan LED Matrix dengan 84 elemen pencahayaan yang secara otomatis menyesuaikan pola sinar berdasarkan kondisi lalu lintas sekitar.",
        image: "/images/models/ice/surya-cross-5.png",
      },
      {
        title: "Terrain Management System",
        description: "6 mode berkendara termasuk Sand, Snow, Mud, dan Rock untuk performa optimal di setiap medan. Suspensi adaptif menyesuaikan ketinggian otomatis.",
        image: "/images/models/ice/surya-cross-5.png",
      },
    ],
    relatedSlugs: ["surya-j6-hybrid-ev", "surya-csh-7-hybrid-ev"],
  },
];

export function getModelBySlug(slug: string): ModelDetail | undefined {
  return allModels.find((m) => m.slug === slug);
}

export function getRelatedModels(slugs: string[]): ModelDetail[] {
  return slugs.map((s) => allModels.find((m) => m.slug === s)).filter(Boolean) as ModelDetail[];
}

// Map catalog model names to slugs
export const modelNameToSlug: Record<string, string> = {
  "Surya J6 Hybrid EV": "surya-j6-hybrid-ev",
  "Surya CSH 7 Hybrid EV": "surya-csh-7-hybrid-ev",
  "Surya Cross 5 XE": "surya-cross-5-xe",
  "Surya Calya": "surya-j6-hybrid-ev",
  "All New Surya Avanza": "surya-j6-hybrid-ev",
  "Surya Kijang Innova": "surya-csh-7-hybrid-ev",
  "Surya Zenix": "surya-cross-5-xe",
  "Surya Zenix Hybrid EV": "surya-j6-hybrid-ev",
  "All New Surya Voxy": "surya-csh-7-hybrid-ev",
};
