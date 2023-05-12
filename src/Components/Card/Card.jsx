import "./styles.css"
import imagenes from "../../exports/images"

const Card = () => {
    return (
    <div className="skillsContainer">
        <div className="cardContainer">
            <h3 className="skills">Skills</h3>
            <div className="card">
                {imagenes.map((image, nombre) =>(                    
                    <img className="imagenCard" src={image} alt="" key={nombre}></img>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Card