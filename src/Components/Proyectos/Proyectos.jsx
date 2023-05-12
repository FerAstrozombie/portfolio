import data from "../mockData"
import { useEffect, useState } from "react"
import ItemProyect from "../ItemProyect/ItemProyect";

const Proyectos = () => {
    const [proyectList, setProyectList] = useState([]);
    useEffect (() => {
        setProyectList(data);
    },[])
    const getProyects = new Promise((resolve) =>{
        resolve(data);
    })
    return (

        <ItemProyect lista = {proyectList} />

    )
}

export default Proyectos