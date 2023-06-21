import React, { useContext } from 'react';
import Pokemon from './Pokemon';
import { PokemonContext } from '../App';
import PokemonSkeleton from './PokemonSkeleton';

const PokemonList = () => {
    const { pokemonData, searchInput, isLoading } = useContext(PokemonContext);

    return (
        <section className="grid grid-cols-2 gap-4 px-4 pb-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {isLoading && <PokemonSkeleton skeletonItems={18} />}

            {pokemonData
                .filter((pokemon) => pokemon.name.match(new RegExp(searchInput, 'i')))
                .map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />;
                })}
        </section>
    );
};

export default PokemonList;
