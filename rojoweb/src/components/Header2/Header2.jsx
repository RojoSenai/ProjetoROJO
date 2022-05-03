import React, { Component } from "react";
import Rojologo from '../../assets/img/Rojo_imagem.png';
import '../../assets/css/CadastroUsuarioEmpresa.css';
import { Link } from 'react-router-dom';




class Cabeca extends Component {

    //logout
    logout = () => {
        localStorage.removeItem('usuario-login');
        console.log('Você saiu');
    }
    



    render() {

        return (
            <div className="ContainerRojo">
                <div>
                    <img className="Rojinho" src={Rojologo} alt="Logo da empresa" />
                </div>
                <div className='ContainerLetras'>
                    <Link to="/EmpresaCor" className="Names_a">Cor do App</Link>
                    <Link to="/Evento" className="Names_a">Eventos</Link>
                    <Link to="/CadastrarUserEmpresa" className="Names_a">Cadastrar  Usuario</Link>
                    <Link to="/" className="Names_a">Sair</Link>
                </div>
            </div>
        )
    }
}

export default Cabeca

