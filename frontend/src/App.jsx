import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import LoginPage from './pages/LoginPage.jsx';
import InventarioPage from './pages/InventarioPage.jsx';
import CajaPage from './pages/CajaPage.jsx';
import PersonasPage from './pages/PersonasPage.jsx';
import ReportesPage from './pages/ReportesPage.jsx';

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex-grow">
          <Navbar username='nombre_usuario' />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/inventario" element={<InventarioPage />} />
            <Route path="/caja" element={<CajaPage />} />
            <Route path="/personas" element={<PersonasPage />} />
            <Route path="/reportes" element={<ReportesPage />} />
            <Route path="/" element={<InventarioPage />} /> {/* Ruta por defecto */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
