import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "./Popup.css";

import NavBar from './Nav'

function Popup(props) {
  return (props.trigger) ? (
      <div class="popup">
        <div class="popup-inner">
          <button class="close-btn" onClick={() => props.setTrigger(false)}><img id = "close-popup" src = "close-svgrepo-com.svg"></img></button>
          {props.children}
        </div>
      </div>
      
  ) : "";
}

export default Popup
