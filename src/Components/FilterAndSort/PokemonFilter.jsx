import React from 'react';
import Search from './Search';
import Sort from './Sort';

const PokemonFilter = ({ pokemonData, setPokemonData, setSearchInput }) => {
    return (
        <section className="mx-4 mb-4 flex justify-between border border-solid border-slate-400 bg-slate-50 p-4 text-right">
            <Search setSearchInput={setSearchInput} />
            <Sort pokemonData={pokemonData} setPokemonData={setPokemonData} />
        </section>
    );
};

export default PokemonFilter;
