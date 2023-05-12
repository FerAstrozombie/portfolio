import "./styles.css"

const Item = ({ nombre, gif, link, descripcion }) => {
    return (
        <div className="proyectos" id="proyectos">
            <h4 className="proyectosTitulo">{nombre}</h4>
            <img className="gifs" src={gif} alt={nombre} />
            <div className="descripcion">
                <p className="parrafoProyectos">{descripcion}</p>
            </div>
            <a className="linksProyectos" href={link} target="blank">
                <button className="botonDemo">Demo</button>
            </a>
        </div>
    )
}

export default Item