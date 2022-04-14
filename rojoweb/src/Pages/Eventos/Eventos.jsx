import { useState } from "react"
import Cima from '../../components/Header/Header.jsx'
import '../../assets/css/Evento.css'



export default function Eventos() {
    const [ListEventos, SetList] = useState([]);



    return(
        <div className="Container">
            <Cima />
        </div>
    )
} 