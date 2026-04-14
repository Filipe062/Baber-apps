import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import Card from "../components/Card";
import Footer from "../components/Foder";

function Unidades() {
  const navigate = useNavigate();

  const unidades = [
    { id: 1, nome: "Centro" },
    { id: 2, nome: "Shopping" },
  ];

  return (
    <>
      <div className="container">
        <img src={logo} className="logo" />

        <h1 className="titulo">Barbearia Thaliton</h1>

        <Card>
          <p className="subtitulo">Escolha a unidade</p>

          {unidades.map((u) => (
            <button
              key={u.id}
              onClick={() =>
                navigate("/profissionais", { state: { unidade: u } })
              }
            >
              {u.nome}
            </button>
          ))}
        </Card>
      </div>

      <Footer />
    </>
  );
}

export default Unidades;