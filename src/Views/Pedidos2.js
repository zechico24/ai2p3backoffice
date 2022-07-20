import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Views/Pedidos2.css";
import NavBar from "./Componentes/Nav.js";
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Pedidos2() {

    const {idpedido} = useParams();
  
  const [dataPedido, setdataPedido] = useState([]);

  const [campEmail, setcampEmail] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campPreco, setcampPreco] = useState("");
  const [campPacote, setcampPacote] = useState("");
  useEffect(() => {
    const url = "http://localhost:3000/pedidos/get/"+ idpedido;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          setdataPedido(data);
          setcampEmail(data.email);
          setcampNome(data.nome);
          setcampPacote(data.idpacote);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const [dataCategoria, setdataCategoria] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/categoria/listwithcategory/"+ campPacote * 1;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataCategoria(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  
  
 const [dataPreco, setdataPreco] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/infoPacote/list/";
    axios
      .get(url)
    .then((res) => {
      if (res.data.success) {
         const data = res.data.data;
         setdataPreco(data);   
       } else {
        alert("Error Web Service!");
        }
     })
      .catch((error) => {
        alert(error);
     });
  }, []);

  var precoFinal = 0;



  const [dataPacote, setdataPacote] = useState([]);

  const [nomePacote, setnomePacote] = useState("");

   useEffect(() => {
     const url = "http://localhost:3000/pacotes/get/"+ campPacote * 1;
     axios
       .get(url)
     .then((res) => {
       if (res.data.success) {
          const data = res.data.data[0];
           setdataPacote(data);
          setnomePacote(data.nome);
        } else {
         alert("Error Web Service!");
         }
      })
       .catch((error) => {
         alert(error);
      });
   }, []);

   const renderCategoria = dataPreco.map((data,index) =>{
    {dataCategoria.map((data1,index1) =>{
     if (data.idcategoria == data1.idcategoria){
        precoFinal = precoFinal + data.preco;
     }})}
});



return (<div>
    <NavBar/>
    {renderCategoria}
    <br></br>
    <br></br>
    <div class = "container-pedido">
        <h2 id = "referencia-pedido-txt">#{idpedido}</h2>
        
        <div class = "dados1-pedidos2">
            <h5 id = "dados1-pedido">Cliente</h5>
            <h5 id = "dados1-pedido">Email</h5>
            <h5 id = "dados1-pedido">Nome do pacote</h5>
            <h5 id = "dados1-pedido">Valor</h5>
        </div>

        <div class = "dados2-pedidos2">
            <h5 id = "dados2-pedido">{campNome}</h5>
            <h5 id = "dados2-pedido">{campEmail}</h5>
            <h5 id = "dados2-pedido">{nomePacote}</h5>
            <h5 id = "dados2-pedido">{precoFinal}€</h5>
        </div>
    
        

            <a href = {"/pedidos3/" + idpedido}><button class="btn-atualizar-tickets" id = "btn-gerar-orcamento">Gerar Orçamento</button></a>
        
        
    </div>
</div>
);

}






export default Pedidos2;