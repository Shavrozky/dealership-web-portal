"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "/#shop" },
  { label: "Service", href: "/service" },
  { label: "Dealer", href: "/dealer" },
  { label: "Tentang", href: "/about" },
  { label: "Kontak", href: "/test-drive" }
];

const testModels = [
  { 
    id: "j6", 
    name: "Surya J6 EV", 
    type: "BEV",
    image: "/images/models/bev/surya-j6.png" 
  },
  { 
    id: "csh7", 
    name: "Surya CSH 7 Hybrid", 
    type: "Hybrid",
    image: "/images/models/csh/surya-csh-7.png" 
  },
  { 
    id: "cross5", 
    name: "Surya Cross 5", 
    type: "ICE",
    image: "/images/models/ice/surya-cross-5.png" 
  }
];

export default function TestDrivePage() {
  const [selectedModelId, setSelectedModelId] = useState(testModels[0].id);
  
  const activeModel = testModels.find(m => m.id === selectedModelId) || testModels[0];

  return (
    <main className="td-layout">
      <SiteNavbar ctaHref="/test-drive" ctaLabel="Test Drive" navItems={navItems} variant="light" />
      
      <section className="td-split-container">
        {/* BAGIAN KIRI: Visual Mobil Dinamis */}
        <div className="td-visual-pane">
          <div className="td-visual-backdrop" />
          <div className="td-visual-content">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="td-visual-text"
            >
              <h2>Rasakan Sensasi Surya.</h2>
              <p>Jadwalkan sesi Anda untuk menguji performa, kenyamanan kabin, dan teknologi cerdas kami secara langsung.</p>
            </motion.div>

            <div className="td-image-showcase">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModel.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image 
                    src={activeModel.image} 
                    alt={activeModel.name} 
                    width={800} 
                    height={450} 
                    className="td-car-image"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* BAGIAN KANAN: Formulir */}
        <div className="td-form-pane">
          <motion.div 
            className="td-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="td-form-header">
              <span className="info-kicker">Booking</span>
              <h3>Pilih Model Kendaraan</h3>
            </div>

            {/* Pemilih Model Visual */}
            <div className="td-model-selector">
              {testModels.map((model) => (
                <button
                  key={model.id}
                  className={`td-model-btn ${selectedModelId === model.id ? 'active' : ''}`}
                  onClick={() => setSelectedModelId(model.id)}
                  type="button"
                >
                  <span className="td-badge">{model.type}</span>
                  <strong>{model.name}</strong>
                </button>
              ))}
            </div>

            <form className="td-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <div className="input-group" style={{ gridColumn: "1 / -1" }}>
                  <label>Nama Lengkap*</label>
                  <input type="text" placeholder="Masukkan nama Anda..." required />
                </div>
                
                <div className="input-group">
                  <label>Nomor Telepon*</label>
                  <input type="tel" placeholder="0812..." required />
                </div>

                <div className="input-group">
                  <label>Email*</label>
                  <input type="email" placeholder="email@anda.com" required />
                </div>

                <div className="input-group">
                  <label>Pilih Dealer*</label>
                  <select required>
                    <option value="">Pilih lokasi terdekat...</option>
                    <option value="sudirman">Surya Otomotif Sudirman (Jakarta)</option>
                    <option value="dago">Surya Otomotif Dago (Bandung)</option>
                    <option value="sempaja">Surya Otomotif Sempaja (Samarinda)</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Rencana Jadwal*</label>
                  <input type="date" required />
                </div>
              </div>

              <div className="td-form-footer">
                <button type="submit" className="gold-pill td-submit-btn">
                  Konfirmasi Jadwal
                </button>
                <p className="td-disclaimer">
                  Tim Surya Otomotif akan menghubungi Anda untuk mengonfirmasi ketersediaan unit dan jadwal.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}