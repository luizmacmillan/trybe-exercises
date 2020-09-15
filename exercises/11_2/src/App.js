import React from 'react';
import './App.css';
import Pokedex from './components/pokedex'
import pokemons from './data';

function App() {
  return (
    <div className="app-body">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
