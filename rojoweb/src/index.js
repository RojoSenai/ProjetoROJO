import React from 'react';
import ReactDOM from 'react-dom';

//import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//css
import './index.css';


//Imports de paginas
//import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/App';
// import EmpresaCor from './Pages/EmpresaCor/EmpresaCor.Jsx'
import CadastrarUserAdm from './Pages/CadastrarUserAdm/CadastrarUserAdm.jsx'


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


// const routing = (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/Empresacor" component={EmpresaCor} />
//         <Route path="/notfound" component={NotFound} />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   </Router>
// )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
