import { ArrowDown } from "lucide-react";
import doctorPortrait from "@/assets/images/IMG_5031.JPG.jpeg";
import { AppointmentButton } from "@/components/AppointmentButton";

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span /> CUIDADO QUE COLOCA VOCÊ EM MOVIMENTO
          </div>
          <h1>
            Mauro Roberto
            <small className="hero-professional-id">CREFITO 1 — 455966-F</small>
            <span>
              Fisioterapia para
              <br />
              voltar a viver <em>bem.</em>
            </span>
          </h1>
          <p>
            Menos limitações, mais movimento: atendimento individualizado para recuperar seu
            bem-estar, presencialmente ou em domicílio.
          </p>
          <div className="hero-buttons">
            <AppointmentButton label="Quero iniciar meu tratamento" />
          </div>
        </div>
        <div className="hero-portrait-frame">
          <img
            className="hero-portrait"
            src={doctorPortrait}
            alt="Dr. Mauro Roberto"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="hero-bottom container">
        <a href="#dores">
          <ArrowDown size={15} /> SEU PRIMEIRO PASSO COMEÇA AQUI
        </a>
      </div>
    </section>
  );
}
