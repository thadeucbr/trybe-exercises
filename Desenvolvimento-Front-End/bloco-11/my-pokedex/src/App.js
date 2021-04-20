import data from './data'
import Pokedex from './pokedex'
function App() {
  return (
    <div>
      <h1 className='title'>Pokedex</h1>
      <Pokedex value={data} />
    </div>
  )
}

export default App;