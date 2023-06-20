import React from 'react';

const PokemonType = ({ type }) => {
    const pokemonType = type.type.name;

    return <div className={`pokemon-type-styles ${pokemonType}`}>{pokemonType}</div>;
};

export default PokemonType;
