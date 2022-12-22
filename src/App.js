import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input,setInput] = useState('');
  const [cep,setCep] = useState('');

  const handleSearch = async () => {
    //01001000/json/

    if (input === '') {
      alert("Preencha algum cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data)
      setCep(response.data)
      setInput('')

    }catch{
      alert("Erro ao buscar. Verifique o que digitou")
      setInput('')

    }
  }

  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>

     <div className="containerInput">
      <input
      type="text"
      placeholder="Digite seu cep..."
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25}  color="#fff" />
      </button>
     </div>


    {Object.keys(cep).length > 0 && (
      <main className="main">
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      
      <span>{cep.bairro}</span>
      <span>{cep.localidade}-{cep.uf}</span>
     </main>

    )}
     
    </div>
  );
}

export default App;
