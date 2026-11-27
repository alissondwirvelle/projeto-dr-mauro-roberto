import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, UserRound } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "[Espaço reservado para um depoimento real, publicado após confirmação e autorização do paciente.]",
    name: "[Nome do paciente]",
    caption: "Depoimento a inserir",
  },
  {
    id: 2,
    quote: "[Espaço reservado para um depoimento real, publicado após confirmação e autorização do paciente.]",
    name: "[Nome do paciente]",
    caption: "Depoimento a inserir",
  },
  {
    id: 3,
    quote: "[Espaço reservado para um depoimento real, publicado após confirmação e autorização do paciente.]",
    name: "[Nome do paciente]",
    caption: "Depoimento a inserir",
  },
] as const;

export function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialSwipeStartX = useRef<number | null>(null);

  return (
    <section id="depoimentos" className="section testimonial-section">
      <div className="container testimonial-content reveal">
        <div className="section-heading centered">
          <span className="eyebrow">CADA JORNADA IMPORTA</span>
          <h2>
            O que os <strong>pacientes</strong> dizem
          </h2>
          <p>
            Cada experiência é única. O cuidado começa com atenção, escuta e respeito às
            necessidades de cada pessoa.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <Quote strokeWidth={1.4} />
              <p>{testimonial.quote}</p>
              <div>
                <span className="patient-avatar">
                  <UserRound size={19} />
                </span>
                <span>
                  {testimonial.name}<small>{testimonial.caption}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
        <div
          className="testimonial-carousel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" && testimonialIndex > 0) {
              event.preventDefault();
              setTestimonialIndex((current) => current - 1);
            }
            if (event.key === "ArrowRight" && testimonialIndex < 2) {
              event.preventDefault();
              setTestimonialIndex((current) => current + 1);
            }
          }}
        >
          <div
            className="testimonial-carousel-viewport"
            onTouchStart={(event) => {
              testimonialSwipeStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (testimonialSwipeStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX;
              if (endX === undefined) return;
              const distance = endX - testimonialSwipeStartX.current;
              if (Math.abs(distance) >= 45) {
                setTestimonialIndex((current) =>
                  distance < 0
                    ? Math.min(current + 1, 2)
                    : Math.max(current - 1, 0),
                );
              }
              testimonialSwipeStartX.current = null;
            }}
          >
            <div
              className="testimonial-carousel-track"
              style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <article
                  className="testimonial-card testimonial-carousel-card"
                  key={testimonial.id}
                  aria-hidden={testimonialIndex !== index}
                  aria-label={`Depoimento ${index + 1} de 3`}
                >
                  <Quote strokeWidth={1.4} />
                  <p>{testimonial.quote}</p>
                  <div>
                    <span className="patient-avatar">
                      <UserRound size={19} />
                    </span>
                    <span>
                      {testimonial.name}<small>{testimonial.caption}</small>
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <button
              type="button"
              className="testimonial-carousel-arrow testimonial-carousel-arrow-prev"
              aria-label="Ver depoimento anterior"
              disabled={testimonialIndex === 0}
              onClick={() =>
                setTestimonialIndex((current) => Math.max(current - 1, 0))
              }
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="testimonial-carousel-arrow testimonial-carousel-arrow-next"
              aria-label="Ver próximo depoimento"
              disabled={testimonialIndex === 2}
              onClick={() =>
                setTestimonialIndex((current) => Math.min(current + 1, 2))
              }
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
          <div className="testimonial-carousel-indicators" aria-label="Selecionar depoimento">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.id}
                className={testimonialIndex === index ? "is-active" : ""}
                aria-label={`Ir para o depoimento ${index + 1}`}
                aria-current={testimonialIndex === index ? "true" : undefined}
                onClick={() => setTestimonialIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
