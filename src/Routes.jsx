import { BrowserRouter, Routes, Route } from "react-router-dom";

import Unidades from "./pages/Unidades";
import Profissionais from "./pages/Profissional";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unidades />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </BrowserRouter>
  );
}