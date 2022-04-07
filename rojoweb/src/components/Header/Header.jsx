import React, { Component } from "react";
import Rojologo from '../../assets/img/Rojo_imagem.png';
import '../../assets/css/CadastrarEmpresa.css';
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
                    <Link to="/EmpresaCor"className="Names_a">CadastrarCor</Link>
                    <Link to="/CadastrarUserAdm" className="Names_a">Cadastrar  Usuario</Link>
                    <Link to="/CadastrarEmpresa" className="Names_a">Cadastrar empresa</Link>
                    <Link to="/CadastroEvento" className="Names_a">Cadastrar evento</Link>
                    <Link to="/" className="Names_a" onClick={this.logout}>Sair</Link>
                </div>
            </div>
        )
    }
}

export default Cabeca

