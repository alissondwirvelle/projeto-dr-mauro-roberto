import { MapPin, MessageCircle } from "lucide-react";
import { AppointmentButton } from "@/components/AppointmentButton";
import { clinicAddress, clinicMapsUrl, whatsappDisplay, whatsappUrl } from "@/lib/contact";

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-content reveal">
        <span className="eyebrow">VAMOS CONVERSAR</span>
        <h2>Seu cuidado pode começar hoje.</h2>
        <p>
          Conheça as possibilidades de atendimento e encontre o caminho mais adequado às suas
          necessidades.
        </p>
        <AppointmentButton label="Agendar pelo WhatsApp" />
        <div className="contact-details">
          <div>
            <MessageCircle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar pelo WhatsApp"
            >
              <span className="contact-detail-label">
                <span className="contact-detail-label-desktop">TELEFONE / WHATSAPP</span>
                <span className="contact-detail-label-mobile">WHATSAPP</span>
              </span>
              <small>{whatsappDisplay}</small>
            </a>
          </div>
          <div>
            <MapPin />
            <span>
              <span className="contact-detail-label">ENDEREÇO</span>
              <a
                href={clinicMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o endereço no Google Maps"
              >
                <small>{clinicAddress}</small>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
