import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/'
import ListaServicos from './pages/ListaServicos'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

//estização global
import "./Index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Footer/>
  </React.StrictMode>,
)
