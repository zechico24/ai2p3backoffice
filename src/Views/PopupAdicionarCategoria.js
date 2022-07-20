import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './PopupAdicionarCategoria.css';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './Componentes/Nav'




function PopupAdicionarCategoria() {
  const baseUrl = 'https://ai2p3backend.herokuapp.com/'
  const { idorcamento } = useParams()
  

  const [campPreco, setcampPreco] = useState('')
  const [campNome, setcampNome] = useState('')
  const [campCategoria, setcampCategoria] = useState('')

  const SendSave =e=> {
    console.log(campPreco)
    console.log(campNome)
    console.log(campCategoria)
    e.preventDefault ();
      const baseUrl = "https://ai2p3backend.herokuapp.com/infoPacote/create";
      const datapost = {
        nomeDetalhe: campNome,
        preco: campPreco,
        idcategoria: campCategoria
      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
  }


  return (
    <div>
      <NavBar />
      <div class="popup">
        <div class="popup-inner">
          <h4 id="popup-add-cat-nome">Nome </h4>
          <h4 id="popup-add-cat-preco">Preço </h4>
          <h4 id="popup-add-cat-id">ID Categoria </h4>

          <input
            id="input-adicionar-categoria-nome"
            value = {campNome}
            onChange={(value)=>
                setcampNome(value.target.value)}
            type="text"
            placeholder="Nome"
            name="email"
            required
          ></input>


          <input
            id="input-adicionar-categoria-preco"
            value = {campPreco}	
             onChange={(value)=>
                setcampPreco(value.target.value)}
            type="text"
            placeholder="Valor"
            name="email"
            required
          ></input>

          
          <input
            id="input-adicionar-categoria-id"
            value = {campCategoria}
            onChange={(value)=>
                setcampCategoria(value.target.value)}
            type="text"
            placeholder="ID"
            name="email"
            required
          ></input>


          <button class="close-btn" href={'/orcamentos2/'  + idorcamento}>
            <a href = '/pacotes/'><img id="close-popup" src="../close-svgrepo-com.svg"></img></a>
          </button>

          <button onClick={SendSave} id = "btn-popup-ok-cat" class="btn-popup-ok">OK</button>
        </div>
      </div>
    </div>
  )

}



export default PopupAdicionarCategoria

