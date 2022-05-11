import { useState, useEffect } from 'react';
import Cima from '../../components/Header/Header.jsx';
import '../../assets/css/Evento.css';
import logo from '../../assets/img/Rojo_imagem.png';
import {Modall} from '../../components/Modal/Modal';
import axios from 'axios';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
import * as RiIcons from 'react-icons/ri';
//import { parseJwt } from '../../Services/auth';
//import palestra from '../../assets/img/palestra_img.png'



export default function MeusEventos() {

    //States
    const [listaEventos, setlistaEventos] = useState([]);
    const [listaEventosID, setlistaEventosID] = useState([]);
    const [EventoID, setEventoID] = useState(0);
    const [show, setShow] = useState(false);

    // console.log(listaEventosID);
    // console.log(EventoID);
    // console.log('http://3.234.116.203/api/Evento/' + EventoID);

    function handleShow() {
        if (show == false) {
            setShow(true);
            BuscarEvento()
        } else {
            setShow(false);
            setEventoID(0);
        }
    }


    function BuscarMeusEventos() {

        axios.get('http://3.234.116.203/api/Evento', {


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

        // let header = {
        //     idEvento: EventoID
        // }
        console.log("aqui")

        axios.get('http://3.234.116.203/api/Evento/' + EventoID, {


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
        BuscarMeusEventos();
        console.log(listaEventos);
    },);


    return (

        <div className="Container">
            <Helmet title="Projeto Rojo - Eventos " />
            <Cima/>
            <section className="ContBody">
                <h2 className="Seus_Eventos">Seus eventos</h2>
                <div className="EssaBarra"></div>
                <div className='contl'>
                    {listaEventos.map((eventos) => {
                        return (
                            <div onClick={handleShow} onClickCapture={(event) => setEventoID(eventos.idevento)} key={eventos.idevento} className="ContList">
                                <div className="imagens">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="tudo">
                                    <div>
                                        <h2 className="NomeEvento">{eventos.nomeEvento}</h2>
                                        <div className="barrinha"></div>
                                        <h3 className="NomePalestrante">{eventos.palestrante}</h3>
                                        <div className='desc'>
                                            <p className='Descricao'>{eventos.descricao}</p>
                                        </div>
                                    </div>
                                    {/* <p className="Descricao"> Descrição: {eventos.descricao}</p> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Modall showModal={show} setShow={handleShow} EventoID={EventoID} evento={[listaEventosID]} />
            {/* <ReactModal isOpen={show} onRequestClose={show} className="mod">
                <div>
                    <RiIcons.RiCloseFill onClick={handleShow} style={{ cursor: 'pointer', color: 'red' }} />
                </div>
                {
                    listaEventosID.map((event) => {
                        return (
                            <div key={event.idevento}>
                                <div><img src={logo} alt="" /></div>
                                <div>
                                    <div >
                                        <h2>{event.nomeEvento}</h2>
                                        <div></div>
                                        <h3>{event.palestrante}</h3>
                                        <div>
                                            <p>{event.descricao}</p>
                                        </div>
                                    </div>
                                    <p className="Descricao"> Descrição: {eventos.descricao}</p> 
                                </div>
                            </div>
                        )
                    })
                }
            </ReactModal> */}
        </div>



    )
}