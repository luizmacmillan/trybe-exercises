import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    return (<div className="pokedex-body">
      {this.props.pokemons
        .map(pokemon => {
          const pokeWeight = `${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`;
          return (<div key={pokemon.id}>
            <Pokemon
            name={pokemon.name}
            type={pokemon.type}
            weight={pokeWeight}
            image={pokemon.image}
            />
          </div>);
        })}
    </div>)
  }
}

Pokedex.Weight = [ 
  PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeigh: {
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }.isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }).isRequired,
]

export default Pokedex;