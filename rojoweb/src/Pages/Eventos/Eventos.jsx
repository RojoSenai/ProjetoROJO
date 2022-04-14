import { useState } from "react"
import Cima from '../../components/Header/Header.jsx'
import '../../assets/css/Evento.css'
import logo from '../../assets/img/Rojo_imagem.png'


export default function Eventos() {
    const [ListEventos, SetList] = useState([]);



    return (
        <div className="Container">
            <Cima />

            <section className="ContBody">
                <h2>Seus eventos</h2>
                <div className="ContList">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <h2>Nome do evento</h2>
                            <h3>Nome do palestrante</h3>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                    </div>
                </div>
            </section>
        </div>
    )
} 