import React, { Component } from "react";
import Rojologo from '../../assets/img/Rojo_imagem.png';
import '../../assets/css/Login.css';
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
                </div>
            </div>
        )
    }
}

export default Cabeca

