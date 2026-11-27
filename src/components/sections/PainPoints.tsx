import { Activity, Bone, HeartHandshake, ScanLine } from "lucide-react";
import { AppointmentButton } from "@/components/AppointmentButton";

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

export function PainPoints() {
  return (
    <section id="dores" className="section pain-section">
      <div className="container reveal pain-content">
        <div className="section-heading centered pain-heading">
          <span className="eyebrow">ESCUTE O SEU CORPO</span>
          <h2>
            Quando a <span className="accent-text title-highlight">dor</span> limita seus
            movimentos, é hora de olhar para sua{" "}
            <span className="accent-text title-highlight">saúde</span>.
          </h2>
          <p>
            Cada caso é diferente. Conte o que está sentindo e converse sobre possibilidades de
            cuidado.
          </p>
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
          <AppointmentButton label="Quero entender minhas opções" />
          <span>O primeiro passo é entender o que você precisa.</span>
        </div>
      </div>
    </section>
  );
}
