import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Views/Notificacoes.css";
import NavBar from "./Componentes/Nav.js";


function Notificacoes() {
return (<div>
    <NavBar/>
    <div class = "container-notificacoes">


        <div class = "fotografia-notificacoes">  
            <div class = "foto-perfil-notificacoes">
                <img class ="foto-perfil-notificacoes-img"src = "profile-user-svgrepo-com.svg"></img>
            </div>
            <h4 id = "cliente1-notificacoes-txt">Pagou 49€ pelo pacote 3XXX</h4>
            <h4 id = "cliente1-notificacoes-nome-txt">Armando Gameiro</h4>
        </div>

        <div class = "fotografia-notificacoes">  
            <div class = "foto-perfil-notificacoes">
                <img class ="foto-perfil-notificacoes-img"src = "profile-user-svgrepo-com.svg"></img>
            </div>
            <h4 id = "cliente1-notificacoes-txt">Orçamento submetido</h4>
            <h4 id = "cliente1-notificacoes-nome-txt">Diana Saraiva</h4>
        </div>

        <div class = "fotografia-notificacoes">  
            <div class = "foto-perfil-notificacoes">
                <img class ="foto-perfil-notificacoes-img"src = "profile-user-svgrepo-com.svg"></img>
            </div>
            <h4 id = "cliente1-notificacoes-txt">Orçamento enviado com preço final</h4>
            <h4 id = "cliente1-notificacoes-nome-txt">Guilherme Gonçalves</h4>
        </div>

        <div class = "fotografia-notificacoes">  
            <div class = "foto-perfil-notificacoes">
                <img class ="foto-perfil-notificacoes-img"src = "profile-user-svgrepo-com.svg"></img>
            </div>
            <h4 id = "cliente1-notificacoes-txt">Pagou 75€ pelo pacote costumizado</h4>
            <h4 id = "cliente1-notificacoes-nome-txt">Armando Gameiro</h4>
        </div>
        

        <div class = "horas-notificacoes">
            <h4 id = "horas-notificacoes">11h30</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 id = "horas-notificacoes">13h25</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 id = "horas-notificacoes">14h19</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 id = "horas-notificacoes">17h44</h4>

        </div>

    </div>

    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only"></span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only"></span>
      </a>
    </li>
  </ul>
  </nav>
    </div>
)
}


export default Notificacoes;
