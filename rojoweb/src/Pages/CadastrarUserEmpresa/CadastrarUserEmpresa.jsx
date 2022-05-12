import '../../assets/css/CadastroUsuarioEmpresa.css';
import { useState, useEffect } from 'react';
import {Cabeca} from '../../components/Header/Header.jsx';
import axios from 'axios';
import Logo from '../../components/Logo/Logo.js';
import Helmet from 'react-helmet';
import { parseJwt } from '../../Services/auth';

export default function Empresa() {

  //States
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [Nome, setNome] = useState('');
  const [IdEmpresa, setIdEmpresa] = useState(0);
  const [IdTipoUsuario, setIdTipoUsuario] = useState(0);
  const [MensagemErro, SetMensagemErro] = useState('');
  const [isLoding, setIsLoding] = useState(false);

  console.log(IdTipoUsuario);


  //Cadastrar User empresa
  function CadastrarUserEmpresa(event) {
    event.preventDefault();

    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    let userEmpresa = {

      idtipoUsuario: IdTipoUsuario,
      idempresa: IdEmpresa,
      email: email,
      senha: senha,
      nomeUsu: Nome
    }

    axios.post('http://3.234.116.203/api/Usuarios', userEmpresa, {

      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then((resposta) => {
        if (resposta.status === 201) {
          setIsLoding(false)
          console.log('Usuario cadastrado');
          SetMensagemErro('Usuario cadastrado')

        }
        else
        SetMensagemErro('Oops! algo deu errado :(')

      })

      .then(erro => console.log(erro))
  }

  useEffect(() => {
    setIdEmpresa(parseJwt().emp);
    setIdTipoUsuario(parseJwt().role);
  })

  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastro De Usuario Empresa" />
      <main className='mano'>
        <div className="cima">
          <Cabeca Cor={'Cadastrar User'}/>
          <Logo />
        </div>

        <form onSubmit={CadastrarUserEmpresa} action="" className="cadastrar_usu">

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

          <div className="mensagem">
            <p>{MensagemErro}</p>
          </div>

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
