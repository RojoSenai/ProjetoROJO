import '../../assets/css/CadastrarEmpresa.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { parseJwt } from '../../Services/auth';
import Logo from '../../components/Logo/Logo.js';
import Cima from '../../components/Header/Header.jsx';
//import Pirulas from '../../components/Pirulas/Pirulas.js';
import Helmet from 'react-helmet';

export default function Empresa() {

  //States
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeFantasia, setNome] = useState('');
  const [razaoSocial, setRazao] = useState('');
  const [fundaçãoAniversario, setFundacao] = useState(new Date());
  const [endereço, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [TotalFuncionarios, setTotalFuncionarios ] = useState('');
 // const [IdEmpresa, setIdEmpresa] = useState([]);
//const [MensagemErro, SetMensagemErro] = useState('');
  const [isLoding, setIsLoding] = useState(false);
    
    //Cadastrar empresa
    function CadastrarEmpresa(event) {
        event.preventDefault();

        setIsLoding(true)

      //tirando função padrão da página
      event.preventDefault();

      //chamando api
        let empresa = {
          cnpj : cnpj,
          email: email,
          senha: senha,
          nomeFantasia : nomeFantasia,
          razaoSocial :razaoSocial,
          fundaçãoAniversario :fundaçãoAniversario,
          endereço : endereço,
          telefone : telefone,
          TotalFuncionarios : TotalFuncionarios 
        //  IdEmpresa: IdEmpresa,
        }

        axios.post('http://localhost:5000/api/Empresa', empresa, {

            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then((resposta) => {
                if (resposta.status === 201) {
                  setIsLoding(false)
                    console.log('Empresa cadastrada');

                    // setCnpj('');
                    // setEmail('');
                    // setSenha('');
                    // setNome('');
                    // setRazao('');
                    // setFundacao();
                    // setEndereco('');
                    // setTelefone('');
                    // setTotalFuncionarios('');
                }

                

            })

            .then(erro => console.log(erro))
    }


  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastro Usuario ADM" />
      <main className='mano'>
        <div className="cima">
        <Cima />
          <Logo />
        </div>

        <form onSubmit={CadastrarEmpresa} action="" className="cadastrar_usu">
        
        <input
            className="Name_Adm"
            placeholder="Cnpj:"
            type="text"
            onChange={(event) => setCnpj(event.target.value)}
            name="nome"
            id="cadastar__Nome" />


          <input
            className="Name_Adm"
            placeholder="Nome:"
            type="text"
            onChange={(event) => setNome(event.target.value)}
            name="nome"
            id="cadastar__Nome" />


          <input
            className="Name_Adm"
            placeholder="Email:"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            name="Cnpj"
            id="cadastar__Cnpj" />

          <input
            className="Name_Adm"
            placeholder="Senha:"
            type="password"
            onChange={(event) => setSenha(event.target.value)}
            name="Senha"
            id="cadastar__Senha" />

          <input
            className="Name_Adm"
            placeholder="RazaoSocial:"
            type="text"
            onChange={(event) => setRazao(event.target.value)}
            name="Senha"
            id="cadastar__Senha" />


          <input
            className="Name_Adm"
            placeholder="Fundação:"
            type="date"
            onChange={(event) => setFundacao(event.target.value)}
            name="Senha"
            id="cadastar__Senha" />

          <input
            className="Name_Adm"
            placeholder="Endereço:"
            type="text"
            onChange={(event) => setEndereco(event.target.value)}
            name="Senha"
            id="cadastar__Senha" />

          <input
            className="Name_Adm"
            placeholder="Telefone:"
            type="tel"
            onChange={(event) => setTelefone(event.target.value)}
            name="Senha"
            id="cadastar__Senha" />

          <input
            className="Name_Adm"
            placeholder="Total De Funcionarios:"
            type="number"
            onChange={(event) => setTotalFuncionarios(event.target.value)}
            name="Senha"
            id="cadastar__Senha" />

        <button className='BotãoCadastrarEmpresa' type="submit">Cadastrar</button>
      </form>
      {/* <div className='Div_Matrix'>
        <h2 className='CorAzul'>FAÇA SUA ESCOLHA</h2>
        <h2 className='CorVermelha'>, SAIA DA MATRIX</h2>
      </div>
      <Pirulas /> */}
    </main>
    </div >
  );
}
