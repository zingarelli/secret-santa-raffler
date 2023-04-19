import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Sorteio from "./paginas/Sorteio";
import TemplatePagina from "./componentes/TemplatePagina";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplatePagina />} >
          <Route index element={<Home />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
