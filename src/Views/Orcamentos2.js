import './Orcamentos2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './Componentes/Nav.js'
import axios from 'axios'
import { useParams, } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react';



function Orcamentos2() {

  const baseUrl = 'http://localhost:3000/'
  
  const {idorcamento} = useParams();
  const [dataOrcamento, setdataOrcamento] = useState("");
  const [campValor, setcampValor] = useState("");
  const [campDesconto, setcampDesconto] = useState("");
  const [campIdPedido, setcampIdPedido] = useState("");
  const [dataPedido, setdataPedido] = useState("");
 

  useEffect(() => {
    const url = baseUrl+"orcamentos/get/" + idorcamento;
    axios.get(url)
    .then(res=>{
    if (res.data.success) {
    const data = res.data.data[0];
    setdataOrcamento(data);
    setcampValor(data.valor);
    setcampDesconto(data.desconto);
    setcampIdPedido(data.idpedido);
    }
    else {
    alert("Error web service")
    }
    })
    .catch(error=>{
    alert("Error server: "+error)
    })
    }, []);


    

    
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <div class="container-pedido">
        <h2 id="referencia-pedido-txt">#{idorcamento}</h2>

        <div class="dados1-pedidos2">
          <h5 id="dados1-pedido">Valor</h5>
          <h5 id="dados1-pedido">Desconto</h5>
        </div>

        <div class="dados2-orcamentos2">
          <h5 id="dados2-pedido">{campValor}€</h5>
          <h5 id="dados2-pedido">{campDesconto}%</h5>
        </div>

        <a href = {"/PopUpGerarFatura/" + idorcamento}><button id="btn-gerar-fatura-orcamentos2" class="button-atualizar">
          Gerar fatura
        </button></a>

      </div>
    </div>
  )
}

export default Orcamentos2
