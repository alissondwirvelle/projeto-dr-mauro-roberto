import { Activity, Bone, House, Plus, Sparkles, Waves, Zap } from "lucide-react";
import { AppointmentButton } from "@/components/AppointmentButton";

const treatments = [
  {
    icon: Activity,
    title: "Fisioterapia convencional",
    text: "Exercícios e técnicas terapêuticas para trabalhar mobilidade, força e função.",
  },
  {
    icon: Bone,
    title: "Quiropraxia",
    text: "Técnicas manuais voltadas ao cuidado das articulações e do movimento.",
  },
  {
    icon: Waves,
    title: "Ventosaterapia",
    text: "Aplicação de ventosas como recurso complementar ao cuidado muscular.",
  },
  {
    icon: Sparkles,
    title: "Liberação miofascial",
    text: "Técnicas manuais para trabalhar tensões dos músculos e da fáscia.",
  },
  {
    icon: Zap,
    title: "Eletroterapia",
    text: "Recursos como TENS e FES, utilizados conforme a avaliação e a necessidade clínica.",
    detail: "TENS E FES",
  },
];

export function Treatments() {
  return (
    <section id="tratamentos" className="section treatment-section">
      <div className="container reveal treatment-content">
        <div className="section-heading centered treatment-heading">
          <span className="eyebrow">MOVIMENTO É QUALIDADE DE VIDA</span>
          <h2>
            Recursos terapêuticos para cuidar do seu{" "}
            <span className="accent-text title-highlight">movimento.</span>
          </h2>
          <p>
            Cada tratamento é definido de acordo com a avaliação profissional e as necessidades de
            cada paciente.
          </p>
        </div>
        <div className="treatment-grid">
          {treatments.map((item, index) => (
            <article className="treatment-card" key={item.title}>
              <div className="treatment-card-top">
                <item.icon strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              {item.detail && <small>{item.detail}</small>}
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="home-treatment">
          <div className="home-treatment-icon" aria-hidden="true">
            <House strokeWidth={1.4} />
            <Plus strokeWidth={1.5} />
          </div>
          <div>
            <span className="eyebrow">O CUIDADO VAI ATÉ VOCÊ</span>
            <h3>Fisioterapia no conforto da sua casa</h3>
            <p>
              Atendimento fisioterapêutico em domicílio, com uma abordagem definida de acordo com
              suas necessidades.
            </p>
          </div>
          <AppointmentButton label="Consultar disponibilidade" quiet />
        </div>
      </div>
    </section>
  );
}
