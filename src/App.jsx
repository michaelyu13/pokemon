import React, { useEffect, useRef, useState } from 'react';
import PokemonFilter from './components/FilterAndSort/PokemonFilter';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const PokemonContext = React.createContext();

const App = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedFilterByType, setSelectedFilterByType] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const sideEffectRanOnceAfterInitialRender = useRef(false);

    useEffect(() => {
        if (sideEffectRanOnceAfterInitialRender.current === false) {
            fetchPokeApiData();
            sideEffectRanOnceAfterInitialRender.current = true;
        }
    }, []);

    useEffect(() => {
        if (isLoading === true) return;

        fetchPokeApiData();
    }, [selectedFilterByType]);

    const fetchPokeApiData = async () => {
        setPokemonData([]);
        setIsLoading(true);

        try {
            const response = await axios.get(POKEAPI_URL);

            if (selectedFilterByType) {
                const pokemonData = await Promise.all(
                    response.data.results.map(async (pokemon) => {
                        const pokemonResponse = await axios.get(pokemon.url);

                        return pokemonResponse.data;
                    })
                );
                const filteredPokemon = pokemonData.filter((pokemon) => {
                    return pokemon.types.some((type) => type.type.name === selectedFilterByType);
                });

                setPokemonData(filteredPokemon);
            } else {
                response.data.results.map(async (pokemon) => {
                    const pokemonResponse = await axios.get(pokemon.url);

                    const data = (data) => {
                        data = [...data, pokemonResponse.data];
                        data.sort((a, b) => a.id - b.id);
                        return data;
                    };
                    setPokemonData(data);
                });
            }
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const PokemonContextValue = {
        pokemonData,
        searchInput,
        selectedFilterByType,
        setPokemonData,
        setSearchInput,
        setSelectedFilterByType,
        isLoading,
    };

    return (
        <>
            <header>
                <h1 className="my-8 text-center text-6xl">Pokémon</h1>
            </header>
            <main className="mx-auto max-w-7xl">
                <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                    <PokemonContext.Provider value={PokemonContextValue}>
                        <PokemonFilter />
                        <PokemonList />
                    </PokemonContext.Provider>
                </SkeletonTheme>
            </main>
        </>
    );
};

export default App;
