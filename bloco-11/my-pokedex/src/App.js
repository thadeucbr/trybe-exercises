import Pokedex from './pokedex'
import pokemons from './data'
function App() {
  return (
    <Pokedex value={pokemons} />
  )
}

export default App;