"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import { modelNameToSlug } from "@/lib/models-data";

type Segment = "All" | "MPV" | "SUV" | "Hatchback" | "Sedan" | "Commercial";
type Fuel = "All" | "Electrified" | "Gasoline" | "Diesel";

type ModelCard = {
  name: string;
  price: string;
  segment: Exclude<Segment, "All">;
  fuel: Exclude<Fuel, "All">;
  badge?: string;
  subtitle: string;
  image: string;
};

const segmentTabs: Segment[] = ["All", "MPV", "SUV", "Hatchback", "Sedan", "Commercial"];
const fuelTabs: Fuel[] = ["All", "Electrified", "Gasoline", "Diesel"];

const models: ModelCard[] = [
  {
    name: "Surya J6 Hybrid EV",
    price: "Rp303.000.000",
    segment: "MPV",
    fuel: "Electrified",
    badge: "NEW!",
    subtitle: "Premium family mover with electrified efficiency.",
    image: "/images/models/bev/surya-j6.png"
  },
  {
    name: "Surya Cross 5 XE",
    price: "Rp1.288.000.000",
    segment: "SUV",
    fuel: "Gasoline",
    badge: "NEW!",
    subtitle: "Bold SUV character for executive and daily use.",
    image: "/images/models/ice/surya-cross-5.png"
  },
  {
    name: "Surya CSH 7 Hybrid EV",
    price: "Rp1.388.000.000",
    segment: "MPV",
    fuel: "Electrified",
    badge: "NEW!",
    subtitle: "Hybrid comfort tuned for refined long-distance travel.",
    image: "/images/models/csh/surya-csh-7.png"
  },
  {
    name: "Surya Calya",
    price: "Rp170.200.000",
    segment: "MPV",
    fuel: "Gasoline",
    subtitle: "Practical entry MPV with efficient urban drivability.",
    image: "/images/models/csh/surya-csh-7.png"
  },
  {
    name: "All New Surya Avanza",
    price: "Rp243.700.000",
    segment: "MPV",
    fuel: "Gasoline",
    subtitle: "Clean design and practical flexibility for families.",
    image: "/images/models/bev/surya-j6.png"
  },
  {
    name: "Surya Kijang Innova",
    price: "Rp417.800.000",
    segment: "MPV",
    fuel: "Diesel",
    subtitle: "Strong people mover for premium personal mobility.",
    image: "/images/models/ice/surya-cross-5.png"
  },
  {
    name: "Surya Zenix",
    price: "Rp437.700.000",
    segment: "SUV",
    fuel: "Gasoline",
    subtitle: "Sharper proportions with stronger road presence.",
    image: "/images/models/ice/surya-cross-5.png"
  },
  {
    name: "Surya Zenix Hybrid EV",
    price: "Rp475.400.000",
    segment: "SUV",
    fuel: "Electrified",
    subtitle: "Hybrid SUV with cleaner efficiency and premium ride quality.",
    image: "/images/models/bev/surya-j6.png"
  },
  {
    name: "All New Surya Voxy",
    price: "Rp632.700.000",
    segment: "Commercial",
    fuel: "Gasoline",
    subtitle: "Executive people mover with lounge-inspired comfort.",
    image: "/images/models/csh/surya-csh-7.png"
  }
];

export function ModelsCatalog() {
  const [segment, setSegment] = useState<Segment>("All");
  const [fuel, setFuel] = useState<Fuel>("All");

  const filteredModels = useMemo(() => {
    return models.filter((item) => {
      const segmentMatch = segment === "All" || item.segment === segment;
      const fuelMatch = fuel === "All" || item.fuel === fuel;
      return segmentMatch && fuelMatch;
    });
  }, [fuel, segment]);

  return (
    <section className="models-page-shell">
      <div className="models-page-head">
        <p className="models-page-kicker">OTR Jakarta Price</p>
      </div>

      <div className="models-segment-tabs" aria-label="Kategori kendaraan">
        {segmentTabs.map((tab) => (
          <button
            aria-pressed={segment === tab}
            className={segment === tab ? "is-active" : undefined}
            key={tab}
            onClick={() =>
              startTransition(() => {
                setSegment(tab);
              })
            }
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="models-fuel-tabs" aria-label="Tipe bahan bakar">
        {fuelTabs.map((tab) => (
          <button
            aria-pressed={fuel === tab}
            className={fuel === tab ? "is-active" : undefined}
            key={tab}
            onClick={() =>
              startTransition(() => {
                setFuel(tab);
              })
            }
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="models-grid">
        {filteredModels.map((model) => (
          <article className="catalog-card" key={`${model.segment}-${model.name}`}>
            <div className="catalog-copy">
              <h3>{model.name}</h3>
              <p className="catalog-subtitle">{model.subtitle}</p>
              <p>
                Starting from <strong>{model.price}</strong>
              </p>
              <div className="catalog-tags">
                <span>{model.fuel.toUpperCase()}</span>
                <span>{model.segment.toUpperCase()}</span>
              </div>

              <div className="catalog-actions">
                <a className="catalog-link-primary" href="/#kontak">
                  Test Drive
                </a>
                <Link
                  className="catalog-link-secondary"
                  href={`/models/${modelNameToSlug[model.name] ?? "surya-j6-hybrid-ev"}`}
                >
                  Detail Model
                </Link>
              </div>
            </div>

            <div className="catalog-visual">
              {model.badge ? <span className="catalog-badge">{model.badge}</span> : null}
              <Image alt={model.name} className="catalog-image" height={230} src={model.image} width={360} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
