import { useState, useEffect } from 'react';
import '../../assets/css/Evento.css';
import '../../assets/css/Modal.css';
import Palestra from '../../assets/img/Palestra_img.png';
import axios from 'axios';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
import * as RiIcons from 'react-icons/ri';
import moment from 'moment';

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
            SetarState();
            console.log(NomeEvt);
        }
        else {
            setAtualizando(false);

        }
    }

    function SetarState() {
        evento.map((event) => { setNomeEvt(event.nomeEvento) });
        evento.map((event) => { setDescricao(event.descricao) });
        evento.map((event) => { setNomePalestrante(event.palestrante) });
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
                    setList(resposta.data.reverse())
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

    // function data() {
    //     const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    //     let data; 
    //     evento.map((event) => { data = event.dataEventoIncio; })
    //     let dataformat = ((data.getDate()))

    // }


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
                                    <div className="img">
                                        <div className="tamanho">
                                            <img src={Palestra} alt="" />
                                        </div>
                                        <div className="DataCont">
                                            <p>{"Data de inicio: " + moment(event.dataEventoIncio).format('LLL') }</p>
                                            <p>{"Termino do evento: " + event.dataEventoFim}</p>
                                        </div>
                                    </div>
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
                                                    <input placeholder="Nome do evento" className="Input" type="text" required="required" maxlength="31" onChange={(event) => setNomeEvt(event.target.value)} value={NomeEvt} />
                                                    <div className="barrinha1"></div>
                                                    <input placeholder="Nome do Palestrante" className="Input" type="text" required="required" maxlength="50" onChange={(event) => setNomePalestrante(event.target.value)} value={NomePalestrante} />
                                                </div>
                                                <div className='descricao'>
                                                    <textarea placeholder="Descrição" className="Input" type="text" required="required" maxlength="500" onChange={(e) => setDescricao(e.target.value)} name="Descricao" id="Descricao" value={Descricao} />
                                                </div>
                                                <div className='botoes'>
                                                    <button className='botao2' onClickCapture={AtualizandoE} onClick={setShow}>Cancelar</button>
                                                    <button className='botao' type="submit" >Atualizar</button>
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