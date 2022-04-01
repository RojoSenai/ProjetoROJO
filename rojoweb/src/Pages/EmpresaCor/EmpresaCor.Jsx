import '../../assets/css/CadastroCor.css';
import Logo from '../../components/Logo/Logo.js';
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function Login() {
  const [Cor1, setCor1] = useState('');
  const [Cor2, setCor2] = useState('');
  const [Cor3, setCor3] = useState('');
  const [Logo, setLogo] = useState('');
  const [Baner, setBaner] = useState('');
  const [Islogind, setIslogind] = useState(false);


  return (
    <div>
      <div>
        <div className="cima">
          <Logo />
        </div>

        <form action="" className="login">

          <input
            className="Imput"
            placeholder="Cor2:"
            type="Color"
            name="Cor1"
            id="Cadastro_cor1" />

          <input
            className="Imput"
            placeholder="Cor2:"
            type="Color"
            name="Cor2"
            id="Cadastro_cor2" />

          <input
            className="Imput"
            placeholder="Cor3:"
            type="Color"
            name="Cor3"
            id="Cadastro_cor3" />

          <input
            className="Imput"
            placeholder="Logo:"
            type="Image"
            name="Logo"
            id="Cadastro_cor3" />

          <input
            className="Imput"
            placeholder="Baner"
            type="Image"
            name="Baner"
            id="Cadastro_cor3" />

        </form>


      </div>
    </div>
  )




}