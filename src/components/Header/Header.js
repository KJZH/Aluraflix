import "./Header.css"
import Button from "../Button/Button"

// const handleHome = () => {
//     alert('hice click');
// }

// const handleNewVideo = () => {}

function Header (props){
    return <header className="header">
            <section className="headerSection">
                <img className= "logo" src = "./img/header.png" alt ="AluraFlix" ></img> 
                {/* onHandleClick={handleHome} */}
                <Button texto="HOME" blueButton="yes" onHandleClick={props.mostrarHome} />
                {/* onHandleClick={handleNewVideo}  */}
                <div onClick={props.cambiarMostrar}>
                    <Button texto="NUEVO VIDEO" blueButton="no" onHandleClick={props.mostrarNuevo} />  
                </div>
            </section>    
        </header>
}

export default Header