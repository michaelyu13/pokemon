import React from 'react';
import Sort from './Sort';

const PokemonFilter = ({ pokemonData, setPokemonData }) => {
    return (
        <section className="mx-4 mb-4 border border-solid border-slate-400 bg-slate-50 p-4 text-right">
            <Sort pokemonData={pokemonData} setPokemonData={setPokemonData} />
        </section>
    );
};

export default PokemonFilter;
