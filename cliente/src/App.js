import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN Stack</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios/>} exact/>
          <Route path="/agregarusuario" element={<AgregarUsuario/>}exact/> 
          <Route path="/editarusuario" element={<EditarUsuario/>}exact/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
