import DescargarCv from "../DescargarCv/DescargarCv";
import "./styles.css"
import { useState } from "react";

const NavBar = () => {
    const [menu , setMenu] = useState(false);
    const toggleMenu = () =>{
        setMenu(!menu)
    }
    return (
    <div className="menu">
        <h1 className="listaDos">{"< Fernando Lair />"}</h1>
        <button onClick={toggleMenu} className="cabeceraBoton">
            <svg className="cabeceraSvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        <nav className={`cabeceraNav ${menu ? "isActive" : ""}`}>
            <ul className="cabeceraLista">
                <li className="lista">
                    <a className="anclas" href="#sobreMi">
                        Sobre mí
                    </a>
                </li>
                <li className="lista">
                    <a className="anclas" href="#footer">
                        Redes
                    </a>
                </li>
                <li className="lista">
                    <a className="anclas" href="#cursos">
                        Cursos
                    </a>
                </li>
                <li className="lista">
                    <a className="anclas" href="#proyectos">
                        Proyectos
                    </a>
                </li>
                <li className="lista">
                    <a className="anclas" href="#contactame">
                        Contactame
                    </a>
                </li>
                <li className="lista3">
                    <DescargarCv />
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar