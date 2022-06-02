import { useState, useEffect } from 'react';
import Rojologo from '../../assets/img/Rojo_imagem.png';
import '../../assets/css/header.css';
import { Link } from 'react-router-dom';
import { parseJwt } from '../../Services/auth';
import burger from '../../assets/img/menu.svg';




export const Cabeca = ({ Cor }) => {


    // constructor(props) 
    //     super(props);
    //     this.state = {
    //         EmpresaCor: false,
    //         CadastrarUserAdm: false,
    //         CadastrarEmpresa: false,
    //         CadastroEvento: false,
    //         Evento: false,
    //     };
    //   }

    //logout
    function logout() {
        localStorage.removeItem('usuario-login');
        console.log('Você saiu');
    }
    // Cor = () => {

    // }

    function Visivel() {
        console.log("clique")
        let V = document.getElementById("Visivel")
        if(V.style.display === "none"){
            V.style.display = "flex" 
        }else{
            V.style.display = "none" 
        }
    }


    useEffect(() => {
        console.log(Cor)
    }, [])


    return (
        <div>
            {parseJwt().role == 1 ?
                <div className="ContainerRojo">
                    <div className="cLogo">
                        <Link to="/" onClick={logout}><img className="Rojinho" src={Rojologo} alt="Logo da empresa" /></Link>
                    </div>
                    <div id="Visivel" className='ContainerLetras1'>
                        {Cor == 'Cadastro Cor' ? <Link to="/EmpresaCor" className="Names_b">Cadastrar Cor</Link> : <Link to="/EmpresaCor" className="Names_a">Cadastrar Cor</Link>}
                        {Cor == 'Cadastrar User' ? <Link to="/CadastrarUserAdm" className="Names_b">Cadastrar  Usuario</Link> : <Link to="/CadastrarUserAdm" className="Names_a">Cadastrar  Usuario</Link>}
                        {Cor == 'Cadastrar Empresa' ? <Link to="/CadastrarEmpresa" className="Names_b">Cadastrar empresa</Link> : <Link to="/CadastrarEmpresa" className="Names_a">Cadastrar empresa</Link>}
                        {Cor == 'Cadastrar Evento' ? <Link to="/CadastroEvento" className="Names_b">Cadastrar evento</Link> : <Link to="/CadastroEvento" className="Names_a">Cadastrar evento</Link>}
                        {Cor == 'Evento' ? <Link to="/Evento" className="Names_b">Eventos</Link> : <Link to="/Evento" className="Names_a">Evento</Link>}
                        <Link to="/" className="Names_a" onClick={logout}>Sair</Link>
                    </div>
                        <img className="menu" onClick={Visivel} src={burger} alt="menu de barras" />
                </div>
                : parseJwt().role == 3 ?
                    <div className="ContainerRojo">
                        <div>
                            <Link to="/" onClick={logout}><img className="Rojinho" src={Rojologo} alt="Logo da empresa" /></Link>
                        </div>
                        <div className='ContainerLetras'>
                            {Cor == 'Cadastro Cor' ? <Link to="/EmpresaCor" className="Names_b">Cadastrar Cor</Link> : <Link to="/EmpresaCor" className="Names_a">Cadastrar Cor</Link>}
                            {Cor == 'Cadastrar Evento' ? <Link to="/CadastroEvento" className="Names_b">Cadastrar evento</Link> : <Link to="/CadastroEvento" className="Names_a">Cadastrar evento</Link>}
                            {Cor == 'Evento' ? <Link to="/Evento" className="Names_b">Eventos</Link> : <Link to="/Evento" className="Names_a">Eventos</Link>}
                            {Cor == 'Cadastrar User' ? <Link to="/CadastrarUserEmpresa" className="Names_b">Cadastrar  Usuario</Link> : <Link to="/CadastrarUserEmpresa" className="Names_a">Cadastrar  Usuario</Link>}
                            <Link to="/" onClick={logout} className="Names_a">Sair</Link>
                        </div>
                    </div> : null
            }



        </div>
    )
}



