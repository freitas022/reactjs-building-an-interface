import { useContext } from "react";
import { TreeContext } from "../src/index";
import "./App.css";

function App() {

  const { trees } = useContext(TreeContext);

  return (
    <>
      <h1>Árvores: </h1>
      {trees.map(tree => (
        <li key={tree.id}>{tree.type}</li>
        ))
      }
    </>
  );
}

export default App;