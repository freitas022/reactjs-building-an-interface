import { useState } from "react";
import "./App.css";

function App() {
  {/*
    before

  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;

    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = "";
    color.current.value = "";
    
  }*/}

  {/**
    after

    */}

  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);    
    setColor("#000000");
    setSound("");
  }

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" placeholder="Sound..."
          value={sound}
          onChange={(e) => setSound(e.target.value)} />
        <input type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)} />
        <button>add</button>
      </form>
    </>
  );
}

export default App;
