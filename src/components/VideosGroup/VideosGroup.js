import "./VideosGroup.css"
import Card from "../Card/Card"
import data from "../../source/db.json"
import { useState } from "react"



const VideosGroup = (props) => {
    // Desestructuración
    const {colorPrimario,titulo} = props.grupos
    
    let videos = data.data.filter(card => card.categoria === props.categoria);
    //console.log(videos);
    const [videosFiltrados, setVideosFiltrados] = useState(videos);

    const manejarBorrar = (id) => {

        const videosNoEliminados = videos.filter(card => card.id !== id);
        // const index = videos.findIndex((item) => item.id === id);
        // if (index !== -1) {
        //     setVideosFiltrados([...videos.slice(0, index), ...videos.slice(index + 1)]);
        // }
        setVideosFiltrados(videosNoEliminados);
        console.log(videosFiltrados);
    }
    
    const obj ={
        backgroundColor: colorPrimario
    }
    return <section className="videosgroup" >
        {/* {<h3 {props.grupos.titulo} </h3>} */}
        <h3 style={obj}> {titulo} </h3> 
        <div className="video-cards" >
        {
            videosFiltrados.map((video) => {
                return <Card key={video.id} colorPrimario={colorPrimario} videoData={{video}} manejarBorrar={() => manejarBorrar(video.id)} />
            })
        }
        </div>
    </section>
}

export default VideosGroup