import "./styles.css";
import imagenesCursos from "../../exports/cursos";

import React from 'react'

const Cursos = () => {
    return (
        <div className="padre" id="cursos">
            <h2 className="cursoTitulo">Cursos realizados</h2>
            <div className="hijo">
                {imagenesCursos.map((image, id) =>(
                <div className="cursosCard" key={id}>
                    <img className="cursos" src={image} alt="Cursos"></img>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Cursos