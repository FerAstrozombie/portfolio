import "./styles.css"

const Proyectos = () => {
    return (
        <div className="contenedor">
            <h2>Proyectos</h2>
            <div className="proyectos">
                <a href="https://tiendapokemon.vercel.app/" target="_blanck">
                    <div className="divProyectoflex">
                            <h3 className="titulo">Tienda Pokemon realizada con ReactJs</h3>
                            <img className="gifs" src="./imagenes/TiendaPokemon.gif" alt="Tienda Pokemon" />
                    </div>
                </a>
                <a href="https://calculadorasnes.vercel.app/" target="_blanck">
                    <div className="divProyectoflex">
                        <h3 className="titulo">Calculadora Snes realizada con Javascript</h3>
                            <img className="gifs" src="./imagenes/CalculadoraSnes.gif" alt="Tienda Pokemon" />
                    </div>
                </a>
                <a href="https://ferastrozombie.github.io/ragnaros/" target="_blanck">
                    <div className="divProyectoflex">
                        <h3 className="titulo">Tienda Remeras realizada con Html y css</h3>
                            <img className="gifs" src="./imagenes/RagnarosRemeras.gif" alt="Tienda Pokemon" />
                    </div>
                </a>
                <a href="https://tienda-de-guitarras.vercel.app/" target="_blanck">
                    <div className="divProyectoflex">
                        <h3 className="titulo">Tienda Guitarras realizada con ReactJs</h3>
                            <img className="gifs" src="./imagenes/TiendaGuitarras.gif" alt="Tienda Pokemon" />
                    </div>
                </a>
                <a href="https://ferastrozombie.github.io/ProyectoMontania/" target="_blanck">
                    <div className="divProyectoflex">
                        <h3 className="titulo">Pagina montañas realizada con Html y css</h3>
                            <img className="gifs" src="./imagenes/ProyectoMontaña.gif" alt="Tienda Pokemon" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Proyectos