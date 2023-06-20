import React, { useContext } from 'react';
import { PokemonContext } from '../../App';

const Search = () => {
    const { setSearchInput } = useContext(PokemonContext);

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <label className="mr-2 font-bold" htmlFor="search">
                Search:
            </label>
            <input
                className="border-styles h-8 w-64 px-2"
                onChange={handleSearch}
                type="text"
                name="search"
                id="search"
                placeholder="Pokémon Name"
            />
        </div>
    );
};

export default Search;
