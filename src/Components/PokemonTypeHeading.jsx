import React, { useContext } from 'react';
import { PokemonContext } from '../App';

const PokemonTypeHeading = () => {
    const { selectedFilterByType } = useContext(PokemonContext);

    return (
        <>
            Showing all{' '}
            <span
                className={`${
                    selectedFilterByType === null
                        ? 'hidden'
                        : `${selectedFilterByType} mx-1 inline-block rounded px-4 py-2 text-center text-3xl capitalize text-slate-50`
                }`}
            >
                {selectedFilterByType}
            </span>{' '}
            Pokémon
        </>
    );
};

export default PokemonTypeHeading;
