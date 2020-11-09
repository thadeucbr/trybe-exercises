import React, { Component } from 'react';
import Pokemon from './pokemonk'
import './pokedex.css'
class Pokedex extends Component {
    render() {
        return (
            <div className= 'content'>
                {this.props.value.map(pokemon => <Pokemon value = {pokemon} />)}
            </div>
        )
    }
}

export default Pokedex