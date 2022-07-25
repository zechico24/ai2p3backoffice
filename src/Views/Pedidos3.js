import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Views/Pedidos3.css";
import NavBar from "./Componentes/Nav.js";
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Moment from 'moment';

function Pedidos3() {

    const [campValor, setcampValor] = useState("");
    const [campDesconto, setcampDesconto] = useState("");
    const [campMensagem, setcampMensagem] = useState("");


    const {idpedido} = useParams();
  
    const [dataPedido, setdataPedido] = useState([]);
    const [campNome, setcampNome] = useState("");
    useEffect(() => {
      const url = "https://ai2p3backend.herokuapp.com/pedidos/get/"+ idpedido;
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            const data = res.data.data[0];
            setdataPedido(data);
            setcampNome(data.nome);
          } else {
            alert("Error Web Service!");
          }
        })
        .catch((error) => {
          alert(error);
        });
    }, []);


    const formatDate = Moment().format("MMM Do YY");


    const SendSave =e=> {
        e.preventDefault ();
        console.log("hhhh");
        console.log("ads")
        if (campValor === "") {
          alert("Escreva um valor!");
        } else if (campDesconto === "") {
          alert("Insira um desconto!");
        } else if (campMensagem === "") {
          alert("Insira uma Mensagem!");
        } else {
          const baseUrl = "https://ai2p3backend.herokuapp.com/orcamentos/create";
          const datapost = {
            valor: campValor,
            desconto: campDesconto,
            info_pagamentos: campMensagem,
            data_orcamento: formatDate,
            idpedido: idpedido,
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
      }

return (<div>
    <NavBar/>
    <br></br>
    <br></br>
    <div class = "container-pedido">
        <h2 id = "referencia-pedido-txt">#{idpedido}</h2>
        
        <div class = "dados1">
            <h5 id = "dados1-pedido">Nome de Usuário</h5>
            <br></br>
            <h5 id = "dados1-pedido">Valor</h5>
            <br></br>
            <h5 id = "dados1-pedido">Desconto</h5>
        </div>

        <div class = "dados2">
            <h5 id = "dados2-pedido3">{campNome}</h5>
            <input value = {campValor} 
            onChange={(value)=>
                setcampValor(value.target.value)} id ="input-valor" type="" placeholder="" name="" required></input>
        </div>
        <input value = {campDesconto}
            onChange={(value)=>
                setcampDesconto(value.target.value)} id ="input-desconto" type="" placeholder="" name="" required></input>

        <p class = "Comentario-Pedidos3">Comentário</p>
            <div class = "pedidos3-comentario-container">
                <label for="w3review"></label>
                <textarea value = {campMensagem}
            onChange={(value)=>
                setcampMensagem(value.target.value)} id="w3review" name="ticket-message" rows="4" cols="50">Mensagem</textarea>
            </div>

            <div id = "percentagem">
                %
            </div>

            <div id = "euro">
              €
            </div>

        

        <button onClick ={SendSave} id = "btn-gerar-orcamento-pedidos33" class="button-atualizar">Gerar orçamento</button>
    </div>
</div>
);

}






export default Pedidos3;