import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Orcamentos.css";
import NavBar from "./Componentes/Nav.js";
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Orcamento() {

  const [dataOrcamentos, setdataOrcamentos] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/orcamentos/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataOrcamentos(data);
          console.log(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); 

return (<div>
  <NavBar/>
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID Orçamento</th>
      <th scope="col">ID Pedido</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <LoadFillData/>
  </tbody>
</table>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only"></span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only"></span>
      </a>
    </li>
  </ul>
</nav>




 
    {/* <div class = "painel-controlo">
        <img class = "dashboard-baixo" src="novos-clientes.png"/> 
        <img class = "dashboard-baixo" src="pacotes-vendidos.png"/> 
        <img class = "dashboard-baixo" src="pacote-preferencial.png"/> 
    </div> */}




</div>
);

function LoadFillData() {
  return dataOrcamentos.map((data, index) => {
    return (
      <tr key={index}>
        <th>{data.idorcamento}</th>
        <td>{data.idpedido}</td>
        <td ><a href={"/orcamentos2/" + data.idorcamento}> <img id = "olho-tickets" img src = "/eye-svgrepo-com.svg"></img></a></td>
      </tr>
    );
  });
}

}






export default Orcamento;