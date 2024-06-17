import './App.css';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <label>Click here to update status</label>
      <input type="checkbox" value={status} onChange={() => setStatus(!status)} />
      <p>{status ? "Ok" : "Not implemented"}</p>
    </div>
  )
}

export default App;
