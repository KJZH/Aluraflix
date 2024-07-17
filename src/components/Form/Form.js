import React from "react";
import { useState, useEffect } from "react";
import "./Form.css"
import TextBox from "../TextBox/TextBox"
import ComboBox from "../ComboBox"
import Button from "../Button/Button"
import TextArea from "../TextArea/TextArea"
import data from "../../source/db.json"

const Form = ({newCard, videoData, onClose}) => {
    const [registro, setRegistro] = useState([]);

    const [id, actualizarId] = useState(0);
    const [titulo, actualizarTitulo] = useState('');
    const [categoria, actualizarCategoria] = useState('');
    const [imagen, actualizarImagen] = useState('');
    const [video, actualizarVideo] = useState({});
    const [descripcion, actualizarDescripcion] = useState('');


    useEffect(() => {
        if(videoData) {
            actualizarId(videoData.id);
            actualizarTitulo(videoData.titulo);
            actualizarCategoria(videoData.categoria);
            actualizarImagen(videoData.imagen);
            actualizarVideo(videoData.video);
            actualizarDescripcion(videoData.descripcion);
        } else {
            actualizarId(0);
            actualizarTitulo('');
            actualizarCategoria('');
            actualizarImagen('');
            actualizarVideo({});
            actualizarDescripcion('');
        }
      }, [videoData]);


      const updateTitle = (newTitle) => {
        actualizarTitulo(newTitle);
      }
    const manejarCambio = (event) => {
        //event.preventDefault();
        console.log(event.target.id);
        switch(event.target.id) {
            case "Titulo":
                //console.log(event.target.value);
                actualizarTitulo(event.target.value);
                console.log(titulo);
                break;
            case "Categoria":
                actualizarCategoria(event.target.value);
                break;
            case "Imagen":
                actualizarImagen(event.target.value);
                break;
            case "Video":
                actualizarVideo(event.target.value);
                break;
            case "Descripcion":
                actualizarDescripcion(event.target.value);
                break;
        }
    }

    const manejarLimpiar = () => {
        actualizarTitulo('');
        actualizarCategoria('');
        actualizarImagen('');
        actualizarVideo('');
        actualizarDescripcion('');
    }

    const manejarGuardar = (event) => {
        event.preventDefault();

        const nuevoRegistro = {
            id: id,
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            video: video,
            descripcion: descripcion
        };
        console.log(nuevoRegistro);
        /*const usuariosActualizados = usuarios.map(usuario =>
            usuario.id === formulario.id ? usuarioActualizado : usuario
        );*/
        //window.location.reload(); 
    }

    return (
        <form className="form" method={!newCard ? 'dialog' : ''}>
            {!newCard && 
                <button className="close-button" style={{color: 'white' }} onClick={onClose}>
                    <img className= "cross" src = "./img/cross.png" alt ="CrossIcon"></img>
                </button>
            }
            {newCard === true ? <h2> NUEVA CARD</h2> : <h2> EDITAR CARD</h2>}
            {!newCard && <input type='hidden' id="id" name="id" value={id} /> }
            
            <TextBox id="Titulo" titulo="Título" 
            placeholder= "Ingresa un título" 
            required
            valor = {!newCard ? titulo : ''}
            actualizarValor = {updateTitle}
            />
            <ComboBox id="Categoria" titulo="Categoría" 
            placeholder="Selecciona una categoría" 
            valor = {categoria}
            manejarCambio = {manejarCambio}
            />
            {<TextBox id="Imagen" titulo="Imagen" 
            placeholder="Ingresa un link de imagen" 
            required 
            valor = {!newCard ? imagen : ''}
            manejarCambio = {manejarCambio}
            />}
            <TextBox id="Video" titulo="Video" 
            placeholder="Ingresa un link de video" 
            required 
            valor = {!newCard ? video : ''}
            manejarCambio = {manejarCambio}
            />
            <TextArea id="Descripcion" titulo="Descripción" 
            placeholder="Ingresa una descripción" 
            valor = {!newCard ? descripcion : ''}
            manejarCambio = {manejarCambio}
            />
            <section>
                <Button texto ="GUARDAR" blueButton="yes" onHandleClick={manejarGuardar}  />
                <Button texto ="LIMPIAR" blueButton="no" onHandleClick={manejarLimpiar} />
            </section>
        </form>
    )
}

export default Form;