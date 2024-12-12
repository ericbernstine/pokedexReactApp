import { useState } from 'react';
import '../App.css';
import pokemonData from '../data/pokedex.json';

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState(pokemonData.pokemon);


  const toggleFormVisibility = () => {
    const form = document.querySelector('.addFormCollapse');
    form.classList.toggle('visible');
  };

  const removePokemon = (id) => {
    const updatedList = pokemonList.filter((pokemon) => pokemon.id !== id);
    setPokemonList(updatedList);
  };

  const addPokemon = () =>{
    let newPokeName = document.querySelector('#name')
    let newPokeImg = document.querySelector('#img')
    let newPokeNum = document.querySelector('#pokeNum')
    let newPokeType = document.querySelector('#pokeType')
    let newPokeHeight = document.querySelector('#height')
    let newPokeWeight = document.querySelector('#weight')
    let newPoke = {
        name: newPokeName.value, 
        img: newPokeImg.value, 
        num: newPokeNum.value,
        type: newPokeType.value,
        height: newPokeHeight.value,
        weight: newPokeWeight.value
    }
    setPokemonList([newPoke, ...pokemonList])
    newPokeName.value = ''
    newPokeImg.value = ''
    newPokeNum.value = ''
    newPokeType.value = ''
    newPokeHeight.value = ''
    newPokeWeight.value = ''
  }


  return (
    <div>
      <h1>All Original 151 Pokemon!</h1>
      <div className="addForm">
        <h3>Add a Pokemon Here</h3>
        <button onClick={toggleFormVisibility}>Toggle Form</button>
        <div className="addFormCollapse">
          <form>
            <input type="text" name='name' id='name' placeholder="Name" />
            <input type="text" name='img' id='img' placeholder="Image URL" />
            <input type="text" name='pokeNum' id='pokeNum' placeholder="Pokedex Number" />
            <input type="text" name='pokeType' id='pokeType' placeholder="Pokemon Type" />
            <input type="text" name='height' id='height' placeholder="Height" />
            <input type="text" name='weight' id='weight' placeholder="Weight" />
            <button className='addButton' type="button" onClick={addPokemon}>Add</button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="pokemonTable">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Pokedex Number</th>
                <th>Pokemon Type</th>
                <th>Pokemon Stats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pokemonList.map((pokemon) => (
                <tr key={pokemon.id}>
                  <td>
                    <img src={pokemon.img} alt={pokemon.name} className="pokemonImage" />
                  </td>
                  <td>{pokemon.name}</td>
                  <td>#{pokemon.num}</td>
                  <td>{Array.isArray(pokemon.type) && pokemon.type.length > 1 ? pokemon.type.join(', ') : pokemon.type}</td>
                  <td>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                  </td>
                  <td>
                    <button onClick={() => removePokemon(pokemon.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;