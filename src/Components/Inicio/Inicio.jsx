import "./styles.css"
import ScrollButton from "../ScrollButton/ScrollButton"

const Inicio = () => {
    return (
        <>
            <div className="flexInicio" id="sobreMi">
                <div className="fotoPerfil">
                    <img className="tamañoFoto" src="../imagenes/fotoperfil2.svg" alt="" />
                </div>
                <div className="flexText">
                    <p className="parrafo">
                        Hola, soy <span> Fernando Lair </span> Desarrollador Web Fullstack M.E.R.N.
                    </p>
                    <p className="parrafo">
                        ¿ Que es M.E.R.N ?
                    </p>
                    <p className="parrafo">
                        M.E.R.N. es Mongo, ExpressJs, ReactJs & NodeJS. Son los stacks que adquiri durante mi formacion como Desarrollador Fullstack.
                    </p>
                    <p className="parrafo">
                        Aprendi a dominar para el Frontend ReactJs y para el Backend NodeJs y ExpressJs. La base de datos que mas utilizo y mas me gusta es MongoDb.
                        Pero tambien manejo otras bases de datos como MySql y Firebase, propia de Google
                    </p>
                </div>
            </div>
            <ScrollButton />
        </>
    )
}

export default Inicio
