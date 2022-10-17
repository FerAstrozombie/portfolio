import "./styles.css"
import Typed from "react-typed"

const Inicio = () => {
    return (
    <div>
        <h1 className="titulo">Fernando Lair</h1>
        <h3 className="subtitulo">FrontEnd Developer</h3>
        <div className="flexInicio">
            <div data-aos="flip-left" className="fotoPerfil">
                <img className="tamañoFoto" src="../imagenes/fotoperfil2.svg" alt="" />
            </div>
            <div className="autocompletado">
            <Typed
                strings={[
                "I'm a Frontend Developer",
                "I'll be Backend Developer",
                "I'll be Full Stack Developer",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
            />
            </div>
        </div>
        <div className="flexText">
            <p className="texto">
                En el 2020 empece a estudiar por mi cuenta. Hice algunos cursos de introduccion a la programacion.
                Hasta que me di cuenta que lo que realmente me gusta es el desarrollo web.
                Ahi fue cuando empece a estudiar en Coderhouse.
                Realice el curso de Html5 y Css3. Donde aprendi mucho sobre el desarrollo web. Tuve la suerte de 
                cruzarme con un gran  profesor.
                Despues continue mi camino con Javascript, un lenguaje totalmente desconocido para mi. Fue un gran
                camino que me llevo a descubrir este maravilloso lenguaje. Dia a dia lo sigo aprendiendo.
                Recientemente termine el curso de ReactJs. Aprendi a manejar esta biblioteca. Fue un gran desafio,
                pero me gusto muchisimo y sigo investigando y conociendolo aun mas.
                Actualmente me encuentro cursando Backend. Este seria el ultimo paso para convertirme en Full Stack 
                Developer. Pero no el ultimo en mi aprendizaje.
                Soy una persona proactiva y en constante aprendizaje. Me gusta mucho leer documentacion y mirar 
                videos para seguir mejorando dia a dia. Es un campo en constante crecimiento y expansion, motivo
                por el cual creo que la constante investigacion y aprendizaje es fundamental.
                Termine todos los cursos con nota de 10, permitiendome entrar en el top 10 de alumnos de cada curso.
            </p>
        </div>
    </div>
    )
}

export default Inicio