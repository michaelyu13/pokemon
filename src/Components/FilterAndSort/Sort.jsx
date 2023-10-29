import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../App';

const Sort = () => {
    const { pokemonData, sortOrder, setSortOrder, setPokemonData } = useContext(PokemonContext);

    useEffect(() => {
        const sortFunctions = {
            'id-asc': (a, b) => a.id - b.id,
            'id-desc': (a, b) => b.id - a.id,
            'name-asc': (a, b) => a.name.localeCompare(b.name),
            'name-desc': (a, b) => b.name.localeCompare(a.name),
        };

        if (sortFunctions[sortOrder]) {
            const sortedPokemon = [...pokemonData].sort(sortFunctions[sortOrder]);
            setPokemonData(sortedPokemon);
        }
    }, [sortOrder]);

    const handleSort = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div>
            <label className="mx-auto mr-2 block font-bold md:inline" htmlFor="sort">
                Sort By:
            </label>
            <select
                className="border-styles h-8 p-1 text-center md:text-left"
                onChange={handleSort}
                name="sort"
                id="sort"
            >
                <option value="id-asc">ID (Asc)</option>
                <option value="id-desc">ID (Desc)</option>
                <option value="name-asc">Name (Asc)</option>
                <option value="name-desc">Name (Desc)</option>
            </select>
        </div>
    );
};

export default Sort;
