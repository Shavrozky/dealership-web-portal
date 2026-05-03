import { SiteNavbar } from "@/components/site-navbar";
import { ModelsCatalog } from "@/components/models-catalog";
import { SiteFooter } from "@/components/site-footer";

const navItems = [
  { label: "Model", href: "/models" },
  { label: "Shop", href: "/#shop" },
  { label: "Service", href: "/service" },
  { label: "Dealer", href: "/dealer" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/#kontak" }
];

export default function ModelsPage() {
  return (
    <main className="models-layout">
      <SiteNavbar ctaHref="/#kontak" ctaLabel="Test Drive" navItems={navItems} variant="light" />

      <ModelsCatalog />
      <SiteFooter />
    </main>
  );
}





