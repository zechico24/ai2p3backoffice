import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Views/Vendas2.css";
import NavBar from "./Componentes/Nav.js";
import { Link } from "react-router-dom";


function Clientes2() {
return (<div>
    <NavBar/>
    <div class = "container-clientes">

        <div class = "dados-clientes1">
            <h5 id = "dados1-cliente">Usuário</h5>
            <h5 id = "dados1-cliente">Nome completo</h5>
            <h5 id = "dados1-cliente">Email</h5>
            <h5 id = "dados1-cliente">Telemóvel</h5>
            <h5 id = "dados1-cliente">NIF</h5>
            <h5 id = "dados1-cliente">Data da Compra</h5>
            <h5 id = "dados1-cliente">Método de pagamento</h5>
            <h5 id = "dados1-cliente">Pacote</h5>

        </div>

        <div class = "dados-clientes2">
            <h5 id = "dados2-cliente">armG</h5>
            <h5 id = "dados2-cliente">Leando Pedro Gameiro</h5>
            <h5 id = "dados2-cliente">leopg@gmail</h5>
            <h5 id = "dados2-cliente">932012492</h5>
            <h5 id = "dados2-cliente">504 213 231</h5>
            <h5 id = "dados2-cliente">20-01-20</h5>
            <h5 id = "dados2-cliente">Paypal</h5>
            <h5 id = "dados2-cliente">Pacote3XXX</h5>
        </div>
    </div>

        <Link to = "/orcamentos">
            <button id = "btn-ver-orcamento" class="button-atualizar">Ver orçamento</button>
        </Link>

</div>
);
}


export default Clientes2;
