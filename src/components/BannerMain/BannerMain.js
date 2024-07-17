import "./BannerMain.css"

const BannerMain = () => {
    return <section className="banner-main">
        <div className="banner-mainText">
            <h1>Front End</h1>
            <h2>Challenge React</h2>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div>
            <img className= "player" src = "./img/player.png" alt ="ImgBanner"></img>
        </div>
    </section>
}

export default BannerMain