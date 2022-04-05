import React from 'react';
import ReactDOM from 'react-dom';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//css
import './index.css';


//Imports de paginas
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/App';
import EmpresaCor from './Pages/EmpresaCor/EmpresaCor.jsx'
import CadastrarUserAdm from './Pages/CadastrarUserAdm/CadastrarUserAdm.jsx'


const routing = (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CadastrarUserAdm" element={<CadastrarUserAdm />} />
        <Route path="/EmpresaCor" element={<EmpresaCor />} />
        <Route path="/notfound" element={<NotFound />} />
        {/* <Navigate to="/" /> */}
      </Routes>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
