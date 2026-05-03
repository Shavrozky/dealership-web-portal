"use client";

import Image from "next/image";
import { SiteNavbar } from "@/components/site-navbar";
import { motion } from "framer-motion";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "/#shop" },
  { label: "Service", href: "/service" },
  { label: "Dealer", href: "/dealer" },
  { label: "Tentang", href: "/about" },
  { label: "Kontak", href: "/test-drive" }
];

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <main className="about-layout">
      <SiteNavbar ctaHref="/test-drive" ctaLabel="Test Drive" navItems={navItems} variant="overlay" />
      
      {/* SECTION 1: HERO */}
      <section className="about-hero">
        <Image 
          src="/images/service-bg.png" // Siapkan gambar beresolusi tinggi untuk background
          alt="Surya Otomotif Vision"
          fill
          priority
          className="about-hero-image"
        />
        <div className="about-hero-overlay" />
        
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="section-kicker" style={{ color: "var(--gold)" }}>Kisah Kami</p>
          <h1>Mendefinisikan Ulang Standar Mobilitas.</h1>
        </motion.div>
      </section>

      {/* SECTION 2: FILOSOFI (SPLIT LAYOUT) */}
      <section className="about-philosophy">
        <div className="philosophy-container">
          <motion.div 
            className="philosophy-visual"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="image-wrapper">
              <Image 
                src="/images/service-bg.png" // Gambar mobil dari sudut artistik/detail mesin
                alt="Filosofi Desain"
                fill
                className="philosophy-img"
              />
            </div>
          </motion.div>

          <motion.div 
            className="philosophy-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2>Desain yang Berbicara, Teknologi yang Mengerti.</h2>
            <p>
              Surya Otomotif lahir dari visi untuk menghadirkan kendaraan yang tidak hanya berfungsi sebagai alat transportasi, tetapi juga sebagai ruang personal yang premium dan aman. 
            </p>
            <p>
              Melalui riset mendalam dan pendekatan desain yang berpusat pada manusia, kami menggabungkan garis desain yang bersih dengan teknologi cerdas. Setiap material dipilih dengan cermat, dan setiap fitur dirancang untuk memberikan ketenangan pikiran selama perjalanan.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <strong>10+</strong>
                <span>Tahun Inovasi</span>
              </div>
              <div className="stat-item">
                <strong>3</strong>
                <span>Pilar Mobilitas</span>
              </div>
              <div className="stat-item">
                <strong>24/7</strong>
                <span>Dedikasi Purna Jual</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="about-values">
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <p className="section-kicker">Pilar Utama</p>
          <h2 className="section-title section-title-dark">Nilai yang Kami Bawa</h2>
        </motion.div>

        <motion.div 
          className="values-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} className="value-card">
            <div className="value-icon">✧</div>
            <h3>Premium Craftsmanship</h3>
            <p>Perhatian ekstra pada detail perakitan dan pemilihan material kabin untuk memastikan pengalaman taktil yang mewah dan nyaman.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Electrified Future</h3>
            <p>Berkomitmen pada masa depan berkelanjutan melalui transisi teknologi Hybrid dan Battery Electric Vehicle (BEV) yang efisien.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="value-card">
            <div className="value-icon">🛡️</div>
            <h3>Uncompromised Safety</h3>
            <p>Integrasi sistem keselamatan aktif dan sasis kokoh untuk melindungi pengemudi, penumpang, dan pejalan kaki tanpa kompromi.</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}