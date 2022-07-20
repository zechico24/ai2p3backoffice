import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../Views/Pacotes.css'
import NavBar from './Componentes/Nav.js'
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; 

function Pacotes() {
    
  const [dataPacotes, setdataPacotes] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/pacotes/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotes(data);
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
      <div class = "pacotes-container">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome do Pacote</th>
            <th></th>
          </tr>
        </thead>
        <tbody><LoadFillData/></tbody>
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
    </div>
  )

  function LoadFillData() {
    return dataPacotes.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idpacote}</th>
          <td>{data.nome}</td>
          <td ><a href={"/pacotes2/" + data.idpacote}> <img id = "olho-tickets" img src = "/eye-svgrepo-com.svg"></img></a></td>
        </tr>
      );
    });
  }
}

export default Pacotes
