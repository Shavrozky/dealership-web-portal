import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type SiteNavbarProps = {
  navItems: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  homeHref?: string;
  variant?: "overlay" | "light";
};

export function SiteNavbar({
  navItems,
  ctaHref,
  ctaLabel,
  homeHref = "/",
  variant = "overlay"
}: SiteNavbarProps) {
  return (
    <header className={variant === "light" ? "topbar topbar-light" : "topbar"}>
      <Link className={variant === "light" ? "brandmark brandmark-light" : "brandmark"} href={homeHref}>
        <span className={variant === "light" ? "brand-icon dark" : "brand-icon"} />
        <span>Surya Otomotif</span>
      </Link>

      <nav className={variant === "light" ? "topnav topnav-light" : "topnav"} aria-label="Navigasi utama">
        {navItems.map((item) => (
          <Link href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className={variant === "light" ? "nav-cta nav-cta-light" : "nav-cta"} href={ctaHref}>
        {ctaLabel}
      </Link>
    </header>
  );
}
