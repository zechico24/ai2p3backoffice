import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Vendas.css";
import NavBar from "./Componentes/Nav.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; 

function Vendas() {




  const [dataVendas, setdataVendas] = useState([]);
 

  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/vendas/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataVendas(data);
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
      <th scope="col">ID Venda</th>
      <th scope="col">Valor Final</th>
      <th scope="col">Método de Pagamento</th>
      <th scope="col">ID Orçamento</th>
      <th scope="col">Data</th>
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


</div>
);

function LoadFillData() {
  return dataVendas.map((data, index) => {
    return (
      <tr key={index}>
        <th>{data.idvenda}</th>
        <th>{data.valor_final}</th>
        <th>{data.metodo_pagamento}</th>
        <th>{data.idorcamento}</th>
        <th>{data.data_compra}</th>
      </tr>
    );
  });
}

}






export default Vendas;