import React, { useContext } from 'react';
import { PokemonContext } from '../App';

const InfoMessage = () => {
    const { pokemonData, searchInput } = useContext(PokemonContext);

    return <>{searchInput ? `Searching for: "${searchInput}"` : `There are ${pokemonData.length} of them.`}</>;
};

export default InfoMessage;
