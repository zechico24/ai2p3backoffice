import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Views/Tickets2.css";
import NavBar from "./Componentes/Nav.js";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const baseUrl = 'https://ai2p3backend.herokuapp.com/'

function Tickets2() {

    const [dataTickets, setdataTickets] = useState("");
    const [campNome, setcampNome] = useState("");
    const [campMensagem, setcampMensagem] = useState("");
    
    const {idticket} = useParams();

    useEffect(() => {
      const url = baseUrl+"tickets/get/" + idticket;
      axios.get(url)
      .then(res=>{
      if (res.data.success) {
      const data = res.data.data[0];
      setdataTickets(data);
      setcampNome(data.nome);
      setcampMensagem(data.mensagem);
      }
      else {
      alert("Error web service")
      }
      })
      .catch(error=>{
      alert("Error server: "+error)
      })
      }, []);


return (<div>
    <NavBar/>

    <br></br>
    <br></br>
    <div class = "info-ticket">
        {/* <p class = "ticket2-info">Referência</p>
        <c>#T2312</c>
        <p class = "ticket2-info">Assunto</p>
        <c>Custo do Pacote 3XL</c>
        <p class = "ticket2-info">Nome de usuário</p>
        <c>@armG</c> */}

        <div class = "dados1-tickets2">
            <h5 id = "dados1-pedido">Referência</h5>
            <h5 id = "dados1-pedido">Nome de usuário</h5>
        </div>

        <div class = "dados2-tickets2">
            <h5 id = "dados2-pedido">#{idticket}</h5>
            <h5 id = "dados2-pedido">{campNome}</h5>
        </div>

        </div>
    
    <p class = "Ticket-Usuario">Ticket</p>
    <div class = "ticket-user-message">
        <label for="txt-area-tickets2"></label>
            <textarea value = {campMensagem} id="txt-area-tickets2" name="ticket-message" rows="4" cols="50">
                
            </textarea>
    </div>
        

</div>
);

}






export default Tickets2;