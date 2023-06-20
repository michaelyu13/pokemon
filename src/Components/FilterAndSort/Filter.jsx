import React from 'react';
import FilterByPokemonType from './FilterByPokemonType.jsx';
import { POKEMON_TYPES } from '../../data/PokemonTypes.jsx';

const Filter = () => {
    return (
        <>
            <span className="mb-2 block font-bold">Filter By Pokémon Type:</span>
            <div className="flex flex-wrap gap-4 md:gap-x-8 lg:gap-x-7">
                {POKEMON_TYPES.sort((a, b) => (a.name > b.name ? 1 : -1)).map((pokemonType) => {
                    return <FilterByPokemonType key={pokemonType.name} pokemonType={pokemonType} />;
                })}
            </div>
        </>
    );
};

export default Filter;
