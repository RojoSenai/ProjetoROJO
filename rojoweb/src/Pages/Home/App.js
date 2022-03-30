import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Login() {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [MensagemErro, setMensagemErro] = useState('');
  const [Islogind, setIslogind] = useState(false);
<<<<<<< HEAD
  
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
=======



  function App() {
    return (
      <div className="App">
        <main>
          <section className="app-header">
            <h1>aaaa</h1>
          </section>
        </main>
      </div>
    )
  }
}
>>>>>>> 4895d8fb32c2d85c5cb5415fa8753893cc1e135c
