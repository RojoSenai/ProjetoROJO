import React,{Component} from "react";
import Rojologo from '../../assets/Rojo_imagem.png';
import LetraRojo from '../../assets/letter.svg';
import '../../assets/css/Logo.css'


class Titulo extends Component{

   render(){

       return (
        <div className="ContainerLogo">
            <img className="Rojo" src={Rojologo} alt="Logo da empresa"/>
            <img className="Letra-logo" src={LetraRojo} alt="Letra giratoria em volta do logo" />
        </div>
       )
   }
}

export default Titulo