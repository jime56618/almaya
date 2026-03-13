import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pagina/Home";
import Login from "./pagina/login";
import Opcion from "./pagina/opcion";
import Team from "./pagina/TeamStack";
import SobreNosotros from "./pagina/SobreNosotros";
import Armeda from "./pagina/Armeda";
import ViaSerena from "./pagina/ViaSerena";
import Coralta from "./pagina/Coralta";
import Kunku from "./pagina/Kunku";
import Montebello from "./pagina/Montebello";
import Footer from "./pagina/Footer";
import Privacidad from "./pagina/Privacidad";
import Terminos from "./pagina/Terminos";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/opcion" element={<Opcion />} />
        <Route path="/team" element={<Team />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/armeda" element={<Armeda />} />
        <Route path="/via-serena" element={<ViaSerena />} />
        <Route path="/coralta" element={<Coralta />} />
        <Route path="/kunku" element={<Kunku />} />
        <Route path="/montebello" element={<Montebello />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>

      <Footer />
    </>
  );
}
