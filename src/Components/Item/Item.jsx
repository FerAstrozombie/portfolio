import "./styles.css"

const Item = ({nombre, gif,link}) => {
    return (
            <div className="proyectos">
                <a href={link} target = "blank">
                    <h4>{nombre}</h4>
                    <img className="gifs" src={gif} alt={nombre} />
                </a>
            </div>
    )
}

export default Item