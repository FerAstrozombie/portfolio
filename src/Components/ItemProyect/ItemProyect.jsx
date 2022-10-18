import Item from "../Item/Item"
import "./styles.css"

const ItemProyect = ({lista}) => {
    return(
        (<div className="flexProyectos">
            {
                lista.map((proyecto) => (
                <Item
                    nombre={proyecto.nombre}
                    gif={proyecto.gif}
                    link={proyecto.link}
                />))
            }
        </div>)
    )
}

export default ItemProyect