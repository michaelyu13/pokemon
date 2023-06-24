import React, { useContext } from 'react';
import FilterByPokemonType from './FilterByPokemonType.jsx';
import { PokemonContext } from '../../App';
import { POKEMON_TYPES } from '../../data/PokemonTypes.jsx';

const Filter = () => {
    const { setSelectedFilterByType } = useContext(PokemonContext);

    const handleShowAllTypes = () => {
        setSelectedFilterByType(null);
    };

    return (
        <>
            <span className="mb-2 block font-bold">Filter By Pokémon Type:</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-x-8 lg:gap-x-7">
                <button className="pokemon-type-styles bg-blue-700" onClick={handleShowAllTypes}>
                    All Types
                </button>

                {POKEMON_TYPES.sort((a, b) => (a.name > b.name ? 1 : -1)).map((pokemonType) => {
                    return <FilterByPokemonType key={pokemonType.name} pokemonType={pokemonType} />;
                })}
            </div>
        </>
    );
};

export default Filter;
