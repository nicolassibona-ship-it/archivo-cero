import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Casos from "./pages/Casos";
import Equipo from "./pages/Equipo";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;