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
                }

            }
            )

    }

    useEffect(BuscarMeusEventos, []);
    

    return (
       
        <div className="Container">
            <Cima />    
            {listaEventos.map((eventos) => {
            <section className="ContBody">
                <h2 className="Seus_Eventos">Seus eventos</h2>
                <div className="EssaBarra"></div>
                <div className="ContList">
                    <div className="imagens">
                        <img src={logo} alt="" />
                    </div>
                    <div className="tudo">
                        <div>
                            <h2 className="NomeEvento">NOME DO EVENTO</h2>
                            <div className="barrinha"></div>
                            <h3 className="NomePalestrante">Nome do palestrante</h3>
                        </div>
                        <p className="Descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                    </div>
                </div>
         </section>
         })}
        </div>
        
    )
} 