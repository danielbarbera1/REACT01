import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Flooter from "./Components/Flooter";
import Navbar from "./Components/Navbar";
import Inicio from "./pages/Inicio";
import AcercaDe from "./Pages/AcercaDe";
import Contacto from "./Pages/Contacto";
import Servicios from "./Pages/Servicios";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/acerdade" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Flooter />
      </div>
    </Router>
  );
}

// Componente para página no encontrada
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600">Página no encontrada</p>
        <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}

export default App;
