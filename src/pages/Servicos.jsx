import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

function Servicos() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [servico, setServico] = useState(null);

  const servicos = [
    { id: 1, nome: "Corte", preco: 30, descricao: "Corte moderno" },
    { id: 2, nome: "Barba", preco: 20, descricao: "Barba completa" },
  ];

  return (
    <div className="container">
      <Card>
        <h1>Serviços</h1>

        {servicos.map((s) => (
          <button key={s.id} onClick={() => setServico(s)}>
            {s.nome} - R$ {s.preco}
          </button>
        ))}
      </Card>

      {servico && (
        <div className="modal">
          <div className="modal-content">
            <h2>{servico.nome}</h2>
            <p>{servico.descricao}</p>

            <button
              onClick={() =>
                navigate("/agendamento", {
                  state: { ...state, servico },
                })
              }
            >
              Continuar
            </button>

            <button onClick={() => setServico(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Servicos;