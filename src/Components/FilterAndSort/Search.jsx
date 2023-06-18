import React from 'react';

const Search = ({ setSearchInput }) => {
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input
                id="search"
                type="text"
                placeholder="e.g. Pikachu"
                className="ml-2 border border-solid border-slate-400 p-1"
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
