import React from 'react';
import PokemonType from './PokemonType';

const Pokemon = ({ pokemon }) => {
    return (
        <div className="flex max-w-2xl flex-col border border-solid border-slate-400 bg-slate-50 py-4 drop-shadow-lg">
            <h2 className="text-2xl text-gray-400">#{pokemon.id}</h2>
            <h2 className="text-2xl capitalize lg:text-3xl">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="" />

            <div className="flex flex-col space-y-2 ">
                {pokemon.types.map((type) => {
                    return <PokemonType key={crypto.randomUUID()} type={type} />;
                })}
            </div>
        </div>
    );
};

export default Pokemon;
