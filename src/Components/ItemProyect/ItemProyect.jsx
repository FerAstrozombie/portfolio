import Item from "../Item/Item"
import "./styles.css"

const ItemProyect = ({lista}) => {
    return(
        (
        <>
            <h2 className="cursoTitulo">Proyectos</h2>
        <div className="flexProyectos">
            {
                lista.map((proyecto, nombre) => (
                <Item 
                    key={nombre}
                    nombre={proyecto.nombre}
                    gif={proyecto.gif}
                    link={proyecto.link}
                    descripcion={proyecto.descripcion}
                />))
            }
        </div>
        </>
    ))
}

export default ItemProyect