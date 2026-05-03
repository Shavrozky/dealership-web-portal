"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { getModelBySlug, getRelatedModels } from "@/lib/models-data";
import { SiteNavbar } from "@/components/site-navbar";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "/#shop" },
  { label: "Service", href: "/#service" },
  { label: "Dealer", href: "/#dealer" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/#kontak" },
];

export default function ModelDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const model = getModelBySlug(slug);

  if (!model) return notFound();

  const related = getRelatedModels(model.relatedSlugs);
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="model-detail-shell">
      <SiteNavbar
        ctaHref="/#kontak"
        ctaLabel="Test Drive"
        navItems={navItems}
        variant="light"
      />

      {/* ── HERO ── */}
      <section className="md-hero">
        <div className="md-hero-inner">
          <div className="md-hero-copy">
            <p className="md-kicker">{model.category} · {model.fuel}</p>
            <h1>{model.name}</h1>
            <p className="md-tagline">{model.tagline}</p>
            <div className="md-price-row">
              <span className="md-price-label">Mulai dari</span>
              <strong className="md-price">{model.price}</strong>
            </div>
            <p className="md-price-note">{model.priceNote}</p>
            <div className="md-hero-actions">
              <a className="md-btn-primary" href="/#kontak">Test Drive</a>
              <a className="md-btn-secondary" href="/#kontak">Hubungi Dealer</a>
            </div>
          </div>

          <div className="md-hero-visual">
            <div className="md-hero-glow" />
            <Image
              alt={model.name}
              className="md-hero-img"
              height={520}
              priority
              src={model.colors[activeColor].image}
              width={860}
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="md-stats-bar">
          {model.heroStats.map((stat) => (
            <div className="md-stat" key={stat.label}>
              <strong>{stat.value}<span>{stat.unit}</span></strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLOR PICKER ── */}
      <section className="md-colors-section">
        <div className="md-section-inner">
          <p className="md-section-kicker">Pilih Warna</p>
          <h2 className="md-section-title">{model.colors[activeColor].name}</h2>
          <div className="md-color-swatches">
            {model.colors.map((color, i) => (
              <button
                aria-label={color.name}
                className={i === activeColor ? "md-swatch is-active" : "md-swatch"}
                key={color.name}
                onClick={() => setActiveColor(i)}
                style={{ background: color.hex }}
                type="button"
              />
            ))}
          </div>
          <div className="md-color-preview">
            <div className="md-color-preview-bg" />
            <Image
              alt={model.colors[activeColor].name}
              className="md-color-img"
              height={400}
              src={model.colors[activeColor].image}
              width={800}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="md-features-section">
        <div className="md-section-inner">
          <p className="md-section-kicker">Keunggulan</p>
          <h2 className="md-section-title">Dirancang untuk Perjalanan Terbaik</h2>
        </div>
        <div className="md-features-grid">
          {model.features.map((feat, i) => (
            <article className="md-feature-card" key={feat.title}>
              <div className="md-feature-num">0{i + 1}</div>
              <Image
                alt={feat.title}
                className="md-feature-img"
                height={300}
                src={feat.image}
                width={560}
              />
              <div className="md-feature-body">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="md-specs-section">
        <div className="md-section-inner">
          <p className="md-section-kicker">Spesifikasi</p>
          <h2 className="md-section-title">Detail Teknis Lengkap</h2>
        </div>

        <div className="md-spec-tabs">
          {model.specGroups.map((group, i) => (
            <button
              className={i === activeTab ? "is-active" : undefined}
              key={group.group}
              onClick={() => setActiveTab(i)}
              type="button"
            >
              {group.group}
            </button>
          ))}
        </div>

        <div className="md-spec-table">
          {model.specGroups[activeTab].specs.map((spec) => (
            <div className="md-spec-row" key={spec.label}>
              <span className="md-spec-label">{spec.label}</span>
              <span className="md-spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="md-cta-band">
        <div className="md-cta-inner">
          <h2>Siap Rasakan {model.name}?</h2>
          <p>Jadwalkan test drive atau kunjungi dealer Surya Otomotif terdekat untuk pengalaman langsung.</p>
          <div className="md-cta-actions">
            <a className="md-btn-primary" href="/#kontak">Jadwalkan Test Drive</a>
            <a className="md-btn-outline" href="/#dealer">Temukan Dealer</a>
          </div>
        </div>
      </section>

      {/* ── RELATED MODELS ── */}
      {related.length > 0 && (
        <section className="md-related-section">
          <div className="md-section-inner">
            <p className="md-section-kicker">Model Lainnya</p>
            <h2 className="md-section-title">Jelajahi Lebih Banyak</h2>
          </div>
          <div className="md-related-grid">
            {related.map((rel) => (
              <Link className="md-related-card" href={`/models/${rel.slug}`} key={rel.slug}>
                <div className="md-related-visual">
                  <Image alt={rel.name} className="md-related-img" height={220} src={rel.heroImage} width={440} />
                </div>
                <div className="md-related-info">
                  <p className="md-related-cat">{rel.category} · {rel.fuel}</p>
                  <h3>{rel.name}</h3>
                  <p className="md-related-price">Mulai dari {rel.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer className="md-footer">
        <div className="md-footer-inner">
          <Link className="md-footer-brand" href="/">
            <span className="brand-icon dark" />
            <span>Surya Otomotif</span>
          </Link>
          <p>© 2026 Surya Otomotif. All rights reserved.</p>
          <div className="md-footer-links">
            <Link href="/models">Model</Link>
            <Link href="/#kontak">Kontak</Link>
            <Link href="/#dealer">Dealer</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
