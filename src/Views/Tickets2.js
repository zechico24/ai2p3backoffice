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

    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        } 
        setIsSubscribed(current => !current);
      };

    const [dataTickets, setdataTickets] = useState("");
    const [campNome, setcampNome] = useState("");
    
    const {idticket} = useParams();

    useEffect(() => {
      const url = baseUrl+"tickets/get/" + idticket;
      axios.get(url)
      .then(res=>{
      if (res.data.success) {
      const data = res.data.data[0];
      setdataTickets(data);
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
            <h5 id = "dados1-pedido">Respondido?</h5>
        </div>

        <div class = "dados2-tickets2">
            <h5 id = "dados2-pedido">#{idticket}</h5>
            <h5 id = "dados2-pedido">{campNome}</h5>
        </div>

        <input type="checkbox" id="checkbox-tickets2" name="vehicle1" value={isSubscribed}
          onChange={handleChange}></input>

        </div>
    
    <p class = "Ticket-Usuario">Ticket</p>
    <div class = "ticket-user-message">
        <label for="txt-area-tickets2"></label>
            <textarea id="txt-area-tickets2" name="ticket-message" rows="4" cols="50">
                Lorem ipsum
            </textarea>
    </div>

        <Link to ="/tickets">
            <button class="btn-cancelar-tickets">Cancelar</button>
        </Link>

            <a href = "/ticketsatualizado"><button onClick={check} class="btn-atualizar-tickets">Atualizar</button></a>
        
        

</div>
);

function check(){
    if(isSubscribed){
        sendUpdate();
    }
    else{
        offDate();
    }
}

function offDate(){
    // url de backend
    const url = baseUrl + 'tickets/update/' + idticket
    const datapost = {
        respondido: true
    }
    axios.post(url,datapost)
    .then(response=>{
    if (response.data.success===true) {
    alert(response.data.message)
    }
    else {
    alert("Error")
    }
    }).catch(error=>{
    alert("Error 34 "+error)
    })
    }

function sendUpdate(){
    // url de backend
    const url = baseUrl + 'tickets/update/' + idticket
    const datapost = {
        respondido: false
    }
    axios.post(url,datapost)
    .then(response=>{
    if (response.data.success===true) {
    alert(response.data.message)
    }
    else {
    alert("Error")
    }
    }).catch(error=>{
    alert("Error 34 "+error)
    })
    }

}






export default Tickets2;