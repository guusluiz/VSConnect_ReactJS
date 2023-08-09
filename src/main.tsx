import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/'
import ListaServicos from './pages/ListaServicos'

//estização global
import "./Index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home /> */}
    <ListaServicos />
  </React.StrictMode>,
)
