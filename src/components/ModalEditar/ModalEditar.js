import "./ModalEditar.css"
import Form from "../Form/Form"

const ModalEditar = ({ videoData, onClose }) => {
    return <dialog className="modal-editar" open>
            <Form newCard={false} videoData={videoData} onClose={onClose} />
        </dialog>
}

export default ModalEditar