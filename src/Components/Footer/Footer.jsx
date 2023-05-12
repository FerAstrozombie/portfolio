import "./styles.css"

const Footer = () => {
    return (
    <div className="footerFlex" id="footer">
        <a href="https://github.com/FerAstrozombie" target="_blank" rel="noopener noreferrer">
            <img className="tamañoLogos" src="../imagenes/logogithub.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/fernando-lair/" target="_blank" rel="noopener noreferrer">
            <img className="tamañoLogos" src="../imagenes/logolinkedin.png" alt="" />
        </a>
    </div>
    )
}

export default Footer