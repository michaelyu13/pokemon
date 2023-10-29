import { motion } from 'framer-motion';
import React from 'react';
import PokemonType from './PokemonType';

const Pokemon = ({ pokemon }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="border-styles flex w-40 max-w-2xl flex-col bg-slate-50 py-4 drop-shadow-lg lg:w-48"
        >
            <h3 className="text-2xl text-gray-400">#{pokemon.id}</h3>
            <h3 className="text-2xl capitalize">{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt="" />

            <div className="flex flex-col items-center space-y-2">
                {pokemon.types.map((type) => {
                    return <PokemonType key={`${pokemon.id}-${type.type.name}`} type={type} />;
                })}
            </div>
        </motion.div>
    );
};

export default Pokemon;
