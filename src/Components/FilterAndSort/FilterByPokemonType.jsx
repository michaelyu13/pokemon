import React, { useContext } from 'react';
import { PokemonContext } from '../../App';

const FilterByPokemonType = ({ pokemonType }) => {
    const { setSelectedFilterByType } = useContext(PokemonContext);

    const handleFilterByType = (e) => {
        setSelectedFilterByType(e.target.value);
    };
    return (
        <button
            className={`pokemon-type-styles ${pokemonType.name}`}
            onClick={handleFilterByType}
            value={pokemonType.name}
        >
            {pokemonType.name}
        </button>
    );
};

export default FilterByPokemonType;
