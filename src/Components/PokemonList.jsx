import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemonData, searchInput }) => {
    return (
        <div className="grid grid-cols-2 gap-4 px-4 pb-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {pokemonData
                .filter((pokemon) => pokemon.name.match(new RegExp(searchInput, 'i')))
                .map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />;
                })}
        </div>
    );
};

export default PokemonList;
