import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';
import PokemonFilter from './components/FilterAndSort/PokemonFilter';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';
import Header from './components/header';

export const PokemonContext = React.createContext();

const App = () => {
    const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const SORT_BY_ID_ASC_VALUE = 'id-asc';

    const [allPokemon, setAllPokemon] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [sortOrder, setSortOrder] = useState(SORT_BY_ID_ASC_VALUE);
    const [selectedFilterByType, setSelectedFilterByType] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const sideEffectRanOnceAfterInitialRender = useRef(false);

    useEffect(() => {
        if (sideEffectRanOnceAfterInitialRender.current === false) {
            fetchApiData();
            sideEffectRanOnceAfterInitialRender.current = true;
        }
    }, []);

    useEffect(() => {
        if (selectedFilterByType) {
            updateFilteredPokemon();
        } else {
            setPokemonData(allPokemon);
        }
    }, [selectedFilterByType]);

    const fetchApiData = async () => {
        const apiResponse = await axios.get(POKEAPI_URL);

        const pokemonApiData = await Promise.all(
            apiResponse.data.results.map(async (pokemon) => {
                const pokemonApiResponse = await axios.get(pokemon.url);

                return pokemonApiResponse.data;
            })
        );

        setAllPokemon(pokemonApiData);
        setPokemonData(pokemonApiData);
        setIsLoading(false);
    };

    const updateFilteredPokemon = async () => {
        try {
            const filteredPokemon = allPokemon.filter((pokemon) => {
                return pokemon.types.some((type) => type.type.name === selectedFilterByType);
            });

            setPokemonData(filteredPokemon);

            changeSortByValueBackToIdAscending();
        } catch (error) {
            console.log(error);
        }
    };

    const changeSortByValueBackToIdAscending = () => {
        const select = document.querySelector('#sort');
        select.value = SORT_BY_ID_ASC_VALUE;

        setSortOrder(select.value);
    };

    const PokemonContextValue = {
        pokemonData,
        searchInput,
        sortOrder,
        selectedFilterByType,
        setPokemonData,
        setSearchInput,
        setSortOrder,
        setSelectedFilterByType,
        isLoading,
    };

    return (
        <div className="flex min-h-screen flex-col items-center">
            <Header />

            <main className="mx-auto max-w-7xl flex-1 text-center">
                <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                    <PokemonContext.Provider value={PokemonContextValue}>
                        <PokemonFilter />
                        <PokemonList />
                    </PokemonContext.Provider>
                </SkeletonTheme>
            </main>

            <Footer />
        </div>
    );
};

export default App;
