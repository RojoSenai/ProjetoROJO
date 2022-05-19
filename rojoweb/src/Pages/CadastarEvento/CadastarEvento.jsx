import '../../assets/css/CadastroEvento.css';
import { useState, useEffect } from 'react';
import {Cabeca} from '../../components/Header/Header.jsx'
import axios from 'axios';
import Logo from '../../components/Logo/Logo.js';
import Helmet from 'react-helmet';
import { parseJwt } from '../../Services/auth';


export default function Login() {

  //States
  const [NomeEmpr, setNomeEmpresa] = useState([]);
  const [NomeEvt, setNomeEvt] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [NomePalestrante, setNomePalestrante] = useState('');
  const [IncioEvnt, setIncioEvnt] = useState(new Date());
  const [FimEvnt, setFimEvnt] = useState(new Date());
  // const [Image, setImage] = useState('');
  const [IdEmpresa, setIdEmpresa] = useState(0);
  const [MensagemErro, SetMensagemErro] = useState('');
  const [IdUsu, setIdUsu] = useState(0);
  const [Cor, setCor] = useState('Cadastrar Evento');
  console.log(IdUsu);
  //const [isLoding, setIsLoding] = useState(false);

  function CadastrarEvento(event) {
    event.preventDefault();
    //setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    let evento = {
      idempresa: IdEmpresa,
      idusuario: IdUsu,
      nomeEvento: NomeEvt,
      palestrante: NomePalestrante,
      dataEventoIncio: IncioEvnt,
      dataEventoFim: FimEvnt,
      descricao: Descricao,
    }

    console.log('aquui');
    axios.post('http://3.234.116.203/api/Evento', evento, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then((resposta) => {
        console.log(evento)
        if (resposta.status === 201) {
          console.log('Evento cadastrado');
          SetMensagemErro('Evento Cadastrado com sucesso!')
        }
        else
        SetMensagemErro('Oops! algo deu errado :(')



      })

      .then(erro => console.log(erro))
  }

  function BuscarEmpresa() {
    axios.get('http://3.234.116.203/api/Empresa')
      .then((resposta) => {
        if (resposta.status = 200) {
          setNomeEmpresa(resposta.data)
        }
      })
  }

  useEffect(() => {
    BuscarEmpresa();
    setIdUsu(parseJwt().jti);
  })


  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastro Usuario Evento" />
      <main className='mano'>
        <div className="cima">
          <Cabeca Cor={Cor}/>

        </div>
          <Logo />
          <form onSubmit={CadastrarEvento} action="" className="cadastrar_evt">


            <select className="Name_Event" name="IdEmpresa" value={IdEmpresa} onChange={(event => setIdEmpresa(event.target.value))}>
              <option disabled selected value="0">Nome Empresa:</option>
              {NomeEmpr.map((Empresas) => {
                return (
                  <option key={Empresas.idempresa} value={Empresas.idempresa}> {Empresas.nomeFantasia} </option>
                )
              })}
            </select>

            <input
              className="Name_Event"
              placeholder="Nome do Evento:"
              type="text"
              onChange={(event) => setNomeEvt(event.target.value)}
              name="nome"
              id="Adm__nome"
              required="required" 
              maxlength="50"/>

            <input
              className="Name_Event"
              placeholder="Nome do Palestrante:"
              type="text"
              onChange={(event) => setNomePalestrante(event.target.value)}
              name="Nome_Palestrante"
              id="login__senha"
              required="required" />

            <input
              className="Name_Event"
              placeholder="Descrição:"
              type="text"
              onChange={(event) => setDescricao(event.target.value)}
              name="Decrição"
              id="login__email"
              required="required"
              maxlength="500" />

            <input
              className="Name_Event"
              placeholder="Incio do Evento:"
              type="datetime-local"
              onChange={(event) => setIncioEvnt(event.target.value)}
              name="Comeco_evento"
              id="login__senha"
              required="required" />

            <input
              className="Name_Event"
              placeholder="Fim do Evento:"
              type="datetime-local"
              onChange={(event) => setFimEvnt(event.target.value)}
              name="Fim_evento"
              id="login__senha"
              required="required" />

            <div className="mensagem">
              <p>{MensagemErro}</p>
            </div>
            <button className='BotãoCadastrarUsu' type="submit">Cadastrar</button>
          </form>
      </main>
    </div >
  );
}
