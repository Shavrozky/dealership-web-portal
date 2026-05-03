"use client";

import { useState, useEffect } from "react";
import { SiteNavbar } from "@/components/site-navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "/#shop" },
  { label: "Service", href: "/service" },
  { label: "Dealer", href: "/#dealer" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/#kontak" }
];

// Data Mock untuk Dropdown Dinamis
const locationData = {
  jakarta: {
    name: "DKI Jakarta",
    cities: {
      "jak-sel": {
        name: "Jakarta Selatan",
        dealers: ["Surya Sudirman", "Surya Gandaria"]
      },
      "jak-bar": {
        name: "Jakarta Barat",
        dealers: ["Surya Puri Indah"]
      }
    }
  },
  jabar: {
    name: "Jawa Barat",
    cities: {
      bandung: {
        name: "Bandung",
        dealers: ["Surya Dago", "Surya Pasteur"]
      },
      bogor: {
        name: "Bogor",
        dealers: ["Surya Pajajaran"]
      }
    }
  },
  kaltim: {
    name: "Kalimantan Timur",
    cities: {
      samarinda: { 
        name: "Samarinda", 
        dealers: ["Surya Sempaja", "Surya Loa Janan"] 
      },
      balikpapan: { 
        name: "Balikpapan", 
        dealers: ["Surya Sepinggan"] 
      }
    }
  }
};

export default function ServicePage() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  
  // Reset city & dealer jika provinsi berubah
  useEffect(() => {
    setSelectedCity("");
  }, [selectedProvince]);

  const availableCities = selectedProvince ? locationData[selectedProvince as keyof typeof locationData].cities : {};
  const availableDealers = selectedCity ? (availableCities as any)[selectedCity].dealers : [];

  // Varian Animasi
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1, // Munculkan elemen anak satu per satu
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="service-layout">
      <SiteNavbar ctaHref="/#kontak" ctaLabel="Test Drive" navItems={navItems} variant="light" />
      
      <section className="service-hero">
        <Image 
          src="/images/service-bg.png" 
          alt="Service Background"
          fill
          className="service-bg-image"
          priority
        />
        <div className="service-overlay-dark" />

        <div className="service-container">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="service-form-wrapper"
          >
            <motion.div variants={itemVariants} className="form-header">
              <span className="step-number">1</span>
              <p>Isi data pribadi Anda</p>
            </motion.div>

            <motion.div variants={itemVariants} className="booking-card">
              <h2>Formulir Pemesanan Jasa Servis</h2>
              
              <form className="booking-form">
                <div className="form-grid">
                  {/* ... Input Nama, Telp, Email (tetap sama) ... */}
                  <div className="input-group">
                    <label>Nama Lengkap*</label>
                    <input type="text" placeholder="Tulis nama lengkap Anda..." required />
                  </div>
                  <div className="input-group">
                    <label>Nomor Telepon*</label>
                    <div className="phone-input">
                      <span>+62</span>
                      <input type="tel" placeholder="812..." required />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Email*</label>
                    <input type="email" placeholder="Tulis email aktif Anda..." required />
                  </div>

                  {/* PROVINSI */}
                  <div className="input-group">
                    <label>Provinsi*</label>
                    <select 
                      value={selectedProvince} 
                      onChange={(e) => setSelectedProvince(e.target.value)}
                      required
                    >
                      <option value="">Pilih provinsi Anda...</option>
                      {Object.entries(locationData).map(([id, data]) => (
                        <option key={id} value={id}>{data.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* KOTA (Dinamis) */}
                  <div className="input-group">
                    <label>Kota*</label>
                    <select 
                      value={selectedCity} 
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!selectedProvince}
                      required
                    >
                      <option value="">Pilih kota Anda...</option>
                      {Object.entries(availableCities).map(([id, data]: [string, any]) => (
                        <option key={id} value={id}>{data.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* DEALER (Dinamis) */}
                  <div className="input-group">
                    <label>Dealer*</label>
                    <select disabled={!selectedCity} required>
                      <option value="">Pilih dealer...</option>
                      {availableDealers.map((dealer: string) => (
                        <option key={dealer} value={dealer}>{dealer}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <motion.div variants={itemVariants} className="form-footer">
                  <p className="required-info">*Wajib diisi</p>
                  <button type="submit" className="gold-pill btn-submit">
                    Berikutnya
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}