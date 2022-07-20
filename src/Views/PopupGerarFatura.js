import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../Views/Componentes/Popup'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './Componentes/Nav'

import Moment from 'moment';


function PopupEditPacote() {
  const baseUrl = 'https://ai2p3backend.herokuapp.com/'
  const { idorcamento } = useParams()
  
  const formatDate = Moment().format("MMM Do YY");
  const [campPreco, setcampPreco] = useState('')
  const [campPagamento, setcampPagamento] = useState('')

  const SendSave =e=> {
    e.preventDefault ();
    console.log("hhhh");
      const baseUrl = "https://ai2p3backend.herokuapp.com/vendas/create";
      const datapost = {
        valor_final: campPreco,
        metodo_pagamento: campPagamento,
        data_compra: formatDate,
        idorcamento: idorcamento
      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
  }


  return (
    <div>
      <NavBar />
      <div class="popup">
        <div class="popup-inner">
          <h4 id="popup-gerar-fatura-vf">Valor Final: </h4>
          <h4 id="popup-gerar-fatura-mp">Método Pagamento: </h4>
          <input
            id="input-gerar-fatura-preco"
            value = {campPagamento}	
             onChange={(value)=>
                setcampPagamento(value.target.value)}
            type="text"
            placeholder="Nome"
            name="email"
            required
          ></input>
          <input
            id="input-gerar-fatura-nome-mp"
            value = {campPreco}
            onChange={(value)=>
              setcampPreco(value.target.value)}
            type="text"
            placeholder="Preço"
            name="email"
            required
          ></input>

          <button class="close-btn" href={'/orcamentos2/'  + idorcamento}>
            <a href = {'/orcamentos2/' + idorcamento}><img id="close-popup" src="../close-svgrepo-com.svg"></img></a>
          </button>

          <button onClick={SendSave} class="btn-popup-ok">OK</button>
        </div>
      </div>
    </div>
  )

}



export default PopupEditPacote

