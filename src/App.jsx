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
        try {
            setPokemonData([]);
            setIsLoading(true);

            const response = await axios.get(POKEAPI_URL);

            const pokemonData = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const pokemonResponse = await axios.get(pokemon.url);

                    return pokemonResponse.data;
                })
            );

            if (selectedFilterByType) {
                const filteredPokemon = pokemonData.filter((pokemon) => {
                    return pokemon.types.some((type) => type.type.name === selectedFilterByType);
                });
                setPokemonData(filteredPokemon);
            } else {
                setPokemonData(pokemonData);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
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
        <div className="flex min-h-screen flex-col items-center">
            <header>
                <h1 className="my-8 text-6xl">Pokémon</h1>
            </header>
            <main className="mx-auto max-w-7xl flex-1 text-center">
                <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                    <PokemonContext.Provider value={PokemonContextValue}>
                        <PokemonFilter />
                        <PokemonList />
                    </PokemonContext.Provider>
                </SkeletonTheme>
            </main>
            <footer>
                <p className="mx-4 mb-8 text-center">
                    All Pokémon data and images displayed were fetched from the&nbsp;
                    <a className="underline" href="https://pokeapi.co/" target="_blank">
                        PokeAPI
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
};

export default App;
