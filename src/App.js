import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <>
    <ul>
      {data.map((user) => (
        <div key={user.id}>
          <li>Login: {user.login} <br /> Url: {user.url}</li>
        </div>
      ))}
    </ul>
    <button onClick={() => setData([])}>Remover dados</button>
    </>
  );
}

export default App;
