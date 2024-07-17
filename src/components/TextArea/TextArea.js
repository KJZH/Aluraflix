import { useState } from "react"
import "./TextArea.css"

const TextArea = (props) => {
    // const [textArea, setTextArea] = useState("")
    const placeholderModificado = `${props.placeholder}...`;

    return <div className="text-area">
        <label>  {props.titulo}</label>
        <textarea
            id={props.id}
            placeholder={placeholderModificado}
            value={props.valor}
            onChange={props.manejarCambio}
        />
        

    </div>
}

export default TextArea