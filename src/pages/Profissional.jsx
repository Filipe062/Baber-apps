import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

function Profissional() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {}; // 🔥 Cn

  const [prof, setProf] = useState(null);

  const profissionais = [
    { id: 1, nome: "Thaliton", especialidade: "Cortes modernos" },
    { id: 2, nome: "João", especialidade: "Barba e navalha" },
  ];

  return (
    <div className="container">
      <Card>
        <h1>Profissionais</h1>

        {profissionais.map((p) => (
          <button key={p.id} onClick={() => setProf(p)}>
            {p.nome}
          </button>
        ))}
      </Card>

      {prof && (
        <div className="modal">
          <div className="modal-content">
            <h2>{prof.nome}</h2>
            <p>{prof.especialidade}</p>

            <button
              onClick={() =>
                navigate("/servicos", {
                  state: { ...state, profissional: prof },
                })
              }
            >
              Continuar
            </button>

            <button onClick={() => setProf(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profissionais;