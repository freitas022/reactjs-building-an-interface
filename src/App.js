import './App.css';

function App({name}) {

  const people = ["Math", "Alex", "Maria"];
  console.log(people[1]);
  const [, , third] = ["Math", "Alex", "Maria"];
  // console.log(first);
  console.log(third);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {third}</h1>
      </header>
    </div>
  );
}

export default App;
