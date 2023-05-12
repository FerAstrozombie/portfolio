import "./styles.css"
import { motion } from 'framer-motion'
import imagenes from "../../exports/images"

const Slider = () => {
    return (
        <>
            <h2 className="cursoTitulo">Skills</h2>
            <motion.div className="sliderContainer">
                <motion.div className="slider" drag = "x" dragConstraints = {{right : 50, left : -1000}}>
                    {imagenes.map((image, id) =>(
                        <motion.div className="item" key={id}>
                            <img src={image} alt=""></img>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
        
    )
}

export default Slider