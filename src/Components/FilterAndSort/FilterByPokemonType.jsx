import React from 'react';

const FilterByPokemonType = ({ pokemonType }) => {
    return <button className={`pokemon-type-styles ${pokemonType.name}`}>{pokemonType.name}</button>;
};

export default FilterByPokemonType;
