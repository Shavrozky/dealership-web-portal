"use client";

import Image from "next/image";
import { startTransition, useState } from "react";

type Category = "BEV" | "CSH" | "ICE";

type ModelItem = {
  category: Category;
  name: string;
  price: string;
  image: string;
  specs: string[];
  cta: string;
};

const slides: ModelItem[] = [
  {
    category: "BEV",
    name: "Surya J6",
    price: "IDR 560.500.000",
    image: "/images/models/bev/surya-j6.png",
    specs: ["Premium SUV", "Signature Grille", "Luxury Cabin"],
    cta: "Lihat Detail Mobil"
  },
  {
    category: "CSH",
    name: "Surya CSH 7",
    price: "IDR 489.900.000",
    image: "/images/models/csh/surya-csh-7.png",
    specs: ["Blue Metallic", "7 Seater", "Smart Safety"],
    cta: "Pelajari Varian"
  },
  {
    category: "ICE",
    name: "Surya Cross 5",
    price: "IDR 399.900.000",
    image: "/images/models/ice/surya-cross-5.png",
    specs: ["Executive SUV", "LED Headlamp", "Comfort Ride"],
    cta: "Lihat Spesifikasi"
  }
];

const categories: Category[] = ["BEV", "CSH", "ICE"];

export function ModelShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeModel = slides[activeIndex];
  const activeCategory = activeModel.category;

  function selectCategory(category: Category) {
    startTransition(() => {
      const nextIndex = slides.findIndex((slide) => slide.category === category);
      setActiveIndex(nextIndex >= 0 ? nextIndex : 0);
    });
  }

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
    <section className="showcase" id="model">
      <div className="section-head section-head-tight">
        <p className="section-kicker">Model</p>
        <h2 className="section-title section-title-dark">Temukan model Surya Otomotif sesuai gaya berkendara Anda.</h2>
      </div>

      <div className="showcase-tabs" aria-label="Kategori model">
        {categories.map((category) => (
          <button
            aria-pressed={activeCategory === category}
            className={activeCategory === category ? "is-active" : undefined}
            key={category}
            onClick={() => selectCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="showcase-rail" aria-label="Daftar model">
        {slides.map((model, index) => (
          <button
            className={index === activeIndex ? "showcase-chip is-active" : "showcase-chip"}
            key={`${model.category}-${model.name}`}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{model.category}</span>
            {model.name}
          </button>
        ))}
      </div>

      <div className="showcase-stage">
        <button aria-label="Sebelumnya" className="stage-arrow" onClick={showPrev} type="button">
          ‹
        </button>

        <div className="showcase-product">
          <div className="product-backdrop" />
          <div className="product-panel">
            <div className="product-image-wrap">
              <Image
                alt={activeModel.name}
                className="product-image"
                height={520}
                priority
                src={activeModel.image}
                width={920}
              />
            </div>

            <div className="product-content">
              <p className="price-label">Mulai dari</p>
              <h3>{activeModel.price}</h3>
              <div className="product-specs">
                {activeModel.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
              <a className="gold-pill" href="#kontak">
                {activeModel.cta}
              </a>
            </div>
          </div>

          <div className="slider-dots" aria-label="Posisi slide">
            {slides.map((model, index) => (
              <button
                aria-label={`Pilih ${model.name}`}
                className={index === activeIndex ? "is-active" : undefined}
                key={`${model.category}-${model.name}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>

        <button aria-label="Berikutnya" className="stage-arrow" onClick={showNext} type="button">
          ›
        </button>
      </div>
    </section>
  );
}
