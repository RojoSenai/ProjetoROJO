import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { parseJwt, usuarioAutenticado } from './Services/auth';
//css
import './index.css';


//Imports de paginas
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/App';
import EmpresaCor from './Pages/EmpresaCor/EmpresaCor.jsx'
import CadastrarUserAdm from './Pages/CadastrarUserAdm/CadastrarUserAdm.jsx'
import CadastrarUserEmpresa from './Pages/CadastrarUserEmpresa/CadastrarUserEmpresa.jsx'
import CadastrarEmpresa from './Pages/CadastrarEmpresa/CadastarEmpresa.jsx'
import CadastroEvento from './Pages/CadastarEvento/CadastarEvento.jsx'
import Evento from './Pages/Eventos/Eventos.jsx'


const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Navigate to="/" />
      )
    }
  />
);

const PermissaoAdmEmp = ({ component: Component }) => (
  <Route
    render={(props) =>
      (usuarioAutenticado() && parseJwt().role === '3') ||  (usuarioAutenticado() && parseJwt().role === '1') ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Navigate to="/" />
      )
    }
  />
);

const routing = (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CadastrarUserAdm" element={<CadastrarUserAdm />} />
        <Route path="/CadastrarUserEmpresa" element={<CadastrarUserEmpresa />} />
        <Route path="/EmpresaCor" element={<EmpresaCor />} />
        <Route path="/CadastroEvento" element={<CadastroEvento />} />
        <Route path="/CadastrarEmpresa" element={<CadastrarEmpresa />} />
        <Route path="/Evento" element={<Evento />} />
        <Route path="*" element={<NotFound />} />
        {/* <Navigate to="/" /> */}
      </Routes>
  </Router>
)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(routing, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
