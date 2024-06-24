import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import PersonasPage from './pages/PersonasPage.jsx'

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />  
      <div className="flex-grow">
        <Navbar username='nombre_usuario' />
        <PersonasPage />
      </div>
    </div>
  );
}

export default App;
