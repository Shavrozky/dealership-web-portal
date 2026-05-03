"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";
import { SiteNavbar } from "@/components/site-navbar";

type NavItem = {
  label: string;
  href: string;
};

type HeroSlide = {
  image: string;
  kicker: string;
  title: string;
  description: string;
  panelTitle: string;
  panelCopy: string;
  stats: { label: string; value: string }[];
};

const slides: HeroSlide[] = [
  {
    image: "/images/hero/hero-1.png",
    kicker: "Surya Otomotif",
    title: "Presence that feels premium from the first glance.",
    description:
      "Desain modern, proporsi tegas, dan karakter visual yang dirancang untuk memberi kesan kuat sejak tampilan pertama.",
    panelTitle: "Flagship Presence",
    panelCopy: "Tampilan depan yang kokoh untuk identitas premium yang lebih berani.",
    stats: [
      { label: "Warranty", value: "5 Tahun" },
      { label: "Dealer", value: "12+ Kota" },
      { label: "Support", value: "24/7" }
    ]
  },
  {
    image: "/images/hero/hero-2.png",
    kicker: "Urban Confidence",
    title: "Crafted to move through the city with quiet authority.",
    description:
      "Lini kendaraan Surya Otomotif memadukan kenyamanan kabin, teknologi intuitif, dan bahasa desain yang terasa bersih serta eksklusif.",
    panelTitle: "Premium Comfort",
    panelCopy: "Material kabin, keheningan berkendara, dan fitur cerdas yang terasa matang untuk penggunaan harian.",
    stats: [
      { label: "Cabin", value: "Quiet Ride" },
      { label: "Tech", value: "Smart Drive" },
      { label: "Design", value: "Modern Bold" }
    ]
  },
  {
    image: "/images/hero/hero-3.png",
    kicker: "New Chapter",
    title: "Built for drivers who want elegance with stronger character.",
    description:
      "Dari siluet eksterior hingga pengalaman purna jual, setiap detail dirancang untuk menghadirkan pengalaman kepemilikan yang lebih refined.",
    panelTitle: "Executive Appeal",
    panelCopy: "Proporsi elegan, pencahayaan modern, dan karakter premium untuk perjalanan personal maupun bisnis.",
    stats: [
      { label: "Safety", value: "Advanced" },
      { label: "Style", value: "Executive" },
      { label: "Service", value: "Priority" }
    ]
  }
];

export function HeroCarousel({ navItems }: { navItems: NavItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
      });
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  function showPrev() {
    startTransition(() => {
      setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
    });
  }

  function showNext() {
    startTransition(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    });
  }

  return (
    <section className="hero-shell" id="home">
      {slides.map((slide, index) => (
        <div className={index === activeIndex ? "hero-media-layer is-active" : "hero-media-layer"} key={slide.image}>
          <Image
            alt={slide.title}
            className="hero-image"
            fill
            priority={index === 0}
            sizes="100vw"
            src={slide.image}
          />
        </div>
      ))}
      <div className="hero-overlay" />

      <SiteNavbar ctaHref="#kontak" ctaLabel="Test Drive" homeHref="#home" navItems={navItems} />

      <div className="hero-content-wrap">
        <div className="hero-copy" key={`copy-${activeIndex}`}>
          <p className="hero-kicker">{activeSlide.kicker}</p>
          <h1>{activeSlide.title}</h1>
          <p className="hero-description">{activeSlide.description}</p>

          <div className="hero-actions">
            <a className="dark-pill" href="/models">
              Lihat Model
            </a>
            <a className="light-pill" href="#dealer">
              Temukan Dealer
            </a>
          </div>

          <div className="hero-controls">
            <div className="hero-dots" aria-label="Hero slides">
              {slides.map((slide, index) => (
                <button
                  aria-label={`Pilih hero ${index + 1}`}
                  className={index === activeIndex ? "is-active" : undefined}
                  key={slide.image}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>

            <div className="hero-arrows">
              <button aria-label="Hero sebelumnya" className="hero-arrow" onClick={showPrev} type="button">
                ‹
              </button>
              <button aria-label="Hero berikutnya" className="hero-arrow" onClick={showNext} type="button">
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="hero-card" key={`card-${activeIndex}`}>
          <p className="hero-card-kicker">{activeSlide.panelTitle}</p>
          <strong>{activeSlide.kicker}</strong>
          <span>{activeSlide.panelCopy}</span>
          <div className="hero-card-meta">
            {activeSlide.stats.map((item) => (
              <div className="hero-stat" key={item.label}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
