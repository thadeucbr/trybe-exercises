import React, { Component } from 'react';
import './pokemon.css'
class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.value
        return (
            <div className="content">
                <div className="pokemon-info">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <div className="content-image">
                    <img src={image} alt="fotos de pikachu"></img>
                </div>
            </div>
        )
    }
}

export default Pokemon