import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../App';

const Sort = () => {
    const { pokemonData, setPokemonData } = useContext(PokemonContext);

    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        if (sortOrder === 'id-asc') {
            const idAscending = [...pokemonData].sort((a, b) => a.id - b.id);
            setPokemonData(idAscending);
        } else if (sortOrder === 'id-desc') {
            const idDescending = [...pokemonData].sort((a, b) => b.id - a.id);
            setPokemonData(idDescending);
        } else if (sortOrder === 'name-asc') {
            const nameAscending = [...pokemonData].sort((a, b) => (a.name > b.name ? 1 : -1));
            setPokemonData(nameAscending);
        } else if (sortOrder === 'name-desc') {
            const nameDescending = [...pokemonData].sort((a, b) => (a.name > b.name ? -1 : 1));
            setPokemonData(nameDescending);
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
