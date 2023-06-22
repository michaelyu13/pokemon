import React, { useContext } from 'react';
import Pokemon from './Pokemon';
import { PokemonContext } from '../App';
import PokemonSkeleton from './PokemonSkeleton';

const PokemonList = () => {
    const { pokemonData, searchInput, selectedFilterByType, isLoading } = useContext(PokemonContext);

    return (
        <>
            <h2 className="m-8 text-center text-3xl leading-[52px]">
                Showing all{' '}
                <span
                    className={`${
                        selectedFilterByType !== ''
                            ? `${selectedFilterByType} mx-1 inline-block rounded px-4 py-2 text-center text-3xl capitalize text-slate-50`
                            : 'hidden'
                    }`}
                >
                    {selectedFilterByType}
                </span>{' '}
                Pokémon
            </h2>
            <section className="grid grid-cols-2 gap-4 px-4 pb-8 text-center md:grid-cols-3 lg:grid-cols-6">
                {isLoading && <PokemonSkeleton skeletonItems={18} />}

                {pokemonData
                    .filter((pokemon) => pokemon.name.match(new RegExp(searchInput, 'i')))
                    .map((pokemon) => {
                        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
                    })}
            </section>
        </>
    );
};

export default PokemonList;
