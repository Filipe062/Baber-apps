import { useLocation } from "react-router-dom";
import Card from "../components/Card";

function Agendamento() {
  const { state } = useLocation();

  return (
    <div className="container">
      <Card>
        <h1>Agendamento</h1>

        <div className="info">
          <p><strong>Unidade:</strong> {state?.unidade?.nome}</p>
          <p><strong>Serviço:</strong> {state?.servico?.nome}</p>
        </div>

        <input type="date" />
        <input type="time" />

        <button>Confirmar Agendamento</button>
      </Card>
    </div>
  );

  <button
  onClick={() => {
    const mensagem = `Olá, gostaria de agendar um horário:
    
Unidade: ${state?.unidade?.nome}
Serviço: ${state?.servico?.nome}`;

    window.open(`https://wa.me/5564999999999?text=${encodeURIComponent(mensagem)}`);
  }}
>
  Confirmar pelo WhatsApp
</button>
}

export default Agendamento;