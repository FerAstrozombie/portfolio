import "./styles.css"


const NavBar = () => {
    return (
    <div>
        <nav>
            <ul className="navbar">
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
                    <a className="anclas" href="#proyectos">
                        Proyectos
                    </a>
                </li>
                <li className="lista">Contactame</li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar