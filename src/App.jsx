import { Routes, Route } from "react-router-dom";
import Home from "./pagina/Home";
import Login from "./pagina/login";
import Opcion from "./pagina/opcion";
import Team from "./pagina/TeamStack";


export default function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/opcion" element={<Opcion />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}
