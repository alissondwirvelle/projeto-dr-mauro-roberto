import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Bone,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  HeartHandshake,
  House,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserRound,
  Waves,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import hero from "@/assets/physio-hero.asset.json";
import room from "@/assets/physio-room.asset.json";
import doctorPortrait from "@/assets/images/IMG_6259-1.jpeg";
import headerLogo from "@/assets/images/logo-3d.png";
import { whatsappDisplay, whatsappUrl } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauro Roberto | Fisioterapia e qualidade de vida" },
      {
        name: "description",
        content:
          "Conheça os tratamentos de fisioterapia de Mauro Roberto, com atendimento presencial e domiciliar. Dê o primeiro passo para recuperar seu bem-estar.",
      },
      { property: "og:title", content: "Mauro Roberto | Fisioterapia e qualidade de vida" },
      {
        property: "og:description",
        content:
          "Fisioterapia, movimento e cuidado individualizado. Conheça os tratamentos e as modalidades de atendimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  ["Início", "inicio"],
  ["Soluções", "tratamentos"],
  ["Sobre mim", "sobre"],
  ["Como funciona", "como-funciona"],
  ["Depoimentos", "depoimentos"],
  ["Contato", "contato"],
] as const;
const pains = [
  {
    icon: Activity,
    title: "Coluna e lombar",
    text: "Desconforto nas costas que limita seus movimentos e sua rotina.",
  },
  {
    icon: Bone,
    title: "Articulações",
    text: "Dores nos joelhos, ombros ou outras articulações ao se movimentar.",
  },
  {
    icon: HeartHandshake,
    title: "Pós-operatório / lesão",
    text: "Dificuldade para retomar seus movimentos após uma cirurgia ou lesão.",
  },
  {
    icon: ScanLine,
    title: "Tensão postural",
    text: "Rigidez e tensão muscular depois de um longo dia de trabalho.",
  },
];
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

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`brand ${inverted ? "brand-inverse" : ""}`}
      aria-label="Mauro Roberto — início"
    >
      <span className="brand-symbol">
        m<span>r</span>
        <i />
      </span>
      <span className="brand-copy">
        Mauro Roberto<small>FISIOTERAPEUTA</small>
      </span>
    </a>
  );
}

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

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
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
  const appointment = (label = "Agendar avaliação", quiet = false, headerButton = false) => (
    <Button
      variant={quiet ? "quiet" : "appointment"}
      asChild
      style={headerButton ? { animationDelay: "980ms" } : undefined}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
  return (
    <>
      <header className={`site-header${headerScrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <HeaderBrand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map(([label, id], index) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${activeSection === id ? "is-active " : ""}header-sequence-${index + 1}`}
                aria-current={activeSection === id ? "page" : undefined}
                style={{
                  animationDelay: `${120 + index * 150}ms`,
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            {appointment("Agendar avaliação", false, true)}
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
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <ChevronRight size={16} />
            </a>
          ))}
        </nav>
      </header>
      <main>
        <section id="inicio" className="hero-section">
          <div className="container hero-layout">
            <div className="hero-content">
              <div className="eyebrow hero-eyebrow">
                <span /> CUIDADO QUE COLOCA VOCÊ EM MOVIMENTO
              </div>
              <h1>
                Mauro Roberto
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
                {appointment("Quero iniciar meu tratamento")}
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

        <section id="dores" className="section pain-section">
          <div className="container reveal">
            <div className="section-heading centered">
              <span className="eyebrow">ESCUTE O SEU CORPO</span>
              <h2>
                Você convive com alguma dessas
                <br className="desktop-break" /> dores no seu dia a dia?
              </h2>
              <p>O desconforto não precisa fazer parte da sua rotina.</p>
            </div>
            <div className="pain-grid">
              {pains.map((item) => (
                <article className="pain-card" key={item.title}>
                  <item.icon strokeWidth={1.3} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="section-action">
              {appointment()}
              <span>O primeiro passo é entender o que você precisa.</span>
            </div>
          </div>
        </section>

        <section id="tratamentos" className="section treatment-section">
          <div className="container reveal">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">MOVIMENTO É QUALIDADE DE VIDA</span>
                <h2>
                  Cuidado pensado
                  <br />
                  para <span className="accent-text">você.</span>
                </h2>
              </div>
              <p>
                Diferentes recursos, um mesmo propósito: cuidar
                <br className="desktop-break" /> do seu movimento. O tratamento é orientado
                <br className="desktop-break" /> pela avaliação de cada caso.
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
                  <a href="#contato" aria-label={`Consultar atendimento de ${item.title}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </article>
              ))}
            </div>
            <div className="home-treatment">
              <div className="home-treatment-icon">
                <House strokeWidth={1.4} />
              </div>
              <div>
                <span className="eyebrow">O CUIDADO VAI ATÉ VOCÊ</span>
                <h3>Atendimento domiciliar</h3>
                <p>
                  Reabilitação no conforto de casa para recuperação de fraturas, AVC
                  <br className="desktop-break" /> e outras necessidades, conforme avaliação
                  individual.
                </p>
              </div>
              {appointment("Consultar disponibilidade", true)}
            </div>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="container about-grid reveal">
            <figure className="about-image">
              <img
                src={hero.url}
                alt="Imagem ilustrativa de cuidado fisioterapêutico, a substituir pela foto do profissional"
                loading="lazy"
              />
              <figcaption>
                <span>
                  <HeartHandshake size={20} /> Cuidado humano. Movimento com propósito.
                </span>
                <small>Imagem ilustrativa · foto do profissional a inserir</small>
              </figcaption>
            </figure>
            <div className="about-copy">
              <span className="eyebrow">SOBRE O ESPECIALISTA</span>
              <h2>
                Por trás de cada movimento,
                <br />
                um cuidado <span className="accent-text">de verdade.</span>
              </h2>
              <h3>[Nome do profissional]</h3>
              <p className="pending-bio">
                [Apresentação do profissional a inserir. Este espaço receberá a biografia, a
                formação e as informações profissionais após confirmação.]
              </p>
              <div className="about-values">
                <span>
                  <Check /> Escuta e atenção às suas necessidades
                </span>
                <span>
                  <Check /> Orientação a partir da avaliação individual
                </span>
                <span>
                  <Check /> Cuidado com seu movimento e bem-estar
                </span>
              </div>
              {appointment()}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section process-section">
          <div className="container reveal">
            <div className="section-heading centered">
              <span className="eyebrow">UM PASSO DE CADA VEZ</span>
              <h2>Seu caminho para se sentir melhor.</h2>
              <p>Começa com uma conversa. Continua com um cuidado feito para você.</p>
            </div>
            <div className="process-grid">
              {[
                {
                  icon: MessageCircle,
                  title: "Entre em contato",
                  text: "Envie uma mensagem pelo WhatsApp e conte o que está sentindo.",
                },
                {
                  icon: CalendarDays,
                  title: "Agende sua avaliação",
                  text: "Converse sobre suas necessidades e consulte um horário para seu atendimento.",
                },
                {
                  icon: ShieldCheck,
                  title: "Receba seu cuidado",
                  text: "Faça a avaliação fisioterapêutica e receba orientações sobre o tratamento.",
                },
              ].map((item, index) => (
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
            <div className="section-action">{appointment("Conversar pelo WhatsApp")}</div>
          </div>
        </section>

        <section id="atendimento" className="section location-section">
          <div className="container reveal">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">PERTO DE VOCÊ</span>
                <h2>O cuidado, onde você precisa.</h2>
              </div>
              <p>
                Encontre a modalidade que faz sentido
                <br className="desktop-break" /> para o seu momento.
              </p>
            </div>
            <div className="location-grid">
              <article className="location-place">
                <div className="room-image">
                  <img
                    src={room.url}
                    alt="Imagem ilustrativa de uma sala de fisioterapia com maca e iluminação natural"
                    loading="lazy"
                  />
                  <small>Imagem ilustrativa</small>
                </div>
                <div className="location-copy">
                  <span className="eyebrow">
                    <MapPin size={14} /> NO CONSULTÓRIO
                  </span>
                  <h3>Atendimento presencial</h3>
                  <p>Um espaço dedicado à sua avaliação e ao seu cuidado.</p>
                  <div className="location-detail">
                    <MapPin size={17} />
                    <span>[Endereço do espaço de atendimento]</span>
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
                  <span>[Regiões atendidas a confirmar]</span>
                </div>
                {appointment("Consultar atendimento domiciliar")}
              </article>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="section testimonial-section">
          <div className="container reveal">
            <div className="section-heading centered">
              <span className="eyebrow">CADA JORNADA IMPORTA</span>
              <h2>O que os pacientes dizem</h2>
              <p>Experiências e relatos de quem passou pelo atendimento fisioterapêutico.</p>
            </div>
            <div className="testimonial-grid">
              {[1, 2, 3].map((number) => (
                <article className="testimonial-card" key={number}>
                  <Quote strokeWidth={1.4} />
                  <p>
                    [Espaço reservado para um depoimento real, publicado após confirmação e
                    autorização do paciente.]
                  </p>
                  <div>
                    <span className="patient-avatar">
                      <UserRound size={19} />
                    </span>
                    <span>
                      [Nome do paciente]<small>Depoimento a inserir</small>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-grid reveal">
            <div className="section-heading">
              <span className="eyebrow">PODEMOS ESCLARECER</span>
              <h2>
                Suas dúvidas.
                <br />
                Mais tranquilidade.
              </h2>
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

        <section id="contato" className="contact-section">
          <div className="container reveal">
            <span className="eyebrow">SEU BEM-ESTAR MERECE ATENÇÃO</span>
            <h2>
              Pronto para reconquistar seu bem-estar
              <br className="desktop-break" /> e viver <span>sem dores?</span>
            </h2>
            <p>
              Vamos conversar sobre o que você precisa.
              <br />
              Dê o primeiro passo para cuidar de você.
            </p>
            {appointment("Falar pelo WhatsApp")}
            <div className="contact-details">
              <div>
                <MessageCircle />
                <span>
                  TELEFONE / WHATSAPP<small>{whatsappDisplay}</small>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  DISPONIBILIDADE<small>[Horários a confirmar]</small>
                </span>
              </div>
              <div>
                <MapPin />
                <span>
                  ENDEREÇO<small>[Endereço a informar]</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-top">
          <Brand inverted />
          <div className="footer-actions">
            <Button
              variant="quiet"
              size="icon"
              aria-label="Instagram do profissional"
              title="Instagram"
              onClick={() => setSocialOpen(true)}
            >
              <Instagram />
            </Button>
            {appointment("Entrar em contato", true)}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Mauro Roberto. Todos os direitos reservados.</span>
          <span>Fisioterapia · Movimento · Bem-estar</span>
        </div>
      </footer>
      <Button variant="appointment" className="floating-contact" size="icon" asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato pelo WhatsApp"
          title="Falar pelo WhatsApp"
        >
          <MessageCircle />
        </a>
      </Button>
      <Dialog open={socialOpen} onOpenChange={setSocialOpen}>
        <DialogContent className="contact-dialog">
          <DialogHeader>
            <DialogTitle>Instagram de Mauro Roberto</DialogTitle>
            <DialogDescription>
              [Perfil oficial a informar após confirmação do profissional.]
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
