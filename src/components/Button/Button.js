    import "./Button.css"

    const Button = (props) =>{
        return <button className={props.blueButton == 'yes' ? "blue-button" : "white-button"}
        onClick={props.onHandleClick}>
                <label>  {props.texto}</label>
                {props.children}
        </button>
    }

    export default Button