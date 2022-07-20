import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../Views/Pacotes2.css'
import NavBar from './Componentes/Nav.js'
import axios from 'axios'
import { useParams, } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Popup from './Componentes/Popup'

const baseUrl = 'https://ai2p3backend.herokuapp.com/'

function Pacotes2() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const {idpacote} = useParams();
  
  const [dataCategoria, setdataCategoria] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/"+ idpacote;
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

  const [dataListaInfo1, setdataListaInfo1] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/infoPacote/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataListaInfo1(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  

  const [dataPacotes, setdataPacotes] = useState("");
  const [campIDpacote, setcampIDpacote] = useState("");
  const [campNome, setcampNome] = useState("");


 

  useEffect(() => {
    const url = baseUrl+"pacotes/get/" + idpacote;
    axios.get(url)
    .then(res=>{
    if (res.data.success) {
    const data = res.data.data[0];
    setdataPacotes(data);
    setcampIDpacote(data.idpacote);
    setcampNome(data.nome);
    }
    else {
    alert("Error web service")
    }
    })
    .catch(error=>{
    alert("Error server: "+error)
    })
    }, []);

    
    const renderCategoria = dataCategoria.map((data,index) =>{
      return (
         <div>
             <table class="table table-hover table-dark">
              
          <thead>
            <tr>
              <th scope="col">{data.nome}</th>
              <th scope="col">Valor</th>
              <th></th>
          
            </tr>
          </thead>
          {dataListaInfo1.map((data1,index1) =>{
           if (data.idcategoria == data1.idcategoria){
            return(
              <tbody>
                <tr>
                  <td>{data1.nomeDetalhe}</td>
                  <td>{data1.preco}€</td>
                  <td><a href={"/PopupEditPacote/" + data1.idInfopacote}> <img id = "olho-pacotes" img src = "/edit-svgrepo-com.svg"></img></a></td>
                  
                </tr>
              </tbody>
            );
           }})}
          </table>
         </div>       
      );
      
      });
    

  return (
    
    <div>
      
      <NavBar/>
      <a href = "/PopupAdicionarCategoria"><button id ="btn-adicionar-items-p2">Adicionar items</button></a>
      <br></br>
      <br></br>
      <div class="container-pedido">

        <div class="pacotes2-nome-valor-container">
          <h5 id="dados1-pedido">Nome do pacote</h5>
          <h5 id="dados1-pedido">Valor</h5>
        </div>

        <div class="pacotes2-bd-nome-valor-container">
          <h5 id="dados2-pedido">{campNome}</h5>
          <h5 id="dados2-pedido">20.99€</h5>
        </div>
        
        {renderCategoria}

        
      </div>


       
    </div>
  )
}


export default Pacotes2
