import { useState, useEffect } from 'react';
import '../../assets/css/Evento.css'
import logo from '../../assets/img/Rojo_imagem.png'
import axios from 'axios';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
import * as RiIcons from 'react-icons/ri';


export const Modall = ({ showModal, setShow, EventoID, evento }) => {

    const [listaEventosID, setlistaEventosID] = useState([evento]);

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
    }, []);

    return(
        <div>
            <ReactModal isOpen={showModal} onRequestClose={showModal} className="mod">
                <div>
                    <RiIcons.RiCloseFill onClick={setShow} style={{ cursor: 'pointer', color: 'red' }} />
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
                                    {/* <p className="Descricao"> Descrição: {eventos.descricao}</p> */}
                                </div>
                            </div>
                        )
                    })
                }
            </ReactModal>
        </div>
    )



}