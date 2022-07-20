import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//------------------------------------------------IMPORTS VIEWS-----------------------------------------------
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";
import Pedidos from "./Views/Pedidos";
import Vendas from "./Views/Vendas";
import Orcamentos from "./Views/Orcamentos";
import Cores from"./Views/Cores";
import DefinicoesConta from "./Views/DefinicoesConta";
import Tickets from "./Views/Tickets";
import Tickets2 from "./Views/Tickets2";
import RecuperarPassword from "./Views/RecuperarPassword";
import Pedidos2 from "./Views/Pedidos2";
import Pedidos3 from "./Views/Pedidos3";
import Vendas2 from "./Views/Vendas2";
import Notificacoes from"./Views/Notificacoes";
import Orcamentos2 from "./Views/Orcamentos2";
import Pacotes from "./Views/Pacotes";
import Pacotes2 from "./Views/Pacotes2";
import PopupEditPacote from "./Views/Componentes/PopupEditPacote";
import TicketsAtualizado from "./Views/TicketsAtualizado";
import PopupGerarFatura from "./Views/PopupGerarFatura";
import PopupAdicionarCategoria from "./Views/PopupAdicionarCategoria";

//import React, { useState} from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/pedidos" element={<Pedidos />} />
        <Route exact path="/vendas" element={<Vendas />} />
        <Route exact path="/vendas2" element={<Vendas2 />} />
        <Route exact path="/orcamentos" element={<Orcamentos />} />
        <Route exact path="/cores" element={<Cores />} />
        <Route exact path="/definicoesconta/:idconta" element={<DefinicoesConta />} />
        <Route exact path="/tickets" element={<Tickets />} />
        <Route exact path="/tickets2/:idticket" element={<Tickets2 />} />
        <Route exact path="/ticketsatualizado" element={<TicketsAtualizado />} />
        <Route exact path="/recuperarpassword" element={<RecuperarPassword />} />
        <Route exact path="/pedidos2/:idpedido" element={<Pedidos2 />} />
        <Route exact path="/pedidos3/:idpedido" element={<Pedidos3 />} />
        <Route exact path="/notificacoes" element={<Notificacoes />} />
        <Route exact path="/orcamentos2/:idorcamento" element={<Orcamentos2 />} />
        <Route exact path="/pacotes" element={<Pacotes />} />
        <Route exact path="/pacotes2/:idpacote" element={<Pacotes2 />} />
        <Route exact path="/popupeditpacote/:idinfopacote" element={<PopupEditPacote />} />
        <Route exact path="/popupgerarfatura/:idorcamento" element={<PopupGerarFatura />} />
        <Route exact path="/popupadicionarcategoria" element={<PopupAdicionarCategoria />} />
      </Routes>
    </Router>
  );
}


export default App;