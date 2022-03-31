import '../../assets/css/Logo.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../../components/Logo/Logo';




export default function Login() {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [MensagemErro, setMensagemErro] = useState('');
  const [Islogind, setIslogind] = useState(false);
  
  return (
    <div>
      <main className='mano'>
        <div className ="cima">
          <Logo/>
        </div>

  <form action="" className="login">

        <input 
        className= "LOGIN_log"
        placeholder="Email:"
        type="text"
        name="Email"
        id="login__email"/>

          <input
            className= "LOGIN_log"
            placeholder="Senha:"
            type="password"
            name="Senha"
            id="login__senha"/>
   </form>
    <h2 className='CorAzul'>FAÇA SUA ESCOLHA</h2>
    <h2 className='CorVermelha'>, SAIA DA MATRIX</h2>
      </main>
    </div>
  );
}
