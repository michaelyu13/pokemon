import React from 'react';

const PokemonType = ({ type }) => {
    const pokemonType = type.type.name;

    return <div className={`mx-auto w-24 rounded bg-green-600 text-xl capitalize ${pokemonType}`}>{pokemonType}</div>;
};

export default PokemonType;
