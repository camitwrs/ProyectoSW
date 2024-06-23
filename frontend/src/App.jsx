import Navbar from './components/Navbar.jsx'
import CajaPage from './pages/CajaPage.jsx';
import Sidebar from './components/Sidebar.jsx';

function App(){
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>  
      <div className="flex-grow">
        <Navbar username='nombre_usuario'/>
        <CajaPage />
      </div>
    </div>
  );
}

  







export default App;