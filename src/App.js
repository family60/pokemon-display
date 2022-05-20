import './app.scss';
import {useState} from "react";
import Axios from "axios";//this is used for api calls 
import PokeName from './components/PokeName';
import Sprite from './components/Sprite';
import Stats from './components/Stats';
import Type from './components/Type';
import "bootstrap/dist/css/bootstrap.min.css";
import pokeball from './images/pokeball.png';

function App() {

  //use state for name of pokemon, default set to empty string
  const [pokemonName, setPokemonName] = useState("");
  //use state for currnet pokemon's state, relating to information about its name, species, sprite, etc. (properties are set default to empty string)
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    sprite: "",
    shinySprite: "",
    baseStatTotal: "",
    health: "",
    attack: "",
    defence: "",
    specialAttack: "",
    specialDefence: "",
    speed: "",
    primaryPokemonType: "",
    secondaryPokemonType: ""
  });

  //function that when called, will fetch data from pokeapi and attempt to set pokemon data
  const searchPokemon = () =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response);
      try{//since pokeapi always returns types as an array (even if the pokemon is single typed)
        if( response.data.types.length > 1){//if the length is > 1 (meaning the pokemon is double typed)
          console.log("Great Success");//professional debugging skills
          setPokemon({//set the pokemon's properties accordingly
            name: pokemonName,
            species: response.data.species.name,
            sprite: response.data.sprites.front_default,
            shinySprite: response.data.sprites.front_shiny,
            baseStatTotal: response.data.stats[0].base_stat + response.data.stats[1].base_stat + response.data.stats[2].base_stat + response.data.stats[3].base_stat + response.data.stats[4].base_stat + response.data.stats[5].base_stat,
            health: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defence: response.data.stats[2].base_stat,
            specialAttack: response.data.stats[3].base_stat,
            specialDefence: response.data.stats[4].base_stat,
            speed: response.data.stats[5].base_stat,
            primaryPokemonType: response.data.types[0].type.name,
            secondaryPokemonType: response.data.types[1].type.name})
          console.log(pokemon.secondaryPokemonType)//more professional debugging skills
        } else {//otherwise
          setPokemon({//set the pokemon's properties accordingly, apart from secondaryPokemonType property (which will be left as an empty string)
            name: pokemonName,
            species: response.data.species.name,
            sprite: response.data.sprites.front_default,
            shinySprite: response.data.sprites.front_shiny,
            baseStatTotal: response.data.stats[0].base_stat + response.data.stats[1].base_stat + response.data.stats[2].base_stat + response.data.stats[3].base_stat + response.data.stats[4].base_stat + response.data.stats[5].base_stat,
            health: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defence: response.data.stats[2].base_stat,
            specialAttack: response.data.stats[3].base_stat,
            specialDefence: response.data.stats[4].base_stat,
            speed: response.data.stats[5].base_stat,
            primaryPokemonType: response.data.types[0].type.name
          });
        }
      }catch(err){//catch the error and log it in the console 
        console.log(err);
      }
      
      /*
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        sprite: response.data.sprites.front_default,
        baseStatTotal: response.data.stats[0].base_stat + response.data.stats[1].base_stat + response.data.stats[2].base_stat + response.data.stats[3].base_stat + response.data.stats[4].base_stat + response.data.stats[5].base_stat,
        primaryPokemonType: response.data.types[0].type.name
      });
      */
      }
    );
  };

  return (
    <div className="App">

      <div className='main-header'>
        <img src={pokeball} className='img-fluid'/>
        <h1 className='header'>Hello! This is Pokemon Project-v3</h1>
      </div>

      <input type="text" placeholder="Search Pokemon..." onChange={(event) =>{
            setPokemonName(event.target.value);
        }} className="form-control"></input>
      <button type="submit" onClick={searchPokemon} className="btn-outline-danger">Search</button>

      <div className="display-pokemon">
        <PokeName name={pokemon.name}/>
        <Sprite sprite={pokemon.sprite} shinySprite={pokemon.shinySprite}/>
        <Stats baseStatTotal={pokemon.baseStatTotal} health={pokemon.health} attack={pokemon.attack} defence={pokemon.defence} specialAttack={pokemon.specialAttack} specialDefence={pokemon.specialDefence} speed={pokemon.speed}/>
        <Type primaryType={pokemon.primaryPokemonType} secondaryType={pokemon.secondaryPokemonType}/>
      </div>
      
    </div>
  );
}

export default App;
