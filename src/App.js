import { useReducer } from "react";
import "./App.css";

function App() {

  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);

  return (
    <>
    <button on onClick={() => setNumber(1)}>{number}</button>
    </>
  );
}

export default App;
