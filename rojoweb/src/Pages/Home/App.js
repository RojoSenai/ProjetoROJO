import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Login() {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [MensagemErro, setMensagemErro] = useState('');
  const [Islogind, setIslogind] = useState(false);
  
  return (
    <div className="App">
      <main>
      <header className="App-header">
        <h1>aaaa</h1>
      </header>
      </main>
    </div>
  );
}
