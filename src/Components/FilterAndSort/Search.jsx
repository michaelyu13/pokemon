import React, { useContext } from 'react';
import { PokemonContext } from '../../App';

const Search = () => {
    const { searchInput, setSearchInput } = useContext(PokemonContext);

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchInput('');
    };

    return (
        <div className="relative">
            <label className="mr-2 font-bold" htmlFor="search">
                Search:
            </label>
            <input
                className="border-styles mx-auto block h-8 w-64 pl-2 pr-10 text-center md:inline md:text-left"
                onChange={handleSearch}
                type="text"
                name="search"
                id="search"
                value={`${searchInput}`}
                placeholder="Pokémon Name"
            />
            <button
                onClick={handleClearSearch}
                className={`${searchInput ? 'visible opacity-100' : 'invisible opacity-0'}
                absolute right-0 top-1 mr-2 flex hidden h-6 w-6 items-center justify-center rounded-full bg-slate-200 transition-colors transition-opacity duration-500 hover:bg-slate-400 md:block`}
                title="Clear Search"
            >
                <span className="mb-px text-white">&times;</span>
            </button>
        </div>
    );
};

export default Search;
