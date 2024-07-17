import "./ComboBox.css"

const ComboBox = (props) => {
    const equipos = [
        "BACK END",
        "FRONT END",
        "INNOVACIÓN Y GESTIÓN",
    ]

    return <div className="combo-box"> 
        <label> Categoría</label>
            <select value={props.value} onChange={props.manejarCambio}>
                <option value="" disabled defaultValue=" " hidden>Selecciona una opción</option>
                {equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
    </div>
}

export default ComboBox;