import React, { useContext } from 'react';
import Pokemon from './Pokemon';
import { PokemonContext } from '../App';
import PokemonTypeHeading from './PokemonTypeHeading';
import PokemonSkeleton from './PokemonSkeleton';
import NumberOfPokemon from './NumberOfPokemon';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PokemonList = () => {
    const { pokemonData, searchInput, isLoading } = useContext(PokemonContext);

    return (
        <>
            <h2 className="mt-8 text-center text-3xl leading-[52px]">
                {isLoading ? 'Loading...' : <PokemonTypeHeading />}
            </h2>

            <h3 className="mx-auto mb-8 mt-4 max-w-sm px-4 text-center text-2xl">
                {isLoading ? <Skeleton /> : <NumberOfPokemon />}
            </h3>

            <section className="grid grid-cols-2 gap-4 px-4 pb-8 text-center md:grid-cols-3 lg:grid-cols-6">
                {isLoading && <PokemonSkeleton skeletonItems={18} />}

                {pokemonData
                    .filter((pokemon) => pokemon.name.match(new RegExp(searchInput, 'i')))
                    .map((pokemon) => {
                        return <Pokemon key={crypto.randomUUID()} pokemon={pokemon} />;
                    })}
            </section>
        </>
    );
};

export default PokemonList;
