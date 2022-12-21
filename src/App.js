import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>

     <div className="containerImput">
      <input
      type="text"
      placeholder="Digite seu cep..."      
      />

      <button className="buttonSearch">
        <FiSearch size={25}  color="#fff" />
      </button>
     </div>

     <main className="main">
      <h2>CEP: 323729837987</h2>

      <span>Rua Teste algum</span>
      <span>Complemento: complemento</span>
      <span>Vila rosa</span>
      <span>Cabo frio - RJ</span>
     </main>
    </div>
  );
}

export default App;
