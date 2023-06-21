import React, { useEffect, useRef, useState } from 'react';
import PokemonFilter from './components/FilterAndSort/PokemonFilter';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

export const PokemonContext = React.createContext();

const App = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const sideEffectRanOnceAfterInitialRender = useRef(false);

    useEffect(() => {
        if (sideEffectRanOnceAfterInitialRender.current === false) {
            getApiData();
            sideEffectRanOnceAfterInitialRender.current = true;
        }
    }, []);

    const getApiData = async () => {
        try {
            const response = await axios.get(POKEMON_API_URL);
            getPokemonData(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getPokemonData = async (response) => {
        response.map(async (pokemon) => {
            const result = await axios.get(pokemon.url);

            const data = (data) => {
                data = [...data, result.data];
                data.sort((a, b) => a.id - b.id);
                return data;
            };

            setPokemonData(data);
            setIsLoading(false);
        });
    };

    const PokemonContextValue = {
        pokemonData,
        searchInput,
        setPokemonData,
        setSearchInput,
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
