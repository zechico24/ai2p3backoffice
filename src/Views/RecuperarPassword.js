import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./RecuperarPassword.css";
import $ from 'jquery';
function RecuperarPassword() {
return (<div>

    <div class = "logo" id = "logo">
        <img src="incommun-logo-login.png"/>
    </div>

    <h3>Recuperar palavra-passe</h3>
    <h6>Código de verificação</h6>
    <h6>De modo a receber o código de verificação, introduza o seu email</h6>


    <div class="container-a">
        <p class="txt-enderecoEmail">Endereço de email</p>
        <input id ="input-recuperar" type="text" placeholder="" name="email" required></input>
    </div>

    <div class = "login" id = "login">
    <a
                    onClick={() => {
                        window.location.href = "/login";
                    }}
                    >
        
        <img id = "arrow-recuperar" src = "down-arrow-svgrepo-com.svg"></img>
        </a>
    </div>

  </div>
);
}



export default RecuperarPassword;