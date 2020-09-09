import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios'



function App() {

  const [pokemon,setPokemon] = useState([]);


  const getPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1050")
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getPokemon}>Catch Them All!</button>
      {
        pokemon.map((poke,i) => {
          return <p key={i}>{poke.name}</p>
        })
      }
    </div>
  );
}

export default App;

