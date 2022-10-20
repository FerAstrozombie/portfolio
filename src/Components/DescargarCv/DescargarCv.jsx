import "./styles.css"

const DescargarCv = () => {
    return (
    <div className="centrado">
        <button className="botonCv">
            <a className="link" href="./fernandolair.pdf" download= "CvFernandoLair">Descargar CV</a>
        </button>
    </div>
    )
}

export default DescargarCv