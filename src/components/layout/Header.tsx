import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentButton } from "@/components/AppointmentButton";
import headerLogo from "@/assets/images/logo-3d.png";

const navigation = [
  ["Início", "inicio"],
  ["Soluções", "tratamentos"],
  ["Sobre mim", "sobre"],
  ["Como funciona", "como-funciona"],
  ["Depoimentos", "depoimentos"],
  ["Contato", "contato"],
] as const;

function HeaderBrand() {
  return (
    <a
      href="#inicio"
      className="header-brand"
      aria-label="Mauro Roberto — voltar ao início"
    >
      <img
        src={headerLogo}
        alt="Mauro Roberto"
        className="header-logo"
      />
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setHeaderScrolled(window.scrollY > 24);

      let current = "inicio";
      navigation.forEach(([, id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 150) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header${headerScrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <HeaderBrand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, id], index) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${activeSection === id ? "is-active " : ""}header-sequence-${index + 1}`}
              aria-current={activeSection === id ? "location" : undefined}
              style={{
                animationDelay: `${120 + index * 150}ms`,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <AppointmentButton label="Agendar avaliação" headerButton />
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Navegação no celular"
      >
        {navigation.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "is-active" : undefined}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
            <ChevronRight size={16} />
          </a>
        ))}
      </nav>
    </header>
  );
}
