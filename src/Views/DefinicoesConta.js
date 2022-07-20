import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./DefinicoesConta.css";
import NavBar from "./Componentes/Nav.js";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

const baseUrl = 'https://ai2p3backend.herokuapp.com/'

function DefinicoesConta() {

    const [dataConta, setdataConta] = useState("");
    const [campNome, setcampNome] = useState("");
    const [campTelemovel, setcampTelemovel] = useState("");
    const [campEmail, setcampEmail] = useState("");
    const [campPassword, setcampPassword] = useState("");
    const [nome, setNome] = useState("");
    const {idconta} = useParams();

    useEffect(() => {
      const url = baseUrl+"contas/get/" + idconta;
      axios.get(url)
      .then(res=>{
      if (res.data.success) {
      const data = res.data.data;
      setdataConta(data);
      setcampNome(data.nome);
      setcampTelemovel(data.email);
      setcampEmail(data.telemovel);
      setcampPassword(data.password);
      setNome(data.nome);
      console.log(nome);
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


    <div class = "perfil-utilizador">
        <img class ="perfil-utilizador-img"src = "../profile-user-svgrepo-com.svg"></img>  
        <p class = "papel-perfil">{nome}</p>
    </div>

    <div class = "login-container" id = "login-container">
        <p class = "pNome">Nome</p>
        <input  value = {campNome}	
             onChange={(value)=>
                setcampNome(value.target.value)} type="name" id="pNome" size="30" required></input>
        <p class ="numTelemovel">Número de telemóvel</p>
        <input value = {campTelemovel}	
             onChange={(value)=>
                setcampTelemovel(value.target.value)} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
        <p class ="passNova">Palavra-Passe Nova</p>
        <input  value = {campPassword}	
             onChange={(value)=>
                setcampPassword(value.target.value)} type="password" id="passwordNova" placeholder="" size="30" required></input>
        <p class = "email">Endereço Email</p>
        <input  value = {campEmail}	
             onChange={(value)=>
                setcampEmail(value.target.value)} type="email" id="user_email" name="user_email" maxLength="100"></input>
    </div>

    <div class = "btn-cancelar">
        <button class="button-cancelar">Cancelar</button>
    </div>

    <div class = "btn-atualizar">
        <button onClick={sendUpdate} class="button-atualizar">Atualizar</button>
    </div>


</div>


);

function sendUpdate(){
    // url de backend,,
    const url = baseUrl + 'contas/update/';
    const datapost = {
    nome : campNome,
    email : campEmail,
    telemovel: campTelemovel,
    password: campPassword,
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









export default DefinicoesConta;