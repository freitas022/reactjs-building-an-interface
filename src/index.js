import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createContext } from "react";

export const TreeContext = createContext();

const trees = [
  { id: 1, type: "Maple" },
  { id: 2, type: "Oak" },
  { id: 3, type: "Family" },
  { id: 4, type: "Component" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreeContext.Provider value={{ trees }}>
    <App />
  </TreeContext.Provider>
);
