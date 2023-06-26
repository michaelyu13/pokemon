import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../App';

const Sort = () => {
    const { pokemonData, sortOrder, setSortOrder, setPokemonData } = useContext(PokemonContext);

    useEffect(() => {
        if (sortOrder === 'id-asc') {
            const idAscendingPokemon = [...pokemonData].sort((a, b) => a.id - b.id);
            setPokemonData(idAscendingPokemon);
        } else if (sortOrder === 'id-desc') {
            const idDescendingPokemon = [...pokemonData].sort((a, b) => b.id - a.id);
            setPokemonData(idDescendingPokemon);
        } else if (sortOrder === 'name-asc') {
            const nameAscendingPokemon = [...pokemonData].sort((a, b) => (a.name > b.name ? 1 : -1));
            setPokemonData(nameAscendingPokemon);
        } else if (sortOrder === 'name-desc') {
            const nameDescendingPokemon = [...pokemonData].sort((a, b) => (a.name > b.name ? -1 : 1));
            setPokemonData(nameDescendingPokemon);
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
