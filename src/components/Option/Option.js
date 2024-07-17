import "./Option.css"

const Option = (props) =>{
    return <button className={props.editOption === 'yes' ? "edit-option": "delete-option" }
    onClick={props.onHandleClick}>
            <img src={props.editOption === 'yes'? "./img/edit.png" : "./img/delete.png"} alt={props.editOption === 'yes'? "Editar" : "Eliminar"} />  
            <label >  {props.texto}</label>
    </button>
}

export default Option