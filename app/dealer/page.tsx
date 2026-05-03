"use client";

import { useState, useMemo } from "react";
import { SiteNavbar } from "@/components/site-navbar";
import { motion } from "framer-motion";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "/#shop" },
  { label: "Service", href: "/service" },
  { label: "Dealer", href: "/dealer" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/test-drive" }
];

// Data Mock Dealer
const dealersData = [
  {
    id: "d1",
    name: "Surya Otomotif Sudirman",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
    address: "Jl. Jenderal Sudirman No. 71, Senayan, Jakarta Selatan",
    phone: "021-555-0101",
    type: "Sales, Service, Sparepart (3S)"
  },
  {
    id: "d2",
    name: "Surya Otomotif Puri Indah",
    province: "DKI Jakarta",
    city: "Jakarta Barat",
    address: "Jl. Puri Indah Raya, Kembangan, Jakarta Barat",
    phone: "021-555-0102",
    type: "Sales (1S)"
  },
  {
    id: "d3",
    name: "Surya Otomotif Dago",
    province: "Jawa Barat",
    city: "Bandung",
    address: "Jl. Ir. H. Juanda No. 100, Dago, Bandung",
    phone: "022-555-0201",
    type: "Sales, Service, Sparepart (3S)"
  },
  {
    id: "d4",
    name: "Surya Otomotif Sempaja",
    province: "Kalimantan Timur",
    city: "Samarinda",
    address: "Jl. KH. Wahid Hasyim, Sempaja, Samarinda",
    phone: "0541-555-0301",
    type: "Sales, Service, Sparepart (3S)"
  },
  {
    id: "d5",
    name: "Surya Otomotif Sepinggan",
    province: "Kalimantan Timur",
    city: "Balikpapan",
    address: "Jl. Marsma R. Iswahyudi, Sepinggan, Balikpapan",
    phone: "0542-555-0302",
    type: "Sales & Service (2S)"
  }
];

const provinces = ["Semua", "DKI Jakarta", "Jawa Barat", "Kalimantan Timur"];

export default function DealerPage() {
  const [selectedProvince, setSelectedProvince] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDealers = useMemo(() => {
    return dealersData.filter((dealer) => {
      const matchProvince = selectedProvince === "Semua" || dealer.province === selectedProvince;
      const matchSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dealer.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchProvince && matchSearch;
    });
  }, [selectedProvince, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="dealer-layout">
      <SiteNavbar ctaHref="/test-drive" ctaLabel="Test Drive" navItems={navItems} variant="light" />
      
      <header className="dealer-header">
        <div className="dealer-header-content">
          <h1>Temukan Jaringan Dealer Kami</h1>
          <p>Layanan penjualan, perawatan berkala, dan suku cadang resmi Surya Otomotif terdekat di kota Anda.</p>
        </div>
      </header>

      <section className="dealer-container">
        <aside className="dealer-sidebar">
          <div className="filter-group">
            <label>Cari Lokasi</label>
            <input 
              type="text" 
              placeholder="Cari kota atau nama dealer..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label>Filter Provinsi</label>
            <div className="province-list">
              {provinces.map((prov) => (
                <button
                  key={prov}
                  className={`province-btn ${selectedProvince === prov ? 'active' : ''}`}
                  onClick={() => setSelectedProvince(prov)}
                >
                  {prov}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <motion.div 
          className="dealer-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedProvince + searchQuery} // Force re-animasi saat filter berubah
        >
          {filteredDealers.length > 0 ? (
            filteredDealers.map((dealer) => (
              <motion.article variants={cardVariants} className="dealer-card" key={dealer.id}>
                <div className="dealer-card-head">
                  <span className="dealer-type">{dealer.type}</span>
                  <h3>{dealer.name}</h3>
                </div>
                <div className="dealer-card-body">
                  <p className="dealer-address">{dealer.address}</p>
                  <p className="dealer-phone"><strong>T.</strong> {dealer.phone}</p>
                </div>
                <div className="dealer-card-foot">
                  <a href={`https://maps.google.com/?q=${dealer.name}`} target="_blank" rel="noopener noreferrer" className="outline-pill map-btn">
                    Lihat Peta
                  </a>
                  <a href="#kontak" className="dark-pill call-btn">
                    Hubungi
                  </a>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="no-result">
              <p>Dealer tidak ditemukan untuk pencarian ini.</p>
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
}