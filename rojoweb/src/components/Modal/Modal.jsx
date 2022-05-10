import { useState, useEffect } from 'react';
import '../../assets/css/Evento.css';
import '../../assets/css/Modal.css';
import Palestra from '../../assets/img/Palestra_img.png';
import axios from 'axios';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
import * as RiIcons from 'react-icons/ri';


export const Modall = ({ showModal, setShow, evento }) => {

    const [listaEventosID, setlistaEventosID] = useState([]);

    console.log(listaEventosID)

    // function BuscarEvento() {

    //     // let header = {
    //     //     idEvento: EventoID
    //     // }
    //     console.log("aqui")

    //     axios.get('http://3.234.116.203/api/Evento/' + EventoID, {


    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     })

    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 setlistaEventosID(resposta.data)

    //             }

    //         }
    //         )

    // }


    useEffect(() => {
        setlistaEventosID(evento);
    });

    return (
        <div>
            <ReactModal isOpen={showModal} onRequestClose={showModal} className="mod">
                <div className="X">
                    <RiIcons.RiCloseFill onClick={setShow} style={{ cursor: 'pointer', color: 'red' }} />
                </div>
                {
                    listaEventosID.map((event) => {
                        return (
                            <div className="Contm">
                                <div className="conteiner" key={event.idevento}>
                                    <div className="img"><img src={Palestra} alt="" /></div>
                                    <div className="contLetra">
                                        <div className="contNND">
                                            <h2>{event.nomeEvento}</h2>
                                            <div className="barrinha"></div>
                                            <h3>{event.palestrante}</h3>
                                            <div>
                                                <p>{event.descricao}</p>
                                            </div>
                                            <div>
                                                <button>Editar</button>
                                                <button>Excluir</button>
                                            </div>
                                        </div>
                                        {/* <p className="Descricao"> Descrição: {eventos.descricao}</p> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ReactModal>
        </div>
    )



}