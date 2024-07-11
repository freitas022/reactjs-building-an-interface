import { useReducer } from "react";
import "./App.css";

const initalState = {
  message: "Olá!",
};

function reducer(state, action) {
  switch (action.type) {
    case "patrao":
      return {
        message: "Fala meu patrão!",
      };
    case "diretor":
      return {
        message: "Fala meu diretor!",
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <p>Mensagem: {state.message}</p>
      <button onClick={() => dispatch({type: "diretor"})}>diretor</button>
      <button onClick={() => dispatch({type: "patrao"})}>patrao</button>
    </>
  );
}

export default App;
