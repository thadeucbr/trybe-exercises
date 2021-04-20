import './pokedex.css'
const { Component } = require("react");
const { default: Pokemon } = require("./pokemon");
class Pokedex extends Component {
    render(){
        return (
            <div className='pokedex'>
                {this.props.value.map(pokemons => <Pokemon value={pokemons} key={pokemons.name} />)}
            </div>
        )
    }
}

export default Pokedex;