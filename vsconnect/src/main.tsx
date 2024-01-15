import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
import Home from "./pages/Home"
import ListaServicos from "./pages/ListaServicos"
import ListaDevs from "./pages/ListaDevs"
import Header from "./components/Header"
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'
import Login from './pages/Login'

//CSS
import "./index.css"

//Biblioteca
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lista/servicos' element={<ListaServicos />} />
        <Route path='/lista/devs' element={<ListaDevs />} />
        <Route path='/perfil/:idUsuario' element={<PerfilUsuario />}/>
        <Route path='/servico/:idServico' element={<VisualizarServico />}/>
        <Route path='/cadastrar/usuario' element={<CadastroUsuario />}/>
        <Route path='/cadastrar/servico' element={<CadastroServico />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
