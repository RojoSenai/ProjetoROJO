import '../../assets/css/CadastroCor.css';
import Logo from '../../components/Logo/Logo.js'
import Rojologo from '../../assets/img/Rojo_imagem.png';
import LetraRojo from '../../assets/img/letter.svg';
import { useState, useEffect } from 'react';
import Cima from '../../components/Header/Header.jsx';
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
      <div className='container'>
        <div className="ContainerLogo_">
          <img className="Rojo_" src={Rojologo} alt="Logo da empresa" />
          <img className="Letra-logo_" src={LetraRojo} alt="Letra giratoria em volta do logo" />
        </div>

        <form action="" className='ConteinerForm'>

          <div className='ImputCor'>
            <label className='NomeCor' for="ImputCor">Cor1:</label>
            <input
              className="ImputCor"
              type="Color"
              name="Cor1"
              id="Cadastro_cor1" />
          </div>

          <div>
            <label className='NomeCor' for="ImputCor">Cor2:</label>
            <input
              className="ImputCor"
              type="Color"
              name="Cor2"
              id="Cadastro_cor2" />
          </div>

          <div>
            <label className='NomeCor' for="ImputCor">Fonte:</label>
            <input
              className="ImputCor"
              type="Color"
              name="Cor3"
              id="Cadastro_cor3" />
          </div>

          <div>
          <label className="ImputFile_" for="Logo">Logo:                                     </label>
          <input
            className="ImputFile"
            placeholder="Logo:"
            type="file"
            name="Logo_Img"
            id="Logo" />
          </div>

          <div>
          <label className="ImputFile_" for="Banner">Banner:                                </label>
          <input
            className="ImputFile"
            placeholder="Banner"
            type="file"
            name="Banner"
            id="Banner" />
          </div>

        </form>

      </div>
    </div >
  );
}