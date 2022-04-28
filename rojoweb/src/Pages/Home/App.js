import '../../assets/css/Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { parseJwt } from '../../Services/auth';
import Logo from '../../components/Logo/Logo.js';
import Pirulas from '../../components/Pirulas/Pirulas.js';
import Helmet from 'react-helmet';
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin.jsx';

//icons:
//import * as GIIcons from 'react-icons/gi'
import * as Aiicons from 'react-icons/ai'



export default function Login() {

  //States
  const [email, setEmail] = useState('matheusmarthis@drogasil.com');
  const [senha, setSenha] = useState('123456789');
  const [MensagemErro, SetMensagemErro] = useState('');
  const [isLoding, setIsLoding] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  let navigate = useNavigate();


function MostrarSenha() {
  var password = document.getElementById('password')
   if (password.type == "password") {
     password.type = "text";
     setMostrar(true);
   }else {
     password.type = "password"
     setMostrar(false)
   }
}


  function FazerLogin(event){

    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
   axios.post('http://localhost:5000/api/Login', {
  //  axios.post('http://35.174.225.157/api/Login', {
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

          navigate("/CadastroEvento")

        }

      }
      )

      .catch(erro => console.log(erro))
  }

  
  return (
    <div>
      <Helmet title="Projeto Rojo - Login" />
      <main className='mano'>
        <div className="cima">
          <HeaderLogin />
          <Logo />
        </div>

        <form onSubmit={FazerLogin} action="" className="login">

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
            id="password"/>
          {
            mostrar === false && (
              <Aiicons.AiOutlineEyeInvisible style={{color: "white", width: "2em",  position: "absolute", margin: "0 17em", padding: "0px 0px 21px", cursor: "pointer"}} onClick={MostrarSenha} />
            )
          }
          {
              mostrar === true &&(
                <Aiicons.AiOutlineEye style={{color: "red", width: "2em", position: "absolute", margin: "0 17em", padding: "0px 0px 21px", cursor: "pointer"}} onClick={MostrarSenha} />
              )
          }

          <button className='BotãoLogin' type="submit">Login</button>
        </form>
        <div className='Div_Matrix'>
          <h2 className='CorAzul'>FAÇA SUA ESCOLHA</h2>
          <h2 className='CorVermelha'>, SAIA DA MATRIX</h2>
        </div>
        <Pirulas />
      </main>
    </div>
  );
}
