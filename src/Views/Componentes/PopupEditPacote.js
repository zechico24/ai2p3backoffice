import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Popup.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './Nav'
const baseUrl = 'https://ai2p3backend.herokuapp.com/'



function PopupEditPacote() {
  const [editPacote, setdataeditPacote] = useState('')
  const [camPreco, setcamPreco] = useState('')
  const [campNome, setcampNome] = useState('')
  const [precoValue, setprecoValue] = useState('')
  const [nomeValue, setnomeValue] = useState('')
  useEffect(() => {
    const url = baseUrl + 'infoPacote/get/' + idinfopacote
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0]
          setdataeditPacote(data)
          setcamPreco(data.preco)
          setcampNome(data.nomeDetalhe)
        } else {
          alert('Error web service')
        }
      })
      .catch((error) => {
        alert('Error server: ' + error)
      })
  }, [])

  const [datainfopacotes, setdatainfopacotes] = useState('')
  const [campPreco, setcampPreco] = useState('')
  const [campNomeDetalhe, setNomeDetalhe] = useState('')
  const { idinfopacote } = useParams()

  useEffect(() => {
    const url = baseUrl + 'infoPacote/get/' + idinfopacote
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0]
          setdatainfopacotes(data)
          setcampPreco(data.preco)
          setNomeDetalhe(data.nomeDetalhe)
        } else {
          alert('Error web service')
        }
      })
      .catch((error) => {
        alert('Error server: ' + error)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <div class="popup">
        <div class="popup-inner">
          <h4 id="popup-pacote-txt">{campNomeDetalhe}</h4>
          <h4 id="popup-pacote-valor-txt">{campPreco}€</h4>
          <input
            id="input-"
            value = {nomeValue}	
             onChange={(value)=>
                setnomeValue(value.target.value)}
            type="text"
            placeholder="Nome"
            name="email"
            required
          ></input>
          <input
            id="input--"
            value = {precoValue}
            onChange={(value)=>
                setprecoValue(value.target.value)}
            type="text"
            placeholder="Preço"
            name="email"
            required
          ></input>

          <button class="close-btn" href={'/pacotes2/' + idinfopacote}>
            <a href = {'/pacotes2/' + idinfopacote}><img id="close-popup" src="../close-svgrepo-com.svg"></img></a>
          </button>

          <button onClick={sendUpdate} class="btn-popup-ok">OK</button>
        </div>
      </div>
    </div>
  )
  
  function sendUpdate(){
    // url de backend
    console.log(setcampNome)
    console.log(setcamPreco)
    const url = baseUrl + 'infoPacote/update/' + idinfopacote
    const datapost = {
    nomeDetalhe : nomeValue,
    preco : precoValue,
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



export default PopupEditPacote
