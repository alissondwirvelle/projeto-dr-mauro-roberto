import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import footerLogo from "@/assets/images/logo-2.png";

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`brand ${inverted ? "brand-inverse" : ""}`}
      aria-label="Mauro Roberto — início"
    >
      {inverted ? (
        <img
          src={footerLogo}
          alt="Mauro Roberto"
          className="footer-logo"
        />
      ) : (
        <>
          <span className="brand-symbol">
            m<span>r</span>
            <i />
          </span>
          <span className="brand-copy">
            Mauro Roberto<small>FISIOTERAPEUTA</small>
          </span>
        </>
      )}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand inverted />
        <div className="footer-actions">
          <Button
            variant="quiet"
            size="icon"
            aria-label="Instagram do profissional"
            title="Instagram"
            asChild
          >
            <a
              href="https://www.instagram.com/dr.maurorobertofisio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </Button>
        </div>
      </div>
      <div className="container footer-bottom">
        <span className="footer-copyright">© 2026 Mauro Roberto. Todos os direitos reservados.</span>
        <span className="footer-signature">
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/averoestudiodigital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avero Estúdio Digital
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
