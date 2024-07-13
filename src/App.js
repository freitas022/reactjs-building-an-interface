import "./App.css";
import { useInput } from "./components/UseInput";

function App() {
  
  const [soundProps, resetSound] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${soundProps.value} sounds like ${colorProps.value}`);    
    resetColor("#000000");
    resetSound("");
  }

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" placeholder="Sound..."
          {... soundProps}
          />
        <input type="color"
          {... colorProps}
          />
        <button>add</button>
      </form>
    </>
  );
}

export default App;
