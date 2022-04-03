import '../../assets/css/CadastroCor.css';
import Logo from '../../components/Logo/Logo.js'
import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
//import axios from 'axios';




export default function Login() {
  const [Cor1, setCor1] = useState('');
  const [Cor2, setCor2] = useState('');
  const [Cor3, setCor3] = useState('');
  const [Logo_Imagem, setLogo] = useState('');
  const [Banner, setBanner] = useState('');
  const [Islogind, setIslogind] = useState(false);


  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastrat Cor" />
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
            name="Logo_Img"
            id="Cadastro_cor3" />

          <input
            className="Imput"
            placeholder="Banner"
            type="Image"
            name="Banner"
            id="Cadastro_cor3" />

        </form>


      </div>
    </div>
  );
}