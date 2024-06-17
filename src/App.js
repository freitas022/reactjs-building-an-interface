import './App.css';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState("Not delivered");
  return (
    <div>
      <h1>The status is: {status}</h1>

      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  )
}

export default App;
