import '../../assets/css/CadastroUsuario.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cima from '../../components/Header/Header.jsx';
import { parseJwt } from '../../Services/auth';
import Logo from '../../components/Logo/Logo.js';

import Pirulas from '../../components/Pirulas/Pirulas.js';
import Helmet from 'react-helmet';

export default function Login() {

  //States
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [IdEmpresa, setIdEmpresa] = useState(0);
  const [NomeEmpresa, setNomeEmpresa] = useState([]);
  const [TipoUsu, setTipoUsu] = useState([]);
  const [IdTipoUsu, setIdTipoUsu] = useState(0);
  //const [MensagemErro, SetMensagemErro] = useState('');
  const [isLoding, setIsLoding] = useState(false);

  console.log(IdTipoUsu);
  console.log(IdEmpresa);
  console.log(email);
  console.log(nome);
  console.log(senha);

  function FazerCadastro(event) {

    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    let UserAdm = {
      idtipoUsuario: IdTipoUsu,
      idempresa: IdEmpresa,
      email: email,
      senha: senha,
      nomeUsu: nome,
    };


    axios.post('http://35.174.225.157/api/Usuarios', UserAdm, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
      }

    })

      .then((resposta) => {

        //adicionando token no local Storage
        if (resposta.status === 200) {

          //adicionando token no localStorage do navegador
          console.log('Usuario Cadastrado')

        }

      })

      .catch(erro => console.log(erro))
  }

  function BuscarEmpresa() {
    axios.get('http://35.174.225.157/api/Empresa')
      .then((resposta) => {
        if (resposta.status = 200) {
          setNomeEmpresa(resposta.data)
        }
      })
  }

  function BuscarTipoUsu() {
    axios.get('http://35.174.225.157/api/TipoUsuario')
      .then((resposta) => {
        if (resposta.status = 200) {
          setTipoUsu(resposta.data)
        }
      })
  }

  useEffect(() => {
    BuscarEmpresa();
    BuscarTipoUsu();
  })

  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastro Usuario ADM" />
      <main className='mano'>
        <div className="cima">
          <Cima />
          <Logo />
        </div>

        <form onSubmit={FazerCadastro} action="" className="cadastrar_usu">

          <input
            className="Name_Adm"
            placeholder="Nome:"
            type="text"
            onChange={(event) => setNome(event.target.value)}
            name="nome"
            id="Adm__nome" />


          <input
            className="Name_Adm"
            placeholder="Email:"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            name="Email"
            id="login__email" />

          <input
            className="Name_Adm"
            placeholder="Senha:"
            type="password"
            onChange={(event) => setSenha(event.target.value)}
            name="Senha"
            id="login__senha" />

          <select className="Name_Event" name="IdEmpresa" value={IdEmpresa} onChange={(event => setIdEmpresa(event.target.value))}>
            <option disabled selected value="0">Nome Empresa:</option>
            {NomeEmpresa.map((Empresas) => {
              return (
                <option key={Empresas.idempresa} value={Empresas.idempresa}> {Empresas.nomeFantasia} </option>
              )
            })}
          </select>
          
          <select className="Name_Event" name="IdEmpresa" value={IdTipoUsu} onChange={(event => setIdTipoUsu(event.target.value))}>
            <option disabled selected value="0">Tipo Usuario:</option>
            {TipoUsu.map((TipoUsu) => {
              return (
                <option key={TipoUsu.idtipoUsuario} value={TipoUsu.idtipoUsuario}> {TipoUsu.perfisDeUsuario} </option>
              )
            })}
          </select>

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
