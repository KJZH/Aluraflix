import "./NewVideo.css"
import Form from "../Form/Form"

const NewVideo = () => {  
    return <section className="new-video">
        <Form newCard={true} videoData={[]}  />
    </section>
}

export default NewVideo