import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from "react";
import React from 'react';
import "./styles.css";

type Message = {
    id: string;
    type: "bot" | "user";
    text: React.ReactNode;
}

const ANSWERS = {
    unknow: (
        <p>En realidad no soy Fer, soy una IA preparada para responder algunas preguntas. Trata de reformular tu pregunta asi puedo darte una respuesta mas certera </p>
    ),
    intro: (
        <p>Soy Fer (FerAstrozombie para amigos y no tan amigos). Soy desarrollador FullStak M.E.R.N. (Mongo, ExpressJs, ReactJs, NodeJs). Actualmente estoy trabajando en comercio exterior y buscando cambiar de rumbo mi carrera profesiona hacia el rubro IT. Me forme en Coderhouse y tambien de manera autodidacta dia a dia voy reforzando un poco mas mis habilidades como desarrollador. Tengo habilidades tanto en Frontend como en Backend. Conocimientos en JavasCreipt, en React, en NodeJs y en bases de dato relacionales como no relacionales</p>
    ),
    conocimientos: (
        <p>Soy desarrollador Fullstak. Tengo conociemientos en las siguentes tecnologias: HTML / CSS / SASS / BOOTSTRAP / GIT / GITHUB / JAVASCRIPT / REACTJS / NODEJS / EXPRESSJS / MONGODB
        </p>
    ),
    contacto: (
        <p>Si queres podes contactarme por mis redes: <a href="https://www.linkedin.com/in/fernandorenelair/" rel="noopene noreferer" target="blank">LinkedIn</a> o bien puedes enviarme un email a: fernando_punk77@hotmail.com o visitar mi <a href="https://portfolio-fernando-lair.vercel.app/" rel="noopener noreferrer" target="_blank">portfolio</a></p>

    ),
}

const EXAMPLES = [{ "text": "Hola", "label": "intro" }, { "text": "Como estas?", "label": "intro" }, { "text": "Que tecnologias manejas?", "label": "conocimientos" }, { "text": "Quien sos?", "label": "intro" }, { "text": "Cual es tu LinkedIn?", "label": "intro" }, { "text": "Cual es tu GitHub?", "label": "intro" }, { "text": "Estas en busqueda laboral?", "label": "contacto" }, { "text": "Tenes email?", "label": "contacto" }, { "text": "tenes experiencia?", "label": "conocimientos" }, { "text": "Cual es la tecnologia que mejor manejas?", "label": "conocimientos" }, { "text": "Que clase de Fullstack sos?", "label": "conocimientos" }, { "text": "Quiero contactarte", "label": "contacto" }, { "text": "Sabes ingles?", "label": "conocimientos" }, { "text": "Preferis Frontend o Backend?", "label": "conocimientos" }, { "text": "Manejas bases de datos?", "label": "conocimientos" }, { "text": "sos el jefe de los minisupers", "label": "unknow" }, { "text": "tenes curriculum?", "label": "contacto" }, { "text": "arreglas impresoras?", "label": "unknow" }, { "text": "contame un chiste", "label": "unknow" }, { "text": "cual es tu expectativa salarial?", "label": "contacto" }, { "text": "Donde trabajas?", "label": "intro" }, { "text": "Donde estas trabajando?", "label": "intro" }, { "text": "Cual es tu empleo actual?", "label": "intro" }, { "text": "tengo una oferta para vos?", "label": "contacto" }, { "text": "Estas buscando trabajo?", "label": "contacto" }]

const API_KEY = "PMBwSFtqZ9KHQTfTGaAZL1JyxZGK7UeFWRFrENwk";

const Chat = () => {
    const [message, setMessage] = useState<Message[]>([
        {
            id: "1",
            type: "bot",
            text: "Hola, soy un bot preparado para contestar algunas preguntas sobre Fer. Dime que quieres saber?",
        }
    ])

    const [question, setQuestion] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const [isCollapsed, toogleCollapsed] = useState<boolean>(true);

    const container = useRef<HTMLDivElement>(null)

    async function handleSubmit(event: React.FormEvent) {

        event.preventDefault();
        if (loading) return
        setLoading(true);
        setQuestion("");
        setMessage((message) => message.concat({ id: String(Date.now()), type: "user", text: question }))

        const { classifications } = await fetch("https://api.cohere.ai/v1/classify", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "large",
                inputs: [question],
                examples: EXAMPLES
            }),
        }).then(res => res.json());

        setLoading(false);
        setMessage((message) => message.concat({ id: String(Date.now()), type: "bot", text: ANSWERS[classifications[0].prediction as keyof typeof ANSWERS] || ANSWERS["unknow"] }))
    }

    useEffect(() => {
        container.current?.scrollTo(0, container.current.scrollHeight);
    }, [message, isCollapsed])

    return createPortal(
        <div id='portalTres' className='fixed bottom-8 right-8 bg-transparent'>
            {isCollapsed ? (
                <>
                    <span className='pregunta'> Hazme una pregunta </span>
                    <button
                        className='rounded-full bg-purple-800 p-2 items-center portal'
                        onClick={() => toogleCollapsed(false)}
                    >
                        <img className='calavera' src="imagenes/calavera.svg" alt="calavera" />
                    </button>
                </>
            ) : (
                <div className='portal'>
                    <button
                        className='rounded-full bg-purple-800 absolute -left-4 -top-4 w-8 h-8 items-center'
                        onClick={() => toogleCollapsed(true)}
                    >
                        ×
                    </button>
                    <div className="text-xl  flex flex-col gap-4 m-auto max-w-lg border boder-gray-800 p-4 rounded-md portalDos">
                        <div ref={container} className="flex flex-col gap-4 h-[300px] overflow-y-auto">
                            {message.map((message) => (
                                <div id='parrafoChat' key={message.id} className={`p-4 max-w-[80%] text-white rounded-3xl ${message.type === "bot"
                                    ? "bg-purple-800 text-left self-start rounded-bl-none"
                                    : "bg-purple-500 text-right self-end rounded-br-none"}`}
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <form className="flex items-center" onSubmit={handleSubmit}>
                            <input
                                value={question}
                                onChange={(event) => setQuestion(event.target.value)}
                                className="rounded rounded-r-none flex-1 border border-gray-400 personalOne"
                                type="text"
                                placeholder="Hazme una pregunta"
                                name="questions"
                            />
                            <button
                                disabled={loading}
                                className={`bg-purple-800 rounded-lg rounded-l-none ${loading ? "bg-purple-500" : "bg-purple-800 personalTwo"} `}
                                type="submit"
                                autoFocus
                            >
                                ↩
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>,
        document.getElementById("chat") as HTMLDivElement
    );


}

export default Chat