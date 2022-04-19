import { useState, useEffect } from 'react';
import Cima from '../../components/Header2/Header2.jsx'
import '../../assets/css/Evento.css'
import logo from '../../assets/img/Rojo_imagem.png'
import axios from 'axios';
//import { parseJwt } from '../../Services/auth';
//import palestra from '../../assets/img/palestra_img.png'



export default function MeusEventos() {

    //States
    const [listaEventos, setlistaEventos] = useState([]);


    function BuscarMeusEventos() {

        axios.get('http://localhost:5000/api/Evento', {


            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    setlistaEventos(resposta.data)
                    console.log(listaEventos)
                }

            }
            )

    }

    useEffect(BuscarMeusEventos, []);


    return (

        <div className="Container">
            <Cima />
            <section className="ContBody">
                <h2 className="Seus_Eventos">Seus eventos</h2>
                <div className="EssaBarra"></div>
                {listaEventos.map((eventos) => {
                    return (
                        <div key={eventos.idevento} className="ContList">
                            <div className="imagens">
                                <img src={logo} alt="" />
                            </div>
                            <div className="tudo">
                                <div>
                                    <h2 className="NomeEvento"> Nome Evento {eventos.nomeEvento}</h2>
                                    <div className="barrinha"></div>
                                    <h3 className="NomePalestrante"> Nome Palestrante: {eventos.palestrante}</h3>
                                </div>
                                {/* <p className="Descricao"> Descrição: {eventos.descricao}</p> */}
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>

    )
} 