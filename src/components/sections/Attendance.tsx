import { House, MapPin } from "lucide-react";
import { AppointmentButton } from "@/components/AppointmentButton";

export function Attendance() {
  return (
    <section id="atendimento" className="section location-section">
      <div className="container location-content reveal">
        <div className="section-heading split-heading location-heading">
          <div>
            <span className="eyebrow">PERTO DE VOCÊ</span>
            <h2>
              Seu atendimento, da forma que você <strong>precisa</strong>.
            </h2>
          </div>
          <p>Encontre a modalidade que faz sentido para o seu momento.</p>
        </div>
        <div className="location-grid">
          <article className="location-place">
            <div className="presence-image" aria-hidden="true">
              <span className="presence-image-mark">
                <MapPin strokeWidth={1.25} />
              </span>
            </div>
            <div className="location-copy">
              <span className="eyebrow">
                <MapPin size={14} /> NA RESIDÊNCIA DO PROFISSIONAL
              </span>
              <h3>Atendimento presencial</h3>
              <p>
                Um atendimento individualizado, realizado na residência do profissional, com
                atenção às suas necessidades.
              </p>
              <div className="location-detail">
                <MapPin size={17} />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Rua E, nº 40 — Vila da Cohab, Bonito – PE.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o endereço no Google Maps"
                >
                  Rua E, nº 40 — Vila da Cohab, Bonito – PE.
                </a>
              </div>
            </div>
          </article>
          <article className="location-home">
            <House strokeWidth={1} className="large-house" />
            <span className="eyebrow">NO CONFORTO DA SUA CASA</span>
            <h3>
              Atendimento
              <br />
              domiciliar
            </h3>
            <p>
              O cuidado fisioterapêutico vai até sua residência, respeitando suas necessidades e
              sua rotina.
            </p>
            <div className="location-detail">
              <MapPin size={17} />
              <span>
                Regiões atendidas: Bonito, Barra de Guabiraba, Camocim de São Félix e São Joaquim.
              </span>
            </div>
            <AppointmentButton label="Consultar disponibilidade" />
          </article>
        </div>
      </div>
    </section>
  );
}
