import { useState, useEffect } from 'react';
import '../../assets/css/Evento.css';
import '../../assets/css/Modal.css';
import Palestra from '../../assets/img/Palestra_img.png';
import axios from 'axios';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
import * as RiIcons from 'react-icons/ri';


export const Modall = ({ showModal, setShow, evento, EventoID, setList, BuscarEvento }) => {

    const [listaEventosID, setlistaEventosID] = useState([]);
    const [Atualizando, setAtualizando] = useState(false);
    const [NomeEvt, setNomeEvt] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [NomePalestrante, setNomePalestrante] = useState('');
    // const [eventId, setEventId] = useState(0);

    console.log(evento.nomeEvento)

    function AtualizandoE() {
        if (Atualizando == false) {
            setAtualizando(true);
        }
        else {
            setAtualizando(false);

        }
    }

    function SetarState() {
        evento.map((event) => { setNomeEvt(event.nomeEvento) });
        setDescricao(evento.map((event) => { setDescricao(event.descricao) }));
        setNomePalestrante(evento.map((event) => { setNomePalestrante(event.NomePalestrante) }));
    }

    async function Excluir() {

        // let header = {
        //     idEvento: EventoID
        // }
        console.log("aqui")

        await axios.delete('http://3.234.116.203/api/Evento/' + EventoID, {


            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 204) {
                    console.log("Excluido com sucesso")
                    BuscarMeusEventos()
                }

            })
        // await document.location.reload(true);
    }


    function BuscarMeusEventos() {

        axios.get('http://3.234.116.203/api/Evento', {


            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    setList(resposta.data)
                    console.log("cheguei aqui")
                    console.log(resposta.data)
                }

            })

    }


    function AtualizarEvento(event) {
        event.preventDefault();
        //setIsLoding(true)
        // listaEventosID.map((event) => {setEventId(event.idevento)}
        //tirando função padrão da página
        // event.preventDefault();

        //chamando api
        let evento = {
            nomeEvento: NomeEvt,
            palestrante: NomePalestrante,
            descricao: Descricao,
        }

        console.log('aquui');
        axios.put('http://3.234.116.203/api/Evento/' + EventoID, evento, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then((resposta) => {
                console.log(evento)
                if (resposta.status === 204) {
                    console.log('Evento atualizado');
                    //   setAtualizando(false);
                    // setlistaEventosID(evento);
                    BuscarEvento()
                    BuscarMeusEventos()
                    setAtualizando(false);
                    //   SetMensagemErro('Evento Cadastrado com sucesso!')
                }
                // else
                // SetMensagemErro('Oops! algo deu errado :(')



            })

            .catch(erro => console.log(erro))
    }


    useEffect(() => {
        BuscarEvento();
    }, []);

    return (
        <div>
            <ReactModal isOpen={showModal} onRequestClose={showModal} className="mod">
                <div className="X">
                    <RiIcons.RiCloseFill onClick={setShow} style={{ cursor: 'pointer', color: 'red' }} />
                </div>
                {
                    evento.map((event) => {
                        return (
                            <div className="Contm">
                                <div className="conteiner" key={event.idevento}>
                                    <div className="img"><img src={Palestra} alt="" /></div>
                                    {Atualizando == false ? <div className="contLetra">
                                        <div className="contNND">
                                            <div className='nomes'>
                                                <h2>{event.nomeEvento}</h2>
                                                <h3>{event.palestrante}</h3>
                                                <div className="barrinha1"></div>
                                            </div>
                                            <div className='descricao'>
                                                <p>{event.descricao}</p>
                                            </div>
                                            <div className='botoes'>
                                                <button className='botao' onClick={AtualizandoE}>Editar</button>
                                                <button className='botao2' onClickCapture={Excluir} onClick={setShow}>Excluir</button>
                                            </div>
                                        </div>
                                        {/* <p className="Descricao"> Descrição: {eventos.descricao}</p> */}
                                    </div> :
                                        <form onSubmit={AtualizarEvento} className="contLetra">
                                            <div className="contNND">
                                                <div className='nomes'>
                                                    <input type="text" required="required" maxlength="31" onChange={(event) => setNomeEvt(event.target.value)} value={NomeEvt} />
                                                    <div className="barrinha1"></div>
                                                    <input type="text" required="required" maxlength="50" onChange={(event) => setNomePalestrante(event.target.value)} value={NomePalestrante} />
                                                </div>
                                                <div className='descricao'>
                                                    <input type="text" required="required" maxlength="500" onChange={(e) => setDescricao(e.target.value)} name="Descricao" id="Descricao" value={Descricao} />
                                                </div>
                                                <div className='botoes'>
                                                    <button className='botao' type="submit" >Atualizar</button>
                                                    <button className='botao2' onClickCapture={Excluir} onClick={setShow}>Excluir</button>
                                                </div>
                                            </div>
                                        </form>}
                                </div>
                            </div>
                        )
                    })
                }
            </ReactModal>
        </div>
    )



}