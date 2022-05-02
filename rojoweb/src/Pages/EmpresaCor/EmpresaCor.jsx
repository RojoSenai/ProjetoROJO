import '../../assets/css/CadastroCor.css';
//import Logo from '../../components/Logo/Logo.js'
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

  console.log('agora a cor é ' + Cor1);
  function Mudarcor() {
    let colorPicker = document.getElementById("Cadastro_cor1");
    let box = document.getElementById("box");
    let burguer = document.getElementById("burguer")
    let burguer2 = document.getElementById("burguer2")
    let burguer3 = document.getElementById("burguer3")
    let menub = document.getElementById("menub")
    let borro = document.getElementById("borro")

    // let output = document.getElementById("output");

    box.style.backgroundColor = colorPicker.value;
    burguer.style.backgroundColor = colorPicker.value;
    burguer2.style.backgroundColor = colorPicker.value;
    burguer3.style.backgroundColor = colorPicker.value;
    menub.style.backgroundColor = colorPicker.value;
    borro.style.backgroundColor = colorPicker.value
    setCor1(colorPicker.value)

    colorPicker.addEventListener("input", function (event) {
      box.style.backgroundColor = event.target.value;
      burguer2.style.backgroundColor = event.target.value;
      burguer3.style.backgroundColor = event.target.value;
      menub.style.backgroundColor = event.target.value;
    }, false);

    let colorPicker2 = document.getElementById("Cadastro_cor2");
    let Header = document.getElementById("Header");

    Header.style.backgroundColor = colorPicker2.value


    let colorPickerFonte = document.getElementById("Cadastro_cor3");
    let letras = document.getElementById("letras");

    letras.style.color = colorPickerFonte.value


    // colorPicker.addEventListener("change", function(event) {
    // output.innerText = "Cor escolida " + colorPicker.value + ".";
    // }, false);
  }

  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastrar Cor" />
      <div className='container'>
        <Cima />

        <div className='ContFormProt'>
          <form action="" className='ConteinerForm'>

            <div className='ImputCor'>
              <label className='NomeCor' for="ImputCor">Cor1:</label>
              <input
                onChange={(event) => Mudarcor()}
                className="ImputCor"
                type="Color"
                name="Cor1"
                id="Cadastro_cor1" />
            </div>

            <div>
              <label className='NomeCor' for="ImputCor">Cor2:</label>
              <input
                className="ImputCor"
                onChange={(event) => Mudarcor()}
                type="Color"
                name="Cor2"
                id="Cadastro_cor2" />
            </div>

            <div>
              <label className='NomeCor' for="ImputCor">Fonte:</label>
              <input
                className="ImputCor"
                onChange={(event) => Mudarcor()}
                type="Color"
                name="Cor3"
                id="Cadastro_cor3" />
            </div>

            <div>
              <div className="EventFile">
                <label className="ImputFile_" for="Logo">Logo:</label>
              </div>
              <input
                className="ImputFile"
                placeholder="Logo:"
                type="file"
                name="Logo_Img"
                id="Logo" />
            </div>

            <div>
              <div className="EventFile">
                <label className="ImputFile_" for="Banner">Banner:</label>
              </div>
              <input
                className="ImputFile"
                placeholder="Banner"
                type="file"
                name="Banner"
                id="Banner" />
            </div>

            <button className='BotãoCor' type="submit">Cadastrar</button>
          </form>

          {/* ------------------------------------------------PROTOTIPOS----------------------------------------------------------------------- */}
          <div className='ContLogoProt'>
            <div className="ContainerLogo_">
              <img className="Rojo_" src={Rojologo} alt="Logo da empresa" />
              <img className="Letra-logo_" src={LetraRojo} alt="Letra giratoria em volta do logo" />
            </div>

            <div className='PrototiposConteiner'>
              <div id="box" className='PrototipoEsq'>
                <div id="Header" className='HaderProt'>
                  <div className='ContHader'>

                    <div className='ContAmbur'>
                      <div id="burguer" className='Amburguer' />
                      <div id="burguer2" className='Amburguer' />
                      <div id="burguer3" className='Amburguer' />
                    </div>

                    <div className='ContPer'>
                      <div className='FotoPerfil' />
                    </div>

                  </div>
                </div>

                <div className='BannerProt' />

                <div className='MenuCont'>

                  <div className='BolinhaAlinhada'>
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                  </div>

                  <div className='BolinhaAlinhada'>
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                  </div>

                  <div className='BolinhaAlinhada'>
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                  </div>

                </div>

              </div>

              {/* -----------------------------------------PROTOTIPO DA DIREITA----------------------------------------------------------------------------------------------- */}

              <div id="borro" className='PrototipoDir'>
                <div id="menub" className='DentroMenuB'>
                  <div id="letras" className='ContMenuDentro'>

                    <div className='CimaMenu'>
                      <p>Menu</p>
                      <p>X</p>
                    </div>

                    <div className='BaixoMenu'>
                      <p>Meus Eventos</p>
                      <p>Agenda</p>
                      <p>Documentos</p>
                    </div>
                  </div>

                </div>

                <div className='BorroCinza' />

              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}
