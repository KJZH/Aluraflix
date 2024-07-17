import "./Card.css"
import Option from "../Option/Option"
import ModalEditar from "../ModalEditar/ModalEditar"
import { useState } from "react"

const Card = ({colorPrimario, videoData, manejarBorrar}) => {
    const data = videoData.video;

    const [openModal, setOpenModal] = useState(false);

    // const registrarColaborador = (colaborador) => {
    //     console.log("Nuevo colaborador", colaborador)
    //     //Spread operator
    //     actualizarColaboradores([...colaboradores, colaborador])
    //   }
    
    
    const manejarEditar = () => {
        setOpenModal(true);
    }

    const cerrarModal = () => {
        setOpenModal(false);
    }

    return <div className="card">
        {openModal && <ModalEditar videoData={data} onClose={cerrarModal} /> }
        <div className="card__video" >
            {/*<img src={data.imagen} alt={data.video}></img>*/}
            <iframe 
                width="599" 
                height="400"
                src={data.video.src}
                title={data.video.title}
                frameBorder={data.video.frameborder}
                allow={data.video.allow}
                referrerPolicy={data.video.referrerpolicy}
                allowFullScreen>
            </iframe>
            <section style={{ backgroundColor: "#03122f", boxShadow: `inset 0px -4px 7px ${colorPrimario}`}}>
                <Option texto="BORRAR" editOption="no" onHandleClick={manejarBorrar} />
                <Option texto="EDITAR" editOption="yes" onHandleClick={manejarEditar} />
            </section>
        </div>
    </div>
}

export default Card

