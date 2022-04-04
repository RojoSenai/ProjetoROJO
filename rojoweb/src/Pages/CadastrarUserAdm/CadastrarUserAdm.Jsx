import '../../assets/css/CadastroUsuario.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt } from '../../Services/auth';
import Logo from '../../components/Logo/Logo.js';
import Pirulas from '../../components/Pirulas/Pirulas.js';
import Helmet from 'react-helmet';




export default function Login() {

  //States
  const [nome, setNome] = useState('');
  const [email, setEmal] = useState('');
  const [senha, setSenha] = useState('');
  const [empresa, setEmpresa] = useState([]);
  const [MensagemErro, SetMensagemErro] = useState('');
  const [isLoding, setIsLoding] = useState(false);

  function FazerLogin(event) {

    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    axios.post('http://localhost:5000/api/Empresa', {
      email: email,
      senha: senha
    })

      .then((resposta) => {

        //adicionando token no local Storage
        if (resposta.status === 200) {

          //adicionando token no localStorage do navegador
          localStorage.setItem('usuario-login', resposta.data.token);
          setIsLoding(false);
          console.log(parseJwt().role);


          // // Redirecionamento conforme o tipo do usuário.
          // if(parseJwt().role === '1'){ // 1 é administrador geral
          //     navigate("/")
          // }else if (parseJwt().role === '3'){ //3 administrador empresa
          //     navigate("/")
        }

      }
      )

      .catch(erro => console.log(erro))
  }

  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastro Empresa" />
      <main className='mano'>
        <div className="cima">
          <Logo />
        </div>

        <form onSubmit={FazerLogin} action="" className="login">

          <input
            className="Name_Adm"
            placeholder="Name:"
            type="text"
            onChange={(event) => setName(event.target.value)}
            name="Nome"
            id="Adm__mome" />


          <input
            className="LOGIN_log"
            placeholder="Email:"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            name="Email"
            id="login__email" />

          <input
            className="LOGIN_log"
            placeholder="Senha:"
            type="password"
            onChange={(event) => setSenha(event.target.value)}
            name="Senha"
            id="login__senha" />

          <select className="Empresas_abre"  value onChange name="IdEmpresa" id="">
            <option value="" disabled selected>Empresa</option>
            <option value="empr" >Drogasil</option>
          </select>

        <button className='BotãoLogin' type="submit">Login</button>
      </form>
      <div className='Div_Matrix'>
        <h2 className='CorAzul'>FAÇA SUA ESCOLHA</h2>
        <h2 className='CorVermelha'>, SAIA DA MATRIX</h2>
      </div>
      <Pirulas />
    </main>
    </div >
  );
}
