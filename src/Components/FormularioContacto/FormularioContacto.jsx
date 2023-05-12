import { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./styles.css"

const FormularioContacto = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
    })
    const MySwal = withReactContent(Swal)
    
    const [validations, setValidations] = useState({
        name: '',
        email: '',
    })
    
    const validateAll = () => {
        const { name, email } = values
        const validations = { name: '', email: ''}
        let isValid = true
    
        if (!name) {
            validations.name = 'El nombre es requerido'
            isValid = false
        }
    
        if ((name && name.length < 3) || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
        }
    
        if (!email) {
            validations.email = 'El email es requerido'
            isValid = false
        }
    
        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Email format must be as example@mail.com'
            isValid = false
        }

        if (!isValid) {
            setValidations(validations)
        }
    
        return isValid
    }
    
    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''
    
        if (!value) {
            message = `${name} is required`
        }
    
        if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters'
        }
    
        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Email format must be as example@mail.com'
        }
    
        setValidations({ ...validations, [name]: message })
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const isValid = validateAll();
    
        if (!isValid) {
            return false
        }
    
        emailjs.sendForm('service_tmnw0ym','template_roe851n',e.target,'Aa46OMEI1qEQOXs9k').then(res=>{
            console.log(res);
            MySwal.fire({
                title: `Mensaje enviado con exito. Pronto me pondre en contacto contigo ${name}`,
                background: "#000000",
                color:"#FFFFFF",
                showClass: {
                popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })

    }
    
    const { name, email } = values
    
    const { name: nameVal, email: emailVal } = validations
    
    return (
        <div className="flexForm" id="contactame" >
        <h1 className="titulo">Contactame</h1>
        <form className="formClass" onSubmit={handleSubmit}>
            <div>
            <div className="textoError">{nameVal}</div>                
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={validateOne}
                    placeholder = "Name"
                    className="inputForm"
                />
            </div>

            <div>
            <div className="textoError">{emailVal}</div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={validateOne}
                    placeholder = "Email"
                    className="inputForm"
                />
            </div>
            <div>
                <textarea className="textareaForm" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Dejame tu consulta aca"></textarea>
            </div>
            <div className="botonera">
                <button id="botonEnviar" type="submit">Enviar</button>
            </div>
        </form>
        </div>
    )
}

export default FormularioContacto