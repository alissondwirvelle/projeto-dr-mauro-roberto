import mauroPortrait from "@/assets/images/IMG_5034.PNG";
import { AppointmentButton } from "@/components/AppointmentButton";

export function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="container about-grid reveal">
        <figure className="about-image">
          <img
            src={mauroPortrait}
            alt="Mauro Roberto, fisioterapeuta"
            loading="lazy"
          />
        </figure>
        <div className="about-copy">
          <span className="eyebrow">SOBRE MIM</span>
          <h2>Prazer, sou Mauro Roberto.</h2>
          <div className="about-description">
            <p>
              Minha atuação na fisioterapia reúne conhecimentos em quiropraxia clínica e
              reabilitação mecânica funcional, com foco em compreender as limitações e necessidades
              de cada paciente.
            </p>
            <p>
              Também possuo formação em PNF e ventosaterapia. Esses conhecimentos fazem parte dos
              recursos que utilizo para definir uma abordagem de atendimento adequada a cada caso.
            </p>
          </div>
          <AppointmentButton label="Vamos conversar?" />
        </div>
      </div>
    </section>
  );
}
