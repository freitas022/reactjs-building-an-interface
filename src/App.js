import { createContext } from "react";
import "./App.css";

export const TreeContext = createContext();

const trees = [
  { id: 1, type: "Maple" },
  { id: 2, type: "Oak" },
  { id: 3, type: "Family" },
  { id: 4, type: "Component" },
];

function App() {

  return (
    <>
      <TreeContext.Provider value={{ trees }}>
        <h1>Árvores: </h1>
        {trees.map(t => (
          <p key={t.id}>{t.type}</p>
        ))}
      </TreeContext.Provider>
    </>
  );
}

export default App;
