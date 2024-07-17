import { useState } from "react"
import "./TextBox.css"


const TextBox = (props) => {

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className="text-box">
        <label>  {props.titulo}</label>
        <input
            id={props.id}
            placeholder = {`${props.placeholder}...`} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default TextBox