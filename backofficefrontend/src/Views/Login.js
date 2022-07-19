import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Login.css";
import $ from 'jquery';
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; 


function Login() {
    const [dataContas, setdataContas] = useState([]);
    const [campPassword, setcampPassword] = useState("");
    const [campMail, setcampMail] = useState("");
    const [mailInput, setmailInput] = useState("");
    const [passwordInput, setpasswordInput] = useState("");
    var bool = false;

  useEffect(() => {
    const url = "http://localhost:3000/contas/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataContas(data);
          console.log(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); 


    
return (<div>

    <div class = "logo" id = "logo">
        <img src="incommun-logo-login.png"/>
    </div>

    <div class = "login-container" id = "login-container">
        <input type="email" id="email" placeholder="email" size="30" value={mailInput}
                    onChange={(value)=>
                        setmailInput(value.target.value)} required></input>
        <br></br>
        <br></br>
        <input type="password" id="password" placeholder="palavra-passe" value={passwordInput}
                    onChange={(value)=>
                        setpasswordInput(value.target.value)} size="30" required></input>
    </div>

    <a href="/recuperarpassword"><label type="button" class="recuperarPW">Recuperar palavra-passe</label></a> 
    <br></br>
    <a href="#"><label class="reface">desenvolvido por <d>ReFace</d></label></a>

    <div class = "login" id = "login">
    <a
                    onClick={() => {
                        sendUpdate();
                    }}
                    >
        
        <img src = "down-arrow-svgrepo-com.svg"></img>
        </a>
    </div>
    </div>
);

function sendUpdate(){
    // url de backend
    const renderCategoria = dataContas.map((data,index) =>{
        if(data.email === mailInput){
            if(data.password == passwordInput){
                //bool = true;
                window.location.href = "/dashboard";
            }
            
                
            
        }
        else{
            bool = false;
        }
      })
      if(bool === false){
        alert("Password errada!");
      }
      renderCategoria()
    }
}



export default Login;