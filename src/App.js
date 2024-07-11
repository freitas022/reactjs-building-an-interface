import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [name, setName] = useState("Matheus");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Parabéns, ${name}`)
  }, [name])

  useEffect(() => {
    console.log(
      `O usuário: ${
        admin ? "é admin" : "não é admin"
      }`
    )
  }, [admin])

  return (
    <section>
      <p>Parabéns, {name} !</p>
      <button onClick={() => setName("João")}>
          Veja o ganhador
      </button>
      <p>
        {admin ? "usuário logado" : "não logado"}
      </p>
      <button onClick={() => setAdmin(true)}>
          Entrar
      </button>
    </section>
  );
}

export default App;
