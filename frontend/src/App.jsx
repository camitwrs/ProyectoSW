import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
//import LoginPage from './pages/LoginPage.jsx'
import InventarioPage from './pages/InventarioPage.jsx';
//import CajaPage from './pages/CajaPage.jsx'
// import PersonasPage from './pages/PersonasPage.jsx';
// import ReportesPage from './pages/ReportesPage.jsx';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />  
      <div className="flex-grow">
        <Navbar username='nombre_usuario' />

        <InventarioPage />
      </div>
    </div>
  );
}

export default App;
