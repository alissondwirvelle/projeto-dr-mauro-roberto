import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  [
    "Atende por plano de saúde ou emite recibo para reembolso?",
    "Informação a confirmar: os planos atendidos e as condições de emissão de recibo para reembolso serão informados pelo profissional.",
  ],
  [
    "Como funciona a primeira sessão de avaliação?",
    "Conteúdo provisório: a primeira avaliação envolve uma conversa sobre suas queixas e uma avaliação fisioterapêutica para orientar o tratamento. Os detalhes serão confirmados pelo profissional.",
  ],
  [
    "Quantas sessões serão necessárias para o meu caso?",
    "Conteúdo provisório: a quantidade e a frequência das sessões dependem da avaliação individual e da evolução do tratamento. A orientação será confirmada na avaliação.",
  ],
  [
    "É necessário encaminhamento médico?",
    "Informação a confirmar: a necessidade de encaminhamento e de documentos será esclarecida pelo profissional antes do atendimento.",
  ],
  [
    "Como agendar o atendimento domiciliar?",
    "Conteúdo provisório: entre em contato pelo WhatsApp para consultar as regiões atendidas e a disponibilidade. As condições do atendimento serão confirmadas pelo profissional.",
  ],
];

export function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid faq-content reveal">
        <div className="section-heading">
          <span className="eyebrow">TIRE SUAS DÚVIDAS</span>
          <h2>Perguntas Frequentes</h2>
          <p>
            Antes de dar o primeiro passo,
            <br />é natural ter perguntas.
          </p>
          <span className="provisional-note">
            Informações provisórias, sujeitas à confirmação do profissional.
          </span>
        </div>
        <Accordion type="single" collapsible className="faq-list">
          {faqs.map(([question, answer], index) => (
            <AccordionItem value={`question-${index}`} key={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
