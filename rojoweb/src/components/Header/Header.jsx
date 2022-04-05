import React, { Component } from "react";
import Rojologo from '../../assets/img/Rojo_imagem.png';
import LetraRojo from '../../assets/img/letter.svg';
import '../../assets/css/CadastroUsuarioEmpresa.css';
import { Link } from 'react-router-dom';

//logout
// logout = () => {
//     localStorage.removeItem('UsuarioTk');
//     console.log('Feito o logout');
// }



class Cabeca extends Component {

    render() {

        return (
            <div className="ContainerRojo">
                <div>
                    <img className="Rojinho" src={Rojologo} alt="Logo da empresa" />
                </div>
                    <div className='ContainerLetras'>
                    <Link to="/"><a href="" className="Names_a">Eventos</a></Link>  
                    <Link to="/CadastrarUserAdm"><a href="" className="Names_a">Cadastrar  Usuario</a></Link>
                    <Link to="/CadastrarEmpresa"><a href="" className="Names_a">Cadastrar empresa</a></Link>
                    </div>
            </div>
        )
    }
}

export default Cabeca

