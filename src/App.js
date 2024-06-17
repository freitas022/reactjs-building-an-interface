import './App.css';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

function handleClick() {
  console.log("Obrigado pela sua avalição.")
}

const createArray = (lenght) => [
  ...Array(lenght)
];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "yellow" : "gray"}
    onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)} />
      ))}
    </>
  )
}

function App() {
  return <StarRating totalStars={5} />;
}

export default App;
