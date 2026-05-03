// components/site-footer.tsx

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="/#home">
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
          <a href="/dealer">Lihat Lokasi</a>
        </div>

        <div>
          <h3>Model</h3>
          <a href="/models">BEV</a>
          <a href="/models">CSH</a>
          <a href="/models">ICE</a>
        </div>

        <div>
          <h3>Pesan Surya</h3>
          <a href="/dealer">Temukan Dealer</a>
          <a href="/#shop">Program Kredit</a>
          <a href="/#kontak">Test Drive</a>
          <a href="/service">Solusi Service</a>
        </div>

        <div>
          <h3>Kenali Surya</h3>
          <a href="/about">Tentang Kami</a>
          <a href="/service">Layanan Purna Jual</a>
        </div>

        <div>
          <h3>Hubungi Kami</h3>
          <a href="mailto:hello@suryaotomotif.id">hello@suryaotomotif.id</a>
          <a href="/#kontak">Kerjasama Dealer</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Surya Otomotif</p>
        <div>
          <a href="/#kontak">Pemberitahuan Cookie</a>
          <a href="/#kontak">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}