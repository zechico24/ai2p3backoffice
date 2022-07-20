import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Pedidos.css'
import NavBar from './Componentes/Nav.js'
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
 


function Pedidos() {

  const [dataPedidos, setdataPedidos] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/pedidos/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPedidos(data);
          console.log(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); 

  return (
    <div>
      <NavBar />
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Referência</th>
            <th scope="col">Estado</th>
            <th scope="col">Data do Pedido</th>
            <th scope=""></th>
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
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )

  function LoadFillData() {
    return dataPedidos.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idpedido}</th>
          <td>Por responder</td>
          <td>{data.data_pedido}</td>
          <td ><a href = {"/pedidos2/" + data.idpedido}> <img id = "olho-tickets" img src = "/eye-svgrepo-com.svg"></img></a></td>
        </tr>
      );
    });
  }

}

export default Pedidos
