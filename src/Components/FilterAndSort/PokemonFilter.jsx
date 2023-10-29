import React from 'react';
import Filter from './Filter';
import Search from './Search';
import Sort from './Sort';

const PokemonFilter = () => {
    return (
        <section className="border-styles mx-4 mb-4 bg-slate-50 p-4">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:justify-between">
                <Search />
                <Sort />
            </div>

            <div>
                <Filter />
            </div>
        </section>
    );
};

export default PokemonFilter;
