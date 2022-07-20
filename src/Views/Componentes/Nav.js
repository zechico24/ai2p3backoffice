import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Nav.css";
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function NavBar() {

    const [dataContas, setdataContas] = useState([]);
    const [campNome, setcampNome] = useState("");
    useEffect(() => {
      const url = "http://localhost:3000/contas/get/1";
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            const data = res.data.data[0];
            setdataContas(data);
            setcampNome(data.nome);
          } else {
            alert("Error Web Service!");
          }
        })
        .catch((error) => {
          alert(error);
        });
    }, []);

return (<div>

<div class="navbar-full-container">
    <div class = "sidebar-logo" id = "side-bar-logo">
            <img src="../incommun-logo.png"/>
        </div>
        
        <div class = "sidebar text-center"  id = "sidebar text-center">
            <img src="../dashboard-svgrepo-com.svg"/>
                <ul class="nav flex-column">
                <a
                    onClick={() => {
                        window.location.href = "/dashboard";
                    }}
                    >
                    <li class="nav-item">
                        <a class="dashboard-txt" href="#">Painel de Controlo</a>
                        
                    </li></a>
                    <li class="nav-item">
                        <a class="nav-link-gestao" href="#">Gestão</a>
                    </li>
                    <a
                    onClick={() => {
                        window.location.href = "/pedidos";
                    }}
                        >
                    <li class="nav-item">
                        <img src="../service-request-1.svg"/> 
                        <a class="nav-link" href="#">Pedidos</a>
                    </li></a>
                    <a
                    onClick={() => {
                        window.location.href = "/vendas";
                    }}
                    >
                    <li class="nav-item">
                        <img src="../clientes.svg"/>  
                        <a class="nav-link" href="#">Vendas</a>
                    </li></a>
                    <a
                    onClick={() => {
                        window.location.href = "/orcamentos";
                    }}
                    >
                    <li class ="nav-item">
                        <img src="../orcamento.svg"/> 
                        <a class="nav-link" href="#">Orçamentos</a>
                    </li></a>
                    <li class ="nav-item">
                        <img src="../packages-svgrepo-com.png"/>  
                        <a class="nav-link" href="/pacotes">Gestão de Pacotes</a>
                    </li>
                    <a
                    onClick={() => {
                        window.location.href = "/cores";
                    }}
                    >
                    <li class ="nav-item">
                        <img src="../cor.png"/>  
                        <a class="nav-link" href="#">Cores</a>
                    </li></a>
                    <a
                    onClick={() => {
                        window.location.href = "/tickets";
                    }}
                    >
                    <li class ="nav-item">
                        <img src="../tickets-svgrepo-com.png"/>  
                        <a class="nav-link" href="#">Tickets</a>
                    </li></a>
                </ul>
        </div>


    
      <div class="search-container">
          <form form action="/action_page.php">
              <input class = "placeholder-procurar" type="text" placeholder="Procurar..." name="search"></input>
              <button class ="btn-procurar" classtype="submit">Procurar</button>
          </form>
          <img src="../search-svgrepo-com.svg"/>  
      </div>
      
      {/* <div class = "notification">
          <a href="#" class="notification">   
          <img src="notifications-svgrepo-com.svg"/>  
          <span class="badge">3</span>
          </a>
      </div> */}

      <div class = "perfil-container">
        <div class="dropdown">
            <div class = "profile">
                <a href="#" class="profile">   
                <img src="../profile-user-svgrepo-com.svg"/ >
                </a>
            </div>    
                    <div class="dropdown-content">
                        <h2 class = "dropdown-txt-conta">Conta</h2>
                        <a id = "dropdown-txt" href="/notificacoes">Notificações</a> <img id = "notificacoes-profile-icon" src = "../notifications-svgrepo-com.svg"></img>
                        <a id = "dropdown-txt" href="/definicoesconta/2">Definições</a> <img id = "definicoes-profile-icon" src = "../settings-svgrepo-com.svg"></img>
                        <a id = "dropdown-txt" href="/login">Sair</a> <img id = "sair-profile-icon" src = "../logout-svgrepo-com.png"></img>
                    </div>
            </div>
        

        <div class = "profile-text">
                <b>{campNome}</b> <br></br>
                Administrador
        </div>
        </div>
      </div>

        
      
       

               

               



      

      </div>

    


)}



export default NavBar;
