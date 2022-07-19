import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Views/Dashboard.css";
import NavBar from "./Componentes/Nav.js";
import Bar5_atrasos from "../Assets/Bar_utilizadores";
import Bar_pedidos from "../Assets/Bar_pedidos";
import Bar_sessoes from "../Assets/Bar_sessoes";
import Donut_visualizacoes from "../Assets/Donut";




function BackOffice() {
return (<div>
  <div class = "titulos">
    <h5 id = "utilizadores-graph-txt">Utilizadores</h5>
    <h5 id = "sessoes-graph-txt">Sessões</h5>
    <h5 id = "pedidos-graph-txt">Pedidos</h5>
    <h5 id = "genero-graph-txt">Visualizações</h5>
  
      <NavBar/>
      <div className="Graficos">
          <div class = "Utilizadores-graph">
            <Bar5_atrasos/>
          </div>
          <div class="Pedidos-graph">
              <Bar_pedidos/>
          </div>
          <div class ="Sessoes-graph">
            <Bar_sessoes/>
          </div>
          <div class = "Visualizacoes-graph">
            <Donut_visualizacoes/>
          </div>
          <h2 class ="h2dashboard"></h2>
      </div>
    </div>
</div>
);

}








export default BackOffice;