import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Cores.css";
import NavBar from "./Componentes/Nav.js";
function Cores() {
return (<div>
     {<div>
    
    <NavBar/>
    <div class = "quadrados">
        <div class = "quadrado-amarelo">
            <img id = "quadrado-amarelo" src = "quadrado-amarelo.png"></img>
            <div class = "texto-quadrado-amarelo">
                HEX: <b>#DDB201</b>
                <br></br>
                RGB: <b>221 178 1</b>
            </div>
        </div>
        

        <div class = "quadrado-vermelho">
            <img src = "quadrado-vermelho.png"></img>
            <div class = "texto-quadrado-vermelho">
                HEX: <b>#D01001</b>
                <br></br>
                RGB: <b>208 16 1</b>
            </div>
        </div>

        <div class = "quadrado-laranja">
            <img src = "quadrado-laranja.png"></img>
            <div class = "texto-quadrado-laranja">
                HEX: <b>#F65622</b>
                <br></br>
                RGB: <b>246 86 34</b>
            </div>
        </div>

        <div class = "quadrado-azul">
            <img src = "quadrado-azul.png"></img>
            <div class = "texto-quadrado-azul">
                HEX: <b>#008284</b>
                <br></br>
                RGB: <b>0 130 132</b>
            </div>
        </div>

        <div class = "quadrado-amarelo-claro">
            <img src = "quadrado-amarelo-claro.png"></img>
            <div class = "texto-quadrado-amarelo-claro">
                HEX: <b>#C8C159</b>
                <br></br>
                RGB: <b>200 193 89</b>
            </div>
        </div>

        <div class = "quadrado-roxo">
            <img src = "quadrado-roxo.png"></img>
            <div class = "texto-quadrado-roxo">
                HEX: <b>#A46DAE</b>
                <br></br>
                RGB: <b>164 109 174</b>
            </div>
        </div>
    </div>
    </div>
}
    




 
    {/* <div class = "painel-controlo">
        <img class = "dashboard-baixo" src="novos-clientes.png"/> 
        <img class = "dashboard-baixo" src="pacotes-vendidos.png"/> 
        <img class = "dashboard-baixo" src="pacote-preferencial.png"/> 
    </div> */}




</div>
);
}






export default Cores;