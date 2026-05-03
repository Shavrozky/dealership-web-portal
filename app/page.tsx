import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";
import { ModelShowcase } from "@/components/model-showcase";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "#shop" },
  { label: "Service", href: "/service" },
  { label: "Dealer", href: "#dealer" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" }
];

const specialtyCards = [
  {
    title: "Battery Electric Vehicle (BEV)",
    copy: "Model listrik premium dengan desain boxy modern, akselerasi instan, dan pengalaman berkendara yang senyap.",
    image: "/images/specialty/bev-card.png"
  },
  {
    title: "Surya Super Hybrid",
    copy: "Teknologi hybrid untuk efisiensi harian, transisi tenaga yang halus, dan kabin yang tetap berkelas.",
    image: "/images/specialty/csh-card.png"
  },
  {
    title: "Internal Combustion Engine",
    copy: "Rangkaian model bensin dengan karakter kuat untuk perjalanan keluarga, bisnis, dan rute jarak jauh.",
    image: "/images/specialty/ice-card.png"
  }
];

const services = [
  "Booking service online dan pengingat servis berkala.",
  "Garansi kendaraan hingga 5 tahun dengan dukungan teknisi tersertifikasi.",
  "Roadside assistance dan customer support 24/7 untuk kondisi darurat.",
  "Spare part asli melalui jaringan dealer resmi Surya Otomotif."
];

const dealers = [
  "Jakarta - Surya Otomotif Sudirman",
  "Bandung - Surya Otomotif Dago",
  "Surabaya - Surya Otomotif Mayjen",
  "Balikpapan - Surya Otomotif Sepinggan"
];

export default function Home() {
  return (
    <main className="site-shell">
      <HeroCarousel navItems={navItems} />

      <ModelShowcase />

      <section className="specialty" id="shop">
        <div className="section-head">
          <p className="section-kicker">Shop</p>
          <h2 className="section-title">SURYA SPECIALTY</h2>
          <p className="section-copy">
            Tiga pendekatan mobilitas yang dirancang untuk kebutuhan berbeda, namun tetap hadir dengan bahasa desain Surya Otomotif yang konsisten.
          </p>
        </div>

        <div className="specialty-grid">
          {specialtyCards.map((card) => (
            <article className="specialty-card" key={card.title}>
              <Image alt={card.title} className="specialty-image" fill sizes="(max-width: 1100px) 100vw, 33vw" src={card.image} />
              <div className="specialty-overlay" />
              <div className="specialty-content">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <div className="specialty-actions">
                  <a className="white-pill" href="#kontak">
                    Test Drive
                  </a>
                  <a className="outline-pill" href="#tentang">
                    Lihat Detail
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="info-band" id="service">
        <div className="info-block">
          <p className="info-kicker">Service</p>
          <h2>Layanan purna jual yang rapi, cepat, dan siap mendampingi perjalanan jangka panjang.</h2>
          <ul>
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-block" id="dealer">
          <p className="info-kicker">Dealer</p>
          <h2>Jaringan dealer Surya Otomotif hadir untuk penjualan, konsultasi, dan servis resmi.</h2>
          <ul>
            {dealers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-contact-band">
        <article className="plain-card" id="tentang">
          <p className="info-kicker">Tentang</p>
          <h2>Surya Otomotif adalah brand kendaraan modern dengan pendekatan desain bersih dan pengalaman premium.</h2>
          <p>
            Fokus kami adalah menghadirkan model yang relevan untuk pasar Indonesia, didukung layanan dealer,
            pembiayaan, dan servis yang lebih sederhana untuk diakses.
          </p>
        </article>

        <article className="plain-card" id="kontak">
          <p className="info-kicker">Kontak</p>
          <h2>Hubungi tim Surya Otomotif untuk test drive, pembelian, dan konsultasi dealer terdekat.</h2>
          <div className="contact-list">
            <p>0800-1777-8899</p>
            <p>hello@suryaotomotif.id</p>
            <p>Jl. Jenderal Sudirman No. 71, Jakarta Selatan</p>
          </div>
        </article>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="footer-brand" href="#home">
            <span className="brand-icon dark" />
            <span>Surya Otomotif</span>
          </a>
          <a className="footer-phone" href="tel:080017778899">
            0800-1777-8899
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <h3>Kantor Pusat</h3>
            <p>Jl. Jenderal Sudirman No.71, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190</p>
            <a href="#dealer">Lihat Lokasi</a>
          </div>

          <div>
            <h3>Model</h3>
            <a href="/models">BEV</a>
            <a href="/models">CSH</a>
            <a href="/models">ICE</a>
          </div>

          <div>
            <h3>Pesan Surya</h3>
            <a href="#dealer">Temukan Dealer</a>
            <a href="#shop">Program Kredit</a>
            <a href="#kontak">Test Drive</a>
            <a href="#service">Solusi Service</a>
          </div>

          <div>
            <h3>Kenali Surya</h3>
            <a href="#tentang">Tentang Kami</a>
            <a href="#service">Layanan Purna Jual</a>
          </div>

          <div>
            <h3>Hubungi Kami</h3>
            <a href="mailto:hello@suryaotomotif.id">hello@suryaotomotif.id</a>
            <a href="#kontak">Kerjasama Dealer</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Surya Otomotif</p>
          <div>
            <a href="#kontak">Pemberitahuan Cookie</a>
            <a href="#kontak">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
