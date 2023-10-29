import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { PokemonContext } from '../App';
import InfoMessage from './InfoMessage';
import Pokemon from './Pokemon';
import PokemonSkeleton from './PokemonSkeleton';
import PokemonTypeHeading from './PokemonTypeHeading';

const PokemonList = () => {
    const { pokemonData, searchInput, isLoading } = useContext(PokemonContext);

    return (
        <>
            <section className="flex flex-col items-center">
                <h2 className="mb-4 text-3xl leading-[52px]">{isLoading ? 'Loading...' : <PokemonTypeHeading />}</h2>

                <h3 className="mb-8 px-4 text-2xl">
                    {isLoading ? <Skeleton width={280} height={32} /> : <InfoMessage />}
                </h3>
            </section>

            <motion.section layout className="flex flex-wrap justify-center gap-4 px-4 pb-8">
                {isLoading && <PokemonSkeleton skeletonItems={18} />}

                <AnimatePresence>
                    {pokemonData
                        .filter((pokemon) => pokemon.name.match(new RegExp(searchInput, 'i')))
                        .map((pokemon) => {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
                        })}
                </AnimatePresence>
            </motion.section>
        </>
    );
};

export default PokemonList;
