import "./styles.css"
import { motion } from 'framer-motion'
import imagenes from "../../exports/images"

const Slider = () => {
    return (
        <motion.div className="sliderContainer">
            <motion.div className="slider" drag = "x" dragConstraints = {{right : 50, left : -1100}}>
                {imagenes.map(image =>(
                    <motion.div className="item">
                        <img src={image} alt=""></img>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Slider