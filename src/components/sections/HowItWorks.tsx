import { useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck } from "lucide-react";
import { AppointmentButton } from "@/components/AppointmentButton";

const processSteps = [
  {
    icon: MessageCircle,
    title: "Entre em contato",
    text: "Envie uma mensagem pelo WhatsApp e conte o que está sentindo.",
  },
  {
    icon: CalendarDays,
    title: "Agende sua avaliação",
    text: "Combine um horário para sua avaliação, de acordo com sua disponibilidade e a agenda de atendimento.",
  },
  {
    icon: ShieldCheck,
    title: "Inicie seu acompanhamento",
    text: "A partir da avaliação, serão definidos os próximos passos e a abordagem mais adequada às suas necessidades.",
  },
] as const;

export function HowItWorks() {
  const [processStepIndex, setProcessStepIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);

  return (
    <section id="como-funciona" className="section process-section">
      <div className="container reveal process-content">
        <div className="section-heading centered">
          <span className="eyebrow">UM PASSO DE CADA VEZ</span>
          <h2>
            Do primeiro contato ao início do seu <strong>cuidado</strong>.
          </h2>
          <p>
            Tudo começa com uma conversa para entender suas necessidades e orientar os próximos
            passos.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((item, index) => (
            <article className="process-step" key={item.title}>
              <div className="step-top">
                <span>0{index + 1}</span>
                <item.icon strokeWidth={1.5} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div
          className="process-carousel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Etapas do atendimento"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" && processStepIndex > 0) {
              event.preventDefault();
              setProcessStepIndex((current) => current - 1);
            }
            if (event.key === "ArrowRight" && processStepIndex < processSteps.length - 1) {
              event.preventDefault();
              setProcessStepIndex((current) => current + 1);
            }
          }}
        >
          <div
            className="process-carousel-viewport"
            onTouchStart={(event) => {
              swipeStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (swipeStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX;
              if (endX === undefined) return;
              const distance = endX - swipeStartX.current;
              if (Math.abs(distance) >= 45) {
                setProcessStepIndex((current) =>
                  distance < 0
                    ? Math.min(current + 1, processSteps.length - 1)
                    : Math.max(current - 1, 0),
                );
              }
              swipeStartX.current = null;
            }}
          >
            <div
              className="process-carousel-track"
              style={{ transform: `translateX(-${processStepIndex * 100}%)` }}
            >
              {processSteps.map((item, index) => (
                <article
                  className="process-step process-carousel-step"
                  key={item.title}
                  aria-hidden={processStepIndex !== index}
                  aria-label={`Etapa ${index + 1} de ${processSteps.length}`}
                >
                  <div className="step-top">
                    <span>0{index + 1}</span>
                    <item.icon strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <button
              type="button"
              className="process-carousel-arrow process-carousel-arrow-prev"
              aria-label="Ver etapa anterior"
              disabled={processStepIndex === 0}
              onClick={() =>
                setProcessStepIndex((current) => Math.max(current - 1, 0))
              }
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="process-carousel-arrow process-carousel-arrow-next"
              aria-label="Ver próxima etapa"
              disabled={processStepIndex === processSteps.length - 1}
              onClick={() =>
                setProcessStepIndex((current) =>
                  Math.min(current + 1, processSteps.length - 1),
                )
              }
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
          <div className="process-carousel-indicators" aria-label="Selecionar etapa">
            {processSteps.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={processStepIndex === index ? "is-active" : ""}
                aria-label={`Ir para etapa ${index + 1}: ${item.title}`}
                aria-current={processStepIndex === index ? "true" : undefined}
                onClick={() => setProcessStepIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="section-action">
          <AppointmentButton label="Conversar pelo WhatsApp" />
        </div>
      </div>
    </section>
  );
}
