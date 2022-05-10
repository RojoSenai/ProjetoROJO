import React, { Component } from "react";
import Rojologo from '../../assets/img/Rojo_imagem.png';
import '../../assets/css/CadastrarEmpresa.css';
import '../../assets/css/CadastroUsuarioEmpresa.css';
import { Link } from 'react-router-dom';
import { parseJwt } from '../../Services/auth';




class Cabeca extends Component {

    //logout
    logout = () => {
        localStorage.removeItem('usuario-login');
        console.log('Você saiu');
    }



    render() {

        return (
            <div>
                {parseJwt().role == 1 ?
                    <div className="ContainerRojo">
                        <div>
                            <Link to="/" onClick={this.logout}><img className="Rojinho" src={Rojologo} alt="Logo da empresa" /></Link>
                        </div>
                        <div className='ContainerLetras1'>
                            <Link to="/EmpresaCor" className="Names_a">Cadastrar Cor</Link>
                            <Link to="/CadastrarUserAdm" className="Names_a">Cadastrar  Usuario</Link>
                            <Link to="/CadastrarEmpresa" className="Names_a">Cadastrar empresa</Link>
                            <Link to="/CadastroEvento" className="Names_a">Cadastrar evento</Link>
                            <Link to="/Evento" className="Names_a">Evento</Link>
                            <Link to="/" className="Names_a" onClick={this.logout}>Sair</Link>
                        </div>
                    </div>
                    : parseJwt().role == 3 ?
                    <div className="ContainerRojo">
                        <div> 
                        <Link to="/" onClick={this.logout}><img className="Rojinho" src={Rojologo} alt="Logo da empresa" /></Link>
                        </div>
                        <div className='ContainerLetras'>
                            <Link to="/EmpresaCor" className="Names_a">Cor do App</Link>
                            <Link to="/CadastroEvento" className="Names_a">Cadastrar evento</Link>
                            <Link to="/Evento" className="Names_a">Eventos</Link>
                            <Link to="/CadastrarUserEmpresa" className="Names_a">Cadastrar  Usuario</Link>
                            <Link to="/" onClick={this.logout} className="Names_a">Sair</Link>
                        </div>
                    </div> : null
                }



            </div>
        )
    }
}

export default Cabeca

