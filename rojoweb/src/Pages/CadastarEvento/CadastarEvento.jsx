import '../../assets/css/CadastroEvento.css';
import { useState, useEffect } from 'react';
import Cima from '../../components/Header/Header.jsx';
import axios from 'axios';
import Logo from '../../components/Logo/Logo.js';
import Helmet from 'react-helmet';
import { parseJwt } from '../../Services/auth';


export default function Login() {

  //States
  const [NomeEmpr, setNomeEmpresa] = useState([]);
  const [NomeEvt, setNomeEvt] = useState('');
// const [Descricao, setDescricao] = useState('');
  const [NomePalestrante, setNomePalestrante] = useState('');
  const [IncioEvnt, setIncioEvnt] = useState(new Date());
  const [FimEvnt, setFimEvnt] = useState(new Date());
  // const [Image, setImage] = useState('');
  const [IdEmpresa, setIdEmpresa] = useState(0);
  //const [MensagemErro, SetMensagemErro] = useState('');
  const [IdUsu, setIdUsu] = useState(0);
  //console.log(IdUsu);

  const [isLoding, setIsLoding] = useState(false);
  function CadastrarEvento(event) {
    event.preventDefault();
    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    let evento = {
      IdEmpresa: IdEmpresa,
      IdUsu: IdUsu,
      NomeEvt: NomeEvt,
      NomePalestrante: NomePalestrante,
      IncioEvnt: IncioEvnt,
      FimEvnt: FimEvnt,
      // Descricao: Descricao,
      //Image : Image 
      //  IdEmpresa: IdEmpresa,
    }

    console.log('aquui');
    axios.post('http://localhost:5000/api/Evento', evento, {

        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
        }
    })
    
    console.log(evento)
      .then((resposta) => {
        if (resposta.status === 201) {
          console.log('Evento cadastrado FILHA DA PUTAAAAA');
        }



      })

      .then(erro => console.log(erro))
  }

  function BuscarEmpresa(){
    axios.get('http://35.174.225.157/api/Empresa')
      .then((resposta) => {
        if(resposta.status = 200){
          setNomeEmpresa(resposta.data)
        }
      })
  } 

  useEffect(() => {
    BuscarEmpresa();
    setIdUsu(parseJwt().role);
  })


  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastro Usuario Evento" />
      <main className='mano'>
        <div className="cima">
          <Cima />
          <Logo />
        </div>

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
            id="Adm__nome" />

          {/* <input
            className="Name_Event"
            placeholder="Descrição:"
            type="text"
            onChange={(event) => setDescricao(event.target.value)}
            name="Decrição"
            id="login__email" /> */}

          <input
            className="Name_Event"
            placeholder="Nome do Palestrante:"
            type="text"
            onChange={(event) => setNomePalestrante(event.target.value)}
            name="Nome_Palestrante"
            id="login__senha" />

          <input
            className="Name_Event"
            placeholder="Incio do Evento:"
            type="date"
            onChange={(event) => setIncioEvnt(event.target.value)}
            name="Comeco_evento"
            id="login__senha" />

          <input
            className="Name_Event"
            placeholder="Fim do Evento:"
            type="date"
            onChange={(event) => setFimEvnt(event.target.value)}
            name="Fim_evento"
            id="login__senha" />

          {/* <div>
            <div className="event">
              <label className="event_file" for="Imagem">Escolha o arquivo:</label>
            </div>
            <input
              className="Name_Event_img"
              placeholder="Imagem do Evento:"
              type="file"
              onChange={(event) => setImage(event.target.value)}
              name="imagem"
              id="Imagem" />
          </div> */}


          <button className='BotãoCadastrarUsu' type="submit">Cadastrar</button>
        </form>
        {/* <div className='Div_Matrix'>
        <h2 className='CorAzul'>FAÇA SUA ESCOLHA</h2>
        <h2 className='CorVermelha'>, SAIA DA MATRIX</h2>
      </div>
      <Pirulas /> */}
      </main>
    </div >
  );
}
