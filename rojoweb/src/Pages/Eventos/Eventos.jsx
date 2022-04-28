import { useState, useEffect } from 'react';
import Cima from '../../components/Header2/Header2.jsx'
import '../../assets/css/Evento.css'
import logo from '../../assets/img/Rojo_imagem.png'
import axios from 'axios';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
//import { parseJwt } from '../../Services/auth';
//import palestra from '../../assets/img/palestra_img.png'



export default function MeusEventos() {

    //States
    const [listaEventos, setlistaEventos] = useState([]);
    const [listaEventosID, setlistaEventosID] = useState([]);
    const [EventoID, setEventoID] = useState(0);
    const [show, setShow] = useState(false);

    function handleShow() {
        if (show == false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }


    function BuscarMeusEventos() {

        axios.get('http://35.174.225.157/api/Evento', {


            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    setlistaEventos(resposta.data)
                    //console.log(listaEventos)
                }

            }
            )

    }

    function BuscarEvento() {

        let header = {
            idevento: EventoID
        }

        axios.get('http://35.174.225.157/api/Evento/15', header, {


            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    setlistaEventosID(resposta.data)
                    console.log(listaEventosID)
                }

            }
            )

    }

    useEffect(() => {
        BuscarEvento();
        BuscarMeusEventos();
    });


    return (

        <div className="Container">
             <Helmet title="Projeto Rojo - Eventos " />
            <Cima />
            <section className="ContBody">
                <h2 className="Seus_Eventos">Seus eventos</h2>
                <div className="EssaBarra"></div>
                {listaEventos.map((eventos) => {
                    return (
                        <div onClick={handleShow} onClickCapture={(event) => setEventoID(eventos.idevento)} key={eventos.idevento} className="ContList">
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

            <ReactModal isOpen={show} onRequestClose={show}>
                {/* {listaEventosID.map((eventos) => {
                    <div>
                        <h2 className="NomeEvento"> Nome Evento {eventos.nomeEvento}</h2>
                        <div className="barrinha"></div>
                        <h3 className="NomePalestrante"> Nome Palestrante {eventos.palestrante}</h3>
                    </div>
                })} */}
            </ReactModal>
        </div>

    )
} 